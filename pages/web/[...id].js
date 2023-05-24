import { webStoriesDetailApi } from "../api/webStoriesApi";
// import { useAmp } from "next/amp";
import Head from "next/head";
export const config = { amp: true };

function stories(props) {
  const WebStoriesDetails = props.WebStoryDetailListdata.WebStoriesDetails;
  // const isAmp = useAmp();
  return (
    <>
      <Head>
        <title>{WebStoriesDetails[0].TitleType}</title>
        <meta
          name="description"
          content={WebStoriesDetails[0].DescriptionType}
        />
        <link rel="canonical" href="https://timesascent.com/allwebstories" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta
          property="twitter:title"
          content={WebStoriesDetails[0].TitleType}
        />
        <meta
          property="twitter:description"
          content={WebStoriesDetails[0].DescriptionType}
        />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:site"
          content="https://twitter.com/@timesascent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />

        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script
          async
          custom-element="amp-analytics"
          src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
        ></script>

        <script
          async
          custom-element="amp-video"
          src="https://cdn.ampproject.org/v0/amp-video-0.1.js"
        ></script>
        <script
          async
          custom-element="amp-story"
          src="https://cdn.ampproject.org/v0/amp-story-1.0.js"
        ></script>
        <link
          rel="dns-prefetch"
          href="https://www.google-analytics.com/analytics.js"
        />
      </Head>
      <amp-story
        standalone=""
        title="Hello Story"
        publisher="The AMP Team"
        publisher-logo-src="https://example.com/logo/1x1.png"
        poster-portrait-src="https://example.com/my-story/poster/3x4.jpg"
      >
        {WebStoriesDetails.map((item, index) => (
          <amp-story-page key={index} id="dfd" auto-advance-after="5s">
            <amp-story-grid-layer template="fill">
              <amp-img
                className="ampimg"
                width="720"
                height="1280"
                layout="responsive"
                src={item.DImage}
                alt="a cool image"
              />
            </amp-story-grid-layer>

            <amp-story-grid-layer template="vertical">
              {/* <div className="writer">
                <span className="logo-thumb blkBg">
                  <amp-img
                    className="writer-img"
                    data-hero=""
                    src="https://timesascent.com/Times_Ascent_Icon.png"
                    width="40"
                    height="40"
                    alt="herzindagi logo"
                    layout="fixed"
                  />
                </span>
              </div> */}
              <div className="text-container">
                {item.TitleType && (
                  <h1 className="first-heading">{item.TitleType}</h1>
                )}
                {item.DescriptionType && (
                  <p className="desct">{item.DescriptionType}</p>
                )}
                {item.headtext && (
                  <h2 className="second-heading">{item.headtext}</h2>
                )}
              </div>
              {item.url && (
                <span className="btnnew">
                  <a
                    href={item.url}
                    tabindex="0"
                    className="btnnewa"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Click Here
                  </a>
                </span>
              )}
            </amp-story-grid-layer>
          </amp-story-page>
        ))}
      </amp-story>
      <style jsx>{`
        amp-story {
          font-family: "Roboto", "Arial", "sans-serif";
        }
        .text-container {
          background: rgba(00, 00, 00, 0.6);
          padding: 10px;
          border-radius: 7px;
          backdrop-filter: blur(40px);
          font-size: 22px;
          color: #fff;
        }
        .first-heading {
          font-size: 18px;
          line-height: 20px;
          margin-bottom: 10px;
        }
        .second-heading {
          font-size: 18px;
          line-height: 22px;
          margin-bottom: 10px;
          font-weight: 400
        }
        .desct {
          font-size: 16px;
          line-height: 22px;
          font-weight: 400
          margin-bottom: 10px;
        }
        .btnnew {
          background: #f02f39;
          border: 0;
          border-radius: 5px;
          max-width: 150px;
          padding: 12px 10px;
          font-size: 15px;
          margin: 0 auto;
          margin-top: 220px;
          color: white;
          text-transform: uppercase;
          text-align: center;
          cursor: pointer;
        }
        .btnnewa {
          text-decoration: none;
          color: #ffff;
        }
        .btnnewa:hover {
          color: #ffff;
        }
      `}</style>
    </>
  );
}
export async function getServerSideProps(context) {
  const WebStoryDetailListdata = await webStoriesDetailApi({
    WebStoriesSummaryID: context.query.webId[1],
  });

  return {
    props: { WebStoryDetailListdata },
  };
}
export default stories;
