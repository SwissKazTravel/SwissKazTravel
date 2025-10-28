import React from 'react';

export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'de' },
    { locale: 'fr' }
  ];
}

export default function Page({ params }: { params: { locale: string } }) {
  const { locale } = params;

  return (
    <main style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>SwissKaz Travel</h1>
      <p>Aktuelle Sprache: <strong>{locale}</strong></p>

      {locale === 'en' && <p>Welcome to SwissKaz Travel! Discover Switzerland & Kazakhstan.</p>}
      {locale === 'de' && <p>Willkommen bei SwissKaz Travel! Entdecke die Schweiz & Kasachstan.</p>}
      {locale === 'fr' && <p>Bienvenue chez SwissKaz Travel ! Découvrez la Suisse & le Kazakhstan.</p>}
    </main>
  );
}
