# ⭐ JavaScript — Data Types & Dynamic Typing

## JavaScript is a Dynamically Typed Language
- You do not declare variable types.
- The type is decided at runtime based on the value stored.
- The same variable can hold different types at different times.

Example:
```javascript
let x = 10;     // number
x = "hello";    // now string
x = true;       // now boolean
```

JavaScript handles type changes automatically → dynamic typing.

---

## ⭐ Data Types in JavaScript

JavaScript has 2 categories of data types:

1) Primitive types (immutable, stored by value)  
2) Reference types (stored in heap, accessed by reference)

### 1️⃣ Primitive Types (7 types — immutable, stored by value)
- String — sequence of characters
- Number — all numeric values (integer & float) use the same type
- Boolean — true / false
- null — intentional empty value
- undefined — variable declared but not assigned
- Symbol — unique identifiers (used for keys)
- BigInt — for very large integers (suffix `n`)

Table (short):

| Type     | Example                | Notes |
|----------|------------------------|-------|
| String   | `"hello"`              | sequence of characters |
| Number   | `42`, `3.14`           | double-precision numbers |
| Boolean  | `true`, `false`        | logical values |
| null     | `null`                 | intentional empty value |
| undefined| `let a; // undefined`  | absence of value |
| Symbol   | `Symbol("id")`         | always unique |
| BigInt   | `1234567890123n`       | arbitrary large ints |

Primitive characteristics:
- Stored in stack (conceptually)
- Copied by value
- Immutable (you cannot change a primitive in-place)

Symbol special case:
```javascript
const id1 = Symbol("123");
const id2 = Symbol("123");
console.log(id1 === id2); // false — each Symbol is unique
```

---

### 2️⃣ Reference Types (stored in heap, accessed by reference)
Common reference types:
- Object (plain objects)
- Array
- Function
- Date, RegExp, Map, Set, etc.

Examples:
```javascript
const heroes = ["shaktiman", "naagraj", "doga"]; // Array
const user = { name: "hitesh", age: 22 };       // Object
const greet = function() { console.log("Hello"); } // Function
```

Reference characteristics:
- Stored in heap
- Variables store a reference (address) to the value
- Copied by reference (assignment copies reference)
- Compared by reference (not by structure)
  - Example: `{ } === { } // false`
  - `const a = {}; const b = a; a === b // true`

---

## ⭐ typeof Operator — Official Behavior (ECMA-262)
`typeof` returns a string describing the type. Memorize these common outputs:

| Value                 | typeof output | Notes |
|-----------------------|---------------|-------|
| `"hello"`             | `"string"`    | string primitive |
| `42`                  | `"number"`    | number primitive |
| `3.14`                | `"number"`    | numbers are all "number" |
| `true`                | `"boolean"`   | boolean |
| `null`                | `"object"`    | historical bug — returns "object" |
| `undefined`           | `"undefined"` | absence of value |
| `Symbol("id")`        | `"symbol"`    | unique symbol |
| `123n`                | `"bigint"`    | BigInt type |
| `function () {}`      | `"function"`  | functions show "function" (callable objects) |
| `[]`                  | `"object"`    | arrays are objects |
| `{}`                  | `"object"`    | plain objects |
| `NaN`                 | `"number"`    | NaN is still a number |

Important notes:
- `typeof null === "object"` — legacy quirk, remember it.
- Arrays return `"object"` — to check arrays use:
  - `Array.isArray(value)`
- Functions return `"function"` (a special case).
- BigInt and Symbol have their own `typeof` outputs.

Example:
```javascript
console.log(typeof Symbol("id")); // "symbol"
console.log(typeof 123n);         // "bigint"
console.log(Array.isArray([]));   // true
```

---

## ⭐ Memory Model — Quick Interview-Friendly Summary

Primitives
- Stored by value (conceptually in stack)
- Copied by value
- Immutable

Reference values
- Stored in heap
- Variables hold a reference/address
- Copying copies the reference (both variables point to the same object)
- Compared by reference (identity), not by structure

Implications:
- Changing an object via one variable affects all references to it.
- Shallow copy vs deep copy matters when working with nested structures.

---

## ⭐ Quick Best-Practices & Gotchas
- Prefer explicit conversions when types matter: `Number()`, `String()`, `Boolean()`.
- Use `Array.isArray()` to detect arrays.
- Remember `typeof null === "object"` — check `value === null` to detect null.
- Symbol values are always unique — do not expect equality by description.
- Use `Number.isNaN(value)` to test NaN (since NaN !== NaN).
- Handle `null` and `undefined` explicitly in API boundaries to avoid surprises.

---
