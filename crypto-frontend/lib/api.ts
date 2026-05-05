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

  let data: unknown;

  try {
    data = await response.json();
  } catch {
    throw new Error("Backend returned an invalid JSON response.");
  }

  if (!response.ok) {
    const errorMessage =
      typeof data === "object" &&
      data !== null &&
      "detail" in data &&
      typeof data.detail === "string"
        ? data.detail
        : "Crypto request failed.";

    throw new Error(errorMessage);
  }

  return data;
}