import * as React from 'react';
import './Workplace.scss';

import Taskbar from './Taskbar/Taskbar';
import Window from './Window/Window';
import Startbar from './Startbar/Startbar';

export interface WorkplaceProps {
    
}
 
export interface WorkplaceState {
    
}
 
class Workplace extends React.Component<WorkplaceProps, WorkplaceState> {
    state = {}
    render() { 
        return (
            <div className="workplace">
                <Taskbar />
                <Window />
                <Startbar />
            </div>
        );
    }
}
 
export default Workplace;