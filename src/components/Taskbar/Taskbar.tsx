import * as React from 'react';
import Clock from './Clock';
import Tab from '../Tab/Tab';
import './Taskbar.scss';

export interface TaskbarProps {

}
 
export interface TaskbarState {
    
}
 
class Taskbar extends React.Component<TaskbarProps, TaskbarState> {
    state = {}
    render() { 
        return (
            <div className="taskbar">
                <Tab name="messanger" active={true}/>
                <Clock />
            </div>
        );
    }
}
 
export default Taskbar;