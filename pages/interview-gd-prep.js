import React, { useEffect } from "react";
import ArticleCard from "../Components/CardUI/ArticleCard";
import BreadCrumbs from "../Components/BreadCrumbs";
import Footer from "../Components/Footer";

import MainHeader from "../Components/MainHeader";
import { SearchArticlesResponse } from "../pages/api/articleApi";
import { InterviewGdResponse } from "../pages/api/interviewGdApi";
import FAQ from "../Components/FAQ";

import HeadingWithIcon from "../Components/HeadingUI/HeadingWithIcon";
import Head from "next/head";
import Image from "next/image";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";
import GoogleAd_728x90 from "../Components/GoogleAds/GoogleAd_728x90";
import { HeadingWithIconH1 } from "../Components/HeadingUI/HeadingWithIcon";
import * as gtag from "../lib/gtag";
import SkeletonMrec from "../Components/Skeleton/SkeletonMrec";
import SkeletonHrec from "../Components/Skeleton/SkeletonHrec";
import { useState } from "react";
const interViewQuestion = [
  {
    key: "1",
    question: "Tell me something about yourself?",
    answer:
      "It's critical to remain controlled and calm in a stressful and demanding scenario like this. Consider what your interviewer is hoping to hear from you. Begin with a light and confident tone; remember that your response should not seem planned. Continue with a cheerful and confident tone, keeping in mind that your response should not sound scripted. Make a point of emphasizing on your most significant achievements first. Don't go overboard with what you've previously said in your resume. Make sure you don't come out as arrogant or overconfident. Never downplay your achievements or speak negatively about yourself.",
  },
  {
    key: "2",
    question: "What drew your attention to this position?",
    answer:
      "Although this may appear to be a simple question at first glimpse, you should take advantage of any opportunity to showcase your interest in the company. Make a point of mentioning if someone from within the organization told you about the position or encouraged you to apply. If someone trustworthy can testify for your abilities, you'll have a much higher chance of getting hired.",
  },
  {
    key: "3",
    question: "What motivated you to apply for this position?",
    answer:
      "The interviewer is keen to see how enthusiastic you are about the job or the organization. The more enthusiastic you are about your job, the more productive you will be. And here's the kicker: your enthusiasm will shine through during the interview. When you talk to someone who is enthusiastic about something, you can almost feel their enthusiasm as they speak.",
  },
  {
    key: "4",
    question: "What are your strengths?",
    answer:
      "You must keep your response to no more than three strengths for this question. Choose one or two job-related abilities, as well as one or two personal (more or less irrelevant) skills. After you've chosen your strengths, back them up with a situation or narrative that demonstrates how you've used them in the workplace.",
  },
  {
    key: "5",
    question: "What are your greatest flaws?",
    answer:
      "The key is to mention a weakness that is real but not one that would prohibit you from executing your job. If you're applying for an accountant position, you wouldn't claim you're terrible at mathematics, would you? It's also a smart option to explain how you're seeking to overcome this flaw and how it's ruining your life negatively. Simply balance it with a positive side effect if you can: treat it as two sides of the same coin.",
  },
];
const interviewGdPrep = ({ props }) => {
  const [adShow, setadShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    ArticleEvent();
    return () => clearTimeout(timeout)
  }, [
    props.SearchArticlesData.data,
    props.InterviewGdData.VideoInterview,
    props.InterviewGdData.PaidArticles,
  ]);



  const ArticleEvent = () => {
    const pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    gtag.pageSpeedEvent({
      action: "Interview GD Prep Page Speed", pageTitle: "Interview GD prep page", load_time: pageLoadTime
    });
    {
      props.SearchArticlesData.data.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
    {
      props.InterviewGdData.VideoInterview.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
    {
      props.InterviewGdData.PaidArticles.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
  };

  const pages = [
    { name: "Interview Gd Prep", href: "/interview-gd-prep", current: false },
  ];
  return (
    <div className="">
      <Head>
        <meta charSet="utf-8" />
        <title>{`Interview tips, expert advice for Interview and GD preparation - timesascent.com`}</title>
        <meta
          name="description"
          content={`Top Interview question and expert advice to ace in your job interview - timesascent.com`}
        />
        <link
          rel="canonical"
          href="https://timesascent.com/interview-gd-prep"
        />
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
          content="Interview tips, expert advice for Interview and GD preparation - timesascent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Top Interview question and expert advice to ace in your job interview - timesascent.com"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/interview-gd-prep"
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
          content="Interview tips, expert advice for Interview and GD preparation - timesascent.com"
        />
        <meta
          property="twitter:description"
          content="Top Interview question and expert advice to ace in your job interview - timesascent.com"
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
                  name: "Interview Gd Prep",
                },
              ],
            }),
          }}
        />
      </Head>

      <MainHeader />
      <a href="/interview-buddy">
        <div className={" relative"}>
          <Image
            style={{ objectFit: "cover" }}
            className="m-auto"
            src="/Banners/Interview-Buddy-2.webp"
            width={2000}
            height={500}
            alt="TimesAscent  banner"
          />
        </div>
      </a>

      <div className="  py-4 md:py-6 lg:py-8 container">
        <BreadCrumbs data={pages} />

        <section className="mt-6 md:flex justify-between items-center w-full">
          <div className=" w-full  md:w-[calc(100%-320px)]">
            <div className="">
              <HeadingWithIconH1
                headingText="Job Interview Tips"
                href="/articleslist/job-interview-tips"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {props.SearchArticlesData.data.slice(0, 4).map((item) => {
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

        <section className="mt-6 md:flex justify-between items-center w-full">
          <div className=" w-full  md:w-[calc(100%-320px)]">
            <div className="">
              <HeadingWithIcon
                headingText="Pre-Interview Preparation"
                href="/articleslist/pre-interview-preparation"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {props.InterviewGdData.VideoInterview.slice(0, 4).map(
                  (item) => {
                    return <ArticleCard key={item.KeyIndex} data={item} />;
                  }
                )}
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

        <section className="mt-6 md:flex justify-between items-center w-full">
          <div className=" w-full  md:w-[calc(100%-320px)]">
            <div className="">
              <HeadingWithIcon
                headingText="Learn from the best"
                href="/articleslist/learn-from-the-best"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {props.InterviewGdData.PaidArticles.slice(0, 4).map((item) => {
                  return <ArticleCard key={item.KeyIndex} data={item} />;
                })}
              </div>
            </div>
          </div>
          <div className="mt-6 sm:mt-0">
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
        </section>

        <div className="mt-6">
          <FAQ
            heading="Have something on your mind?"
            subHeading="Refer to the Frequently Asked Questions"
            data={interViewQuestion}
          />
        </div>
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
  const allData = await Promise.all([
    SearchArticlesResponse({
      page: "1",
      SearchTerm: "interview",
    }),
    InterviewGdResponse({
      page: "1",
    }),
  ]);
  const props = {
    SearchArticlesData: allData[0],
    InterviewGdData: allData[1],
    isMobile: isMobile,
  };
  return { props: { props } };
}
export default interviewGdPrep;
