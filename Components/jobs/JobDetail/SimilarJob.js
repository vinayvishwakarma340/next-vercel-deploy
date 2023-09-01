import { useRouter } from "next/router";
import React from "react";
import useRemoveSpaceUrl from "../../CustomHook/useRemoveSpaceUrl";

const SimilarJob = (props) => {
  const router = useRouter();

  let citiesTagClouds = [];
  let similarJobList = [];

  const tagCloudByTypeFunc = () => {
    const designationJobs = props.data1?.positionTitle
      ? {
        key: "4",
        jobs: props.data1?.positionTitle
          ? `${props.data1?.positionTitle} Jobs`
          : "",
        url: props.data1?.positionTitle
          ? `/${useRemoveSpaceUrl(props.data1?.positionTitle)}/designation`
          : "",
      }
      : null;
    const companyJobs = props.data1?.CompanyName
      ? {
        key: "5",
        jobs: props.data1?.CompanyName
          ? `${props.data1?.CompanyName} Jobs`
          : "",
        url: props.data1?.CompanyName
          ? router.pathname.split("/")[1] !== "partner-jobs"
            ? `/NewCompanyProfile/${useRemoveSpaceUrl(
              props.data1?.CompanyName
            )}/${props.data1?.companyId}`
            : ""
          : "",
      }
      : null;
    const categoryJobs = props.data1?.Category
      ? {
        key: "6",
        jobs: props.data1?.Category ? `${props.data1?.Category} Jobs` : "",
        url: props.data1?.Category
          ? `/${useRemoveSpaceUrl(props.data1?.Category)}-jobs/categories`
          : "",
      }
      : null;
    const levelJobs = props.data1?.level
      ? {
        key: "8",
        jobs: props.data1?.level ? `${props.data1?.level} Jobs` : "",
        url: props.data1?.level
          ? `/${useRemoveSpaceUrl(props.data1?.level)}-jobs/level`
          : "",
      }
      : null;
    const industryJobs = props.data1?.Industry
      ? {
        key: "10",
        jobs: props.data1?.Industry ? `${props.data1?.Industry} Jobs` : "",
        url: props.data1?.Industry
          ? `/${useRemoveSpaceUrl(props.data1?.Industry)}-jobs/industry/${props.data1?.industryId || props.data1?.IndustryId
          }`
          : "",
      }
      : null;

    return [
      designationJobs,
      companyJobs,
      categoryJobs,
      levelJobs,
      industryJobs,
    ].filter(Boolean);
  };

  citiesTagClouds = props.data1.city
    ? props.data1?.city?.split(",")?.flatMap((item, index) => {
      const positionTitleJobs = props.data1?.positionTitle
        ? {
          key: `${item ? item : props.data1.locationName}-${index}`,
          jobs: `${props.data1.positionTitle} Jobs in ${item ? item : props.data1.locationName
            }`,
          url: `/${useRemoveSpaceUrl(
            props.data1.positionTitle
          )}-jobs-in-${useRemoveSpaceUrl(
            item ? item : props.data1.locationName
          )}`,
        }
        : null;
      const categoryJobs = props.data1?.Category
        ? {
          key: `${item ? item : props.data1.locationName}-${index}`,
          jobs: `${props.data1.Category} Jobs in ${item ? item : props.data1.locationName
            }`,
          url: `/${useRemoveSpaceUrl(
            props.data1.Category
          )}-jobs-in-${useRemoveSpaceUrl(
            item ? item : props.data1.locationName
          )}`,
        }
        : null;
      const levelJobs = props.data1?.level
        ? {
          key: `${item ? item : props.data1.locationName}-${index}`,
          jobs: `${props.data1.level} Jobs in ${item ? item : props.data1.locationName
            }`,
          url: `/${useRemoveSpaceUrl(
            props.data1.level
          )}-jobs-in-${useRemoveSpaceUrl(
            item ? item : props.data1.locationName
          )}`,
        }
        : null;
      const industryJobs = props.data1?.Industry
        ? {
          key: `${item ? item : props.data1.locationName}-${index}`,
          jobs: `${props.data1.Industry} Jobs in ${item ? item : props.data1.locationName
            }`,
          url: `/${useRemoveSpaceUrl(
            props.data1.Industry
          )}-jobs-in-${useRemoveSpaceUrl(
            item ? item : props.data1.locationName
          )}`,
        }
        : null;

      return [
        {
          key: `${item ? item : props.data1.locationName}-${index}`,
          jobs: `Jobs in ${item ? item : props.data1.locationName}`,
          url: `/jobs-in-${useRemoveSpaceUrl(
            item ? item : props.data1.locationName
          )}`,
        },
        {
          key: `sr-${index + 2}`,
          jobs: item
            ? `Jobs this week in ${item ? item : props.data1.locationName}`
            : "",
          url: item
            ? `/jobsthisweek-in-${useRemoveSpaceUrl(
              item ? item : props.data1.locationName
            )}`
            : "",
        },
        positionTitleJobs,
        categoryJobs,
        levelJobs,
        industryJobs,
      ].filter(Boolean);
    })
    : [];

  similarJobList = tagCloudByTypeFunc();

  // job this week tag clouds
  const dateConvertHandler = (date) => {
    const dateObject = new Date(date);
    const timestamp = dateObject.getTime();
    const dayCount = Math.floor(timestamp / (24 * 60 * 60 * 1000));
    return dayCount;
  };
  const d = new Date();
  const date = d.toISOString();
  const todayDate = dateConvertHandler(date);
  const jobPostedDate = dateConvertHandler(props.data1.datePosted);
  const remainingHours = todayDate - jobPostedDate;
  const isThisWeek = 7 >= remainingHours ? true : false;

  const allTags = [...citiesTagClouds, ...similarJobList];

  let allTagClouds = allTags.length > 0 ? allTags : [];

  const withoutThisWeekJobs = allTagClouds.filter((item) => {
    return !item.jobs.includes("week");
  });

  allTagClouds = isThisWeek ? allTagClouds : withoutThisWeekJobs;

  return (
    <div className="sm:mt-5 ">
      {allTagClouds.length > 0 && (
        <div className="px-4 sm:py-5 sm:px-6">
          <h2 className="text-lg mb-2 font-medium leading-6 text-gray-900">
            Similar Jobs
          </h2>
          <div className="overflow-x-auto hide-scroll-bar">
            <div className="overflow-x-hidden ">
              {allTagClouds?.map((item, index) => {
                return (
                  <a
                    href={item?.url}
                    className="shrink-0 break-all	"
                    key={index + 1}
                  >
                    <button
                      type="button"
                      className={
                        item?.jobs ? (
                          "text-left m-1 inline-flex transition-all ease-in-out delay-75 items-center px-2 py-1 border-solid border border-timesPurple  text-sm font-base rounded-lg sm:rounded-full shadow-sm text-timesPurple hover:bg-timesHoverBtn hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-timesPurple break-words	"
                        ) : (
                          <></>
                        )
                      }
                    >
                      {item?.jobs}
                    </button>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SimilarJob;
