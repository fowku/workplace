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
    const tabs: Array<{ key: WindowsEnum; value: AppStatus }> = [];

    appsStore.appsStatuses.forEach((value: AppStatus, key: WindowsEnum) => {
      tabs.push({
        key,
        value,
      });
    });

    return (
      <div className="taskbar">
        <div className="taskbar__tabs">
          {tabs.map(tab =>
            tab.value.isOpen ? <Tab name={tab.key} active={tab.value.isActive} key={tab.key} /> : null,
          )}
        </div>
        <div className="taskbar__end" />
        <Clock />
      </div>
    );
  }
}

export default Taskbar;
