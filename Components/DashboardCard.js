import React from "react";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import { DocumentTextIcon } from "@heroicons/react/24/outline";

const DashboardCard = (props) => {
  return (
    <div>
      <div className="overflow-hidden rounded-lg bg-white shadow ">
        <h2 className=" text-lg font-medium text-white leading-6  pl-4 pt-4 pb-4 bg-purple-700 flex">
          <props.iconTop
            className="h-6 w-6 text-white mr-1"
            aria-hidden="true"
          />
          {props.headingText}
        </h2>
        <div className="p-5">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <props.icon
                className="h-6 w-6 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <div className="ml-5 w-0 flex-1">
              <dl>
                <dt className="truncate text-lg font-medium text-gray-900">
                  {props.resume?.ResumeTitle}
                </dt>
                <dd>
                  <div className="text-sm font-medium text-gray-500 mt-2">
                    Updated Date : {props.resume?.updatedDate}
                  </div>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-1">
          <div className="text-sm flex justify-end">
            <div className="inline-flex ">
              <a

                href={props.resume?.resumePath}
                download
                className="flex items-center  justify-center rounded-md border border-transparent  px-2 py-2 text-base font-medium  text-indigo-700 "
              >
                {props.linkText}
                <ArrowDownTrayIcon className="h-4 w-4 text-cyan-70 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
