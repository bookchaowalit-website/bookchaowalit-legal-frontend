import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Legal Knowledge Base — Public Law Library", description: "Plain-language legal orientation notes with visible scope and next questions." };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
