import React, { useState } from "react";
import { useEffect } from "react";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import NewPagination from "../Components/NewPagination";
// import Pagination from "../Components/Pagination";
// import Search from "../Components/Search";
import Alphabet from "../public/JSON/MainHeader/Alphabet.json";
// import companyFilter from "../public/JSON/companyFilter.json";
import Head from "next/head";
import BreadCrumbs from "../Components/BreadCrumbs";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";

const CompanyJobs = ({ props }) => {
  const router = useRouter();
  const [searchby, setSearchby] = useState("");
  const [searchTab, setSearchTab] = useState("All");
  const filterAlphabet = router.query.filter;
  const companyFilter = props.companiesData
  useEffect(() => {
    setSearchTab(filterAlphabet ? filterAlphabet : "All");
  }, [filterAlphabet])

  const filter = () => {
    if (searchTab === "All" && !searchby) {
      return companyFilter;
    } else if (searchby) {
      return companyFilter.filter((item) =>
        item.CompanyName?.toLowerCase()?.startsWith(
          searchby?.toString()?.toLowerCase()
        )
      );
    } else {
      return companyFilter.filter((item) =>
        item.CompanyName?.toLowerCase()?.startsWith(
          searchTab?.toString()?.toLowerCase()
        )
      );
    }
  };

  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(Math.ceil(filter().length / 5));
  const [data, setData] = useState(companyFilter.slice(0, 50));

  const CompanyEvent = () => {
    gtag.event({
      action: `${companyFilter.map((item) => {
        return item.CompanyName;
      })}`,
      category: "Company Impressions",
      label: router.asPath,
    });
  };
  useEffect(() => {
    CompanyEvent();
  }, [companyFilter]);

  useEffect(() => {
    setMaxPage(Math.ceil(filter().length / 50));
    setData(filter().slice((page - 1) * 50, (page - 1) * 50 + 50));
  }, [searchby, searchTab]);

  const pageChange = (val) => {
    setPage(val);
    setData(filter().slice((val - 1) * 50, (val - 1) * 50 + 50));
  };

  const filteredtitle = filter();
  const pages = [
    {
      name: "Jobs List",
      href: "/jobs",
      current: false,
    },
    {
      name: "Company",
      href: "#",
      current: true,
    },
  ];

  return (
    <>
      <Head>
        <title>{`Jobs By companies - timesascent.com`}</title>
        <link rel="canonical" href="https://timesascent.com/companies-jobs" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Job Vacancies by companies - Timesascent.com"
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
        <meta
          property="og:title"
          content="Jobs By companies - timesascent.com "
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Job Vacancies by companies - Timesascent.com"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/companies-jobs"
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
          content="Jobs By companies - timesascent.com "
        />
        <meta
          property="twitter:description"
          content="Job Vacancies by companies - Timesascent.com"
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
                  position: 1,
                  name: "Job List",
                  item: "https://timesascent.com/jobs",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Company Jobs",
                },
              ],
            }),
          }}
        />
      </Head>
      <div className="">
        <MainHeader />
        <div className="relative   py-4 container lg:py-4 bg-white">
          <BreadCrumbs data={pages} />
          <div className="sm:flex sm:justify-between items-center w-full pt-6 border-b border-gray-300 sm:pb-8 pb-12">
            <h1 className="text-xl font-bold text-center">Jobs by Company</h1>
            <div className="flex items-center ">
              <div className="pr-2 h-10 w-full pt-6 sm:pt-0">
                <input
                  type={"search"}
                  placeholder="Search"
                  className="rounded w-full"
                  value={searchby}
                  onChange={(e) => {
                    setSearchby(e.target.value);
                    setPage(1);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="my-8 sm:my-8 grid grid-col-5 sm:grid-cols-12 grid-cols-6 mx-auto">
            <div
              className={
                searchTab === "All"
                  ? "cursor-pointer border border-whhite bg-purple-500 text-white text-center py-1"
                  : " bg-purple-400 border-white cursor-pointer border text-center text-white py-1"
              }
              onClick={() => {
                setSearchTab("All");
                setPage(1);
              }}
            >
              All
            </div>
            {Alphabet.map((item) => {
              return (
                <div
                  className={
                    searchTab === item.name
                      ? "cursor-pointer border border-whhite bg-purple-500 text-white text-center py-1"
                      : " bg-purple-400 border-white cursor-pointer border text-center text-white py-1"
                  }
                  onClick={() => {
                    setSearchTab(item.name);
                    setPage(1);
                  }}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
          {/* <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid- py-2 gap-x-4 gap-y-2'> */}
          {data.map((item) => {
            return (
              <a
                href={
                  "/NewCompanyProfile/" +
                  (item.CompanyName || "company")
                    .split(" ")
                    .join("-")
                    .split(".")
                    .join("")
                    .toLowerCase() +
                  "/" +
                  item.keyIndex
                }
                //
                className="text-left m-1 inline-flex items-center px-2 py-1 border-solid border border-indigo-600  text-sm font-medium rounded-lg sm:rounded-lg shadow-sm text-indigo-700 hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {`${item.CompanyName?.split(" ")[0]?.charAt(0).toUpperCase() +
                  item.CompanyName?.split(" ")[0]?.slice(1).toLowerCase() +
                  " " +
                  (item.CompanyName?.split(" ")[1]
                    ? item.CompanyName?.split(" ")[1]?.charAt(0).toUpperCase() +
                    item.CompanyName?.split(" ")[1]?.slice(1).toLowerCase()
                    : "") +
                  " " +
                  (item.CompanyName?.split(" ")[2]
                    ? item.CompanyName?.split(" ")[2]?.charAt(0).toUpperCase() +
                    item.CompanyName?.split(" ")[2]?.slice(1).toLowerCase()
                    : "") +
                  " " +
                  (item.CompanyName?.split(" ")[3]
                    ? item.CompanyName?.split(" ")[3]?.charAt(0).toUpperCase() +
                    item.CompanyName?.split(" ")[3]?.slice(1).toLowerCase()
                    : "")
                  }(${item.NumberOfPosition})`}
              </a>
            );
          })}
          {/* </div> */}
        </div>
        <div className="relative flex justify-center  py-4 container lg:pt-10 bg-white">
          <NewPagination
            maxPage={maxPage}
            page={page}
            pageChange={pageChange}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};
export async function getStaticProps() {
  const companies = await fetch(
    `https://timesascent.com/json/companyFilter.json`
  );
  const companiesData = await companies.json();

  let props = {
    companiesData
  }
  return { props: { props }, revalidate: 600 };
}

export default CompanyJobs;
