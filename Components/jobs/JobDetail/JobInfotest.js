import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import useRemoveSpaceNew from "../../CustomHook/useRemoveSpaceNew";
import Image from "next/image";

const JobInfo = (props) => {
  const router = useRouter();

  return (
    <div>
      <div className="px-4 py-5 flex flex-wrap items-center justify-between sm:flex-nowrap sm:px-6">
        <div>
          <h1 className="text-lg font-medium leading-6 text-gray-900">{`${props.jobDataDetail.positionTitle} at ${props.jobDataDetail.CompanyName}`}</h1>
          <p className="mt-1 max-w-2xl text-sm text-gray-500">
            {props.jobDataDetail.level}
          </p>
        </div>
        <div
          className="sm:ml-4 mt-2 flex-shrink-0"
          onClick={() => props.executeScrollAbout()}
        >
          <button
            type="button"
            className="relative inline-flex items-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Easy apply
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 ">
          <div className="flex flex-col sm:flex-row w-full">
            <a
              className={
                router.asPath.split("/")[1] !== "partner-jobs"
                  ? "cursor-pointer m-auto"
                  : "pointer-events-none m-auto border"
              }
              target={"_self"}
              href={`/jobs-full-image/${useRemoveSpaceNew(
                props.jobDataDetail.CompanyName
              )}/${useRemoveSpaceNew(props.jobDataDetail.Category)}/${props.jobDataDetail.JobId
                }`}
            >
              <div
                className={"h-56 w-60 sm:w-44 sm:h-44 flex-shrink-0 relative"}
              >
                <Image
                  src={props.jobDataDetail.imageUrl}
                  fill
                  alt={props.jobDataDetail?.CompanyName}
                  quality={30}
                />
              </div>
            </a>
            <div className="grid grid-cols-2 gap-x-4 pt-4 sm:pt-0 gap-y-2 w-full sm:w-4/5 sm:pl-12 ">
              <div className="sm:col-span-1 pr-2">
                <dt className="text-sm font-medium text-gray-900">Position</dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {props.jobDataDetail.positionTitle}
                </dd>
              </div>
              <div className="sm:col-span-1 pr-2">
                <dt className="text-sm font-medium text-gray-900">Location</dt>
                <dd className="mt-1 text-sm text-gray-900">{`${props.jobDataDetail.locationName}`}</dd>
              </div>
              <div className="sm:col-span-1 pr-2">
                <dt className="text-sm font-medium text-gray-900">
                  Publish Date
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {props.jobDataDetail.issueDate}
                </dd>
              </div>
              <div className="sm:col-span-1 pr-2">
                <dt className="text-sm font-medium text-gray-900">
                  Salary expectation
                </dt>
                <dd className="mt-1 text-sm text-gray-900">
                  {props.jobDataDetail.minCtc
                    ? `₹${props.jobDataDetail.minCtc} - ₹${props.jobDataDetail.maxCtc}`
                    : "Salary not provided."}
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
