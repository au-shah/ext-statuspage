import React, { Component } from 'react';
import Axios from 'axios';

const githubProject: string = 'IBM-Blockchain/blockchain-vscode-extension';

// Github URLs
const currentReleaseApiUrl: string = 'https://api.github.com/repos/' + githubProject + '/releases/latest';

interface VersionState {
    currentVersion: string;
}

class CurrentVersion extends Component<{}, VersionState> {

    constructor(props: any) {
        super(props);
        this.state = {
            currentVersion: ''
        };
    }

    async componentDidMount(): Promise<void> {
        const response: any = await Axios.get(currentReleaseApiUrl);
        if (response) {
            this.setState({
                currentVersion : response.data.name
            });
        }
    }

    render(): JSX.Element {
        if (this.state.currentVersion.length !== 0) {
            return(
                <p>
                    {'Latest version: ' + this.state.currentVersion}
                </p>
            );
        } else {
            return <div/>;
        }
    }
}

export default CurrentVersion;
