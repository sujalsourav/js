# ✅ JavaScript Type Conversion (Notes)

JavaScript allows converting values from one data type to another using:

Number()

String()

Boolean()

These are called explicit type conversions.

## 1️⃣ Conversion to Number → Number()

Common Outputs:

| Input Value | Expression | Output | Type | Explanation |
|-------------|------------|--------|------|-------------|
| "33"        | Number("33")   | 33     | number | Pure numeric string becomes number |
| "33abc"     | Number("33abc")| NaN    | number | Not a valid number |
| ""          | Number("")     | 0      | number | Empty string is considered 0 |
| true        | Number(true)   | 1      | number | true → 1 |
| false       | Number(false)  | 0      | number | false → 0 |
| null        | Number(null)   | 0      | number | important special case |
| undefined   | Number(undefined) | NaN | number | cannot convert |

⭐ Why does null convert to 0?

Because JavaScript treats null as absence of value, and its numeric representation is 0.

⭐ Why does undefined become NaN?

Because it means "value not assigned", so it cannot be converted into a meaningful number.

## 2️⃣ Conversion to Boolean → Boolean()

Boolean conversion follows truthy / falsy rules.

Falsy values (convert to false):

| Value | Boolean() Output |
|-------|------------------|
| 0     | false            |
| "" (empty string) | false |
| null  | false            |
| undefined | false        |
| NaN   | false            |

Truthy values (convert to true):

| Value | Reason |
|-------|--------|
| "hitesh" | Non-empty string |
| " " (space) | Still non-empty |
| 33    | Any non-zero number |
| true  | obviously true |

Example:

```javascript
Boolean("hitesh") // true
Boolean("")       // false
Boolean(null)     // false
```

## 3️⃣ Conversion to String → String()

Converts any value into a string.

| Input | Output |
|-------|--------|
| 33    | "33"   |
| true  | "true" |
| null  | "null" |
| undefined | "undefined" |

Example:

```javascript
String(33);        // "33"
String(null);      // "null"
String(undefined); // "undefined"
```

## 4️⃣ Summary Table (MOST IMPORTANT)

| Value     | Number() | Boolean() | String()    |
|-----------|----------|-----------|-------------|
| "33"      | 33       | true      | "33"        |
| "33abc"   | NaN      | true      | "33abc"     |
| ""        | 0        | false     | ""          |
| "hitesh"  | NaN      | true      | "hitesh"    |
| true      | 1        | true      | "true"      |
| false     | 0        | false     | "false"     |
| null      | 0        | false     | "null"      |
| undefined | NaN      | false     | "undefined" |
| 0         | 0        | false     | "0"         |
| 33        | 33       | true      | "33"        |

## 5️⃣ Why These Conversions Matter?

- Used while reading input from forms (string → number).
- Used in Boolean checks (if, loops).
- Avoids unexpected bugs when working with APIs.
- Helps understand JavaScript's type coercion.

## 6️⃣ Important Notes / Tricks

✔ null → 0 (super important)  
```javascript
Number(null) // 0
```

✔ undefined → NaN  
```javascript
Number(undefined) // NaN
```

✔ Non-empty string → true  
```javascript
Boolean("hitesh") // true
```

✔ Empty string → false  
```javascript
Boolean("") // false
```
