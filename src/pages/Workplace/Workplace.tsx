// libs
import * as React from 'react';
import { observer } from 'mobx-react';

// styles
import './Workplace.scss';

// components
import Taskbar from '../../components/Taskbar/Taskbar';
import Window from '../../components/Window/Window';
import Startbar from '../../components/Startbar/Startbar';

// stores
import appsStore from '../../stores/appsStore';

// enums
import { WindowsEnum } from '../../components/Window/enum/windows.enum';

@observer
class Workplace extends React.Component<{}, {}> {
  render(): JSX.Element {
    const playerStatus = appsStore.appsStatuses.get(WindowsEnum.PLAYER);
    const browserStatus = appsStore.appsStatuses.get(WindowsEnum.BROWSER);

    return (
      <div className="workplace">
        <Taskbar />
        {playerStatus && (
          <Window windowName={WindowsEnum.PLAYER} width={800} height={500} isOpened={playerStatus.isOpen} />
        )}
        {browserStatus && <Window windowName={WindowsEnum.BROWSER} isOpened={browserStatus.isOpen} />}
        {/* <Window
          windowName={WindowsEnum.MESSANGER}
          isOpened={appsStore.appsStatuses.get(WindowsEnum.MESSANGER).isOpen}
        />
        <Window windowName={WindowsEnum.NOTES} isOpened={appsStore.appsStatuses.get(WindowsEnum.NOTES).isOpen} />
        <Window windowName={WindowsEnum.TERMINAL} isOpened={appsStore.appsStatuses.get(WindowsEnum.TERMINAL).isOpen} />
        <Window windowName={WindowsEnum.BIN} isOpened={appsStore.appsStatuses.get(WindowsEnum.BIN).isOpen} /> */}
        <Startbar />
      </div>
    );
  }
}

export default Workplace;
