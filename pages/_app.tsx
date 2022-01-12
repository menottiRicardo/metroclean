import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";
import awsExports from "../src/aws-exports";
import { Amplify } from "aws-amplify";
import Script from "next/script";
import * as gtag from "../lib/gtag";
import { useEffect } from "react";
import { useRouter } from "next/router";

Amplify.configure({ ...awsExports, ssr: true });
function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system">
      <AnimatePresence exitBeforeEnter>
        <Head>
          <title>Metro Clean</title>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/192.png" />
          <link rel="icon" href="/metro-ico-192.ico" />
          <meta name="theme-color" content="#fff" />
        </Head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
        <Component {...pageProps} />
      </AnimatePresence>
    </ThemeProvider>
  );
}

export default MyApp;
