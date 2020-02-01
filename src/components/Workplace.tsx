import * as React from 'react';
import './Workplace.scss';
import { observer } from 'mobx-react';

import Taskbar from './Taskbar/Taskbar';
import Window from './Window/Window';
import Startbar from './Startbar/Startbar';

import startbarStore from '../stores/startbarStore';

@observer
class Workplace extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <div className="workplace">
        <Taskbar />
        <Window windowName="player" isOpened={startbarStore.playerIsOpen} />
        <Window windowName="browser" isOpened={startbarStore.browserIsOpen} />
        <Window windowName="messanger" isOpened={startbarStore.messangerIsOpen} />
        <Window windowName="notes" isOpened={startbarStore.notesIsOpen} />
        <Window windowName="terminal" isOpened={startbarStore.terminalIsOpen} />
        <Window windowName="bin" isOpened={startbarStore.binIsOpen} />
        <Startbar />
      </div>
    );
  }
}

export default Workplace;
