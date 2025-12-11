
`Hello my name is ${name} and my repo count is ${repoCount}`

* ✔ **Easier:** Avoids complex concatenation (`"text" + value + "text"`)
* ✔ **Features:** Supports variables, expressions, and multiline text natively.

---

## 2️⃣ String Object vs. String Literal

```javascript
const gameName = new String("hitesh-hc-com");

| Type | Example | Description |
| :--- | :--- | :--- |
| **String Literal** | `"text"` | Primitive string (the standard) |
| **String Object** | `new String("text")` | Object type (has properties like length and methods) |

**Index Access:**

```javascript
gameName[0]       // Output: 'h'
gameName.length   // Output: 13

---

## 3️⃣ Common String Methods You MUST Know

| Method | Purpose | Example | Output |
| :--- | :--- | :--- | :--- |
| `toUpperCase()` | Converts the entire string to uppercase. | `gameName.toUpperCase()` | `"HITESH-HC-COM"` |
| `charAt(index)` | Returns the character at a specific index. | `gameName.charAt(2)` | `'t'` |
| `indexOf(char)` | Returns the position of the first occurrence of a character. | `gameName.indexOf('t')` | `2` |

---

## 4️⃣ `substring(start, end)`

* The `end` index is **NOT** included.
* **Important:** Does not allow negative numbers; negative inputs are treated as `0`.

```javascript
gameName.substring(0, 4);  // Output: "hite"

---

## 5️⃣ `slice(start, end)`

* **Key Feature:** Supports **negative indexing** (starts counting from the end).

```javascript
gameName.slice(-8, 4);
* *Note: If `start` > `end` when using negative indices, it returns an empty string.*

---

## 6️⃣ `trim()`

* Removes leading and trailing whitespace.

```javascript
"   hitesh   ".trim();   // Output: "hitesh"

---

## 7️⃣ `replace(old, new)`

* Replaces the **first** occurrence of a substring.

```javascript
let url = "[https://example.com/search%20term](https://example.com/search%20term)";
url.replace('%20', '-'); 
* **For all occurrences:** Use the modern `replaceAll()`.

---

## 8️⃣ `includes(substring)`

* Checks if a substring exists.
* Returns a **boolean** (`true` or `false`).

```javascript
let url = "[https://example.com](https://example.com)";
url.includes('sundar'); // Output: false

---

## 9️⃣ `split(separator)`

* Converts the string into an **array** based on the specified separator.

```javascript
gameName.split('-');
// Output: ["hitesh", "hc", "com"]
