import React from "react";
import useRemoveSpaceNew from "../../CustomHook/useRemoveSpaceNew";

const SimilarJobCard = ({ jobDetail }) => {
//   console.log(jobDetail);
  return (
    <div class="bg-white  shadow-xl shadow-gray-100 w-full max-w-4xl flex flex-col sm:flex-row gap-3 sm:items-center  justify-between px-5 py-4">
      <div>
        <span class="text-purple-800 line-clamp-1 text-sm">
          {jobDetail.CompanyName}
        </span>
        <h3 class="font-semibold line-clamp-1 mt-px">{jobDetail.positionTitle}</h3>
        <div class="flex items-center gap-3 mt-2">
          <span class="bg-purple-100 text-purple-700 rounded-full line-clamp-1 px-3 py-1 text-sm">
            {jobDetail.Category}
          </span>
          <span class="text-slate-600 text-sm flex gap-1 items-center">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>{" "}
            {jobDetail.locationName}
          </span>
        </div>
      </div>
      <div>
        <a
          href={`/new-jobs/${useRemoveSpaceNew(
            jobDetail.positionTitle
          )}/${useRemoveSpaceNew(jobDetail.CompanyName)}/${useRemoveSpaceNew(
            jobDetail.locationName
          )}/${jobDetail.JobId}`}
          class="bg-timesPurple text-sm text-white font-medium px-4 py-2 rounded-md flex gap-1 items-center"
        >
          Apply
        </a>
      </div>
    </div>
  );
};

export default SimilarJobCard;
