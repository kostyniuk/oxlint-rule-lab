import { describe, it } from 'node:test';
import { RuleTester } from 'oxlint/plugins-dev';
import rule from '../exercises/no-focused-tests.js';

RuleTester.describe = describe;
RuleTester.it = it;
new RuleTester().run('exercise', rule, {
  valid: ["suite.only('unrelated', () => {});", "it[mode]('unknown', () => {});"],
  invalid: [
    { code: "it.only('focused', () => {});", errors: [{ messageId: 'focused' }] },
    { code: "test['only']('focused', () => {});", errors: [{ messageId: 'focused' }] },
  ],
});
