import React, { useEffect } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import BreadCrumbs from "../../Components/BreadCrumbs";
import Footer from "../../Components/Footer";
import MainHeader from "../../Components/MainHeader";
import { CourseDetailApi } from "../api/CourseDetailApi";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import ModalRedirection from "../../Components/ModalRedirection";
import Head from "next/head";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
import SkeletonMrec from "../../Components/Skeleton/SkeletonMrec";
import * as gtag from "../../lib/gtag";
// import { SkeletonTextPlaceholder } from "../../Components/Skeleton/SkeletonJobDetail";
import SimilarJob from "../../Components/jobs/JobDetail/SimilarJob";

const coursedetail = ({ coursedetail }) => {
  const router = useRouter();
  const [adShow, setadShow] = useState(false);

  const [open, setOpen] = useState(false);
  const [login, setLogin] = useState("");
  const [similarJobs, setSimilarJobs] = useState("");
  const cookie_email = Cookies.get("USEREMAIL");
  const cookie_mobile = Cookies.get("USERMOBILENO");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    if (!coursedetail.data) return;
    const pageLoadingLog = async (companyName, redirectionURL) => {
      await fetch(`${process.env.Live_API_URL}/v1/api/apiTimes/UserActivity`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.API_TOKEN_AUTH_SERVER,
        },
        body: JSON.stringify({
          CandidateId: Cookies.get("USERID" || "-"),
          RedirectionUrl: coursedetail.data.course_source,
          Company:
            coursedetail.data.providerName +
            " {" +
            coursedetail.data.course_title +
            "}",
          Event: "pageView",
          Page:
            "https://timesascent.com" +
            "/" +
            router.query.coursesid[0] +
            "/" +
            router.query.coursesid[1] +
            "/" +
            router.query.coursesid[2],
        }),
      });
    };
    pageLoadingLog();
    getSimilarJobsFunc();
    return () => clearTimeout(timeout);
  }, [coursedetail.data]);

  useEffect(() => {
    setLogin(Cookies.get("userLoggedIn"));
  }, []);

  const onClickLog = async (companyName, redirectionURL) => {
    await fetch(`${process.env.Live_API_URL}/v1/api/apiTimes/UserActivity`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.API_TOKEN_AUTH_SERVER,
      },
      body: JSON.stringify({
        CandidateId: Cookies.get("USERID") || "-",
        RedirectionUrl: coursedetail.data.course_source,
        Company:
          coursedetail.data.providerName +
          " {" +
          coursedetail.data.course_title +
          "}",
        Event: "buttonClick",
        Page:
          "https://timesascent.com" +
          "/" +
          router.query.coursesid[0] +
          "/" +
          router.query.coursesid[1] +
          "/" +
          router.query.coursesid[2],
      }),
    });
  };

  const getSimilarJobsFunc = () => {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.API_TOKEN_AUTH_SERVER);

    var formdata = new FormData();
    // formdata.append("Category", coursedetail.data.course_category);
    formdata.append("Category", "engineer");

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch(`${process.env.Live_API_URL}/v1/admin1_1/CourseJobTag`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status_code == 200 && result.status === "Success") {
          setSimilarJobs(result.Data);
        }
      })
      .catch(error => console.log('error', error));
  }

  // event fire after click on get started button
  const handlerGetStarted = (courseId, candidateId) => {
    gtag.event({
      action: JSON.stringify({
        email: cookie_email,
        mobile: cookie_mobile,
      }),
      category: "CourseImpressions",
      label: courseId,
    });
  };

  const partnerClick = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      CandidateId: Cookies.get("USERID"),
      RedirectionUrl: coursedetail.data.course_source,
      Company:
        coursedetail.data.providerName +
        " {" +
        coursedetail.data.course_title +
        "}",
      Event: "redirection",
      Page:
        "https://timesascent.com/course-details" +
        "/" +
        router.query.coursesid[0] +
        "/" +
        router.query.coursesid[1] +
        "/" +
        router.query.coursesid[2],
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
          window.open(coursedetail.data.course_source, "_self");
        }
      })
      .catch((error) => console.log("error", error));
  };

  const pages = [
    {
      name: "Courses",
      href: "/courses",
      current: false,
    },
    {
      name: coursedetail.data.course_title,

      current: true,
    },
  ];

  const handleLog = () => {
    if (login) {
      setOpen(true);
    } else {
      Cookies.set(
        "pathname",
        "course-details" +
        "/" +
        router.query.coursesid[0] +
        "/" +
        router.query.coursesid[1] +
        "/" +
        router.query.coursesid[2]
      );
      router.push("/times-ascent-signin");
    }
  };

  const closeModalHandler = () => {
    setOpen(false);
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${coursedetail.data.providerName || " "
          } free online courses  - timesascent.com`}</title>
        <meta
          name="description"
          content={`${coursedetail.data.course_title || " "
            }. Free online course by ${coursedetail.data.providerName
            } - timesascent.com`}
        />
        <link
          rel="canonical"
          href={
            "https://timesascent.com/course-details" +
            "/" +
            router.query.coursesid[0] +
            "/" +
            router.query.coursesid[1] +
            "/" +
            router.query.coursesid[2]
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
          content={`${coursedetail.data.course_title} - TimesAscent.com`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`${coursedetail.data.course_title || " "
            }. Free online course by ${coursedetail.data.providerName
            } - timesascent.com`}
        />
        <meta
          property="og:url"
          content={
            "course-details" +
            "/" +
            router.query.coursesid[0] +
            "/" +
            router.query.coursesid[1] +
            "/" +
            router.query.coursesid[2]
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
          content={`${coursedetail.data.course_title} - TimesAscent.com`}
        />
        <meta
          property="twitter:description"
          content={`${coursedetail.data.course_title || " "
            }. Free online course by ${coursedetail.data.providerName
            } - timesascent.com`}
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
                  name: "Courses",
                  item: "https://timesascent.com/courses",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Course details",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Course",
              name: coursedetail.data.course_title,
              description: coursedetail?.data.course_desc,
              learningResourceType: coursedetail?.data.learningResourceType,
              accessMode: coursedetail?.data.accessMode,
              dateCreated: coursedetail?.data.course_created_at,
              dateModified: coursedetail?.data.course_updated_at,
              size: coursedetail?.data.courseDuration,
              image: coursedetail?.data.course_image,
              provider: coursedetail?.data.providerName,
              accessMode: coursedetail?.data.course_type,
              educationalLevel: coursedetail?.data.course_category,
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
      <div className="bg-white">
        <div className=" py-2 sm:py-5 sm:px-6lg:gap-x-2 mx-auto container ">
          <div className=" mb-6">
            <BreadCrumbs data={pages} />
          </div>
          <div className="sm:flex   ">
            <div className="w-auto ">
              <div className="mt-4 sm:flex sm:justify-between sm:items-start">
                <h1 className="text-xl w-auto font-bold tracking-tight text-gray-900 ">
                  {coursedetail.data.course_title}
                </h1>
                <div className="sm:ml-4 w-[120px] sm:text-right  ">
                  <button
                    type="submit"
                    className="inline-flex rounded-md  mt-2 border border-transparent bg-timesPurple py-2 px-4 w-7xl text-sm font-medium text-white shadow-sm hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
                    onClick={() => {
                      // onClickLog();
                      handlerGetStarted(
                        coursedetail.data.course_id,
                        Cookies.get("USERID")
                      );
                      handleLog();
                    }}
                  >
                    Get Started
                  </button>
                </div>
              </div>
              <div className="overflow-hidden mt-5">
                <img
                  src={coursedetail.data.course_image}
                  alt={coursedetail.data.course_title}
                  className="h-auto w-full sm:w-3/4  rounded-lg"
                />
              </div>


              <section aria-labelledby="information-heading" className="mt-4">
                <div className="flex items-center">
                  <p className="text-sm text-gray-900 sm:text-lg">
                    {coursedetail.data.course_category}
                  </p>
                </div>

                <div className="mt-4 space-y-6">
                  <div className="prose mt-0 text-black lg:max-w-none text-sm lg:text-sm lg:mt-4">
                    <div
                      dangerouslySetInnerHTML={{
                        __html: coursedetail?.data.course_desc,
                      }}
                    />
                  </div>
                </div>

                <div className="mt-4 flex items-center">
                  <CheckIcon
                    className="h-5 w-5 flex-shrink-0 text-green-500"
                    aria-hidden="true"
                  />
                  <p className="ml-2 text-sm text-gray-500">Duration</p>
                  <p className="ml-2 text-sm text-gray-500">
                    ({coursedetail.data.courseDuration})
                  </p>
                </div>
              </section>
              <div>
                <img
                  src={coursedetail.data.courseProviderLogo}
                  alt={coursedetail.data.course_title}
                  className="w-[20%] h-[20%] "
                />
              </div>

              <div className="font-medium text-gray-500">Course by</div>
              <p className="text-gray-500">{coursedetail.data.providerName}</p>


              <div className="font-medium text-gray-500 mt-4">Disclaimer</div>
              <p className="text-gray-500">BCCL disclaims any and all representation or warranties of any kind - expressed or implied - about the completeness, accuracy, reliability,  or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Views expressed herein are independent opinions. You may act at your own risk while relying on the information available on the website. Should you decide to act, or omit to act, you should seek appropriate professional advice.</p>



              <div className="block sm:hidden lg:mt-14 mt-5 ">
                {adShow ? (
                  <GoogleAd_300x250
                    path="/22637491760/timesascent.com_erelego_d_ap_300x250"
                    ads_Id="div-gpt-ad-1666346824793-0"
                    size={[[300, 250]]}
                  />
                ) : (
                  <SkeletonMrec />
                )}
              </div>
            </div>

            <div className=" sm:w-[400px] overflow-hidden sm:shrink-0 sm:ml-[20px]">
              <div className="hidden sm:block lg:mt-14 sm:mt-5 ">
                {adShow ? (
                  <GoogleAd_300x250
                    path="/22637491760/timesascent.com_erelego_d_ap_300x250"
                    ads_Id="div-gpt-ad-1666346824793-0"
                    size={[[300, 250]]}
                  />
                ) : (
                  <SkeletonMrec />
                )}
              </div>
              {
                similarJobs &&
                <SimilarJob data1={similarJobs} />
              }


            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export async function getServerSideProps(context) {
  const coursedetail = await CourseDetailApi(context.query.coursesid[2]);

  return {
    props: { coursedetail },
  };
}

export default coursedetail;

// Cookies.set("USERID", response.data.CandidateId);
