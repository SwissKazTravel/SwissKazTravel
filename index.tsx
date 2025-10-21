import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe, Plane, Map } from 'lucide-react';

export default function SwissKazTravel() {
  const [lang, setLang] = useState('en');

  const content = {
    en: {
      heading: 'Discover Kazakhstan with us',
      sub: 'From the Swiss Alps to the Kazakh Steppes 🇨🇭🇰🇿',
      explore: 'Explore Tours',
    },
    de: {
      heading: 'Entdecke Kasachstan mit uns',
      sub: 'Von den Schweizer Alpen in die kasachische Steppe 🇨🇭🇰🇿',
      explore: 'Touren entdecken',
    },
    fr: {
      heading: 'Découvrez le Kazakhstan avec nous',
      sub: 'Des Alpes suisses aux steppes kazakhes 🇨🇭🇰🇿',
      explore: 'Explorer les circuits',
    },
    ru: {
      heading: 'Откройте для себя Казахстан с нами',
      sub: 'От швейцарских Альп до казахских степей 🇨🇭🇰🇿',
      explore: 'Посмотреть туры',
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 text-center p-8">
      <div className="max-w-2xl mx-auto mt-20">
        <h1 className="text-4xl font-bold mb-4">{content[lang].heading}</h1>
        <p className="text-lg mb-8">{content[lang].sub}</p>
        <Button className="text-lg px-6 py-3">
          <Plane className="inline-block mr-2" /> {content[lang].explore}
        </Button>

        <div className="mt-10 flex justify-center gap-4">
          <Button variant="outline" onClick={() => setLang('en')}>EN</Button>
          <Button variant="outline" onClick={() => setLang('de')}>DE</Button>
          <Button variant="outline" onClick={() => setLang('fr')}>FR</Button>
          <Button variant="outline" onClick={() => setLang('ru')}>RU</Button>
        </div>

        <div className="mt-10 text-sm text-gray-600">
          <Globe className="inline-block w-4 h-4 mr-1" /> SwissKaz Travel — 2025
        </div>
      </div>
    </div>
  );
}