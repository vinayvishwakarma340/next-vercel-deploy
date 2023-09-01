import { useState } from "react";
import MainHeader from "../../Components/MainHeader";
import SubscribeNews from "../../Components/SubscribeNews";
import Footer from "../../Components/Footer";
import { EventsResponse } from "../api/eventsApi";
import { JobsResponse } from "../api/jobsApi";
import UsefullTools from "../../Components/UsefullTools";
import BannerEvent from "../../Components/Banner/BannerEvent";
import EventCard from "../../Components/CardUI/EventCard";
import JobPositionCard from "../../Components/CardUI/JobPositionCard";
import { AcademicCapIcon } from "@heroicons/react/20/solid";
import HeadingWithIcon from "../../Components/HeadingUI/HeadingWithIcon";
import SuccessModal from "../../Components/Modal/SuccessModal";
import BreadCrumbs from "../../Components/BreadCrumbs";
import Head from "next/head";
import PrimayWidgetNew from "../../Components/Widget/PrimayWidgetNew";

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

const bannerData = {
  heading: "EVENTS THAT UPGRADE YOU AND YOUR",
  subHeading: "PROFESSIONAL LIFE",
  imageSrc: "/Banners/Events.webp",
  buttonText: "LIST YOUR EVENT",
  buttonHref: "/listyourevent",
  description:
    "Check out the top events and register for the ones that suits your work profile, area of interest and gives you an enormous exposure in your field. ",
};
const events = ({ props }) => {
  const [subcribeEmailLoading, setSubcribeEmailLoading] = useState(false);
  const [showModalSubcribeEmail, setShowModalSubcribeEmail] = useState(false);

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
        <title>{`Latest events by Times of India, Economic Times, Education Times, epaper - timesascent.com`}</title>
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
          content="https://timesascent.com/newimages/main/times_ascent_logo.svg"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/newimages/main/times_ascent_logo.svg"
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
      </Head>

      <div>
        <MainHeader cookies={props.cookies} />

        <BannerEvent {...bannerData} />

        <div className="  py-4 md:py-6 lg:py-8 container">
          <div className="mb-6">
            <BreadCrumbs data={pages} />
          </div>
          <div className="block sm:flex sm:justify-between  ">
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
              <PrimayWidgetNew {...widgetOne} />

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
            <div className="mt-6 md:mt-0  md:mr-[20px] md:w-[300px]">
              <div className="sm:mr-[20px] w-[300px] h-[250px] m-auto bg-gray-300 flex items-center text-center">
                <span className="w-full">300 x 250</span>
              </div>
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
              <div className="sm:mr-[20px] w-[300px] h-[250px] m-auto bg-gray-300 flex items-center text-center">
                <span className="w-full">300 x 250</span>
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
  const allData = await Promise.all([EventsResponse(), JobsResponse()]);

  const props = {
    eventsData: allData[0],
    jobsData: allData[1],
    cookies: context.req.cookies,
  };
  return { props: { props } };
}

export default events;
