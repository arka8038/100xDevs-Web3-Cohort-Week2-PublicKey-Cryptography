// Hexadecimal (Base16) takes 4 bits at a time
// Ranges from 0 to F (which is 0 to 15 in decimal -> 0000 to 1111 in binary)
// 1 hexadecimal character represents 4 bits of data

// Function to convert a string to a hexadecimal (base16) encoded string
const stringToHex = (input: string): string => {
    // Convert each character of the string to its hexadecimal representation
    return Array.from(input)
        .map(char => char.charCodeAt(0).toString(16)) // Convert each character to its char code, then to hex
        .join(""); // Join the hex values into a single string
};

// Example: Convert the string "Hello" to hexadecimal
const inputString = "Hello";
const hexString = stringToHex(inputString);

console.log(`Input String: ${inputString}`);
console.log(`Hexadecimal Encoded: ${hexString}`);
// Output for "Hello": 48656c6c6f
// Explanation: 'H' -> 48, 'e' -> 65, 'l' -> 6c, 'o' -> 6f (all in hex)
