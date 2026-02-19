import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google"; // Added Outfit
import { ThemeProvider } from "next-themes";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' }); // Configure Outfit

export const metadata: Metadata = {
  title: "Beacon | Enterprise Healthcare Intelligence",
  description: "Enterprise intelligence platform for healthcare systems. Transform fragmented data into executive-level decision advantage.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}