import React, { useEffect } from "react";
import Footer from "../../Components/Footer";
import MainHeader from "../../Components/MainHeader";
import { Eventdescription } from "../api/Eventdescription";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import ModalRedirection from "../../Components/ModalRedirection";
import { useState } from "react";
import BreadCrumbs from "../../Components/BreadCrumbs";
import Head from "next/head";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
const eventDescription = ({ eventdetail }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState("");
  useEffect(() => {
    setLogin(Cookies.get("userLoggedIn"));
  }, []);
  useEffect(() => {
    if (!eventdetail.data) return;
    const pageLoadingLog = async (companyName, redirectionURL) => {
      await fetch(`${process.env.Live_API_URL}/v1/api/apiTimes/UserActivity`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.API_TOKEN_AUTH_SERVER,
        },
        body: JSON.stringify({
          CandidateId: Cookies.get("USERID"),
          RedirectionUrl: eventdetail.data.eventUrl,
          Company: eventdetail.data.event_organizer,
          Event: "pageView",
          Page:
            "https://timesascent.com" +
            "/" +
            router.query.id[0] +
            "/" +
            router.query.id[1],
        }),
      });
    };
    pageLoadingLog();
  }, [eventdetail.data]);
  const partnerClick = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      CandidateId: Cookies.get("USERID"),
      RedirectionUrl: eventdetail.data.eventUrl,
      Company: eventdetail.data.event_organizer,
      Event: "redirection",
      Page:
        "https://timesascent.com" +
        "/" +
        router.query.id[0] +
        "/" +
        router.query.id[1],
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/UserActivity`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          window.open(eventdetail.data.eventUrl, "_self");
        }
      })
      .catch((error) => console.log("error", error));
  };
  const closeModalHandler = () => {
    setOpen(false);
  };
  const handleLog = () => {
    if (login) {
      setOpen(true);
    } else {
      Cookies.set(
        "pathname",
        "event/" + "/" + router.query.id[0] + "/" + router.query.id[1]
      );
      router.push("/times-ascent-signin");
    }
  };
  const pages = [
    {
      name: "Events",
      href: "/events",
      current: false,
    },
    {
      name: eventdetail?.data.eventName,

      current: true,
    },
  ];

  let today = new Date();
  today.setDate(today.getDate());
  let currentdate = new Date(today)
    .toLocaleDateString("in", {
      day: "2-digit",
      year: "numeric",
      month: "2-digit",
    })
    .split("/")
    .reverse()
    .join("-");

  let date = eventdetail.data.eventEndDateISO.trim();

  let year = date.slice(0, 4);

  let month = date.length === 9 ? `0${date.slice(5, 6)}` : date.slice(5, 7);

  let day = date.length === 9 ? date.slice(7, 9) : date.slice(8, 10);

  let finaldate = `${year}-${month}-${day}`;

  return (
    <div>
      <Head>
        {" "}
        <meta charSet="utf-8" />
        <title>{`${eventdetail.data.eventName} - TimesAscent.com`}</title>
        <meta
          name="description"
          content={`${eventdetail.data.eventDescription} -  TimesAscent.com`}
        />
        <link
          rel="canonical"
          href={
            "https://timesascent.com/event" +
            "/" +
            router.query.id[0] +
            "/" +
            router.query.id[1]
          }
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
          content={`${eventdetail.data.eventName} - TimesAscent.com`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`${eventdetail.data.eventDescription} -  TimesAscent.com`}
        />
        <meta
          property="og:url"
          content={
            "https://timesascent.com/event" +
            "/" +
            router.query.id[0] +
            "/" +
            router.query.id[1]
          }
        />
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
          content={`${eventdetail.data.eventName} - TimesAscent.com`}
        />
        <meta
          property="twitter:description"
          content={`${eventdetail.data.eventDescription} -  TimesAscent.com`}
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
                  name: "Events",
                  item: "https://timesascent.com/events",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Event Description",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Event",
              name: eventdetail?.data.eventName,
              image: eventdetail?.data.event_image,
              description: eventdetail?.data.eventDescription
                ? eventdetail?.data.eventDescription
                : "NA",
              startDate: eventdetail?.data.eventStartDateISO,

              endDate: eventdetail?.data.eventEndDateISO,
              performer: {
                "@type": "Person",
                name: eventdetail?.data.event_speaker_name,
              },
              location: {
                "@type": "Place",
                name: eventdetail?.data.eventLocation || "Online",
                address: eventdetail?.data.eventLocation || "Online",
              },
              eventAttendanceMode:
                "https://schema.org/MixedEventAttendanceMode",
              organizer: {
                "@type": "Organization",
                name: eventdetail.data.event_organizer,
                url: eventdetail.data.eventAddress || "timesascent.com/events",
              },
              offers: {
                "@type": "Offer",
                url: eventdetail.data.eventAddress || "timesascent.com/events",
                price: "0",
                priceCurrency: "INR",
                availability: "https://schema.org/InStock",
                validFrom: eventdetail.data.event_date,
              },
              eventStatus: "https://schema.org/EventScheduled",
            }),
          }}
        />
      </Head>
      <ModalRedirection
        openModal={open}
        setOpen={setOpen}
        closeModal={() => closeModalHandler()}
        partnerClick={() => {
          partnerClick();
        }}
      />
      <MainHeader />

      <div className="overflow-hidden bg-white mb-6">
        <div className="relative mx-auto  py-8  container">
          <div className=" mb-6">
            <BreadCrumbs data={pages} />
          </div>
          <div className="mx-auto max-w-prose text-base lg:grid lg:max-w-none lg:grid-cols-2 grid  lg:gap-8">
            <div className=" block lg:hidden lg:mt-8">
              <img
                className="rounded-lg  object-center shadow-lg"
                src={eventdetail?.data.event_image}
                alt={eventdetail?.data.event_image}
              />
            </div>

            <div>
              <h1 className="mt-5 lg:mt-2 text-xl font-bold leading-8 tracking-tight text-gray-900 sm:text-2xl">
                {eventdetail?.data.eventName}
              </h1>
              <div className=" max-w-prose text-base lg:max-w-none  item-center">
                <div>
                  <h2 className="text-md font-semibold text-timesPurple  lg:mt-4 mt-4">
                    {eventdetail?.data.event_speaker_name}
                  </h2>
                </div>
              </div>
              <div className="lg:flex items-center justify-start mt-3 block">
                <div className="flex items-center">
                  <div className="mr-1">
                    <CalendarIcon className="h-5" />
                  </div>
                  <div className="mr-5 text-timesPurple font-semibold">
                    {eventdetail?.data.eventEndDate}
                  </div>
                </div>
                <div className="flex items-center">
                  {" "}
                  <div className="mr-0.5">
                    <ClockIcon className="h-5" />
                  </div>
                  <div className="mr-5 text-timesPurple font-semibold">
                    {" "}
                    {eventdetail?.data.event_start_time} -
                    {eventdetail?.data.event_end_time}
                  </div>
                </div>
              </div>
              <div className="flex items-center mt-2">
                {" "}
                <div className="mr-0.5">
                  <MapPinIcon className="h-5" />
                </div>
                <div className=" text-timesPurple font-semibold">
                  {eventdetail?.data.eventLocation}
                </div>
              </div>
              <div className="mt-8 lg:mt-0">
                <div className="mx-auto max-w-prose text-base lg:max-w-none">
                  <div className=" mt-0 text-black lg:max-w-none text-sm lg:text-sm lg:mt-4">
                    <div
                      className="prose"
                      dangerouslySetInnerHTML={{
                        __html: eventdetail?.data.eventDescription,
                      }}
                    />
                  </div>
                </div>
              </div>
              {finaldate >= currentdate ? (
                <div className="mb-4 lg:item-center mx-auto text-center">
                  <button
                    type="submit"
                    className="inline-flex rounded-md hover:bg-white transition-all hover:border-timesPurple hover:text-timesPurple mt-2 border border-transparent bg-timesPurple py-2 px-10 w-7xl text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
                    onClick={handleLog}
                  >
                    Register Now
                  </button>
                </div>
              ) : (
                <div className="mb-4 lg:item-center mx-auto text-center">
                  <button
                    type="submit"
                    className="inline-flex rounded-md transition-all  mt-2 border border-transparent bg-gray-500 py-2 px-10 w-7xl text-sm font-medium text-white shadow-sm hover:bg-gray-500 focus:outline-none focus:ring-2 "
                    disabled
                  >
                    Event Ended
                  </button>
                </div>
              )}
              <div className="font-medium text-gray-900 mt-4">Disclaimer</div>
              <p className="text-gray-900">BCCL disclaims any and all representation or warranties of any kind - expressed or implied - about the completeness, accuracy, reliability,  or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Views expressed herein are independent opinions. You may act at your own risk while relying on the information available on the website. Should you decide to act, or omit to act, you should seek appropriate professional advice.</p>
            </div>
            <div className=" hidden lg:block lg:mt-8">
              <img
                className="rounded-lg  object-center shadow-lg"
                src={eventdetail?.data.event_image}
                alt={eventdetail?.data.event_image}
              />
              <div className="lg:mt-10 mt-5 mb-14 max-w-[750px] h-[200px] m-auto flex justify-center items-center ">
                <GoogleAd_300x250
                  path="/22637491760/timesascent.com_erelego_d_cp_300x250"
                  ads_Id="div-gpt-ad-1666337530397-0"
                  size={[[300, 250]]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default eventDescription;
export async function getServerSideProps(context) {
  const eventdetail = await Eventdescription(context.query.id[1]);
  return {
    props: { eventdetail },
  };
}
