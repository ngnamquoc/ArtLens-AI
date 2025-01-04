import type { Metadata } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

const ArchivoFont = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});



export const metadata: Metadata = {
  title: "ArtLens AI",
  description: "AI-poweredd image generator and retouch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{variables:{colorPrimary:'#00B4D8'}}} >
      <html lang="en">
      <body
        className={cn("font-archivo antialiased", ArchivoFont.variable)}
      >
        {children}
      </body>
    </html>

    </ClerkProvider>
    
  );
}
