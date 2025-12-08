# JavaScript Variables: var, let, const (Complete Guide)

## 1. Purpose of Variables

Variables store data values. JavaScript gives us three ways to declare them:

- `var` → old way
- `let` → modern, block-scoped
- `const` → modern, block-scoped, non-reassignable

---

## 2. Summary Table

| Feature              | var                     | let                    | const                  |
|----------------------|--------------------------|-------------------------|-------------------------|
| Scope                | Function scoped          | Block scoped            | Block scoped            |
| Reassign value?      | Yes                      | Yes                     | No                      |
| Redeclare variable?  | Yes                      | No                      | No                      |
| Hoisted?             | Yes (initialized as `undefined`) | Yes (not initialized) | Yes (not initialized)   |
| Common use           | Avoid in modern JS       | Changing variables      | Fixed values or references |

---

## 3. Detailed Explanation

### var

#### Purpose
`var` is used in older JavaScript code. Avoid using it in modern development.

#### Syntax
```js
var x = 10;


## Example (var)

```js
var name = "Sujal";
name = "Sourav"; // Allowed
Problems with var
1. Function Scoped (Not block-scoped)
js
Copy code
if (true) {
    var x = 10;
}
console.log(x); // 10 (Leaks outside block)
2. Hoisting Behaviour
js
Copy code
console.log(a); // undefined
var a = 5;
3. Redeclaration Allowed
js
Copy code
var a = 10;
var a = 20; // No error - can cause bugs
3.2 let
Purpose
Use when the value needs to change and remain inside block scope.

Syntax
js
Copy code
let age = 25;
Example
js
Copy code
let score = 90;
score = 95; // Allowed
Block Scoped
js
Copy code
if (true) {
    let x = 10;
}
console.log(x); // Error: x is not defined
No Redeclaration
js
Copy code
let a = 10;
let a = 20; // Error
3.3 const
Purpose
Use for values that should not be reassigned.

Syntax
js
Copy code
const PI = 3.14;
Reassignment Not Allowed
js
Copy code
const num = 100;
num = 200; // Error
Internal Mutation is Allowed
(const prevents reassignment, not mutation)

Arrays
js
Copy code
const items = [1, 2, 3];
items.push(4); // Allowed
Objects
js
Copy code
const user = { name: "Sujal" };
user.name = "Sourav"; // Allowed
But reassignment is not allowed:
js
Copy code
user = {}; // Error
4. When to Use What?
Situation	Use
Value never changes	const
Value will change	let
Old JavaScript code	var

5. Easy Memory Trick
C – L – V Rule
C → const → Constant (no change)

L → let → Let it change

V → var → Vintage (avoid)

yaml
Copy code
