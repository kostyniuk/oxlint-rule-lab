export default {
  meta: {
    type: 'problem',
    schema: [],
    messages: { focused: 'Remove .only so the whole test suite can run.' },
  },
  create(context) {
    return {
      CallExpression(node) {
        // Exercise: implement the rule without looking at rules/no-focused-tests.js.
      },
    };
  },
};
