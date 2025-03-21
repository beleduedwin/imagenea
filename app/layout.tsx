import type { Metadata } from "next";
import { IBM_Plex_Sans, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider,
          SignInButton,
          SignUpButton,
          SignedIn,
          SignedOut,
          UserButton,} from "@clerk/nextjs";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
})

export const metadata: Metadata = {
  title: "Imagenea",
  description: "Générateur d'images alimenté par l'IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5'}
    }}>
      <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/assets/images/logo-icon.svg" />
        <body
          className={`${cn("font-IBMLex antialiased", IBMPlex.variable)} ${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          {/* <header className="flex justify-end items-center p-4 gap-4 h-16">
            <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
