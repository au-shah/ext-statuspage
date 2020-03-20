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
    render(): JSX.Element {
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
                if (issue.state === 'closed') {
                    updateOrCloseDate = 'Resolved: ' + updateDate.toLocaleDateString();
                }

                return (
                    <div className='panel'>
                        <div>
                            <p className='issue-title'>
                                {(issue.state === 'closed' ? 'RESOLVED: ' : '') + issue.title + ' (#' + issue.number + ')'}
                            </p>
                        </div>
                        <div>
                            <span className='date'>{'Reported: ' + creationDate.toLocaleDateString()}</span>
                            <br></br>
                            <span className='date'>{updateOrCloseDate}</span>
                        </div>
                        <a className='link view-issue' href={issue.html_url}>{'View on GitHub'}</a>
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
        const milestoneRelease: boolean = (this.props.newestMilestone !== undefined) ? true : false;
        // const seeMilestoneLink: JSX.Element = (this.props.newestMilestone !== undefined) ? (<a className='link' href={milestoneUrl}> {'See current milestone'} </a>) : (<a className='link' href={issuesHtmlUrl}> {'View all on GitHub'}</a>);
        const reportIncident: JSX.Element = (this.props.newestMilestone !== undefined) ? (<></>) : (<a className='button' href={newIssueUrl}>Report a new issue</a>);

        return(
            <div>
                <div className='div-title'>
                    {this.props.title}

                    <span className='new-issue-position'>{reportIncident}</span>
                    {milestoneRelease ? (
                        <span className='view-milestone'>
                            <a className='link' href={milestoneUrl}> {'See current milestone'} </a>
                        </span>
                    ) : (
                        <span className='view-all-position'>
                            <a className='link' href={issuesHtmlUrl}> {'View all on GitHub'} </a>
                        </span>
                    )}
                </div>
                <div className='flex-container'>
                    {issueItems}
                </div>
            </div>
        );
    }
}

export default IssuesList;
