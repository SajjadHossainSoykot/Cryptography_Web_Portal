# 🔐 Cryptography Web Portal

A full-stack web application for exploring and interacting with classical and modern cryptographic algorithms.

This project transforms academic cryptography lab experiments into a modern web-based platform using:

- Python FastAPI / Flask Backend
- Next.js Frontend
- REST API Architecture

---

## 🔗 Repository

Main Repository:  
https://github.com/SajjadHossainSoykot/Cryptography_Web_Portal

---

## 🚀 Live Features

This platform provides an interactive interface for performing encryption, decryption, and key generation.

### 🔐 Classical Cryptography
- Caesar Cipher
- Playfair Cipher
- Hill Cipher
- Vigenère Cipher
- Rail Fence Cipher

### 🔐 Modern Cryptography
- RSA Algorithm (Key Generation, Encryption, Decryption)
- Diffie-Hellman Key Exchange

---

## 🏗 Project Structure

    Cryptography_Web_Portal/
    |
    ├── crypto-backend/
    |   ├── algorithms/
    |   |   ├── caesar.py
    |   |   ├── playfair.py
    |   |   ├── hill.py
    |   |   ├── vigenere.py
    |   |   ├── rail_fence.py
    |   |   ├── rsa_algo.py
    |   |   └── diffie_hellman.py
    |   |
    |   ├── main.py
    |   ├── requirements.txt
    |   └── .gitignore
    |
    ├── frontend/
    |   ├── app/
    |   ├── components/
    |   ├── services/
    |   ├── styles/
    |   ├── package.json
    |   └── next.config.js
    |
    ├── LICENSE
    ├── NOTICE
    └── README.md

---

## ⚙️ Backend Setup

    cd crypto-backend
    python3 -m venv venv
    source venv/bin/activate
    pip install -r requirements.txt
    uvicorn main:app --reload

---

## ⚙️ Frontend Setup (Next.js)

    cd frontend
    npm install
    npm run dev

Frontend runs on:

    http://localhost:3000

---

## 🔗 API Integration

The frontend communicates with the backend using REST APIs.

Base URL:

    http://127.0.0.1:8000

API Docs:

    http://127.0.0.1:8000/docs

---

## 📡 Example API Request

    {
      "algorithm": "vigenere",
      "mode": "encrypt",
      "text": "ATTACKATDAWN",
      "key": {
        "keyword": "LEMON"
      }
    }

---

## 🧪 Supported API Operations

### Caesar Cipher

    Encrypt / Decrypt using shift key

### Playfair Cipher

    Encrypt / Decrypt using keyword-based matrix

### Hill Cipher

    Encrypt / Decrypt using matrix multiplication

### Vigenère Cipher

    Encrypt / Decrypt using repeating keyword

### Rail Fence Cipher

    Encrypt / Decrypt using zigzag pattern

### RSA Algorithm

    Key generation, encryption, and decryption using public/private keys

### Diffie-Hellman

    Shared key generation between two parties

---

## 🎨 Frontend Features

- Interactive UI for all algorithms
- Algorithm selection panel
- Encrypt / Decrypt toggle
- Dynamic key input fields
- Default and custom key support
- Real-time result display
- Copy-to-clipboard functionality
- Responsive design (mobile + desktop)
- Clean modern UI
- Dark mode support

---

## ⚠️ Disclaimer

This project is created for:

- Academic learning
- Demonstration purposes
- Understanding cryptographic algorithms

This is NOT intended for production-level cryptographic security.

---

## ⚖️ License

This project is licensed under the Apache License 2.0.

You must:

- Include the LICENSE file
- Include the NOTICE file
- Provide proper attribution

---

## 🙌 Acknowledgment

- ICT-4110 Cryptography and Network Security Laboratory
- Islamic University, Bangladesh
- Standard cryptography references
- AI tools such as ChatGPT for development assistance

---

## 📌 Author

Sajjad Hossain Soykot  
GitHub: https://github.com/SajjadHossainSoykot

---

## 🚀 Project Status

✔ Backend Completed  
✔ Frontend Ongoing
✔ API Integration Pending
✔ Ready for deployment - Pending