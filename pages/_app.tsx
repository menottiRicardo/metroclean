import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <Head>
        <title>Metro Clean</title>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/192.png" />
        <link rel="icon" href="/metro-ico-192.ico" />
        <meta name="theme-color" content="#fff" />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
