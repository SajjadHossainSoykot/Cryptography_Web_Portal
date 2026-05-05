const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export type CryptoPayload = {
  algorithm: string;
  mode: string;
  text: string | number[] | null;
  key: Record<string, unknown>;
};

export async function runCrypto(payload: CryptoPayload) {
  if (!API_BASE_URL) {
    throw new Error("NEXT_PUBLIC_API_BASE_URL is not configured.");
  }

  const response = await fetch(`${API_BASE_URL}/crypto`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.detail || "Crypto request failed.");
  }

  return data;
}