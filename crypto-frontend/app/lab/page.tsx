"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { BookOpen, Loader2, Play } from "lucide-react";
import {
  algorithms,
  type Algorithm,
  type AlgorithmMode,
} from "../../data/algorithms";
import { AlgorithmSelector } from "../../components/lab/AlgorithmSelector";
import { ModeSelector } from "../../components/lab/ModeSelector";
import { TextInputPanel } from "../../components/lab/TextInputPanel";
import { KeyInputPanel } from "../../components/lab/KeyInputPanel";
import { ApiPreview } from "../../components/lab/ApiPreview";
import { ResultPanel } from "../../components/lab/ResultPanel";
import { runCrypto } from "../../lib/api";
import { VisualizationPanel } from "../../components/lab/VisualizationPanel";
import { PageHeader } from "../../components/ui/PageHeader";

export default function LabPage() {
  const [selectedAlgorithmId, setSelectedAlgorithmId] =
    useState<Algorithm["id"]>("caesar");

  const selectedAlgorithm = algorithms.find(
    (algorithm) => algorithm.id === selectedAlgorithmId
  ) as Algorithm;

  const [selectedMode, setSelectedMode] = useState<AlgorithmMode>(
    selectedAlgorithm.modes[0]
  );

  const [inputText, setInputText] = useState("HELLO");
  const [keyValues, setKeyValues] = useState<Record<string, unknown>>(
    selectedAlgorithm.defaultKey
  );

  const [result, setResult] = useState("");
  const [responseData, setResponseData] = useState<unknown>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function handleAlgorithmSelect(algorithmId: Algorithm["id"]) {
    const nextAlgorithm = algorithms.find(
      (algorithm) => algorithm.id === algorithmId
    ) as Algorithm;

    setSelectedAlgorithmId(nextAlgorithm.id);
    setSelectedMode(nextAlgorithm.modes[0]);
    setKeyValues(nextAlgorithm.defaultKey);
    setResult("");
    setError("");
    setResponseData(null);

    if (nextAlgorithm.id === "vigenere") {
      setInputText("ATTACKATDAWN");
    } else if (nextAlgorithm.id === "rail_fence") {
      setInputText("WEAREDISCOVEREDFLEEATONCE");
    } else if (nextAlgorithm.id === "rsa") {
      setInputText("HELLO");
    } else if (nextAlgorithm.id === "diffie_hellman") {
      setInputText("");
    } else {
      setInputText("HELLO");
    }
  }

  function handleKeyChange(key: string, value: unknown) {
    setKeyValues((previous) => ({
      ...previous,
      [key]: value,
    }));
  }

  const payload = useMemo(() => {
    return {
      algorithm: selectedAlgorithm.id,
      mode: selectedMode,
      text: prepareTextForPayload(selectedAlgorithm.id, selectedMode, inputText),
      key: keyValues,
    };
  }, [selectedAlgorithm.id, selectedMode, inputText, keyValues]);

  async function handleRunAlgorithm() {
    setIsLoading(true);
    setError("");
    setResult("");
    setResponseData(null);

    try {
      const data = await runCrypto(payload);
      setResponseData(data);
      setResult(formatBackendResponse(data));
    } catch (caughtError) {
      const message =
        caughtError instanceof Error
          ? caughtError.message
          : "Something went wrong.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
      <PageHeader
        badge="Interactive Experiment Area"
        title="Interactive Cryptography Lab"
        description="Select an algorithm, enter text, customize keys, send requests to the FastAPI backend, and view the result instantly."
      />

      <section className="mx-auto w-full max-w-7xl overflow-hidden px-4 pb-10 sm:px-6">
        <div className="grid min-w-0 gap-6">
          <AlgorithmSelector
            algorithms={algorithms}
            selectedAlgorithmId={selectedAlgorithmId}
            onSelect={handleAlgorithmSelect}
          />

          <div className="grid min-w-0 gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
            <div className="min-w-0 rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-5 shadow-sm sm:p-6">
              <div className="mb-6 min-w-0">
                <p className="mb-2 text-sm font-medium text-cyan-600 dark:text-cyan-200">
                  {selectedAlgorithm.category}
                </p>

                <h2 className="break-words text-3xl font-bold text-[var(--foreground)]">
                  {selectedAlgorithm.name}
                </h2>

                <p className="mt-3 max-w-3xl break-words text-sm leading-6 text-[var(--muted)]">
                  {selectedAlgorithm.description}
                </p>

                <div className="mt-4">
                  <Link
                    href={selectedAlgorithm.route}
                    className="inline-flex w-fit max-w-full items-center justify-center gap-1.5 rounded-lg border border-[var(--card-border)] bg-[var(--background)]/40 px-3 py-1.5 text-xs font-medium text-[var(--muted)] transition hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-600 dark:hover:text-cyan-200"
                  >
                    <BookOpen className="h-3.5 w-3.5 shrink-0" />
                    <span className="break-words">View Theory and Algorithm</span>
                  </Link>
                </div>
              </div>

              <div className="grid min-w-0 gap-6">
                <ModeSelector
                  modes={selectedAlgorithm.modes}
                  selectedMode={selectedMode}
                  onModeChange={(mode) => {
                    setSelectedMode(mode);
                    setResult("");
                    setError("");
                    setResponseData(null);

                    if (selectedAlgorithm.id === "diffie_hellman") {
                      setInputText("");
                    }

                    if (selectedAlgorithm.id === "rsa" && mode === "decrypt") {
                      setInputText("3000, 28, 2726, 2726, 1307");
                    }

                    if (selectedAlgorithm.id === "rsa" && mode !== "decrypt") {
                      setInputText("HELLO");
                    }
                  }}
                />

                <TextInputPanel
                  value={inputText}
                  mode={selectedMode}
                  algorithmId={selectedAlgorithm.id}
                  onChange={setInputText}
                />

                <KeyInputPanel
                  algorithm={selectedAlgorithm}
                  keyValues={keyValues}
                  onKeyChange={handleKeyChange}
                />

                <div className="flex min-w-0 flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={handleRunAlgorithm}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Play className="h-4 w-4" />
                    )}
                    {isLoading ? "Running..." : "Run Algorithm"}
                  </button>

                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={() => {
                      setInputText("");
                      setResult("");
                      setError("");
                      setResponseData(null);
                    }}
                    className="rounded-full border border-[var(--card-border)] px-6 py-3 text-sm font-semibold text-[var(--muted)] transition hover:border-cyan-400/40 hover:text-cyan-600 disabled:cursor-not-allowed disabled:opacity-60 dark:hover:text-cyan-200"
                  >
                    Clear
                  </button>
                </div>
              </div>
            </div>

            <aside className="grid min-w-0 content-start gap-6">
              <div className="min-w-0">
                <ResultPanel
                  data={responseData}
                  result={result}
                  error={error}
                  isLoading={isLoading}
                />
              </div>

              <div className="min-w-0">
                <ApiPreview payload={payload} />
              </div>
            </aside>
          </div>

          <div className="min-w-0">
            <VisualizationPanel
              algorithmId={selectedAlgorithm.id}
              mode={selectedMode}
              inputText={inputText}
              keyValues={keyValues}
              responseData={responseData}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function prepareTextForPayload(
  algorithmId: Algorithm["id"],
  mode: AlgorithmMode,
  inputText: string
) {
  if (mode === "keygen" || mode === "generate") {
    return "";
  }

  if (algorithmId === "rsa" && mode === "decrypt") {
    return inputText
      .split(",")
      .map((item) => Number(item.trim()))
      .filter((item) => !Number.isNaN(item));
  }

  return inputText;
}

function formatBackendResponse(data: unknown) {
  if (!data || typeof data !== "object") {
    return String(data);
  }

  const response = data as Record<string, unknown>;

  if ("result" in response) {
    const result = response.result;

    if (typeof result === "string") {
      return result;
    }

    return JSON.stringify(result, null, 2);
  }

  return JSON.stringify(data, null, 2);
}