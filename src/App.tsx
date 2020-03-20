import React, { Component } from 'react';
import StatusList from './components/StatusList/StatusList';
import UpcomingList from './components/UpcomingList/UpcomingList';
import './App.scss';
import CurrentVersion from './components/CurrentVersion/CurrentVersion';

class App extends Component {
    render(): JSX.Element {
        return (
            <div className='app-container'>
                <div>
                    <p className='status'>Status</p>
                    <h1>IBM Blockchain Platform Extension for VS Code</h1>
                    <CurrentVersion/>
                    <p className='description'>Check this page for information on any current incidents effecting the latest version of the IBM Blockchain Platform extension for Visual Studio Code, as well as planned content for the next release.</p>
                </div>
                <div className='div-width'>
                    <StatusList></StatusList>
                </div>

                <div className='div-width'>
                    <UpcomingList></UpcomingList>
                </div>
            </div>
        );
    }
}

export default App;
