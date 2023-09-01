import MainHeader from "../Components/MainHeader";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import ArticleNew from "../Components/NewCompo/ArticleNew";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import JobEventCard from "../Components/jobs/JobEventCard";
import { AcademicCapIcon } from "@heroicons/react/20/solid";
import HeadingWithIcon from "../Components/HeadingUI/HeadingWithIcon";
import HrProfessionalProfile from "../Components/CardUI/HrProfessionalProfile";
import BreadCrumbs from "../Components/BreadCrumbs";
import PrimayWidgetNew from "../Components/Widget/PrimayWidgetNew";
import Head from "next/head";
import Image from "next/image";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";
import FreelancerWidget from "../Components/Widget/FreelancerWidget";
import GoogleAd_Hrec from "../Components/GoogleAds/GoogleAd_Hrec";
import SkeletonMrec from "../Components/Skeleton/SkeletonMrec";
import SkeletonHrec from "../Components/Skeleton/SkeletonHrec";

const cxozone = ({ props }) => {
  // const [cxoJobs, setCxoJobs] = useState([]);
  const [adShow, setadShow] = useState(false);
  const topcompany = props.cxoMainJSONData.topcompany;
  const careerscreen = props.cxoMainJSONData.careerscreen;
  const gethrprofessionallist = props.cxoMainJSONData.gethrprofessionallist;
  const cxoJobs = props.cxoMainJSONData.cxoJobs;
  const router = useRouter();

  const widgetOne = {
    name: "FREE Mentorship Advise",
    description: "Free mentorship advice from top mentors",
    icon: AcademicCapIcon,
    src: "/mentorIcon/Mentor.webp",
    btnText: "Connect With Mentors",
    href: "/mentorship/mentorkart",
  };
  const widgetTwo = {
    name: "Online mock interview",
    description: "Virtual face to face mock interviews with industry experts",
    icon: AcademicCapIcon,
    src: "/mentorIcon/InterviewBuddy.webp",
    btnText: "Start Mock Interview",
    href: "/interview-buddy",
  };

  const EventJob = () => {
    const pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    gtag.pageSpeedEvent({
      action: "CXO Zone Page Speed", pageTitle: "CXO Zone", load_time: pageLoadTime
    });
    {
      cxoJobs.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Job Impressions",
          label: item.JobId,
        });
      });
    }
  };

  const CompanyEvent = () => {
    {
      cxoJobs.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Company impressions",
          label: router.asPath,
        });
      });
    }

    {
      topcompany.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Company Impressions",
          label: router.asPath,
        });
      });
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    EventJob();
    CompanyEvent();
    return () => clearTimeout(timeout)
  }, [cxoJobs, topcompany]);



  const pages = [
    {
      name: "CXO-Job",
      current: true,
    },
  ];

  // const cxojobSearch = (cxo) => {
  //   var myHeaders = new Headers();
  //   myHeaders.append(
  //     "Authorization",
  //     process.env.API_TOKEN_AUTH_SERVER
  //   );
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     level: "cxo",
  //   });

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch(`${process.env.Live_API_URL}/v1/api/apiTimes/JobCard`, requestOptions)
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (result.status_code === 200 && result.status === "SUCCESS") {
  //         setCxoJobs(result.data);
  //       }
  //     })
  //     .catch((error) => console.log("error", error));
  // };

  // useEffect(() => {
  //   cxojobSearch();
  // }, []);

  const freelancerWidgetData = {
    heading: "Work Remotely",
    description: " Get a network of certified and experienced freelancers",
    buttonText: "Hire now ",
  };

  return (
    <div className="bg-white relative">
      <Head>
        <meta charSet="utf-8" />
        <title>{`CEO - CXO job openings from Times of india, economic times, epaper - timesascent.com`}</title>
        <meta
          name="description"
          content={`Explore and apply online leadership job openings, jobs are updated daily from india and around the world - timesascent.com`}
        />
        <link rel="canonical" href=" https://timesascent.com/cxo-zone" />
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
          content={`CEO - CXO job openings from Times of india, economic times, epaper - timesascent.com`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`Explore and apply online leadership job openings, jobs are updated daily from india and around the world - timesascent.com`}
        />
        <meta property="og:url" content={`https://timesascent.com/cxo-zone`} />
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
          content={`CEO - CXO job openings from Times of india, economic times, epaper - timesascent.com`}
        />
        <meta
          property="twitter:description"
          content={`Explore and apply online leadership job openings, jobs are updated daily from india and around the world - timesascent.com`}
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
                  name: "Cxo Zone",
                },
              ],
            }),
          }}
        />
      </Head>

      {/* ---------------------------main content------------------- */}

      <MainHeader />
      <div>
        <Image
          src="/cxozonebanner.webp"
          alt="bannner"
          className="m-auto"
          width={2000}
          height={500}
          priority
        />
      </div>
      <div className="relative   py-4 container lg:py-4 bg-white">
        <BreadCrumbs data={pages} />
      </div>

      <div className="relative  py-4 container lg:py-4">
        <div className="relative mx-auto ">
          {/* --------------------cxo-jobs---------- */}
          <div className="">
            <div className="relative ">
              <a href="/cxo-jobs" className="flex">
                <h2 className=" text-lg font-bold text-gray-900 lg:text-lg">
                  CXO-Jobs
                </h2>
                <div className="my-auto">
                  {" "}
                  <ArrowRightIcon className="h-5 ml-2 " />
                </div>
              </a>
            </div>

            <div className="pt-2   lg:grid grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-5 sm:grid sm:grid-cols-3 gap-4">
              {cxoJobs.slice(0, 10).map((item, index) => {
                return (
                  <div className="pt-4 pb-4   border-b-2 border-dashed w-full">
                    <JobEventCard key={index} data={item} />
                  </div>
                );
              })}
            </div>
          </div>
          {/* --------------------cxo-jobs ends---------- */}
          <div className="mt-4 mb-4">
            {adShow ? (
              <>
                {" "}
                <div className=" hidden md:block ">
                  <GoogleAd_Hrec
                    path="/1064661/ta.com_hrec1_Jobs"
                    ads_Id="div-gpt-ad-1674564963656-0"
                    size={[[728, 90]]}
                  />
                </div>
                <div className="block md:hidden">
                  <GoogleAd_Hrec
                    path="/1064661/ta.com_hrec1_Mob_Jobs"
                    ads_Id="div-gpt-ad-1674565632463-0"
                    size={[[320, 50]]}
                  />
                </div>
              </>
            ) : (
              <SkeletonHrec />
            )}
          </div>

          <div className="pt-4 pb-4 border-t-2 border-b-2 border-dashed w-full  ">
            <div className="py- ">
              <a href="/articleslist/recommended-read">
                <h2 className="inline-flex text-xl mb-1 font-bold items-center hover:text-timesPurple">
                  Recommended Read{" "}
                  <span>
                    <ArrowRightIcon className="h-5 ml-2 mt-1" />
                  </span>
                </h2>
              </a>
              <ArticleNew data={careerscreen.recommended_Articles.slice(0, 5)} />
            </div>
            <section className="mt-4  ">
              <div className=" sm:flex w-full items-center  justify-between ">
                {adShow ? (
                  <GoogleAd_300x250
                    path="/1064661/ta.com_mrec1_job_list"
                    ads_Id="div-gpt-ad-1674555282837-0"
                    size={[[300, 250]]}
                  />
                ) : (
                  <SkeletonMrec />
                )}

                <div className="mt-4 sm:mt-0 sm:w-[calc(100%-640px)] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mx-4">
                  <div className="h-[250px]  ">
                    <PrimayWidgetNew {...widgetOne} />
                  </div>
                  <div className="h-[250px] ">
                    <PrimayWidgetNew {...widgetTwo} />
                  </div>
                </div>
                <div className="mt-4 sm:mt-0 ">
                  {adShow ? (
                    <GoogleAd_300x250
                      path="/1064661/ta.com_mrec2_job_list"
                      ads_Id="div-gpt-ad-1674555431997-0"
                      size={[[300, 250]]}
                    />
                  ) : (
                    <SkeletonMrec />
                  )}
                </div>
              </div>
            </section>
          </div>
          {/* <JobsByPosition /> */}
          <section className="mt-4 md:flex justify-between box-border w-full">
            <div className="left-side w-full  md:w-[calc(100%-320px)]">
              <HeadingWithIcon headingText="Industry's Leading HR Professionals" />
              <div
                role="list"
                className=" space-y-2 sm:grid sm:grid-cols-2 lg:grid-cols-3  sm:gap-2 sm:space-y-0 lg:gap-x-2"
              >
                {gethrprofessionallist?.slice(0, 6)?.map((item, index) => {
                  return <HrProfessionalProfile key={item.index} data={item} />;
                })}
              </div>
            </div>
            <div className="mt-4 md:mt-0 right-side md:ml-[20px] md:w-[300px]">
              <FreelancerWidget {...freelancerWidgetData} />
            </div>
          </section>
        </div>
        <div className="mt-6 ">
          {adShow ? (
            <>
              <div className=" hidden md:block ">
                <GoogleAd_Hrec
                  path="/1064661/ta.com_hrec2_Jobs"
                  ads_Id="div-gpt-ad-1674565092589-0"
                  size={[[728, 90]]}
                />
              </div>
              <div className="block md:hidden">
                <GoogleAd_Hrec
                  path="/1064661/ta.com_hrec2_Mob_Jobs"
                  ads_Id="div-gpt-ad-1674565561579-0"
                  size={[[320, 50]]}
                />
              </div>
            </>
          ) : (
            <SkeletonHrec />
          )}
        </div>
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

  // const topcompany = await fetch(
  //   `${process.env.LIVE_HOST}/json/topcompany.json`
  // );
  // const gethrprofessionallist = await fetch(
  //   `${process.env.LIVE_HOST}/json/gethrprofessionallist.json`
  // );
  // const gethrprofessionallistData = await gethrprofessionallist.json();
  // const topcompanyData = await topcompany.json();

  // const careerscreen = await fetch(
  //   `${process.env.LIVE_HOST}/json/careerscreen.json`
  // );
  // const careerscreenData = await careerscreen.json();

  const cxoMainJSONResponse = await fetch("https://timesascent.com/json/new/CXOZoneMainJSON.json");
  const cxoMainJSONData = await cxoMainJSONResponse.json();

  const props = {
    isMobile: isMobile,
    // topcompanyData,
    // gethrprofessionallistData,
    // careerscreenData,
    cxoMainJSONData
  };
  return { props: { props } };
}
export default cxozone;
