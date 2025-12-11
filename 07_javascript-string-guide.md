# 📘 JavaScript String Methods — Complete Cheat Sheet

JavaScript is a **dynamically typed** language and strings are one of the most commonly used data types.  
Strings are **immutable**, but JavaScript provides many powerful built-in methods to work with them.

Always prefer using **template literals** (`backticks`) for string interpolation.

---

## ✅ 1. Template Literals (Recommended)

```js
const myName = "sujal"
console.log(myName); // sujal

const emailId = "19winsujal@gmail.com"

// always try to use backtick for string interpolation ---> very important
const fullinfo = `My name is ${myName} and my email id is ${emailId}`
console.log(fullinfo); // My name is sujal and my email id is 19winsujal@gmail.com
console.log(emailId.length); // 19
console.log(fullinfo.length); // 52

