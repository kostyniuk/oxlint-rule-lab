# Oxlint rule lab

Learn to write a custom JavaScript lint rule through three short lessons and runnable examples. Open `lessons/0001-first-rule.html` in your browser. Every lesson works offline and links to the next lesson and a printable reference.

## Run

Requires Node.js 22 or newer on a supported 64-bit platform; CI uses Node 24.

```sh
npm ci
npm test
npm run lint
npm run demo
```

The demo intentionally exits 1 and highlights `only`. CI uses the passing solution tests and implementation lint.

## Lessons and commits

1. **First rule:** visitor → predicate → diagnostic. Commit: `lesson 01`.
2. **Precision and tests:** computed properties and counterexamples. Commit: `lesson 02`.
3. **Ship the rule:** plugin wiring, recall exercise, and CI. Commit: `lesson 03`.

Use `git log --oneline --reverse` and `git show <commit>` to inspect each step. Earlier lesson links to later pages become available as those commits are added. To try an earlier version, use a separate worktree: `git worktree add ../oxlint-lesson-01 <commit>`.

## Your turn

Implement `exercises/no-focused-tests.js` without reading the solution, then run `npm run exercise`. These exercise checks deliberately fail initially and are excluded from the normal suite. Ask the teaching agent to review your diff and reasoning. Learning records are created only after demonstrated understanding, not merely after reading a page.

## Scope

The teaching rule catches direct calls to `it.only`, `test.only`, and `describe.only`, including string-literal computed properties. It matches names, not import bindings. Local objects with those names can cause false positives; aliases, chains, dynamic properties, and template literals are outside the contract. It does not automatically fix code.

Prefer an existing framework rule for production when it meets your needs. Oxlint's JavaScript plugin APIs are alpha; this lab pins 1.87.0. See `RESOURCES.md` for primary sources and `MISSION.md` for the learning goal.

Shared presentation components live in `assets/`; lessons also embed those components so each HTML file is portable. Keep embedded copies synchronized when changing assets.
