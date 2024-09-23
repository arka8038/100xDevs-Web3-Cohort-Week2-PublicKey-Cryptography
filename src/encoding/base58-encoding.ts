import bs58 from "bs58"; // Importing the Base58 encoding library

// Function to encode a Uint8Array (byte array) into a Base58 string
const uint8ArrayToBase58 = (bytes: Uint8Array): string => bs58.encode(bytes);

// Example: Create a Uint8Array from the ASCII codes of the string "Hello"
const byteArray = new Uint8Array([72, 101, 108, 108, 111]);

// Encode the byte array into a Base58 string
const base58String = uint8ArrayToBase58(byteArray);

// Log the Base58 encoded string
console.log(base58String); 
// Output: Expected Base58 encoded string for the byte array (typically shorter and more readable)
