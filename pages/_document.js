import { Html, Head, Main, NextScript } from "next/document";
import { GA_TRACKING_ID } from "../lib/gtag";
import Script from "next/script";
import Link from "next/link";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
       
        <Script
          strategy="beforeInteractive"
          async={true}
          src={`https://www.googletagmanager.com/gtag/js?id=AW-10817401996`}
        />

        <Script
          async={true}
          strategy="beforeInteractive"
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        />
        <Script
          id="gtag-init"
          type="text/javascript"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config',  'UA-71301443-1', {
             page_path: window.location.pathname,
           });
         `,
          }}
        />

        <Script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-${GA_TRACKING_ID}');`,
          }}
        />
        <Script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-71301443-1', 'auto');
ga('send', 'pageview');`,
          }}
        />
        <Script
          id="gtag-init"
          type="text/javascript"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-71301443-1', 'auto');
ga('send', 'pageview');`,
          }}
        />

        <script
          type="text/javascript"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "cnijqjrcg7");`,
          }}
        />

        <Script
          strategy="beforeInteractive"
          src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"
        />

        <Link
          rel="dns-prefetch"
          as="script"
          crossOrigin="anonymous"
          href="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4938307593495390"
        />

     
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
