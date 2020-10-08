// libs
import * as React from 'react';
import { observer } from 'mobx-react';

// styles
import './Workplace.scss';

// components
import Taskbar from '../../components/Taskbar/Taskbar';
import Window from '../../components/Window/Window';
import Startbar from '../../components/Startbar/Startbar';
import Browser from '../../components/Browser/Browser';
import Terminal from '../../components/Terminal/Terminal';

// stores
import appsStore from '../../stores/appsStore';

// enums
import { WindowsEnum } from '../../components/Window/enum/windows.enum';

@observer
class Workplace extends React.Component<{}, {}> {
  taskbarRef = React.createRef<Taskbar>();
  startbarRef = React.createRef<Startbar>();

  render(): JSX.Element {
    return (
      <div className="workplace">
        <Taskbar ref={this.taskbarRef} />

        <Window
          windowName={WindowsEnum.PLAYER}
          width={800}
          height={500}
          isOpened={appsStore.isAppOpen(WindowsEnum.PLAYER)}
          isActive={appsStore.isAppActive(WindowsEnum.PLAYER)}
        />

        <Window
          windowName={WindowsEnum.BROWSER}
          isOpened={appsStore.isAppOpen(WindowsEnum.BROWSER)}
          isActive={appsStore.isAppActive(WindowsEnum.BROWSER)}
        >
          <Browser />
        </Window>

        <Window
          windowName={WindowsEnum.MESSANGER}
          isOpened={appsStore.isAppOpen(WindowsEnum.MESSANGER)}
          isActive={appsStore.isAppActive(WindowsEnum.MESSANGER)}
        />

        <Window
          windowName={WindowsEnum.NOTES}
          isOpened={appsStore.isAppOpen(WindowsEnum.NOTES)}
          isActive={appsStore.isAppActive(WindowsEnum.NOTES)}
        />

        <Window
          windowName={WindowsEnum.TERMINAL}
          isOpened={appsStore.isAppOpen(WindowsEnum.TERMINAL)}
          isActive={appsStore.isAppActive(WindowsEnum.TERMINAL)}
        >
          <Terminal />
        </Window>

        <Window
          windowName={WindowsEnum.BIN}
          isOpened={appsStore.isAppOpen(WindowsEnum.BIN)}
          isActive={appsStore.isAppActive(WindowsEnum.BIN)}
        />

        <Startbar ref={this.startbarRef} />
      </div>
    );
  }
}

export default Workplace;
