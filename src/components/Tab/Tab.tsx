// libs
import * as React from 'react';

// styles
import './Tab.scss';

// enums
import { WindowsEnum } from '../Window/enum/windows.enum';

// stores
import appsStore from '../../stores/appsStore';

export interface TabProps {
  name: WindowsEnum;
  active: boolean;
}

class Tab extends React.Component<TabProps, {}> {
  render(): JSX.Element {
    return (
      <div
        onClick={(): void => appsStore.activateApplication(this.props.name)}
        className={`tab ${this.props.active ? 'tab_active' : 'tab_inactive'}`}
      >
        {this.props.name}
        <div
          onClick={(): void => appsStore.closeApplication(this.props.name)}
          className={`tab__close ${this.props.active ? 'tab__close_active' : 'tab__close_inactive'}`}
        />
      </div>
    );
  }
}

export default Tab;
