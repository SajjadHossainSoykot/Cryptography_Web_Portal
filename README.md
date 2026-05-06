# 🔐 CipherXploreSS Web Portal

A full-stack web application for learning, exploring, and interacting with classical and modern cryptographic algorithms.

This project transforms academic cryptography laboratory experiments into a modern web-based interactive platform using a Python FastAPI backend, a Next.js frontend, REST API architecture, algorithm documentation, lab report pages, API documentation, and dark/light mode support.

---

## 🔗 Repository

Main Repository:  
https://github.com/SajjadHossainSoykot/Cryptography_Web_Portal

---

## 🚀 Project Overview

The CipherXploreSS Web Portal is designed to help students, teachers, and learners understand how different cryptographic algorithms work through an interactive web interface.

Users can select an algorithm, provide plaintext or ciphertext, enter the required keys, and instantly perform encryption, decryption, key generation, or shared secret key generation.

The project includes:

- FastAPI Backend
- Next.js Frontend
- REST API Integration
- Interactive Cryptography Lab
- Algorithm Documentation Pages
- Lab Report Section
- API Documentation Page
- About Page
- Dark Mode and Light Mode Support
- Responsive Mobile-Friendly Design

---

## ✨ Live Features

This platform provides an interactive interface for performing:

- Encryption
- Decryption
- Key Generation
- Shared Secret Key Generation
- Algorithm-Based Dynamic Input Handling
- Real-Time API Result Display
- Copy-to-Clipboard Functionality
- Backend Connection Error Handling
- Responsive UI for Desktop and Mobile
- Dark Mode and Light Mode Switching
- Academic Lab Report Display
- API Documentation for Backend Usage

---

## 🔐 Supported Algorithms

### Classical Cryptography

- Caesar Cipher
- Playfair Cipher
- Hill Cipher
- Vigenère Cipher
- Rail Fence Cipher

### Modern Cryptography

- RSA Algorithm
  - Key Generation
  - Encryption
  - Decryption

- Diffie-Hellman Key Exchange
  - Public Key Generation
  - Shared Secret Key Generation

---

## 🧪 Lab Experiments Included

This project is based on the ICT-4110 Cryptography and Network Security Laboratory experiments.

| Experiment No. | Experiment Title |
|---|---|
| 01 | Implementation of Caesar Cipher |
| 02 | Implementation of Playfair Cipher |
| 03 | Implementation of Hill Cipher |
| 04 | Implementation of Vigenère Cipher |
| 05 | Implementation of Rail Fence Cipher |
| 06 | Implementation of RSA Algorithm |
| 07 | Implementation of Diffie-Hellman Key Exchange |

---

## 🏗 Project Structure

```text
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
|   |   ├── page.tsx
|   |   ├── lab/
|   |   ├── algorithms/
|   |   ├── lab-report/
|   |   ├── api-docs/
|   |   └── about/
|   |
|   ├── components/
|   |   ├── ui/
|   |   ├── Navbar.tsx
|   |   ├── ThemeProvider.tsx
|   |   └── ThemeToggle.tsx
|   |
|   ├── services/
|   |   └── api.ts
|   |
|   ├── styles/
|   ├── package.json
|   └── next.config.js
|
├── LICENSE
├── NOTICE
└── README.md
```

---

## ⚙️ Backend Setup

Go to the backend directory:

```bash
cd crypto-backend
```

Create a virtual environment:

```bash
python3 -m venv venv
```

Activate the virtual environment.

For macOS/Linux:

```bash
source venv/bin/activate
```

For Windows:

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the FastAPI backend server:

```bash
uvicorn main:app --reload
```

Backend server runs on:

```text
http://127.0.0.1:8000
```

FastAPI Swagger API Docs:

```text
http://127.0.0.1:8000/docs
```

---

## ⚙️ Frontend Setup

Go to the frontend directory:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Run the Next.js development server:

```bash
npm run dev
```

Frontend server runs on:

```text
http://localhost:3000
```

---

## 🔗 API Integration

The frontend communicates with the backend using REST API requests.

Backend Base URL:

```text
http://127.0.0.1:8000
```

Main API Endpoint:

```text
POST /crypto
```

API Documentation:

```text
http://127.0.0.1:8000/docs
```

---

## 📡 Example API Request

Example request for Vigenère Cipher encryption:

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

Example response:

```json
{
  "success": true,
  "algorithm": "vigenere",
  "mode": "encrypt",
  "result": "LXFOPVEFRNHR"
}
```

---

## 🧪 Supported API Operations

### Caesar Cipher

Encrypts and decrypts text using a numeric shift key.

Supported operations:

```text
encrypt
decrypt
```

Required key:

```json
{
  "shift": 3
}
```

---

### Playfair Cipher

Encrypts and decrypts text using a keyword-based 5x5 matrix.

Supported operations:

```text
encrypt
decrypt
```

Required key:

```json
{
  "keyword": "MONARCHY"
}
```

---

### Hill Cipher

Encrypts and decrypts text using matrix-based encryption.

Supported operations:

```text
encrypt
decrypt
```

Required key:

```json
{
  "matrix": [[3, 3], [2, 5]]
}
```

---

### Vigenère Cipher

Encrypts and decrypts text using a repeating keyword.

Supported operations:

```text
encrypt
decrypt
```

Required key:

```json
{
  "keyword": "LEMON"
}
```

---

### Rail Fence Cipher

Encrypts and decrypts text using zigzag transposition.

Supported operations:

```text
encrypt
decrypt
```

Required key:

```json
{
  "depth": 3
}
```

---

### RSA Algorithm

Performs RSA key generation, encryption, and decryption.

Supported operations:

```text
keygen
encrypt
decrypt
```

Example key values:

```json
{
  "p": 61,
  "q": 53,
  "e": 17
}
```

---

### Diffie-Hellman Key Exchange

Generates public keys and shared secret keys between two users.

Supported operation:

```text
generate
```

Required values:

```json
{
  "p": 23,
  "g": 5,
  "a": 6,
  "b": 15
}
```

---

## 🎨 Frontend Features

The frontend is built with Next.js and provides a modern interactive interface for cryptography learning.

### Main Features

- Modern Landing Page
- Interactive Cryptography Lab
- Algorithm Selection Panel
- Dynamic Key Input Fields
- Encrypt and Decrypt Toggle
- RSA Key Generation Support
- Diffie-Hellman Shared Key Generation Support
- Real-Time Result Display
- Copy-to-Clipboard Button
- Backend Connection Error Message
- Responsive Mobile Layout
- Dark Mode and Light Mode Support
- Smooth UI Components
- Algorithm Documentation Pages
- Lab Report Section
- API Documentation Page
- About Page

---

## 🌗 Theme Support

The portal supports both:

- Dark Mode
- Light Mode

Users can switch between themes using the theme toggle button in the navigation bar.

The UI is designed to work properly in both modes with readable text, clean backgrounds, consistent cards, and responsive layout behavior.

---

## 📄 Pages Included

| Page | Description |
|---|---|
| Home | Landing page with project introduction |
| Interactive Lab | Main encryption/decryption playground |
| Algorithms | Explanation of supported algorithms |
| Lab Report | Academic lab experiment documentation |
| API Docs | Backend API usage documentation |
| About | Project and author information |

---

## 🧑‍💻 Technology Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React Icons

### Backend

- Python
- FastAPI
- Uvicorn
- REST API

### Development Tools

- Git
- GitHub
- VS Code
- npm
- Python Virtual Environment

---

## 🧠 Educational Purpose

This project is created to help learners understand cryptographic algorithms through practical implementation.

It connects theory with interactive execution by allowing users to:

- Read algorithm explanations
- View lab report content
- Test encryption and decryption
- Understand required keys
- Observe output instantly
- Learn API-based communication between frontend and backend
- Understand how a full-stack cryptography application works

---

## ⚠️ Backend Connection Handling

If the backend server is not running, the frontend displays a proper error message instead of failing silently.

Example error message:

```text
Backend server is not connected. Please start the FastAPI server and try again.
```

To fix this, run the backend server:

```bash
cd crypto-backend
source venv/bin/activate
uvicorn main:app --reload
```

---

## 🚀 Deployment Plan

The project is completed and deployed at https://cipherxplore-ss.vercel.app

Recommended deployment approach:

### Frontend Deployment

The Next.js frontend can be deployed using:

- Vercel
- Netlify
- Render
- Railway

Recommended option:

```text
Vercel
```

### Backend Deployment

The FastAPI backend can be deployed using:

- Render
- Railway
- Fly.io
- PythonAnywhere
- VPS Server

Recommended beginner-friendly options:

```text
Render
Railway
```

### Production API Configuration

For production, the frontend should use the deployed backend URL instead of the local backend URL.

Local backend URL:

```text
http://127.0.0.1:8000
```

Example deployed backend URL:

```text
https://cipherxploress-api.onrender.com
```

This should be stored in an environment variable.

Example:

```env
NEXT_PUBLIC_API_BASE_URL=https://cipherxploress-api.onrender.com
```

---

## 📦 Environment Variables

For frontend production deployment, create an environment variable:

```env
NEXT_PUBLIC_API_BASE_URL=https://cipherxploress-api.onrender.com
```

For local development:

```env
NEXT_PUBLIC_API_BASE_URL=http://127.0.0.1:8000
```

---

## ✅ Current Project Status

| Module | Status |
|---|---|
| Backend API | Completed |
| Classical Algorithms | Completed |
| Modern Algorithms | Completed |
| Frontend UI | Completed |
| API Integration | Completed |
| Dark/Light Mode | Completed |
| Lab Report Page | Completed |
| Algorithm Documentation | Completed |
| API Documentation Page | Completed |
| Responsive Design | Completed |
| Deployment | Completed |

---

## ⚠️ Disclaimer

This project is created for:

- Academic Learning
- Laboratory Demonstration
- Cryptography Practice
- Understanding Encryption and Decryption Logic
- Full-Stack Project Development Practice

This project is NOT intended for production-level cryptographic security.

The implemented algorithms are educational implementations and should not be used for real-world secure communication.

---

## ⚖️ License

This project is licensed under the AGPL-3.0 license.

You must:

- Include the LICENSE file
- Include the NOTICE file
- Provide proper attribution
- Follow the terms of the AGPL-3.0 license

---

## 🙌 Acknowledgment

- ICT-4110 Cryptography and Network Security Laboratory
- Department of Information and Communication Technology
- Islamic University, Bangladesh
- Course Teacher and Academic Supervisor
- Standard Cryptography References
- Open-Source Tools and Documentation
- AI Tools such as ChatGPT and GitHub Copilot for development assistance

---

## 📌 Author

Sajjad Hossain Soykot  

GitHub:  
https://github.com/SajjadHossainSoykot

Repository:  
https://github.com/SajjadHossainSoykot/Cryptography_Web_Portal

---

## ⭐ Final Note

The CipherXploreSS Web Portal is a complete academic full-stack project that combines cryptographic theory, Python backend implementation, REST API architecture, and a modern Next.js frontend.

It is designed as an educational platform where users can learn, test, and understand cryptographic algorithms interactively.