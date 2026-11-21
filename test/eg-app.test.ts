import { core } from '@frankpengau/eg-lib';
import { EgAppStack } from '../lib/eg-app-stack';

describe('EgApp Stack - Stack Synth', () => {
    test('Stack Synth - Lambda', () => {
        const testApp = new core.App();

        const testStack = new EgAppStack(testApp, 'TestStack');

        const template = core.assertions.Template.fromStack(testStack);

        template.hasResourceProperties('AWS::Lambda::Function', {
            Handler: 'index.handler',
            Runtime: 'nodejs24.x'
        });
    })
});

describe('EgApp Stack - Stack Snapshot', () => {
    test('Stack Snapshot', () => {
        const testApp = new core.App();

        const testStack = new EgAppStack(testApp, 'TestStack');

        const template = core.assertions.Template.fromStack(testStack);

        expect(template.toJSON()).toMatchSnapshot();
    });
});
