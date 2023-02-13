import { webStoriesDetailApi } from "../api/webStoriesApi";

import { useAmp } from "next/amp";
import Head from "next/head";
export const config = { amp: true };

function About(props) {
  const WebStoriesDetails = props.WebStoryDetailListdata.WebStoriesDetails;
  const isAmp = useAmp();

  return (
    <>
      <Head>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script
          async
          custom-element="amp-analytics"
          src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"
        ></script>

        <link rel="icon" href="/Times_Ascent_Icon.png" />

        <title>klkl</title>

        <link rel="icon" href="/public/Times_Ascent_Icon.png" />

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

        <link rel="canonical" href="/dfg" />
        <style
          amp-custom=""
          dangerouslySetInnerHTML={{
            __html: `
          amp-img {
            border: 1px solid black;
          }
        `,
          }}
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
              <div className="writer">
                <span className="logo-thumb blkBg">
                  <amp-img
                    className="writer-img"
                    data-hero=""
                    src="https://timesascent.com/newimages/main/times_ascent_logo.svg"
                    width="140"
                    height="20"
                    alt="herzindagi logo"
                    layout="fixed"
                  />
                </span>
              </div>
              {item.TitleType && (
                <h1 className="first-heading">
                  a{item.TitleType.toUpperCase()}
                </h1>
              )}
              {item.DescriptionType && (
                <p className="desct">{item.DescriptionType}</p>
              )}
              {item.headtext && <h2 className="heading">{item.headtext}</h2>}
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
    </>
  );
}
export async function getServerSideProps(context) {
  const WebStoryDetailListdata = await webStoriesDetailApi({
    WebStoriesSummaryID: context.query.id[1],
  });

  return {
    props: { WebStoryDetailListdata },
  };
}
export default About;
