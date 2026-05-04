from math import gcd


def mod_inverse(e, phi):
    for d in range(1, phi):
        if (d * e) % phi == 1:
            return d
    raise ValueError("Modular inverse not found.")


def rsa_keygen(p=61, q=53, e=17):
    n = p * q
    phi = (p - 1) * (q - 1)

    if gcd(e, phi) != 1:
        raise ValueError("e must be coprime with phi(n).")

    d = mod_inverse(e, phi)

    return {
        "public_key": [e, n],
        "private_key": [d, n],
        "n": n,
        "phi": phi,
    }


def rsa_encrypt(text, p=61, q=53, e=17):
    keys = rsa_keygen(p, q, e)
    public_key = keys["public_key"]

    e, n = public_key
    cipher = [pow(ord(ch), e, n) for ch in text]

    return {
        "cipher": cipher,
        "public_key": keys["public_key"],
        "private_key": keys["private_key"],
        "n": keys["n"],
        "phi": keys["phi"],
    }


def rsa_decrypt(cipher, p=61, q=53, e=17):
    keys = rsa_keygen(p, q, e)
    private_key = keys["private_key"]

    d, n = private_key
    plain = "".join(chr(pow(int(c), d, n)) for c in cipher)

    return {
        "plain": plain,
        "public_key": keys["public_key"],
        "private_key": keys["private_key"],
        "n": keys["n"],
        "phi": keys["phi"],
    }