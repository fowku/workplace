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
  isOpened: boolean | undefined;
  windowName: WindowsEnum;
  width?: number;
  height?: number;
}

interface WindowState {
  isDragging: boolean;
  zIndex: number;
  x: number;
  y: number;
}

const DEFAULT_WIDTH = 500;
const DEFAULT_HEIGHT = 360;

@observer
class Window extends React.Component<WindowProps, WindowState> {
  state = {
    isDragging: false,
    x: window.innerWidth / 2 - (this.props.width ? this.props.width : DEFAULT_WIDTH) / 2,
    y: window.innerHeight / 2 - (this.props.height ? this.props.height : DEFAULT_HEIGHT) / 2,
    zIndex: appsStore.highestZOrder,
  };

  componentWillUnmount(): void {
    window.removeEventListener('mousemove', this.handleMouseMove);
    window.removeEventListener('mouseup', this.handleMouseUp);
  }

  componentDidUpdate(prevProps: WindowProps): void {
    if (!prevProps.isOpened && this.props.isOpened) {
      this.bringToFront();
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
      // TODO: pass a taksbar and startbar refs for height computing
      const topEdge = 52;
      const leftEdge = 0;
      const rightEdge = window.innerWidth - (this.props.width ? this.props.width : DEFAULT_WIDTH);
      const bottomEdge = window.innerHeight - (this.props.height ? this.props.height : DEFAULT_HEIGHT);

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

  render(): JSX.Element {
    return (
      <div
        style={{
          left: `${this.state.x}px`,
          top: `${this.state.y}px`,
          display: this.props.isOpened ? 'block' : 'none',
          width: `${this.props.width ? this.props.width : null}px`,
          height: `${this.props.height ? this.props.height : null}px`,
          zIndex: this.state.zIndex,
        }}
        onClick={this.handleWindowClick}
        className={`window ${this.state.isDragging ? 'window_is-dragging' : ''}`}
        ref={this.windowRef}
      >
        <div onMouseDown={this.handleMouseDown} className="window__header">
          <div className={`window__icon window__icon_${this.props.windowName}`} />
          <div className="window__name">{this.props.windowName}</div>
          <div className="window__buttons">
            <button
              className="window__button window__button_maximize"
              onClick={(): void => appsStore.closeApplication(this.props.windowName)}
            />
            <button
              className="window__button window__button_minimize"
              onClick={(): void => appsStore.closeApplication(this.props.windowName)}
            />
            <button
              className="window__button window__button_close"
              onClick={(): void => appsStore.closeApplication(this.props.windowName)}
            />
          </div>
        </div>
        <div className="window__content"></div>
      </div>
    );
  }
}

export default Window;
