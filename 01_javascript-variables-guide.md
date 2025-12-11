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

var

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
  - When you must support very old environments that don't have let/const (rare
