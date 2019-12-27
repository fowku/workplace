import * as React from 'react';
import { observer } from 'mobx-react';
import StartbarStore from '../../stores/startbarStore';
import './StartIcon.scss';

export interface StartIconProps {
    appName: string
}
 
@observer
class StartIcon extends React.Component<StartIconProps, {}> {
    state = {};

    render() { 
        return (
            <div onClick={() => StartbarStore.toggleApplication(this.props.appName)} className={`start-icon start-icon_${this.props.appName}`} />
        );
    }
}
 
export default StartIcon;