# ⭐ JAVASCRIPT OPERATIONS — EASY NOTES

1️⃣ Basic Arithmetic Operators

| Operation | Symbol | Example | Output |
|-----------|--------|---------|--------|
| Addition | + | 2 + 2 | 4 |
| Subtraction | - | 2 - 2 | 0 |
| Multiplication | * | 2 * 2 | 4 |
| Exponent | ** | 2 ** 3 | 8 (2³) |
| Division | / | 2 / 3 | 0.666… |
| Modulus (remainder) | % | 2 % 3 | 2 |

Unary minus (-value)

let value = 3;
let negValue = -value; // -3

Unary minus flips the sign.

## 2️⃣ String Concatenation with +

Rule:

✔ If any operand is a string, JavaScript converts everything to string and concatenates (joins).

- Examples:
  - "1" + 2    // "12"
    - 1 + "2"    // "12"
    - "1" + 2 + 2   // "122"

👉 Because evaluation happens left → right.

But:

1 + 2 + "2"  


Steps:

1 + 2 = 3 (number)

3 + "2" = "32" (string)

## 3️⃣ Operator Precedence (which runs first?)

Example:

(3 + 4) * 5 % 3

Step-by-step:

3 + 4 = 7

7 * 5 = 35

35 % 3 = 2

✔ Parentheses run first
✔ Then multiplications/divisions/modulus
✔ Then addition/subtraction

## 4️⃣ Unary + Operator (Type Conversion)

Unary + tries to convert a value into a number.

## Examples:

+true   // 1
+""     // 0
+"123"  // 123
+"abc"  // NaN

✔ Same behavior as Number(value)

## 5️⃣ Multiple Assignments

num1 = num2 = num3 = 2 + 2;

Steps:

2 + 2 = 4

Assign 4 to num3

then num2 = 4

then num1 = 4

All become 4.

## 6️⃣ Increment Operators (++ )

Two types:

1. Pre-Increment (++x)

Increases value first

Then returns the updated value

let gameCounter = 100;
++gameCounter;
console.log(gameCounter); // 101

2. Post-Increment (x++)

Returns old value first

Increases value afterward

- Example:
  - let a = 5;
  - console.log(a++);  // prints 5, but a becomes 6 internally
  - console.log(a);    // 6

## 7️⃣ Combining Operators — Important Concepts

✔ String + Number = String

⚠ Very common interview question!

"Hello" + 5      // "Hello5"

✔ Number + Number = Number

Unless converted to string mid-way.

✔ Unary + forces numeric conversion

Useful for converting input from HTML forms (which are strings).

## 8️⃣ Special Operator Behaviors

+true → 1 (true becomes 1)
+"" → 0 (empty string becomes 0)

Why?
Because JavaScript applies ToNumber abstract operation from ECMA spec.

## 9️⃣ Super Simple Summary Table

| Expression | Result | Reason |
|------------|--------|--------|
| "1" + 2 | "12" | string + anything → string |
| 1 + "2" | "12" | string concatenation |
| "1" + 2 + 2 | "122" | left-to-right, stays string |
| 1 + 2 + "2" | "32" | 1+2=3 then 3+"2" → string |
| +true | 1 | true → 1 |
| +"" | 0 | empty string → 0 |
| 35 % 3 | 2 | remainder |

🔟 ECMA Spec Link Explanation (Simple Version)

The spec defines internal operations like:

ToNumber(value)

Used for:

unary +

numeric operations

explicit Number()

ToString(value)

Used when + acts as string concatenation.

ToPrimitive(value)

Used during mixed operations.

You don’t need the full spec—just understand:

👉 JS decides whether + means "math" or "string join".
If a string is involved → it becomes string.
Else → it becomes math.

## ⭐ FINAL SHORT NOTES (Revision)

+ → math (if only numbers) OR string join (if any string)

Unary + converts to number

"1" + 2 + 2 = "122"

1 + 2 + "2" = "32"

++x increments first → returns new value

x++ returns old value → then increments

% gives remainder

Operator precedence: () > * / % > + -


Exact commit and push as requested.
