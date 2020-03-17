import React, { Component } from 'react';
import IssuesList from '../IssuesList/IssuesList';
import Axios from 'axios';

const githubProject: string = 'IBM-Blockchain/blockchain-vscode-extension';

// Github URLs
const issuesStatusApiUrl: string = 'https://api.github.com/repos/' + githubProject + '/issues?labels=status';

interface StatusState {
    issues: any;
    error: any;
}

class StatusList extends Component<{}, StatusState> {

    constructor(props: any) {
        super(props);
        this.state = {
            issues: undefined,
            error: undefined
        };

        this.refreshIssues = this.refreshIssues.bind(this);
    }

    async componentDidMount(): Promise<void> {
        await this.refreshIssues();
    }

    async refreshIssues(): Promise<void> {

        const response: any = await Axios.get(issuesStatusApiUrl);
        if (response) {
            this.setState({
                issues : response.data
            });
        } else {
            this.setState({
                error : 'Cannot load incidents from Github, sorry.'
            });
        }
    }

    render(): JSX.Element {
        if (this.state.issues || this.state.error) {
            return (
                <div>
                    <IssuesList
                        key='issues'
                        issues={this.state.issues}
                        error={this.state.error}
                        refreshIssues={this.refreshIssues}
                        title='Current Incidents'
                        issueLabel='status'>
                    </IssuesList>
                </div>
            );
        } else {
            return <></>;
        }
    }
}

export default StatusList;
