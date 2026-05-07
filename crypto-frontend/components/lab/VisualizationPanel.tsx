import type { Algorithm, AlgorithmMode } from "../../data/algorithms";

type VisualizationPanelProps = {
    algorithmId: Algorithm["id"];
    mode: AlgorithmMode;
    inputText: string;
    keyValues: Record<string, unknown>;
    responseData: unknown;
};

export function VisualizationPanel({
    algorithmId,
    mode,
    inputText,
    keyValues,
    responseData,
}: VisualizationPanelProps) {
    return (
        <section className="w-full min-w-0 overflow-hidden rounded-3xl border border-[var(--card-border)] bg-[var(--card)] p-5 sm:p-6">
            <div className="mb-6 min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-200/70">
                    Algorithm Visualization
                </p>

                <h2 className="mt-2 break-words text-2xl font-bold text-[var(--foreground)]">
                    Visual Understanding Panel
                </h2>

                <p className="mt-2 max-w-full break-words text-sm leading-6 text-[var(--muted)]">
                    A visual explanation for the currently selected algorithm.
                </p>
            </div>

            <div className="min-w-0">
                {algorithmId === "caesar" ? (
                    <CaesarVisualization inputText={inputText} keyValues={keyValues} />
                ) : null}

                {algorithmId === "playfair" ? (
                    <PlayfairVisualization
                        inputText={inputText}
                        keyValues={keyValues}
                        responseData={responseData}
                    />
                ) : null}

                {algorithmId === "hill" ? (
                    <HillVisualization inputText={inputText} keyValues={keyValues} />
                ) : null}

                {algorithmId === "vigenere" ? (
                    <VigenereVisualization
                        inputText={inputText}
                        keyValues={keyValues}
                        responseData={responseData}
                    />
                ) : null}

                {algorithmId === "rail_fence" ? (
                    <RailFenceVisualization inputText={inputText} keyValues={keyValues} />
                ) : null}

                {algorithmId === "rsa" ? (
                    <RSAVisualization
                        mode={mode}
                        keyValues={keyValues}
                        responseData={responseData}
                    />
                ) : null}

                {algorithmId === "diffie_hellman" ? (
                    <DiffieHellmanVisualization
                        keyValues={keyValues}
                        responseData={responseData}
                    />
                ) : null}
            </div>
        </section>
    );
}

/* ---------------------------------- */
/* Caesar */
/* ---------------------------------- */

function CaesarVisualization({
    inputText,
    keyValues,
}: {
    inputText: string;
    keyValues: Record<string, unknown>;
}) {
    const shift = normalizeShift(Number(keyValues.shift ?? 3));
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const shiftedAlphabet = alphabet.map(
        (_, index) => alphabet[(index + shift) % 26]
    );

    const letters = cleanLetters(inputText).slice(0, 16).split("");
    const mapping = letters.map((letter) => {
        const index = alphabet.indexOf(letter);

        return {
            from: letter,
            to: index >= 0 ? shiftedAlphabet[index] : letter,
        };
    });

    return (
        <div className="min-w-0 space-y-6">
            <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
                <InfoCard label="Shift Key" value={String(shift)} highlight />

                <InfoCard
                    label="Example Mapping"
                    value={
                        mapping.length > 0
                            ? mapping.map((m) => `${m.from} → ${m.to}`).join("   ")
                            : "Enter text to preview"
                    }
                />
            </div>

            <div className="min-w-0 rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    Alphabet Shift Preview
                </p>

                <div className="grid min-w-0 gap-3">
                    <AlphabetRow label="Plain" letters={alphabet} />
                    <AlphabetRow label="Shift" letters={shiftedAlphabet} />
                </div>
            </div>
        </div>
    );
}

/* ---------------------------------- */
/* Playfair */
/* ---------------------------------- */

function PlayfairVisualization({
    inputText,
    keyValues,
    responseData,
}: {
    inputText: string;
    keyValues: Record<string, unknown>;
    responseData: unknown;
}) {
    const keyword = String(keyValues.keyword ?? "MONARCHY");
    const response = asRecord(responseData);
    const resultObject = asRecord(response?.result);

    const rawMatrix = response?.matrix ?? resultObject?.matrix;
    const responseMatrix = normalizeMatrix(rawMatrix, 5);

    const matrix =
        responseMatrix.length > 0 ? responseMatrix : buildPlayfairMatrix(keyword);

    const digraphs = buildPlayfairDigraphs(inputText);

    return (
        <div className="min-w-0 space-y-6">
            <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                <InfoCard label="Keyword" value={keyword} highlight />

                <div className="min-w-0 rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                        Digraph Preparation
                    </p>

                    <div className="flex min-w-0 flex-wrap gap-2">
                        {digraphs.length > 0 ? (
                            digraphs.map((pair, index) => (
                                <span
                                    key={`${pair}-${index}`}
                                    className="rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-100"
                                >
                                    {pair}
                                </span>
                            ))
                        ) : (
                            <span className="text-sm text-[var(--muted)]">
                                Enter text to see digraphs.
                            </span>
                        )}
                    </div>
                </div>
            </div>

            <div className="min-w-0 rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    Playfair 5 × 5 Matrix
                </p>

                <MatrixGrid matrix={matrix} />
            </div>
        </div>
    );
}

/* ---------------------------------- */
/* Hill */
/* ---------------------------------- */

function HillVisualization({
    inputText,
    keyValues,
}: {
    inputText: string;
    keyValues: Record<string, unknown>;
}) {
    const matrix = normalizeNumberMatrix(keyValues.matrix, 2);
    const text = cleanLetters(inputText);
    const blocks = chunkText(text.length % 2 === 0 ? text : `${text}X`, 2);

    return (
        <div className="min-w-0 space-y-6">
            <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                <div className="min-w-0 rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                        2 × 2 Key Matrix
                    </p>

                    <NumberMatrixGrid matrix={matrix} />
                </div>

                <div className="min-w-0 rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                        Plaintext Blocks
                    </p>

                    <div className="flex min-w-0 flex-wrap gap-2">
                        {blocks.length > 0 ? (
                            blocks.map((block, index) => (
                                <span
                                    key={`${block}-${index}`}
                                    className="rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-100"
                                >
                                    {block}
                                </span>
                            ))
                        ) : (
                            <span className="text-sm text-[var(--muted)]">
                                Enter text to create blocks.
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ---------------------------------- */
/* Vigenere */
/* ---------------------------------- */

function VigenereVisualization({
    inputText,
    keyValues,
    responseData,
}: {
    inputText: string;
    keyValues: Record<string, unknown>;
    responseData: unknown;
}) {
    const keyword = String(keyValues.keyword ?? "KEY").toUpperCase();
    const plain = cleanLetters(inputText).slice(0, 20);
    const repeatedKey = repeatKeyword(keyword, plain.length);

    const response = asRecord(responseData);
    const output =
        typeof response?.result === "string"
            ? response.result.toUpperCase().slice(0, 20)
            : "";

    return (
        <div className="min-w-0 space-y-6">
            <InfoCard label="Keyword" value={keyword} highlight />

            <div className="min-w-0 rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    Repeated Keyword Table
                </p>

                <div className="w-full min-w-0 space-y-3 overflow-x-auto pb-2">
                    <CharRow label="Text" value={plain} />
                    <CharRow label="Key" value={repeatedKey} />
                    {output ? <CharRow label="Output" value={output} highlight /> : null}
                </div>
            </div>
        </div>
    );
}

/* ---------------------------------- */
/* Rail Fence */
/* ---------------------------------- */

function RailFenceVisualization({
    inputText,
    keyValues,
}: {
    inputText: string;
    keyValues: Record<string, unknown>;
}) {
    const depth = Number(keyValues.depth ?? 3);
    const text = cleanLetters(inputText).slice(0, 28);
    const rails = buildRailFenceGrid(text, depth);

    return (
        <div className="min-w-0 space-y-6">
            <InfoCard label="Rail Depth" value={String(depth)} highlight />

            <div className="min-w-0 rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    Zigzag Rail Pattern
                </p>

                {rails.length > 0 ? (
                    <div className="w-full min-w-0 overflow-x-auto pb-2">
                        <div className="w-max max-w-none">
                            <div className="grid gap-2">
                                {rails.map((row, rowIndex) => (
                                    <div key={`rail-${rowIndex}`} className="flex w-max gap-2">
                                        {row.map((cell, cellIndex) => (
                                            <div
                                                key={`${rowIndex}-${cellIndex}`}
                                                className={
                                                    cell
                                                        ? "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-400/10 text-sm font-bold text-cyan-700 dark:text-cyan-100"
                                                        : "h-9 w-9 shrink-0 rounded-lg border border-[var(--card-border)] bg-[var(--card)]"
                                                }
                                            >
                                                {cell || ""}
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (
                    <p className="text-sm text-[var(--muted)]">
                        Enter text to visualize the zigzag rails.
                    </p>
                )}
            </div>
        </div>
    );
}

/* ---------------------------------- */
/* RSA */
/* ---------------------------------- */

function RSAVisualization({
    mode,
    keyValues,
    responseData,
}: {
    mode: AlgorithmMode;
    keyValues: Record<string, unknown>;
    responseData: unknown;
}) {
    const response = asRecord(responseData);
    const result = asRecord(response?.result);

    const p = keyValues.p;
    const q = keyValues.q;
    const e = keyValues.e;

    const cipher = Array.isArray(result?.cipher) ? result?.cipher : [];
    const plain = typeof result?.plain === "string" ? result.plain : "";

    return (
        <div className="min-w-0 space-y-6">
            <div className="grid min-w-0 gap-4 sm:grid-cols-3">
                <InfoCard label="Prime p" value={String(p ?? "")} />
                <InfoCard label="Prime q" value={String(q ?? "")} />
                <InfoCard label="Exponent e" value={String(e ?? "")} />
            </div>

            <div className="grid min-w-0 gap-4 sm:grid-cols-2">
                {"public_key" in (result ?? {}) ? (
                    <InfoCard
                        label="Public Key"
                        value={formatValue(result?.public_key)}
                        highlight
                    />
                ) : null}

                {"private_key" in (result ?? {}) ? (
                    <InfoCard
                        label="Private Key"
                        value={formatValue(result?.private_key)}
                    />
                ) : null}

                {"n" in (result ?? {}) ? (
                    <InfoCard label="n" value={formatValue(result?.n)} />
                ) : null}

                {"phi" in (result ?? {}) ? (
                    <InfoCard label="phi(n)" value={formatValue(result?.phi)} />
                ) : null}
            </div>

            {mode === "encrypt" && cipher.length > 0 ? (
                <div className="min-w-0 rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                        Cipher Array
                    </p>

                    <div className="flex min-w-0 flex-wrap gap-2">
                        {cipher.map((item, index) => (
                            <span
                                key={`${item}-${index}`}
                                className="rounded-xl border border-cyan-400/25 bg-cyan-400/10 px-3 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-100"
                            >
                                {String(item)}
                            </span>
                        ))}
                    </div>
                </div>
            ) : null}

            {mode === "decrypt" && plain ? (
                <InfoCard label="Recovered Plain Text" value={plain} highlight />
            ) : null}
        </div>
    );
}

/* ---------------------------------- */
/* Diffie-Hellman */
/* ---------------------------------- */

function DiffieHellmanVisualization({
    keyValues,
    responseData,
}: {
    keyValues: Record<string, unknown>;
    responseData: unknown;
}) {
    const response = asRecord(responseData);
    const result = asRecord(response?.result);

    const p = String(keyValues.p ?? "");
    const g = String(keyValues.g ?? "");
    const a = String(keyValues.a ?? "");
    const b = String(keyValues.b ?? "");

    const publicKeyA = formatValue(result?.public_key_a);
    const publicKeyB = formatValue(result?.public_key_b);
    const sharedKeyA = formatValue(result?.shared_key_a);
    const sharedKeyB = formatValue(result?.shared_key_b);

    return (
        <div className="min-w-0 space-y-6">
            <div className="grid min-w-0 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                <InfoCard label="Prime p" value={p} />
                <InfoCard label="Primitive Root g" value={g} />
                <InfoCard label="Private Key A" value={a} />
                <InfoCard label="Private Key B" value={b} />
            </div>

            <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
                <div className="min-w-0 rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5">
                    <p className="mb-4 text-sm font-bold text-[var(--foreground)]">
                        User A
                    </p>

                    <div className="space-y-3">
                        <MiniInfo label="Private Key" value={a} />
                        <MiniInfo label="Public Key" value={publicKeyA} />
                        <MiniInfo label="Shared Key" value={sharedKeyA} highlight />
                    </div>
                </div>

                <div className="flex min-w-0 items-center justify-center text-cyan-700 dark:text-cyan-200">
                    <div className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-center text-sm font-semibold">
                        Exchange Public Keys
                    </div>
                </div>

                <div className="min-w-0 rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5">
                    <p className="mb-4 text-sm font-bold text-[var(--foreground)]">
                        User B
                    </p>

                    <div className="space-y-3">
                        <MiniInfo label="Private Key" value={b} />
                        <MiniInfo label="Public Key" value={publicKeyB} />
                        <MiniInfo label="Shared Key" value={sharedKeyB} highlight />
                    </div>
                </div>
            </div>
        </div>
    );
}

/* ---------------------------------- */
/* Shared UI */
/* ---------------------------------- */

function InfoCard({
    label,
    value,
    highlight = false,
}: {
    label: string;
    value: string;
    highlight?: boolean;
}) {
    return (
        <div
            className={
                highlight
                    ? "min-w-0 rounded-2xl border border-cyan-400/25 bg-cyan-400/10 p-5"
                    : "min-w-0 rounded-2xl border border-[var(--card-border)] bg-[var(--background)]/40 p-5"
            }
        >
            <p
                className={
                    highlight
                        ? "mb-2 break-words text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-200/70"
                        : "mb-2 break-words text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]"
                }
            >
                {label}
            </p>

            <pre
                className={
                    highlight
                        ? "max-w-full overflow-x-auto whitespace-pre-wrap break-words text-lg font-bold leading-7 text-cyan-700 dark:text-cyan-100"
                        : "max-w-full overflow-x-auto whitespace-pre-wrap break-words text-base leading-7 text-[var(--foreground)]"
                }
            >
                {value}
            </pre>
        </div>
    );
}

function MiniInfo({
    label,
    value,
    highlight = false,
}: {
    label: string;
    value: string;
    highlight?: boolean;
}) {
    return (
        <div
            className={
                highlight
                    ? "min-w-0 rounded-xl border border-cyan-400/25 bg-cyan-400/10 p-4"
                    : "min-w-0 rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-4"
            }
        >
            <p className="mb-1 break-words text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                {label}
            </p>

            <p
                className={
                    highlight
                        ? "break-words text-lg font-bold text-cyan-700 dark:text-cyan-100"
                        : "break-words text-base text-[var(--foreground)]"
                }
            >
                {value}
            </p>
        </div>
    );
}

function AlphabetRow({
    label,
    letters,
}: {
    label: string;
    letters: string[];
}) {
    return (
        <div className="w-full min-w-0 overflow-x-auto pb-1">
            <div className="flex w-max items-center gap-2">
                <span className="w-14 shrink-0 text-sm font-semibold text-[var(--muted)]">
                    {label}
                </span>

                {letters.map((letter, index) => (
                    <span
                        key={`${label}-${letter}-${index}`}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[var(--card-border)] bg-[var(--card)] text-sm font-semibold text-[var(--foreground)]"
                    >
                        {letter}
                    </span>
                ))}
            </div>
        </div>
    );
}

function MatrixGrid({ matrix }: { matrix: string[][] }) {
    const columnCount = matrix[0]?.length ?? 5;

    return (
        <div className="w-full min-w-0 overflow-x-auto pb-1">
            <div
                className="grid w-full max-w-sm gap-2"
                style={{
                    gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
                }}
            >
                {matrix.map((row, rowIndex) =>
                    row.map((cell, columnIndex) => (
                        <div
                            key={`${rowIndex}-${columnIndex}-${cell}`}
                            className="flex aspect-square min-w-0 items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-lg font-bold text-cyan-700 dark:text-cyan-100"
                        >
                            {cell}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

function NumberMatrixGrid({ matrix }: { matrix: number[][] }) {
    const columnCount = matrix[0]?.length ?? 2;

    return (
        <div className="w-full min-w-0 overflow-x-auto pb-1">
            <div
                className="grid w-[180px] max-w-full gap-2"
                style={{
                    gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
                }}
            >
                {matrix.map((row, rowIndex) =>
                    row.map((cell, columnIndex) => (
                        <div
                            key={`${rowIndex}-${columnIndex}-${cell}`}
                            className="flex aspect-square items-center justify-center rounded-xl border border-cyan-400/30 bg-cyan-400/10 text-lg font-bold text-cyan-700 dark:text-cyan-100"
                        >
                            {cell}
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}

function CharRow({
    label,
    value,
    highlight = false,
}: {
    label: string;
    value: string;
    highlight?: boolean;
}) {
    return (
        <div className="flex w-max min-w-full items-center gap-2">
            <span className="w-16 shrink-0 text-sm font-semibold text-[var(--muted)]">
                {label}
            </span>

            {value.split("").map((char, index) => (
                <span
                    key={`${label}-${char}-${index}`}
                    className={
                        highlight
                            ? "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-cyan-400/25 bg-cyan-400/10 text-sm font-bold text-cyan-700 dark:text-cyan-100"
                            : "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[var(--card-border)] bg-[var(--card)] text-sm font-semibold text-[var(--foreground)]"
                    }
                >
                    {char}
                </span>
            ))}
        </div>
    );
}

/* ---------------------------------- */
/* Helpers */
/* ---------------------------------- */

function normalizeShift(shift: number) {
    return ((shift % 26) + 26) % 26;
}

function cleanLetters(text: string) {
    return text.toUpperCase().replace(/[^A-Z]/g, "");
}

function chunkText(text: string, size: number) {
    const chunks: string[] = [];

    for (let i = 0; i < text.length; i += size) {
        chunks.push(text.slice(i, i + size));
    }

    return chunks;
}

function repeatKeyword(keyword: string, length: number) {
    if (!keyword) return "";

    let result = "";

    while (result.length < length) {
        result += keyword;
    }

    return result.slice(0, length);
}

function buildPlayfairDigraphs(text: string) {
    const cleaned = cleanLetters(text).replace(/J/g, "I");
    const pairs: string[] = [];
    let index = 0;

    while (index < cleaned.length) {
        const first = cleaned[index];
        const second = cleaned[index + 1];

        if (!second) {
            pairs.push(`${first}X`);
            index += 1;
        } else if (first === second) {
            pairs.push(`${first}X`);
            index += 1;
        } else {
            pairs.push(`${first}${second}`);
            index += 2;
        }
    }

    return pairs;
}

function buildPlayfairMatrix(keyword: string) {
    const base = `${keyword.toUpperCase().replace(/J/g, "I")}ABCDEFGHIKLMNOPQRSTUVWXYZ`;
    const unique: string[] = [];

    for (const char of base) {
        if (!/[A-Z]/.test(char)) continue;
        if (!unique.includes(char)) unique.push(char);
    }

    return Array.from({ length: 5 }, (_, rowIndex) =>
        unique.slice(rowIndex * 5, rowIndex * 5 + 5)
    );
}

function buildRailFenceGrid(text: string, depth: number) {
    if (!text || depth < 2) {
        return text ? [text.split("")] : [];
    }

    const rails = Array.from({ length: depth }, () =>
        Array.from({ length: text.length }, () => "")
    );

    let row = 0;
    let direction = 1;

    for (let col = 0; col < text.length; col += 1) {
        rails[row][col] = text[col];

        if (row === 0) {
            direction = 1;
        } else if (row === depth - 1) {
            direction = -1;
        }

        row += direction;
    }

    return rails;
}

function normalizeMatrix(value: unknown, expectedSize: number) {
    if (!Array.isArray(value)) {
        return [];
    }

    if (Array.isArray(value[0])) {
        return value.map((row) =>
            Array.isArray(row) ? row.map((cell) => String(cell)) : []
        );
    }

    const flat = value.map((cell) => String(cell));
    const matrix: string[][] = [];

    for (let i = 0; i < flat.length; i += expectedSize) {
        matrix.push(flat.slice(i, i + expectedSize));
    }

    return matrix;
}

function normalizeNumberMatrix(value: unknown, expectedSize: number) {
    if (
        Array.isArray(value) &&
        Array.isArray(value[0]) &&
        value.every((row) => Array.isArray(row))
    ) {
        return (value as unknown[][]).map((row) =>
            row.map((cell) => Number(cell))
        );
    }

    if (expectedSize === 2) {
        return [
            [3, 3],
            [2, 5],
        ];
    }

    return [];
}

function asRecord(value: unknown) {
    return value && typeof value === "object"
        ? (value as Record<string, unknown>)
        : null;
}

function formatValue(value: unknown) {
    if (value === undefined || value === null) {
        return "";
    }

    if (typeof value === "string") {
        return value;
    }

    return JSON.stringify(value, null, 2);
}