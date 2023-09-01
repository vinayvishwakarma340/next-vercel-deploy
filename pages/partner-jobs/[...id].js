import React, { useState, useEffect, useRef } from "react";

import MainHeader from "../../Components/MainHeader";

import {
  CandidateDetailsApi,
  JobsDetailApi,
  NewJobsRelatedJobs,
} from "../api/jobsApi";
import Head from "next/head";
import { useRouter } from "next/router";
import BreadCrumbs from "../../Components/BreadCrumbs";
import Cookies from "js-cookie";
import * as gtag from "../../lib/gtag";
// import Image from "next/image";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
import SkeletonMrec from "../../Components/Skeleton/SkeletonMrec";
import dynamic from "next/dynamic";

const JobModalRedirection = dynamic(() => import("../../Components/Modal/JobModalRedirection"));
const JobApplicationDetail = dynamic(() => import("../../Components/Modal/JobApplicationDetail"));
const Footer = dynamic(() => import("../../Components/Footer"), { ssr: true });
const SuccessModal = dynamic(() =>
  import("../../Components/Modal/SuccessModal"), { ssr: true }
);
const InterestingJobs = dynamic(() =>
  import("../../Components/jobs/JobDetail/InterestingJobs"), { ssr: true }
);
const JobInfo = dynamic(() =>
  import("../../Components/jobs/JobDetail/JobInfo"), { ssr: true }
);
const SimilarJob = dynamic(() =>
  import("../../Components/jobs/JobDetail/SimilarJob"), { ssr: true }
);

const partnerDetails = (props) => {
  const jobData = props.props.JobDetailsData.data;
  const position = props.props.relatedData.data;
  const resume1 = props.props.candidateDetail?.Resume;
  const [resume, setResume] = useState([]);
  const [resumeUpload, setResumeUpload] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [adShow, setadShow] = useState(false);
  const [showComp, setShowComp] = useState(false);
  const router = useRouter();
  const [validThrough, setValidThrough] = useState();
  const [validThroughMonth, setValidThroughMonth] = useState();
  const [applicationDetailModal, setApplicationDetailModal] = useState(false);
  const [redirectModal, setRedirectModal] = useState(false);
  const [redirectionUrl, setRedirectionUrl] = useState("");
  let datePosted = new Date(jobData.datePosted);
  const similarJobRef = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    const showCompTimer = setTimeout(() => {
      setShowComp(true);
    }, 2000);
    Cookies.get("userLoggedIn")
      ? setResume(props.props.candidateDetail?.Resume[0])
      : "";
    setValidThroughMonth(datePosted.setDate(datePosted.getDate() + 0));
    if (validThroughMonth) {
      setValidThroughMonth(datePosted.setMonth(datePosted.getMonth() + 6));
      setValidThrough(new Date(validThroughMonth).toISOString());
    }
    return () => {
      clearTimeout(timeout);
      clearTimeout(showCompTimer);
    };
  }, [validThroughMonth, jobData.datePosted]);

  useEffect(() => {
    Event();
    JobEvent();
    SimilarJobEvent();
  }, [jobData.CompanyName, position]);

  const Event = () => {
    const pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    gtag.pageSpeedEvent({
      action: "Partner Job detail Page Speed", pageTitle: "Partner job detail page", load_time: pageLoadTime
    });
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
    gtag.event({
      action: `${position.map((item) => {
        return item.CompanyName;
      })}`,
      category: "Job Impressions",
      label: `${position.map((item) => {
        return item.JobId;
      })}`,
    });
  };

  const similarJobsScrollAbout = () =>
    similarJobRef.current.scrollIntoView();

  const ResumeUpload = (event) => {
    event.preventDefault();
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );

    var formdata = new FormData();
    formdata.append("email", Cookies.get("USEREMAIL"));
    formdata.append("city", "");
    formdata.append("state", "");
    formdata.append("phone", Cookies.get("USERMOBILENO"));
    formdata.append("resume", resumeUpload ? resumeUpload : "");
    formdata.append("resumeUrl", resume?.resumePath ? resume?.resumePath : "");
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
    const removeresume = resume1?.filter((item) => {
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
      name: "Partner Jobs",
      href: "",
      current: true,
    },
  ];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${jobData.positionTitle ? jobData.positionTitle : ""
          } job vacancy at ${jobData.CompanyName ? jobData.CompanyName : ""
          }`}</title>
        <meta
          name="description"
          content={`${jobData.positionTitle ? jobData.positionTitle : ""} at ${jobData.CompanyName ? jobData.CompanyName : ""
            } in ${jobData.city
              ? jobData.city
              : "" || jobData.country
                ? jobData.country
                : ""
            } - timesascent.com`}
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
          content={`${jobData.positionTitle ? jobData.positionTitle : ""} at ${jobData.CompanyName ? jobData.CompanyName : ""
            } in ${jobData.city
              ? jobData.city
              : "" || jobData.country
                ? jobData.country
                : ""
            } - timesascent.com`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`${jobData.positionTitle ? jobData.positionTitle : ""} at ${jobData.CompanyName ? jobData.CompanyName : ""
            } in ${jobData.city
              ? jobData.city
              : "" || jobData.country
                ? jobData.country
                : ""
            } - timesascent.com`}
        />
        <meta
          property="og:url"
          content={`https://timesascent.com${router.asPath}`}
        />
        <meta
          property="og:image"
          content={
            jobData.imageUrl
              ? jobData.imageUrl
              : "https://timesascent.com/Times_Ascent_Icon.png"
          }
        />
        <meta property="twitter:image" content={jobData.imageUrl} />
        <meta
          property="twitter:title"
          content={`${jobData.positionTitle ? jobData.positionTitle : ""} at ${jobData.CompanyName ? jobData.CompanyName : ""
            }`}
        />
        <meta
          property="twitter:description"
          content={`${jobData.positionTitle ? jobData.positionTitle : ""} at ${jobData.CompanyName ? jobData.CompanyName : ""
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
                  name: "Partner jobs",
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
              description: `${jobData.jobDescription}`,
              url: `${"https://timesascent.com" + router.asPath}`,
              employmentType: "Fulltime",
              experienceRequirements: {
                "@type": "OccupationalExperienceRequirements",
                monthsOfExperience: `${jobData.minExperience === "0" || jobData.minExperience === ""
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
              industry: `${jobData.Industry ? jobData.Industry : ""}`,
              hiringOrganization: `${jobData.CompanyName}`,
              datePosted: `${jobData.datePosted}`,
              validThrough: `${validThrough}`,

              jobLocation: {
                "@type": "Place",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: `${jobData.locationName}`,
                  addressRegion: `${jobData.state}`,
                  streetAddress: jobData.StreetAddress || jobData.locationName,
                  postalCode: `${jobData.PostalCode}`,
                  addressCountry: jobData.country || "India",
                },
              },
              occupationalCategory: `${jobData.Category ? jobData.Category : ""
                }`,
              qualifications: `${jobData.applicationDetails + " " + jobData.jobDescription
                }`,
              skills: `${jobData.Category ? jobData.Category : ""}`,
              title: `${jobData.positionTitle}`,
            }),
          }}
        />
      </Head>
      <MainHeader />
      <div className="relative   py-4 container lg:py-4 bg-white">
        {" "}
        <BreadCrumbs data={pages} />
      </div>
      <SuccessModal
        openModal={showModal}
        closeModal={() => closeModalHandler()}
        headingText="Thank-you !!"
        subHeading="Your Resume upload successfully!"
        buttonText="OK"
      />
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
      <div className="main bg-zinc-50 lg:flex lg:justify-between box-border w-full py-4 md:py-6 lg:py-8 container">
        <div className="lg:w-[calc(100%-320px)]">
          <div className="overflow-hidden">
            <div className="bg-white shadow sm:rounded-lg my-4">
              <JobInfo
                similarJobsScrollAbout={similarJobsScrollAbout}
                setApplicationDetailModal={setApplicationDetailModal}
                jobDataDetail={jobData}
              />
            </div>
            <div ref={similarJobRef}>
              {showComp &&
                <SimilarJob data1={jobData} />
              }
            </div>
          </div>
          <div className="bg-white mt-4 sm:mx-0 px-4 py-6 shadow-md rounded-md">
            <dt className="text-base font-medium text-gray-900">
              Disclaimer
            </dt>
            <p className="mt-1 text-sm text-gray-900">
              BCCL disclaims any and all representation or warranties of any kind - expressed or implied - about the completeness, accuracy, reliability,  or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Views expressed herein are independent opinions. You may act at your own risk while relying on the information available on the website. Should you decide to act, or omit to act, you should seek appropriate professional advice.
            </p>
          </div>



        </div>
        <div className="right-side mt-6 lg:ml-[20px] lg:mt-0  lg:w-[300px]">
          {position.length > 0 && (
            <div className="mb-4">  <InterestingJobs positions={position} /></div>
          )}
          <div className="place-content-center   ">
            {adShow ? (
              <GoogleAd_300x250
                path="/1064661/ta.com_mrec2_job"
                ads_Id="div-gpt-ad-1674554724509-0"
                size={[[300, 250]]}
              />
            ) : (
              <SkeletonMrec />
            )}
          </div>
        </div>
      </div>


      {showComp && <Footer />}
    </>
  );
};

export default partnerDetails;

export async function getServerSideProps(context) {
  const ipAddress = context.req.headers['x-forwarded-for'] || context.req.socket.remoteAddress;
  let props = {};
  try {
    const JobDetailsData = await JobsDetailApi(context.query.id[3], ipAddress);
    const relatedData = await NewJobsRelatedJobs(
      context.query.id[0],
      context.query.id[2],
      ipAddress
    );
    const candidateDetail = await CandidateDetailsApi(
      context.req.cookies.USERID, ipAddress
    );
    props = {
      JobDetailsData,
      relatedData,
      candidateDetail,
    };
  } catch (err) {
    props = {};
  }

  return { props: { props } };
}
