import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EstateAI - Predict House prices",
  description: "Advanced house price prediction using Linear Regression.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
