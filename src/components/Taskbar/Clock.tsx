import * as React from 'react';
import './Clock.scss';
 
export interface ClockState {
    time: String | null
}
 
class Clock extends React.Component<{}, ClockState> {
    state = {
        time: this.getTime()
    }

    private getTime() {
        const now = new Date();
        let hours: Number | String = now.getHours();
        let minutes: Number | String = now.getMinutes();

        hours = hours < 10 ? `0${hours}` : hours;
        minutes = minutes < 10 ? `0${minutes}` : minutes;
        
        return `${hours}:${minutes}`;
    }

    private tickClock() {
        this.setState({
            time: this.getTime()
        });
    }
    
    componentDidMount() {
        setInterval(() => this.tickClock(), 1000);
    }

    public render() { 
        return (
            <div className="clock">{this.state.time}</div>
        );
    }
}
 
export default Clock;