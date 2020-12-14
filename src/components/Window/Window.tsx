// libs
import * as React from 'react';
import { observer } from 'mobx-react';

// styles
import './Window.scss';

// stores
import appsStore from '../../stores/appsStore';

// enums
import { WindowsEnum } from './enum/windows.enum';

interface WindowProps {
  isOpened: boolean;
  isActive: boolean;
  windowName: WindowsEnum;
  width?: number;
  height?: number;
}

interface WindowState {
  isDragging: boolean;
  zIndex: number;
  fullscreen: boolean;
  fullscreenIsToggling: boolean;
  isMinimizing: boolean;
  x: number;
  y: number;
}

// TODO: pass a taksbar refs for height computing
const TASKBAR_HEIGHT = 52;
const STARTBAR_HEIGHT = 77;

@observer
class Window extends React.Component<WindowProps, WindowState> {
  public readonly DEFAULT_WIDTH = 500;
  public readonly DEFAULT_HEIGHT = 360;

  state = {
    isDragging: false,
    x: window.innerWidth / 2 - (this.props.width ? this.props.width : this.DEFAULT_WIDTH) / 2,
    y: window.innerHeight / 2 - (this.props.height ? this.props.height : this.DEFAULT_HEIGHT) / 2,
    zIndex: appsStore.highestZOrder,
    fullscreen: false,
    fullscreenIsToggling: false,
    isMinimizing: false,
  };

  componentWillUnmount(): void {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  componentDidUpdate(prevProps: WindowProps): void {
    if (!prevProps.isOpened && this.props.isOpened) {
      this.bringToFront();
    }

    if (!prevProps.isActive && this.props.isActive) {
      this.setState({
        isMinimizing: true,
      });

      setTimeout(() => this.setState({ isMinimizing: false }), 300);
    }
  }

  private windowRef = React.createRef<HTMLDivElement>();

  /**
   * Handles mousedown event
   * @param event - synthetic event
   */
  private handleMouseDown = (event: React.MouseEvent<HTMLDivElement>): void => {
    window.addEventListener('mousemove', this.handleMouseMove);
    window.addEventListener('mouseup', this.handleMouseUp);

    this.setState({
      isDragging: true,
      zIndex: appsStore.highestZOrder,
    });

    event.stopPropagation();
    event.preventDefault();
  };

  /**
   * Handles click event
   */
  private handleWindowClick = (): void => {
    this.bringToFront();
  };

  /**
   * Brings widow to front
   */
  private bringToFront = (): void => {
    appsStore.incrementZOrder();

    this.setState({
      zIndex: appsStore.highestZOrder,
    });
  };

  /**
   * Handles mousemove event
   * @param event - synthetic event
   */
  private handleMouseMove = (event: MouseEvent): void => {
    this.setState(prevState => {
      const topEdge = TASKBAR_HEIGHT;
      const leftEdge = 0;
      const rightEdge = window.innerWidth - (this.props.width ? this.props.width : this.DEFAULT_WIDTH);
      const bottomEdge = window.innerHeight - (this.props.height ? this.props.height : this.DEFAULT_HEIGHT);

      let x = prevState.x + event.movementX;
      let y = prevState.y + event.movementY;

      if (x < leftEdge) {
        x = leftEdge;
      }

      if (x > rightEdge) {
        x = rightEdge;
      }

      if (y < topEdge) {
        y = topEdge;
      }

      if (y > bottomEdge) {
        y = bottomEdge;
      }

      return {
        x: x,
        y: y,
      };
    });

    event.stopPropagation();
    event.preventDefault();
  };

  /**
   * Handles mouseup event
   * @param event - synthetic event
   */
  private handleMouseUp = (event: MouseEvent): void => {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);

    this.setState({
      isDragging: false,
    });

    event.stopPropagation();
    event.preventDefault();
  };

  /**
   * Turn on/off window fulscreen
   */
  private toggleFullscreen = (): void => {
    this.setState(prevState => ({
      fullscreen: !prevState.fullscreen,
      fullscreenIsToggling: true,
    }));

    setTimeout(() => this.setState({ fullscreenIsToggling: false }), 300);
  };

  /**
   * Minimize window
   * @param appName application name
   */
  private minimizeWindow = (appName: WindowsEnum): void => {
    this.setState({
      isMinimizing: true,
    });
    appsStore.disableApplication(appName);

    setTimeout(() => {
      this.setState({ isMinimizing: false });
    }, 300);
  };

  render(): JSX.Element {
    let width, height;
    let left, top;

    if (this.state.fullscreen) {
      width = window.innerWidth;
      height = window.innerHeight - TASKBAR_HEIGHT - STARTBAR_HEIGHT;
    } else {
      width = this.props.width ? this.props.width : this.DEFAULT_WIDTH;
      height = this.props.height ? this.props.height : this.DEFAULT_HEIGHT;
    }

    if (!this.props.isActive) {
      left = this.state.x;
      top = -2000;
    } else {
      if (this.state.fullscreen) {
        left = 0;
        top = TASKBAR_HEIGHT;
      } else {
        left = this.state.x;
        top = this.state.y;
      }
    }

    return (
      <div
        style={{
          left: `${left}px`,
          top: `${top}px`,
          display: this.props.isOpened ? 'block' : 'none',
          width: `${width}px`,
          height: `${height}px`,
          zIndex: this.state.zIndex,
          transition: this.state.fullscreenIsToggling || this.state.isMinimizing ? 'all 0.3s ease-in-out' : undefined,
        }}
        onClick={this.handleWindowClick}
        className={`window ${this.state.isDragging ? 'window_is-dragging' : ''}`}
        ref={this.windowRef}
      >
        <div onMouseDown={this.handleMouseDown} className="window__header">
          <div className={`window__icon window__icon_${this.props.windowName}`} />
          <div className="window__name">{this.props.windowName}</div>
          <div className="window__buttons">
            <button className="window__button window__button_maximize" onClick={this.toggleFullscreen} />
            <button
              className="window__button window__button_minimize"
              onClick={(): void => this.minimizeWindow(this.props.windowName)}
            />
            <button
              className="window__button window__button_close"
              onClick={(): void => appsStore.closeApplication(this.props.windowName)}
            />
          </div>
        </div>
        <div className="window__content">{this.props.children}</div>
      </div>
    );
  }
}

export default Window;
