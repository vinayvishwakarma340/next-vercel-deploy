import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";

import MainHeader from "../Components/MainHeader";
import { GetAllCourses } from "./api/getAllCoursesApi";

import CourseCard from "../Components/CardUI/CourseCard";

import HeadingWithIcon, {
  HeadingWithIconH1,
} from "../Components/HeadingUI/HeadingWithIcon";
import Head from "next/head";
import PrimayWidgetNew from "../Components/Widget/PrimayWidgetNew";
import { AcademicCapIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import { CoursedropdownData } from "./api/courseDropdownApi";
import BreadCrumbs from "../Components/BreadCrumbs";

import { SearchArticlesResponse } from "./api/articleApi";
import ArticleCard from "../Components/CardUI/ArticleCard";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";
import SecondryWidget from "../Components/Widget/SecondryWidget";
import FreelancerWidget from "../Components/Widget/FreelancerWidget";
import * as gtag from "../lib/gtag";
import GoogleAd_BHrec from "../Components/GoogleAds/GoogleAd_BHrec";
import SkeletonMrec from "../Components/Skeleton/SkeletonMrec";
const Courses = ({ props }) => {
  const popularCourse = props.getAllCoursesdata.Popualar_Courses;
  const [paidCourses, setPaidCourses] = useState(
    props.getAllCoursesdata.PaidCourses
  );
  const [freeCourses, setFreeCourses] = useState(
    props.getAllCoursesdata?.Free_Courses
  );
  const courseArticle = props.articleData.Courses;
  const [adShow, setadShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    ArticleEvent();
    return () => clearTimeout(timeout)
  }, [props.articleData.Courses]);

  useEffect(() => {
    shuffle(paidCourses, setPaidCourses);
    shuffle(freeCourses, setFreeCourses);
  }, []);


  const ArticleEvent = () => {
    const pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    gtag.pageSpeedEvent({
      action: "Courses Page Speed", pageTitle: "Courses", load_time: pageLoadTime
    });
    {
      props.articleData.Courses.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
  };

  const widgetThree = {
    name: "Get a Free confidential review from a resume expert",
    description: "Upload your resume and get expert resume analysis",
    icon: AcademicCapIcon,
    src: "/mentorIcon/TopResume.webp",
    btnText: "Upload Resume",
    href: "/top-resume",
  };

  const widgetFour = {
    name: "Take up the psychometric test",
    description:
      "Design to measure cognitive abilities and potential to excel in specific position or career",
    icon: AcademicCapIcon,
    src: "/mentorIcon/9Links.webp",
    btnText: "Psychometric Test",
    href: "/psychometrictest/9links",
  };
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

  const pages = [
    {
      name: "Courses",
      href: "#",
      current: true,
    },
  ];

  const freelancerWidgetData = {
    heading: "Hire Remote Freelancers",
    description: "Get a network of certified and experienced freelancers",
    buttonText: "Post a requirement",
  };

  const shuffle = (array, setArray) => {
    let fakeArr = array.slice(0, 2);
    let workArr = array.slice(2, array.length);
    for (let i = workArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [workArr[i], workArr[j]] = [workArr[j], workArr[i]];
    }
    setArray(fakeArr.concat(workArr));
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Free online courses with certificates from popular top educators - timesascent.com`}</title>
        <meta
          name="description"
          content={`Explore free online popular and best online courses from upgrad, skill lync, MIT and many more - timesascent.com`}
        />
        <link rel="canonical" href="https://timesascent.com/courses" />
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
          content="Free online courses with certificates from popular top educators - timesascent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Explore free online popular and best online courses from upgrad, skill lync, MIT and many more - timesascent.com"
        />
        <meta property="og:url" content="https://timesascent.com/courses" />
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
          content="Free online courses with certificates from popular top educators - timesascent.com"
        />
        <meta
          property="twitter:description"
          content="Explore free online popular and best online courses from upgrad, skill lync, MIT and many more - timesascent.com"
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
                  position: 1,
                  name: "Courses",
                },
              ],
            }),
          }}
        />
      </Head>{" "}
      <MainHeader />
      <div className="py-4 md:py-6 lg:py-8 container">
        <BreadCrumbs data={pages} />
        <section className="mt-6 md:flex justify-between items-center w-full">
          <div className=" w-full  ">
            <div className="">
              <div className="flex flex-col-reverse sm:flex-row justify-between mb-4">
                <HeadingWithIconH1
                  headingText="Popular Courses"
                  href="/popular-courses"
                />
                <a
                  href="/search-course"
                  className="md:ml-1 flex justify-center items-center rounded-md w-full md:w-32   border border-transparent bg-timesPurple py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
                >
                  All Courses
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-4">
                {popularCourse.slice(0, 5).map((item, index) => {
                  return (
                    <CourseCard
                      isMobile={props.isMobile}
                      key={index}
                      data={item}
                      priority={true}
                    />
                  );
                })}
              </div>
              <a
                href={"/popular-courses"}

                className=" leading-3"
              >
                <div className="flex align-center justify-end mt-4">
                  <div className="text-sm text-timesPurple hover:underline">
                    Show Popular Courses &rarr;
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="mt-6 sm:flex w-full items-center  justify-between ">
          {adShow ? (
            <GoogleAd_300x250
              path="/1064661/ta.com_mrec1_Courses"
              ads_Id="div-gpt-ad-1674555997431-0"
              size={[[300, 250]]}
            />
          ) : (
            <SkeletonMrec />
          )}
          <div className="mt-6 sm:mt-0 sm:w-[calc(100%-640px)] grid grid-cols-1 sm:grid-cols-2 items-center gap-4 sm:mx-4">
            <div className="border border-gray-50 rounded">
              <FreelancerWidget {...freelancerWidgetData} />
            </div>
            <div className="">
              <SecondryWidget
                text2={"List Your Course"}
                text3="List your Course to facilitate the search for your desired target audience"
                buttonText={"Register here"}
                href={"/listyourcourse"}
              />
            </div>
          </div>
          <div className="mt-6 sm:mt-0 ">
            {adShow ? (
              <GoogleAd_300x250
                path="/1064661/ta.com_mrec2_Courses"
                ads_Id="div-gpt-ad-1674556959758-0"
                size={[[300, 250]]}
              />
            ) : (
              <SkeletonMrec />
            )}
          </div>
        </section>
        <section className="mt-6 md:flex justify-between items-center w-full border-t-2  border-dashed">
          <div className=" w-full mt-3 ">
            <div className="">
              <HeadingWithIcon
                headingText="Free Courses"
                href="/free-courses"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {freeCourses.slice(0, 5).map((item, index) => {
                  return (
                    <CourseCard
                      isMobile={props.isMobile}
                      key={index}
                      data={item}
                    />
                  );
                })}
              </div>
              <a
                href={"/free-courses"}

                className="text-timesPurple hover:underline leading-3"
              >
                <div className="flex align-center justify-end mt-4">
                  <div className="text-sm text-timesPurple hover:underline ">
                    Search Free Courses &rarr;
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className="mt-6 sm:flex w-full items-center  justify-between ">
          {adShow ? (
            <GoogleAd_300x250
              path="/1064661/ta.com_mrec3_Courses"
              ads_Id="div-gpt-ad-1674557056807-0"
              size={[[300, 250]]}
            />
          ) : (
            <SkeletonMrec />
          )}
          <div className="mt-6 sm:mt-0 sm:w-[calc(100%-640px)] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mx-4">
            <div className="h-[250px]  ">
              <PrimayWidgetNew {...widgetThree} />
            </div>
            <div className="h-[250px]  ">
              <PrimayWidgetNew {...widgetOne} />
            </div>
          </div>
          <div className="mt-6 sm:mt-0 ">
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
        <section className="mt-6 md:flex justify-between items-center w-full border-t-2  border-dashed">
          <div className=" w-full mt-3 ">
            <div className="">
              <HeadingWithIcon
                headingText="Paid Courses"
                href="/paid-courses"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {paidCourses.slice(0, 5).map((item, index) => {
                  return (
                    <CourseCard
                      isMobile={props.isMobile}
                      key={index}
                      data={item}
                    />
                  );
                })}
              </div>
              <a
                href={"/paid-courses"}

                className="text-timesPurple hover:underline leading-3"
              >
                <div className="flex align-center justify-end mt-4">
                  <div className="text-sm text-timesPurple hover:underline ">
                    Viewers also Search &rarr;
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        <div className="my-6">
          <div className=" hidden md:block ">
            <GoogleAd_BHrec
              path="/1064661/ta.com_bhrec1_Courses"
              ads_Id="div-gpt-ad-1675147013166-0"
              size={[[750, 200]]}
            />
          </div>
          <div className="block md:hidden">
            <GoogleAd_BHrec
              path="/1064661/ta.com_bhrec1_Mob_Courses"
              ads_Id="div-gpt-ad-1674561274206-0"
              size={[[320, 100]]}
            />
          </div>
        </div>

        <section className="mt-0 md:flex justify-between items-center w-full ">
          <div className=" w-full  md:w-[calc(100%-320px)]">
            <div className="">
              <HeadingWithIcon headingText="Trending Articles" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {courseArticle.slice(0, 4).map((item, index) => {
                  return <ArticleCard key={index} data={item} />;
                })}
              </div>
            </div>
          </div>
          <div className=" m-auto sm:m-0">
            <div className="m-auto mt-6 sm:mt-0 ">
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
          </div>
        </section>
      </div>
      <Footer />
    </>
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
    const getAllCoursesdata = await GetAllCourses();
    const Coursedropdown = await CoursedropdownData();
    const articleData = await SearchArticlesResponse({
      SearchCategory: "Courses",
    });
    props = {
      getAllCoursesdata,
      Coursedropdown,
      articleData,
      isMobile,
    };
  } catch (err) {
    props = {
      isPageError: true,
    };
  }

  return { props: { props } };
}
export default Courses;
