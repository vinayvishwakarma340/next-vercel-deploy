
import { webStoriesDetailApi } from "../api/webStoriesApi";

import { useAmp } from 'next/amp'
import Head from 'next/head'
export const config = { amp: true }

function About(props) {

  const WebStoriesDetails = props.WebStoryDetailListdata.WebStoriesDetails
  const isAmp = useAmp()

  return (
    <> <Head>
      <script async src="https://cdn.ampproject.org/v0.js"></script>
      {/* <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script> */}

      <link rel="icon" href="/Times_Ascent_Icon.png" />

      <title>klkl</title>

      <link rel="icon" href="/public/Times_Ascent_Icon.png" />



      <script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>
      <script async custom-element="amp-story" src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
      {/* <link
        rel="dns-prefetch"
        href="https://www.google-analytics.com/analytics.js"
      /> */}

      <link rel="canonical" href="/dfg" />




    </Head>

   
 
       
        {WebStoriesDetails.map((i) =>
        <amp-story
        standalone=""
        title="Hello Story"
        publisher="The AMP Team"
        publisher-logo-src="https://example.com/logo/1x1.png"
        poster-portrait-src="https://example.com/my-story/poster/3x4.jpg"
      > 
          <amp-story-page id="dfd" auto-advance-after="5s"> 
              <amp-story-grid-layer aspect-ratio="9:16" template="vertical">
                <amp-img
              className="ampimg"
              width="300"
              height="300"
              src={i.DImage}
              alt="a cool image"
              layout="responsive"
            /></amp-story-grid-layer> </amp-story-page></amp-story>)
        }
    </>

  )
}
export async function getServerSideProps(context) {
  const WebStoryDetailListdata = await webStoriesDetailApi({
    WebStoriesSummaryID: context.query.id[1],
  });

  return {
    props: { WebStoryDetailListdata },
  };
}
export default About