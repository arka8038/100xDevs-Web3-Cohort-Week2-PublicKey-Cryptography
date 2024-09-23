import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";

// Step 1: Generate a new Solana Keypair (public and private keys)
const keyPair = Keypair.generate();

// Step 2: Extract public and private (secret) keys
const publicKey = keyPair.publicKey.toBase58(); // Public Key in Base58 encoding
const secretKey = keyPair.secretKey; // Private (Secret) Key as a Uint8Array

// Step 3: Display the generated keys
console.log("Public Key: ", publicKey);
console.log("Public Key (Bytes): ", keyPair.publicKey.toBytes());
console.log("Private Key (Secret Key): ", secretKey);

// Step 4: Create and encode a message to sign
const message = "Send 0.1 SOL to Raman"; // Example message
const encodedMessage = new TextEncoder().encode(message); // Convert message to Uint8Array for signing

// Display the original and encoded message
console.log("Actual message: ", message);
console.log("Encoded message: ", encodedMessage);

// Step 5: Sign the encoded message with the private (secret) key using tweetnacl
const signature = nacl.sign.detached(encodedMessage, secretKey); // Sign the message
console.log("Signature: ", signature); // Display the signature

// Step 6: Verify the signature using the public key
const verify = nacl.sign.detached.verify(
  encodedMessage,            // The original message (Uint8Array)
  signature,                 // The signature to verify
  keyPair.publicKey.toBytes() // The public key used for verification
);

// Step 7: Display the result of the verification (true/false)
console.log("Verification result: ", verify);
