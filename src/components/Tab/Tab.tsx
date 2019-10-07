import * as React from 'react';
import './Tab.scss';

export interface TabProps {
    name: String,
    active: Boolean
}
 
export interface TabState {
    
}
 
class Tab extends React.Component<TabProps, TabState> {
    render() { 
        return (
            <div className={`tab ${this.props.active ? "tab_active" : "tab_inactive"}`}>
                {this.props.name}
                <div className={`tab__close ${this.props.active ? "tab__close_active" : "tab__close_inactive"}`} />
            </div>
        );
    }
}
 
export default Tab;