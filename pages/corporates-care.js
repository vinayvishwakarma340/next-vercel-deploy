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
import PrimayWidgetNew from "../Components/Widget/PrimayWidgetNew";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";
import GoogleAd_728x90 from "../Components/GoogleAds/GoogleAd_728x90";
import SkeletonMrec from "../Components/Skeleton/SkeletonMrec";
import SkeletonHrec from "../Components/Skeleton/SkeletonHrec";
import Pagination from "../Components/NewPagination";

const corporatesCare = ({ props }) => {
  const [adShow, setadShow] = useState(false);
  const router = useRouter();
  const [page, setPage] = useState(
    router.query.page ? parseInt(router.query.page) : 1
  );
  const [maxPage, setMaxPage] = useState(
    Math.ceil(props.weCareData.recentdata.length / 28)
  );
  const widgetOne = {
    name: "FREE Mentorship Advise",
    description: "Free mentorship advice from top mentors",

    src: "/mentorIcon/Mentor.webp",
    btnText: "Connect With Mentors",
    href: "/mentorship/mentorkart",
  };

  const pages = [
    { name: "Corporates Care", href: "/corporates-care", current: true },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    Event();
    ArticleEvent();
    setPage(router.query.page ? parseInt(router.query.page) : 1);
    return () => clearTimeout(timeout)
  }, [props.weCareData.recentdata]);

  const Event = () => {
    {
      props.weCareData.recentdata.map((item) => {
        gtag.event({
          action: item.OrganisationName,
          category: "Company Impressions",
          label: router.asPath,
        });
      });
    }
  };

  const ArticleEvent = () => {
    {
      props.weCareData.recentdata?.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
  };
  const pageChange = (val) => {
    router.push(`/corporates-care/?page=${val}`);
  };

  return (
    <div className="">
      <MainHeader />

      <Head>
        <meta charSet="utf-8" />
        <title>{`Corporates Care`}</title>
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
      <a href="/corporates-care-request-form">
        <div className="relative m-auto">
          <Image
            // loader={myLoader}
            style={{ objectFit: "cover" }}
            className="m-auto "
            src="/Banners/corporate.webp"
            width={2000}
            height={500}
            priority={true}
            alt="corporate care  banner"
          />
        </div>
      </a>

      <div className="  py-4 md:py-6 lg:py-8 container">
        <div className="">

          <BreadCrumbs data={pages} />
        </div>
        <section className="mt-6 sm:flex justify-between  ">
          <div className="  md:w-[calc(100%-320px)]">
            <div className="">
              <h1 className=" text-base">
                We dedicate this space to the most progressive corporates. The
                captains who steer their ships in tune with the changing social
                and economic landscape. We want to celebrate your innovative HR
                initiatives, CSR activities and smart solutions to social
                problems. Come, tell us your stories and inspire more change.
              </h1>

              <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4">
                {props.weCareData.recentdata?.slice(0, 12).map((item) => {
                  return <CorporateCareCard key={item.KeyIndex} data={item} />;
                })}
              </div>
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
              <SecondryWidget
                text2={"Corporate Care"}
                text3={
                  "Share your stories and let the world know about your corporate Initiatives and Contributions"
                }
                buttonText={"Share Now"}
                href="/corporates-care-request-form"
              />
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
            <div className="mt-6">
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
            </div>
          </div>
        </section>

        <seaction className="">
          <ul
            role="list"
            className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {props.weCareData.recentdata?.slice(12).map((item) => {
              return <CorporateCareCard key={item.KeyIndex} data={item} />;
            })}
          </ul>
        </seaction>

        <div className="mt-6 flex justify-center">
          <Pagination page={page} maxPage={maxPage} pageChange={pageChange} />
        </div>

        <div className="mt-6">
          {adShow ? (
            <GoogleAd_728x90
              isMobile={props.isMobile}
              path="/22637491760/timesascent.com_erelego_ap_d_728x90"
              ads_Id="div-gpt-ad-1666337275945-0"
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
  const weCareData = await WeCareResponse({
    UpcomingPage: "1",
    RecentPage: context.query.page,
  });

  const props = {
    weCareData: weCareData,
    isMobile: isMobile,
  };

  return { props: { props } };
}

export default corporatesCare;
