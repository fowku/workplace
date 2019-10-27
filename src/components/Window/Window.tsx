import * as React from 'react';
import './Window.scss';

export interface WindowProps {

}

export interface WindowState {
    isDragging: Boolean,
    x: Number,
    y: Number
    // originalX: Number,
    // originalY: Number,

    // translateX: Number,
    // translateY: Number,

    // lastTranslateX: Number,
    // lastTranslateY: Number
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

    handleMouseDown = (event: any) => {
        console.log('down', event);
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);

        this.setState({
            isDragging: true
        });
    };

    handleMouseMove = (event: any) => {
        console.log('move', event);

        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }

    handleMouseUp = (event: any) => {
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);

        this.setState({
            isDragging: false
        })
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