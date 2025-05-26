let myString = "Hello, World!";

//length: Returns the length of the string

console.log(myString.length); // Output: 13

// toUpperCase(): Converts the string to uppercase
console.log(myString.toUpperCase()); // Output: "HELLO, WORLD!"

//  toLowerCase(): Converts the string to lowercase
console.log(myString.toLowerCase()); // Output: "hello, world!"

// indexOf(): Returns the index of the first occurrence of a specified value
console.log(myString.indexOf("World")); // Output: 7

//  slice(): Extracts a part of a string and returns it as a new string
console.log(myString.slice(0, 5)); // Output: "Hello"

// replace(): Replaces a specified value with another value in a string
console.log(myString.replace("World", "JavaScript")); // Output: "Hello, JavaScript!"

//  trim(): Removes whitespace from both ends of a string
let stringWithWhitespace = "  Hello   ";
console.log(stringWithWhitespace.trim()); // Output: "Hello"

//  charAt(): Returns the character at a specified index
console.log(myString.charAt(0)); // Output: "H"

//  split(): Splits a string into an array of substrings
console.log(myString.split(", ")); // Output: ["Hello", "World!"]

//  concat(): Joins two or more strings
let newString = myString.concat(" Welcome!");
console.log(newString) // Output: "Hello, World! Welcome!"

// tostring this covact other data types to strings
let ram= [2, 4, 5]
console.log (ram.toString())

//pad start the index number should not be more than 4 while we are padding it with 0 from the start
let mew = "9"
console.log(mew.padStart(4, 0))

//pad end the index number should not be more than 5 while we are padding it with 8 from the end
let tun = "55"
console.log ( tun.padEnd(5, 8))



//let mic = "`tolani`, `ayo`, `kora`, `john`"
console.log(mic)//




