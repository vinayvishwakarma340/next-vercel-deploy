import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";

import SuccessModal from "../Components/Modal/SuccessModal";
import Head from "next/head";
import BreadCrumbs from "../Components/BreadCrumbs";

import { useRouter } from "next/router";
const ListEvent = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const [eventname, setEventname] = useState("");
  const [eventtype, setEventtype] = useState("");
  const [eventcategory, setEventcategory] = useState("");
  const [eventprice, setEventprice] = useState("");
  const [eventmode, setEventmode] = useState("");
  const [eventLocation, setEventLocation] = useState("");
  const [eventLimitation, setEventLimitation] = useState("");

  const [eventLocationAddress, setEventLocationAddress] = useState("");
  const [eventStartDate, setEventStartDate] = useState("");
  const [eventEndDate, setEventEndDate] = useState("");
  const [eventDurationDays, setEventDurationDays] = useState("");
  const [eventStartTime, setEventStartTime] = useState("");
  const [eventEndTime, setEventEndTime] = useState("");
  const [eventSpeakerName, setEventSpeakerName] = useState("");
  const [eventCompanyName, setEventCompanyName] = useState("");
  const [eventCompanyAppearing, setEventCompanyAppearing] = useState("");
  const [eventShortDescription, setEventShortDescription] = useState("");
  const [eventUrl, setEventUrl] = useState("");
  const [eventDisplayCard, setEventDisplayCard] = useState("");
  const [eventBannerImage, setEventBannerImage] = useState("");

  const [providerName, setProviderName] = useState("");
  const [providerEmail, setProviderEmail] = useState("");
  const [providerContact, setProviderContact] = useState("");
  const [imgerror, setImgerror] = useState(false);
  const [imgerror1, setImgerror1] = useState(false);
  useEffect(() => {
    if (eventStartDate && eventEndDate) {
      var Difference_In_Time =
        new Date(eventEndDate).getTime() - new Date(eventStartDate).getTime();
      var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
      if (Difference_In_Days >= 0) setEventDurationDays(Difference_In_Days);
    }
  }, [eventStartDate, eventEndDate]);

  const PosteventApi = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );

    var formdata = new FormData();
    formdata.append("eventName", eventname);
    formdata.append("eventType", eventtype);
    formdata.append("eventCategory", eventcategory);
    formdata.append("eventPrice", eventprice);
    formdata.append("eventMode", eventmode);
    formdata.append("personName", providerName);
    formdata.append("personEmail", providerEmail);
    formdata.append("personContact", providerContact);
    formdata.append(
      "eventLocation",
      eventLocation === "Offline" ? eventLocationAddress : "Online"
    );
    formdata.append("eventLimitation", eventLimitation);
    formdata.append("eventNumberSeats", eventLimitation);
    formdata.append("eventStartDate", eventStartDate);
    formdata.append("eventEndDate", eventEndDate);
    formdata.append("eventDurationDays", eventDurationDays);
    formdata.append("eventStartTime", eventStartTime);
    formdata.append("eventEndTime", eventEndTime);
    formdata.append("eventSpeakerName", eventSpeakerName);
    formdata.append("eventCompanyName", eventCompanyName);
    formdata.append("eventCompanyAppearing", eventCompanyAppearing);
    formdata.append("eventShortDescription", eventShortDescription);
    formdata.append("eventDisplayCard", eventDisplayCard);
    formdata.append("eventBannerImage", eventBannerImage);
    formdata.append("eventRedirectionUrl", eventUrl);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/postEventData`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          setShowModal(true);
          setEventname("");
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  const category = [
    {
      id: 1,
      categoryName: "Computer Science",
    },
    {
      id: 2,
      categoryName: "Management",
    },

    {
      id: 3,
      categoryName: "Soft Skills",
    },

    {
      id: 4,
      categoryName: "Career Guidance",
    },

    {
      id: 5,
      categoryName: "Marketing",
    },
    {
      id: 6,
      categoryName: "IT",
    },
    {
      id: 7,
      categoryName: "Digital Marketing",
    },
    {
      id: 8,
      categoryName: "Education",
    },
    {
      id: 9,
      categoryName: "Communication",
    },
    {
      id: 10,
      categoryName: "Government",
    },
    {
      id: 11,
      categoryName: "Fresher",
    },
    {
      id: 12,
      categoryName: "Leadership",
    },
    {
      id: 13,
      categoryName: "Graduate",
    },
    {
      id: 14,
      categoryName: "Commerce",
    },
    {
      id: 15,
      categoryName: "Engineering",
    },
  ];
  const closeModalHandler = (modalType) => {
    setShowModal(false);
    router.push("/");
  };

  const pages = [
    {
      name: "Events",
      href: "/events",
      current: true,
    },
    {
      name: "List your event",

      current: false,
    },
  ];
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`List your Event - TimesAscent.com`}</title>
        <meta
          name="description"
          content={`List your Event on Times Ascent to get ease in getting your
                event viewed by the desired and target audience for your
                upcoming event. -TimesAscent.com`}
        />
        <link rel="canonical" href="https://timesascent.com/listyourevent" />
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
        <meta property="og:title" content="List your Event - TimesAscent.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="List your Event on Times Ascent to get ease in getting your
                event viewed by the desired and target audience for your
                upcoming event.-TimesAscent.com"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/listyourevent"
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
          content="List your Event - TimesAscent.com"
        />
        <meta
          property="twitter:description"
          content="List your Event on Times Ascent to get ease in getting your
                event viewed by the desired and target audience for your
                upcoming event. -TimesAscent.com"
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
      <SuccessModal
        openModal={showModal}
        closeModal={() => closeModalHandler()}
        headingText="Thanks for submitting your details !!"
        subHeadingText="Please check your E-mail. 
 For any queries, please feel free to write at  nirmam.sanghvi@timesgroup.com "
        buttonText="OK"
      />
      <div className="bg-white">
        <MainHeader />
        <main>
          {/* Header */}
          <div className="bg-gray-50 py-5 sm:py-5">
            <div className="mx-auto max-w-md pl-4 pr-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-center text-3xl font-bold leading-10 tracking-tight text-gray-900 sm:text-3xl sm:leading-none lg:text-4xl">
                List Your Event
              </h1>
              <p className="mx-auto mt-3 max-w-3xl text-center text-sm sm:text-lg leading-normal text-gray-500">
                List your "Event" on Times Ascent to get ease in getting your
                event viewed by the desired and target audience for your
                upcoming event.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="relative bg-white">
            <div className="lg:absolute lg:inset-0">
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                  className="h-56 w-full object-cover lg:absolute lg:h-full"
                  src="./Advertisewithus/Event.webp"
                  alt=""
                />
              </div>
            </div>
            <div className="relative py-4 px-4 sm:py-8 sm:px-6 lg:mx-auto lg:grid lg:max-w-full align-center block lg:grid-cols-2 lg:px-8 lg:py-8">
              <div className="lg:pr-8">
                <div className="mx-auto max-w-md sm:max-w-lg lg:mx-28 mb-6">
                  <BreadCrumbs data={pages} />
                </div>
                <div className="mx-auto max-w-md sm:max-w-lg lg:mx-28">
                  <form
                    action="#"
                    method="POST"
                    onSubmit={(e) => {
                      e.preventDefault();
                      PosteventApi();
                    }}
                    className="mt-0 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="provider-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Provider Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="provider-name"
                          required
                          id="provider-name"
                          autoComplete="given-name"
                          onChange={(e) => {
                            setProviderName(e.target.value);
                          }}
                          value={providerName}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="provider-email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          type="email"
                          name="provider-email"
                          required
                          id="provider-email"
                          autoComplete="given-name"
                          onChange={(e) => {
                            setProviderEmail(e.target.value);
                          }}
                          value={providerEmail}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="provider-contact"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Contact
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="provider-contact"
                          maxLength="10"
                          minLength="0"
                          pattern="^[6789][0-9]{9}$"
                          required
                          id="provider-contact"
                          autoComplete="given-name"
                          onChange={(e) => {
                            setProviderContact(e.target.value);
                          }}
                          value={providerContact}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="event-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Event Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="event-name"
                          required
                          id="event-name"
                          autoComplete="given-name"
                          onChange={(e) => {
                            setEventname(e.target.value);
                          }}
                          value={eventname}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <fieldset className="sm:col-span-2">
                      <legend className="block text-sm font-medium text-gray-700">
                        Event Type
                      </legend>
                      <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-y-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500 cursor-pointer"
                            id="Seminar"
                            name="select_work1"
                            onChange={(e) => setEventtype("Seminar")}
                          />
                          <label htmlFor="Seminar" className="ml-3">
                            <span className="block text-sm text-gray-700 cursor-pointer">
                              Seminar
                            </span>
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500 cursor-pointer"
                            type="radio"
                            id="Conference"
                            name="select_work1"
                            onChange={(e) => setEventtype("Conference")}
                            value={eventtype}
                          />
                          <label htmlFor="Conference" className="ml-3">
                            <span className="block text-sm text-gray-700 cursor-pointer">
                              Conference
                            </span>
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500 cursor-pointer"
                            type="radio"
                            id="Competition"
                            name="select_work1"
                            onChange={(e) => setEventtype("Competition")}
                            value={eventtype}
                          />
                          <label htmlFor="Competition" className="ml-3">
                            <span className="block text-sm text-gray-700 cursor-pointer">
                              Competition
                            </span>
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500 cursor-pointer"
                            type="radio"
                            id="Conclave"
                            name="select_work1"
                            onChange={(e) => setEventtype("Conclave")}
                            value={eventtype}
                          />
                          <label htmlFor="Conclave" className="ml-3">
                            <span className="block text-sm text-gray-700 cursor-pointer">
                              Conclave
                            </span>
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Events Category
                      </label>
                      <select
                        required
                        className="block cursor-pointer w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                        onChange={(e) => setEventcategory(e.target.value)}
                        value={eventcategory}
                      >
                        <option value={""} disabled selected>
                          --Select Type--
                        </option>
                        {category.map((item) => {
                          return (
                            <option key={item.id} value={item.categoryName}>
                              {item.categoryName}
                            </option>
                          );
                        })}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="start-date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Start Date
                      </label>
                      <div className="mt-1">
                        <input
                          type="date"
                          name="start-date"
                          required
                          id="start-date"
                          autoComplete="start-date"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          value={eventStartDate}
                          onChange={(e) => setEventStartDate(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="end-date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        End Date
                      </label>
                      <div className="mt-1">
                        <input
                          type="date"
                          name="end-date"
                          required
                          id="end-date"
                          autoComplete="end-date"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          value={eventEndDate}
                          onChange={(e) => {
                            setEventEndDate(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    {eventDurationDays ? (
                      <>
                        <label
                          id="date"
                          for="date"
                          className="block text-sm font-medium text-gray-700"
                        >
                          <b>Duration of the Event</b>
                        </label>
                        <div>
                          <div className="block text-sm font-medium text-gray-700">
                            {eventDurationDays + " Days"}
                          </div>
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                    <div>
                      <label
                        htmlFor="start-time"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Start Time
                      </label>
                      <div className="mt-1">
                        <input
                          type="time"
                          name="start-time"
                          required
                          id="start-time"
                          autoComplete="start-time"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          value={eventStartTime}
                          onChange={(e) => setEventStartTime(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="end-time"
                        className="block text-sm font-medium text-gray-700"
                      >
                        End Time
                      </label>
                      <div className="mt-1">
                        <input
                          type="time"
                          name="end-time"
                          required
                          id="end-time"
                          autoComplete="end-time"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          value={eventEndTime}
                          onChange={(e) => setEventEndTime(e.target.value)}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="event-speaker"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Event Speakers (if any)
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="event-speaker"
                          required
                          id="event-speaker"
                          autoComplete="event-speaker"
                          value={eventSpeakerName}
                          onChange={(e) => setEventSpeakerName(e.target.value)}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="company-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company Name (Organiser name)
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="company-name"
                          required
                          id="company-name"
                          autoComplete="company-name"
                          value={eventCompanyName}
                          onChange={(e) => setEventCompanyName(e.target.value)}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="companies-appearing"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Companies Appearing
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="companies-appearing"
                          required
                          id="companies-appearing"
                          autoComplete="companies-appearing"
                          value={eventCompanyAppearing}
                          onChange={(e) =>
                            setEventCompanyAppearing(e.target.value)
                          }
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <fieldset className="sm:col-span-2">
                      <legend className="block text-sm font-medium text-gray-700">
                        Event Mode
                      </legend>
                      <div className="mt-4 grid grid-cols-4 gap-y-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500 cursor-pointer"
                            id="Online"
                            name="select_work"
                            onChange={(e) => setEventmode("Online")}
                            value={eventmode}
                          />
                          <label htmlFor="Online" className="ml-3">
                            <span className="block text-sm text-gray-700 cursor-pointer">
                              Online
                            </span>
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500 cursor-pointer"
                            id="Offline"
                            name="select_work"
                            onChange={(e) => setEventmode("Offline")}
                            value={eventmode}
                          />
                          <label htmlFor="Offline" className="ml-3">
                            <span className="block text-sm text-gray-700 cursor-pointer">
                              Offline
                            </span>
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500 cursor-pointer"
                            id="Hybrid"
                            name="select_work"
                            onChange={(e) => setEventmode("Hybrid")}
                            value={eventmode}
                          />
                          <label htmlFor="Hybrid" className="ml-3">
                            <span className="block text-sm text-gray-700 cursor-pointer">
                              Hybrid
                            </span>
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="company-logo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Display Card Image
                      </label>
                      <label htmlFor="company-logo" className="cursor-pointer">
                        <div className="mt-1  items-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                          <div className="space-y-1 text-center">
                            <label htmlFor="company-logo cursor-pointer">
                              <label htmlFor="company-logo">
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400 cursor-pointer"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </label>
                            </label>
                            <label
                              className="text-sm text-gray-600"
                              htmlFor="company-logo"
                            >
                              <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                <span className="text-center mx-auto">
                                  {eventDisplayCard?.name
                                    ? eventDisplayCard?.name
                                    : "Upload a file"}
                                </span>
                                <input
                                  name="company-logo"
                                  required
                                  accept=".png, .jpg, .jpeg, .webp"
                                  id="company-logo"
                                  autoComplete="company-logo"
                                  type="file"
                                  className="cursor-pointer sr-only"
                                  onChange={(e) => {
                                    e.target.files[0]?.name.match(
                                      /\.(jpg|jpeg|png|gif|webp)$/
                                    )
                                      ? setEventDisplayCard(
                                        e.target.files[0]
                                      ) || setImgerror("")
                                      : setImgerror(
                                        "Please Upload In Jpg/Png/Webp Format Only"
                                      );
                                  }}
                                />
                              </label>
                            </label>
                            {imgerror ? (
                              <p className="text-xs text-red-500">{imgerror}</p>
                            ) : (
                              <p className="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            )}
                          </div>
                        </div>
                      </label>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="Banner"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Main Banner Image
                      </label>
                      <label htmlFor="Banner" className="cursor-pointer">
                        <div className="mt-1  items-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                          <div className="space-y-1 text-center">
                            <label htmlFor="Banner cursor-pointer">
                              <label htmlFor="Banner">
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400 cursor-pointer"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </label>
                            </label>
                            <label
                              className="text-sm text-gray-600"
                              htmlFor="Banner"
                            >
                              <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                <span className="text-center mx-auto">
                                  {eventBannerImage?.name
                                    ? eventBannerImage?.name
                                    : "Upload a file"}
                                </span>
                                <input
                                  name="Banner"
                                  required
                                  accept=".png, .jpg, .jpeg, .webp"
                                  id="Banner"
                                  autoComplete="Banner"
                                  type="file"
                                  className="cursor-pointer sr-only"
                                  onChange={(e) => {
                                    e.target.files[0]?.name.match(
                                      /\.(jpg|jpeg|png|gif|webp)$/
                                    )
                                      ? setEventBannerImage(
                                        e.target.files[0]
                                      ) || setImgerror1("")
                                      : setImgerror1(
                                        "Please Upload In Jpg/Png/Webp Format Only"
                                      );
                                  }}
                                />
                              </label>
                            </label>
                            {imgerror1 ? (
                              <p className="text-xs text-red-500">
                                {imgerror1}
                              </p>
                            ) : (
                              <p className="text-xs text-gray-500">
                                PNG, JPG, GIF up to 10MB
                              </p>
                            )}{" "}
                          </div>
                        </div>
                      </label>
                    </div>

                    <fieldset className="sm:col-span-2">
                      <legend className="block text-sm font-medium text-gray-700">
                        Event Price
                      </legend>
                      <div className="mt-4 grid grid-cols-4 gap-y-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="Free"
                            name="select_worrk"
                            onChange={(e) => setEventprice("Free")}
                            value={eventprice}
                            className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500 cursor-pointer"
                          />
                          <label htmlFor="Free" className="ml-3">
                            <span className="block text-sm text-gray-700 cursor-pointer">
                              Free
                            </span>
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500 cursor-pointer"
                            id="Paid"
                            name="select_worrk"
                            onChange={(e) => setEventprice("Paid")}
                            value={eventprice}
                          />
                          <label htmlFor="Paid" className="ml-3">
                            <span className="block text-sm text-gray-700 cursor-pointer">
                              Paid
                            </span>
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    <fieldset className="sm:col-span-2">
                      <legend className="block text-sm font-medium text-gray-700">
                        Event Location
                      </legend>
                      <div className="mt-4 grid grid-cols-4 gap-y-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500"
                            id="Online1"
                            name="set_work"
                            onChange={(e) => setEventLocation("Online")}
                            value={eventLocation}
                          />
                          <label htmlFor="Online1" className="ml-3">
                            <span className="block text-sm text-gray-700 cursor-pointer ">
                              Online
                            </span>
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500 cursor-pointer"
                            id="Offline1"
                            name="set_work"
                            onChange={(e) => setEventLocation("Offline")}
                            value={eventLocation}
                          />
                          <label htmlFor="Offline1" className="ml-3">
                            <span className="block text-sm text-gray-700 cursor-pointer ">
                              Offline
                            </span>
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    {eventLocation === "Offline" ? (
                      <>
                        <div className="sm:col-span-2">
                          <textarea
                            id="how-can-we-help"
                            name="how-can-we-help"
                            aria-describedby="how-can-we-help-description"
                            rows={4}
                            required
                            className="cursor-pointer block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                            onChange={(e) =>
                              setEventLocationAddress(e.target.value)
                            }
                            value={eventLocationAddress}
                          />
                        </div>
                      </>
                    ) : (
                      ""
                    )}
                    <fieldset className="sm:col-span-2">
                      <legend className="block text-sm font-medium text-gray-700">
                        Number of seats
                      </legend>
                      <div className="mt-4 grid grid-cols-4 gap-y-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500 cursor-pointer"
                            id="Limited"
                            name="selet_work"
                            onChange={(e) => setEventLimitation("Limited")}
                            value={eventLimitation}
                          />
                          <label htmlFor="Limited" className="ml-3">
                            <span className="block text-sm text-gray-700 cursor-pointer">
                              Limited
                            </span>
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500 cursor-pointer"
                            id="Unlimited"
                            name="selet_work"
                            onChange={(e) => setEventLimitation("Unlimited")}
                            value={eventLimitation}
                          />
                          <label htmlFor="Unlimited" className="ml-3">
                            <span className="block text-sm text-gray-700 cursor-pointer">
                              Unlimited
                            </span>
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="registration-redirection"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Registration Redirection URL (Optional)
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="url"
                          placeholder="https://www.example.com"
                          name="registration-redirection"
                          id="registration-redirection"
                          autoComplete="registration-redirection"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          value={eventUrl}
                          onChange={(e) => setEventUrl(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="how-can-we-help"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Short Description about the Event
                        </label>
                        <span
                          id="how-can-we-help-description"
                          className="text-sm text-gray-500"
                        >
                          Max. 300 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="how-can-we-help"
                          name="how-can-we-help"
                          aria-describedby="how-can-we-help-description"
                          rows={4}
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          value={eventShortDescription}
                          onChange={(e) =>
                            setEventShortDescription(e.target.value)
                          }
                        />
                      </div>
                    </div>
                    <div className="text-center sm:col-span-2 md:w-1/2 w-full m-auto">
                      <button
                        type="submit"
                        className="inline-flex justify-center  border border-transparent   w-full text-sm font-medium text-white shadow-sm bg-timesPurple px-4 py-2 text-center   hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2 lg:mt-3 lg:mb-0 mb-3 mt-2"
                      >
                        {loading ? (
                          <ThreeDots
                            height="20"
                            width="30"
                            radius="9"
                            color="white"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                          />
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ListEvent;
