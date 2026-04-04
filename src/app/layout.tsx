import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bukkumeito — Get Booked Together",
  description:
    "Social Media platform for book read sharing and connections. Turn your reading habit into an aesthetic flex.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,300;0,400;0,700;0,800;0,900;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
