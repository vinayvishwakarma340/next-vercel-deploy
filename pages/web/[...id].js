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
        <style jsx>{`
          amp-story {
            font-family: "Oswald", sans-serif;
            color: #fff;
          }
          amp-story-page {
            background-color: #000;
          }
          h1 {
            font-weight: bold;
            font-size: 2.875em;
            font-weight: normal;
            line-height: 1.174;
          }
          p {
            font-weight: normal;
            font-size: 1.3em;
            line-height: 1.5em;
            color: #fff;
          }
          q {
            font-weight: 300;
            font-size: 1.1em;
          }
          amp-story-grid-layer.bottom {
            align-content: end;
          }
          amp-story-grid-layer.noedge {
            padding: 0px;
          }
          amp-story-grid-layer.center-text {
            align-content: center;
          }

          .Header {
            background-color: white;
            margin: 20px auto;
            padding: 20px;
            width: 85%;
          }
          .loader {
            margin: 20px auto;
            display: block;
            text-align: center;
          }

          .desct1 {
            background: rgba(00, 00, 00, 0.5);
            padding: 10px;

            font-size: 22px;
            color: #fff;
          }
          .desct {
            background: rgba(00, 00, 00, 0.5);
            padding: 10px;
            color: #fff;
          }

          .heading {
            background: rgba(00, 00, 00, 0.5);
            padding: 10px;
            color: #fff;
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
      </Head>
      <amp-story
        standalone=""
        title="Hello Story"
        publisher="The AMP Team"
        publisher-logo-src="https://example.com/logo/1x1.png"
        poster-portrait-src="https://example.com/my-story/poster/3x4.jpg"
      >
        {WebStoriesDetails.map((i) => (
          <amp-story-page id="dfd" auto-advance-after="5s">
            <amp-story-grid-layer template="fill">
              <amp-img
                className="ampimg"
                width="720"
                height="1280"
                layout="responsive"
                src={i.DImage}
                alt="a cool image"
              />
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
