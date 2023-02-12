
import { webStoriesDetailApi } from "../api/webStoriesApi";

import { useAmp } from 'next/amp'
import Head from 'next/head'
export const config = { amp: true }

function About(props) {
  const isAmp = useAmp()
const arr=["https://images.unsplash.com/photo-1676085272023-91fce74ee32b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80","https://images.unsplash.com/photo-1676129125368-816d7b629a35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60"]
  return (
    <> <Head>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script> 
   
    <link rel="icon" href="/Times_Ascent_Icon.png" />
   
    <title>klkl</title>
   
    <link rel="icon" href="/public/Times_Ascent_Icon.png" />
   
   

    <script async custom-element="amp-video"  src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>
    {/* <script async custom-element="amp-story"  src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script> */}
        <link
        rel="dns-prefetch"
        href="https://www.google-analytics.com/analytics.js"
      />

     <link rel="canonical" href = "/"/>
  


  
  </Head> <div>

      <h3>My AMP About Page!</h3>
      {isAmp ? (
       arr.map((i)=><amp-img
       width="300"
       height="300"
       src={i}
       alt="a cool image"
       layout="responsive"
     />) 
      ) : (
        <img width="300" height="300" src="https://plus.unsplash.com/premium_photo-1661962548081-071712b709ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60" alt="a cool image" />
      )}
    </div></>
   
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