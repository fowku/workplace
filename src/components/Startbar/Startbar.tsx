import * as React from 'react';
import './Startbar.scss';

export interface StartbarProps {
    
}
 
export interface StartbarState {
    
}
 
class Startbar extends React.Component<StartbarProps, StartbarState> {
    // state = { :  }
    render() { 
        return (
            <div className="startbar" />
        );
    }
}
 
export default Startbar;