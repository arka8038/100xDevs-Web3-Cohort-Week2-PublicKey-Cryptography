// ASCII to Byte Array using Uint8Array

// Step 1: Convert a single ASCII character to a Uint8Array (which represents bytes)
let str1 = "h";
const binary1 = new TextEncoder().encode(str1);

console.log(binary1);
// Output: Uint8Array(1) [104]
// Explanation: "h" corresponds to ASCII value 104, and it's represented as a single byte (Uint8Array with length 1).

// A single character in ASCII can be converted to 1 byte (8 bits)
// Uint8Array stores elements as 1 byte, meaning values range from 0 to 255 (2^8).

// Step 2: Convert a string ("hello") to a Uint8Array
let str2 = "hello";
const binary2 = new TextEncoder().encode(str2);

console.log(binary2);
// Output: Uint8Array(5) [104, 101, 108, 108, 111]
// Explanation: Each character in the string "hello" is converted to its ASCII value,
// and the result is a byte array with length 5.

// Step 3: Understanding Uint8Array limits - Only 1 byte per element (0 to 255)
console.log(new Uint8Array([19990]));
// Output: Uint8Array(1) [22]
// Explanation: 19990 is too large to fit in a single byte (maximum 255). 
// The value is truncated to fit within the range (19990 % 256 = 22).

// Step 4: Example with the value 256, which is the upper boundary
console.log(new Uint8Array([256]));
// Output: Uint8Array(1)
