import React, { useEffect } from "react";
import ArticleCard from "../Components/CardUI/ArticleCard";
import BreadCrumbs from "../Components/BreadCrumbs";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import HeadingWithIcon from "../Components/HeadingUI/HeadingWithIcon";
import Tabs from "../Components/Tabs";
import { SearchArticlesResponse } from "../pages/api/articleApi";
import Image from "next/image";
import {
  BuildingOfficeIcon,
  CreditCardIcon,
  UserIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";
import ResumeCard from "../Components/CardUI/ResumeCard";
import Head from "next/head";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";
import GoogleAd_728x90 from "../Components/GoogleAds/GoogleAd_728x90";
import PrimayWidgetNew from "../Components/Widget/PrimayWidgetNew";
import { HeadingWithIconH1 } from "../Components/HeadingUI/HeadingWithIcon";
import * as gtag from "../lib/gtag";
import SkeletonMrec from "../Components/Skeleton/SkeletonMrec";
import SkeletonHrec from "../Components/Skeleton/SkeletonHrec";
import { useState } from "react";
import WriteForUs from "../Components/Widget/WriteForUs";
const resumeWriting = ({ props }) => {
  const [adShow, setadShow] = useState(false);

  const pages = [
    { name: "Resume Writing", href: "/resume-writing", current: true },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    ArticleEvent();
    return () => clearTimeout(timeout);
  }, [props.SearchArticlesData.data]);

  const ArticleEvent = () => {
    {
      props.SearchArticlesData.data.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
  };

  const tabs = [
    // { name: "Resume templates", href: "#", icon: UserIcon, current: false },
    {
      name: "Resume help & tips",
      href: "/cvhelps",
      icon: BuildingOfficeIcon,
      current: false,
    },
    {
      name: "Resume builder",
      href: "/cvbuilder",
      icon: UsersIcon,
      current: true,
    },
    {
      name: "Cover letter templates",
      href: "/coverletter",
      icon: CreditCardIcon,
      current: false,
    },
  ];
  const tabsMobile = [
    // { name: "Resume templates", href: "#", icon: UserIcon, current: false },
    {
      name: "Select one",
      href: "/resume-writing",
    },
    {
      name: "Resume help & tips",
      href: "/cvhelps",
    },
    {
      name: "Resume builder",
      href: "/cvbuilder",
    },
    {
      name: "Cover letter templates",
      href: "/coverletter",
    },
  ];

  const checkIcon = (
    <svg
      class="w-5 h-5 mt-1 sm:mt-0 mr-1.5 text-green-500 dark:text-green-400 flex-shrink-0"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clip-rule="evenodd"
      ></path>
    </svg>
  );

  const resumeBenefitData = [
    {
      id: 1,
      description: "Helps in providing better objective to your resume.",
      icon: () => checkIcon,
    },
    {
      id: 2,
      description:
        "Your CV will be well updated as per the recent trends and requirements.",
      icon: () => checkIcon,
    },
    {
      id: 3,
      description: "Ensures that your resume is error free.",
      icon: () => checkIcon,
    },
    {
      id: 4,
      description:
        "Make sure your resume is of the highest caliber and looks professional.",
      icon: () => checkIcon,
    },
    {
      id: 5,
      description: "Get expert opinion on your strength and weakness",
      icon: () => checkIcon,
    },
  ];

  const widgetTwo = {
    name: "Online mock interview",
    description: "Virtual face to face mock interviews with industry experts",

    src: "/mentorIcon/InterviewBuddy.webp",
    btnText: "Start Mock Interview",
    href: "/interview-buddy",
  };
  return (
    <div className="">
      <Head>
        <meta charSet="utf-8" />
        <title>{`CV resume help and tips for top quality resume - timesascent.com`}</title>
        <meta
          name="description"
          content={`Get professional resume. Update your CV as per recent trends and requirements - timesascent.com`}
        />
        <link rel="canonical" href="https://timesascent.com/resume-writing" />
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
          content="CV resume help and tips for top quality resume - timesascent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Get professional resume. Update your CV as per recent trends and requirements - timesascent.com"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/resume-writing"
        />
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
          content="CV resume help and tips for top quality resume - timesascent.com"
        />
        <meta
          property="twitter:description"
          content="Get professional resume. Update your CV as per recent trends and requirements - timesascent.com"
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
                  name: "Resume Writing",
                },
              ],
            }),
          }}
        />
      </Head>

      <MainHeader />

      {/* banner */}

      <div className={" relative"}>
        <Image
          style={{ objectFit: "cover" }}
          className="m-auto"
          src="/Banners/resumeWriting.webp"

          priority
          width={2000}
          height={500}
          alt="TimesAscent  banner"
        />
      </div>

      <div className="  py-4 md:py-6 lg:py-8 container">
        <BreadCrumbs data={pages} />
        <div className="mt-6">
          <Tabs tabs={tabs} tabsMobile={tabsMobile} />
        </div>
        <div className="mt-6 sm:flex justify-between">
          <div className="sm:w-[calc(100%-310px)]">
            <h1 className="text-xl  font-bold">Benefits</h1>
            <ul class="text-base list-inside ">
              {resumeBenefitData.map((item) => {
                return (
                  <li class="flex items-start my-3 text-base">
                    {<item.icon />}
                    {item.description}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sm:w-[300px] mt-6 sm:mt-0 sm:ml-[20]">
            <ResumeCard
              imagePath="/ResumeWriting/logo-topresume-inverse.svg"
              description="Want to grab attention of recruiters and employers? "
              subDesc="Share your latest Resume with us and get a free review"
              buttonText="Upload Resume"
              buttonHref="/top-resume"
            />
          </div>
        </div>

        <section className="mt-6 md:flex justify-between  w-full">
          <div className=" w-full  md:w-[calc(100%-320px)]">
            <div className="">
              <HeadingWithIcon headingText="Guide and Tips to Make a Perfect Resume" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {props.SearchArticlesData.data.slice(0, 12).map((item) => {
                  return <ArticleCard key={item.KeyIndex} data={item} />;
                })}
              </div>
            </div>
          </div>
          <div className="mt-6 m-auto sm:mt-8">
            <div className="sm:w-[300px] sm:ml-[20px]">
              {adShow ? (
                <GoogleAd_300x250
                  path="/22637491760/timesascent.com_erelego_d_ap_300x250"
                  ads_Id="div-gpt-ad-1674643828785-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
              {/* <ResumeCard
                imagePath="/ResumeWriting/resumetemplate.png"
                description="Want your resume to pop out amongst the crowd?"
                buttonText="Visit Now"
                buttonHref="/"
              /> */}
              <div className="mt-6">
                {/* <PrimayWidgetNew {...widgetTwo} /> */}
                <WriteForUs
                  heading={"Write for Us"}
                  description={
                    "Share your knowledge and experience for the benefits of Job providers and seekers "
                  }
                  buttonText="Publish your Article"
                  href="/GuestArticleform"
                />
              </div>{" "}
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
              </div>
            </div>
          </div>
        </section>

        <div className="mt-6">
          {adShow ? (
            <GoogleAd_728x90
              isMobile={props.isMobile}
              path="/22637491760/timesascent.com_erelego_ap_d_728x90"
              ads_Id="div-gpt-ad-1674643676290-0"
            />
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
  const SearchArticlesData = await SearchArticlesResponse({
    SearchCategory: "Career Advice",
    SearchTerm: "resume",
  });
  const props = {
    SearchArticlesData,
    isMobile: isMobile,
  };
  return { props: { props } };
}
export default resumeWriting;
