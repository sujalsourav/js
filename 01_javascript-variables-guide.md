# 📘 JavaScript String Methods — Complete Cheat Sheet

JavaScript is a **dynamically typed** language and strings are one of the most commonly used data types.  
Strings are **immutable**, but JavaScript provides many powerful built-in methods to work with them.

Always prefer using **template literals** (`backticks`) for string interpolation.

---

const myName = "sujal"
console.log(myName); // sujal

const emailId = "19winsujal@gmail.com"

// always try to use backtick for string interpolation ---> very important
const fullinfo = `My name is ${myName} and my email id is ${emailId}`
console.log(fullinfo); // My name is sujal and my email id is 19winsujal@gmail.com

// some string methods
// 1. length
console.log(emailId.length); // 19
console.log(fullinfo.length); // 52

// 2. toUpperCase() and toLowerCase()
console.log(emailId.toUpperCase()); // 19WINSUJAL@GMAIL.COM
console.log(emailId.toLowerCase()); // 19winsujal@gmail.com 

// 3. indexOf()
console.log(emailId.indexOf('19'));

// 4. charAt()
console.log(myName.charAt(3)); // a

// 5. substring()  --> takes {start, end} value but gives {end-1} values.
console.log(myName.substring(0,4)); // suja

// 6. slice()  --> takes {start, end} value but gives {end-1} values.
// IT ALSO WORKS WELL WITH {NEGATIVE INDEXING}
console.log(myName.slice(-2,-4)); // ja

// 7. split()  --> splits the string into array of strings based on given separator
const myFriends = "sujal-ankit-rohan-rahul"
const friendsArray = myFriends.split("-")
console.log(friendsArray); // [ 'sujal', 'ankit', 'rohan', 'rahul' ]

// 8. replace()  --> replaces a part of string with given new string
const newFriends = myFriends.replace("rohan", "ankur")
console.log(newFriends); // sujal-ankit-ankur-rahul

// 9. includes()  --> returns boolean value based on whether the given string is present or not
console.log(myFriends.includes("ankit")); // true
console.log(myFriends.includes("ankur")); // false

// 10. trim()  --> removes extra spaces from start and end of string
const stringWithSpaces = "     sujal,,,,,,,,,sourav    "
console.log(stringWithSpaces.trim()); // sujal,,,,,,,,,sourav
// if i have to remove spaces from middle also then use replaceAll() method
const stringWithoutSpaces = stringWithSpaces.replaceAll(",", "")
console.log(stringWithoutSpaces) // sujalsourav

// 11. concat()  --> concatenates two or more strings
const greet1 = "Good Morning "
const greet2 = "Sujal"
const fullGreet = greet1.concat(greet2)
console.log(fullGreet); // Good Morning Sujal

// 12. repeat()  --> repeats the string for given number of times
const laugh = "ha"
console.log(laugh.repeat(5)); // hahahahaha

// 13. startsWith() and endsWith()  --> returns boolean value 
// based on whether the string starts or ends with given substring
console.log(emailId.startsWith("19win"));  // true
console.log(emailId.endsWith("gmail.com")); // true
console.log(emailId.endsWith("yahoo.com")); // false
console.log(emailId.startsWith("sujal")); // false

---

