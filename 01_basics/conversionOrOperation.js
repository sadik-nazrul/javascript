// let score = 33

// console.log(typeof score);
// console.log(typeof(score));

// ================= Conversion ====================
let score = "33"

// console.log(typeof score);
// console.log(typeof(score));


let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

/*
1. If we are trying to convert a string like 33 to a number it's give me result 33 type is showing number. 

2. If we are trying to convert string 33abc to a number it's give me result NaNtype is showing number.

3. true => 1/ false => 1

4. "sadik" => NaN

5. undefided => NaN

6. null => 0
*/

// ================= Conversion ====================

let isLogedIn = 1

let booleanIsLogedIn = Boolean(isLogedIn)

// console.log(booleanIsLogedIn);
// console.log(typeof(booleanIsLogedIn));

// 1 => true; 0 => false
// "sadik" => true


// ================= Conversion ====================

let someNumber = false

let stringNumber = String(someNumber)

// console.log(stringNumber);
// console.log(typeof(stringNumber));

// 33 => 33(string)
// true/false => true/false(string)

// ================= Operation ====================

// console.log(1+1);
// console.log(2-1);
// console.log(2*1);
// console.log(1/1);
// console.log(2%3);

// console.log(typeof(1 + 1 + "1")); => type string
// console.log(typeof("1" + 1 + 1)); => type string
// console.log(typeof("2" + 2 * 2)); => type string
// console.log("2" + 4 / 2); => type string
// console.log("2" + 4 % 2); => type string