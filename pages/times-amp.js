
import Head from "next/head";
import { useAmp } from 'next/amp'

export const config = { amp: true };

const webstoryid = () => {
    const isAmp = useAmp()
    return (
      <>
        <Head>        
                <meta charSet="utf-8" />
                <title>Aviral Times</title>
                <meta
                  name="description"
                  content="gf"
                />
                <link rel="canonical" href="/" />
                <meta
                  name="viewport"
                  content="initial-scale=1.0, width=device-width"
                />

                <link
                  rel="icon"
                  type="image/png"
                  sizes="32x32"
                  href="https://www.aviraltimes.com/Favicon.webp"
                />
                <link
                  rel="icon"
                  type="image/png"
                  sizes="16x16"
                  href="https://www.aviraltimes.com/Favicon.webp"
                />
                <meta property="og:title" content="/" />
                <meta property="og:type" content="website" />
                <meta
                  property="og:description"
                  content="jhjh"
                />
                <meta property="og:url" content="hhjhj" />
                <meta
                  property="og:image"
                  content="https://www.aviraltimes.com/MetaOG.jpg"
                />
                <meta
                  property="twitter:image"
                  content="https://www.aviraltimes.com/MetaOG.jpg"
                />
                <meta property="twitter:title" content="hghgghgh" />
                <meta
                  property="twitter:description"
                  content="gffgfggf"
                />
                <meta property="twitter:card" content="summary" />
                <meta
                  property="twitter:site"
                  content="https://twitter.com/AviralTimes"
                />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta property="og:image:width" content="200" />
                <meta property="og:image:height" content="200" />
              
         

          <script
            async
            custom-element="amp-story"
            src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
          ></script>
          <script async src="https://cdn.ampproject.org/v0.js"></script>
          <script
            async
            key="amp-story"
            custom-element="amp-story"
            src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
          />
        </Head>
     {isAmp ?<amp-story
          standalone=""
          title="Stories in AMP"
          publisher="AMP project"
          publisher-logo-src="/AviralLogo.svg"
        >
        
              <amp-story-page
                id="dd"
               
                auto-advance-after="4s"
              >
                <amp-story-grid-layer template="vertical">
                <amp-img
                    src="https://images.unsplash.com/photo-1676085272023-91fce74ee32b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                    alt="dfdf"
                    height="555px"
                    width="300px"
                    layout="fill"
                    animate-in="fly-in-top"
                  /> 
                </amp-story-grid-layer>
                
              </amp-story-page>
           
        
        </amp-story> : <div>not amp</div>}   

        <style jsx>{`
          amp-story {
            font-family: "Oswald", sans-serif;
            color: #fff;
          }
          .flexcontainer {
            display: block;
            justify-content: space-between;
            flex-direction: column;
          }

          h1 {
            margin-top: 20px;

            font-weight: bold;
            font-size: 2em;
            font-weight: normal;
            line-height: 1.174;
          }
          p {
            font-weight: normal;
            font-size: 1.3em;
            line-height: 1.5em;
            color: #fff;
          }

          .desct {
            padding: 10px;
            color: #fff;
            background: rgba(00, 00, 00, 0.5);
          }

          .heading {
            padding: 10px;
            color: #fff;
            background: rgba(00, 00, 00, 0.5);
            margin-bottom: 20px;
          }
        `}</style>
      </>
    );
  }



export default webstoryid;
