import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import { HrProfessionalResponse } from "./api/HrProfessionalApi";
import { SearchArticlesResponse } from "./api/articleApi";
import HrProfessionalProfile from "../Components/CardUI/HrProfessionalProfile";
import PrimayWidgetNew from "../Components/Widget/PrimayWidgetNew";
import ArticleCard from "../Components/CardUI/ArticleCard";
import SecondryWidget from "../Components/Widget/SecondryWidget";
import { AcademicCapIcon } from "@heroicons/react/20/solid";
import HeadingWithIcon from "../Components/HeadingUI/HeadingWithIcon";
import BreadCrumbs from "../Components/BreadCrumbs";
import Head from "next/head";
import SubscribeNews from "../Components/SubscribeNews";
import SuccessModal from "../Components/Modal/SuccessModal";
import { useState } from "react";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";
import GoogleAd_Hrec from "../Components/GoogleAds/GoogleAd_Hrec";
import FreelancerWidget from "../Components/Widget/FreelancerWidget";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { HeadingWithIconH1 } from "../Components/HeadingUI/HeadingWithIcon";
import * as gtag from "../lib/gtag";
import SkeletonMrec from "../Components/Skeleton/SkeletonMrec";
import SkeletonHrec from "../Components/Skeleton/SkeletonHrec";
import FourZeroFour from "../Components/FourZeroFour";

const widgetOne = {
  name: "FREE Mentorship Advise",
  description: "Free mentorship advice from top mentors",
  icon: AcademicCapIcon,
  src: "/mentorIcon/Mentor.webp",
  btnText: "Connect With Mentors",
  href: "/mentorship/mentorkart",
};
const widgetTwo = {
  name: "Career Guidance & Counselling",
  description:
    "Improves your career management skills to help you take the right decisions at every major stage/situation in your future",
  icon: AcademicCapIcon,
  src: "/mentorIcon/SetmyCareer.webp",
  btnText: "Take Expert Advise Today",
  href: "/psychometrictest/setmycareer",
};

const pages = [
  { name: "HR Professionals", href: "/hrprofessionals", current: false },
];

const HRProfessionals = ({ props }) => {
  if (props.isPageError) {
    return <FourZeroFour />;
  }
  const router = useRouter();
  const [subcribeEmailLoading, setSubcribeEmailLoading] = useState(false);
  const [showModalSubcribeEmail, setShowModalSubcribeEmail] = useState(false);
  const [hrData, setHrData] = useState(props.HrProfessionalData.data);
  const [showMore, setShowMore] = useState(false);
  const [searchHr, setSearchHr] = useState(router.query.search || "");
  const [adShow, setadShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    ArticleEvent();
    return () => clearTimeout(timeout)
  }, [
    props.SearchArticlesData.data,
    props.SearchArticlesData.FeaturedHrArticle,
  ]);



  const ArticleEvent = () => {
    const pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    gtag.pageSpeedEvent({
      action: "HR Professionals Page Speed", pageTitle: "HR Professionals page", load_time: pageLoadTime
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
      props.SearchArticlesData.FeaturedHrArticle.map((item) => {
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
      process.env.API_TOKEN_AUTH_SERVER
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
  const freelancerWidgetData = {
    heading: "Work Remotely",
    description: " Get a network of certified and experienced freelancers",
    buttonText: "Post a requirement",
  };

  const onSeachHrHandler = (e) => {
    e.preventDefault();
    if (searchHr) {
      window.open(`/hrprofessionals?search=${searchHr}`, "_self");
    } else {
      window.open("/hrprofessionals", "_self");
    }
  };

  // const shuffle = (array) => {
  //   let fakeArr = array.slice(0, 2);
  //   let workArr = array.slice(2, array.length);
  //   for (let i = workArr.length - 1; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     [workArr[i], workArr[j]] = [workArr[j], workArr[i]];
  //   }
  //   return fakeArr.concat(workArr);
  // };

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Learn from Human Resource management professionals - timesascent.com`}</title>
        <meta
          name="description"
          content={`Learn and get advice from top Human Resource management professionals from India - timesascent.com`}
        />
        <link rel="canonical" href="https://timesascent.com/hrprofessionals" />
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
          content="Learn from Human Resource management professionals - timesascent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Learn and get advice from top Human Resource management professionals from India - timesascent.com"
        />
        <meta property="og:url" content="https://timesascent.com/" />
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
          content="Learn from Human Resource management professionals - timesascent.com"
        />
        <meta
          property="twitter:description"
          content="Learn and get advice from top Human Resource management professionals from India - timesascent.com"
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
                  name: "HR Professionals",
                },
              ],
            }),
          }}
        />
      </Head>

      <MainHeader cookies={props.cookies} />

      <>
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
      </>

      <div className="  py-4 md:py-6 lg:py-8 container mx-auto">
        <div className="mb-6">
          <BreadCrumbs data={pages} />
        </div>
        <div className=" ">
          <div className="md:flex mb-4 justify-between  items-center">
            <HeadingWithIconH1 headingText="Leading HR Professionals" />
            <form className="my-2 md:flex " onSubmit={onSeachHrHandler}>
              <div className="mb-1 md:mb-0 md:w-72">
                <input
                  id="hr"
                  name="search"
                  type="search"
                  placeholder="Search "
                  onChange={(e) => setSearchHr(e.target.value)}
                  value={searchHr}
                  className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 "
                />
              </div>

              <button
                type="submit"
                className="md:ml-1 rounded-md w-full md:w-24   border border-transparent bg-timesPurple py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
              >
                Submit
              </button>
            </form>
          </div>
          <div
            role="list"
            className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {hrData.length > 0 ? (
              hrData.slice(0, 16)?.map((item, index) => {
                return <HrProfessionalProfile key={index} data={item} />;
              })
            ) : (
              <div>Hr not found</div>
            )}
          </div>
          {!showMore && hrData.length > 16 && (
            <div className="flex justify-end">
              <span
                onClick={() => setShowMore(!showMore)}
                className="text-timesPurple mr-2 mt-2 cursor-pointer text-sm hover:underline"
              >
                Show More &rarr;
              </span>
            </div>
          )}
        </div>

        {showMore && (
          <div className=" mt-2 ">
            <div
              role="list"
              className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {hrData.slice(16)?.map((item, index) => {
                return <HrProfessionalProfile key={index} data={item} priority={true} />;
              })}
            </div>
          </div>
        )}

        <section className="mt-6  ">
          <div className=" sm:flex w-full items-center  justify-between ">
            {adShow ? (
              <GoogleAd_300x250
                path="/1064661/ta.com_mrec1_HRProfessional"
                ads_Id="div-gpt-ad-1674559164415-0"
                size={[[300, 250]]}
              />
            ) : (
              <SkeletonMrec />
            )}
            <div className="mt-6 sm:mt-0 sm:w-[calc(100%-640px)] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mx-4">
              <div className="h-[250px]  ">
                <PrimayWidgetNew {...widgetOne} />
              </div>
              <div className="h-[250px] ">
                <PrimayWidgetNew {...widgetTwo} />
              </div>
            </div>
            <div className="mt-6 sm:mt-0">
              {adShow ? (
                <GoogleAd_300x250
                  path="/1064661/ta.com_mrec2_HRProfessional"
                  ads_Id="div-gpt-ad-1674559244080-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
            </div>
          </div>
        </section>

        <section className="mt-6 md:flex justify-between items-center w-full">
          <div className=" w-full  md:w-[calc(100%-320px)]">
            <div className="">
              <HeadingWithIcon headingText="Recommended HR Read" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {props.SearchArticlesData.data?.slice(0, 4)?.map((item) => (
                  <ArticleCard key={item.ArticleId} data={item} />
                ))}
              </div>
            </div>
          </div>
          <div className=" mt-6 sm:mt-0 md:w-[300px]">
            <SecondryWidget
              text2="HR Professional"
              text3="Share your story with us and motivate people around the world."
              buttonText="Share your profile"
              href="/share-your-profile"
            />

          </div>
        </section>

        <section className="mt-6 md:flex justify-between box-border w-full">
          <div className="mt-6 md:mt-0  md:mr-[20px] md:w-[300px]">
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
          <div className="mt-6 sm:mt-0 left-side w-full  md:w-[calc(100%-640px)]">
            <SubscribeNews
              emailFormHandler={emailFormHandler}
              heading=" Subscribe to our Newsletter!"
              subHeading="  Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque."
              loading={subcribeEmailLoading}
            />
          </div>
          <div className="mt-6 md:mt-0  md:ml-[20px] md:w-[300px] h-full">
            <FreelancerWidget {...freelancerWidgetData} />

          </div>
        </section>

        <section className="mt-6 flex flex-col-reverse md:flex-row justify-between items-center w-full">
          <div className=" w-full mt-6 sm:mt-0  md:w-[calc(100%-320px)]">
            <div className="">
              <HeadingWithIcon headingText="Featured HR Content" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {props.SearchArticlesData.FeaturedHrArticle.slice(0, 4)?.map(
                  (item) => (
                    <ArticleCard key={item.ArticleId} data={item} />
                  )
                )}
              </div>
            </div>
          </div>
          <div className="">
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

        {adShow ? (
          <div className="mt-6 ">
            <div className=" hidden md:block ">
              <GoogleAd_Hrec
                path="/1064661/ta.com_hrec1_HRProfessional"
                ads_Id="div-gpt-ad-1674626435046-0"
                size={[[728, 90]]}
              />
            </div>
            <div className="block md:hidden">
              <GoogleAd_Hrec
                path="/1064661/ta.com_hrec1_Mob_HRProfessional"
                ads_Id="div-gpt-ad-1674626050199-0"
                size={[[320, 50]]}
              />
            </div>
          </div>
        ) : (
          <div className="mt-6">
            <SkeletonHrec />
          </div>
        )}
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
    const HrProfessionalData = await HrProfessionalResponse({
      SearchTerm: context.query.search,
    });
    const SearchArticlesData = await SearchArticlesResponse({
      SearchCategory: "HR ZONE",
      page: "1",
    });
    props = {
      HrProfessionalData,
      SearchArticlesData,
      cookies: context.req.cookies,
      isMobile: isMobile,
    };
  } catch (err) {
    console.log("api fetch error in hrprofessional page");
    props = {
      isPageError: true,
    };
  }

  return { props: { props } };
}
export default HRProfessionals;
