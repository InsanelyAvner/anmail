import { EnvVarWarning } from "@/components/env-var-warning";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "next-themes";
import Link from "next/link";
import Image from "next/image"
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "anonymail",
  description: "An anonymous email client",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className} suppressHydrationWarning>
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="min-h-screen flex flex-col items-center">
            <div className="flex-1 w-full flex flex-col gap-20 items-center">
              <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
                <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
                  <div className="flex gap-5 items-center font-semibold text-2xl">
                    <Link href={"/"}>
                    <Image
            src="https://res.cloudinary.com/avner-sg/image/upload/v1726977836/czq2coojgagtqdwsfy6b.png"
            height={190}
            width={190}
            alt="anonymail logo"
          />
                    </Link>
                  </div>
                  <EnvVarWarning />
                </div>
              </nav>
              <div className="flex flex-col gap-15 max-w-5xl p-5">
                {children}
              </div>

              <footer className="w-full flex items-center justify-center border-t mx-auto text-center text-xs gap-8 py-6">
                <p className="text-center text-sm text-zinc-400 mb-5">© Copyright {new Date().getFullYear()} anonymail by Avner</p>
              </footer>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
