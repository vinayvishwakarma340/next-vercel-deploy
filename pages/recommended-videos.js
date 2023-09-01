import BreadCrumbs from "../Components/BreadCrumbs";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import CorporateCareCard from "../Components/CardUI/CorporateCareCard";
import { WeCareResponse } from "./api/weCareApi";
import { useEffect, useState } from "react";
import SecondryWidget from "../Components/Widget/SecondryWidget";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { useRouter } from "next/router";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";
import SkeletonMrec from "../Components/Skeleton/SkeletonMrec";

import HeadingWithIcon from "../Components/HeadingUI/HeadingWithIcon";
import HomeYoutube from "../Components/CardUI/HomeYoutube";
// import ForherCarousel from "../Components/Banner/ForherCarousel";
import BannerForHer from "../Components/Banner/BannerForHer";
import HomeCarousel from "../Components/CarouselBanner/HomeCarousel";

const videos = ({ props }) => {
  console.log(props, "ppp");
  const [adShow, setadShow] = useState(false);
  const router = useRouter();


  const widgetOne = {
    name: "FREE Mentorship Advise",
    description: "Free mentorship advice from top mentors",

    src: "/mentorIcon/Mentor.webp",
    btnText: "Connect With Mentors",
    href: "/mentorship/mentorkart",
  };

  const pages = [
    { name: "Forher", href: "/ForHer", current: true },
    { name: "Forher List", href: "", current: true },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="">
      <MainHeader />

      <Head>
        <meta charSet="utf-8" />
        <title>{`Podcast - TimesAscent`}</title>
        <meta
          name="description"
          content={`Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com`}
        />
        <link rel="canonical" href="https://timesascent.com/corporates-care" />
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
        <meta property="og:title" content="Corporates Care" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/corporates-care"
        />
        <meta
          property="og:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta property="twitter:title" content="Corporates Care" />
        <meta
          property="twitter:description"
          content="Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
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
                  name: "Corporates Care",
                },
              ],
            }),
          }}
        />
      </Head>

      {/* banner */}

      <HomeCarousel
        isMobile={props.isMobile}
        data={props.bannerResponse.data}
      />

      <BannerForHer />

      <div className="  py-4 md:py-6 lg:py-8 container">
        <div className="">
          <BreadCrumbs data={pages} />
        </div>
        <section className="mt-6 md:flex justify-between items-center w-full">
          <div className=" w-full  md:w-[calc(100%-320px)]">
            <>
              <HeadingWithIcon headingText="Recommended Videos" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
                {props.videoData.data.map((item, index) => {
                  return (
                    <HomeYoutube
                      isMobile={props.isMobile}
                      key={index}
                      url={`${item.YoutubeUrl}?autoplay=1&mute=1`}
                      image={item.Image}
                      height={120}
                    />
                  );
                })}
              </div>
            </>
          </div>
          <div className=" mt-6  ">
            {adShow ? (
              <GoogleAd_300x250
                path="/1064661/ta.com_mrec2_For_Her"
                ads_Id="div-gpt-ad-1674559443586-0"
                size={[[300, 250]]}
              />
            ) : (
              <SkeletonMrec />
            )}
          </div>
        </section>

        {/* <div className="mt-6 flex justify-center">
          <Pagination page={page} maxPage={maxPage} pageChange={pageChange} />
        </div> */}

        {/* <div className="mt-6">
          {adShow ? (
            <GoogleAd_728x90
              isMobile={props.isMobile}
              path="/22637491760/timesascent.com_erelego_ap_d_728x90"
              ads_Id="div-gpt-ad-1666337275945-0"
            />
          ) : (
            <SkeletonHrec />
          )}
        </div> */}
      </div>

      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  let userAgent;
  if (context) {
    userAgent = context.req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  let isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  let props = {};
  try {
    // const bannerResponse = await bannerData("forher");

    // const videoData = await videoResponse();
    const forherYoutubeVideo = await fetch(
      `${process.env.LIVE_HOST}/json/forherYoutubeVideo.json`
    );
    const videoData = await forherYoutubeVideo.json();

    const ForherBanner = await fetch(
      `${process.env.LIVE_HOST}/json/ForherBanner.json`
    );
    const bannerResponse = await ForherBanner.json();

    props = {
      isMobile,
      bannerResponse,
      videoData,
    };
  } catch (err) {
    console.log("api error in forher page");
    props = {
      isPageError: true,
    };
  }

  return { props: { props } };
}
export default videos;
