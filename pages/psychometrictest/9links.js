import React from "react";
import Footer from "../../Components/Footer";
import MainHeader from "../../Components/MainHeader";

import ModalRedirection from "../../Components/ModalRedirection";

import { useRouter } from "next/router";
import Cookies from "js-cookie";

import { useState } from "react";
import { useEffect } from "react";

import { AcademicCapIcon } from "@heroicons/react/24/outline";
import BreadCrumbs from "../../Components/BreadCrumbs";
import PrimayWidgetNew from "../../Components/Widget/PrimayWidgetNew";
import Head from "next/head";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
const NineLinks = () => {
  const [open, setOpen] = useState(false);
  const [companyName1, setCompanyName1] = useState(false);
  const [redirectionUrl1, setRedirectionUrl1] = useState("");

  const [showRedirectionModal, setShowRedirectionModal] = useState(false);
  const router = useRouter();
  const [searchedValue, setSearchedValue] = useState(
    router.pathname.split("/").pop()
  );
  const partnerClick = async (companyName, redirectionURL) => {
    if (companyName === "9Links") {
      setRedirectionUrl1(
        `https://www.9links.in/web/free-assessment-inq-form?name=${Cookies.get(
          "USERFULLNAME"
        )}&email=${Cookies.get("USEREMAIL")}&contact_number=${Cookies.get(
          "USERMOBILENO"
        )}&hearabout=TimesAscent`
      );
    }
    // ReactGA.event({
    //   category: props.type_click,
    //   action: window.location.pathname + window.location.search,
    //   label: "Partners_click",
    //   value: 1,
    // });
    await fetch(`${process.env.Live_API_URL}/v1/api/apiTimes/UserActivity`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.API_TOKEN_AUTH_SERVER,
      },
      body: JSON.stringify({
        CandidateId: Cookies.get("USERID") || "-",
        RedirectionUrl: redirectionURL,
        Company: companyName,
        Event: "redirection",
        Page: "https://timesascent.com" + router.pathname,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status_code === 200) {
          if (companyName === "9Links") {
            window.open(redirectionUrl1, "_self");
            return;
          }
        }
      });
  };
  const partnerDataHandler = (companyName, redirectionURL) => {
    onClickLog(companyName, redirectionURL);
    if (Cookies.get("userLoggedIn")) {
      setRedirectionUrl1(
        `https://www.9links.in/web/free-assessment-inq-form?name=${Cookies.get(
          "USERFULLNAME"
        )}&email=${Cookies.get("USEREMAIL")}&contact_number=${Cookies.get(
          "USERMOBILENO"
        )}&hearabout=TimesAscent`
      );
      setCompanyName1(companyName);
      if (companyName === "9Links") {
        setShowRedirectionModal(true);
        return;
      }
      setShowRedirectionModal(true);
    } else {
      router.push("/times-ascent-signin");
    }
  };

  const onClickLog = async (companyName, redirectionURL) => {
    await fetch(`${process.env.Live_API_URL}/v1/api/apiTimes/UserActivity`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.API_TOKEN_AUTH_SERVER,
      },
      body: JSON.stringify({
        CandidateId: Cookies.get("USERID") || "-",
        Company: "9Links",
        Event: "buttonClick",
        RedirectionUrl: redirectionURL,
        Page: "https://timesascent.com" + router.pathname,
      }),
    });
  };

  useEffect(() => {
    const pageLoadingLog = async (redirectionURL) => {
      await fetch(`${process.env.Live_API_URL}/v1/api/apiTimes/UserActivity`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.API_TOKEN_AUTH_SERVER,
        },
        body: JSON.stringify({
          CandidateId: Cookies.get("USERID") || "-",
          Company: "9Links",
          Event: "pageView",
          RedirectionUrl: redirectionURL,
          Page: "https://timesascent.com" + router.pathname,
        }),
      });
    };

    const logCases = () => {
      pageLoadingLog(
        `https://www.9links.in/web/free-assessment-inq-form?name=${Cookies.get(
          "USERFULLNAME"
        )}&email=${Cookies.get("USEREMAIL")}&contact_number=${Cookies.get(
          "USERMOBILENO"
        )}&hearabout=TimesAscent`
      );
    };
    logCases();
  }, ["9Links", router.pathname]);

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
      name: "Psychometric Test",
      href: "/psychometric-test",
      current: false,
    },
    {
      name: "9 Links",
      href: "",
      current: true,
    },
  ];
  const closeModalHandler = () => {
    setShowRedirectionModal(false);
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Online Psychometric tests and Aptitude Tests by ${searchedValue} to give your career a boost - TimesAscent.com `}</title>
        <meta
          name="description"
          content={`Psychometric Tests are a great tool to help you analyse your strengths and give your career a boost. Get free and paid Psychometric tests and aptitude tests brought to you by ${searchedValue} on TimesAscent.com`}
        />
        <link
          rel="canonical"
          href="https://timesascent.com/psychometrictest/9links"
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
          content={`Online Psychometric tests and Aptitude Tests by ${searchedValue} to give your career a boost - TimesAscent.com `}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`Psychometric Tests are a great tool to help you analyse your strengths and give your career a boost. Get free and paid Psychometric tests and aptitude tests brought to you by ${searchedValue} on TimesAscent.com`}
        />
        <meta
          property="og:url"
          content="https://timesascent.com/psychometrictest/9links"
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
          content={`Online Psychometric tests and Aptitude Tests by ${searchedValue} to give your career a boost - TimesAscent.com `}
        />
        <meta
          property="twitter:description"
          content={`Psychometric Tests are a great tool to help you analyse your strengths and give your career a boost. Get free and paid Psychometric tests and aptitude tests brought to you by ${searchedValue} on TimesAscent.com`}
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
                  name: "Psychometric Test",
                  item: "https://timesascent.com/psychometric-test",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "9links",
                },
              ],
            }),
          }}
        />
      </Head>
      <ModalRedirection
        openModal={showRedirectionModal}
        closeModal={() => closeModalHandler()}
        companyName1={companyName1}
        setOpen={setOpen}
        redirectionUrl1={redirectionUrl1}
        setRedirectionUrl1={setRedirectionUrl1}
        setShowRedirectionModal={setShowRedirectionModal}
        partnerClick={() => {
          partnerClick(companyName1, redirectionUrl1);
        }}
      />
      <MainHeader />
      <div className="bg-white">
        <main>
          <div className="cursor-pointer" onClick={() => {
            Cookies.set("pathname", router.pathname);
            partnerDataHandler(
              "9Links",
              `https://www.9links.in/web/free-assessment-inq-form?name=${Cookies.get(
                "USERFULLNAME"
              )}&email=${Cookies.get(
                "USEREMAIL"
              )}&contact_number=${Cookies.get(
                "USERMOBILENO"
              )}&hearabout=TimesAscent`
            );
          }}>
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
              <div className="mx-auto w-full ">
                <div className="relative shadow-xl sm:overflow-hidden ">
                  <div className="absolute inset-0">
                    <img
                      className="h-full w-full object-cover"
                      src="../psychomericimages/Psychometric.webp"
                      alt="9Links"
                    />
                    <div className="absolute inset-0 bg-purple-700 mix-blend-multiply" />
                  </div>
                  <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                      <span className="block text-white">9 Links</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                      Evaluate yourself with the help of psychometric test and
                      choose the best career path for you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      {/* {content} */}

      <div className="relative overflow-hidden bg-white py-3">
        <div className="relative  sm:px-6  container">
          <div className=" mb-6">
            <BreadCrumbs data={pages} />
          </div>
          <div className="mx-auto  text-lg">
            <h2>
              {/* <span className="block mt-2 text-center text-lg font-semibold text-indigo-600">
                9Links
              </span> */}
              <span className="mt-2 mb-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                What are Psychometric Assessments and their benefits
              </span>
            </h2>
          </div>
          <div className="prose prose-indigo mx-auto text-black lg:max-w-none lg:mt-5 sm:max-w-none">
            <p>
              Psychometric Assessment refers to the assessment of personality,
              ability, attitude, motivation, interest, needs, and emotional
              intelligence. We often suffer from biases. Psychometric assessment
              tools help us to overcome these biases preventing us from making
              errors/assumptions while understanding self or others.
            </p>
            <p>
              When one has to assess a person’s suitability for a given
              position, relying on their CV or interview alone can cause costly
              errors of judgment. Psychometric assessments are a common part of
              the job interview process at many companies across the globe.
              Psychometric tests are used to assess the suitability of potential
              employees.
            </p>

            <p>
              The most common recruitment focussed psychometric tests of today
              are designed to reveal details about behavioural traits and
              personality which can be missed during the interview process. The
              other types of tests are aptitude or ability assessments devised
              to measure reasoning or cognitive ability.
            </p>

            <p>
              Lengthy or ambiguous selection processes lead to long waiting time
              for declaring results for candidates. This can lead to a high
              drop-off rate or employers losing top candidates to competitors.
              Poor candidate experience can lead to a poor brand image for the
              organisation.
            </p>
            <p>
              On the other hand, assessments perform multiple tasks. They are
              set in a user-friendly and graphically rich interface, to capture
              real behavioural actions. They are specifically designed to put
              users at ease. Behavioural assessment tools often involve
              situations, thereby enabling them to showcase their natural
              strengths and preferences. The result is a data-driven, objective
              measure of a candidate’s personality and cognition.
            </p>
            <p>
              To add on, due to their engaging nature, they are less stressful
              for candidates to complete and add a fun factor to the application
              process. On the whole, they minimise and can even reduce test
              anxiety and therefore are a great option for candidates who tend
              to underperform in traditional assessments and test settings
            </p>
          </div>
          <div className="prose prose-indigo mx-auto text-black lg:max-w-none lg:mt-5 sm:max-w-none">
            {" "}
            <h3>We’re here to help</h3>
            <p>
              Psychometric assessments are used globally by organisations, these
              assessments are providing with speed and accuracy in the
              recruitment process thereby improving the bottom lines.
            </p>
          </div>

          <div className="mx-auto mt-5 flex max-w-prose text-base lg:max-w-none mb-5">
            <div className="rounded-md shadow sm:mx-0 mx-auto">
              <button
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-timesPurple px-5 py-3 text-base font-medium text-white hover:bg-purple-700"
                onClick={() => {
                  Cookies.set("pathname", router.pathname);
                  partnerDataHandler(
                    "9Links",
                    `https://www.9links.in/web/free-assessment-inq-form?name=${Cookies.get(
                      "USERFULLNAME"
                    )}&email=${Cookies.get(
                      "USEREMAIL"
                    )}&contact_number=${Cookies.get(
                      "USERMOBILENO"
                    )}&hearabout=TimesAscent`
                  );
                }}
              >
                Take the free assessment today
              </button>
            </div>
          </div>
          <section className="my-6">
            <div className=" sm:flex w-full items-center  justify-between ">
              <GoogleAd_300x250
                path="/22637491760/timesascent.com_erelego_d_ap_300x250"
                ads_Id="div-gpt-ad-1674643828785-0"
                size={[[300, 250]]}
              />
              <div className="mt-6 sm:mt-0 sm:w-[calc(100%-640px)] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mx-4">
                <div className="h-[250px]  ">
                  <PrimayWidgetNew {...widgetOne} />
                </div>
                <div className="h-[250px] ">
                  <PrimayWidgetNew {...widgetTwo} />
                </div>
              </div>
              <div className="mt-6 sm:mt-0 ">
                <GoogleAd_300x250
                  path="/22637491760/timesascent.com_erelego_d_ap_300x250_1"
                  ads_Id="div-gpt-ad-1674643874881-0"
                  size={[[300, 250]]}
                />
              </div>
            </div>
          </section>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default NineLinks;
