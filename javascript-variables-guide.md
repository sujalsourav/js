# JavaScript Variables: var, let, const

JavaScript provides three ways to declare variables: `var`, `let`, and `const`.  
Each has different behavior regarding scope, hoisting, reassignment, and usage.

---

## Summary Table

| Feature              | var                                   | let                          | const                        |
|----------------------|----------------------------------------|-------------------------------|-------------------------------|
| Scope                | Function scoped                        | Block scoped                  | Block scoped                  |
| Reassign value?      | Yes                                    | Yes                           | No                            |
| Redeclare variable?  | Yes                                    | No                            | No                            |
| Hoisted?             | Yes (initialized as `undefined`)       | Yes (not initialized)         | Yes (not initialized)         |
| Best use             | Avoid in modern JS                     | When value will change        | When value should not change  |

---

## var

Example:

```js
var name = "Sujal";
name = "Sourav"; // Allowed
Problems with var:

Function Scoped (Not block-scoped)

js
Copy code
if (true) {
    var x = 10;
}
console.log(x); // 10 (Leaks outside block)
Hoisting Behaviour

js
Copy code
console.log(a); // undefined
var a = 5;
Redeclaration Allowed

js
Copy code
var a = 10;
var a = 20; // No error - can cause bugs
let
Purpose: Use when the value needs to change and stay inside block scope.

Syntax:

js
Copy code
let age = 25;
Example:

js
Copy code
let score = 90;
score = 95; // Allowed
Block Scoped:

js
Copy code
if (true) {
    let x = 10;
}
console.log(x); // Error: x is not defined
No Redeclaration:

js
Copy code
let a = 10;
let a = 20; // Error
const
Purpose: Use when the variable should not be reassigned.

Syntax:

js
Copy code
const PI = 3.14;
Reassignment Not Allowed:

js
Copy code
const num = 100;
num = 200; // Error
Internal Mutation Allowed (const prevents reassignment, not mutation):

Arrays:

js
Copy code
const items = [1, 2, 3];
items.push(4); // Allowed
Objects:

js
Copy code
const user = { name: "Sujal" };
user.name = "Sourav"; // Allowed
But reassignment is not allowed:

js
Copy code
user = {}; // Error
When to Use What?
Situation	Use
Value never changes	const
Value will change	let
Old JavaScript code	var

Easy Memory Trick (CLV Rule)
C → const → Constant (no change)

L → let → Let it change

V → var → Vintage (avoid)
