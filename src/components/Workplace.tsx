import * as React from 'react';
import './Workplace.scss';

import Taskbar from './Taskbar/Taskbar';

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
            </div>
        );
    }
}
 
export default Workplace;