import { ReactNode } from "react";

export default function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  const { locale } = params;

  return (
    <html lang={locale}>
      <head>
        <title>SwissKaz Travel</title>
      </head>
      <body style={{ fontFamily: 'Arial, sans-serif', margin: 0, padding: 0 }}>
        <header style={{ background: '#f5f5f5', padding: '1rem', textAlign: 'center' }}>
          <h1>SwissKaz Travel</h1>
          <nav>
            <a href="/en">English</a> | <a href="/de">Deutsch</a> | <a href="/fr">Français</a>
          </nav>
        </header>

        <main style={{ padding: '2rem' }}>{children}</main>

        <footer style={{ background: '#f5f5f5', padding: '1rem', textAlign: 'center' }}>
          <p>© {new Date().getFullYear()} SwissKaz Travel</p>
        </footer>
      </body>
    </html>
  );
}
