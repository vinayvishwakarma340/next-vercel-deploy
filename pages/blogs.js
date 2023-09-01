import React, { useEffect } from "react";
import ArticleCard from "../Components/CardUI/ArticleCard";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import ArticleCardWithoutImg from "../Components/CardUI/ArticleCardWithoutImg";
import HeadingWithIcon, {
  HeadingWithIconH1,
} from "../Components/HeadingUI/HeadingWithIcon";
import { SearchArticlesResponse } from "../pages/api/articleApi";

import { useState } from "react";

import SubscribeNews from "../Components/SubscribeNews";

import WebStories from "../Components/CardUI/WebStories";

import SuccessModal from "../Components/Modal/SuccessModal";
import BreadCrumbs from "../Components/BreadCrumbs";
import Head from "next/head";
import PrimayWidgetNew from "../Components/Widget/PrimayWidgetNew";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";
import * as gtag from "../lib/gtag";
import GoogleAd_BHrec from "../Components/GoogleAds/GoogleAd_BHrec";
import SkeletonMrec from "../Components/Skeleton/SkeletonMrec";
import SkeletonBHrec from "../Components/Skeleton/SkeletonBHrec";
import FourZeroFour from "../Components/FourZeroFour";
import BlogGridArticles from "../Components/CardUI/BlogGridArticles";
const widgetOne = {
  name: "FREE Mentorship Advise",
  description: "Free mentorship advice from top mentors",
  src: "/mentorIcon/Mentor.webp",
  btnText: "Connect With Mentors",
  href: "/mentorship/mentorkart",
};
const Blogs = ({ props }) => {
  if (props.isPageError) {
    return <FourZeroFour />;
  }
  const [subcribeEmailLoading, setSubcribeEmailLoading] = useState(false);
  const [showModalSubcribeEmail, setShowModalSubcribeEmail] = useState(false);
  const [adShow, setadShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    ArticleEvent();
    return () => clearTimeout(timeout);
  }, [
    props.articleData.data.Guestarticle,
    props.articleData.data.ForHerGuestarticle,
    props.HrData.data,
    props.CoursesData.Courses,
  ]);

  const ArticleEvent = () => {
    const pageLoadTime =
      window.performance.timing.domContentLoadedEventEnd -
      window.performance.timing.navigationStart;
    gtag.pageSpeedEvent({
      action: "Blogs Page Speed",
      pageTitle: "Blogs page",
      load_time: pageLoadTime,
    });
    {
      props.articleData.data.Guestarticle.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
    {
      props.articleData.data.ForHerGuestarticle.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
    {
      props.HrData.data.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
    {
      props.CoursesData.Courses.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
  };

  const closeModalHandler = () => {
    setShowModalSubcribeEmail(false);
  };

  const emailFormHandler = (email) => {
    setSubcribeEmailLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 77927b69bb144b065ca11bf2a9d452819cd852db"
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Email: email,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/Subcription`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          setShowModalSubcribeEmail(true);
        }
      })

      .catch((error) => console.log("error", error))
      .finally(() => {
        setSubcribeEmailLoading(false);
      });
  };

  const pages = [{ name: "Blogs", href: "/blogs", current: false }];
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Latest articles for blogs - timesascent.com`}</title>
        <meta
          name="description"
          content={`Blogs epaper articles from Times of india newspaper - timesascent.com`}
        />
        <link rel="canonical" href="https://timesascent.com/blogs" />
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
          property="og:title"
          content="Latest articles for blogs - timesascent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Blogs epaper articles from Times of india newspaper - timesascent.com"
        />
        <meta property="og:url" content="https://timesascent.com/blogs" />
        <meta
          property="og:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta
          property="twitter:title"
          content="Latest articles for blogs - timesascent.com"
        />
        <meta
          property="twitter:description"
          content="Blogs epaper articles from Times of india newspaper - timesascent.com"
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
                  position: 2,
                  name: "Blogs",
                },
              ],
            }),
          }}
        />
      </Head>

      {/* modal start */}
      <SuccessModal
        openModal={showModalSubcribeEmail}
        closeModal={() => closeModalHandler()}
        headingText="Thank-You !!"
        subHeadingText=" You will be updated with latest newsletters, articles,
                        courses and events on your Email."
        buttonText="OK"
      />
      {/* modal end */}
      <MainHeader />
      <main>
        <div className="  py-4 md:py-6 lg:py-8 container">
          <div className="mb-6">
            <BreadCrumbs data={pages} />
          </div>

          {/* web stories */}
          <seciton>
            <BlogGridArticles
              data={props.articleData.data.Guestarticle}
              adShow={adShow}
            />
          </seciton>
          <section className="mt-6 mx-auto ">
            <HeadingWithIconH1
              headingText="Web Stories"
              href="/allwebstories"
            />
            <div class=" w-full hide-scroll-bar  overflow-x-scroll  sm:overflow-auto  ">
              <ul class="pb-1 flex sm:grid sm:grid-cols-5  w-max sm:w-full overflow-hidden sm:overflow-auto flex-nowrap gap-x-4  ">
                {props.webStoriesData.data.slice(0, 5)?.map((item) => (
                  <WebStories key={item.KeyIndex} data={item} />
                ))}
              </ul>
            </div>
          </section>

          {/* <section className="mt-6 md:flex justify-between items-center w-full">
            <div className=" w-full  md:w-[calc(100%-320px)]">
              <div className="">
                <HeadingWithIcon
                  headingText="Featured Articles"
                  href="/articleslist/featured-articles"
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {props.articleData.data.Guestarticle.slice(0, 4).map(
                    (item) => {
                      return <ArticleCard key={item.KeyIndex} data={item} />;
                    }
                  )}
                </div>
                <div className="flex justify-end mt-1">
                  <a
                    href="/articleslist/featured-articles"
                    className="text-sm hover:underline text-timesPurple"
                  >
                    Show more Articles &rarr;
                  </a>
                </div>
              </div>
            </div>
            <div className=" mt-6 sm:mt-0">
              {adShow ? (
                <GoogleAd_300x250
                  path="/1064661/ta.com_mrec1_Blogs"
                  ads_Id="div-gpt-ad-1674559646662-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
            </div>
          </section> */}

          <section className="mt-6 py-4 border-b-2 border-t-2 border-dashed">
            <HeadingWithIcon
              headingText="Trending Articles For Women"
              href={"/articleslist/articles-for-her"}
            />
            <ul
              role="list"
              className=" divide-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 "
            >
              {props.articleData.data.ForHerGuestarticle.slice(0, 5).map(
                (item, index) => {
                  return <ArticleCardWithoutImg key={index} data={item} />;
                }
              )}
            </ul>
          </section>

          <div className="mt-6">
            {adShow ? (
              <>
                <div className=" hidden md:block ">
                  <GoogleAd_BHrec
                    path="/1064661/ta.com_bhrec1_Blogs"
                    ads_Id="div-gpt-ad-1674564448109-0"
                    size={[[750, 200]]}
                  />
                </div>
                <div className="block md:hidden">
                  <GoogleAd_BHrec
                    path="/1064661/ta.com_bhrec2_Mob_Blogs"
                    ads_Id="div-gpt-ad-1674564614344-0"
                    size={[[320, 100]]}
                  />
                </div>
              </>
            ) : (
              <SkeletonBHrec />
            )}
          </div>

          <section className="mt-6 md:flex justify-between items-center w-full">
            <div className=" w-full  md:w-[calc(100%-320px)]">
              <div className="">
                <HeadingWithIcon headingText="Recommended HR Read" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {props.HrData.data.slice(0, 4).map((item) => {
                    return <ArticleCard key={item.KeyIndex} data={item} />;
                  })}
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-0">
              {adShow ? (
                <GoogleAd_300x250
                  path="/22637491760/timesascent.com_erelego_d_ap_300x250"
                  ads_Id="div-gpt-ad-1674643828785-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
            </div>
          </section>

          <section className="mt-6 sm:flex  ">
            <div className="md:w-[calc(100%-310px)]">
              <SubscribeNews
                emailFormHandler={emailFormHandler}
                heading=" Subscribe to our Newsletter!"
                subHeading="  Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque."
                loading={subcribeEmailLoading}
              />
            </div>
            <div className="md:ml-6 mt-6 md:mt-0 ">
              <PrimayWidgetNew {...widgetOne} />
            </div>
          </section>

          <section className="mt-6 flex flex-col-reverse md:flex-row justify-between items-center w-full">
            <div className="mt-6 md:mt-0 w-full  md:w-[calc(100%-320px)]">
              <div className="">
                <HeadingWithIcon headingText="Trending Articles" />
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {props.CoursesData.Courses.slice(0, 4).map((item) => {
                    return <ArticleCard key={item.KeyIndex} data={item} />;
                  })}
                </div>
              </div>
            </div>
            <div className="mt-6 sm:mt-0">
              {adShow ? (
                <GoogleAd_300x250
                  path="/22637491760/timesascent.com_erelego_d_ap_300x250_1"
                  ads_Id="div-gpt-ad-1674643874881-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
            </div>
          </section>
        </div>
      </main>
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
    const blogMainJsonData = await fetch(
      `${process.env.LIVE_HOST}/json/new/BlogsPage.json`
    );
    const {
      getForherSreenData,
      GetWebStoriesSummary: GetWebStoriesSummaryData,
    } = await blogMainJsonData.json();

    // const getForher = await fetch(
    //   `${process.env.LIVE_HOST}/json/getForherSreenData.json`
    // );
    // const getForherSreenData = await getForher.json();

    // const GetWebStoriesSummary = await fetch(
    //   `${process.env.LIVE_HOST}/json/GetWebStoriesSummary.json`
    // );
    // const GetWebStoriesSummaryData = await GetWebStoriesSummary.json();

    const HrData = await SearchArticlesResponse({ SearchCategory: "HR ZONE" });
    const CoursesData = await SearchArticlesResponse({
      SearchCategory: "Courses",
    });

    props = {
      articleData: getForherSreenData,
      webStoriesData: GetWebStoriesSummaryData,
      HrData: HrData,
      CoursesData: CoursesData,
      isMobile: isMobile,
    };
  } catch (err) {
    console.log(err, "error");
    props = {
      isPageError: true,
    };
  }

  return { props: { props } };
}
export default Blogs;
