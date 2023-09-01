import React from "react";
import { useRouter } from "next/router";
import useRemoveSpaceNew from "../../CustomHook/useRemoveSpaceNew";

const JobInfoComp = (props) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-6 px-4 py-5 sm:px-6">
      <div className="sm:col-span-2">
        <dt className="text-base font-medium text-gray-900">Company</dt>
        <dd className="mt-1 text-sm text-gray-900 font-semibold">
          <a
            href={`/NewCompanyProfile/${useRemoveSpaceNew(
              props.jobDataDetail?.CompanyName
            )}/${props.jobDataDetail?.companyId}`}
            className={
              router.asPath.split("/")[1] !== "partner-jobs"
                ? "cursor-pointer text-indigo-500 hover:text-red-600"
                : "pointer-events-none text-indigo-500"
            }
          >
            {props.jobDataDetail?.CompanyName}
          </a>
        </dd>
      </div>
      <div className="sm:col-span-2">
        <dt className="text-base font-medium text-gray-900">Job Description</dt>
        <dd
          className="mt-1 text-sm text-gray-900"
          dangerouslySetInnerHTML={{
            __html: props.jobDataDetail.jobDescription,
          }}
        />
      </div>
      <div className="sm:col-span-2">
        <dt className="text-base font-medium text-gray-900">
          {`About ${props.jobDataDetail.CompanyName}`}
        </dt>
        <ul className="mt-1 text-sm text-gray-900">
          {props.jobDataDetail.companyDetails?.split("~").map((item, index) => {
            return (
              <li key={index} className="pt-2">
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default JobInfoComp;
