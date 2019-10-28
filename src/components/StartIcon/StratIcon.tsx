import * as React from 'react';
import './StartIcon.scss';

export interface StartIconProps {
    appName: string
}
 
export interface StartIconState {
    
}
 
class StartIcon extends React.Component<StartIconProps, StartIconState> {
    state = {};

    openApp = () => {
        
    }

    render() { 
        return (
            <div onClick={this.openApp} className={`start-icon start-icon_${this.props.appName}`} />
        );
    }
}
 
export default StartIcon;