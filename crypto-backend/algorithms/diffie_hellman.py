def diffie_hellman(p=23, g=5, a=6, b=15):
    p = int(p)
    g = int(g)
    a = int(a)
    b = int(b)

    A = pow(g, a, p)
    B = pow(g, b, p)

    shared_A = pow(B, a, p)
    shared_B = pow(A, b, p)

    return {
        "public_key_a": A,
        "public_key_b": B,
        "shared_key_a": shared_A,
        "shared_key_b": shared_B,
        "matched": shared_A == shared_B,
    }