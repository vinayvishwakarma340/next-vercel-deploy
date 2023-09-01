import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import BreadCrumbs from "../Components/BreadCrumbs";
import JobEventCard from "../Components/jobs/JobEventCard";
import MainHeader from "../Components/MainHeader";
import * as gtag from "../lib/gtag";
import Footer from "../Components/Footer";
import Pagination from "../Components/NewPagination";
import { useState } from "react";
import { forherJobs } from "./api/jobsApi";
const LatestJobForHer = ({ props }) => {
  const router = useRouter();
  const totalData = props.forherJobsRes.data;

  const [maxPage, setMaxPage] = useState(
    Math.ceil(props.forherJobsRes.count / 10)
  );
  const [page, setPage] = useState(
    router.query.page ? parseInt(router.query.page) : 1
  );

  useEffect(() => {
    setPage(router.query.page ? parseInt(router.query.page) : 1);
  }, [router.query.page]);

  useEffect(() => {
    Event();
  }, [totalData]);
  const Event = () => {
    {
      totalData.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Company Impressions",
          label: router.asPath,
        });
      });
    }
    {
      totalData.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Job Impressions",
          label: item.JobId,
        });
      });
    }
  };
  const pages = [
    {
      name: "For her",
      href: "/ForHer",
      current: false,
    },
    {
      name: "Latest jobs for her",
      href: "#",
      current: true,
    },
  ];

  const pageChange = (val) => {
    router.push(`/latest-jobs-for-her/?page=${val}`);
  };

  return (
    <>
      <Head>
        <title>{"Times Ascent"}</title>
        <link
          rel="canonical"
          href={`https://timesascent.com/latest-jobs-for-her`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={
            "Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
          }
        />
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
        <meta property="og:title" content={"Times Ascent"} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={
            "Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
          }
        />
        <meta
          property="og:url"
          content={`https://timesascent.com/latest-jobs-for-her`}
        />
        <meta
          property="og:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta property="twitter:title" content={"Times Ascent"} />
        <meta
          property="twitter:description"
          content={
            "Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
          }
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
                  name: "For Her",
                  item: "https://timesascent.com/ForHer",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Job Search",
                },
              ],
            }),
          }}
        />
      </Head>
      <div className=" ">
        <MainHeader />

        <div className="min-h-full">
          <div className="relative   py-4 container lg:py-4 bg-white">
            <BreadCrumbs data={pages} />
            <div className="py-8">
              <div className="relative mb-2">
                <a href="/trending-jobs">
                  <h1 className="text-xl font-bold">Latest Jobs For Her</h1>
                </a>
              </div>
              <div className="lg:grid grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 sm:grid sm:grid-cols-3 gap-2 md:gap-4">
                {totalData.map((item, keyindex) => {
                  return (
                    <div className="mt-4 sm:mt-4">
                      <JobEventCard key={keyindex} data={item} />
                    </div>
                  );
                })}
              </div>
            </div>
            <div className=" relative flex justify-center  my-4 ">
              <Pagination
                page={page}
                maxPage={maxPage}
                pageChange={pageChange}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export async function getServerSideProps(context) {
  let props = {};
  let page = context.query.page ? context.query.page : 1;
  try {
    const forherJobsRes = await forherJobs({
      page: page,
      content: 10,
    });

    props = { forherJobsRes };
  } catch (err) {
    console.log(err, "error");
  }
  return { props: { props } };
}
export default LatestJobForHer;
