import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link 
          href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;600;700&family=Syne:wght@400;500;600;700&display=swap" 
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
        rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap"
         rel="stylesheet"/>
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}