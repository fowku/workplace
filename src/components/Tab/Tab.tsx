import * as React from 'react';
import './Tab.scss';

export interface TabProps {
  name: string;
  active: boolean;
}

class Tab extends React.Component<TabProps, {}> {
  render(): JSX.Element {
    return (
      <div className={`tab ${this.props.active ? 'tab_active' : 'tab_inactive'}`}>
        {this.props.name}
        <div className={`tab__close ${this.props.active ? 'tab__close_active' : 'tab__close_inactive'}`} />
      </div>
    );
  }
}

export default Tab;
