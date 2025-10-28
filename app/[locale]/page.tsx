import { notFound } from 'next/navigation';

export default function LocalePage({ params }: { params: { locale: string } }) {
  const { locale } = params;

  // Definiere deine erlaubten Sprachen
  const supported = ['en', 'de', 'fr'];

  if (!supported.includes(locale)) {
    notFound(); // wirft 404, wenn jemand /it oder /es eintippt
  }

  // Texte für jede Sprache
  const translations: Record<string, { title: string; message: string }> = {
    en: {
      title: 'Welcome to SwissKaz Travel',
      message: 'This is the English version of the website.',
    },
    de: {
      title: 'Willkommen bei SwissKaz Travel',
      message: 'Dies ist die deutsche Version der Website.',
    },
    fr: {
      title: 'Bienvenue chez SwissKaz Travel',
      message: 'Ceci est la version française du site.',
    },
  };

  const { title, message } = translations[locale];

  return (
    <main style={{ textAlign: 'center', padding: '2rem' }}>
      <h1>{title}</h1>
      <p>{message}</p>
    </main>
  );
}
