import * as React from 'react';
import StartIcon from '../StartIcon/StartIcon';
import './Startbar.scss';

class Startbar extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div className="startbar">
        <StartIcon appName="player" />
        <StartIcon appName="browser" />
        <StartIcon appName="messanger" />
        <StartIcon appName="notes" />
        <StartIcon appName="terminal" />
        <StartIcon appName="github" />
        <StartIcon appName="bin" />
      </div>
    );
  }
}

export default Startbar;
