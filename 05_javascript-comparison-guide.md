# JavaScript Comparison — Cheat-sheet (memory-stick style)

Quick outputs
```js
console.log(2 > 1);        // true
console.log(2 >= 1);       // true
console.log(2 < 1);        // false
console.log(2 == 1);       // false
console.log(2 != 1);       // true

console.log("2" > 1);      // true   ("2" -> numeric 2 for relational)
console.log("02" > 1);     // true   ("02" -> numeric 2)

console.log(null > 0);     // false  (null -> 0 for relational ">" => 0 > 0 is false)
console.log(null == 0);    // false  (null only == undefined, not numbers)
console.log(null >= 0);    // true   (null -> 0 for relational ">=" => 0 >= 0 is true)

console.log(undefined == 0); // false (undefined only == null)
console.log(undefined > 0);  // false (comparison with undefined → treated like NaN → false)
console.log(undefined < 0);  // false

console.log("2" === 2);    // false  (strict equality: no type coercion)
```

Rules you must remember (short & sharp)

- Relational operators (<, >, <=, >=)
  - If operands are not both strings, JS converts them to primitives and (usually) to numbers before comparing.
  - Example: `"2" > 1` → `"2"` → number 2 → `2 > 1` → `true`.

- Loose equality (==)
  - Performs type coercion using complex rules.
  - `null == undefined` → `true`.
  - `null == 0` → `false`.
  - `undefined == 0` → `false`.
  - Rule of thumb: `==` tries to coerce types — results can be surprising.

- Strict equality (===)
  - No coercion. Types must match and values must match.
  - Prefer `===` unless you intentionally need coercion.

null vs undefined — the sticky pair
- `null == undefined` → `true`
- `null === undefined` → `false`
- `null` behaves like `0` for some relational ops (because `ToNumber(null)` → `0`), but NOT for `==` with numbers.
- DON’T rely on `null` or `undefined` comparing to numbers — this is a JS quirk.

Undefined / NaN in comparisons
- Comparisons with `undefined` usually produce `false` (relational ops treat them like `NaN`).
- `NaN` never equals anything, including itself (`NaN === NaN` → `false`). Use `Number.isNaN(value)`.

Object comparisons
- Objects are compared by reference:
  - `{ } === { } // false`
  - `const a = {}; const b = a; a === b // true`

Sticky cases & gotchas
- `null` is not numeric zero (but `ToNumber(null) === 0`):
  - `null > 0` → `false`
  - `null >= 0` → `true`
  - `null == 0` → `false`
- `undefined` in numeric comparisons tends to produce `false`.
- `==` is convenient but dangerous — treat it as an escape hatch.

Best practices — quick checklist
- Use `===` and `!==` for equality checks.
- When comparing numbers, ensure both operands are numbers; convert explicitly when needed:
  - `const x = Number(someString);`
- Avoid `x == null` unless you intentionally want to check both `null` and `undefined`.
  - (This pattern is acceptable when intentional: `if (x == null) { ... }`)
- For `NaN`, use `Number.isNaN(value)`.
- When reading values from inputs (strings), coerce explicitly: `const n = parseFloat(inputValue);`
- Guard explicitly for `null`/`undefined` instead of relying on comparisons.

Memory mnemonics
- "Use triple equals" — `===` = predictable, `==` = magic.
- "null and undefined are sticky" — avoid relying on implicit comparison behavior.
- "Convert explicitly" — predictable code > clever coercion.

Short takeaway
- Prefer `===`, coerce explicitly when needed, and treat `null`/`undefined` with caution in comparisons.
