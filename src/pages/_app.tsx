import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import localFont from 'next/font/local';

const poppins = localFont({
  src: [
    { path: '../fonts/poppins-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/poppins-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/poppins-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/poppins-latin-700-normal.woff2', weight: '700', style: 'normal' },
    { path: '../fonts/poppins-latin-800-normal.woff2', weight: '800', style: 'normal' },
  ],
  variable: '--font-poppins',
  display: 'swap',
});

const robotoMono = localFont({
  src: [
    { path: '../fonts/roboto-mono-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: '../fonts/roboto-mono-latin-500-normal.woff2', weight: '500', style: 'normal' },
    { path: '../fonts/roboto-mono-latin-600-normal.woff2', weight: '600', style: 'normal' },
    { path: '../fonts/roboto-mono-latin-700-normal.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${poppins.variable} ${robotoMono.variable} font-sans`}>
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YDPDLECYYZ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-YDPDLECYYZ');
        `}
      </Script>

      <Component {...pageProps} />
    </div>
  );
}
