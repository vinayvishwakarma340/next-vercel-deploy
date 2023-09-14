import React, { useState, useEffect, useRef } from "react";

import MainHeader from "../../Components/MainHeader";

import {
  CandidateDetailsApi,
  JobsDetailApi,
  MoreJobApi,
  NewJobsRelatedJobs,
} from "../api/jobsApi";
import Cookies from "js-cookie";
import Head from "next/head";
import BreadCrumbs from "../../Components/BreadCrumbs";
import { useRouter } from "next/router";
import * as gtag from "../../lib/gtag";
import { GA_TRACKING_ID } from "../../lib/gtag";

import JobInfo from "../../Components/jobs/JobDetail/JobInfo";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
import SkeletonMrec from "../../Components/Skeleton/SkeletonMrec";
import GoogleAd_Hrec from "../../Components/GoogleAds/GoogleAd_Hrec";
import SkeletonHrec from "../../Components/Skeleton/SkeletonHrec";

// import SimilarJob from "../../Components/jobs/JobDetail/SimilarJob";

import dynamic from "next/dynamic";
import SimilarJobCard from "../../Components/jobs/JobDetail/SimilarJobCard";
// import Script from "next/script";
const JobModalRedirection = dynamic(() =>
  import("../../Components/Modal/JobModalRedirection")
);
const JobApplicationDetail = dynamic(() =>
  import("../../Components/Modal/JobApplicationDetail")
);
const InterestingJobs = dynamic(() =>
  import("../../Components/jobs/JobDetail/InterestingJobs")
);
const SuccessModal = dynamic(() =>
  import("../../Components/Modal/SuccessModal")
);
const SimilarJob = dynamic(() =>
  import("../../Components/jobs/JobDetail/SimilarJob")
);
const Footer = dynamic(() => import("../../Components/Footer"));

const jobdetail = (props) => {
  const jobData = props.props.JobDetailsData.data;

  const position = props.props.relatedData.data;
  const resume1 = props.props.candidateDetail.Resume;
  const moreJobData = props.props.moreJobData.data ? props.props.moreJobData.data : "";

  let datePosted = new Date(jobData.datePosted);
  const [resume, setResume] = useState([]);
  const [validThrough, setValidThrough] = useState();
  const [validThroughMonth, setValidThroughMonth] = useState();
  const [resumeUpload, setResumeUpload] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [adShow, setadShow] = useState(false);
  const [applicationDetailModal, setApplicationDetailModal] = useState(false);
  const [redirectModal, setRedirectModal] = useState(false);
  const [redirectionUrl, setRedirectionUrl] = useState("");

  const router = useRouter();

  useEffect(() => {
    window.gtag("config", GA_TRACKING_ID, {
      page_location: router.asPath,
    });
    const addTimer = setTimeout(() => {
      setadShow(true);
    }, 4000);
    if (validThroughMonth) {
      setValidThroughMonth(datePosted.setMonth(datePosted.getMonth() + 6));
      setValidThrough(new Date(validThroughMonth).toISOString());
    }
    setValidThroughMonth(datePosted.setDate(datePosted.getDate() + 0));
    return () => clearTimeout(addTimer);
  }, [validThroughMonth, jobData.datePosted]);

  useEffect(() => {
    Cookies.get("Ref") && executeScrollAbout;
    Cookies.get("userLoggedIn")
      ? setResume(props.props.candidateDetail?.Resume[0])
      : "";
    Event();
    JobEvent();
    SimilarJobEvent();
  }, [jobData.CompanyName, position]);

  const myRefabout = useRef(0);
  const similarJobRef = useRef(0);
  const similarJobsScrollAbout = () => similarJobRef.current.scrollIntoView();

  const executeScrollAbout = () => myRefabout.current.scrollIntoView();

  const Event = () => {
    // const pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    // gtag.pageSpeedEvent({
    //   action: "New Job Page Speed", pageTitle: "New Job Page", load_time: pageLoadTime
    // });
    gtag.event({
      action: jobData.CompanyName,
      category: "Company Impressions",
      label: router.asPath,
    });
  };
  const JobEvent = () => {
    gtag.event({
      action: jobData.CompanyName,
      category: "Job Impressions",
      label: jobData.JobId,
    });
  };
  const SimilarJobEvent = () => {
    {
      position.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Job Impressions",
          label: item.JobId,
        });
      });
    }
  };
  const ResumeUpload = (event) => {
    event.preventDefault();
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.API_TOKEN_AUTH_SERVER);

    var formdata = new FormData();
    formdata.append("email", Cookies.get("USEREMAIL"));
    formdata.append("city", "");
    formdata.append("state", "");
    formdata.append("phone", Cookies.get("USERMOBILENO"));
    formdata.append("resume", resumeUpload ? resumeUpload : "");
    formdata.append("resumeUrl", resume.resumePath ? resume.resumePath : "");
    formdata.append("jobId", jobData.JobId);
    formdata.append("companyId", jobData.companyId);
    formdata.append("candidateId", Cookies.get("USERID"));

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/applyViaResumeForFeaturedEmployer`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status === "SUCCESS" && result.status_code === 200) {
          setShowModal(true);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  const CrossClick = (r) => {
    const removeresume = resume1.filter((item) => {
      return item.keyIndex !== r;
    });

    setResume(removeresume);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };
  const pages = [
    {
      name: "Jobs",
      href: "/jobs",
      current: false,
    },
    {
      name: `${jobData.CompanyName}`,
      href: "#",
      current: true,
    },
  ];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${
          jobData.positionTitle ? jobData.positionTitle : ""
        } job vacancy at ${
          jobData.CompanyName ? jobData.CompanyName : ""
        }`}</title>
        <meta
          name="description"
          content={`${jobData.positionTitle ? jobData.positionTitle : ""} at ${
            jobData.CompanyName ? jobData.CompanyName : ""
          } in ${jobData.city ? jobData.city : ""} - timesascent.com`}
        />
        <link
          rel="canonical"
          href={`https://timesascent.com${router.asPath}`}
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
          content={`${jobData.positionTitle ? jobData.positionTitle : ""} at ${
            jobData.CompanyName ? jobData.CompanyName : ""
          } in ${jobData.city ? jobData.city : ""} - timesascent.com`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`${jobData.positionTitle ? jobData.positionTitle : ""} at ${
            jobData.CompanyName ? jobData.CompanyName : ""
          } in ${jobData.city ? jobData.city : ""} - timesascent.com`}
        />
        <meta
          property="og:url"
          content={`https://timesascent.com${router.asPath}`}
        />
        <meta
          property="og:image"
          content={`${jobData.imageUrl ? jobData.imageUrl : ""}`}
        />
        <meta
          property="twitter:image"
          content={`${jobData.imageUrl ? jobData.imageUrl : ""}`}
        />
        <meta
          property="twitter:title"
          content={`${jobData.positionTitle ? jobData.positionTitle : ""} at ${
            jobData.CompanyName ? jobData.CompanyName : ""
          }`}
        />
        <meta
          property="twitter:description"
          content={`${jobData.positionTitle ? jobData.positionTitle : ""} at ${
            jobData.CompanyName ? jobData.CompanyName : ""
          }`}
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
                  name: "Jobs",
                  item: "https://timesascent.com/jobs",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "New jobs",
                },
              ],
            }),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "http://schema.org",
              "@type": "JobPosting",
              name: `${jobData.positionTitle}`,
              image: `${jobData.thumbnail || jobData.imageUrl}`,
              description: `${
                jobData.jobDescription || "job detail discription"
              } `,
              url: `${"https://timesascent.com" + router.asPath}`,
              employmentType: "Fulltime",
              experienceRequirements: {
                "@type": "OccupationalExperienceRequirements",
                monthsOfExperience: `${
                  jobData.minExperience === "0" || jobData.minExperience === ""
                    ? 1
                    : parseInt(jobData.minExperience)
                }`,
              },
              baseSalary: {
                "@type": "MonetaryAmount",
                currency: "INR",
                value: {
                  "@type": "QuantitativeValue",
                  value: jobData.minCtc ? jobData.minCtc : 5000,
                  unitText: "MONTH",
                },
              },
              industry: `${jobData.Industry}`,
              hiringOrganization: `${jobData.CompanyName}`,
              datePosted: `${jobData.datePosted}`,
              validThrough: `${validThrough || "2023-12-07T08:00:00.000Z"}`,

              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: `${jobData.locationName || "India"}`,
                  addressRegion: `${jobData.state || "India"}`,
                  streetAddress:
                    jobData.StreetAddress || jobData.locationName || "India",
                  postalCode: `${jobData.PostalCode || "226002"}`,
                  addressCountry: jobData.country || "India",
                },
              },
              occupationalCategory: `${jobData.Category}`,
              qualifications: `${
                jobData.applicationDetails + " " + jobData.jobDescription
              }`,
              skills: `${jobData.Category}`,
              title: `${jobData.positionTitle}`,
            }),
          }}
        />

        {/* <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var _mtm = window._mtm = window._mtm || [];
            _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
            (function() {
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src='https://et.onecorp.co.in/js/container_VgA74Yfh.js'; s.parentNode.insertBefore(g,s);
            })();`,
          }}
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `var _paq = window._paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="https://et.onecorp.co.in/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', '1']);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
            })();`,
          }}
        /> */}
      </Head>
      <MainHeader />
      <JobModalRedirection
        openModal={redirectModal}
        closeModal={() => setRedirectModal(false)}
        setOpen={setRedirectModal}
        redirectionUrl={redirectionUrl}
      />{" "}
      <JobApplicationDetail
        openModal={applicationDetailModal}
        closeModal={() => setApplicationDetailModal(false)}
        setOpen={setRedirectModal}
        setRedirectModal={setRedirectModal}
        setRedirectionUrl={setRedirectionUrl}
        jobDataDetail={jobData}
        Resume={resume}
        CrossClick={CrossClick}
        SubmitBtn={ResumeUpload}
        onChange={(e) => setResumeUpload(e.target.files[0])}
        loading={loading}
      />{" "}
      <SuccessModal
        openModal={showModal}
        closeModal={() => closeModalHandler()}
        headingText="Thank-you !!"
        subHeading="Your Resume upload successfully!"
        buttonText="OK"
      />
      <div className="relative py-4 container lg:py-4 bg-white">
        <BreadCrumbs data={pages} />
      </div>
      <div className="main  lg:flex lg:justify-between box-border w-full py-4 md:py-6 lg:py-8 container">
        <div className="lg:w-[calc(100%-320px)]">
          <div className="overflow-hidden bg-white shadow-md shadow-purple-200 sm:rounded-lg ">
            <div>
              <JobInfo
                similarJobsScrollAbout={similarJobsScrollAbout}
                setApplicationDetailModal={setApplicationDetailModal}
                jobDataDetail={jobData}
                // setRedirectModal={setRedirectModal}
                // setRedirectionUrl={setRedirectionUrl}
                // Resume={resume}
                // CrossClick={CrossClick}
                // SubmitBtn={ResumeUpload}
                // onChange={(e) => setResumeUpload(e.target.files[0])}
                // loading={loading}
                // ref={myRefabout}
              />
            </div>
          </div>

          {/* same jobs in diffrent company */}

          {moreJobData && (
            <div className="mt-8">
              <div className="border-b shadow rounded-t-lg border-gray-200 bg-white px-4 py-5 sm:px-6">
                <h3 className="text-base font-semibold leading-6 text-gray-900">
                  More Jobs
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {
                  // moreJobData
                  moreJobData.slice(0, 6).map((job, index) => (
                    <div key={index}>
                      <SimilarJobCard jobDetail={job} />
                    </div>
                  ))
                }
              </div>
            </div>
          )}

          <div className="my-6 mx-[4%] lg:mx-0">
            {adShow ? (
              <>
                <div className=" hidden md:block ">
                  <GoogleAd_Hrec
                    path="/1064661/ta.com_hrec1_JobDetails"
                    ads_Id="div-gpt-ad-1674637758774-0"
                    size={[[728, 90]]}
                  />
                </div>
                <div className="block md:hidden">
                  <GoogleAd_Hrec
                    path="/1064661/ta.com_hrec1_mob_JobDetails"
                    ads_Id="div-gpt-ad-1674637851556-0"
                    size={[[320, 50]]}
                  />
                </div>
              </>
            ) : (
              <SkeletonHrec />
            )}
          </div>
          <div ref={similarJobRef}>
            <SimilarJob data1={jobData} />
          </div>
          <div>
            <div className="mx-[4%] sm:mx-0 px-4 py-6 shadow-md rounded-md">
              <dt className="text-base font-medium text-gray-900">
                {`About ${jobData.CompanyName}`}{" "}
              </dt>
              <ul className="mt-1 text-sm text-gray-900">
                {jobData.companyDetails?.split("~").map((item, index) => {
                  return (
                    <li key={index} className="pt-2">
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mx-[4%] sm:mx-0 px-4 py-6 shadow-md rounded-md">
              <dt className="text-base font-medium text-gray-900">
                Disclaimer
              </dt>
              <p className="mt-1 text-sm text-gray-900">
                BCCL disclaims any and all representation or warranties of any
                kind - expressed or implied - about the completeness, accuracy,
                reliability, or availability with respect to the website or the
                information, products, services, or related graphics contained
                on the website for any purpose. Views expressed herein are
                independent opinions. You may act at your own risk while relying
                on the information available on the website. Should you decide
                to act, or omit to act, you should seek appropriate professional
                advice.
              </p>
            </div>
          </div>
        </div>
        <div></div>
        <div className="right-side mt-6 lg:ml-[20px] lg:mt-0  lg:w-[300px]">
          <div className="my-4 sm:mb-4 sm:mt-0">
            {adShow ? (
              <GoogleAd_300x250
                path="/1064661/ta.com_mrec1_job"
                ads_Id="div-gpt-ad-1674554579449-0"
                size={[[300, 250]]}
              />
            ) : (
              <SkeletonMrec />
            )}
          </div>
          {position.length > 0 && (
            <div className="mx-[4%] sm:mx-0">
              <InterestingJobs positions={position} />
            </div>
          )}
          <div className="place-content-center   mt-5  m-auto w-[300px] h-[250px] bg-gray-300 flex items-center text-center">
            {adShow ? (
              <GoogleAd_300x250
                path="/22637491760/timesascent.com_erelego_d_ap_300x250"
                ads_Id="div-gpt-ad-1674643828785-0"
                size={[[300, 250]]}
              />
            ) : (
              <SkeletonMrec />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default jobdetail;

export async function getServerSideProps(context) {
  const ipAddress =
    context.req.headers["x-forwarded-for"] || context.req.socket.remoteAddress;
  // Respond with the IP address

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

  const lastIndex = context.query.id[context.query.id.length - 1];
  let props = {};
  try {
    const allData = await Promise.all([
      JobsDetailApi(lastIndex, ipAddress),
      NewJobsRelatedJobs(context.query.id[0], context.query.id[2], ipAddress),
      CandidateDetailsApi(context.req.cookies.USERID, ipAddress),
      MoreJobApi(context.query.id[0], context.query.id[2], lastIndex),
    ]);

    props = {
      JobDetailsData: allData[0],
      relatedData: allData[1],
      candidateDetail: allData[2],
      moreJobData: allData[3],
      isMobile,
    };
  } catch (err) {
    props = {
      isMobile,
    };
  }

  return { props: { props } };
}
