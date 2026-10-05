import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://shreyamanjucha.vercel.app"
  ),
  title: "Shreya Manjucha — Agentic AI & Data Engineering",
  description:
    "Portfolio of Shreya Manjucha. Software engineer building agentic AI systems, LLM pipelines, and data engineering solutions. AWS Bedrock, MCP, LangGraph. MS CS @ Purdue (GPA 3.95).",
  keywords: [
    "Shreya Manjucha",
    "Agentic AI",
    "Data Engineering",
    "MCP",
    "LangGraph",
    "AWS Bedrock",
    "Software Engineer",
    "Purdue University",
    "Portfolio",
  ],
  authors: [{ name: "Shreya Manjucha" }],
  creator: "Shreya Manjucha",
  openGraph: {
    title: "Shreya Manjucha — Agentic AI & Data Engineering",
    description:
      "Building agentic AI systems and data pipelines. AWS Bedrock, MCP, LangGraph. MS CS @ Purdue.",
    type: "website",
    locale: "en_US",
    siteName: "Shreya Manjucha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shreya Manjucha — Agentic AI & Data Engineering",
    description:
      "Building agentic AI systems and data pipelines. AWS Bedrock, MCP, LangGraph. MS CS @ Purdue.",
    creator: "@shreyamanjucha",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-[#0a0a14] font-sans antialiased overflow-x-hidden">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-violet-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-medium focus:shadow-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
