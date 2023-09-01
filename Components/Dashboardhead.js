import React from "react";
import { DevicePhoneMobileIcon } from "@heroicons/react/24/outline";
import {
  BuildingOfficeIcon,
  PencilSquareIcon,
} from "@heroicons/react/20/solid";
import { ThreeDots } from "react-loader-spinner";
import Link from "next/link";
const Dashboardhead = (props) => {
  return (
    <div className="bg-white shadow">
      <div className="px-4 sm:px-6 lg:mx-auto lg:max-w-7xl lg:px-8">
        <div className="py-6 md:flex md:items-center md:justify-between lg:border-t lg:border-gray-200">
          <div className="min-w-0 flex-1">
            {/* Profile */}
            <div className="flex items-center">
              <label htmlFor="uploadprofile">
                <img
                  className=" h-16 w-16 rounded-full sm:block cursor-pointer hidden"
                  src={props.details?.imagePath}
                  alt=""
                />
              </label>
              <input
                type="file"
                id="uploadprofile"
                htmlFor="uploadprofile"
                className="hidden cursor-pointer"
                hidden
                accept=".png, .jpg, .jpeg"
                onChange={(e) => {
                  props.updateCandidateProfilePic(e.target.files[0]);
                }}
              />
              <div>
                <div className="flex items-center">
                  <label htmlFor="uploadprofile">
                    <img
                      className="h-16 w-16 rounded-full sm:hidden"
                      src={props.details?.imagePath}
                      alt=""
                    />
                  </label>
                  <input
                    type="file"
                    id="uploadprofile"
                    htmlFor="uploadprofile"
                    className="hidden cursor-pointer"
                    hidden
                    accept=".png, .jpg, .jpeg"
                    onChange={(e) => {
                      props.updateCandidateProfilePic(e.target.files[0]);
                    }}
                  />
                  <h1 className="ml-3 text-xl font-bold leading-7 text-gray-900 sm:truncate sm:leading-9">
                    Welcome Back
                    {props.details?.firstName &&
                      props.details?.lastName === "" ? (<>{` ${props.details?.firstName}`}</>
                    ) : (
                      <>
                        {` ${props.details?.firstName} ${props.details?.lastName}`}
                      </>
                    )}
                  </h1>
                </div>
                <dl className="mt-2 flex flex-col sm:ml-3 sm:mt-1 sm:flex-row sm:flex-wrap">
                  <dt className="sr-only">Company</dt>
                  {props.details?.Country ? (
                    <dd className="flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6">
                      <BuildingOfficeIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      {props.details?.Country}
                    </dd>
                  ) : (
                    ""
                  )}

                  <dt className="sr-only">Account status</dt>
                  <dd className="mt-3 flex items-center text-sm font-medium capitalize text-gray-500 sm:mr-6 sm:mt-0">
                    <DevicePhoneMobileIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    {props.details?.mobile}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
          <div className="mt-6 flex space-x-3 md:mt-0 md:ml-4">
            <label
              htmlFor="actual-btn232"
              className=" cursor-pointer inline-flex items-center rounded-md border border-transparent bg-purple-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
            >
              <input
                onChange={(e) => {
                  props.fetchCV(e.target.files[0]);
                }}
                accept=".doc, .docx,.pdf,.jpg,.jpeg,.png"
                type="file"
                id="actual-btn232"
                hidden
              />{" "}
              {props.loading ? (
                <ThreeDots
                  height="5"
                  width="65"
                  radius="9"
                  color="white"
                  ariaLabel="three-dots-loading"
                  wrapperStyle={{}}
                  wrapperClassName=""
                  visible={true}
                />
              ) : (
                "Upload Resume"
              )}
            </label>
            <a href="/jobs">
              <button
                type="button"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
              >
                Apply Job Now
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardhead;
