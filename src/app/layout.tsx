import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Delivery App",
  description: "Bulkease Delivery App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <nav className="flex items-center justify-between p-3 m-3">
          <h1 className="font-semibold">Bulkease Delivery</h1>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <Button variant="default">
              <SignInButton mode="modal" />
            </Button>
          </SignedOut>
        </nav>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
