import React, { Component } from 'react';
import logo from './icon_light.svg';
import StatusList from './components/StatusList';
import UpcomingList from './components/UpcomingList';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="container">
            < div className="row">
                <div>
                    <h1 className="text-muted"><img className="logo" src={logo} alt='IBM Blockchain Logo'></img> IBM Blockchain Platform - Status Page</h1>
                    <hr />
                    <p className="lead">
                        This service status page is updated every 10 seconds. Below you can find the latest incidents.
                    </p>
                    <StatusList></StatusList>
                    <UpcomingList></UpcomingList>
                </div>
            </div>
        </div>
        )
    }
}

export default App;
