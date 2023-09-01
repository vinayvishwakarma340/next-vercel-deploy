import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const GreateManagerModal = (props) => {
  return (
    <Transition.Root show={props.openModal} as={Fragment}>
      <Dialog
        as="div"
        className="relative mt-4 z-50"
        onClose={props.setOpenModal}
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
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    {/* <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationTriangleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div> */}
                    <div className="mt-4 text-center sm:mt-0 sm:text-left divide-y divide-gray-200">
                      <Dialog.Title
                        as="h3"
                        className="text-base font-semibold leading-6 text-gray-900"
                      >
                        {props.managerDetails.name}
                      </Dialog.Title>
                      <div>
                        <button
                          type="button"
                          className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                          onClick={() => props.setOpenModal(false)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                      <div className="mt-4">
                        <div
                          className={"h-[300px] sm:h-[300px]  w-auto relative"}
                        >
                          <Image
                            style={{ objectFit: "fill" }}
                            src={props.managerDetails.imageUrl}
                            fill
                            alt=""
                            // placeholder="blur"
                            // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
                          />
                        </div>
                        <p className="text-sm mt-4 text-gray-500">
                          Contrary to popular belief, Lorem Ipsum is not simply
                          random text. It has roots in a piece of classical
                          Latin literature from 45 BC, making it over 2000 years
                          old. Richard McClintock, a Latin professor at
                          Hampden-Sydney College in Virginia, looked up one of
                          the more obscure Latin words, consectetur, from a
                          Lorem Ipsum passage, and going through the cites of
                          the word in classical literature, discovered the
                          undoubtable source. Lorem Ipsum comes from sections
                          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                          (The Extremes of Good and Evil) by Cicero, written in
                          45 BC. This book is a treatise on the theory of
                          ethics, very popular during the Renaissance. The first
                          line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                          comes from a line in section 1.10.32. The standard
                          chunk of Lorem Ipsum used since the 1500s is
                          reproduced below for those interested. Sections
                          1.10.32 and 1.10.33 from "de Finibus Bonorum et
                          Malorum" by Cicero are also reproduced in their exact
                          original form, accompanied by English.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => props.setOpenModal(false)}
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
  );
};

export default GreateManagerModal;
