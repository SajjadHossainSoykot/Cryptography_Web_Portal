# CryptoGraphy Web Portal — Backend Documentation

## 1. Project Overview

The **CryptoGraphy Web Portal Backend** is a **FastAPI-based REST API** created for a cryptography learning and testing portal.

This backend works as the main API layer for the project. It receives requests from a frontend application, processes cryptographic operations, and returns the result as JSON.

The backend is based on the cryptography laboratory experiments from the lab report, which includes Caesar Cipher, Playfair Cipher, Hill Cipher, Vigenère Cipher, Rail Fence Cipher, RSA Algorithm, and Diffie-Hellman Key Exchange. The lab report lists these seven experiments as the core cryptography implementations. :contentReference[oaicite:0]{index=0}

The backend currently supports:

| Category | Algorithms |
|---|---|
| Classical Cryptography | Caesar Cipher, Playfair Cipher, Hill Cipher, Vigenère Cipher, Rail Fence Cipher |
| Modern Cryptography | RSA Algorithm, Diffie-Hellman Key Exchange |

---

## 2. Backend Purpose

The purpose of this backend is to provide a single API service where users can:

- Encrypt plaintext
- Decrypt ciphertext
- Generate RSA keys
- Encrypt and decrypt using RSA
- Generate Diffie-Hellman public keys
- Generate Diffie-Hellman shared secret keys
- Test classical cryptography algorithms
- Connect the backend with a future Next.js frontend

The backend is designed mainly for **academic learning**, **laboratory demonstration**, and **interactive cryptography testing**.

---

## 3. Backend Technology Stack

| Technology | Purpose |
|---|---|
| Python | Main backend programming language |
| FastAPI | Web framework for creating REST APIs |
| Uvicorn | ASGI server for running the FastAPI app |
| Pydantic | Request body validation |
| CORS Middleware | Allows frontend applications to call the backend |
| Modular Python Files | Keeps each cryptographic algorithm in a separate file |

---

## 4. Backend Folder Structure

```txt
crypto-backend/
├── main.py
├── requirements.txt
├── algorithms/
│   ├── __init__.py
│   ├── caesar.py
│   ├── playfair.py
│   ├── hill.py
│   ├── vigenere.py
│   ├── rail_fence.py
│   ├── rsa_algo.py
│   └── diffie_hellman.py
```

---

## 5. Folder and File Explanation

| File / Folder | Description |
|---|---|
| `main.py` | Main FastAPI application file. It defines the API routes and connects all algorithm modules. |
| `requirements.txt` | Contains the Python packages required to run the backend. |
| `algorithms/` | Contains separate Python files for each cryptographic algorithm. |
| `algorithms/__init__.py` | Makes the `algorithms` folder a Python package. |
| `algorithms/caesar.py` | Caesar Cipher encryption and decryption logic. |
| `algorithms/playfair.py` | Playfair Cipher key matrix generation, encryption, and decryption. |
| `algorithms/hill.py` | Hill Cipher matrix-based encryption and decryption. |
| `algorithms/vigenere.py` | Vigenère Cipher encryption and decryption. |
| `algorithms/rail_fence.py` | Rail Fence Cipher encryption and decryption. |
| `algorithms/rsa_algo.py` | RSA key generation, encryption, and decryption. |
| `algorithms/diffie_hellman.py` | Diffie-Hellman public key and shared secret generation. |

---

## 6. Installation Guide

### Step 1: Go to the Backend Folder

From the main project directory:

```bash
cd crypto-backend
```

### Step 2: Create a Virtual Environment

For macOS or Linux:

```bash
python3 -m venv venv
```

For Windows:

```bash
python -m venv venv
```

### Step 3: Activate the Virtual Environment

For macOS or Linux:

```bash
source venv/bin/activate
```

For Windows PowerShell:

```powershell
venv\Scripts\Activate.ps1
```

For Windows CMD:

```cmd
venv\Scripts\activate
```

### Step 4: Install Required Packages

```bash
pip install -r requirements.txt
```

---

## 7. Required Dependencies

The backend dependencies are:

```txt
fastapi
uvicorn
pydantic
python-multipart
```

### Dependency Explanation

| Package | Purpose |
|---|---|
| `fastapi` | Creates the API application and routes. |
| `uvicorn` | Runs the FastAPI app as a development server. |
| `pydantic` | Validates request data. |
| `python-multipart` | Supports form-data and multipart parsing if needed later. |

---

## 8. Running the Backend Server

Because `main.py` is inside the `crypto-backend` folder, run the server from inside that folder.

```bash
cd crypto-backend
uvicorn main:app --reload
```

After running the command, the backend should start at:

```txt
http://127.0.0.1:8000
```

Expected terminal output:

```txt
INFO:     Uvicorn running on http://127.0.0.1:8000
INFO:     Application startup complete.
```

---

## 9. Important Running Note

If this command is run from the wrong directory:

```bash
uvicorn main:app --reload
```

you may get this error:

```txt
ERROR: Error loading ASGI app. Could not import module "main".
```

### Reason

The file `main.py` is inside the `crypto-backend` folder. If the terminal is currently in the project root or another directory, Python cannot find the `main` module.

### Correct Solution

```bash
cd crypto-backend
uvicorn main:app --reload
```

---

## 10. Backend Base URL

Local development backend URL:

```txt
http://127.0.0.1:8000
```

Main API endpoint:

```txt
POST /crypto
```

Full endpoint URL:

```txt
http://127.0.0.1:8000/crypto
```

---

## 11. Available API Endpoints

| Method | Endpoint | Purpose |
|---|---|---|
| `GET` | `/` | Checks whether the backend is running and returns available algorithms. |
| `POST` | `/crypto` | Runs encryption, decryption, RSA key generation, or Diffie-Hellman key exchange. |

---

# 12. Root Endpoint

## Endpoint

```http
GET /
```

## Purpose

This endpoint checks whether the backend is running. It also returns the list of available algorithms.

## Example Request

```bash
curl http://127.0.0.1:8000/
```

## Example Response

```json
{
  "message": "CryptoGraphy Portal Backend is running",
  "available_algorithms": [
    "caesar",
    "playfair",
    "hill",
    "vigenere",
    "rail_fence",
    "rsa",
    "diffie_hellman"
  ]
}
```

---

# 13. Main Crypto Endpoint

## Endpoint

```http
POST /crypto
```

## Purpose

This is the main endpoint of the backend. All cryptographic operations are handled through this single endpoint.

The frontend sends:

- Algorithm name
- Mode
- Input text
- Key values

The backend returns:

- Algorithm name
- Mode
- Result
- Additional data if needed

---

## 14. General Request Format

```json
{
  "algorithm": "algorithm_name",
  "mode": "encrypt_or_decrypt_or_keygen_or_generate",
  "text": "message or cipher array",
  "key": {}
}
```

---

## 15. Request Body Fields

| Field | Type | Required | Description |
|---|---|---|---|
| `algorithm` | string | Yes | Name of the cryptographic algorithm. |
| `mode` | string | Yes | Operation type such as `encrypt`, `decrypt`, `keygen`, or `generate`. |
| `text` | string, list, or null | No | Plaintext, ciphertext, or RSA cipher array. |
| `key` | object | No | Key information required by the selected algorithm. |

---

## 16. Supported Algorithm Names

```txt
caesar
playfair
hill
vigenere
rail_fence
rsa
diffie_hellman
```

---

# 17. Request Model

The backend uses a Pydantic model named `CryptoRequest`.

```python
class CryptoRequest(BaseModel):
    algorithm: str
    mode: str
    text: str | list[int] | None = ""
    key: dict | None = None
```

## Field Explanation

| Field | Type | Description |
|---|---|---|
| `algorithm` | `str` | The selected algorithm name. |
| `mode` | `str` | The operation mode. |
| `text` | `str`, `list[int]`, or `None` | Plaintext, ciphertext, or RSA encrypted list. |
| `key` | `dict` or `None` | Key values needed by the selected algorithm. |

---

# 18. Algorithm Mode Summary

| Algorithm | Supported Modes | Key Fields |
|---|---|---|
| `caesar` | `encrypt`, `decrypt` | `shift` |
| `playfair` | `encrypt`, `decrypt` | `keyword` |
| `hill` | `encrypt`, `decrypt` | `matrix` |
| `vigenere` | `encrypt`, `decrypt` | `keyword` |
| `rail_fence` | `encrypt`, `decrypt` | `depth` |
| `rsa` | `keygen`, `encrypt`, `decrypt` | `p`, `q`, `e` |
| `diffie_hellman` | `generate` | `p`, `g`, `a`, `b` |

---

# 19. Default Key Summary

| Algorithm | Default Key |
|---|---|
| Caesar Cipher | `shift = 3` |
| Playfair Cipher | `keyword = MONARCHY` |
| Hill Cipher | `matrix = [[3, 3], [2, 5]]` |
| Vigenère Cipher | `keyword = KEY` |
| Rail Fence Cipher | `depth = 3` |
| RSA Algorithm | `p = 61`, `q = 53`, `e = 17` |
| Diffie-Hellman | `p = 23`, `g = 5`, `a = 6`, `b = 15` |

---

# 20. Input and Output Type Summary

| Algorithm | Input Type | Output Type |
|---|---|---|
| Caesar | string | string |
| Playfair | string | string plus key matrix |
| Hill | string | string |
| Vigenère | string | string |
| Rail Fence | string | string |
| RSA keygen | empty string | object |
| RSA encrypt | string | object with cipher array |
| RSA decrypt | list of integers | object with plaintext |
| Diffie-Hellman | empty string | object with public keys and shared keys |

---

# 21. Response Format

Most algorithms return this general response:

```json
{
  "algorithm": "algorithm_name",
  "mode": "operation_mode",
  "result": "output"
}
```

Some algorithms return additional data.

For example:

- Playfair returns the key matrix.
- Hill returns the matrix.
- Vigenère returns the keyword.
- Rail Fence returns the depth.
- RSA returns public key, private key, `n`, and `phi`.
- Diffie-Hellman returns public keys, shared keys, and matched status.

---

# 22. Caesar Cipher API Documentation

## Purpose

The Caesar Cipher is one of the simplest and oldest substitution ciphers. Each letter of the plaintext is shifted by a fixed number of positions in the alphabet.

## Supported Modes

| Mode | Description |
|---|---|
| `encrypt` | Encrypt plaintext. |
| `decrypt` | Decrypt ciphertext. |

## Default Key

```json
{
  "shift": 3
}
```

## Encryption Request

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

## Encryption Response

```json
{
  "algorithm": "caesar",
  "mode": "encrypt",
  "result": "KHOOR"
}
```

## Decryption Request

```json
{
  "algorithm": "caesar",
  "mode": "decrypt",
  "text": "KHOOR",
  "key": {
    "shift": 3
  }
}
```

## Decryption Response

```json
{
  "algorithm": "caesar",
  "mode": "decrypt",
  "result": "HELLO"
}
```

## Backend Function Names

```python
encrypt_caesar(text, key)
decrypt_caesar(text, key)
```

## Algorithm Notes

- Alphabetic characters are shifted.
- Non-alphabetic characters are preserved.
- Uppercase and lowercase letters are handled separately.
- The shift key is reduced using modulo 26.
- Example: with key `3`, `A` becomes `D`.

---

# 23. Playfair Cipher API Documentation

## Purpose

The Playfair Cipher is a digraph substitution cipher. It encrypts pairs of letters instead of single letters. A 5x5 matrix is generated using a keyword.

## Supported Modes

| Mode | Description |
|---|---|
| `encrypt` | Encrypt plaintext. |
| `decrypt` | Decrypt ciphertext. |

## Default Key

```json
{
  "keyword": "MONARCHY"
}
```

## Encryption Request

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

## Encryption Response

```json
{
  "algorithm": "playfair",
  "mode": "encrypt",
  "keyword": "MONARCHY",
  "matrix": [
    ["M", "O", "N", "A", "R"],
    ["C", "H", "Y", "B", "D"],
    ["E", "F", "G", "I", "K"],
    ["L", "P", "Q", "S", "T"],
    ["U", "V", "W", "X", "Z"]
  ],
  "result": "CFSUPM"
}
```

## Decryption Request

```json
{
  "algorithm": "playfair",
  "mode": "decrypt",
  "text": "CFSUPM",
  "key": {
    "keyword": "MONARCHY"
  }
}
```

## Decryption Response

```json
{
  "algorithm": "playfair",
  "mode": "decrypt",
  "keyword": "MONARCHY",
  "matrix": [
    ["M", "O", "N", "A", "R"],
    ["C", "H", "Y", "B", "D"],
    ["E", "F", "G", "I", "K"],
    ["L", "P", "Q", "S", "T"],
    ["U", "V", "W", "X", "Z"]
  ],
  "result": "HELXLO"
}
```

## Backend Function Names

```python
encrypt_playfair(text, keyword)
decrypt_playfair(text, keyword)
generate_key_matrix(keyword)
prepare_text(text)
find_position(matrix, ch)
```

## Algorithm Rules

1. Generate a 5x5 key matrix using a keyword.
2. Remove duplicate letters from the keyword.
3. Replace `J` with `I`.
4. Convert plaintext to uppercase.
5. Remove non-alphabetic characters.
6. Divide plaintext into letter pairs.
7. If a pair contains repeated letters, insert `X` between them.
8. If the final text length is odd, add `X`.
9. If both letters are in the same row, shift right during encryption.
10. If both letters are in the same column, shift down during encryption.
11. Otherwise, use the rectangle rule.
12. During decryption, reverse the rules.

## Notes

- The response includes the generated key matrix.
- `I` and `J` are treated as the same letter.
- Decrypted text may contain filler `X`.
- Example: `HELLO` may decrypt as `HELXLO`.

---

# 24. Hill Cipher API Documentation

## Purpose

The Hill Cipher is a polygraphic substitution cipher based on linear algebra. It encrypts blocks of letters using matrix multiplication modulo 26.

## Supported Modes

| Mode | Description |
|---|---|
| `encrypt` | Encrypt plaintext. |
| `decrypt` | Decrypt ciphertext. |

## Default Key

```json
{
  "matrix": [[3, 3], [2, 5]]
}
```

## Encryption Request

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

## Encryption Response

```json
{
  "algorithm": "hill",
  "mode": "encrypt",
  "matrix": [[3, 3], [2, 5]],
  "result": "HIAT"
}
```

## Decryption Request

```json
{
  "algorithm": "hill",
  "mode": "decrypt",
  "text": "HIAT",
  "key": {
    "matrix": [[3, 3], [2, 5]]
  }
}
```

## Decryption Response

```json
{
  "algorithm": "hill",
  "mode": "decrypt",
  "matrix": [[3, 3], [2, 5]],
  "result": "HELP"
}
```

## Backend Function Names

```python
encrypt_hill(text, key)
decrypt_hill(cipher, key)
matrix_inverse_2x2(matrix)
mod_inverse(a, m)
process_text(text)
text_to_numbers(text)
numbers_to_text(nums)
```

## Algorithm Notes

- The current implementation uses a 2x2 key matrix.
- Plaintext is converted to uppercase.
- Non-alphabetic characters are removed.
- If plaintext length is odd, `X` is added.
- The key matrix must be invertible modulo 26.
- If the matrix has no modular inverse, decryption will fail.
- Hill Cipher depends on matrix multiplication and modular arithmetic.

## Mathematical Idea

```txt
Encryption: C = K × P mod 26
Decryption: P = K⁻¹ × C mod 26
```

Where:

```txt
K   = Key matrix
P   = Plaintext vector
C   = Ciphertext vector
K⁻¹ = Inverse of key matrix modulo 26
```

---

# 25. Vigenère Cipher API Documentation

## Purpose

The Vigenère Cipher is a polyalphabetic substitution cipher. It uses a keyword to determine the shift for each plaintext letter.

## Supported Modes

| Mode | Description |
|---|---|
| `encrypt` | Encrypt plaintext. |
| `decrypt` | Decrypt ciphertext. |

## Default Key

```json
{
  "keyword": "KEY"
}
```

## Encryption Request

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

## Encryption Response

```json
{
  "algorithm": "vigenere",
  "mode": "encrypt",
  "keyword": "LEMON",
  "result": "LXFOPVEFRNHR"
}
```

## Decryption Request

```json
{
  "algorithm": "vigenere",
  "mode": "decrypt",
  "text": "LXFOPVEFRNHR",
  "key": {
    "keyword": "LEMON"
  }
}
```

## Decryption Response

```json
{
  "algorithm": "vigenere",
  "mode": "decrypt",
  "keyword": "LEMON",
  "result": "ATTACKATDAWN"
}
```

## Backend Function Names

```python
generate_key(text, key)
encrypt_vigenere(text, key)
decrypt_vigenere(cipher, key)
```

## Algorithm Notes

- Text is converted to uppercase.
- Keyword is repeated automatically.
- Non-alphabetic characters are preserved.
- Keyword should contain alphabetic characters.
- Empty keyword should not be used.

## Mathematical Idea

```txt
Encryption: Cᵢ = (Pᵢ + Kᵢ) mod 26
Decryption: Pᵢ = (Cᵢ - Kᵢ) mod 26
```

Where:

```txt
Pᵢ = Plaintext letter value
Cᵢ = Ciphertext letter value
Kᵢ = Key letter value
```

---

# 26. Rail Fence Cipher API Documentation

## Purpose

The Rail Fence Cipher is a transposition cipher. It does not replace letters. Instead, it rearranges character positions using a zigzag pattern.

## Supported Modes

| Mode | Description |
|---|---|
| `encrypt` | Encrypt plaintext. |
| `decrypt` | Decrypt ciphertext. |

## Default Key

```json
{
  "depth": 3
}
```

## Encryption Request

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

## Encryption Response

```json
{
  "algorithm": "rail_fence",
  "mode": "encrypt",
  "depth": 3,
  "result": "WECRLTEERDSOEEFEAOCAIVDEN"
}
```

## Decryption Request

```json
{
  "algorithm": "rail_fence",
  "mode": "decrypt",
  "text": "WECRLTEERDSOEEFEAOCAIVDEN",
  "key": {
    "depth": 3
  }
}
```

## Decryption Response

```json
{
  "algorithm": "rail_fence",
  "mode": "decrypt",
  "depth": 3,
  "result": "WEAREDISCOVEREDFLEEATONCE"
}
```

## Backend Function Names

```python
encrypt_rail_fence(text, key)
decrypt_rail_fence(cipher, key)
```

## Algorithm Notes

- The depth value is converted to an integer.
- If depth is less than or equal to 1, the original text is returned.
- Spaces and symbols are treated as normal characters.
- The algorithm writes characters in zigzag form and reads them row by row.

## Example Zigzag Idea

```txt
Plaintext: WEAREDISCOVERED
Depth: 3

W . . . E . . . C . . . R
. E . R . D . S . O . E .
. . A . . . I . . . V . .
```

Reading row by row creates the ciphertext.

---

# 27. RSA Algorithm API Documentation

## Purpose

RSA is an asymmetric cryptographic algorithm. It uses two keys:

- Public key for encryption
- Private key for decryption

This backend supports RSA key generation, encryption, and decryption.

## Supported Modes

| Mode | Description |
|---|---|
| `keygen` | Generate RSA public and private keys. |
| `encrypt` | Encrypt plaintext using RSA. |
| `decrypt` | Decrypt an RSA cipher array. |

## Default Key

```json
{
  "p": 61,
  "q": 53,
  "e": 17
}
```

## Key Field Explanation

| Field | Meaning |
|---|---|
| `p` | First prime number |
| `q` | Second prime number |
| `e` | Public exponent |

---

## 27.1 RSA Key Generation

### Request

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

### Response

```json
{
  "algorithm": "rsa",
  "mode": "keygen",
  "result": {
    "public_key": [17, 3233],
    "private_key": [2753, 3233],
    "n": 3233,
    "phi": 3120
  }
}
```

---

## 27.2 RSA Encryption

### Request

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

### Response

```json
{
  "algorithm": "rsa",
  "mode": "encrypt",
  "result": {
    "cipher": [3000, 28, 2726, 2726, 1307],
    "public_key": [17, 3233],
    "private_key": [2753, 3233],
    "n": 3233,
    "phi": 3120
  }
}
```

---

## 27.3 RSA Decryption

### Request

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

### Response

```json
{
  "algorithm": "rsa",
  "mode": "decrypt",
  "result": {
    "plain": "HELLO",
    "public_key": [17, 3233],
    "private_key": [2753, 3233],
    "n": 3233,
    "phi": 3120
  }
}
```

## Backend Function Names

```python
rsa_keygen(p, q, e)
rsa_encrypt(text, p, q, e)
rsa_decrypt(cipher, p, q, e)
mod_inverse(e, phi)
```

## RSA Algorithm Steps

1. Select two prime numbers `p` and `q`.
2. Compute `n = p × q`.
3. Compute `phi = (p - 1) × (q - 1)`.
4. Select `e` such that `gcd(e, phi) = 1`.
5. Compute `d`, the modular inverse of `e` modulo `phi`.
6. Public key is `(e, n)`.
7. Private key is `(d, n)`.
8. Encrypt each plaintext character using the public key.
9. Decrypt each cipher value using the private key.

## Mathematical Idea

```txt
Encryption: C = Mᵉ mod n
Decryption: M = Cᵈ mod n
```

## RSA Notes

- RSA encryption returns a list of integers.
- RSA decryption requires the `text` field to be a list of integers.
- If `text` is not a list during decryption, the backend returns an error.
- `e` must be coprime with `phi(n)`.
- This implementation is educational and simplified.
- It does not use padding.
- It should not be used for real-world secure communication.

---

# 28. Diffie-Hellman Key Exchange API Documentation

## Purpose

Diffie-Hellman Key Exchange is used to generate a shared secret key between two parties over an insecure communication channel.

## Supported Mode

| Mode | Description |
|---|---|
| `generate` | Generate public keys and shared secret keys. |

## Default Key

```json
{
  "p": 23,
  "g": 5,
  "a": 6,
  "b": 15
}
```

## Key Field Explanation

| Field | Meaning |
|---|---|
| `p` | Prime number |
| `g` | Primitive root |
| `a` | Private key of user A |
| `b` | Private key of user B |

## Request

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

## Response

```json
{
  "algorithm": "diffie_hellman",
  "mode": "generate",
  "values": {
    "p": 23,
    "g": 5,
    "a": 6,
    "b": 15
  },
  "result": {
    "public_key_a": 8,
    "public_key_b": 19,
    "shared_key_a": 2,
    "shared_key_b": 2,
    "matched": true
  }
}
```

## Backend Function Name

```python
diffie_hellman(p, g, a, b)
```

## Algorithm Steps

1. Select a public prime number `p`.
2. Select a public primitive root `g`.
3. User A selects private key `a`.
4. User B selects private key `b`.
5. Compute public key of A.
6. Compute public key of B.
7. Exchange public keys.
8. Compute shared key for A.
9. Compute shared key for B.
10. Check whether both shared keys match.

## Mathematical Idea

```txt
Public key of A: A = gᵃ mod p
Public key of B: B = gᵇ mod p

Shared key for A: K = Bᵃ mod p
Shared key for B: K = Aᵇ mod p
```

## Notes

- Both users should get the same shared key.
- The `matched` field shows whether the shared keys are equal.
- Small numbers are used for demonstration.
- This implementation is educational only.

---

# 29. Error Handling

The backend uses FastAPI `HTTPException` to return errors.

---

## 29.1 Unknown Algorithm Error

### Example Request

```json
{
  "algorithm": "unknown",
  "mode": "encrypt",
  "text": "HELLO",
  "key": {}
}
```

### Example Response

```json
{
  "detail": "Unknown algorithm"
}
```

Status code:

```txt
400 Bad Request
```

---

## 29.2 Invalid Mode Error

Example wrong request for Caesar Cipher:

```json
{
  "algorithm": "caesar",
  "mode": "generate",
  "text": "HELLO",
  "key": {
    "shift": 3
  }
}
```

Example response:

```json
{
  "detail": "Invalid mode for Caesar"
}
```

Status code:

```txt
400 Bad Request
```

---

## 29.3 RSA Decryption Input Error

RSA decryption requires `text` to be a list of integers.

Wrong request:

```json
{
  "algorithm": "rsa",
  "mode": "decrypt",
  "text": "3000,28,2726,2726,1307",
  "key": {
    "p": 61,
    "q": 53,
    "e": 17
  }
}
```

Correct request:

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

Example error response:

```json
{
  "detail": "RSA decrypt text must be a list of integers"
}
```

Status code:

```txt
400 Bad Request
```

---

## 29.4 Internal Algorithm Error

If an algorithm fails because of invalid input, the backend may return:

```json
{
  "detail": "error message"
}
```

Status code:

```txt
500 Internal Server Error
```

Possible causes:

| Error Cause | Example |
|---|---|
| Hill matrix error | Matrix has no modular inverse. |
| RSA exponent error | `e` is not coprime with `phi(n)`. |
| Vigenère keyword error | Keyword is empty or invalid. |
| Invalid number conversion | A key value cannot be converted to integer. |

---

# 30. CORS Configuration

The backend has CORS enabled.

```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## Purpose

CORS allows the frontend application to call the backend API.

For example, a Next.js frontend may run at:

```txt
http://localhost:3000
```

and the FastAPI backend may run at:

```txt
http://127.0.0.1:8000
```

Without CORS, the browser may block requests between these two different origins.

## Development Setting

For development, this is acceptable:

```python
allow_origins=["*"]
```

## Production Recommendation

For production, restrict the allowed origins:

```python
allow_origins=[
    "http://localhost:3000",
    "https://your-frontend-domain.com"
]
```

---

# 31. Testing with Swagger UI

FastAPI automatically provides API testing documentation.

After running the backend, open:

```txt
http://127.0.0.1:8000/docs
```

This opens Swagger UI.

Swagger UI can be used to test:

- `GET /`
- `POST /crypto`

Another documentation page is available at:

```txt
http://127.0.0.1:8000/redoc
```

---

# 32. Testing with cURL

## 32.1 Caesar Cipher Test

```bash
curl -X POST "http://127.0.0.1:8000/crypto" \
  -H "Content-Type: application/json" \
  -d '{
    "algorithm": "caesar",
    "mode": "encrypt",
    "text": "HELLO",
    "key": {
      "shift": 3
    }
  }'
```

## 32.2 Playfair Cipher Test

```bash
curl -X POST "http://127.0.0.1:8000/crypto" \
  -H "Content-Type: application/json" \
  -d '{
    "algorithm": "playfair",
    "mode": "encrypt",
    "text": "HELLO",
    "key": {
      "keyword": "MONARCHY"
    }
  }'
```

## 32.3 Hill Cipher Test

```bash
curl -X POST "http://127.0.0.1:8000/crypto" \
  -H "Content-Type: application/json" \
  -d '{
    "algorithm": "hill",
    "mode": "encrypt",
    "text": "HELP",
    "key": {
      "matrix": [[3, 3], [2, 5]]
    }
  }'
```

## 32.4 Vigenère Cipher Test

```bash
curl -X POST "http://127.0.0.1:8000/crypto" \
  -H "Content-Type: application/json" \
  -d '{
    "algorithm": "vigenere",
    "mode": "encrypt",
    "text": "ATTACKATDAWN",
    "key": {
      "keyword": "LEMON"
    }
  }'
```

## 32.5 Rail Fence Cipher Test

```bash
curl -X POST "http://127.0.0.1:8000/crypto" \
  -H "Content-Type: application/json" \
  -d '{
    "algorithm": "rail_fence",
    "mode": "encrypt",
    "text": "WEAREDISCOVEREDFLEEATONCE",
    "key": {
      "depth": 3
    }
  }'
```

## 32.6 RSA Key Generation Test

```bash
curl -X POST "http://127.0.0.1:8000/crypto" \
  -H "Content-Type: application/json" \
  -d '{
    "algorithm": "rsa",
    "mode": "keygen",
    "text": "",
    "key": {
      "p": 61,
      "q": 53,
      "e": 17
    }
  }'
```

## 32.7 RSA Encryption Test

```bash
curl -X POST "http://127.0.0.1:8000/crypto" \
  -H "Content-Type: application/json" \
  -d '{
    "algorithm": "rsa",
    "mode": "encrypt",
    "text": "HELLO",
    "key": {
      "p": 61,
      "q": 53,
      "e": 17
    }
  }'
```

## 32.8 RSA Decryption Test

```bash
curl -X POST "http://127.0.0.1:8000/crypto" \
  -H "Content-Type: application/json" \
  -d '{
    "algorithm": "rsa",
    "mode": "decrypt",
    "text": [3000, 28, 2726, 2726, 1307],
    "key": {
      "p": 61,
      "q": 53,
      "e": 17
    }
  }'
```

## 32.9 Diffie-Hellman Test

```bash
curl -X POST "http://127.0.0.1:8000/crypto" \
  -H "Content-Type: application/json" \
  -d '{
    "algorithm": "diffie_hellman",
    "mode": "generate",
    "text": "",
    "key": {
      "p": 23,
      "g": 5,
      "a": 6,
      "b": 15
    }
  }'
```

---

# 33. Testing with Python Requests

Install requests if needed:

```bash
pip install requests
```

Example Python test:

```python
import requests

url = "http://127.0.0.1:8000/crypto"

payload = {
    "algorithm": "caesar",
    "mode": "encrypt",
    "text": "HELLO",
    "key": {
        "shift": 3
    }
}

response = requests.post(url, json=payload)
print(response.json())
```

Expected output:

```python
{
    "algorithm": "caesar",
    "mode": "encrypt",
    "result": "KHOOR"
}
```

---

# 34. Frontend Integration Guide

The future Next.js frontend should send requests to:

```txt
POST http://127.0.0.1:8000/crypto
```

Frontend environment variable:

```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

Example frontend API function:

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
    const error = await response.json();
    throw new Error(error.detail || "Crypto request failed");
  }

  return response.json();
}
```

---

# 35. Frontend Payload Examples

## Caesar Frontend Payload

```ts
const payload = {
  algorithm: "caesar",
  mode: "encrypt",
  text: "HELLO",
  key: {
    shift: 3
  }
};
```

## Playfair Frontend Payload

```ts
const payload = {
  algorithm: "playfair",
  mode: "encrypt",
  text: "HELLO",
  key: {
    keyword: "MONARCHY"
  }
};
```

## Hill Frontend Payload

```ts
const payload = {
  algorithm: "hill",
  mode: "encrypt",
  text: "HELP",
  key: {
    matrix: [[3, 3], [2, 5]]
  }
};
```

## Vigenère Frontend Payload

```ts
const payload = {
  algorithm: "vigenere",
  mode: "encrypt",
  text: "ATTACKATDAWN",
  key: {
    keyword: "LEMON"
  }
};
```

## Rail Fence Frontend Payload

```ts
const payload = {
  algorithm: "rail_fence",
  mode: "encrypt",
  text: "WEAREDISCOVEREDFLEEATONCE",
  key: {
    depth: 3
  }
};
```

## RSA Frontend Payload

```ts
const payload = {
  algorithm: "rsa",
  mode: "encrypt",
  text: "HELLO",
  key: {
    p: 61,
    q: 53,
    e: 17
  }
};
```

## Diffie-Hellman Frontend Payload

```ts
const payload = {
  algorithm: "diffie_hellman",
  mode: "generate",
  text: "",
  key: {
    p: 23,
    g: 5,
    a: 6,
    b: 15
  }
};
```

---

# 36. Security Notice

This backend is created for **academic and learning purposes only**.

Important points:

- The RSA implementation is simplified.
- RSA does not use padding.
- Small prime numbers are used for demonstration.
- Classical ciphers are not secure for modern real-world use.
- Diffie-Hellman uses small demonstration values.
- This project should not be used for real-world confidential communication.

Recommended disclaimer:

```txt
This cryptography backend is designed for educational demonstration only.
It is not intended for production-level cryptographic security.
```

---

# 37. Current Strengths

The backend already has several strong points:

- Clean FastAPI structure.
- Simple and unified `/crypto` endpoint.
- Separate algorithm files.
- Easy frontend integration.
- Supports seven cryptography experiments.
- CORS enabled for frontend development.
- Swagger UI available automatically.
- Easy to test using cURL, Python requests, or browser docs.
- Good structure for academic demonstration.

---

# 38. Possible Future Improvements

Possible improvements for the backend:

- Add stronger input validation.
- Add separate request schemas for each algorithm.
- Add response models.
- Add unit tests.
- Add a `/health` endpoint.
- Add an `/algorithms` metadata endpoint.
- Add better error messages.
- Add production-safe CORS configuration.
- Add logging.
- Add Docker support.
- Add deployment instructions.
- Add better frontend-friendly response formatting.
- Add algorithm visualization data for frontend.
- Add validation for prime numbers in RSA and Diffie-Hellman.
- Add validation for Hill matrix invertibility before encryption/decryption.
- Add support for larger Hill matrices.
- Add support for more cryptographic algorithms later.

---

# 39. Recommended Future Endpoint: Health Check

A health check endpoint can be added later.

Suggested code:

```python
@app.get("/health")
def health_check():
    return {"status": "ok"}
```

Purpose:

- Check whether the backend is alive.
- Useful for deployment.
- Useful for frontend backend-status indicator.

Example response:

```json
{
  "status": "ok"
}
```

---

# 40. Recommended Future Endpoint: Algorithm Metadata

A metadata endpoint can help the frontend dynamically load algorithm information.

Suggested endpoint:

```python
@app.get("/algorithms")
def get_algorithms():
    return {
        "algorithms": [
            {
                "id": "caesar",
                "name": "Caesar Cipher",
                "modes": ["encrypt", "decrypt"],
                "key_fields": ["shift"]
            },
            {
                "id": "playfair",
                "name": "Playfair Cipher",
                "modes": ["encrypt", "decrypt"],
                "key_fields": ["keyword"]
            },
            {
                "id": "hill",
                "name": "Hill Cipher",
                "modes": ["encrypt", "decrypt"],
                "key_fields": ["matrix"]
            },
            {
                "id": "vigenere",
                "name": "Vigenère Cipher",
                "modes": ["encrypt", "decrypt"],
                "key_fields": ["keyword"]
            },
            {
                "id": "rail_fence",
                "name": "Rail Fence Cipher",
                "modes": ["encrypt", "decrypt"],
                "key_fields": ["depth"]
            },
            {
                "id": "rsa",
                "name": "RSA Algorithm",
                "modes": ["keygen", "encrypt", "decrypt"],
                "key_fields": ["p", "q", "e"]
            },
            {
                "id": "diffie_hellman",
                "name": "Diffie-Hellman Key Exchange",
                "modes": ["generate"],
                "key_fields": ["p", "g", "a", "b"]
            }
        ]
    }
```

Purpose:

- Avoid hardcoding algorithm metadata in the frontend.
- Allow frontend forms to be generated dynamically.
- Make the backend more self-descriptive.

---

# 41. Recommended Future Validation

Currently, many values are handled inside the endpoint and algorithm functions. Future versions can use better Pydantic validation.

Example:

```python
class CaesarKey(BaseModel):
    shift: int = 3
```

Possible validation improvements:

| Algorithm | Validation |
|---|---|
| Caesar | Check if `shift` is an integer. |
| Playfair | Check if `keyword` contains alphabetic characters. |
| Hill | Check if `matrix` is 2x2 and invertible modulo 26. |
| Vigenère | Check if `keyword` is not empty and alphabetic. |
| Rail Fence | Check if `depth` is an integer greater than 1. |
| RSA | Check if `p` and `q` are prime. |
| RSA | Check if `e` is coprime with `phi`. |
| Diffie-Hellman | Check if `p` is prime. |
| Diffie-Hellman | Check if `g`, `a`, and `b` are valid integers. |

---

# 42. Recommended Unit Test Structure

Recommended test folder:

```txt
tests/
├── test_caesar.py
├── test_playfair.py
├── test_hill.py
├── test_vigenere.py
├── test_rail_fence.py
├── test_rsa.py
└── test_diffie_hellman.py
```

Example test:

```python
def test_caesar_encrypt():
    assert encrypt_caesar("HELLO", 3) == "KHOOR"
```

Example API test idea:

```python
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_caesar_api():
    response = client.post("/crypto", json={
        "algorithm": "caesar",
        "mode": "encrypt",
        "text": "HELLO",
        "key": {
            "shift": 3
        }
    })

    assert response.status_code == 200
    assert response.json()["result"] == "KHOOR"
```

---

# 43. Troubleshooting

## Problem: `Could not import module "main"`

Cause:

The terminal is not inside the `crypto-backend` directory.

Solution:

```bash
cd crypto-backend
uvicorn main:app --reload
```

---

## Problem: Backend is not opening

Check if the server is running:

```txt
http://127.0.0.1:8000
```

Check Swagger UI:

```txt
http://127.0.0.1:8000/docs
```

---

## Problem: Frontend cannot connect to backend

Possible causes:

- Backend is not running.
- Wrong API base URL.
- Frontend `.env.local` is missing.
- Wrong port number.
- Browser CORS issue.
- Backend crashed because of an error.

Frontend `.env.local` should contain:

```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

---

## Problem: RSA decrypt does not work

Cause:

RSA decrypt requires an array of integers, not a string.

Wrong:

```json
{
  "text": "3000,28,2726"
}
```

Correct:

```json
{
  "text": [3000, 28, 2726]
}
```

---

## Problem: Hill decrypt gives modular inverse error

Cause:

The selected matrix is not invertible modulo 26.

Solution:

Use the default matrix:

```json
{
  "matrix": [[3, 3], [2, 5]]
}
```

or choose another valid 2x2 matrix whose determinant has a modular inverse modulo 26.

---

## Problem: Vigenère keyword error

Cause:

Keyword is empty or contains non-alphabetic characters.

Wrong:

```json
{
  "keyword": "KEY123"
}
```

Correct:

```json
{
  "keyword": "LEMON"
}
```

---

## Problem: Port already in use

If port `8000` is already being used, run the backend on another port:

```bash
uvicorn main:app --reload --port 8001
```

Then the backend URL becomes:

```txt
http://127.0.0.1:8001
```

The frontend environment variable must also be changed:

```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8001
```

---

# 44. Backend Documentation Prompt for Another AI

Use this prompt if another AI needs to understand or extend the backend:

```txt
I have a FastAPI backend for a CryptoGraphy Web Portal.

The backend folder is named crypto-backend.

The backend has:
- main.py
- requirements.txt
- algorithms folder

The algorithms folder contains:
- caesar.py
- playfair.py
- hill.py
- vigenere.py
- rail_fence.py
- rsa_algo.py
- diffie_hellman.py

The backend exposes:
- GET /
- POST /crypto

The main POST /crypto request format is:
{
  "algorithm": "algorithm_name",
  "mode": "encrypt_or_decrypt_or_keygen_or_generate",
  "text": "message or cipher array",
  "key": {}
}

Supported algorithms:
- caesar
- playfair
- hill
- vigenere
- rail_fence
- rsa
- diffie_hellman

Supported modes:
- caesar: encrypt, decrypt
- playfair: encrypt, decrypt
- hill: encrypt, decrypt
- vigenere: encrypt, decrypt
- rail_fence: encrypt, decrypt
- rsa: keygen, encrypt, decrypt
- diffie_hellman: generate

Default keys:
- Caesar: shift = 3
- Playfair: keyword = MONARCHY
- Hill: matrix = [[3, 3], [2, 5]]
- Vigenère: keyword = KEY
- Rail Fence: depth = 3
- RSA: p = 61, q = 53, e = 17
- Diffie-Hellman: p = 23, g = 5, a = 6, b = 15

The frontend will be a Next.js app that calls POST /crypto.

Please use this backend documentation to generate frontend integration code, API service functions, forms, validation, and result display components.
```

---

# 45. Final Backend Summary

The backend is a clean and simple FastAPI API for cryptographic experiments.

It provides:

- One root information endpoint.
- One unified crypto processing endpoint.
- Seven cryptographic algorithms.
- Modular algorithm implementation files.
- Default key values for easy testing.
- CORS support for frontend integration.
- Swagger UI for API testing.
- JSON request and response format.
- Good structure for connecting with a Next.js frontend.

The backend is ready to be used as the API layer for the CryptoGraphy Web Portal frontend.

---

# 46. Recommended README Title

Suggested file name:

```txt
BACKEND_README.md
```

Suggested title:

```txt
# CryptoGraphy Web Portal Backend Documentation
```