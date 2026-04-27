"use client";
import { useState } from "react";

export default function Home() {
  const [contract, setContract] = useState("");
  const [result, setResult] = useState<string | null>(null);

  // TODO: connect to sentinel-core API endpoint
  const handleScan = async () => {
    setResult("Scanning... (API not connected yet)");
  };

  return (
    <main style={{ maxWidth: 720, margin: "60px auto", fontFamily: "sans-serif", padding: "0 20px" }}>
      <h1 style={{ fontSize: 32, fontWeight: 700 }}>🛡️ Soroban Sentinel</h1>
      <p style={{ color: "#888" }}>Runtime security monitoring for Soroban smart contracts</p>

      <div style={{ marginTop: 32 }}>
        <label style={{ display: "block", marginBottom: 8, fontWeight: 600 }}>
          Paste your Soroban contract source:
        </label>
        <textarea
          rows={12}
          style={{ width: "100%", padding: 12, fontFamily: "monospace", fontSize: 13, borderRadius: 6, border: "1px solid #333", background: "#111", color: "#fff" }}
          placeholder="// paste your Soroban contract here..."
          value={contract}
          onChange={(e) => setContract(e.target.value)}
        />
        <button
          onClick={handleScan}
          style={{ marginTop: 12, padding: "10px 24px", background: "#7c3aed", color: "#fff", border: "none", borderRadius: 6, cursor: "pointer", fontWeight: 600 }}
        >
          Scan Contract
        </button>
      </div>

      {result && (
        <div style={{ marginTop: 24, padding: 16, background: "#1a1a1a", borderRadius: 6, fontFamily: "monospace" }}>
          {result}
        </div>
      )}

      {/* TODO: display structured vulnerability findings from API */}
      {/* TODO: add Stellar wallet connect button */}
      {/* TODO: add scan history panel */}
    </main>
  );
}
