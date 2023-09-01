import { useRouter } from "next/router";
import React from "react";
import useRemoveSpaceNew from "../../CustomHook/useRemoveSpaceNew";

const SimilarJob = (props) => {
  const router = useRouter();
  const similarJobList = [
    {
      key: "1",
      jobs: props.data1.city ? `Jobs in ${props.data1.city}` : "",
      url: props.data1.city
        ? `/jobs-in-${useRemoveSpaceNew(props.data1.city)}`
        : "",
    },
    {
      key: "2",
      jobs: props.data1.city ? `Jobs this week in ${props.data1.city}` : "",
      url: props.data1.city
        ? `/jobsthisweek-in-${useRemoveSpaceNew(props.data1.city)}`
        : "",
    },
    {
      key: "3",
      jobs: props.data1.positionTitle
        ? `${props.data1.positionTitle} Jobs in ${props.data1.city}`
        : "",
      url: props.data1.positionTitle
        ? `/${useRemoveSpaceNew(
          props.data1.positionTitle
        )}-jobs-in-${useRemoveSpaceNew(props.data1.city)}`
        : "",
    },
    {
      key: "4",
      jobs: props.data1.positionTitle
        ? `${props.data1.positionTitle} Jobs`
        : "",
      url: props.data1.positionTitle
        ? `/${useRemoveSpaceNew(props.data1.positionTitle)}/designation`
        : "",
    },
    {
      key: "5",
      jobs: props.data1.CompanyName ? `${props.data1.CompanyName} Jobs` : "",
      url: props.data1.CompanyName
        ? router.pathname.split("/")[1] !== "partner-jobs"
          ? `/NewCompanyProfile/${useRemoveSpaceNew(props.data1.CompanyName)}/${props.data1.companyId
          }`
          : ""
        : "",
    },
    {
      key: "6",
      jobs: props.data1.Category ? `${props.data1.Category} Jobs` : "",
      url: props.data1.Category
        ? `/${useRemoveSpaceNew(props.data1.Category)}-jobs/categories`
        : "",
    },
    {
      key: "7",
      jobs: props.data1.Category
        ? `${props.data1.Category} Jobs in ${props.data1.city}`
        : "",
      url: props.data1.Category
        ? `/${useRemoveSpaceNew(
          props.data1.Category
        )}-jobs-in-${useRemoveSpaceNew(props.data1.city)}`
        : "",
    },
    {
      key: "8",
      jobs: props.data1.level ? `${props.data1.level} Jobs` : "",
      url: props.data1.level
        ? `/${useRemoveSpaceNew(props.data1.level)}-jobs/level`
        : "",
    },
    {
      key: "9",
      jobs: props.data1.level
        ? `${props.data1.level} Jobs in ${props.data1.city}`
        : "",
      url: props.data1.level
        ? `/${useRemoveSpaceNew(props.data1.level)}-jobs-in-${useRemoveSpaceNew(
          props.data1.city
        )}`
        : "",
    },
    {
      key: "10",
      jobs: props.data1.Industry ? `${props.data1.Industry} Jobs` : "",
      url: props.data1.Industry
        ? `/${useRemoveSpaceNew(props.data1.Industry)}-jobs/industry/${props.data1.industryId || props.data1.IndustryId
        }`
        : "",
    },
    {
      key: "11",
      jobs: props.data1.Industry
        ? `${props.data1.Industry} Jobs in ${props.data1.city}`
        : "",
      url: props.data1.Industry
        ? `/${useRemoveSpaceNew(
          props.data1.Industry
        )}-jobs-in-${useRemoveSpaceNew(props.data1.city)}`
        : "",
    },
  ];

  return (
    <div className="mt-5 overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h2 className="text-lg font-medium leading-6 text-gray-900">
          Similar Jobs
        </h2>
        <div className="mt-4">
          {similarJobList &&
            similarJobList.map((item, index) => {
              return (
                <a href={item.url} key={index}>
                  <button
                    type="button"
                    className={
                      item.jobs ? (
                        "text-left m-1 inline-flex items-center px-2 py-1 border-solid border-2 border-indigo-600  text-sm font-medium rounded-lg sm:rounded-full shadow-sm text-indigo-700 hover:bg-purple-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      ) : (
                        <></>
                      )
                    }
                  >
                    {item.jobs}
                  </button>
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default SimilarJob;
