import { generateMnemonic, mnemonicToSeedSync } from "bip39"; // Import functions for mnemonic generation and seed conversion
import nacl from "tweetnacl"; // Import NaCl library for cryptographic operations
import { derivePath } from "ed25519-hd-key"; // Import path derivation function for HD wallets
import { Keypair } from "@solana/web3.js"; // Import Keypair class from Solana web3 library

// Step 1: Generate a mnemonic phrase
const mnemonic = generateMnemonic();
console.log("Mnemonic:", mnemonic); // Display the generated mnemonic

// Step 2: Convert the mnemonic to a seed
const seed = mnemonicToSeedSync(mnemonic);
console.log("Seed:", seed); // Display the seed derived from the mnemonic

// Step 3: Derive keys using HD wallet paths
for (let i = 0; i < 4; i++) {
  // Define the derivation path for the keys (using BIP44 standard for Solana)
  const path = `m/44'/501'/${i}'/0'`;

  // Derive the seed based on the specified path
  const derivedSeed = derivePath(path, seed.toString("hex")).key;

  // Generate a secret key from the derived seed using NaCl
  const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;

  // Step 4: Create a Keypair from the secret key and display the public key in Base58 format
  console.log(Keypair.fromSecretKey(secret).publicKey.toBase58());
}
