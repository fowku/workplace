import * as React from 'react';
import Clock from './Clock';
import Tab from '../Tab/Tab';
import './Taskbar.scss';

class Taskbar extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div className="taskbar">
        <div className="taskbar__tabs">
          <Tab name="messanger" active={true} />
          <Tab name="notes" active={true} />
          <Tab name="messanger" active={true} />
          <Tab name="player" active={false} />
          <Tab name="messanger" active={false} />
          {/* <Tab name="messanger" active={false} />
                    <Tab name="messanger" active={false} />
                    <Tab name="messanger" active={false} />
                    <Tab name="messanger" active={false} />
                    <Tab name="messanger" active={false} />
                    <Tab name="messanger" active={false} />
                    <Tab name="messanger" active={false} /> */}
        </div>
        <div className="taskbar__end" />
        <Clock />
      </div>
    );
  }
}

export default Taskbar;
