import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Generative AI and Firm Values - Data Repository",
  description: "Occupation and firm exposure data for generative AI research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
