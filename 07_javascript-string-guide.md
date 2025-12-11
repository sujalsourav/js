# 📘 JavaScript String Methods — Complete Cheat Sheet

JavaScript is a **dynamically typed** language and strings are one of the most commonly used data types.  
Strings are **immutable**, but JavaScript provides many powerful built-in methods to work with them.

Always prefer using **template literals** (`backticks`) for string interpolation.

---

## ✅ 1. Template Literals (Recommended)

```js
const fullinfo = `My name is ${myName} and my email id is ${emailId}`;
✔ Cleaner
✔ Easier to read
✔ Supports variables + expressions + multiline strings

✅ 2. length
Returns number of characters.

js
Copy code
emailId.length;    
fullinfo.length;
✅ 3. toUpperCase() / toLowerCase()
js
Copy code
emailId.toUpperCase();  
emailId.toLowerCase();
✅ 4. indexOf()
Finds the first occurrence of a substring.

js
Copy code
emailId.indexOf("19");
✅ 5. charAt()
Returns character at the given index.

js
Copy code
myName.charAt(3);   // 'a'
✅ 6. substring(start, end)
Extracts substring from start → end-1

❌ Does NOT support negative indexing

js
Copy code
myName.substring(0, 4);   // "suja"
✅ 7. slice(start, end)
Extracts substring from start → end-1

✔ Supports negative indexing

js
Copy code
myName.slice(-2, -4);   // "ja"
✅ 8. split(separator)
Splits string into an array based on a separator.

js
Copy code
const friendsArray = myFriends.split("-");
Output:

js
Copy code
["sujal", "ankit", "rohan", "rahul"]
✅ 9. replace(oldValue, newValue)
Replaces the first matching substring.

js
Copy code
myFriends.replace("rohan", "ankur");
To replace all occurrences:

js
Copy code
string.replaceAll(",", "");
✅ 10. includes(substring)
Returns true/false depending on presence.

js
Copy code
myFriends.includes("ankit");   // true
myFriends.includes("ankur");   // false
✅ 11. trim()
Removes spaces from start and end only.

js
Copy code
stringWithSpaces.trim();
To remove inside characters also:

js
Copy code
stringWithSpaces.replaceAll(",", "");
✅ 12. concat()
Concatenates strings.

js
Copy code
greet1.concat(greet2);   // "Good Morning Sujal"
✅ 13. repeat(n)
Repeats the string n times.

js
Copy code
"ha".repeat(5);   // "hahahahaha"
✅ 14. startsWith() / endsWith()
Checks string pattern → returns boolean.

js
Copy code
emailId.startsWith("19win");       // true
emailId.endsWith("gmail.com");     // true
emailId.endsWith("yahoo.com");     // false
emailId.startsWith("sujal");       // false
⭐ Quick Summary Table
Method	Purpose
.length	Count characters
.toUpperCase() / .toLowerCase()	Change case
.indexOf()	Find position
.charAt()	Get character
.substring()	Extract substring (no negatives)
.slice()	Extract substring (supports negatives)
.split()	Convert string → array
.replace() / .replaceAll()	Replace text
.includes()	Presence check
.trim()	Remove extra outer spaces
.concat()	Join strings
.repeat()	Repeat string
.startsWith() / .endsWith()	Boolean pattern check
