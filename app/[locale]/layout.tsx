// app/[locale]/layout.tsx
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
      <body>
        <header>
          <h1>SwissKaz Travel</h1>
          <nav>
            <a href="/en">English</a> | <a href="/de">Deutsch</a> | <a href="/fr">Français</a>
          </nav>
        </header>

        <main>{children}</main>

        <footer>
          <p>© {new Date().getFullYear()} SwissKaz Travel</p>
        </footer>
      </body>
    </html>
  );
}
