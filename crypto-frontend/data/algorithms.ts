export type AlgorithmCategory = "Classical Cryptography" | "Modern Cryptography";

export type AlgorithmMode = "encrypt" | "decrypt" | "keygen" | "generate";

export type Algorithm = {
  id:
    | "caesar"
    | "playfair"
    | "hill"
    | "vigenere"
    | "rail_fence"
    | "rsa"
    | "diffie_hellman";
  name: string;
  shortName: string;
  category: AlgorithmCategory;
  description: string;
  modes: AlgorithmMode[];
  route: string;
  defaultKey: Record<string, unknown>;
};

export const algorithms: Algorithm[] = [
  {
    id: "caesar",
    name: "Caesar Cipher",
    shortName: "Caesar",
    category: "Classical Cryptography",
    description:
      "A simple substitution cipher where each letter is shifted by a fixed number of positions.",
    modes: ["encrypt", "decrypt"],
    route: "/algorithms/caesar",
    defaultKey: {
      shift: 3,
    },
  },
  {
    id: "playfair",
    name: "Playfair Cipher",
    shortName: "Playfair",
    category: "Classical Cryptography",
    description:
      "A digraph substitution cipher that encrypts pairs of letters using a 5x5 key matrix.",
    modes: ["encrypt", "decrypt"],
    route: "/algorithms/playfair",
    defaultKey: {
      keyword: "MONARCHY",
    },
  },
  {
    id: "hill",
    name: "Hill Cipher",
    shortName: "Hill",
    category: "Classical Cryptography",
    description:
      "A matrix-based cipher that uses linear algebra and modulo arithmetic.",
    modes: ["encrypt", "decrypt"],
    route: "/algorithms/hill",
    defaultKey: {
      matrix: [
        [3, 3],
        [2, 5],
      ],
    },
  },
  {
    id: "vigenere",
    name: "Vigenère Cipher",
    shortName: "Vigenère",
    category: "Classical Cryptography",
    description:
      "A polyalphabetic substitution cipher that uses a repeating keyword.",
    modes: ["encrypt", "decrypt"],
    route: "/algorithms/vigenere",
    defaultKey: {
      keyword: "KEY",
    },
  },
  {
    id: "rail_fence",
    name: "Rail Fence Cipher",
    shortName: "Rail Fence",
    category: "Classical Cryptography",
    description:
      "A transposition cipher that writes text in a zigzag rail pattern.",
    modes: ["encrypt", "decrypt"],
    route: "/algorithms/rail-fence",
    defaultKey: {
      depth: 3,
    },
  },
  {
    id: "rsa",
    name: "RSA Algorithm",
    shortName: "RSA",
    category: "Modern Cryptography",
    description:
      "An asymmetric cryptographic algorithm using public and private keys.",
    modes: ["keygen", "encrypt", "decrypt"],
    route: "/algorithms/rsa",
    defaultKey: {
      p: 61,
      q: 53,
      e: 17,
    },
  },
  {
    id: "diffie_hellman",
    name: "Diffie-Hellman Key Exchange",
    shortName: "Diffie-Hellman",
    category: "Modern Cryptography",
    description:
      "A key exchange method for generating a shared secret over an insecure channel.",
    modes: ["generate"],
    route: "/algorithms/diffie-hellman",
    defaultKey: {
      p: 23,
      g: 5,
      a: 6,
      b: 15,
    },
  },
];