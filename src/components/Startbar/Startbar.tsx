// libs
import * as React from 'react';

// components
import StartIcon from '../StartIcon/StartIcon';

// styles
import './Startbar.scss';

// enums
import { WindowsEnum } from '../Window/enum/windows.enum';

class Startbar extends React.Component<{}, {}> {
  public render(): JSX.Element {
    return (
      <div className="startbar">
        <StartIcon appName={WindowsEnum.PLAYER} />
        <StartIcon appName={WindowsEnum.BROWSER} />
        <StartIcon appName={WindowsEnum.MESSANGER} />
        <StartIcon appName={WindowsEnum.NOTES} />
        <StartIcon appName={WindowsEnum.TERMINAL} />
        <StartIcon appName={WindowsEnum.BIN} />
      </div>
    );
  }
}

export default Startbar;
