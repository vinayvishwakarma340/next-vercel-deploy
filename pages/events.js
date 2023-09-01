import { useState } from "react";
import MainHeader from "../Components/MainHeader";
import SubscribeNews from "../Components/SubscribeNews";
import Footer from "../Components/Footer";
import { EventsResponse } from "../pages/api/eventsApi";
import { JobsResponse } from "../pages/api/jobsApi";
import UsefullTools from "../Components/UsefullTools";
import EventCard from "../Components/CardUI/EventCard";
import JobPositionCard from "../Components/CardUI/JobPositionCard";
import { AcademicCapIcon } from "@heroicons/react/20/solid";
import HeadingWithIcon from "../Components/HeadingUI/HeadingWithIcon";
import SuccessModal from "../Components/Modal/SuccessModal";
import BreadCrumbs from "../Components/BreadCrumbs";
import Head from "next/head";
import PrimayWidgetNew from "../Components/Widget/PrimayWidgetNew";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";
import GoogleAd_Hrec from "../Components/GoogleAds/GoogleAd_Hrec";
import FreelancerWidget from "../Components/Widget/FreelancerWidget";
import Pagination from "../Components/NewPagination";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { HeadingWithIconH1 } from "../Components/HeadingUI/HeadingWithIcon";
import SkeletonMrec from "../Components/Skeleton/SkeletonMrec";
import SkeletonHrec from "../Components/Skeleton/SkeletonHrec";
import Image from "next/image";
import { bannerData } from "./api/generalApi";
import FourZeroFour from "../Components/FourZeroFour";
import Link from "next/link";
const widgetOne = {
  name: "Online mock interview",
  description: "Virtual face to face mock interviews with industry experts",
  icon: AcademicCapIcon,
  src: "/mentorIcon/InterviewBuddy.webp",
  btnText: "Start Mock Interview",
  href: "/interview-buddy",
};

const widgetTwo = {
  name: "FREE Mentorship Advise",
  description: "Free mentorship advice from top mentors",
  icon: AcademicCapIcon,
  src: "/mentorIcon/Mentor.webp",
  btnText: "Connect With Mentors",
  href: "/mentorship/mentorkart",
};

// const bannerData = {
//   heading: "EVENTS THAT UPGRADE YOU AND YOUR",
//   subHeading: "PROFESSIONAL LIFE",
//   imageSrc: "/Banners/Events.webp",
//   buttonText: "LIST YOUR EVENT",
//   buttonHref: "/listyourevent",
//   description:
//     "Check out the top events and register for the ones that suits your work profile, area of interest and gives you an enormous exposure in your field. ",
// };
const events = ({ props }) => {
  if (props.isPageError) {
    return <FourZeroFour />;
  }
  const router = useRouter();
  const [subcribeEmailLoading, setSubcribeEmailLoading] = useState(false);
  const [showModalSubcribeEmail, setShowModalSubcribeEmail] = useState(false);
  const [adShow, setadShow] = useState(false);

  const [page, setPage] = useState(
    router.query.page ? parseInt(router.query.page) : 1
  );
  const [maxPage, setMaxPage] = useState(
    Math.ceil(props.eventsData.UpcomingEventsCount / 12)
  );
  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    setPage(router.query.page ? parseInt(router.query.page) : 1);
    return () => clearTimeout(timeout)
  }, [router.query.page]);

  const pageChange = (val) => {
    router.push(`/events/?page=${val}`);
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
    heading: "Get Verified Freelancers",
    description: "One stop solution for Remote Hiring and Freelancing needs",
    buttonText: "Hire Now",
  };

  const pages = [{ name: "Events", href: "/events", current: false }];

  return (
    <div>
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

      <Head>
        <meta charSet="utf-8" />
        <title>
          Latest events by Times of India, Economic Times, Education Times,
          epaper - timesascent.com
        </title>
        <meta
          name="description"
          content={`View latest and popular online events by leading companies organized by Times Group - timesascent.com`}
        />
        <link rel="canonical" href="https://timesascent.com/events" />
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
          content="Latest events by Times of India, Economic Times, Education Times, epaper - timesascent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="View latest and popular online events by leading companies organized by Times Group - timesascent.com"
        />
        <meta property="og:url" content="https://timesascent.com/events" />
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
          content="Latest events by Times of India, Economic Times, Education Times, epaper - timesascent.com"
        />
        <meta
          property="twitter:description"
          content="View latest and popular online events by leading companies organized by Times Group - timesascent.com"
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
                  name: "Events",
                },
              ],
            }),
          }}
        />
      </Head>

      <div>
        <MainHeader cookies={props.cookies} />

        {/* <BannerEvent {...bannerData} /> */}

        <a href="/listyourevent">

          <div className={"hidden md:block relative"}>
            <Image
              style={{ objectFit: "cover" }}
              src={props.bannerResponse.data[0].desktopImageURL}
              width={2400}
              height={600}
              alt="For her Banner"
              priority
            />
          </div>
          <div className={"block md:hidden relative"}>
            <Image
              style={{ objectFit: "cover" }}
              src={props.bannerResponse.data[0].mobileImageURL}
              width={768}
              height={307}
              alt="For her Banner"
              priority
            />
          </div>

        </a>

        <div className="  py-4 md:py-6 lg:py-8 container mx-auto">
          <div className="mb-6">
            <BreadCrumbs data={pages} />
          </div>
          <section>
            <div className="block sm:flex sm:justify-between  ">
              <div className="w-full md:w-[calc(100%-320px)]">
                <div className="sm:flex justify-between mb-4">
                  <HeadingWithIconH1 headingText="Upcoming Events" />
                  <a
                    href="/search-events"
                    className="md:ml-1 flex justify-center items-center rounded-md w-full md:w-32   border border-transparent bg-timesPurple py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
                  >
                    All Events
                  </a>
                </div>
                <ul
                  role="list"
                  className=" sm:grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
                >
                  {props.eventsData?.UpcomingEvents.slice(0, 12).map((item) => {
                    return (
                      <div className="mt-6 sm:mt-0">
                        <EventCard key={item.keyindex} data={item} />
                      </div>
                    );
                  })}
                </ul>
              </div>
              <div className="  sm:ml-[20px] mt-8 sm:w-[300px]   col-span-1">
                <div className="sm:hidden relative flex justify-center  my-4 ">
                  <Pagination
                    page={page}
                    maxPage={maxPage}
                    pageChange={pageChange}
                  />
                </div>
                {adShow ? (
                  <GoogleAd_300x250
                    path="/1064661/ta.com_mrec1_events"
                    ads_Id="div-gpt-ad-1674558955118-0"
                    size={[[300, 250]]}
                  />
                ) : (
                  <SkeletonMrec />
                )}
                <div className="my-6">
                  <PrimayWidgetNew {...widgetOne} />
                </div>
                {/* <div className="hidden sm:block">
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
            </div>
            <div className="hidden relative sm:flex justify-center  mt-4  lg:mt-10">
              <Pagination
                page={page}
                maxPage={maxPage}
                pageChange={pageChange}
              />
            </div>
          </section>
          {adShow ? (
            <div className="mt-6">
              <div className=" hidden md:block ">
                <GoogleAd_Hrec
                  path="/1064661/ta.com_hrec1_Events"
                  ads_Id="div-gpt-ad-1674626286703-0"
                  size={[[728, 90]]}
                />
              </div>
              <div className="block md:hidden">
                <GoogleAd_Hrec
                  path="/1064661/ta.com_hrec1_Mob_Events"
                  ads_Id="div-gpt-ad-1674626190453-0"
                  size={[[320, 50]]}
                />
              </div>
            </div>
          ) : (
            <div className="mt-6">
              <SkeletonHrec />
            </div>
          )}

          <div className=" mt-6 block sm:flex sm:justify-between  ">
            <div className="w-full md:w-[calc(100%-320px)]">
              <HeadingWithIcon headingText="Recent Events" />

              <ul
                role="list"
                className=" sm:grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              >
                {props.eventsData.PreviousEvents.slice(0, 12).map((item) => {
                  return (
                    <div className="mt-6 sm:mt-0">
                      <EventCard key={item.keyindex} data={item} />
                    </div>
                  );
                })}
              </ul>
            </div>
            <div className="  sm:ml-[20px] mt-8 sm:w-[300px]   col-span-1">
              <FreelancerWidget {...freelancerWidgetData} />

              <div className="mt-6">
                <JobPositionCard
                  headingText="Jobs in India"
                  buttonText=" Show More"
                  buttonHref="/jobs-in-india"
                  data={props.jobsData.data.slice(0, 8)}
                />
              </div>
            </div>
          </div>
          <section className="mt-6 md:flex justify-between box-border w-full">
            <div className="mt-6 md:mt-0  md:mr-[20px] ">
              {adShow ? (
                <GoogleAd_300x250
                  path="/1064661/ta.com_mrec2_events"
                  ads_Id="div-gpt-ad-1674559041770-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
            </div>
            <div className="mt-6 sm:mt-0 w-full  md:w-[calc(100%-640px)]">
              <SubscribeNews
                emailFormHandler={emailFormHandler}
                heading=" Subscribe to our Newsletter!"
                subHeading="  Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque."
                loading={subcribeEmailLoading}
              />
            </div>
            <div className="mt-6 md:mt-0 right-side md:ml-[20px] md:w-[300px]">
              <PrimayWidgetNew {...widgetTwo} />
            </div>
          </section>

          <section className="mt-6 md:flex justify-between box-border w-full">
            <div className="left-side w-full  md:w-[calc(100%-320px)]">
              <UsefullTools />
            </div>
            <div className="mt-6 sm:mt-16  right-side md:ml-[20px] md:w-[300px]">
              <div className="sm:mr-[20px] ">
                {adShow ? (
                  <GoogleAd_300x250
                    path="/22637491760/timesascent.com_erelego_d_cp_300x250"
                    ads_Id="div-gpt-ad-1666337530397-0"
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
      </div>
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

  // const allData = await Promise.all([
  //   EventsResponse({
  //     page: context.query.page,
  //   }),
  //   JobsResponse(),
  // ]);

  let props = {};
  try {
    const eventsData = await EventsResponse({
      page: context.query.page,
    });
    const jobsData = await JobsResponse();

    const bannerResponse = await bannerData("Events");
    props = {
      eventsData: eventsData,
      jobsData: jobsData,
      bannerResponse: bannerResponse,
      cookies: context.req.cookies,
      isMobile: isMobile,
    };
  } catch (err) {
    console.log(err, "error on events page");
    props = {
      isPageError: true,
    };
  }

  return { props: { props } };
}

export default events;
