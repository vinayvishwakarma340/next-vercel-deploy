import BreadCrumbs from "../../Components/BreadCrumbs";
import Footer from "../../Components/Footer";
import MainHeader from "../../Components/MainHeader";
import { WeCareResponse } from "../api/weCareApi";
import { useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import * as gtag from "../../lib/gtag";
import { useRouter } from "next/router";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
import SkeletonMrec from "../../Components/Skeleton/SkeletonMrec";
import SkeletonHrec from "../../Components/Skeleton/SkeletonHrec";
import Pagination from "../../Components/NewPagination";
import PodcastCard from "../../Components/CardUI/PodcastCard";
import FreelancerWidget from "../../Components/Widget/FreelancerWidget";
import { podcastResponse } from "../api/podcastApi";
// import podcastData from "./podcastData.json";

const corporatesCare = ({ props }) => {
  const [adShow, setadShow] = useState(false);
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(Math.ceil(props.podcastData.Count / 12));
  const router = useRouter();

  const podcastData = props.podcastData?.Data

  const widgetOne = {
    name: "FREE Mentorship Advise",
    description: "Free mentorship advice from top mentors",

    src: "/mentorIcon/Mentor.webp",
    btnText: "Connect With Mentors",
    href: "/mentorship/mentorkart",
  };

  const pages = [{ name: "Podcasts", href: "", current: true }];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    setPage(router.query.page ? parseInt(router.query.page) : 1);
    return () => clearTimeout(timeout);
  }, [router.query.page]);

  const pageChange = (val) => {
    router.push(`/podcasts/?page=${val}`);
  };
  // const Event = () => {
  //   {
  //     props.weCareData.recentdata.map((item) => {
  //       gtag.event({
  //         action: item.OrganisationName,
  //         category: "Company Impressions",
  //         label: router.asPath,
  //       });
  //     });
  //   }
  // };

  // const ArticleEvent = () => {
  //   {
  //     props.weCareData.recentdata?.map((item) => {
  //       gtag.event({
  //         action: item.title,
  //         category: "Article Impressions",
  //         label: item.ArticleId,
  //       });
  //     });
  //   }
  // };

  const freelancerWidgetData = {
    heading: "Work Remotely",
    description: " Get a network of certified and experienced freelancers",
    buttonText: "Post a requirement",
  };

  return (
    <div className="">
      <MainHeader />

      <Head>
        <meta charSet="utf-8" />
        <title>{`Podcasts - Timesascent.com`}</title>
        <meta
          name="description"
          content={`Listen to the latest and most popular podcasts on timesascent.com`}
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
        <meta property="og:title" content="Podcasts" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Listen to the latest and most popular podcasts on timesascent.com"
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
          content="Listen to the latest and most popular podcasts on timesascent.com"
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

      {/* banner */}

      <div className="relative">
        <div className={"hidden sm:block relative"}>
          <Image
            style={{ objectFit: "cover" }}
            src="/podcasts/Banner/PodcastWeb.webp"
            width={2000}
            height={500}
            alt="For her Banner"
          />
        </div>

        <div className={" block sm:hidden relative"}>
          <Image
            style={{ objectFit: "cover" }}
            src="/podcasts/Banner/PodcastMobile.webp"
            width={768}
            height={307}
            alt="For her Banner"
          />
        </div>
      </div>

      <div className="  py-4 md:py-6 lg:py-8 container">
        <div className="">
          <BreadCrumbs data={pages} />
        </div>
        <h1 className="text-xl font-bold mt-4">TimesAscent Podcast Powered by Idea Brews</h1>
        <section className="mt-6 sm:flex justify-between  ">
          <div className="  md:w-[calc(100%-320px)]">
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-3  lg:grid-cols-4 gap-4">
                {podcastData.map((item) => {
                  return <PodcastCard key={item.KeyIndex} data={item} />;
                })}
              </div>
            </div>
            <div className="flex justify-center mt-10">
              <Pagination
                page={page}
                maxPage={maxPage}
                pageChange={pageChange}
              />
            </div>
          </div>
          <div className="mt-6 md:ml-[20px] md:mt-0  md:w-[300px]  ">
            {adShow ? (
              <GoogleAd_300x250
                path="/1064661/ta.com_mrec1_Company_Profile"
                ads_Id="div-gpt-ad-1674560167075-0"
                size={[[300, 250]]}
              />
            ) : (
              <SkeletonMrec />
            )}

            <div className="mt-6">
              <FreelancerWidget {...freelancerWidgetData} />
            </div>
            <div className="mt-6">
              {adShow ? (
                <GoogleAd_300x250
                  path="/22637491760/timesascent.com_erelego_d_cp_300x250"
                  ads_Id="div-gpt-ad-1674643917536-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
            </div>
            {/* <div className="mt-6">
              <PrimayWidgetNew {...widgetOne} />
            </div>
            <div className="mt-6">
              {adShow ? (
                <GoogleAd_300x250
                  path="/22637491760/timesascent.com_erelego_d_ap_300x250_1"
                  ads_Id="div-gpt-ad-1674643874881-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
            </div> */}
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
  const podcastData = await podcastResponse({
    content: 12,
    page: context.query.page,
  });

  const props = {
    podcastData: podcastData,
    isMobile: isMobile,
  };

  return { props: { props } };
}

export default corporatesCare;
