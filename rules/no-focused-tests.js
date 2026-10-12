export default {
  meta: {
    type: 'problem',
    docs: { description: 'Disallow direct focused test calls in this teaching lab.' },
    schema: [],
    messages: { focused: 'Remove .only so the whole test suite can run.' },
  },
  create(context) {
    return {
      CallExpression(node) {
        const member = node.callee;
        if (member.type !== 'MemberExpression') return;
        if (member.object.type !== 'Identifier') return;
        if (!['it', 'test', 'describe'].includes(member.object.name)) return;
        const name = member.computed
          ? member.property.type === 'Literal' ? member.property.value : null
          : member.property.name;
        if (name !== 'only') return;
        context.report({ node: member.property, messageId: 'focused' });
      },
    };
  },
};
