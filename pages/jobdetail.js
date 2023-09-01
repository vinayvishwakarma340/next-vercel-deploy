import React, { useState, useEffect } from "react";
import InterestingJobs from "../Components/jobs/JobDetail/InterestingJobs";
import JobInfo from "../Components/jobs/JobDetail/JobInfo";
import SimilarJob from "../Components/jobs/JobDetail/SimilarJob";
import MainHeader from "../Components/MainHeader";
import { JobsDetailApi } from "./api/jobsApi";
import Footer from "../Components/Footer";
const jobdetail = (props) => {
  const [jobData, setJobData] = useState("");

  useEffect(() => {
    setJobData(props.JobDetailsData.data);
  }, []);

  return (
    <>
      <MainHeader />

      <div className="">
        <div className="main bg-zinc-100 container">
          <div className="sm:flex sm:justify-between box-border w-full">
            <div className=" right-side w-full sm:w-[75%] mt-12 sm:my-16 lg:my-8">
              <JobInfo jobDataDetail={jobData} />
              <SimilarJob />
            </div>
            <div className="right-side sm:ml-5 w-full sm:w-[25%] mt-12 pb-12 sm:my-16 lg:my-8 px-4 lg:px-0">
              <img
                className=" rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:left-0"
                src="https://timesascent.com/recruiterpostjob/thumbnail/694857/20221223/25164823_1.jpg"
                alt="Inbox user interface"
              />
              <InterestingJobs />
              <div className="place-content-center mt-5 pb-5 m-auto w-[300px] h-[250px] bg-gray-300 flex items-center text-center">
                <span className="w-full">300 x 250</span>
              </div>
            </div>
          </div>
        </div>

        <div data-dial-init class="fixed right-6 bottom-6 group">
          <div
            id="speed-dial-menu-text-inside-button-square"
            class="flex flex-col items-center mb-4 space-y-2"
          >
            <button
              type="button"
              class="w-[56px] h-[56px] text-gray-500 bg-white rounded-lg border border-gray-200 hover:text-gray-900 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
            >
              <svg
                aria-hidden="true"
                class="mx-auto mt-px w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z"></path>
              </svg>
              <span class="block mb-px text-xs font-medium">Share</span>
            </button>
            <button
              type="button"
              class="w-[56px] h-[56px] text-gray-500 bg-white rounded-lg border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
            >
              <svg
                aria-hidden="true"
                class="mx-auto mt-px w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span class="block mb-px text-xs font-medium">Print</span>
            </button>
            <button
              type="button"
              class="w-[56px] h-[56px] text-gray-500 bg-white rounded-lg border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
            >
              <svg
                aria-hidden="true"
                class="mx-auto mt-px w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clip-rule="evenodd"
                  d="M4 4a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-5L9 4H4zm7 5a1 1 0 00-2 0v1.586l-.293-.293a.999.999 0 10-1.414 1.414l2 2a.999.999 0 001.414 0l2-2a.999.999 0 10-1.414-1.414l-.293.293V9z"
                  fillRule="evenodd"
                ></path>
              </svg>
              <span class="block mb-px text-xs font-medium">Save</span>
            </button>
            <button
              type="button"
              class="w-[56px] h-[56px] text-gray-500 bg-white rounded-lg border border-gray-200 dark:border-gray-600 hover:text-gray-900 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
            >
              <svg
                aria-hidden="true"
                class="mx-auto mt-px w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 9a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H9a2 2 0 01-2-2V9z"></path>
                <path d="M5 3a2 2 0 00-2 2v6a2 2 0 002 2V5h8a2 2 0 00-2-2H5z"></path>
              </svg>
              <span class="block mb-px text-xs font-medium">Copy</span>
            </button>
          </div>
          <button
            type="button"
            data-dial-toggle="speed-dial-menu-text-inside-button-square"
            aria-controls="speed-dial-menu-text-inside-button-square"
            aria-expanded="false"
            class="flex justify-center items-center w-14 h-14 text-white bg-blue-700 rounded-lg hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
          >
            <svg
              aria-hidden="true"
              class="w-8 h-8 transition-transform group-hover:rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
            <span class="sr-only">Open actions menu</span>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default jobdetail;

export async function getServerSideProps(context) {

  const JobDetailsData = await JobsDetailApi();

  return { props: { JobDetailsData } };
}
