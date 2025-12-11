# JavaScript Variables — var, let, const



Purpose

- Provide a clean, consistent, and complete reference for declaring variables in JavaScript.

- Format is uniform: short summary, comparison table, per-keyword breakdown (syntax, behavior, examples), best practices, pitfalls, quick reference.



Table of contents

- TL;DR

- Quick comparison

- var

- let

- const

- Common examples & patterns

- Best practices & migration tips

- Quick reference (cheat sheet)

- Further reading



---



TL;DR

- Prefer const by default, use let when reassignment is needed, avoid var in modern code.

- const prevents reassignment but allows internal mutation (objects/arrays).

- let and const are block-scoped; var is function-scoped and hoisted differently.



---



Quick comparison



| Feature               | var                                 | let                                | const                              |

|-----------------------|-------------------------------------|------------------------------------|------------------------------------|

| Scope                 | Function-scoped                     | Block-scoped                       | Block-scoped                       |

| Reassign value?       | Yes                                 | Yes                                | No                                 |

| Redeclare variable?   | Yes (in same scope)                 | No                                 | No                                 |

| Hoisting              | Yes — initialized as `undefined`    | Hoisted, but in TDZ (uninitialized)| Hoisted, but in TDZ (uninitialized)|

| Typical modern usage   | Avoid                              | Use for mutable bindings           | Use for immutable bindings         |



Note: TDZ = Temporal Dead Zone (access before initialization throws ReferenceError).



---



⭐ In One Line



- Hoisting means JavaScript remembers variable/function declarations before running the code.

  - var → hoisted + initialized to undefined

  - let/const → hoisted but uninitialized (TDZ)

  - function → hoisted with full body



⭐ In One Line



- Mutable binding: variable can point to a new value (let, var)

- Immutable binding: variable cannot point to a new value (const)



⭐ var



- Purpose

  - Legacy keyword. Function-scoped and hoisted. Avoid in modern code unless maintaining old codebases.



- Syntax

```js

var name = "Sujal";

```



- Behavior

  - Scope: function-level (or global if declared outside a function).

  - Hoisting: declaration is hoisted and initialized to `undefined`.

  - Redeclaration: allowed in the same scope (can overwrite).

  - Reassignment: allowed.



- Examples

```js

if (true) {

  var x = 10;

}

console.log(x); // 10 — leaks outside block

```



```js

console.log(a); // undefined

var a = 5;

```



- Pitfalls

  - Unexpected variable leakage from blocks.

  - Silent bugs from redeclaration.



- When (rarely) to use

  - When you must support very old environments that don't have let/const (rare today).

  - Migrating legacy code incrementally.



---



⭐ let



- Purpose

  - Block-scoped variable for values that will change (mutable binding).



- Syntax

```js

let counter = 0;

counter = 1; // allowed

```



- Behavior

  - Scope: block-scoped ({ ... }).

  - Hoisting: declaration is hoisted but remains uninitialized until the statement — accessing it before initialization throws ReferenceError (TDZ).

  - Redeclaration: not allowed in the same scope.

  - Reassignment: allowed.



- Examples

```js

if (true) {

  let y = 5;

}

console.log(y); // ReferenceError: y is not defined

```



```js

let a = 10;

a = 20; // OK

```



- Pitfalls

  - Remember TDZ: accessing before declaration throws.

  - Avoid unnecessary broad scopes; declare variables in the smallest scope needed.



- When to use

  - Use when the binding needs to change (loops, counters, accumulating values).



---



⭐ const



- Purpose

  - Block-scoped binding which cannot be reassigned. Use for values that should not be reassigned.



- Syntax

```js

const PI = 3.14;

```



- Behavior

  - Scope: block-scoped.

  - Hoisting: same TDZ behavior as let.

  - Redeclaration: not allowed in same scope.

  - Reassignment: not allowed — attempting to reassign throws TypeError.



- Important nuance: const prevents reassignment of the binding, not mutation of the value

  - For objects and arrays, you can mutate contents:

```js

const arr = [1, 2, 3];

arr.push(4); // OK — arr reference is unchanged



const obj = { name: "Sujal" };

obj.name = "Sourav"; // OK



// But you cannot rebind:

obj = {}; // TypeError

arr = []; // TypeError

```



- When to use

  - Prefer const for all values that should not be rebound. Default choice for new variables.



---



Common examples & patterns



- Loop with let:

```js

for (let i = 0; i < 3; i++) {

  // each iteration has its own i

}

```



- Capturing loop variable in closures (let helps):

```js

const funcs = [];

for (let i = 0; i < 3; i++) {

  funcs.push(() => console.log(i));

}

funcs.forEach(f => f()); // 0, 1, 2

```



- Use const for module-level constants:

```js

export const API_URL = "https://api.example.com";

```



- Mutable container with const:

```js

const state = { count: 0 };

state.count += 1; // allowed

```



---



⭐ Best practices & migration tips



- Default to const:

  - Start by declaring variables with const and switch to let only when you need to reassign.

- Use let for variables that change (loop counters, accumulators).

- Avoid var entirely in new code.

- Prefer block scope: declare variables in the narrowest scope necessary.

- ESLint rules to enable:

  - "no-var": "error" — disallow var.

  - "prefer-const": "error" — suggest const when variables are not reassigned.

- When migrating old code:

  - Replace var with let/const progressively.

  - Check for implicit globals and block-leakage behavior.



---



Common pitfalls (quick list)

- Accessing let/const before declaration -> ReferenceError (TDZ).

- Redeclaring let/const in same scope -> SyntaxError.

- Assuming const objects are immutable -> only the binding is constant.

- Using var causes block-scoping surprises.



---


urther reading

- MDN — var, let, const

- ECMAScript specs on bindings and hoisting



---



Version notes

- This file reorganized and rewritten for clarity: consistent headings, examples, and best-practice guidance.
