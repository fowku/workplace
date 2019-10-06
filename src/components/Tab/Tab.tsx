import * as React from 'react';
import './Tab.scss';

export interface TabProps {
    name: String | null,
    active: Boolean | null
}
 
export interface TabState {
    
}
 
class Tab extends React.Component<TabProps, TabState> {
    render() { 
        return (
            <div className={`tab ${this.props.active ? "tab_enabled" : "tab_disabled"}`}>
                {this.props.name}
            </div>
        );
    }
}
 
export default Tab;