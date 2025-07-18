import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "ReMe Wallet",
  description:
    "The ReMe Wallet allows you to earn CAP's through tasks and referrals and swap them for REME's.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>ReMe Wallet</title>
        <link rel="icon" href="/logos/ori-main-logo.png" type="image/png" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
