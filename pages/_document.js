import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";


export default function Document() {


  return (
    <Html lang="en">
      <Head>
        {/* <link rel="icon" href="/favicon.ico" sizes="any" /> */}
        {/*       <meta http-equiv="Content-Security-Policy" content="default-src *; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline' 'unsafe-eval'"/>
         */}

        {/* --------------------------------Google Ads------------------------ */}
        <Script
          async={true}
          strategy="beforeInteractive"
          src="https://securepubads.g.doubleclick.net/tag/js/gpt.js"
        />

        {/* ------------------------------------------------GA4------------------------------------------------- */}

        {/* <Script
          strategy="beforeInteractive"
          async={true}
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`}
        /> */}



        {/* <!-- Google Tag Manager --> */}


        <Script
          id="gtm"
          type="text/javascript"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':

            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            
            })(window,document,'script','dataLayer','${process.env.GA_TRACKING_ID}');`,
          }}
        />
        {/* <!-- End Google Tag Manager --> */}

        <Script
          id="gtag-init-second"
          type="text/javascript"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config',  '${process.env.GA_TRACKING_ID}');
         `,
          }}
        />


        {/* ------------------------------Event fire End--------------------------------------------------- */}

        {/* <Script
          id="gtag-init"
          type="text/javascript"
          data-cfasync="false"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');
ga('create', '${process.env.GA_TRACKING_ID}', 'auto');
ga('send', 'pageview');`,
          }}
        /> */}


        {/* <Script
          strategy="beforeInteractive"
          async={true}
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
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

         gtag('config',  '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        });
         `,
          }}
        /> */}



        {/* ----------------------------- Matomo --------------------------------------- */}


        {/* <Script
          type="text/javascript"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `var _mtm = window._mtm = window._mtm || [];
            _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
            (function() {
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src='https://et.onecorp.co.in/js/container_VgA74Yfh.js'; s.parentNode.insertBefore(g,s);
            })();`,
          }}
        />
        <Script
          type="text/javascript"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://et.onecorp.co.in/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();`,
          }}
        />
 */}



        {/* ------------------------------- clarity -------------------------------- */}



        <Script
          id="gtagnew"
          type="text/javascript"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "cnijqjrcg7");`,
          }}
        />

        {/* <Script
          strategy="beforeInteractive"
          src="https://unpkg.com/flowbite@1.4.5/dist/flowbite.js"
        /> */}

        {/* <Script
          id="gtag"
          type="text/javascript"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `<iframe src=https://www.googletagmanager.com/ns.html?id=${process.env.GA_TRACKING_ID} height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript >  <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${process.env.GA_TRACKING_ID}`} height="0" width="0" style={{ "display": "none", "visibility": "hidden" }}></iframe></noscript>
        </NextScript>
      </body>
    </Html>
  );
}




// src={`https://www.googletagmanager.com/gtag/js?id=AW-10817401996`}
{/* <a
          rel="dns-prefetch"
          as="script"
          crossOrigin="anonymous"
          href="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4938307593495390"
        /> */}