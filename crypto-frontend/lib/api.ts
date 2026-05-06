const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export type CryptoPayload = {
  algorithm: string;
  mode: string;
  text: string | number[] | null;
  key: Record<string, unknown>;
};

export async function runCrypto(payload: CryptoPayload) {
  if (!API_BASE_URL) {
    throw new Error(
      "API base URL is not configured.\n\nPlease check NEXT_PUBLIC_API_BASE_URL in your .env.local file."
    );
  }

  let response: Response;

  try {
    response = await fetch(`${API_BASE_URL}/crypto`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new Error(
      `Backend server is not connected.\n\nPlease make sure your FastAPI server is running at:\n${API_BASE_URL}\n\nRun this command in your backend folder:\nuvicorn main:app --reload`
    );
  }

  let data: unknown;

  try {
    data = await response.json();
  } catch {
    throw new Error(
      "Backend server responded, but the response was not valid JSON.\n\nPlease check your FastAPI response format."
    );
  }

  if (!response.ok) {
    const errorMessage = getBackendErrorMessage(data);

    throw new Error(
      errorMessage || `Backend request failed with status ${response.status}.`
    );
  }

  return data;
}

function getBackendErrorMessage(data: unknown) {
  if (!data || typeof data !== "object") {
    return "";
  }

  const response = data as Record<string, unknown>;

  if (typeof response.detail === "string") {
    return response.detail;
  }

  if (Array.isArray(response.detail)) {
    return response.detail
      .map((item) => {
        if (typeof item === "string") {
          return item;
        }

        if (item && typeof item === "object" && "msg" in item) {
          return String((item as { msg: unknown }).msg);
        }

        return JSON.stringify(item);
      })
      .join("\n");
  }

  if (typeof response.message === "string") {
    return response.message;
  }

  if (typeof response.error === "string") {
    return response.error;
  }

  return "";
}