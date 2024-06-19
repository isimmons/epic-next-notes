import type { Metadata } from "next";
import "./styles/tailwind.css";
import "./styles/font.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Epic Next Notes",
  description: "Based on the Epic Notes app but built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full overflow-x-hidden">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icons/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className="h-full">
        <div
          id="content"
          className="flex h-full flex-col justify-between bg-background text-foreground"
        >
          <header className="container mx-auto py-6">
            <nav className="flex justify-between">
              <Link href="/">
                <div className="font-light">epic</div>
                <div className="font-bold">notes</div>
              </Link>
            </nav>
          </header>

          <div className="flex-1 container">
            <div className="mt-36">{children}</div>
          </div>

          <div className="container mx-auto flex justify-between">
            <Link href="/">
              <div className="font-light">epic</div>
              <div className="font-bold">notes</div>
            </Link>
            <p>Built with ♥️ by </p>
          </div>
        </div>
      </body>
    </html>
  );
}
