import * as React from 'react';
import StartIcon from '../StartIcon/StratIcon';
import './Startbar.scss';
 
class Startbar extends React.Component<{}, {}> {
    // state = { :  }
    render() { 
        return (
            <div className="startbar">
                <StartIcon appName="player" />
                <StartIcon appName="browser" />
                <StartIcon appName="messanger" />
                <StartIcon appName="notes" />
                <StartIcon appName="terminal" />
                <StartIcon appName="github" />
                <StartIcon appName="bin" />
            </div>
        );
    }
}
 
export default Startbar;