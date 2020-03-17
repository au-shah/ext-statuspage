import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import chai from 'chai';
import sinon, { SinonSandbox } from 'sinon';
import sinonChai from 'sinon-chai';
import IssuesList from '../components/IssuesList/IssuesList';
chai.should();
chai.use(sinonChai);

// tslint:disable: no-unused-expression

describe('IssuesList', () => {
    let mySandBox: sinon.SinonSandbox;

    beforeEach(async () => {
        mySandBox = sinon.createSandbox();
    });

    afterEach(async () => {
        mySandBox.restore();
    });

    it('should render the expected snapshot', async () => {
        const component: any = renderer
            .create(<IssuesList />)
            .toJSON();
        expect(component).toMatchSnapshot();
    });

    it('should show error test if error is passed as a prop', async () => {
        const component: any = await mount(<IssuesList error={'someError'}/>);
        component.text().includes('someError').should.be.true;
    });

    it('should show message if no incidents to show', async () => {
        const component: any = await mount(<IssuesList issues={[]}/>);
        component.text().includes('No incidents found!').should.be.true;
    });

    it('should show message if no completed issues to show from the most recent milestone', async () => {
        const component: any = await mount(<IssuesList issues={[]} newestMilestone={'someMilestone'}/>);
        component.text().includes('No completed issues!').should.be.true;
    });

    it('should show any incidents', async () => {
        const incidents: any = {
            url: 'someURL',
            repositoryurl: 'someOtherURL',
            number: 1946,
            title: 'someIncident issue',
            state: 'open'
        };
        const component: any = await mount(<IssuesList issues={[incidents]}/>);
        component.text().includes('someIncident issue').should.be.true;
    });

    it('should show any completed issues for the next release', async () => {
        const completedIssues: any = [{
            url: 'someURL',
            repositoryurl: 'someOtherURL',
            number: 1932,
            title: 'Some completed issue',
            state: 'closed',
            labels: [{
                id : 'someLabelID',
                name: 'bug',
                description: 'someLabelDescription'
            }],
            milestone: {
                number: 'milestoneNumber',
                id: 'someMilestoneID'
            }
        },
        {
            url: 'someURL1',
            repositoryurl: 'someOtherURL1',
            number: 1922,
            title: 'Some other completed issue',
            state: 'closed',
            labels: [{
                id : 'someOtherLabelID',
                name: 'enhancement',
                description: 'someOtherLabelDescription'
            }],
            milestone: {
                number: 'milestoneNumber',
                id: 'someMilestoneID'
            }
        }];
        const component: any = await mount(<IssuesList issues={completedIssues} newestMilestone={'someMilestone'}/>);
        component.text().includes('Some completed issue').should.be.true;
        component.text().includes('Some other completed issue').should.be.true;
        component.text().includes('bug').should.be.true;
        component.text().includes('feature').should.be.true;
    });
});
