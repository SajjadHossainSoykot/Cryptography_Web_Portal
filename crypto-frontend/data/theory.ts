export const theoryData = {
  caesar: {
    title: "Caesar Cipher",
    category: "Classical Cryptography",
    description:
      "The Caesar Cipher is one of the simplest and oldest substitution ciphers. Each letter of the plaintext is shifted by a fixed number of positions.",
    formula: "Encryption: C = (P + K) mod 26\nDecryption: P = (C - K) mod 26",
    example:
      "Plaintext: HELLO\nKey: 3\nEncrypted text: KHOOR\nDecrypted text: HELLO",
    steps: [
      "Take plaintext input.",
      "Take shift key input.",
      "Convert each alphabetic character to its numeric position.",
      "Shift each character by the key.",
      "Apply modulo 26.",
      "Convert numbers back to letters.",
    ],
  },

  playfair: {
    title: "Playfair Cipher",
    category: "Classical Cryptography",
    description:
      "The Playfair Cipher is a digraph substitution cipher. It encrypts pairs of letters using a 5x5 key matrix generated from a keyword.",
    formula:
      "Same row: move right for encryption, left for decryption.\nSame column: move down for encryption, up for decryption.\nRectangle rule: swap columns.",
    example:
      "Keyword: MONARCHY\nPlaintext: HELLO\nEncrypted text: CFSUPM\nDecrypted text: HELXLO",
    steps: [
      "Generate a 5x5 key matrix using the keyword.",
      "Replace J with I.",
      "Remove spaces and non-alphabetic characters.",
      "Divide plaintext into pairs.",
      "Insert X between repeated letters.",
      "Encrypt each pair using Playfair rules.",
    ],
  },

  hill: {
    title: "Hill Cipher",
    category: "Classical Cryptography",
    description:
      "The Hill Cipher is a matrix-based polygraphic substitution cipher. It encrypts blocks of letters using matrix multiplication modulo 26.",
    formula: "Encryption: C = K × P mod 26\nDecryption: P = K⁻¹ × C mod 26",
    example:
      "Plaintext: HELP\nKey Matrix: [[3, 3], [2, 5]]\nEncrypted text: HIAT\nDecrypted text: HELP",
    steps: [
      "Choose a valid 2x2 key matrix.",
      "Convert plaintext letters to numbers.",
      "Divide text into pairs.",
      "Multiply each pair by the key matrix.",
      "Apply modulo 26.",
      "Convert numbers back to letters.",
    ],
  },

  vigenere: {
    title: "Vigenère Cipher",
    category: "Classical Cryptography",
    description:
      "The Vigenère Cipher is a polyalphabetic substitution cipher that uses a repeating keyword to shift each plaintext character.",
    formula:
      "Encryption: Cᵢ = (Pᵢ + Kᵢ) mod 26\nDecryption: Pᵢ = (Cᵢ - Kᵢ) mod 26",
    example:
      "Plaintext: ATTACKATDAWN\nKeyword: LEMON\nEncrypted text: LXFOPVEFRNHR\nDecrypted text: ATTACKATDAWN",
    steps: [
      "Take plaintext input.",
      "Take keyword input.",
      "Repeat keyword to match plaintext length.",
      "Convert letters to numeric values.",
      "Apply Vigenère encryption or decryption formula.",
      "Convert numeric results back to letters.",
    ],
  },

  railFence: {
    title: "Rail Fence Cipher",
    category: "Classical Cryptography",
    description:
      "The Rail Fence Cipher is a transposition cipher. It writes the plaintext in a zigzag pattern across rails and reads row by row.",
    formula:
      "Characters are arranged in a zigzag pattern using the selected rail depth.",
    example:
      "Plaintext: WEAREDISCOVEREDFLEEATONCE\nDepth: 3\nEncrypted text: WECRLTEERDSOEEFEAOCAIVDEN\nDecrypted text: WEAREDISCOVEREDFLEEATONCE",
    steps: [
      "Take plaintext input.",
      "Take rail depth input.",
      "Write characters in zigzag pattern.",
      "Read each rail row by row.",
      "Combine rows to form ciphertext.",
    ],
  },

  rsa: {
    title: "RSA Algorithm",
    category: "Modern Cryptography",
    description:
      "RSA is an asymmetric cryptographic algorithm. It uses a public key for encryption and a private key for decryption.",
    formula:
      "n = p × q\nφ(n) = (p - 1)(q - 1)\nEncryption: C = Mᵉ mod n\nDecryption: M = Cᵈ mod n",
    example:
      "p = 61, q = 53, e = 17\nPublic Key: (17, 3233)\nPrivate Key: (2753, 3233)\nPlaintext: HELLO\nEncrypted text: [3000, 28, 2726, 2726, 1307]",
    steps: [
      "Choose two prime numbers p and q.",
      "Calculate n = p × q.",
      "Calculate φ(n).",
      "Choose public exponent e.",
      "Calculate private exponent d.",
      "Use public key for encryption.",
      "Use private key for decryption.",
    ],
  },

  diffieHellman: {
    title: "Diffie-Hellman Key Exchange",
    category: "Modern Cryptography",
    description:
      "Diffie-Hellman Key Exchange is used to generate a shared secret key between two users over an insecure channel.",
    formula:
      "A = gᵃ mod p\nB = gᵇ mod p\nShared Key A = Bᵃ mod p\nShared Key B = Aᵇ mod p",
    example:
      "p = 23, g = 5, a = 6, b = 15\nPublic key of A: 8\nPublic key of B: 19\nShared key for A: 2\nShared key for B: 2",
    steps: [
      "Choose prime number p.",
      "Choose primitive root g.",
      "User A selects private key a.",
      "User B selects private key b.",
      "Calculate public keys A and B.",
      "Exchange public keys.",
      "Calculate shared secret keys.",
    ],
  },
};