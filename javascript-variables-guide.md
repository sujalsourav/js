JavaScript Variables: var, let, const (Complete Guide)
🔹 1. Purpose of Variables

Variables store data values.
JavaScript gives us three ways to declare them:

var → old way

let → modern, block-scoped

const → modern, block-scoped, non-reassignable

🔹 2. Summary Table
Feature	var	let	const
Scope	Function scoped	Block scoped	Block scoped
Reassign value?	Yes	Yes	❌ No
Redeclare variable?	Yes	❌ No	❌ No
Hoisted?	Yes (initialized as undefined)	Yes (but not initialized)	Yes (but not initialized)
Common use	Not recommended	Variables that change	Constants or fixed references
3. Detailed Explanation
🟦 var
✔ Purpose

Used in older JavaScript code. Avoid using today.

✔ Syntax
var x = 10;

✔ Example
var name = "Sujal";
name = "Sourav";  // allowed

❌ Problems with var

Function Scope
var ignores block { } scope:

if (true) {
  var x = 10;
}
console.log(x); // 10 → still accessible outside block ❌


Hoisting Issue
var is hoisted and initialized as undefined:

console.log(a); // undefined ❌
var a = 5;


Redeclaration Allowed
This can cause bugs:

var a = 10;
var a = 20;  // no error ❌


👉 Final Verdict: Avoid using var.

🟩 let
✔ Purpose

Use when the value can change and must stay inside its block.

✔ Syntax
let age = 20;

✔ Example
let score = 50;
score = 70;  // allowed ✔

✔ Block Scope
if (true) {
  let x = 10;
}
console.log(x); // ❌ Error: x is not defined

✔ No Redeclaration
let a = 10;
let a = 20; // ❌ Error


👉 Use let for variables whose values will change.

🟥 const
✔ Purpose

Use for values that should not be reassigned.

✔ Syntax
const PI = 3.14;

✔ Reassignment NOT allowed
const num = 100;
num = 200; // ❌ Error

👍 But internal data CAN change (for arrays & objects)

const prevents reassignment, not mutation.

Example (Array)
const nums = [1, 2, 3];
nums.push(4);   // allowed ✔
console.log(nums);

Example (Object)
const user = { name: "Sujal" };
user.name = "Sourav";  // allowed ✔


You cannot do:

user = {};  // ❌ not allowed


👉 Use const for stable values or fixed references.

🔥 4. When to Use What? (Easy Trick)
✔ Use const → default choice

If you don’t plan to reassign it.

✔ Use let → if the value WILL change

Example: loops, counters, conditional updates.

❌ Avoid var → outdated & risky
🎯 Easy Memory Trick
C–L–V Rule

C – const → Constant (does not change)

L – let → Let it change

V – var → Vintage (old, avoid)

🎯 Final Takeaway
Best Practice	Why
Prefer const	Ensures safety & cleaner code
Use let only when necessary	Changes value safely
Avoid var	Scope & hoisting problems
