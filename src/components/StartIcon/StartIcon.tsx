// libs
import * as React from 'react';
import { observer } from 'mobx-react';

// stores
import appsStore from '../../stores/appsStore';

// styles
import './StartIcon.scss';

// enums
import { WindowsEnum } from '../Window/enum/windows.enum';

export interface StartIconProps {
  appName: WindowsEnum;
}

@observer
class StartIcon extends React.Component<StartIconProps, {}> {
  render(): JSX.Element {
    return (
      <div
        onClick={(): void => appsStore.openApplication(this.props.appName)}
        className={`start-icon start-icon_${this.props.appName}`}
      />
    );
  }
}

export default StartIcon;
