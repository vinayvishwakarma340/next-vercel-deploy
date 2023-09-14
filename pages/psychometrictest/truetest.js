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

const Truetest = () => {
  const [open, setOpen] = useState(false);
  const [companyName1, setCompanyName1] = useState(false);
  const [redirectionUrl1, setRedirectionUrl1] = useState("");
  const [showRedirectionModal, setShowRedirectionModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const [searchedValue, setSearchedValue] = useState(
    router.pathname.split("/").pop()
  );

  const USEREMAIL = Cookies.get("USEREMAIL")
  const USERID = Cookies.get("USERID")
  const USERFULLNAME = Cookies.get("USERFULLNAME")


  const partnerClick = async (companyName, redirectionURL) => {
    // ReactGA.event({
    //   category: SetMyCareer_click,
    //   action: window.location.pathname + window.location.search,
    //   label: "Partners_click",
    //   value: 1,
    // });
    setLoading(true);
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
          if (companyName === "truetest") {
            partnerRegApi();
          }
        }
      });
  };

  const partnerDataHandler = (companyName, redirectionURL) => {
    onClickLog(companyName, redirectionURL);
    if (Cookies.get("userLoggedIn")) {
      // if (true) {
      setRedirectionUrl1(redirectionURL);
      setCompanyName1(companyName);
      if (companyName === "truetest") {
        setShowRedirectionModal(true);
        return;
      }
      setShowRedirectionModal(true);
    } else {
      router.push("/times-ascent-signin");
      setCompanyName1(companyName);
    }
  };

  const onClickLog = async (companyname, redirectionURL) => {
    const result = await fetch(`${process.env.Live_API_URL}/v1/api/apiTimes/UserActivity`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.API_TOKEN_AUTH_SERVER,
      },
      body: JSON.stringify({
        CandidateId: Cookies.get("USERID") || "-",
        Company: companyname,
        Event: "buttonClick",
        RedirectionUrl: redirectionURL,
        Page: "https://timesascent.com" + router.pathname,
      }),
    });

    const res = await result.json()
  };


  const partnerRegApi = () => {
    var myHeaders = new Headers();

    var formdata = new FormData();
    formdata.append("candidate_name", USERFULLNAME);
    formdata.append("last_name", "");
    formdata.append("candidate_id", USERID);
    formdata.append("course_id", "");
    formdata.append("course_name", "TIMES_ASCENT");
    formdata.append("coupon_code", "TIMES_ASCENT");
    formdata.append("partner_code", "TIMES_ASCENT");
    formdata.append("candidate_email", USEREMAIL);
    formdata.append("times_access_token", "NTMxNDU4NzA16426b37ba7b13");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://www.truetest.in/partner_reg.php", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status == 1) {
          secondAPI();
        }
      })
      .catch(error => console.log('error', error));
  }

  const secondAPI = () => {
    var myHeaders = new Headers();

    var formdata = new FormData();
    formdata.append("do_what", "save_token");
    formdata.append("candidate_email", USEREMAIL);
    formdata.append("partner_code", "TIMES_ASCENT");
    formdata.append("times_access_token", "NTMxNDU4NzA16426b37ba7b13");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://truetest.in/_ajax_files/truetestLoginFromPartner.php", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status == 1) {
          thirdAPI(result.accessToken)
        }
      })
      .catch(error => console.log('error', error));
  }

  const thirdAPI = (accessToken) => {
    var myHeaders = new Headers();

    var formdata = new FormData();
    formdata.append("partner_code", "TIMES_ASCENT");
    formdata.append("candidate_email", USEREMAIL);
    formdata.append("access_token", accessToken);
    formdata.append("times_access_token", "NTMxNDU4NzA16426b37ba7b13");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch("https://truetest.in/partner_login_new.php", requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status == 1) {
          window.open(result.redirect_url);
          setShowRedirectionModal(false);
        }
      })
      .catch(error => console.log('error', error))
      .finally(() => setLoading(false));
  }




  const pages = [
    {
      name: "Psychometric Test",
      href: "/psychometric-test",
      current: false,
    },
    {
      name: "TRUEtest",
      href: "",
      current: true,
    },
  ];

  const closeModalHandler = () => {
    setShowRedirectionModal(false);
  };
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

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Online  Psychometric tests and Aptitude Tests by  to give your career a boost - TimesAscent.com `}</title>
        <meta
          name="description"
          content={`TRUEtest is India's first online assessment tool that allows people to determine their career inclination, aptitude, personality, and leadership attributes. - TimesAscent.com`}
        />
        <link
          rel="canonical"
          href="https://timesascent.com/psychometrictest/setmycareer"
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
          content={`Online Psychometric tests and Aptitude Tests by dd to give your career a boost - TimesAscent.com `}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`TRUEtest is India's first online assessment tool that allows people to determine their career inclination, aptitude, personality, and leadership attributes. -TimesAscent.com`}
        />
        <meta
          property="og:url"
          content="https://timesascent.com/psychometrictest/setmycareer"
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
          content={`Online Psychometric tests and Aptitude Tests by dd to give your career a boost - TimesAscent.com `}
        />
        <meta
          property="twitter:description"
          content={`TRUEtest is India's first online assessment tool that allows people to determine their career inclination, aptitude, personality, and leadership attributes.  - TimesAscent.com`}
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
                  name: "true test",
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
        loading={loading}
        setOpen={setOpen}
        redirectionUrl1={redirectionUrl1}
        setRedirectionUrl1={setRedirectionUrl1}
        setShowRedirectionModal={setShowRedirectionModal}
        partnerClick={() => {
          partnerClick(companyName1, redirectionUrl1);
        }}
      />{" "}
      <MainHeader />
      <div className="bg-white">
        <main>
          <div className="cursor-pointer" onClick={() => {
            Cookies.set("pathname", router.pathname);
            partnerDataHandler("truetest", "https://www.truetest.in/times-ascent.html");
          }}>
            <div className="relative">
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
              <div className="mx-auto w-full" >
                <div className="relative shadow-xl sm:overflow-hidden ">
                  <div className="absolute inset-0">
                    <img
                      className="h-full w-full object-cover"
                      src="../psychometricTest/trueTestBanner.webp"
                      alt="SetmyCareer"
                    />
                    <div className="absolute inset-0 bg-purple-700 mix-blend-multiply" />
                  </div>
                  <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                    <h1 className="text-center text-4xl font-bold tracking-tight max-w-3xl m-auto">
                      <span className="block text-white">TRUEtest</span>
                    </h1>
                    <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                      Provides career guidance and career management.
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
                TRUEtest also provides career guidance and career management.
              </span>
            </h2>
          </div>
          <div className="prose prose-indigo mx-auto text-black lg:max-w-none sm:max-w-none lg:mt-5">
            <p>
              TRUEtest is India's first online assessment tool that allows people to determine their career inclination, aptitude, personality, and leadership attributes. Thousands of people around the world have used TRUEtest exams to find the ideal profession and career for them.
            </p>
          </div>
          <div className="prose prose-indigo mx-auto text-black lg:max-w-none sm:max-w-none lg:mt-5">
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
                onClick={() => {
                  Cookies.set("pathname", router.pathname);
                  partnerDataHandler("truetest", "https://www.truetest.in/times-ascent.html");
                }}
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-timesPurple px-5 py-3 text-base font-medium text-white hover:bg-purple-700"
              >
                Take the free assessment today
              </button>
              {/* <button type="button" onClick={partnerRegApi}>sfdfdf</button> */}
            </div>
          </div>
          <section className="my-6  ">
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

export default Truetest;
