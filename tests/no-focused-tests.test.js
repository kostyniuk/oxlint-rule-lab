import { describe, it } from 'node:test';
import { RuleTester } from 'oxlint/plugins-dev';
import rule from '../rules/no-focused-tests.js';

RuleTester.describe = describe;
RuleTester.it = it;
new RuleTester().run('no-focused-tests', rule, {
  valid: [
    "it('normal', () => {});",
    "suite.only('unrelated', () => {});",
    "const text = 'it.only()';",
    "it[mode]('dynamic', () => {});",
    "it.skip('skipped', () => {});",
    "const focus = it.only;",
  ],
  invalid: [
    { code: "it.only('focused', () => {});", errors: [{ messageId: 'focused' }] },
    { code: "it['only']('focused', () => {});", errors: [{ messageId: 'focused', line: 1, column: 3, endColumn: 9 }] },
    { code: "test.only('focused', () => {});", errors: [{ messageId: 'focused' }] },
    { code: "describe.only('focused', () => {});", errors: [{ messageId: 'focused' }] },
  ],
});
