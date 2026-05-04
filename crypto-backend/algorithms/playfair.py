def generate_key_matrix(key: str):
    key = key.upper().replace("J", "I")
    seen = set()
    matrix_list = []

    for ch in key:
        if ch.isalpha() and ch not in seen:
            seen.add(ch)
            matrix_list.append(ch)

    for ch in "ABCDEFGHIKLMNOPQRSTUVWXYZ":
        if ch not in seen:
            seen.add(ch)
            matrix_list.append(ch)

    return [matrix_list[i:i + 5] for i in range(0, 25, 5)]


def find_position(matrix, ch):
    ch = ch.upper().replace("J", "I")

    for i in range(5):
        for j in range(5):
            if matrix[i][j] == ch:
                return i, j

    raise ValueError(f"Character {ch} not found in matrix")


def prepare_text(text: str):
    text = text.upper().replace("J", "I")
    text = "".join(ch for ch in text if ch.isalpha())

    prepared = ""
    i = 0

    while i < len(text):
        a = text[i]
        b = text[i + 1] if i + 1 < len(text) else "X"

        if a == b:
            prepared += a + "X"
            i += 1
        else:
            prepared += a + b
            i += 2

    if len(prepared) % 2 != 0:
        prepared += "X"

    return prepared


def encrypt_playfair(text: str, keyword: str = "MONARCHY"):
    matrix = generate_key_matrix(keyword)
    text = prepare_text(text)
    cipher = ""

    for i in range(0, len(text), 2):
        a, b = text[i], text[i + 1]
        r1, c1 = find_position(matrix, a)
        r2, c2 = find_position(matrix, b)

        if r1 == r2:
            cipher += matrix[r1][(c1 + 1) % 5]
            cipher += matrix[r2][(c2 + 1) % 5]
        elif c1 == c2:
            cipher += matrix[(r1 + 1) % 5][c1]
            cipher += matrix[(r2 + 1) % 5][c2]
        else:
            cipher += matrix[r1][c2]
            cipher += matrix[r2][c1]

    return cipher, matrix


def decrypt_playfair(text: str, keyword: str = "MONARCHY"):
    matrix = generate_key_matrix(keyword)
    text = "".join(ch for ch in text.upper().replace("J", "I") if ch.isalpha())

    if len(text) % 2 != 0:
        text += "X"

    plain = ""

    for i in range(0, len(text), 2):
        a, b = text[i], text[i + 1]
        r1, c1 = find_position(matrix, a)
        r2, c2 = find_position(matrix, b)

        if r1 == r2:
            plain += matrix[r1][(c1 - 1) % 5]
            plain += matrix[r2][(c2 - 1) % 5]
        elif c1 == c2:
            plain += matrix[(r1 - 1) % 5][c1]
            plain += matrix[(r2 - 1) % 5][c2]
        else:
            plain += matrix[r1][c2]
            plain += matrix[r2][c1]

    return plain, matrix