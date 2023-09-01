import React from "react";
import Footer from "../Components/Footer";
import BreadCrumbs from "../Components/BreadCrumbs";
import MainHeader from "../Components/MainHeader";
import { jobimage } from "./api/jobimage";
import Head from "next/head";
import { useRouter } from "next/router";

const jobsfullimage = (props) => {
  const router = useRouter();
  const pages = [
    { name: "job", href: "/https://timesascent.com/jobs", current: false },
    {
      name: "Job Detail",
      href: "/https://timesascent.com/new-jobs",
      current: false,
    },
    { name: "Job Full Image", href: "/salary-cal", current: true },
  ];

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />

        <title>{`Times Ascent Ad Image for ${props.jobsuggestion.data.CompanyName &&
          props.jobsuggestion.data.CompanyName
          } -timesascent.com	`}</title>
        <meta
          name="description"
          content={`Times Ascent Ad Image for ${props.jobsuggestion.data.CompanyName &&
            props.jobsuggestion.data.CompanyName
            } -timesascent.com	 `}
        />
        <link
          rel="canonical"
          href={`https://timesascent.com/jobs-full-image${router.asPath}`}
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
          content={`Times Ascent Ad Image for ${props.jobsuggestion.data.CompanyName &&
            props.jobsuggestion.data.CompanyName
            } -timesascent.com	`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`Times Ascent Ad Image for ${props.jobsuggestion.data.CompanyName &&
            props.jobsuggestion.data.CompanyName
            } -timesascent.com	 `}
        />
        <meta
          property="og:url"
          content={`https://timesascent.com/jobs-full-image${router.asPath}`}
        />
        <meta
          property="og:image"
          content={
            props.jobsuggestion.data.imageUrl &&
            props.jobsuggestion.data.imageUrl
          }
        />
        <meta
          property="twitter:image"
          content={
            props.jobsuggestion.data.imageUrl &&
            props.jobsuggestion.data.imageUrl
          }
        />
        <meta
          property="twitter:title"
          content={`Times Ascent Ad Image for ${props.jobsuggestion.data.CompanyName &&
            props.jobsuggestion.data.CompanyName
            } -timesascent.com	`}
        />
        <meta
          property="twitter:description"
          content={`Times Ascent Ad Image for ${props.jobsuggestion.data.CompanyName &&
            props.jobsuggestion.data.CompanyName
            } -timesascent.com	 `}
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

      <MainHeader />

      <div className="relative py-4 md:py-6 lg:py-8 container">
        <div className=" py-4 ">
          <BreadCrumbs data={pages} />
        </div>

        <div className="p-2 text-center text-xl font-bold text-gray-900  sm:text-2xl">
          Full Image -{" "}
          {`${props.jobsuggestion.data.positionTitle &&
            props.jobsuggestion.data.positionTitle
            } at ${props.jobsuggestion.data.CompanyName &&
            props.jobsuggestion.data.CompanyName
            }`}
        </div>
        <div className="w-full p-4   text-center mt-2        text-gray-500 dark:text-gray-400">
          <img
            src={
              props.jobsuggestion.data.imageUrl &&
              props.jobsuggestion.data.imageUrl
            }
            className=' w-auto  m-auto sm:w-3/6 h-auto rounded-lg   dark:shadow-gray-800"  alt="'
          />
        </div>
        <div className="flex justify-center  mb-6">
          <button
            type="submit"
            className=" w-full cursor-pointer  sm:w-2/6 mt-6 block p-2  rounded-md border border-transparent bg-timesPurple h-full text-base font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-puple-700 sm:px-10 "
          >
            Easy Apply
          </button>
        </div>

        <div className="w-full p-4 mt-2 border border-gray-200 rounded-lg text-sm text-left bg-slate-50 text-gray-500 dark:text-gray-400">
          <div className="p-2 text-xl font-bold text-gray-900  sm:text-2xl">
            Similar Jobs
          </div>

          <div className="p-2 flex flex-wrap sm:flex">
            <div className="p-1">
              <div class="bg-purple-100 cursor-pointer  break-all   w-fit  text-purple-800 text-sm font-medium mr-2 px-3.5 py-2.5 rounded dark:bg-blue-200 dark:text-purple-800">
                Jobs this week in{" "}
                {props.jobsuggestion.data.city &&
                  props.jobsuggestion.data.city.split(",")[0]}{" "}
              </div>
            </div>
            <div className="p-1">
              <div class="bg-purple-100 cursor-pointer break-all   w-fit  text-purple-800 text-sm font-medium mr-2 px-3.5 py-2.5 rounded dark:bg-blue-200 dark:text-purple-800">
                {props.jobsuggestion.data.Category} jobs in{" "}
                {props.jobsuggestion.data.city &&
                  props.jobsuggestion.data.city.split(",")[0]}{" "}
              </div>
            </div>
            <div className="p-1">
              <div class="bg-purple-100 cursor-pointer break-all  w-fit  text-purple-800 text-sm font-medium mr-2 px-3.5 py-2.5 rounded dark:bg-blue-200 dark:text-purple-800">
                {props.jobsuggestion.data.Industry} jobs in{" "}
                {props.jobsuggestion.data.city &&
                  props.jobsuggestion.data.city.split(",")[0]}{" "}
              </div>
            </div>
            <div className="p-1">
              <div class="bg-purple-100 cursor-pointer break-all  w-fit  text-purple-800 text-sm font-medium mr-2 px-3.5 py-2.5 rounded dark:bg-blue-200 dark:text-purple-800">
                {props.jobsuggestion.data.positionTitle} jobs in{" "}
                {props.jobsuggestion.data.city &&
                  props.jobsuggestion.data.city.split(",")[0]}{" "}
              </div>
            </div>

            <div className="p-1">
              <div class="bg-purple-100 cursor-pointer break-all  w-fit  text-purple-800 text-sm font-medium mr-2 px-3.5 py-2.5 rounded dark:bg-blue-200 dark:text-purple-800">
                Jobs this week in{" "}
                {props.jobsuggestion.data.city &&
                  props.jobsuggestion.data.city.split(",")[1]}{" "}
              </div>
            </div>
            <div className="p-1">
              <div class="bg-purple-100 cursor-pointer break-all  w-fit  text-purple-800 text-sm font-medium mr-2 px-3.5 py-2.5 rounded dark:bg-blue-200 dark:text-purple-800">
                {props.jobsuggestion.data.positionTitle} jobs in{" "}
                {props.jobsuggestion.data.city &&
                  props.jobsuggestion.data.city.split(",")[1]}{" "}
              </div>
            </div>
            <div className="p-1">
              <div class="bg-purple-100 cursor-pointer break-all  w-fit  text-purple-800 text-sm font-medium mr-2 px-3.5 py-2.5 rounded dark:bg-blue-200 dark:text-purple-800">
                {props.jobsuggestion.data.Category} jobs in{" "}
                {props.jobsuggestion.data.city &&
                  props.jobsuggestion.data.city.split(",")[1]}{" "}
              </div>
            </div>
            <div className="p-1">
              <div class="bg-purple-100 cursor-pointer break-all  w-fit  text-purple-800 text-sm font-medium mr-2 px-3.5 py-2.5 rounded dark:bg-blue-200 dark:text-purple-800">
                {props.jobsuggestion.data.Industry} jobs in{" "}
                {props.jobsuggestion.data.city &&
                  props.jobsuggestion.data.city.split(",")[1]}{" "}
              </div>
            </div>
            <div className="p-1">
              <div class="bg-purple-100 cursor-pointer break-all  w-fit  text-purple-800 text-sm font-medium mr-2 px-3.5 py-2.5 rounded dark:bg-blue-200 dark:text-purple-800">
                {props.jobsuggestion.data.Category} jobs
              </div>
            </div>
            <div className="p-1">
              <div class="bg-purple-100 cursor-pointer break-all  w-fit  text-purple-800 text-sm font-medium mr-2 px-3.5 py-2.5 rounded dark:bg-blue-200 dark:text-purple-800">
                {props.jobsuggestion.data.Industry} jobs
              </div>
            </div>
            <div className="p-1">
              <div class="bg-purple-100 cursor-pointer break-all  w-fit  text-purple-800 text-sm font-medium mr-2 px-3.5 py-2.5 rounded dark:bg-blue-200 dark:text-purple-800">
                {props.jobsuggestion.data.CompanyName} jobs
              </div>
            </div>
            <div className="p-1">
              <div class="bg-purple-100 cursor-pointer break-all  w-fit  text-purple-800 text-sm font-medium mr-2 px-3.5 py-2.5 rounded dark:bg-blue-200 dark:text-purple-800">
                {props.jobsuggestion.data.positionTitle} jobs
              </div>
            </div>
            <div className="p-1">
              <div class="bg-purple-100 cursor-pointer break-all  w-fit  text-purple-800 text-sm font-medium mr-2 px-3.5 py-2.5 rounded dark:bg-blue-200 dark:text-purple-800">
                {props.jobsuggestion.data.level} jobs
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export async function getServerSideProps(context) {
  const jobsuggestion = await jobimage();

  return {
    props: { jobsuggestion },
  };
}

export default jobsfullimage;
