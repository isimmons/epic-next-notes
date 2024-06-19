import type { Metadata } from 'next';
import Link from 'next/link';
import './styles/font.css';
import './styles/tailwind.css';

export const metadata: Metadata = {
  title: 'Epic Next Notes',
  description: 'Based on the Epic Notes app but built with Next.js',
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

          <div className="container flex-1">{children}</div>

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
