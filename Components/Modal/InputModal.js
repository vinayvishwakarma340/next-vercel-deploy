import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

const InputModal = (props) => {
  const [error, setError] = useState("");

  const validation = () => {
    let errors = "";

    setError(errors);
    if (isValid) {
      return true;
    }
  };

  return (
    <Transition.Root show={props.openModal} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={props.closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-60 backdrop-blur-sm transition-opacity" />
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
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl w-full transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    props.updateCandidateDetails();
                  }}
                >
                  <div className="block mb-4 text-base text-center font-bold text-gray-900 dark:text-white">
                    Submit Your Details{" "}
                  </div>
                  <div className="mb-2">
                    <label
                      for="small-input"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      value={props.firstname}
                      onChange={(e) => props.setFirstname(e.target.value)}
                      required
                      type="text"
                      id="small-input"
                      class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                    <div> {error.fname}</div>
                  </div>
                  <div className="mb-2">
                    <label
                      for="small-input"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      value={props.lastname}
                      onChange={(e) => props.setLastname(e.target.value)}
                      required
                      type="text"
                      id="small-input"
                      class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      for="small-input"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Email
                    </label>
                    <input
                      required
                      value={props.email}
                      onChange={(e) => props.setEmail(e.target.value)}
                      type="email"
                      disabled={true}
                      id="small-input"
                      class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label
                      for="small-input"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Mobile
                    </label>
                    <input
                      required
                      value={props.mob}
                      onChange={(e) => props.setMob(e.target.value)}
                      name="phone"
                      disabled={true}
                      id="phone"
                      maxLength="10"
                      minLength="0"
                      pattern="^[6789][0-9]{9}$"
                      class="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div className="mt-5 sm:mt-6 flex gap-3">
                    <button
                      type="submit"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                    >
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
                        <>
                          {props.submitbuttonText}
                        </>
                      )}



                    </button>
                    <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md border border-transparent bg-purple-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:text-sm"
                      onClick={props.closeModal}
                    >
                      {props.closebuttonText}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default InputModal;
