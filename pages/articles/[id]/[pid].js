import React, { useState, useEffect, useRef } from "react";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import MainHeader from "../../../Components/MainHeader";

import {
  AcademicCapIcon,
  CheckBadgeIcon,
  ClockIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";

import RelatedArticle from "../../../Components/ArticleDetail/RelatedArticle";
import {
  GetArticleDetails,
  RecommendedArticlesList,
} from "../../api/articleApi";
import ArticleWithoutImgCollection from "../../../Components/CardCollection/ArticleWithoutImgCollection";
import getarticlewithoutimagearticle from "../../../public/JSON/getarticlewithoutimagearticle.json";
import { useRouter } from "next/router";
import Head from "next/head";

import InfiniteScroll from "react-infinite-scroll-component";

import { useCallback } from "react";
import BreadCrumbs from "../../../Components/BreadCrumbs";
import copy from "copy-to-clipboard";
import removeSpaceLowerCase from "../../../Components/CustomHook/useRemoveSpaceUrl";
import PrimayWidgetNew from "../../../Components/Widget/PrimayWidgetNew";
import GoogleAd_300x250 from "../../../Components/GoogleAds/GoogleAd_300x250";
import * as gtag from "../../../lib/gtag";
import { GA_TRACKING_ID } from "../../../lib/gtag";
import GlobalShare from "../../../Components/GlobalShare";
import GoogleAd_Hrec from "../../../Components/GoogleAds/GoogleAd_Hrec";
import Image from "next/image";
import SkeletonHrec from "../../../Components/Skeleton/SkeletonHrec";
import PageNotFound from "../../../Components/PageNotFound";

const articledetail = (props) => {
  const router = useRouter();

  if (router.isFallback) return null;

  if (!props?.props?.ArticlesData.data.keyIndex) {

    return <PageNotFound />
  }

  // const [recommendedArticlesdata, setRecommendedArticlesdata] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);
  const [adShow, setadShow] = useState(false);
  const [posts, setPosts] = useState([props?.props?.ArticlesData.data]);
  const [nextid, setNextid] = useState(props?.props?.ArticlesData.newarticleid);
  const [banner, setBanner] = useState(false);
  const [deviceType, setDeviceType] = useState("");
  const [isPaidArticle, setIsPaidArticles] = useState(false);


  useEffect(() => {

    CheckSourceDevice();
    window.gtag("config", GA_TRACKING_ID, {
      page_location: router.asPath,
      page_title: "Article Page",
    });
  }, []);
  useEffect(() => {
    setIsPaidArticles(posts[0].paidArticle === "1");
  }, [nextid]);
  const CheckSourceDevice = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
        navigator.userAgent
      )
    ) {
      setDeviceType("Mobile");
    } else {
      setDeviceType("Desktop");
    }
  };

  useEffect(() => {

    {
      posts.map((item) => {
        return router.push(
          `/articles/${item.title &&
          item.title
            .replace(/[^a-zA-Z0-9 ]/g, " ")
            .split(" ")
            .join("-")
            .split(" ")
            .join("-")
            .split("--")
            .join("-")
            .toLowerCase()
          }/${item.ArticleId}`,
          undefined,
          { shallow: true }
        );
      });
    }
  }, [banner]);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    // console.log(router.query.pid, "pid")
    moreContent(router.query.pid, [[728, 90]], "/22637491760/timesascent.com_erelego_ap_d_728x90");
    moreContent(router.query.pid + "mob1", [[320, 50]], "/22637491760/timesascent.com_erelego_ap_d_728x90");
    return () => clearTimeout(timeout);
  }, [router.query.pid])


  // ---------------------------------------
  // useEffect(() => {


  //   const loadAds = async () => {
  //     const googletag = (await window.googletag) || {};
  //     googletag.cmd.push(function () {
  //       googletag.display(idd);
  //     })
  //     if (googletag.cmd) {
  //       await googletag.cmd.push(() => {
  //         let defineSlot = googletag.defineSlot(pathh, sizee, idd).setTargeting("test", "infinitescroll");

  //         defineSlot.addService(googletag.pubads());


  //         googletag.enableServices();
  //         googletag.display(idd);

  //         googletag.pubads().refresh([defineSlot]);


  //       });
  //     }
  //   };

  //   loadAds();
  // }, [nextid]);

  const ArticleEvent = () => {
    // gtag.pageview({ page_path: router.asPath });
    const pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    gtag.pageSpeedEvent({
      action: "Article Page Speed", pageTitle: "Article page", load_time: pageLoadTime
    });
    {
      posts.map((item) => {
        gtag.event({
          action: item.title,
          category: "Infinite View",
          label: router.asPath,
        });
      });
    }
  };

  useEffect(() => {
    ArticleEvent();
  }, [posts]);

  const useHookWithRefCallback = () => {
    const setRef = useCallback((node) => {
      const ss = Math.random();
      setBanner(ss);
      if (ref.current) {
      }

      if (node) {
      }

      ref.current = node;
    }, []);

    return [setRef];
  };
  const [ref] = useHookWithRefCallback();

  const getMorePost = async () => {
    if (nextid !== undefined || nextid !== "null" || nextid !== null) {
      let fetchArticleData = await fetch(
        `${process.env.Live_API_URL}/v1/admin1_1/GetArticles`,
        {
          method: "POST",
          headers: {
            Authorization: process.env.API_TOKEN_AUTH_SERVER,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ArticleId: nextid,
          }),
        }
      );
      if (!fetchArticleData.ok) {
        console.log("Api Error", fetchArticleData.status);
      }
      try {
        const jsonData = await fetchArticleData.json();
        if (!Array.isArray(jsonData.data)) {
          setNextid(jsonData.newarticleid);
          const insidePost = [jsonData.data];
          const timeout = setTimeout(() => {
            setPosts((post) => [...post, ...insidePost]);
          }, 1500);
          return () => clearTimeout(timeout);
        }
        else {
          setNextid(null)
        }
      } catch (error) {
        console.error(error); // you may also
      }
    }
  };

  const moreContent = (articleId, size, path) => {
    window.googletag = window.googletag || { cmd: [] };
    // Define the slot itself, register it and fetch an ad.
    googletag.cmd.push(function () {
      var slot = googletag.defineSlot(path, size)
        .setTargeting('test', 'infinitescroll')
        .addService(googletag.pubads());


      var divAppend = document.getElementById(articleId);
      var div = document.createElement('div');
      div.id = slot.getSlotElementId(); // auto-generated by GPT
      divAppend.appendChild(div);



      // Call display() to register the slot as ready and fetch an ad.
      googletag.display(slot);
    });
  }

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const textAreaRef = useRef(null);

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    setSuccess(true);
  };

  const widgetThree = {
    name: "Get a Free confidential review from a resume expert",
    description: "Upload your resume and get expert resume analysis",
    icon: AcademicCapIcon,
    src: "/mentorIcon/TopResume.webp",
    btnText: "Upload Resume",
    href: "/top-resume",
  };

  const MinsToRead = (wordCount) => {
    if (wordCount < 200) {
      return <div>Less than one minute to read</div>;
    } else {
      var count = Math.ceil(wordCount / 200);
      return <div>{count} minutes to read</div>;
    }
  };

  const pages = [
    {
      name: "Article",
      href: "/blogs",
      current: true,
    },
    {
      name: posts.map((item) => {
        return `${item.title}`;
      }),
      href: "#",
      current: true,
    },
  ];

  const onClickArticleHandler = (articleTitle, articleId) => {
    return `/articles/${removeSpaceLowerCase(articleTitle)}/${articleId}`;
  };
  return (
    <>
      <Head>
        {posts.map((item) => {
          return (
            <>
              <title> {item.title}</title>
              <link
                rel="canonical"
                href={`https://timesascent.com${onClickArticleHandler(
                  item.title,
                  item.ArticleId
                )}`}
              />
              <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
              />
              <meta name="description" content={item.shortDescription} />
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
              <meta property="og:title" content={item.title} />
              <meta property="og:type" content="website" />
              <meta property="og:description" content={item.shortDescription} />
              <meta
                property="og:url"
                content={`https://timesascent.com${onClickArticleHandler(
                  item.title,
                  item.ArticleId
                )}`}
              />
              <meta
                property="og:image"
                content={`https://timesascent.com${item.imagePath}`}
              />
              <meta
                property="twitter:image"
                content={`https://timesascent.com${item.imagePath}`}
              />
              <meta property="twitter:title" content={item.title} />
              <meta
                property="twitter:description"
                content={item.shortDescription}
              />
              <meta property="twitter:card" content="summary" />
              <meta
                property="twitter:site"
                content="https://twitter.com/@timesascent"
              />
              <meta name="mobile-web-app-capable" content="yes" />
              <meta property="og:image:width" content="200" />
              <meta property="og:image:height" content="200" />
            </>
          );
        })}
        {posts.map((item) => {
          return (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  headline: `${item.title}`,
                  image: `${item.thumbnail || item.imagePath}`,
                  datePublished: `${new Date(
                    item.createdDate.replace(/(\d+)(st|nd|rd|th)/, "$1")
                  ).toISOString()}`,
                  dateModified: `${new Date(
                    item.updatedDate.replace(/(\d+)(st|nd|rd|th)/, "$1")
                  ).toISOString()}`,
                  url: `${"https://timesascent.com" + router.asPath}`,
                  about: `${item.shortDescription}`,
                  isAccessibleForFree: "true",
                  author: {
                    "@type": "Person",
                    name: `${item.author}`,
                    url: `${"https://timesascent.com" + router.asPath}`,
                  },
                  publisher: [
                    {
                      name: "timesascent.com",
                    },
                  ],
                }),
              }}
            />
          );
        })}
        {/* {posts.map((item) => {
          return (
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "NewsArticle",
                  mainEntityOfPage: {
                    "@type": "WebPage",
                    "@id": `https://timesascent.com${router.asPath}`,
                  },
                  headline: `${item.title}`,
                  image: `${item.thumbnail || item.imagePath}`,
                  datePublished: `${new Date(
                    item.createdDate.replace(/(\d+)(st|nd|rd|th)/, "$1")
                  ).toISOString()}`,
                  dateModified: `${new Date(
                    item.updatedDate.replace(/(\d+)(st|nd|rd|th)/, "$1")
                  ).toISOString()}`,
                  url: `${"https://timesascent.com" + router.asPath}`,
                  about: `${item.shortDescription}`,
                  isAccessibleForFree: "true",
                  author: {
                    "@type": "Person",
                    name: `${item.author}`,
                    url: `${"https://timesascent.com" + router.asPath}`,
                  },
                  publisher: {
                    "@type": "Organization",
                    name: "timesascent.com",
                    logo: {
                      "@type": "ImageObject",
                      url: `${item.thumbnail || item.imagePath}`,
                    },
                  },
                }),
              }}
            />
          );
        })} */}
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
                  name: "Article",
                  item: "https://timesascent.com/",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: posts.map((item) => {
                    return `${item.title}`;
                  }),
                  item: "https://timesascent.com/",
                },
              ],
            }),
          }}
        />
      </Head>
      <MainHeader />
      <div className="relative   py-4 container lg:py-4 bg-white">
        <BreadCrumbs data={pages} />
      </div>

      {/* <button onClick={() => moreContent("div-gpt-ad-1666337275945-0", [[728, 90]], "/22637491760/timesascent.com_erelego_ap_d_728x90")}>click me</button>
      <div id="div-gpt-ad-1666337275945-0"></div> */}
      <div className="box-border w-full container grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
        <div className="grid grid-cols-1 gap-4 lg:col-span-2">
          <InfiniteScroll
            dataLength={posts.length}
            next={getMorePost}
            hasMore={nextid !== null ? true : false}
            loader={
              <h3 style={{ textAlign: "center", color: "rgb(220 38 38)" }}>
                <b>Loading...</b>
              </h3>
            }
            endMessage={
              <p
                style={{
                  textAlign: "center",
                  background: "white",
                  padding: "5px",
                  marginBottom: "10px",
                }}
              >
                <b>Yay! You have read it all</b>
              </p>
            }
          >
            {posts.map((item) => {
              return (
                <>
                  {item && (
                    <div className="min-h-full">
                      <div className=" h-[360px] w-full relative backdrop-blur-lg">
                        {/* <img
                          src={`https://timesascent.com${item.imagePath}`}
                          className="h-[360px] w-full object-cover lg:object-contain"
                          alt={item.title}
                        /> */}
                        <div className={"h-[360px] w-full relative"}>
                          <Image
                            className="object-cover lg:object-contain rounded-sm"
                            src={`https://timesascent.com${item.imagePath}`}
                            fill
                            priority
                            alt={item.title}
                          />
                        </div>
                        <div
                          className="absolute inset-0 mix-blend-multiply bg-gray-400"
                          aria-hidden="true"
                        />
                        <div className="absolute inset-0 mx-auto px-10 max-w-3xl lg:max-w-7xl pt-[4%] ">
                          <h1 className="text-lg sm:text-2xl  text-white   font-bold lg:w-3/5">
                            {" "}
                            {item.title}
                          </h1>
                          <h2 className="text-base sm:text-lg text-white  md:line-clamp-none lg:w-3/5">
                            {item.shortDescription}
                          </h2>
                          {/* <h3 className="pt-5 text-white text-base font-semibold">
                            {" "}
                            {MinsToRead(item.content?.split(" ").length)}
                          </h3> */}
                        </div>

                        <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20"></div>
                      </div>

                      <main className="-mt-[40px] md:-mt-12 pb-8 relative">
                        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                          <h2 className="sr-only">Profile</h2>

                          <div className="flex flex-col gap-4 lg:gap-8">
                            <div className="flex flex-col gap-4">
                              <section aria-labelledby="profile-overview-title">
                                <div className="overflow-hidden rounded-lg bg-white shadow">
                                  <h2
                                    className="sr-only"
                                    id="profile-overview-title"
                                  >
                                    Profile Overview
                                  </h2>
                                  <div className="bg-white p-6">
                                    <div className="sm:flex sm:items-center sm:justify-between">
                                      <a
                                        href={`/authorprofile/${item.AutherUUid}`}
                                        className={
                                          item.AutherUUid
                                            ? "text-gray-500 mr-8 "
                                            : "pointer-events-none"
                                        }
                                      >
                                        {" "}
                                        <span className="font-bold text-black hover:text-timesPurple">
                                          {" "}
                                          {item.author}
                                        </span>{" "}
                                        | {item.createdDate}
                                      </a>
                                    </div>

                                    {deviceType !== "Mobile" ? (
                                      <>
                                        <div className="flex items-center justify-between w-[70%] md:w-[40%] flex-wrap pt-1">
                                          <a
                                            href={`https://facebook.com/sharer/sharer.php?u=https://timesascent.com${router.asPath}`}

                                            className="text-gray-400 flex items-center justify-between hover:text-timesRed "
                                          >
                                            <svg
                                              className="text-xl h-6 w-6"
                                              fill="currentColor"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                clipRule="evenodd"
                                              />
                                            </svg>
                                          </a>
                                          <a
                                            href={`https://web.whatsapp.com/send?text=https://timesascent.com${router.asPath}`}
                                            target={"_self"}
                                            className="text-gray-400 flex items-center justify-between hover:text-timesRed"
                                          >
                                            {" "}
                                            <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="18"
                                              height="18"
                                              fill="currentColor"
                                              class="bi bi-whatsapp"
                                              viewBox="0 0 16 16"
                                              id="IconChangeColor"
                                            >
                                              {" "}
                                              <path
                                                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                                                id="mainIconPathAttribute"
                                              ></path>{" "}
                                            </svg>
                                          </a>

                                          <a
                                            href={`mailto:?body=https://timesascent.com${router.asPath}`}
                                            target={"_self"}
                                            className="text-gray-400 flex items-center justify-between hover:text-timesRed pt-3"
                                          >
                                            <svg
                                              className="text-xl h-7 w-7"
                                              fill="currentColor"
                                              viewBox="0 0 24 24"
                                            >
                                              <path
                                                fillRule="evenodd"
                                                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                                                clipRule="evenodd"
                                              />
                                            </svg>
                                          </a>

                                          <a
                                            href={`https://twitter.com/intent/tweet?url=https://timesascent.com${router.asPath}`}
                                            target={"_self"}
                                            className="text-gray-400 flex items-center justify-between hover:text-timesRed "
                                          >
                                            <svg
                                              className="text-xl h-6 flex items-center w-6"
                                              fill="currentColor"
                                              viewBox="0 0 24 24"
                                            >
                                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                            </svg>
                                          </a>

                                          <a
                                            href={`https://www.linkedin.com/shareArticle?mini=true&url=https://timesascent.com${router.asPath}`}
                                            target={"_self"}
                                            className="text-gray-400 flex items-center justify-between hover:text-timesRed "
                                          >
                                            <svg
                                              className="text-xl h-5 flex items-center w-5"
                                              fill="currentColor"
                                              viewBox="0 0 24 24"
                                            >
                                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                          </a>

                                          <div
                                            onClick={() => {
                                              copy(
                                                `https://timesascent.com${router.asPath}`
                                              );
                                              setSuccess(true);
                                              const timeout = setTimeout(() => {
                                                setSuccess(false);
                                              }, 1000);
                                              return () => clearTimeout(timeout);
                                            }}
                                            className="cursor-pointer text-gray-400 flex items-center justify-between hover:text-timesRed "
                                          >
                                            {" "}
                                            <DocumentDuplicateIcon
                                              className="h-6 w-6 mx-2"
                                              aria-hidden="true"
                                            />
                                          </div>
                                        </div>
                                        {success && (
                                          <div className="text-red-500">
                                            Link copied to clipboard
                                          </div>
                                        )}
                                      </>
                                    ) : (
                                      <div className="pt-3">
                                        {" "}
                                        <GlobalShare
                                          url={`https://timesascent.com${router.asPath}`}
                                        />
                                      </div>
                                    )}
                                  </div>
                                  <div className="prose pt-2 px-6 pb-6 text-sm w-[100%] max-w-full">
                                    <div
                                      className="text-sm font-medium [&>p]:mb-6 [&>p>img]:m-auto [&>p>span>img]:m-auto w-[100%] max-w-full"
                                      dangerouslySetInnerHTML={{
                                        __html: item.content,
                                      }}
                                    />
                                  </div>
                                </div>
                              </section>
                              {/* {!isPaidArticle && (
                                <div className="mt-6">
                                  <div className=" hidden md:block ">
                                    <GoogleAd_Hrec
                                      path="/1064661/ta.com_hrec1_Article"
                                      ads_Id={item.ArticleId}
                                      size={[[728, 90]]}
                                    />
                                  </div>
                                  <div className="block md:hidden">
                                    <GoogleAd_Hrec
                                      path="/1064661/ta.com_hrec1_Mob_Article"
                                      ads_Id={item.ArticleId + "mob1"}
                                      size={[[320, 50]]}
                                    />
                                  </div>

                                </div>
                              )} */}
                              {!isPaidArticle && (
                                <>
                                  {adShow ? <div className="mt-6">

                                    <div className=" hidden md:block ">
                                      <GoogleAd_Hrec
                                        path="/22637491760/timesascent.com_erelego_ap_d_728x90"
                                        ads_Id={item.ArticleId}
                                        size={[[728, 90]]}
                                      />
                                    </div>
                                    <div className="block md:hidden">
                                      <GoogleAd_Hrec
                                        path="/22637491760/timesascent.com_erelego_ap_d_728x90"
                                        ads_Id={item.ArticleId + "mob1"}
                                        size={[[320, 50]]}
                                      />
                                    </div>

                                  </div> : <div className="mt-6"> <SkeletonHrec /></div>}

                                </>
                              )}

                              {/* googleAd */}
                              {/* {
                                idx == 0 &&
                                <div id={idd}></div>
                              }
                              <div id={item.ArticleId}></div> */}

                              {/* {posts[0].RelatedArticle && (
                                <RelatedArticle
                                  recommendedArticlesdata={
                                    posts[0].RelatedArticle
                                      ? posts[0].RelatedArticle
                                      : []
                                  }
                                />
                              )} */}
                            </div>

                            {/* <div className="grid grid-cols-1 gap-4">
                          <div className="h-[250px]  ">
                            <PrimayWidgetNew {...widgetThree} />
                          </div>
                          {!isPaidArticle && (
                            <div className="mt-4">
                              <GoogleAd_300x250
                                path="/1064661/ta.com_mrec1_Article"
                                ads_Id="div-gpt-ad-1674559935966-0"
                                size={[[300, 250]]}
                              />
                            </div>
                          )}
                          <div className="border border-gray-50 bg-white rounded shadow">
                            <div className="px-6 py-3">
                              <ArticleWithoutImgCollection
                                data={getarticlewithoutimagearticle.data.slice(
                                  0,
                                  3
                                )}
                                href="/articleslist/Recommended-Read"
                              />
                            </div>
                          </div>

                          {!isPaidArticle && (
                            <div className="place-content-center my-5 m-auto w-[300px] h-[250px] bg-gray-300 flex items-center text-center">
                              <GoogleAd_300x250
                                path="/22637491760/timesascent.com_erelego_d_ap_300x250"
                                ads_Id="div-gpt-ad-1674643828785-0"
                                size={[[300, 250]]}
                              />
                            </div>
                          )}
                        </div> */}
                          </div>

                        </div >
                        <div className="mt-4">
                          {posts[0].RelatedArticle && (
                            <RelatedArticle
                              recommendedArticlesdata={
                                posts[0].RelatedArticle
                                  ? posts[0].RelatedArticle
                                  : []
                              }
                            />
                          )}
                        </div>
                      </main>

                      <div id={item.ArticleId} ref={ref}>
                        {" "}
                      </div>
                    </div>
                  )}
                </>
              );
            })}
          </InfiniteScroll >
        </div >
        <div className="sticky top-4">
          <div className="px-[4%] lg:px-0 grid grid-cols-1 gap-4">
            <div className="h-[250px]  ">
              <PrimayWidgetNew {...widgetThree} />
            </div>
            {!isPaidArticle && (
              <div className="mt-4">
                <GoogleAd_300x250
                  path="/1064661/ta.com_mrec1_Article"
                  ads_Id="div-gpt-ad-1674559935966-0"
                  size={[[300, 250]]}
                />
              </div>
            )}
            <div className="border border-gray-50 bg-white rounded shadow">
              <div className="px-6 py-3">
                <ArticleWithoutImgCollection
                  data={getarticlewithoutimagearticle.data.slice(
                    0,
                    3
                  )}
                  href="/articleslist/Recommended-Read"
                />
              </div>
            </div>

            {!isPaidArticle && (
              <div className="place-content-center my-5 m-auto w-[300px] h-[250px] bg-gray-300 flex items-center text-center">
                <GoogleAd_300x250
                  path="/22637491760/timesascent.com_erelego_d_ap_300x250"
                  ads_Id="div-gpt-ad-1674643828785-0"
                  size={[[300, 250]]}
                />
              </div>
            )}
          </div>
        </div>
      </div >
    </>
  );
};

export default articledetail;

export async function getStaticPaths() {
  const data = [
    {
      id: "india-inc-must-recognise-and-nurture-existing-pool-of-talent",
      pid: "157719",
    }
  ];

  const paths = data.map((item) => ({
    params: { id: item.id || null, pid: item.pid || null },
  }));
  return {
    paths: paths,
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  let props = {};
  //params.query will return slug-1 and slug-2

  const ArticlesData = await GetArticleDetails(params.pid);

  props = {
    ArticlesData,
  };
  return { props: { props }, revalidate: 600 };
}

// let userAgent;
// if (context) {
//   userAgent = context.req.headers["user-agent"];
// } else {
//   userAgent = navigator.userAgent;
// }
// let isMobile = Boolean(
//   userAgent.match(
//     /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
//   )
// );
