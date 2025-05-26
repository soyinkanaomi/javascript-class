//numbers and its methods with exampes
//Here's a summary of number data types and common number methods in JavaScript with examples:

// Number Data Types:

//integers Whole numbers, e.g., let x = 42;

// Floating-point numbers: Decimal numbers, e.g., let pi = 3.14;

// Number Methods:

//toFixed(): Formats a number with a specified number of decimal places.
    let nums = 3.14159; 
    console.log(nums.toFixed(2)); // "3.14"

//toPrecision(): Formats a number to a specified precision.
     let num = 3.14159; 
     console.log(num.toPrecision(4)); // "3.142"

//parseInt(): Parses a string and returns an integer.
    console.log(parseInt("42")); // 42

//parseFloat(): Parses a string and returns a floating-point number.
     console.log(parseFloat("3.14")); // 3.14

     //to exponential
     const large = 2345678
     console.log(large.toExponential())


     //isNan
     const fri = "apple"
     console.log(isNaN("fri"))

     //toString
     let point = 100;
     console.log(point.toString())


     //number.Integer
     console.log(Number.isInteger(4.5))

// Math.abs(): Returns the absolute value of a number.
     console.log(Math.abs(- + 42)); // 42
     console.log(Math.abs(-5)); // Output: 5
console.log(Math.abs(5));  // Output: 5
console.log(Math.abs(0));  // Output: 0
console.log(Math.abs(-3.14)); // Output: 3.14
console.log(Math.abs("10")); // Output: 10
console.log(Math.abs("hello")); // Output: NaN





// Math.max(): Returns the maximum of two or more numbers.return the largest number given as an input
    console.log(Math.max(1, 2, 3, )); // 3
    /*Math.max(10, 5, 20); // Returns 20
Math.max(-1, -5, -2); // Returns -1
Math.max(); // Returns -Infinity
Math.max(1, "hello", 3); // Returns NaN
Math.max(...[1, 12, 4, 18, 9]); // Returns 18
console.log(Math.max.apply)(null, [1, 12, 4, 18, 9]); // Returns 18*/



//Math.min(): Returns the minimum of two or more numbers.
     console.log(Math.min(1, 2, 3)); // 1

//Math.random(): Returns a random number between 0 and 1.
    console.log(Math.random()); // 0.123456789

// Math.round(): Rounds a number to the nearest integer.
//If the decimal part of the number is 0.5 or greater, 
//the number is rounded up to the next integer. 
//If the decimal part is less than 0.5, the number is rounded down to the previous integer. 
    console.log(Math.round(3.7)); // 4
   console.log( Math.round(2.49)); // Returns 2
console.log(Math.round(2.5));  // Returns 3
console.log(Math.round(2.8));  // Returns 3
console.log(Math.round(-2.49)); // Returns -2
console.log(Math.round(-2.5)); // Returns -2
console.log(Math.round(-2.8)); // Returns -3


//Math.floor(): Rounds a number down to the nearest integer.
    console.log(Math.floor(3.7)); // 3
    console.log(Math.floor(5.8)); // Output: 5
console.log(Math.floor(5.2)); // Output: 5
console.log(Math.floor(-5.2)); // Output: -6
console.log(Math.floor(-5.8)); // Output: -6




//Math.ceil(): Rounds a number up to the nearest integer .
//It returns the smallest integer greater than or equal to the given number.
    console.log(Math.ceil(3.2)); // 4
    console.log(Math.abs("10")); // Output: 10
console.log(Math.ceil(3.14));   // Output: 4
console.log(Math.ceil(5));      // Output: 5
console.log(Math.ceil(-2.3)); // Output: -2 remains the same number
