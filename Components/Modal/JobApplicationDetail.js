import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import {
  MapPinIcon,
  PaperClipIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import {
  EnvelopeIcon,
  GlobeAltIcon,
  MapIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { ThreeDots } from "react-loader-spinner";
import { useRouter } from "next/router";

const JobApplicationDetail = (props) => {
  const cancelButtonRef = useRef(null);
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const router = useRouter();

  const shareButton = () => {
    if (Cookies.get("userLoggedIn")) {
      setModalShow(!modalShow);
    } else {
      Cookies.set("pathname", router.asPath);
      router.push("/times-ascent-signin");
    }
  };

  return (
    <>
      <Transition.Root show={props.openModal} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50"
          initialFocus={cancelButtonRef}
          onClose={props.closeModal}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all w-full sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <div className="mt-2">
                        <div className="sm:col-span-2">
                          <dd className="mt-1 text-sm text-gray-900">
                            <ul
                              role="list"
                              className="divide-y divide-gray-200 rounded-md border border-gray-200"
                            >
                              {
                                props.jobDataDetail.email &&
                                <li className="flex items-center justify-between py-3 bg-pageBackgroundGray pl-3 pr-4 text-sm">
                                  <div className="flex w-0 flex-1 items-center">
                                    <EnvelopeIcon
                                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-2 w-0 flex-1 text-start truncate">
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
                              }
                              {
                                props.jobDataDetail.phone &&
                                <li className="flex items-center justify-between py-3 bg-pageBackgroundGray  pl-3 pr-4 text-sm">
                                  <div className="flex w-0 flex-1 items-center">
                                    <PhoneArrowUpRightIcon
                                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                                      aria-hidden="true"
                                    />
                                    <span className="ml-2 w-0 flex-1 text-start truncate">
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
                              }
                              {
                                props.jobDataDetail.url ||
                                  props.jobDataDetail.externalApplyUrl ?
                                  <li className="flex items-center justify-between py-3 bg-pageBackgroundGray  pl-3 pr-4 text-sm">
                                    <div className="flex w-0 flex-1 items-center">
                                      <GlobeAltIcon
                                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-2 w-0 flex-1 truncate text-start">
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
                                          props.setRedirectionUrl(props.jobDataDetail.externalApplyUrl ? `https://${props.jobDataDetail.externalApplyUrl}` : props.jobDataDetail.url);
                                        }}
                                      >
                                        Visit website
                                      </div>

                                      {/* <a
                      href={"https://" + props.jobDataDetail.companyWebsite}
                      target={"_self"}
                      className={
                        props.jobDataDetail.companyWebsite
                          ? "font-medium text-indigo-600 hover:text-indigo-500"
                          : "font-medium text-gray-500 pointer-events-none"
                      }
                    >
                      Visit website
                    </a> */}
                                    </div>
                                  </li> : ""
                              }
                              {
                                props.jobDataDetail.iswalkin === "1" &&
                                <li className=" py-3 pl-3 pr-4 text-sm bg-pageBackgroundGray">
                                  <div className="flex items-center justify-between w-full">
                                    <div className="flex w-0 flex-1 items-center">
                                      <MapIcon
                                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-2 w-0 flex-1 truncate text-start">
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
                              }
                              {
                                props.jobDataDetail.featuredCompany !== "0" &&
                                <li className=" py-3 pl-3 pr-4 text-sm bg-pageBackgroundGray">
                                  <div className="flex items-center justify-between w-full">
                                    <div className="flex w-0 flex-1 items-center">
                                      <PaperClipIcon
                                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-2 w-0 flex-1 truncate text-start">
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
                                        {/* <MapPinIcon className="h-5 w-5 flex-shrink-0 text-gray-400 mr-3" aria-hidden="true" /> */}
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
                              }
                            </ul>
                          </dd>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 flex justify-end">
                    {/* <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-timesPurple px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-timesHoverBtn focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                      onClick={() => {
                        props.setRedirectModal(true);
                        props.setRedirectionUrl(props.jobDataDetail.externalApplyUrl ? `https://${props.jobDataDetail.externalApplyUrl}` : props.jobDataDetail.url);
                      }}
                      ref={cancelButtonRef}
                    >Visit website</button> */}
                    <button
                      type="button"
                      className="mt-3 inline-flex w-24 justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
                      onClick={props.closeModal}
                    >
                      Cancel
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default JobApplicationDetail;
