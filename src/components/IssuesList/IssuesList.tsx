import 'bootstrap/scss/bootstrap.scss';
import 'font-awesome/scss/font-awesome.scss';
import React, { Component } from 'react';
import './IssuesList.scss';

const githubProject: string = 'IBM-Blockchain/blockchain-vscode-extension';

// Github URLs
const issuesHtmlUrl: string = 'https://github.com/' + githubProject + '/issues?q=';
const newIssueUrl: string = 'https://github.com/' + githubProject + '/issues/new';

interface IssueProps {
    issues?: any;
    error?: any;
    refreshIssues?: any;
    title?: any;
    issueLabel?: any;
    newestMilestone?: any;
    milestoneNumber?: any;
}

class IssuesList extends Component<IssueProps, {}> {
    public getLabel(issue: any): any {
        if (issue.milestone) {
            let labelJSX: any;

            const issueLabels: any = issue.labels;
            let bug: boolean = false;
            issueLabels.map((label: any) => {
                if (label.name === 'bug') {
                    bug = true;
                }
            });

            if (bug) {
                labelJSX = (
                <h3 className='label bg-bug'> {'bug'}
                </h3>
                );
            } else {
                labelJSX = (
                <h3 className='label bg-feature'> {'feature'}
                </h3>
                );
            }
            return labelJSX;

        } else {
            return '';
        }
    }

    public render(): JSX.Element {
        let issueItems: any = (
            <p className='alert alert-info' key='info'>Please wait, loading status information</p>
        );
        if (this.props.error) {
            issueItems = (
                <p className='alert alert-danger' key='error'>{this.props.error}</p>
            );
        } else if (this.props.issues !== undefined) {
            issueItems = this.props.issues.map((issue: any) => {
                const creationDate: Date = new Date(issue.created_at);
                const updateDate: Date = new Date(issue.updated_at);
                let updateOrCloseDate: string = 'Updated: ' + updateDate.toLocaleDateString();
                let className: string = 'panel-danger';
                if (issue.state === 'closed') {
                    className = 'panel-success';
                    updateOrCloseDate = 'Resolved: ' + updateDate.toLocaleDateString();
                }

                return (
                    <div className={'panel ' + className}>
                        <div className='panel-heading'>
                            <h3 className='panel-title'>
                                {(issue.state === 'closed' ? 'RESOLVED: ' : '') + issue.title + ' (#' + issue.number + ')'}
                            </h3>
                            {this.getLabel(issue)}
                        </div>
                        <div className='panel-body'>
                            <p>
                                <span>{'Reported: ' + creationDate.toLocaleDateString()}</span>
                                <span className='float-right'>{updateOrCloseDate}</span>
                            </p>
                            <hr className='hr'></hr>
                            <p>
                                <a href={issue.html_url}>{'View on GitHub (' + issue.comments + ' comments so far)'}</a>
                            </p>
                        </div>
                    </div>
                );
            });
            if (issueItems.length === 0) {
                if (this.props.newestMilestone) {
                    issueItems = (
                        <p className='alert alert-danger'>
                            {'No completed issues!'}
                        </p>
                    );
                } else {
                    issueItems = (
                        <p className='alert alert-success'>
                            {'No incidents found!'}
                        </p>
                    );
                }
            }
        }

        let milestoneUrl: string = 'https://github.com/' + githubProject + '/milestone/';
        milestoneUrl += this.props.milestoneNumber;
        const seeMilestoneLink: any = (this.props.newestMilestone !== undefined) ? (<a href={milestoneUrl}> {'See current milestone'} </a>) : (<a href={issuesHtmlUrl}> {'See all on GitHub'}</a>);
        const reportIncident: any = (this.props.newestMilestone !== undefined) ? ('') : (<a href={newIssueUrl}>{'Report an incident'}</a>);

        return(
            <div>
                <h2>
                    {this.props.title}
                </h2>
                <p>
                    {seeMilestoneLink}
                    {this.props.newestMilestone !== undefined ? ('') : (' // ')}
                    {reportIncident}
                </p>
                {issueItems}
            </div>
        );
    }
}

export default IssuesList;
