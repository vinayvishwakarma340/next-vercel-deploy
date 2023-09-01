import React, { useState } from "react";
import { BriefcaseIcon, EyeIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
import useRemoveSpaceUrl from "../../CustomHook/useRemoveSpaceUrl";
import Image from "next/image";

const JobInfo = (props) => {
  const [showImage, setShowImage] = useState(false);
  const router = useRouter();

  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-4 flex flex-wrap items-center justify-between sm:flex-nowrap sm:px-6">
        <div className="flex flex-col">
          <div className="">
            <a
              className={
                router.asPath.split("/")[1] !== "partner-jobs"
                  ? "cursor-pointer float-left mr-2"
                  : "pointer-events-none float-left mr-2"
              }
              target={"_self"}
              href={`/jobs-full-image/${useRemoveSpaceUrl(
                props.jobDataDetail.CompanyName
              )}/${useRemoveSpaceUrl(props.jobDataDetail.Category)}/${props.jobDataDetail.JobId
                }`}
            >
              <div
                className={
                  "h-20 w-20 rounded-sm border border-gray-400 flex-shrink-0 sm:hidden block relative"
                }
              >
                <Image
                  src={
                    showImage
                      ? props.jobDataDetail?.imageUrl
                      : "https://timesascent.com/TimeDummyLogo.webp"
                  }
                  onLoadingComplete={() => setShowImage(true)}
                  // placeholder="blur"
                  // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
                  style={{ borderRadius: "5px", objectFit: "cover" }}
                  fill
                  sizes="(max-width: 200px) 100vw"
                  priority
                  alt={props.jobDataDetail?.CompanyName}
                />
              </div>
            </a>
            {/* <div className="flex items-center text-sm text-gray-500">
                <div className="w-5 h-5">
                  <HandThumbUpIcon />
                </div>
                <span className="ml-2">10</span>
              </div> */}
            <div
            // className={
            //   router.asPath.split("/")[1] !== "partner-jobs"
            //     ? "cursor-pointer"
            //     : "pointer-events-none"
            // }
            // target={"_self"}
            // href={`/jobs-full-image/${useRemoveSpaceUrl(
            //   props.jobDataDetail.CompanyName
            // )}/${useRemoveSpaceUrl(props.jobDataDetail.Category)}/${props.jobDataDetail.JobId
            //   }`}
            >
              <h1 className="text-md sm:text-lg font-medium leading-6 text-gray-900">
                {`${props.jobDataDetail.positionTitle} at ${props.jobDataDetail.CompanyName} - ${props.jobDataDetail.locationName}`}{" "}
              </h1>
            </div>
            <div
            // className={
            //   router.asPath.split("/")[1] !== "partner-jobs"
            //     ? "cursor-pointer"
            //     : "pointer-events-none"
            // }
            // target={"_self"}
            // href={`/jobs-full-image/${useRemoveSpaceUrl(
            //   props.jobDataDetail.CompanyName
            // )}/${useRemoveSpaceUrl(props.jobDataDetail.Category)}/${props.jobDataDetail.JobId
            //   }`}
            >
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                {props.jobDataDetail.level}
              </p>
            </div>
          </div>
        </div>
        <div
          className="hidden sm:block sm:ml-4 mt-2 flex-shrink-0"
          onClick={() => props.setApplicationDetailModal(true)}
        >
          <button
            type="button"
            className="relative inline-flex items-center rounded-md border border-transparent bg-timesPurple px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-timesHoverBtn focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Easy apply
          </button>
        </div>

        {/* mobile component */}

        <div className="shadow-[0_1px_10px_1px_rgba(0,0,0,0.1)]  sm:hidden left-0 py-2 z-50   flex justify-center  fixed bottom-0 w-full bg-white">
          <div
            className="flex font-medium py-3 items-center w-1/2 bg-white justify-center p-2 text-timesPurple"
            onClick={props.similarJobsScrollAbout}
          >
            <div className="h-5 w-5 mr-2">
              <BriefcaseIcon />
            </div>
            Similar Jobs
          </div>
          <div
            className="flex font-medium items-center w-1/2 bg-timesPurple h-auto  justify-center text-white rounded-l-full"
            onClick={() => props.setApplicationDetailModal(true)}
          >
            Easy Apply
          </div>
          {/* <button
            type="button"
            className="relative inline-flex items-center rounded-md border border-timesPurple px-6 py-2 text-sm font-medium text-timesPurple shadow-sm hover:bg-pageBackgroundGray hover:text-timesHoverBtn focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
            onClick={props.similarJobsScrollAbout}
          >
            Similar Jobs
          </button>
          <button
            onClick={executeScrollAbout}
            type="button"
            className="relative inline-flex items-center rounded-md border border-transparent bg-timesPurple px-6 py-2 text-sm font-medium text-white shadow-sm hover:bg-timesHoverBtn focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Easy apply
          </button> */}
        </div>
      </div>

      <div className="border-t border-gray-200 px-4 pb-4 sm:py-4 sm:px-6">
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 ">
          <div className="flex flex-col sm:flex-row w-full">
            <a
              className={
                router.asPath.split("/")[1] !== "partner-jobs"
                  ? "cursor-pointer m-auto"
                  : "pointer-events-none m-auto border"
              }
              target={"_self"}
              href={`/jobs-full-image/${useRemoveSpaceUrl(
                props.jobDataDetail.CompanyName
              )}/${useRemoveSpaceUrl(props.jobDataDetail.Category)}/${props.jobDataDetail.JobId
                }`}
            >
              <div
                className={
                  "h-44 w-44 flex-shrink-0 hidden sm:block border border-gray-400  relative "
                }
              >
                <Image
                  src={
                    showImage
                      ? props.jobDataDetail?.imageUrl
                      : "https://timesascent.com/TimeDummyLogo.webp"
                  }
                  // placeholder="blur"
                  // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
                  style={{ objectFit: "cover" }}
                  fill
                  sizes="(max-width: 200px) 100vw"
                  quality={10}
                  priority
                  alt={props.jobDataDetail?.CompanyName}
                />
                <div className="absolute top-0 left-0 h-full w-full flex opacity-0 items-center justify-center hover:opacity-100 hover:backdrop-brightness-50 transition duration-300 ease-in-out">
                  <span className="text-white text-lg w-6 h-6 font-bold"><EyeIcon /></span>
                </div>
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
          <div className="sm:col-span-2">
            <dt className="text-base font-medium text-gray-900">Company</dt>
            <dd className="mt-1 text-sm text-gray-900 font-semibold">
              <a
                href={`/NewCompanyProfile/${useRemoveSpaceUrl(
                  props.jobDataDetail?.CompanyName
                )}/${props.jobDataDetail?.companyId}`}
                className={
                  router.asPath.split("/")[1] !== "partner-jobs"
                    ? "cursor-pointer text-timesPurple hover:text-red-600"
                    : "pointer-events-none text-timesPurple"
                }
              >
                {props.jobDataDetail?.CompanyName}
              </a>
            </dd>
          </div>
          <div className="sm:col-span-2 bg-pageBackgroundGray sm:bg-white p-4 sm:p-0 rounded-md">
            <dt className="text-base font-medium text-gray-900">
              Job Description
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              <div
                dangerouslySetInnerHTML={{
                  __html: props.jobDataDetail.jobDescription,
                }}
              />
            </dd>
          </div>
          {/* <div className="sm:col-span-2">
            <dt className="text-base font-medium text-gray-900">
              {`About ${props.jobDataDetail.CompanyName}`}{" "}
            </dt>
            <ul className="mt-1 text-sm text-gray-900">
              {props.jobDataDetail.companyDetails
                ?.split("~")
                .map((item, index) => {
                  return (
                    <li key={index} className="pt-2">
                      {item}
                    </li>
                  );
                })}
            </ul>
          </div> */}
          {
            props.jobDataDetail.applicationDetails &&
            <div className="sm:col-span-2">
              <dt className="text-base font-medium text-gray-900">
                Application Details
              </dt>
              <dd className="mt-1 text-sm text-gray-900">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 rounded-md border border-gray-200"
                >
                  <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                    <div className="flex w-0 flex-1 items-center">
                      <span className="ml-2 w-0 flex-1">
                        {props.jobDataDetail.applicationDetails}
                      </span>
                    </div>
                  </li>
                </ul>
              </dd>
            </div>
          }
          {/* <div className="sm:col-span-2" ref={myRefabout || props.ref}>
            <dt className="text-base font-medium text-gray-900">
              Application Details
            </dt>
            <dd className="mt-1 text-sm text-gray-900">
              <ul
                role="list"
                className="divide-y divide-gray-200 rounded-md border border-gray-200"
              >
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <span className="ml-2 w-0 flex-1">
                      {props.jobDataDetail.applicationDetails}
                    </span>
                  </div>
                </li>
                <li className="flex items-center justify-between py-3 bg-pageBackgroundGray pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <EnvelopeIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 w-0 flex-1 truncate">
                      Apply via email
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href={`mailto:${props.jobDataDetail.email}`}
                      target={"_self"}
                      className={
                        props.jobDataDetail.email
                          ? "font-medium text-timesPurple hover:text-timesHoverBtn"
                          : "font-medium text-gray-500 pointer-events-none"
                      }
                    >Email Now</a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-3 bg-pageBackgroundGray  pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <PhoneArrowUpRightIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 w-0 flex-1 truncate">
                      Apply via Call
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href={`tel:${props.jobDataDetail.phone}`}
                      target={"_self"}
                      className={
                        props.jobDataDetail.phone
                          ? "font-medium text-timesPurple hover:text-timesHoverBtn"
                          : "font-medium text-gray-500 pointer-events-none"
                      }
                    >Call</a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-3 bg-pageBackgroundGray  pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <GlobeAltIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 w-0 flex-1 truncate">
                      Apply via company website
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <div
                      className={
                        props.jobDataDetail.url ||
                          props.jobDataDetail.externalApplyUrl
                          ? "font-medium text-timesPurple hover:text-timesHoverBtn cursor-pointer"
                          : "font-medium text-gray-500 pointer-events-none"
                      }
                      onClick={() => {
                        props.setRedirectModal(true);
                        props.setRedirectionUrl(`https://${props.jobDataDetail.externalApplyUrl}`);
                      }}
                    >
                      Visit website
                    </div>                    
                  </div>
                </li>
                <li className=" py-3 pl-3 pr-4 text-sm bg-pageBackgroundGray">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex w-0 flex-1 items-center">
                      <MapIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2 w-0 flex-1 truncate">
                        Walk-In Address
                      </span>
                    </div>

                    <div
                      className={
                        props.jobDataDetail.iswalkin === "1"
                          ? "ml-4 flex-shrink-0 cursor-pointer"
                          : "ml-4 flex-shrink-0 pointer-events-none"
                      }
                      onClick={() => setShow(!show)}
                    >
                      <div
                        className={
                          props.jobDataDetail.iswalkin === "1"
                            ? "font-medium text-timesPurple hover:text-timesHoverBtn"
                            : "font-medium text-gray-500 pointer-events-none"
                        }
                      >Get Details
                      </div>
                    </div>
                  </div>
                  {show ? (
                    <div className="flex justify-between border-t mt-4 items-center">
                      <div className="flex items-center  pt-3">
                        <MapPinIcon
                          className="h-5 w-5 flex-shrink-0 text-gray-400 mr-3"
                          aria-hidden="true"
                        />
                        <div>
                          {props.jobDataDetail.iswalkin === "1"
                            ? props.jobDataDetail.WalkinAddress
                            : ""}
                        </div>
                      </div>
                      <div onClick={() => setShow(false)}>
                        {" "}
                        <XMarkIcon
                          className="cursor-pointer h-5 w-5 flex-shrink-0 bg-purple-300 hover:bg-purple-500 mr-3 mt-2 text-white rounded"
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </li>

                <li className=" py-3 pl-3 pr-4 text-sm bg-pageBackgroundGray">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex w-0 flex-1 items-center">
                      <PaperClipIcon
                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <span className="ml-2 w-0 flex-1 truncate">
                        Resume Application
                      </span>
                    </div>
                    <div
                      className={
                        props.jobDataDetail.featuredCompany !== "0"
                          ? "cursor-pointer ml-4 flex-shrink-0"
                          : "cursor-pointer ml-4 flex-shrink-0 pointer-events-none"
                      }
                      onClick={() => shareButton()}
                    >
                      <div
                        className={
                          props.jobDataDetail.featuredCompany !== "0"
                            ? "font-medium text-timesPurple hover:text-timesHoverBtn"
                            : "font-medium text-gray-500 pointer-events-none"
                        }
                      >Share Resume</div>
                    </div>
                  </div>
                  {modalShow ? (
                    <div className=" border-t mt-4 ">
                      <div className="pt-3">
                        <div className="sm:pl-6 text-sm font-medium">
                          Be sure to include an updated resume
                        </div>
                        <form
                          className="sm:pl-6 pt-3  sm:justify-between sm:flex sm:items-center sm:w-1/2"
                          onSubmit={props.SubmitBtn}
                        >
                          <div
                            className={
                              props.Resume?.resumePath
                                ? "flex items-center justify-between border border-slate-200 py-2 sm:w-full sm:mr-6"
                                : "flex items-center justify-between border border-slate-200 sm:w-full sm:mr-6"
                            }
                          >
                            {props.Resume?.resumePath ? (
                              <div className="pr-5 pl-2">
                                {
                                  props.Resume?.resumePath
                                    ?.split("/")
                                    .slice(-1)[0]
                                }
                              </div>
                            ) : (
                              <div className="">
                                {" "}
                                <input
                                  type="file"
                                  onChange={props.onChange}
                                  className=""
                                  required
                                />
                              </div>
                            )}
                            {props.Resume?.resumePath ? (
                              <div
                                onClick={() =>
                                  props.CrossClick(props.Resume?.keyIndex)
                                }
                              >
                                {" "}
                                <XMarkIcon
                                  className="cursor-pointer h-5 w-5 flex-shrink-0 bg-purple-300 hover:bg-purple-500 mr-3 text-white rounded"
                                  aria-hidden="true"
                                />
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>
                          <div className="bg-timesPurple  px-4 py-2 rounded text-white hover:bg-timesHoverBtn w-1/2 sm:w-32 text-center mx-auto mt-4 sm:mt-0">
                            <button type="submit">
                              {" "}
                              {props.loading ? (
                                <ThreeDots
                                  height="20"
                                  width="30"
                                  radius="9"
                                  color="white"
                                  ariaLabel="three-dots-loading"
                                  wrapperStyle={{}}
                                  wrapperClassName=""
                                  visible={true}
                                />
                              ) : (
                                "Continue"
                              )}
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </dd>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default JobInfo;
