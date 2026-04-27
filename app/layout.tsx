import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Soroban Sentinel",
  description: "Runtime security monitoring for Soroban smart contracts",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
