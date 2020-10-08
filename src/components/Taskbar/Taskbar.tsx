// libs
import * as React from 'react';

// components
import Clock from './Clock';
import Tab from '../Tab/Tab';

// styles
import './Taskbar.scss';

// stores
import appsStore from '../../stores/appsStore';

// enums
import { WindowsEnum } from '../Window/enum/windows.enum';

// types
import { AppStatus } from '../../stores/appsStore';

// TODO: fix styles (horizontal scroll)
class Taskbar extends React.Component<{}, {}> {
  render(): JSX.Element {
    const apps: Array<{ name: WindowsEnum; status: AppStatus }> = [];

    appsStore.appsStatuses.forEach((value: AppStatus, key: WindowsEnum) => {
      apps.push({
        name: key,
        status: value,
      });
    });

    return (
      <div className="taskbar">
        <div className="taskbar__tabs">
          {apps.map(app =>
            app.status.isOpen ? <Tab name={app.name} active={app.status.isActive} key={app.name} /> : null,
          )}
        </div>
        <div className="taskbar__end" />
        <Clock />
      </div>
    );
  }
}

export default Taskbar;
