# Mission: Write custom Oxlint rules

## Why
Build and publish a small rule laboratory that turns JavaScript project conventions into runnable lint diagnostics. The initial example prevents focused tests such as `it.only()` from slipping into a test suite; this example is provisional while the learner identifies their own project convention.

## Success looks like
- Explain the AST shape of a call and choose a visitor.
- Write a rule with an actionable diagnostic and explicit boundaries.
- Prove positive and negative cases with Oxlint RuleTester.
- Enable the plugin in a project and run it in CI.

## Constraints
- Short lessons, runnable examples, and intermediate Git commits.
- JavaScript and pinned Oxlint; prior AST experience remains unassessed.

## Out of scope
- No additional exclusions requested; Rust internals are deferred in this introductory path.
