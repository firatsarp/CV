import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://firatsarp.github.io/CV/"),
  title: "Fırat Sarp | Electronics Engineer",
  description: "Technical Advisor specializing in waste-to-energy, energy plants and operational excellence.",
  openGraph: {
    title: "Fırat Sarp | Electronics Engineer",
    description: "Waste-to-Energy, Energy Plants & Operational Excellence",
    type: "website",
    images: [{ url: "og.png", width: 1729, height: 910, alt: "Fırat Sarp — Electronics Engineer" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fırat Sarp | Electronics Engineer",
    description: "Waste-to-Energy, Energy Plants & Operational Excellence",
    images: ["og.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
