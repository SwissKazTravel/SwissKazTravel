import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    const acceptLang = request.headers.get('accept-language') || '';
    const lang = acceptLang.split(',')[0].split('-')[0]; // z.B. "de", "en", "fr"

    let target = '/en'; // Default-Sprache

    if (lang === 'de') target = '/de';
    if (lang === 'fr') target = '/fr';

    return NextResponse.redirect(new URL(target, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/'],
}; 
