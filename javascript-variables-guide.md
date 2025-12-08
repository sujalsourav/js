JavaScript Variables: var, let, const
1. Purpose of Variables

Variables store data values in JavaScript.
JavaScript provides three ways to declare variables:

var – old method

let – modern, block scoped

const – modern, block scoped, cannot be reassigned

2. Summary Table
Feature	var	let	const
Scope	Function scoped	Block scoped	Block scoped
Reassign value?	Yes	Yes	No
Redeclare variable?	Yes	No	No
Hoisted?	Yes (initialized as undefined)	Yes (not initialized)	Yes (not initialized)
Best use	Avoid in modern JS	Use when value changes	Use for fixed values or references
3. Detailed Explanation
var
Purpose

var was used in older JS code. It has function scope and is generally avoided today.

Syntax
var x = 10;

Example
var name = "Sujal";
name = "Sourav";   // allowed

Problems with var
a) Not block scoped
if (true) {
    var x = 10;
}
console.log(x);  // 10 (still accessible)

b) Hoisting creates unexpected bugs
console.log(a); // undefined
var a = 5;

c) Redeclaration allowed (not safe)
var a = 10;
var a = 20;   // allowed → can cause bugs

let
Purpose

Use when the value needs to be updated. Let is block scoped.

Syntax
let age = 20;

Example
let score = 50;
score = 70;  // allowed

Block scope
if (true) {
    let x = 10;
}
console.log(x); // Error: x is not defined

No redeclaration
let a = 10;
let a = 20; // Error

const
Purpose

Use when the value should not be reassigned.

Syntax
const PI = 3.14;

Reassignment not allowed
const num = 100;
num = 200; // Error

But mutation is allowed (arrays & objects)
Array example
const arr = [1, 2, 3];
arr.push(4);  // allowed

Object example
const user = { name: "Sujal" };
user.name = "Sourav";  // allowed


Reassignment is not allowed:

user = {}; // Error

4. When to Use What?
Scenario	Use
Value must never change	const
Value will change	let
Old legacy code only	var
5. Easy Memory Trick

C → const → does not change
L → let → value changes
V → var → avoid in modern JS

6. Final Takeaway

Use const by default

Use let when reassignment is needed

Avoid var because of scope and hoisting problems
