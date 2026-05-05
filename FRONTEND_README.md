# Cryptography Web Portal — Next.js Frontend Documentation

## 1. Project Goal

The goal of the frontend is to build an **interactive cryptography learning and testing portal** using **Next.js**.

The portal will have two main purposes:

1. **Interactive Cipher Testing**  
   Users can select an algorithm, enter plaintext or ciphertext, modify keys, encrypt, decrypt, generate keys, or generate shared secrets.

2. **Theory and Learning Section**  
   Users can read the theory, algorithm steps, mathematical formulas, examples, and lab-report explanation for each cryptographic method.

This frontend will connect to the existing **FastAPI backend**.

---

## 2. Existing Backend Structure

```txt
Cryptography_Web_Portal/
├── crypto-backend/
│   ├── main.py
│   ├── algorithms/
│   │   ├── caesar.py
│   │   ├── playfair.py
│   │   ├── hill.py
│   │   ├── vigenere.py
│   │   ├── rail_fence.py
│   │   ├── rsa_algo.py
│   │   └── diffie_hellman.py
│   └── requirements.txt
```

The backend exposes one main API endpoint:

```http
POST /crypto
```

Supported algorithms:

```txt
caesar
playfair
hill
vigenere
rail_fence
rsa
diffie_hellman
```

The lab report contains these experiments:

| Experiment No. | Algorithm |
|---:|---|
| 1 | Caesar Cipher |
| 2 | Playfair Cipher |
| 3 | Hill Cipher |
| 4 | Vigenère Cipher |
| 5 | Rail Fence Cipher |
| 6 | RSA Algorithm |
| 7 | Diffie-Hellman Key Exchange |

---

## 3. Suggested Frontend Name

Use:

```txt
crypto-frontend
```

Final project structure:

```txt
Cryptography_Web_Portal/
├── crypto-backend/
│   ├── main.py
│   ├── algorithms/
│   └── requirements.txt
│
├── crypto-frontend/
│   ├── app/
│   ├── components/
│   ├── lib/
│   ├── data/
│   ├── types/
│   ├── public/
│   ├── package.json
│   └── next.config.ts
│
├── README.md
├── LICENSE
└── NOTICE
```

---

## 4. Main Website Segments

The website should be divided into the following major sections:

1. **Home Page**
2. **Interactive Lab / Cipher Tester**
3. **Algorithm Theory Section**
4. **API Documentation Page**
5. **About Project Page**

---

## 5. Home Page

Route:

```txt
/
```

Purpose:

The homepage introduces the cryptography portal and gives users a clear entry point.

Sections:

- Hero Section
- Algorithm Categories
- Quick Start Button
- Backend Status
- About the Project

Suggested title:

```txt
CryptoGraphy Web Portal
```

Suggested description:

```txt
An interactive platform for learning, testing, encrypting, decrypting, and visualizing classical and modern cryptographic algorithms.
```

Suggested buttons:

- Start Experiment
- Explore Algorithms
- View Theory

Suggested homepage content:

- Welcome banner
- Project overview
- List of supported algorithms
- Button to go to `/lab`
- Button to go to `/algorithms`
- Academic project description

Suggested homepage sections:

- Hero
- Supported Algorithms
- How It Works
- Academic Purpose

---

## 6. Interactive Lab / Cipher Tester

Route:

```txt
/lab
```

This is the most important section of the portal.

Purpose:

Users can test encryption, decryption, key generation, and shared-key generation.

Layout idea:

```txt
Left Sidebar:
- Algorithm list
- Classical ciphers
- Modern cryptography

Main Panel:
- Algorithm title
- Mode selector
- Input message box
- Dynamic key fields
- Run button
- Result output

Right Panel / Bottom Panel:
- Formula
- Key details
- Matrix display
- API request preview
```

Algorithms:

| Category | Algorithms |
|---|---|
| Classical Cryptography | Caesar, Playfair, Hill, Vigenère, Rail Fence |
| Modern Cryptography | RSA, Diffie-Hellman |

Main features:

- Select algorithm
- Select mode
- Enter input text
- Change key values
- Send request to backend
- Show result
- Copy result
- Reset fields
- Show API payload preview

Example UI flow:

```txt
1. User selects "Vigenère Cipher"
2. User selects "Encrypt"
3. User enters plaintext: ATTACKATDAWN
4. User enters keyword: LEMON
5. User clicks Run
6. Frontend sends request to FastAPI
7. Result shows: LXFOPVEFRNHR
```

---

## 7. Algorithm Theory Section

Main route:

```txt
/algorithms
```

Individual algorithm routes:

```txt
/algorithms/caesar
/algorithms/playfair
/algorithms/hill
/algorithms/vigenere
/algorithms/rail-fence
/algorithms/rsa
/algorithms/diffie-hellman
```

Purpose:

This is the learning and documentation area.

Each algorithm page should include:

1. Introduction
2. Theory
3. Mathematical Formula
4. Algorithm Steps
5. Example
6. Input / Output Format
7. Try It Button
8. Source-code explanation

Example Caesar page content:

```txt
Caesar Cipher

Theory:
The Caesar Cipher is a substitution cipher where each letter is shifted by a fixed key.

Formula:
Encryption: C = (P + K) mod 26
Decryption: P = (C - K) mod 26

Example:
Plaintext: HELLO
Key: 3
Ciphertext: KHOOR
```

Each theory page should follow the same structure:

1. Title
2. Category
3. Short description
4. Theory
5. Mathematical representation
6. Algorithm steps
7. Example
8. Input requirements
9. Output explanation
10. Try in Interactive Lab button

Example Vigenère page:

```txt
Title:
Vigenère Cipher

Category:
Classical Cryptography

Theory:
The Vigenère Cipher is a polyalphabetic substitution cipher that uses a keyword to shift each plaintext character.

Formula:
Encryption: Cᵢ = (Pᵢ + Kᵢ) mod 26
Decryption: Pᵢ = (Cᵢ - Kᵢ) mod 26

Example:
Plaintext: ATTACKATDAWN
Keyword: LEMON
Ciphertext: LXFOPVEFRNHR

Try Button:
Try Vigenère Cipher
```

---

## 8. API Documentation Page

Route:

```txt
/api-docs
```

Purpose:

Show how the frontend communicates with the FastAPI backend.

Sections:

- Backend Base URL
- Available Algorithms
- Request Format
- Response Format
- Example Payloads
- Common Errors

Backend base URL:

```txt
http://127.0.0.1:8000
```

Main endpoint:

```http
POST http://127.0.0.1:8000/crypto
```

General request shape:

```json
{
  "algorithm": "caesar",
  "mode": "encrypt",
  "text": "HELLO",
  "key": {
    "shift": 3
  }
}
```

General backend payload format:

```json
{
  "algorithm": "algorithm_name",
  "mode": "encrypt_or_decrypt_or_generate",
  "text": "message or cipher array",
  "key": {}
}
```

---

## 9. About Project Page

Route:

```txt
/about
```

Purpose:

Describe the academic project.

Sections:

- Project title
- Course information
- Technologies used
- Backend summary
- Frontend summary
- Disclaimer
- Acknowledgment

Important disclaimer:

> This project is for academic learning and demonstration purposes only.  
> It is not intended for real-world secure cryptographic use.

---

## 10. Recommended Next.js App Router Structure

Use **Next.js App Router**.

```txt
crypto-frontend/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   │
│   ├── lab/
│   │   └── page.tsx
│   │
│   ├── algorithms/
│   │   ├── page.tsx
│   │   ├── caesar/
│   │   │   └── page.tsx
│   │   ├── playfair/
│   │   │   └── page.tsx
│   │   ├── hill/
│   │   │   └── page.tsx
│   │   ├── vigenere/
│   │   │   └── page.tsx
│   │   ├── rail-fence/
│   │   │   └── page.tsx
│   │   ├── rsa/
│   │   │   └── page.tsx
│   │   └── diffie-hellman/
│   │       └── page.tsx
│   │
│   ├── api-docs/
│   │   └── page.tsx
│   │
│   └── about/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Sidebar.tsx
│   │   └── Footer.tsx
│   │
│   ├── lab/
│   │   ├── AlgorithmSelector.tsx
│   │   ├── ModeToggle.tsx
│   │   ├── TextInputPanel.tsx
│   │   ├── KeyInputPanel.tsx
│   │   ├── ResultPanel.tsx
│   │   ├── ApiPreview.tsx
│   │   └── MatrixDisplay.tsx
│   │
│   ├── algorithm/
│   │   ├── AlgorithmCard.tsx
│   │   ├── FormulaBlock.tsx
│   │   ├── StepList.tsx
│   │   └── ExampleBlock.tsx
│   │
│   └── ui/
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       ├── Textarea.tsx
│       └── Select.tsx
│
├── lib/
│   ├── api.ts
│   ├── constants.ts
│   └── utils.ts
│
├── data/
│   ├── algorithms.ts
│   └── theory.ts
│
├── types/
│   └── crypto.ts
│
└── public/
```

---

## 11. Algorithm-Specific Input Fields

### 11.1 Caesar Cipher

Backend request:

```json
{
  "algorithm": "caesar",
  "mode": "encrypt",
  "text": "HELLO",
  "key": {
    "shift": 3
  }
}
```

Frontend fields:

- Text input
- Mode: encrypt / decrypt
- Shift key

Default key:

```txt
3
```

Theory summary:

The Caesar Cipher is one of the simplest and oldest substitution ciphers. Each letter of the plaintext is shifted by a fixed number of positions in the alphabet.

Formula:

```txt
Encryption: C = (P + K) mod 26
Decryption: P = (C - K) mod 26
```

Example:

```txt
Plaintext: HELLO
Key: 3
Encrypted text: KHOOR
Decrypted text: HELLO
```

---

### 11.2 Playfair Cipher

Backend request:

```json
{
  "algorithm": "playfair",
  "mode": "encrypt",
  "text": "HELLO",
  "key": {
    "keyword": "MONARCHY"
  }
}
```

Frontend fields:

- Text input
- Mode: encrypt / decrypt
- Keyword

Default keyword:

```txt
MONARCHY
```

Special UI:

- Show 5x5 key matrix after result
- Show prepared text explanation
- Show I/J rule

Theory summary:

The Playfair Cipher is a digraph substitution cipher. It encrypts pairs of letters instead of single letters. A 5x5 matrix is constructed using a keyword. The letters I and J are treated as the same character.

Rules:

1. If both letters are in the same row, replace each with the letter to its right circularly.
2. If both letters are in the same column, replace each with the letter below it circularly.
3. Otherwise, replace each letter with the letter in the same row but in the column of the other letter.
4. If a pair contains repeated letters, insert X between them.

Example:

```txt
Keyword: MONARCHY

Key Matrix:
M O N A R
C H Y B D
E F G I K
L P Q S T
U V W X Z

Plaintext: HELLO
Encrypted text: CFSUPM
Decrypted text: HELXLO
```

---

### 11.3 Hill Cipher

Backend request:

```json
{
  "algorithm": "hill",
  "mode": "encrypt",
  "text": "HELP",
  "key": {
    "matrix": [[3, 3], [2, 5]]
  }
}
```

Frontend fields:

- Text input
- Mode: encrypt / decrypt
- 2x2 matrix input

Default matrix:

```txt
[[3, 3], [2, 5]]
```

Special UI:

- Matrix editor
- Matrix preview
- Warning if matrix is not invertible modulo 26

Theory summary:

The Hill Cipher is a polygraphic substitution cipher based on linear algebra. It encrypts blocks of letters using matrix multiplication.

Formula:

```txt
Encryption: C = K × P mod 26
Decryption: P = K⁻¹ × C mod 26
```

Where:

```txt
K = Key matrix
P = Plaintext vector
C = Ciphertext vector
K⁻¹ = Inverse of key matrix modulo 26
```

Example:

```txt
Plaintext: HELP
Key Matrix: [[3, 3], [2, 5]]
Encrypted text: HIAT
Decrypted text: HELP
```

---

### 11.4 Vigenère Cipher

Backend request:

```json
{
  "algorithm": "vigenere",
  "mode": "encrypt",
  "text": "ATTACKATDAWN",
  "key": {
    "keyword": "LEMON"
  }
}
```

Frontend fields:

- Text input
- Mode: encrypt / decrypt
- Keyword

Default keyword:

```txt
KEY
```

Special UI:

- Show repeated key preview
- Show plaintext-key-cipher mapping table later

Theory summary:

The Vigenère Cipher is a polyalphabetic substitution cipher. It uses a keyword to determine the shift for each letter in the plaintext.

Formula:

```txt
Encryption: Cᵢ = (Pᵢ + Kᵢ) mod 26
Decryption: Pᵢ = (Cᵢ - Kᵢ) mod 26
```

Example:

```txt
Plaintext: ATTACKATDAWN
Keyword: LEMON
Encrypted text: LXFOPVEFRNHR
Decrypted text: ATTACKATDAWN
```

---

### 11.5 Rail Fence Cipher

Backend request:

```json
{
  "algorithm": "rail_fence",
  "mode": "encrypt",
  "text": "WEAREDISCOVEREDFLEEATONCE",
  "key": {
    "depth": 3
  }
}
```

Frontend fields:

- Text input
- Mode: encrypt / decrypt
- Rail depth

Default depth:

```txt
3
```

Special UI:

- Zigzag visualization
- Rail rows preview

Theory summary:

The Rail Fence Cipher is a transposition cipher. It does not substitute characters but rearranges their positions.

Explanation:

The plaintext is written in a zigzag pattern across a given number of rails and then read row by row to form the ciphertext.

Example:

```txt
Plaintext: WEAREDISCOVEREDFLEEATONCE
Depth: 3
Encrypted text: WECRLTEERDSOEEFEAOCAIVDEN
Decrypted text: WEAREDISCOVEREDFLEEATONCE
```

---

### 11.6 RSA Algorithm

RSA supports three modes:

```txt
keygen
encrypt
decrypt
```

RSA key generation request:

```json
{
  "algorithm": "rsa",
  "mode": "keygen",
  "text": "",
  "key": {
    "p": 61,
    "q": 53,
    "e": 17
  }
}
```

RSA encryption request:

```json
{
  "algorithm": "rsa",
  "mode": "encrypt",
  "text": "HELLO",
  "key": {
    "p": 61,
    "q": 53,
    "e": 17
  }
}
```

RSA decryption request:

```json
{
  "algorithm": "rsa",
  "mode": "decrypt",
  "text": [3000, 28, 2726, 2726, 1307],
  "key": {
    "p": 61,
    "q": 53,
    "e": 17
  }
}
```

Frontend fields:

- Mode: keygen / encrypt / decrypt
- Plaintext or cipher list
- Prime p
- Prime q
- Public exponent e

Default values:

```txt
p = 61
q = 53
e = 17
```

Special UI:

- Public key display
- Private key display
- n display
- phi display
- Cipher array display

Theory summary:

RSA is an asymmetric encryption algorithm. It uses two keys:

- Public key for encryption
- Private key for decryption

Key generation steps:

1. Choose two prime numbers p and q.
2. Compute n = p × q.
3. Compute phi(n) = (p - 1)(q - 1).
4. Choose e such that gcd(e, phi(n)) = 1.
5. Compute d as the modular inverse of e modulo phi(n).

Formula:

```txt
Encryption: C = Mᵉ mod n
Decryption: M = Cᵈ mod n
```

Example:

```txt
p = 61
q = 53
e = 17
Public Key: (17, 3233)
Private Key: (2753, 3233)

Plaintext: HELLO
Encrypted text: [3000, 28, 2726, 2726, 1307]
Decrypted text: HELLO
```

---

### 11.7 Diffie-Hellman Key Exchange

Backend request:

```json
{
  "algorithm": "diffie_hellman",
  "mode": "generate",
  "text": "",
  "key": {
    "p": 23,
    "g": 5,
    "a": 6,
    "b": 15
  }
}
```

Frontend fields:

- Prime number p
- Primitive root g
- Private key of A
- Private key of B

Default values:

```txt
p = 23
g = 5
a = 6
b = 15
```

Special UI:

- Public key of A
- Public key of B
- Shared key of A
- Shared key of B
- Matched / not matched status

Theory summary:

Diffie-Hellman Key Exchange is used to establish a shared secret key between two parties over an insecure channel.

Public values:

```txt
p = prime number
g = primitive root
```

Private values:

```txt
a = private key of user A
b = private key of user B
```

Public keys:

```txt
A = gᵃ mod p
B = gᵇ mod p
```

Shared secret:

```txt
Shared key for A = Bᵃ mod p
Shared key for B = Aᵇ mod p
```

Example:

```txt
p = 23
g = 5
a = 6
b = 15

Public key of A: 8
Public key of B: 19
Shared key for A: 2
Shared key for B: 2
```

---

## 12. Data Design for Algorithms

Create this file:

```txt
data/algorithms.ts
```

Purpose:

Store metadata for all algorithms.

Example structure:

```ts
export const algorithms = [
  {
    id: "caesar",
    name: "Caesar Cipher",
    category: "Classical Cryptography",
    description: "A substitution cipher that shifts letters by a fixed key.",
    modes: ["encrypt", "decrypt"],
    defaultKey: {
      shift: 3
    },
    route: "/algorithms/caesar"
  },
  {
    id: "playfair",
    name: "Playfair Cipher",
    category: "Classical Cryptography",
    description: "A digraph substitution cipher using a 5x5 key matrix.",
    modes: ["encrypt", "decrypt"],
    defaultKey: {
      keyword: "MONARCHY"
    },
    route: "/algorithms/playfair"
  },
  {
    id: "hill",
    name: "Hill Cipher",
    category: "Classical Cryptography",
    description: "A matrix-based polygraphic substitution cipher.",
    modes: ["encrypt", "decrypt"],
    defaultKey: {
      matrix: [[3, 3], [2, 5]]
    },
    route: "/algorithms/hill"
  },
  {
    id: "vigenere",
    name: "Vigenère Cipher",
    category: "Classical Cryptography",
    description: "A polyalphabetic substitution cipher using a keyword.",
    modes: ["encrypt", "decrypt"],
    defaultKey: {
      keyword: "KEY"
    },
    route: "/algorithms/vigenere"
  },
  {
    id: "rail_fence",
    name: "Rail Fence Cipher",
    category: "Classical Cryptography",
    description: "A transposition cipher that arranges text in a zigzag rail pattern.",
    modes: ["encrypt", "decrypt"],
    defaultKey: {
      depth: 3
    },
    route: "/algorithms/rail-fence"
  },
  {
    id: "rsa",
    name: "RSA Algorithm",
    category: "Modern Cryptography",
    description: "An asymmetric cryptographic algorithm using public and private keys.",
    modes: ["keygen", "encrypt", "decrypt"],
    defaultKey: {
      p: 61,
      q: 53,
      e: 17
    },
    route: "/algorithms/rsa"
  },
  {
    id: "diffie_hellman",
    name: "Diffie-Hellman Key Exchange",
    category: "Modern Cryptography",
    description: "A key exchange algorithm for generating a shared secret over an insecure channel.",
    modes: ["generate"],
    defaultKey: {
      p: 23,
      g: 5,
      a: 6,
      b: 15
    },
    route: "/algorithms/diffie-hellman"
  }
];
```

This file will help avoid hardcoding algorithm information across multiple components.

---

## 13. API Service Design

Create:

```txt
lib/api.ts
```

Purpose:

All frontend-to-backend communication should stay in one place.

Function idea:

```ts
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function runCrypto(payload: unknown) {
  const response = await fetch(`${API_BASE_URL}/crypto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    throw new Error("Crypto request failed");
  }

  return response.json();
}
```

Environment variable:

```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

Create:

```txt
.env.local
```

with:

```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

---

## 14. UI Component Plan

Required components:

```txt
Navbar
Footer
AlgorithmSelector
ModeToggle
TextInputPanel
KeyInputPanel
ResultPanel
ApiPreview
AlgorithmCard
FormulaBlock
ExampleBlock
MatrixDisplay
CopyButton
ErrorBox
LoadingButton
```

The most important dynamic component:

```txt
KeyInputPanel.tsx
```

Why this is important:

Each algorithm has different key inputs.

Expected behavior:

```txt
If algorithm = caesar:
    show shift input

If algorithm = playfair:
    show keyword input

If algorithm = hill:
    show 2x2 matrix input

If algorithm = vigenere:
    show keyword input

If algorithm = rail_fence:
    show depth input

If algorithm = rsa:
    show p, q, e inputs

If algorithm = diffie_hellman:
    show p, g, a, b inputs
```

---

## 15. Recommended Lab Page UI Layout

Desktop layout:

```txt
-----------------------------------------------------
Navbar
-----------------------------------------------------

[Sidebar Algorithm List]     [Main Experiment Panel]

Classical                   Algorithm: Caesar Cipher
- Caesar                    Mode: Encrypt / Decrypt
- Playfair                  Input Text
- Hill                      Key Fields
- Vigenère                  Run Button
- Rail Fence                Result Output

Modern                      API Payload Preview
- RSA                       Explanation / Formula
- Diffie-Hellman

-----------------------------------------------------
Footer
-----------------------------------------------------
```

Mobile layout:

```txt
Algorithm dropdown
Experiment form
Result panel
Theory accordion
```

---

## 16. Suggested Design Style

Use a modern academic-tech design.

Recommended stack:

```txt
Next.js
TypeScript
Tailwind CSS
shadcn/ui
lucide-react icons
```

Visual style:

```txt
Dark background
Glassmorphism cards
Blue / cyan / purple accent
Monospace result blocks
Rounded cards
Clean algorithm tabs
Copy buttons
Responsive layout
```

Example color direction:

```txt
Background: dark navy / slate
Accent: cyan or violet
Cards: dark gray with border
Text: white / slate-300
Code blocks: black or slate-950
```

---

## 17. Navigation Plan

Navbar links:

```txt
Home
Interactive Lab
Algorithms
API Docs
About
```

Sidebar in lab:

```txt
Classical Ciphers
- Caesar Cipher
- Playfair Cipher
- Hill Cipher
- Vigenère Cipher
- Rail Fence Cipher

Modern Cryptography
- RSA Algorithm
- Diffie-Hellman
```

---

## 18. Backend Integration Notes

The backend currently uses:

```http
POST /crypto
```

So the frontend does not need many separate endpoints.

Instead, the frontend should send different payloads to the same endpoint.

General payload:

```json
{
  "algorithm": "algorithm_name",
  "mode": "encrypt_or_decrypt_or_generate",
  "text": "message or cipher array",
  "key": {}
}
```

This is good for the frontend because the UI can be dynamic.

---

## 19. Running the Backend Correctly

When running the backend, because `main.py` is inside `crypto-backend`, run the command from inside that folder:

```bash
cd crypto-backend
uvicorn main:app --reload
```

If running from the project root, this error may happen:

```txt
Error loading ASGI app. Could not import module "main"
```

Reason:

```txt
main.py is not in the current root directory.
```

Alternative from project root:

```bash
uvicorn crypto-backend.main:app --reload
```

But because the folder name contains a hyphen, this may not work properly as a Python module path. The safer way is:

```bash
cd crypto-backend
uvicorn main:app --reload
```

---

## 20. Development Roadmap

### Phase 1 — Setup

- Create Next.js app
- Install Tailwind CSS
- Install shadcn/ui
- Create folder structure
- Setup environment variable
- Create Navbar and layout

### Phase 2 — Static Pages

- Home page
- Algorithms listing page
- Individual theory pages
- About page
- API docs page

### Phase 3 — Interactive Lab

- Algorithm selector
- Mode selector
- Input text area
- Dynamic key fields
- Result panel
- API call function
- Error handling
- Loading state
- Copy result button

### Phase 4 — Advanced UI

- Playfair matrix display
- Hill matrix editor
- Rail Fence zigzag visualizer
- RSA key display
- Diffie-Hellman key matching indicator
- API payload preview
- Dark mode

### Phase 5 — Polish

- Responsive design
- Better validation
- Toast messages
- Deployment
- README update
- Screenshots

---

## 21. Final Recommended Frontend Feature List

The final frontend should support:

- Home page
- Interactive cipher testing
- Encrypt and decrypt message
- Change default keys
- RSA key generation
- Diffie-Hellman shared key generation
- Algorithm theory pages
- Formula and examples
- API request preview
- Result copy button
- Matrix visualization
- Responsive design
- Dark modern UI
- Academic disclaimer

---

## 22. Recommended Build Order

Build the frontend in this order:

1. Create the Next.js app
2. Setup Tailwind CSS
3. Build the layout: Navbar, Footer, main container
4. Build `/lab` page UI without API first
5. Connect `/lab` page to FastAPI
6. Add theory pages one by one
7. Add visualization components
8. Polish design and responsiveness

---

## 23. Frontend Prompt for Another AI

Use the following instruction if asking another AI to generate the frontend:

```txt
I am building a Cryptography Web Portal using a FastAPI backend and a Next.js frontend.

The backend already exists and exposes POST /crypto.

The backend supports:
- Caesar Cipher
- Playfair Cipher
- Hill Cipher
- Vigenère Cipher
- Rail Fence Cipher
- RSA Algorithm
- Diffie-Hellman Key Exchange

I want the frontend in Next.js App Router with TypeScript and Tailwind CSS.

The frontend must include:
- Home page
- Interactive Lab page
- Algorithm theory pages
- API documentation page
- About page
- Dynamic key input fields for each algorithm
- Result display
- API payload preview
- Copy result button
- Dark modern academic UI

The main interactive page should allow users to:
- Select an algorithm
- Select mode: encrypt, decrypt, keygen, or generate depending on the algorithm
- Enter plaintext or ciphertext
- Modify keys
- Send request to FastAPI backend
- View result
- Copy result

Backend base URL:
http://127.0.0.1:8000

Main endpoint:
POST /crypto

General request format:
{
  "algorithm": "algorithm_name",
  "mode": "encrypt_or_decrypt_or_generate",
  "text": "message or cipher array",
  "key": {}
}

Use this documentation as the main frontend planning guide.
```

---

## 24. Notes for Future Frontend Development

When implementing the frontend, do not build everything at once.

Recommended practical order:

1. Build the visual layout first.
2. Add algorithm selector.
3. Add dynamic input fields.
4. Connect one algorithm first, such as Caesar Cipher.
5. After Caesar works, connect the remaining algorithms.
6. Add RSA and Diffie-Hellman last because their input/output formats are different.
7. Add theory pages after the interactive lab is stable.

This approach will make development easier and reduce debugging problems.
