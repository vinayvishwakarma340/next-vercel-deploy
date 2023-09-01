import React, { useEffect } from "react";
import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import Cookies from "js-cookie";
import jwt from "jwt-simple";
import { ThreeDots } from "react-loader-spinner";

const ModalRedirection = (props) => {
  const cancelButtonRef = useRef(null);

  useEffect(() => {
    if (props.openModal) {
      const timeout = setTimeout(() => {
        if (props.companyName1 === "9Links") {
          props.setRedirectionUrl1(
            `https://www.9links.in/web/free-assessment-inq-form?name=${Cookies.get(
              "USERFULLNAME"
            )}&email=${Cookies.get("USEREMAIL")}&contact_number=${Cookies.get(
              "USERMOBILENO"
            )}&hearabout=TimesAscent`
          );
        } else if (props.companyName1 === "MentorKart") {
          let payload = {
            mobile_no: `${Cookies.get("USERMOBILENO") || "-"}`,
            email: `${Cookies.get("USEREMAIL") || "-"}`,
            first_name: `${Cookies.get("USERFULLNAME")?.split(" ")[0] || "-"}`,
            last_name: `${Cookies.get("USERFULLNAME")?.split(" ")[1] || "-"}`,
            country_code: "91",
            country_name: "INDIA",
            user_category: "PROFESSIONAL",
            org_id: "92",
            mobile_verified: "1",
            iss: "times-ascent",
            utm_source: "TIMESASCENT",
          };
          var base64 = Buffer.from("A9N0d19Zaz1aRQNycXQ=", "base64");
          var token = jwt.encode(payload, base64);
          props.setRedirectionUrl1(
            `https://app.mentorkart.com/auth?SSO_Mtoken=${token}`
          );
        }
      });
      return () => clearTimeout(timeout)
    }
  }, [props.openModal]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      {" "}
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
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                  <div>
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                      <CheckIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-5">
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        You are being redirected to third party site
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          You have clicked on a link which leaves Times Ascent’s
                          website, and you will be redirected to a third party
                          website. Times Ascent makes no representations nor has
                          any supervision or control over the quality, content,
                          reliability or security of the third party website,
                          nor shall Times Ascent be liable for its use.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-2 sm:text-sm"
                      disabled={props.loading}
                      onClick={() => {
                        props.partnerClick(
                          props.companyName1,
                          props.redirectionUrl1
                        );

                        props.setOpen(false);
                      }}
                      ref={cancelButtonRef}
                    >{
                        props.loading ?
                          <ThreeDots
                            height="20"
                            width="40"
                            radius="9"
                            color="white"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                          /> :
                          "Click to continue"
                      }
                    </button>
                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:col-start-1 sm:mt-0 sm:text-sm"
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

export default ModalRedirection;
