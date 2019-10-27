import * as React from 'react';
import './Window.scss';

export interface WindowProps {

}

export interface WindowState {
    isDragging: Boolean,
    x: Number,
    y: Number
}

class Window extends React.Component<WindowProps, WindowState> {
    state = {
        isDragging: false,
        x: 0,
        y: 0
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
    }

    /**
     * Handles mousedown event
     * 
     * @param event - synthetic event
     */
    handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
        console.log('down', event);
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
     * 
     * @param event - synthetic event
     */
    handleMouseMove = (event: MouseEvent) => {
        console.log('move', event);

        this.setState({
            x: event.clientX,
            y: event.clientY
        });

        event.stopPropagation();
        event.preventDefault();
    }

    /**
     * Handles mouseup event
     * 
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
            <div style={{left: `${this.state.x}px`, top: `${this.state.y}px`}} className="window">
                <div onMouseDown={this.handleMouseDown} className="window__header" />
                <div className="window__content"></div>
            </div>
        );
    }
}

export default Window;