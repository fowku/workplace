import * as React from 'react';
import { observer } from 'mobx-react';
import './Window.scss';

import startbarStore from '../../stores/startbarStore';

export interface WindowProps {
    isOpened: boolean,
    windowName: string
}

export interface WindowState {
    isDragging: Boolean,
    x: number,
    y: number
}

@observer
class Window extends React.Component<WindowProps, WindowState> {
    state = {
        isDragging: false,
        x: window.screen.width / 2 - 250, // Bad, should be calculated runtime
        y: window.screen.height / 2 - 180
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Handles mousedown event
     * @param event - synthetic event
     */
    handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);

        this.setState({
            isDragging: true
        });

        event.stopPropagation();
        event.preventDefault();
    };

    /**
     * Handles mousemove event
     * @param event - synthetic event
     */
    handleMouseMove = (event: MouseEvent) => {
        this.setState(prevState => ({
            x: prevState.x + event.movementX,
            y: prevState.y + event.movementY
        }));

        event.stopPropagation();
        event.preventDefault();
    }

    /**
     * Handles mouseup event
     * @param event - synthetic event
     */
    handleMouseUp = (event: MouseEvent) => {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);

        this.setState({
            isDragging: false
        });

        event.stopPropagation();
        event.preventDefault();
    }

    render() {
        return (
            <div style={{
                left: `${this.state.x}px`,
                top: `${this.state.y}px`,
                display: this.props.isOpened ? 'block' : 'none'
            }} 
            className={`window ${this.state.isDragging ? 'window_is-dragging' : ''}`}>
                <div onMouseDown={this.handleMouseDown} className="window__header">
                    <div className={`window__icon window__icon_${this.props.windowName}`} />
                    <div className="window__name">{this.props.windowName}</div>
                    <button className="window__button window__button_close" onClick={() => startbarStore.toggleApplication(this.props.windowName)} />
                </div>
                <div className="window__content"></div>
            </div>
        );
    }
}

export default Window;