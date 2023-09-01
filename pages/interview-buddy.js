import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import Cookies from "js-cookie";
import ModalRedirection from "../Components/ModalRedirection";
import BreadCrumbs from "../Components/BreadCrumbs";
import Head from "next/head";
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import PrimayWidgetNew from "../Components/Widget/PrimayWidgetNew";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";
import SkeletonMrec from "../Components/Skeleton/SkeletonMrec";

const Interviewbuddy = () => {
  const [open, setOpen] = useState(false);
  const [companyName1, setCompanyName1] = useState(false);
  const [redirectionUrl1, setRedirectionUrl1] = useState("");
  const [adShow, setadShow] = useState(false);
  const [showRedirectionModal, setShowRedirectionModal] = useState(false);
  const router = useRouter();
  const [searchedValue, setSearchedValue] = useState(
    router.pathname.split("/").pop()
  );
  const partnerClick = async (companyName, redirectionURL) => {
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
          if (companyName === "Interviewbuddy") {
            window.open(redirectionUrl1, "_self");
            return;
          }
        }
      });
  };

  const partnerDataHandler = (companyName, redirectionURL) => {
    onClickLog(companyName, redirectionURL);
    if (Cookies.get("userLoggedIn")) {
      setRedirectionUrl1(redirectionURL);
      setCompanyName1(companyName);
      if (companyName === "setMyCareer") {
        setShowRedirectionModal(true);
        return;
      }
      setShowRedirectionModal(true);
    } else {
      router.push("/times-ascent-signin");
      setCompanyName1(companyName);
      if (companyName === "9Links") {
        return;
      }
      setRedirectionUrl1(
        `https://www.9links.in/web/free-assessment-inq-form?name=${Cookies.get(
          "USERFULLNAME"
        )}&email=${Cookies.get("USEREMAIL")}&contact_number=${Cookies.get(
          "USERMOBILENO"
        )}&hearabout=TimesAscent`
      );
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
        Company: "interview-buddy",
        Event: "buttonClick",
        RedirectionUrl: redirectionURL,
        Page: "https://timesascent.com" + router.pathname,
      }),
    });
  };

  useEffect(() => {

    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    const pageLoadingLog = async (redirectionURL) => {
      await fetch(`${process.env.Live_API_URL}/v1/api/apiTimes/UserActivity`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.API_TOKEN_AUTH_SERVER,
        },
        body: JSON.stringify({
          CandidateId: Cookies.get("USERID") || "-",
          Company: "interview-buddy",
          Event: "pageView",
          RedirectionUrl: redirectionURL,
          Page: "https://timesascent.com" + router.pathname,
        }),
      });
    };

    const logCases = () => {
      pageLoadingLog("https://forms.gle/os8W8bKWBv2KojSp8/");
    };

    logCases();
    return () => clearTimeout(timeout)
  }, ["interview-buddy", router.pathname]);

  const pages = [
    {
      name: "Interview gd prep",
      href: "/interview-gd-prep",
      current: false,
    },
    {
      name: "Interview buddy",
      href: "",
      current: true,
    },
  ];

  const closeModalHandler = () => {
    setShowRedirectionModal(false);
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
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Online Psychometric tests and Aptitude Tests by ${searchedValue} to give your career a boost - TimesAscent.com `}</title>
        <meta
          name="description"
          content={`Psychometric Tests are a great tool to help you analyse your strengths and give your career a boost. Get free and paid Psychometric tests and aptitude tests brought to you by ${searchedValue} on TimesAscent.com`}
        />
        <link rel="canonical" href="https://timesascent.com/interview-buddy" />
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
          content="https://timesascent.com/interview-buddy"
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
          <div>
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
              <div className="mx-auto w-full ">
                <div className="relative shadow-xl sm:overflow-hidden ">
                  <div className="absolute inset-0">
                    <img
                      className="h-full w-full object-cover"
                      src="./psychomericimages/Interview_Buddy.webp"
                      alt="Interview_Buddy"
                    />
                    <div className="absolute inset-0 bg-purple-700 mix-blend-multiply" />
                  </div>
                  <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                      <span className="block text-white">Interview Buddy</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                      Get help with job interviews and career discussions from
                      us, and show the interviewer your best.
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
                InterviewBuddy is built on the premise that practice &
                preparation are crucial to get over your anxieties when
                attending an interview
              </span>
            </h2>
          </div>
          <div className="prose prose-indigo mx-auto text-black lg:max-w-none sm:max-w-none lg:mt-5">
            <p>
              “Interviews are crucial moments in one’s career. Theoretical
              knowledge of interview questions isn't enough when you actually
              face an interview. Too often fear takes over our performance in
              job interviews.”
            </p>
            <p>
              As the adage goes – practice makes perfect! Mock interviews by
              InterviewBuddy give you the platform to prepare, practice and
              experience firsthand how a real-life job interview feels.
              Familiarizing yourself with the interview environment beforehand
              in a relaxed and stress-free environment gives you an edge over
              your peers.
            </p>

            <p>
              Our mock interviews are conducted by handpicked industry experts
              with an average experience of 9+ years in the interviewing game.
              So you’re sure to improve your chances of getting hired!.
            </p>
            <p>
              Every individual has its own ability & every phase in life comes
              up with own challenge.
            </p>
            <ul role="list">
              <li>
                Reduce stress & anxiety: Doubts about how to answer tricky
                interview questions may stress you out & create anxiety. Get
                over your nerves with mock interviews.
              </li>
              <li>
                Boost confidence: Test drive your answers with experts to
                improve your skills & experience and boost confidence.
              </li>
              <li>
                Constructive feedback: Get in-depth analysis of your interview
                style and tips to help you improve areas where you may have
                weaknesses.
              </li>
              <li>
                Behavioral interview questions: Mastering questions like -'Tell
                me about a time you failed' show you have the skills &
                competencies needed for the job.
              </li>
              <li>
                No software downloads: If you have access to a computer/tablet
                and an internet connection, you’re ready to use our service.
                You’ll never need any downloading.
              </li>
              <li>
                Interview scorecard: Get a detailed interview scorecard with
                performance-based metrics and comprehensive feedback on your
                strengths &weaknesses.
              </li>
              <li>
                Playback your interview: Our video interviewing system
                automatically records your interview so that you can review it
                anytime. You’ll receive access to the recording of the interview
                within 2 hours.
              </li>
              <li>
                Curated resources: Prime your interview skills & etiquette by
                accessing the best hand-picked and curated content covering
                every aspect of the interview cycle with InterviewBuddy!
              </li>
            </ul>
            <p>
              InterviewBuddy helps students and job seekers crack interviews &
              land their dream jobs!
            </p>
          </div>
          <section className="mt-6 sm:flex w-full items-center  justify-between ">
            {adShow ? (
              <GoogleAd_300x250
                path="/22637491760/timesascent.com_erelego_d_ap_300x250_1"
                ads_Id="div-gpt-ad-1674643874881-0"
                size={[[300, 250]]}
              />
            ) : (
              <SkeletonMrec />
            )}
            <div className="mt-6 sm:mt-0 sm:w-[calc(100%-640px)] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mx-4">
              <div className="h-[250px]  ">
                <PrimayWidgetNew {...widgetThree} />
              </div>
              <div className="h-[250px] ">
                <PrimayWidgetNew {...widgetFour} />
              </div>
            </div>
            <div className="mt-6 sm:mt-0 ">
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
          <div className="prose prose-indigo mx-auto text-black lg:max-w-none sm:max-w-none lg:mt-5">
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
                    "Interviewbuddy",
                    "https://forms.gle/os8W8bKWBv2KojSp8/"
                  );
                }}
              >
                Prepare for interviews today
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Interviewbuddy;
