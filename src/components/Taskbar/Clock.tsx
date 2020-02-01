import * as React from 'react';
import './Clock.scss';

export interface ClockState {
  time: string | null;
}

class Clock extends React.Component<{}, ClockState> {
  state = {
    time: this.getTime(),
  };

  private getTime(): string {
    const now = new Date();
    let hours: number | string = now.getHours();
    let minutes: number | string = now.getMinutes();

    hours = hours < 10 ? `0${hours}` : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${minutes}`;
  }

  private tickClock(): void {
    this.setState({
      time: this.getTime(),
    });
  }

  componentDidMount(): void {
    setInterval(() => this.tickClock(), 1000);
  }

  public render(): JSX.Element {
    return <div className="clock">{this.state.time}</div>;
  }
}

export default Clock;
