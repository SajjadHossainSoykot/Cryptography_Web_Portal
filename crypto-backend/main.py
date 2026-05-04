from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from algorithms.caesar import encrypt_caesar, decrypt_caesar
from algorithms.playfair import encrypt_playfair, decrypt_playfair
from algorithms.hill import encrypt_hill, decrypt_hill
from algorithms.vigenere import encrypt_vigenere, decrypt_vigenere
from algorithms.rail_fence import encrypt_rail_fence, decrypt_rail_fence
from algorithms.rsa_algo import rsa_encrypt, rsa_decrypt, rsa_keygen
from algorithms.diffie_hellman import diffie_hellman


app = FastAPI(title="CryptoGraphy Portal API")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class CryptoRequest(BaseModel):
    algorithm: str
    mode: str
    text: str | list[int] | None = ""
    key: dict | None = None


@app.get("/")
def home():
    return {
        "message": "CryptoGraphy Portal Backend is running",
        "available_algorithms": [
            "caesar",
            "playfair",
            "hill",
            "vigenere",
            "rail_fence",
            "rsa",
            "diffie_hellman",
        ],
    }


@app.post("/crypto")
def crypto(request: CryptoRequest):
    algorithm = request.algorithm.lower()
    mode = request.mode.lower()
    key_data = request.key or {}

    try:
        if algorithm == "caesar":
            shift = int(key_data.get("shift", 3))

            if mode == "encrypt":
                result = encrypt_caesar(str(request.text), shift)
            elif mode == "decrypt":
                result = decrypt_caesar(str(request.text), shift)
            else:
                raise HTTPException(status_code=400, detail="Invalid mode for Caesar")

            return {"algorithm": algorithm, "mode": mode, "result": result}

        elif algorithm == "playfair":
            keyword = key_data.get("keyword", "MONARCHY")

            if mode == "encrypt":
                result, matrix = encrypt_playfair(str(request.text), keyword)
            elif mode == "decrypt":
                result, matrix = decrypt_playfair(str(request.text), keyword)
            else:
                raise HTTPException(status_code=400, detail="Invalid mode for Playfair")

            return {
                "algorithm": algorithm,
                "mode": mode,
                "keyword": keyword,
                "matrix": matrix,
                "result": result,
            }

        elif algorithm == "hill":
            matrix = key_data.get("matrix", [[3, 3], [2, 5]])

            if mode == "encrypt":
                result = encrypt_hill(str(request.text), matrix)
            elif mode == "decrypt":
                result = decrypt_hill(str(request.text), matrix)
            else:
                raise HTTPException(status_code=400, detail="Invalid mode for Hill")

            return {
                "algorithm": algorithm,
                "mode": mode,
                "matrix": matrix,
                "result": result,
            }

        elif algorithm == "vigenere":
            keyword = key_data.get("keyword", "KEY")

            if mode == "encrypt":
                result = encrypt_vigenere(str(request.text), keyword)
            elif mode == "decrypt":
                result = decrypt_vigenere(str(request.text), keyword)
            else:
                raise HTTPException(status_code=400, detail="Invalid mode for Vigenere")

            return {
                "algorithm": algorithm,
                "mode": mode,
                "keyword": keyword,
                "result": result,
            }

        elif algorithm == "rail_fence":
            depth = int(key_data.get("depth", 3))

            if mode == "encrypt":
                result = encrypt_rail_fence(str(request.text), depth)
            elif mode == "decrypt":
                result = decrypt_rail_fence(str(request.text), depth)
            else:
                raise HTTPException(status_code=400, detail="Invalid mode for Rail Fence")

            return {
                "algorithm": algorithm,
                "mode": mode,
                "depth": depth,
                "result": result,
            }

        elif algorithm == "rsa":
            p = int(key_data.get("p", 61))
            q = int(key_data.get("q", 53))
            e = int(key_data.get("e", 17))

            if mode == "keygen":
                result = rsa_keygen(p, q, e)
            elif mode == "encrypt":
                result = rsa_encrypt(str(request.text), p, q, e)
            elif mode == "decrypt":
                if not isinstance(request.text, list):
                    raise HTTPException(
                        status_code=400,
                        detail="RSA decrypt text must be a list of integers",
                    )
                result = rsa_decrypt(request.text, p, q, e)
            else:
                raise HTTPException(status_code=400, detail="Invalid mode for RSA")

            return {
                "algorithm": algorithm,
                "mode": mode,
                "result": result,
            }

        elif algorithm == "diffie_hellman":
            p = int(key_data.get("p", 23))
            g = int(key_data.get("g", 5))
            a = int(key_data.get("a", 6))
            b = int(key_data.get("b", 15))

            result = diffie_hellman(p, g, a, b)

            return {
                "algorithm": algorithm,
                "mode": "generate",
                "values": {"p": p, "g": g, "a": a, "b": b},
                "result": result,
            }

        raise HTTPException(status_code=400, detail="Unknown algorithm")

    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))