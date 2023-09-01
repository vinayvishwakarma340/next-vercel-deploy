import React, { useState } from "react";
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
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { ThreeDots } from "react-loader-spinner";

const JobInfoApplication = (props) => {
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
        <div className="grid grid-cols-1 gap-x-4 gap-y-6 px-4 py-5 sm:px-6">
            <div className="sm:col-span-2" ref={props.myRefabout}>
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
                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
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
                                            ? "font-medium text-indigo-600 hover:text-indigo-500"
                                            : "font-medium text-gray-500 pointer-events-none"
                                    }
                                >
                                    Email Now
                                </a>
                            </div>
                        </li>
                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
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
                                            ? "font-medium text-indigo-600 hover:text-indigo-500"
                                            : "font-medium text-gray-500 pointer-events-none"
                                    }
                                >
                                    Call
                                </a>
                            </div>
                        </li>
                        <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
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
                                <a
                                    href={
                                        props.jobDataDetail.url ||
                                        `https://${props.jobDataDetail.externalApplyUrl}`
                                    }
                                    target={"_self"}
                                    className={
                                        props.jobDataDetail.url ||
                                            props.jobDataDetail.externalApplyUrl
                                            ? "font-medium text-indigo-600 hover:text-indigo-500"
                                            : "font-medium text-gray-500 pointer-events-none"
                                    }
                                >
                                    Visit website
                                </a>
                            </div>
                        </li>
                        <li className=" py-3 pl-3 pr-4 text-sm">
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
                                                ? "font-medium text-indigo-600 hover:text-indigo-500"
                                                : "font-medium text-gray-500 pointer-events-none"
                                        }
                                    >
                                        Get Details
                                    </div>
                                </div>
                            </div>
                            {show && (
                                <div className="flex justify-between border-t mt-4 items-center">
                                    <div className="flex items-center  pt-3">
                                        <MapPinIcon
                                            className="h-5 w-5 flex-shrink-0 text-gray-400 mr-3"
                                            aria-hidden="true"
                                        />
                                        <div>
                                            {props.jobDataDetail.iswalkin === "1" && props.jobDataDetail.WalkinAddress}
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
                            )}
                        </li>

                        <li className=" py-3 pl-3 pr-4 text-sm">
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
                                                ? "font-medium text-indigo-600 hover:text-indigo-500"
                                                : "font-medium text-gray-500 pointer-events-none"
                                        }
                                    >
                                        Share Resume
                                    </div>
                                </div>
                            </div>
                            {modalShow && (
                                <div className="border-t mt-4 pt-3">
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
                                                <div>
                                                    {" "}
                                                    <input
                                                        type="file"
                                                        onChange={props.onChange}
                                                        required
                                                    />
                                                </div>
                                            )}
                                            {props.Resume?.resumePath && (
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
                                            )}
                                        </div>
                                        <div className="bg-purple-500  px-4 py-2 rounded text-white hover:bg-purple-600 w-1/2 sm:w-32 text-center mx-auto mt-4 sm:mt-0">
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
                            )}
                        </li>
                    </ul>
                </dd>
            </div>
        </div>
    );
};

export default JobInfoApplication;
