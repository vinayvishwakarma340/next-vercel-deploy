import React, { useState, useEffect } from "react";
import Footer from "../../Components/Footer";
import BreadCrumbs from "../../Components/BreadCrumbs";
import MainHeader from "../../Components/MainHeader";
import Head from "next/head";
import { jobimage } from "../api/jobimage";
import SimilarJob from "../../Components/jobs/JobDetail/SimilarJob";
import { useRouter } from "next/router";
import * as gtag from "../../lib/gtag";
import Image from "next/image";

const jobsfullimage = (props) => {
  const router = useRouter();
  const data = props.jobsuggestion.data
  // useEffect(() => {
  //   setData(props.jobsuggestion.data);
  // }, []);
  useEffect(() => {
    Event();
  }, [data]);


  const Event = () => {
    const pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    gtag.pageSpeedEvent({
      action: "Job full Image Page Speed", pageTitle: "Job full Image page", load_time: pageLoadTime
    });
    gtag.event({
      action: data.CompanyName,
      category: "Company Impressions",
      label: router.asPath,
    });
    gtag.event({
      action: data.CompanyName,
      category: "Job Impressions",
      label: data.JobId,
    });
  };
  const pages = [
    { name: "Jobs", href: "/jobs", current: false },
    { name: router.query?.fullimage[0] || "Jobs Search", href: "javascript:history.back()", current: false },
    {
      name: `${data.positionTitle && data.positionTitle} at ${data.CompanyName && data.CompanyName
        }`
    },
  ];

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Times Ascent Ad Image for ${data.CompanyName} -timesascent.com	`}</title>
        <meta name="description" content={data.companyDetails} />
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
          content={`Times Ascent Ad Image for ${data.CompanyName} -timesascent.com	`}
        />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={data.companyDetails} />
        <meta
          property="og:url"
          content={`https://timesascent.com/jobs-full-image/${router.asPath}`}
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
          content={`Times Ascent Ad Image for ${data.CompanyName} -timesascent.com	`}
        />
        <meta property="twitter:description" content={data.companyDetails} />
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
                  name: "job",
                  item: "https://timesascent.com/jobs",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Job Detail",
                  item: "https://timesascent.com/new-jobs",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Job Full Image",
                },
              ],
            }),
          }}
        />
      </Head>

      <MainHeader />

      {/* ==================================================================================== */}
      <div className="relative py-4 md:py-6 lg:py-8 container">
        <div className=" py-4 ">
          <BreadCrumbs data={pages} />
        </div>

        {/* -----------------------------main content starts here ----------------------------- */}

        <h1 className="p-2 text-center text-xl font-bold text-gray-900">
          Full Image -{" "}
          {`${data.positionTitle && data.positionTitle} at ${data.CompanyName && data.CompanyName
            }`}
        </h1>
        <div className="w-full p-4  text-center mt-2  text-gray-500 dark:text-gray-400">
          {/* <Image
            src={
              props.jobsuggestion.data.imageUrl &&
              props.jobsuggestion.data.imageUrl
            }
            className="w-auto  m-auto sm:w-3/6 h-auto rounded-lg dark:shadow-gray-800"
            alt={data.positionTitle || "job full image"}
            priority
            height={1024}
            width={800}
          /> */}
          <img
            src={
              props.jobsuggestion.data.imageUrl &&
              props.jobsuggestion.data.imageUrl
            }
            className="w-auto  m-auto sm:w-3/6 h-auto rounded-lg dark:shadow-gray-800"
            alt={data.positionTitle || "job full image"}
          />
        </div>

        {/* --------------------------------suggestion  badges --------------------- */}

        <SimilarJob data1={data} />
      </div>
      <Footer />
    </div>
  );
};

export async function getServerSideProps(context) {
  const ipAddress = context.req.headers['x-forwarded-for'] || context.req.socket.remoteAddress;
  const jobsuggestion = await jobimage(context.query.fullimage[2], ipAddress);
  return {
    props: { jobsuggestion },
  };
}

export default jobsfullimage;
