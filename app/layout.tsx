import type {Metadata} from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '¿Cuánto cobra un abogado por una sucesión? Ley y Costos',
  description: 'Descubrí con exactitud cuánto cobra un abogado por una sucesión en Argentina (CABA y PBA). Conocé las leyes, evitá regulaciones abusivas y ahorrá miles de dólares.',
  authors: [{name: 'Ezequiel Villagra', url: 'https://www.sucesionescaba.ar/'}],
  alternates: {
    canonical: 'https://www.sucesionescaba.ar/cuanto-cobra-abogado-sucesion-argentina',
  },
  openGraph: {
    title: '¿Cuánto cobra un abogado por una sucesión? Ley y Costos',
    description: 'Descubrí con exactitud cuánto cobra un abogado por una sucesión en Argentina (CABA y PBA). Conocé las leyes, evitá regulaciones abusivas y ahorrá miles de dólares.',
    url: 'https://www.sucesionescaba.ar/',
    siteName: 'Sucesiones CABA & PBA',
    locale: 'es_AR',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: '¿Cuánto cobra un abogado por una sucesión? Ley y Costos',
    description: 'Descubrí con exactitud cuánto cobra un abogado por una sucesión en Argentina (CABA y PBA). Conocé las leyes, evitá regulaciones abusivas y ahorrá miles de dólares.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="es">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
