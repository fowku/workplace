import * as React from 'react';
import './Workplace.scss';
import { observer } from 'mobx-react';

import Taskbar from './Taskbar/Taskbar';
import Window from './Window/Window';
import Startbar from './Startbar/Startbar';

import StartbarStore from '../stores/startbarStore';

@observer
class Workplace extends React.Component<{}, {}> {
    render() {
        return (
            <div className="workplace">
                <Taskbar />
                <Window windowName="player" isOpened={StartbarStore.playerIsOpen} />
                <Window windowName="browser" isOpened={StartbarStore.browserIsOpen} />
                <Window windowName="messanger" isOpened={StartbarStore.messangerIsOpen} />
                <Window windowName="notes" isOpened={StartbarStore.notesIsOpen} />
                <Window windowName="terminal" isOpened={StartbarStore.terminalIsOpen} />
                <Window windowName="bin" isOpened={StartbarStore.binIsOpen} />
                <Startbar />
            </div>
        );
    }
}

export default Workplace;