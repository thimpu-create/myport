import { Html, Head, Main, NextScript } from 'next/document';

export const THEME_INIT_SCRIPT = `try{var s=localStorage.getItem("color-scheme");document.querySelector('meta[name="color-scheme"]').content=s==="light"||s==="dark"?s:"light dark";if(s==="light"||s==="dark")document.documentElement.classList.add("theme-"+s)}catch(e){}`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="color-scheme" content="light dark" />
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
