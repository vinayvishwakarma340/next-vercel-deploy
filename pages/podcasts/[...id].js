import React from "react";
import MainHeader from "../../Components/MainHeader";
import Footer from "../../Components/Footer";
import { useRouter } from "next/router";
import Head from "next/head";
import BreadCrumbs from "../../Components/BreadCrumbs";
import { podcastDetailResponse } from "../api/podcastApi";

const podcastDetail = ({ props }) => {
  const router = useRouter();
  const podcastDetail = props.podcastData.Data;

  const pages = [
    { name: "Podcasts", href: "/podcasts", current: true },
    { name: podcastDetail?.PodcastTitle, href: "", current: true },
  ];

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${podcastDetail?.PodcastTitle} - Podcasts on Timesascent.com`}</title>
        <meta
          name="description"
          content={`Listen to the latest and most popular ${podcastDetail?.PodcastTitle} podcasts powered by Idea Brews on timesascent.com`}
        />
        <link rel="canonical" href="https://timesascent.com/podcasts" />
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
        <meta property="og:title" content={`Listen to the latest and most popular ${podcastDetail?.PodcastTitle} podcasts powered by Idea Brews on timesascent.com`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`Listen to the latest and most popular ${podcastDetail?.PodcastTitle} podcasts powered by Idea Brews on timesascent.com`}
        />
        <meta property="og:url" content="https://timesascent.com/podcasts" />
        <meta
          property="og:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta property="twitter:title" content="Podcasts" />
        <meta
          property="twitter:description"
          content={`Listen to the latest and most popular ${podcastDetail?.PodcastTitle} podcasts powered by Idea Brews on timesascent.com`}
        />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:site"
          content="https://twitter.com/@timesascent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://timesascent.com/",
                },

                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Podcasts",
                },
              ],
            }),
          }}
        />
      </Head>
      <MainHeader />

      <div className="py-4 md:py-6 lg:py-8 container">
        <div className="mb-4">
          <BreadCrumbs data={pages} />
        </div>
        <h1 className="text-xl font-bold my-4">TimesAscent Podcast Powered by Idea Brews - {podcastDetail?.PodcastTitle}</h1>
        <iframe
          className="hidden sm:block"
          src={`${podcastDetail?.PodcastURL}/embed?style=cover`}
          width="100%"
          height="700"
          frameborder="0"
          title={podcastDetail?.PodcastTitle}
        ></iframe>

        {/* mobile */}
        <iframe
          className="block sm:hidden"
          src={`${podcastDetail?.PodcastURL}/embed?style=cover&size=square`}
          width="100%"
          height="700"
          frameborder="0"
          title={podcastDetail?.PodcastTitle}
        ></iframe>
        <div className=" mt-4">
          <div className="font-medium text-gray-500">Disclaimer</div>
          <p className="text-gray-500">BCCL disclaims any and all representation or warranties of any kind - expressed or implied - about the completeness, accuracy, reliability,  or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Views expressed herein are independent opinions. You may act at your own risk while relying on the information available on the website. Should you decide to act, or omit to act, you should seek appropriate professional advice.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export async function getServerSideProps(context) {
  const podcastData = await podcastDetailResponse({
    PodcastUUID: context.query.id[1],
  });

  const props = {
    podcastData: podcastData,
  };

  return { props: { props } };
}

export default podcastDetail;
