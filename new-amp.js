import Head from "next/head"
import { useAmp } from 'next/amp'

export const config = { amp: "hybrid" };

const dd = () => {
    const isAmp = useAmp()

  return  <>
    <Head>
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-analytics" src="https://cdn.ampproject.org/v0/amp-analytics-0.1.js"></script> 
   
    <link rel="icon" href="/Times_Ascent_Icon.png" />
   
    <title>klkl</title>
   
    <link rel="icon" href="/public/Times_Ascent_Icon.png" />
   
   

    <script async custom-element="amp-video"  src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>
    <script async custom-element="amp-story"  src="https://cdn.ampproject.org/v0/amp-story-1.0.js"></script>
        <link
        rel="dns-prefetch"
        href="https://www.google-analytics.com/analytics.js"
      />

     <link rel="canonical" href = "/"/>
  


  
  </Head>
    <amp-story 
    standalone={false}
    publisher = ""
    title="Times Ascent"
    publisher-logo-src="https://timesascent.com/newimages/main/times_ascent_logo.svg"
    poster-portrait-src="https://timesascent.com/newimages/main/times_ascent_logo.svg">



 
   
      <amp-story-page id="dfd" auto-advance-after="5s">
           <amp-story-grid-layer 
           template="fill"
           >
             <amp-img src="https://images.unsplash.com/photo-1676085272023-91fce74ee32b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                 width="720" height="1280"
                 layout="responsive">
             </amp-img>
            
           </amp-story-grid-layer>
           <amp-story-grid-layer template="vertical">

      

          <div class="writer" > 
            <span class="logo-thumb blkBg">
            <amp-img data-hero="" src="https://timesascent.com/newimages/main/times_ascent_logo.svg" width="140" height="20" alt="herzindagi logo" layout="fixed" />
            </span> </div>
            
      
       
          <h1 class="desct1">fdsfsf</h1>
         


         
             <p class="desct">fggd</p>
           


           


              

           </amp-story-grid-layer>
         </amp-story-page>

       
</amp-story></>
  
}

export default dd


