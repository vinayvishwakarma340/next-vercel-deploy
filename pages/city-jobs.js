import React, { useState } from "react";
import { useEffect } from "react";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import NewPagination from "../Components/NewPagination";
import Pagination from "../Components/Pagination";
import Search from "../Components/Search";
import Alphabet from "../public/JSON/MainHeader/Alphabet.json";
// import cityFilter from "../public/JSON/cityFilter.json";
import Head from "next/head";
import BreadCrumbs from "../Components/BreadCrumbs";

const CityJobs = ({ props }) => {
  const [searchby, setSearchby] = useState("");
  const [searchTab, setSearchTab] = useState("All");
  const cityFilter = props.cityFilterData
  const filter = () => {
    if (searchTab === "All" && !searchby) {
      return cityFilter;
    } else if (searchby) {
      return cityFilter.filter((item) =>
        item.location
          ?.toLowerCase()
          ?.startsWith(searchby?.toString()?.toLowerCase())
      );
    } else {
      return cityFilter.filter((item) =>
        item.location
          ?.toLowerCase()
          ?.startsWith(searchTab?.toString()?.toLowerCase())
      );
    }
  };

  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(Math.ceil(filter().length / 5));
  const [data, setData] = useState(cityFilter.slice(0, 50));

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
      name: "City",
      href: "#",
      current: true,
    },
  ];

  return (
    <>
      <Head>
        <title>{`Jobs By city - timesascent.com`}</title>
        <link rel="canonical" href="https://timesascent.com/city-jobs" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Apply for New Job Vacancies in all city across India and abroad. Click on city to view Latest Jobs"
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
        <meta property="og:title" content="Jobs By city - timesascent.com " />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Apply for New Job Vacancies in all city across India and abroad. Click on city to view Latest Jobs"
        />
        <meta property="og:url" content="https://timesascent.com/city-jobs" />
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
          content="Jobs By city - timesascent.com "
        />
        <meta
          property="twitter:description"
          content="Apply for New Job Vacancies in all city across India and abroad. Click on city to view Latest Jobs"
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
                  name: "City Jobs",
                },
              ],
            }),
          }}
        />
      </Head>
      <div className=" ">
        <MainHeader />
        <div className="relative   py-4 container lg:py-4 bg-white">
          <BreadCrumbs data={pages} />
          <div className="sm:flex sm:justify-between items-center w-full pt-6 border-b border-gray-300 sm:pb-8 pb-12">
            <h1 className="text-xl font-bold text-center">Jobs by City</h1>
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
          {/* <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 py-2 gap-x-4 gap-y-2'> */}
          {data.map((item) => {
            return (
              <a
                href={`jobs-in-${item.location
                  .replace(/[^a-zA-Z ]/g, " ")
                  .split(" ")
                  .join("-")
                  .split(" ")
                  .join("-")
                  .split("--")
                  .join("-")
                  .toLowerCase()}`}

                className="text-left m-1 inline-flex items-center px-2 py-1 border-solid border border-indigo-600  text-sm font-medium rounded-lg sm:rounded-lg shadow-sm text-indigo-700 hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                {`${item.location?.split(" ")[0]?.charAt(0).toUpperCase() +
                  item.location?.split(" ")[0]?.slice(1).toLowerCase() +
                  " " +
                  (item.location?.split(" ")[1]
                    ? item.location?.split(" ")[1]?.charAt(0).toUpperCase() +
                    item.location?.split(" ")[1]?.slice(1).toLowerCase()
                    : "")
                  }(${item.numberOfPosition})`}
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
  const cityFilter = await fetch(
    `https://timesascent.com/json/cityFilter.json`
  );
  const cityFilterData = await cityFilter.json();

  let props = {
    cityFilterData
  }
  return { props: { props }, revalidate: 600 };
}
export default CityJobs;
