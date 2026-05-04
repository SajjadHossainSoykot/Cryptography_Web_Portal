def encrypt_caesar(text: str, key: int = 3) -> str:
    result = ""
    key %= 26

    for ch in text:
        if ch.isalpha():
            base = ord("A") if ch.isupper() else ord("a")
            result += chr((ord(ch) - base + key) % 26 + base)
        else:
            result += ch

    return result


def decrypt_caesar(text: str, key: int = 3) -> str:
    result = ""
    key %= 26

    for ch in text:
        if ch.isalpha():
            base = ord("A") if ch.isupper() else ord("a")
            result += chr((ord(ch) - base - key) % 26 + base)
        else:
            result += ch

    return result