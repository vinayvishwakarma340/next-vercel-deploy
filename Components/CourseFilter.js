import React from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CourseFilter = (props) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const resetInputField = () => {
    props.setCoursestatus("");
    props.setProval("");
    props.setCatval("");
    props.setFilterAllCourses([]);
  };
  const resetAllField = () => {
    props.setCoursestatus("");
    props.setFilterAllCourses([]);
  };

  const resetCategory = () => {
    props.setCatval("");
  };
  const resetProvider = () => {
    props.setProval("");
  };

  return (
    <div>
      {" "}
      <div className="bg-white">
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 sm:hidden"
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl mt-16">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">
                      Filters
                    </h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  <form className="mt-4">
                    <Disclosure
                      as="div"
                      key=""
                      className=" border-gray-200 px-4 py-1"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-sm text-gray-400">
                              <span className="font-medium text-gray-900">
                                Category
                              </span>
                              <span className="ml-6 flex items-center">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? "-rotate-180" : "rotate-0",
                                    "h-5 w-5 transform"
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {props.categoryListData.map(
                                (option, optionIdx) => (
                                  <div
                                    key={optionIdx}
                                    className="flex items-center"
                                  >
                                    <input
                                      id={`filter-${option.catid}-${optionIdx}`}
                                      name="Category"
                                      onChange={() => {
                                        props.modelCheckboxHandler1(option);
                                        props.setCatval(option.course_category);
                                        props.setPage(1);
                                      }}
                                      checked={
                                        props.checkedValue.catid ===
                                        option.catid
                                      }
                                      type="radio"
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-${option.catid}-${optionIdx}`}
                                      className="ml-3  pr- text-sm font-medium text-black"
                                    >
                                      {option.course_category}
                                    </label>
                                  </div>
                                )
                              )}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </form>

                  <form className="mt-4">
                    <Disclosure
                      as="div"
                      key=""
                      className="border-t border-gray-200 px-4 py-1"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 mt-4 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 text-sm text-gray-400">
                              <span className="font-medium text-gray-900">
                                Coursesby
                              </span>
                              <span className="ml-6 flex items-center">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? "-rotate-180" : "rotate-0",
                                    "h-5 w-5 transform"
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-6">
                              {props.CoursesbyData.map((option, optionIdx) => (
                                <div
                                  key={optionIdx}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${option.byid}-${optionIdx}`}
                                    name="coursesBy"
                                    onChange={() => {
                                      props.modelCheckboxHandler(option);
                                      props.setProval(option.providerName);
                                      props.setPage(1);
                                    }}
                                    checked={
                                      props.coursesBy.byid === option.byid
                                    }
                                    type="radio"
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-${option.byid}-${optionIdx}`}
                                    className="ml-3  pr-6 text-sm font-medium text-gray-900"
                                  >
                                    {option.providerName}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <div className=" max-w-7xl py-7 ">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Courses
          </h1>
          <p className="mt-4 max-w-xl text-sm text-gray-700">{props.para}</p>
        </div>

        <section aria-labelledby="filter-heading">
          <h2 id="filter-heading" className="sr-only">
            Filters
          </h2>

          <div className="border-b border-gray-200 bg-white pb-4">
            <div className="mx-auto flex max-w-7xl items-center justify-between ">
              <div className="relative inline-block text-left">
                <div className="">
                  <div className="">
                    <select
                      onChange={(e) => {
                        e.target.value === "All"
                          ? resetAllField() ||
                            resetInputField() ||
                            props.setCheckedValue("") ||
                            props.setCoursesBy("")
                          : e.target.value === "Free"
                          ? props.setCoursestatus("Free")
                          : e.target.value === "Paid"
                          ? props.setCoursestatus("Paid")
                          : props.setCoursestatus("");
                      }}
                      className="cursor-pointer border-none  text-sm font-medium text-gray-700 hover:text-gray-90"
                    >
                      <option
                        value="All"
                        selected={
                          props.proval === "" &&
                          props.catval === "" &&
                          props.filterAllCourses === [] &&
                          props.coursestatus === ""
                        }
                      >
                        All
                      </option>
                      <option
                        value="Free"
                        selected={props.coursestatus === "Free"}
                      >
                        Free
                      </option>
                      <option
                        value="Paid"
                        selected={props.coursestatus === "Paid"}
                      >
                        Paid
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="inline-block text-sm font-medium text-gray-700 hover:text-gray-900 sm:hidden"
                onClick={() => setOpen(true)}
              >
                Filters
              </button>

              <div className="hidden sm:block">
                <div className="flow-root">
                  <Popover.Group className="-mx-4 flex items-center divide-x divide-gray-200">
                    <Popover className="relative inline-block px-4 text-left">
                      <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        <span>Category</span>

                        <ChevronDownIcon
                          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none h-96 overflow-x-auto">
                          <form className="space-y-4">
                            {props.categoryListData.map((option, optionIdx) => (
                              <div
                                key={optionIdx}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${option.byid}-${optionIdx}`}
                                  name="coursesBy"
                                  onChange={() => {
                                    props.modelCheckboxHandler1(option);
                                    props.setCatval(option.course_category);
                                    props.setPage(1);
                                  }}
                                  checked={
                                    props.checkedValue.catid === option.catid
                                  }
                                  type="radio"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${option.byid}-${optionIdx}`}
                                  className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-black cursor-pointer"
                                >
                                  {option.course_category}
                                </label>
                              </div>
                            ))}
                          </form>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                    <Popover className="relative inline-block px-4 text-left">
                      <Popover.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                        <span>Coursesby</span>

                        <ChevronDownIcon
                          className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Popover.Panel className="absolute right-0 z-10 mt-2 origin-top-right rounded-md bg-white p-4 shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <form className="space-y-4">
                            {props.CoursesbyData.map((option, optionIdx) => (
                              <div
                                key={optionIdx}
                                className="flex items-center"
                              >
                                <input
                                  id={`filter-${option.byid}-${optionIdx}`}
                                  name="coursesBy"
                                  onChange={() => {
                                    props.modelCheckboxHandler(option);
                                    props.setProval(option.providerName);
                                    props.setPage(1);
                                  }}
                                  checked={props.coursesBy.byid === option.byid}
                                  type="radio"
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${option.byid}-${optionIdx}`}
                                  className="ml-3 whitespace-nowrap pr-6 text-sm font-medium text-gray-900 cursor-pointer"
                                >
                                  {option.providerName}
                                </label>
                              </div>
                            ))}
                          </form>
                        </Popover.Panel>
                      </Transition>
                    </Popover>
                  </Popover.Group>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl py-3  sm:flex sm:items-center ">
              <h3 className="text-sm font-medium text-gray-500">
                Filters
                <span className="sr-only">, active</span>
              </h3>

              <div
                aria-hidden="true"
                className="hidden h-5 w-px bg-gray-300 sm:ml-4 sm:block"
              />

              <div className="mt-2 sm:mt-0 sm:ml-4">
                <div className="-m-1 flex flex-wrap items-center">
                  {props.proval === "" &&
                  props.catval === "" &&
                  props.filterAllCourses === [] &&
                  props.coursestatus === "" ? (
                    ""
                  ) : (
                    <>
                      {" "}
                      {props.checkedValue.course_category && (
                        <span className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900">
                          <span>{props.checkedValue.course_category}</span>
                          <button
                            type="button"
                            className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                            onClick={() => {
                              props.removeCategory(props.checkedValue.catid);
                              resetCategory();
                            }}
                          >
                            <span className="sr-only">Remove filter for</span>
                            <svg
                              className="h-2 w-2"
                              stroke="currentColor"
                              fill="none"
                              viewBox="0 0 8 8"
                            >
                              <path
                                strokeLinecap="round"
                                strokeWidth="1.5"
                                d="M1 1l6 6m0-6L1 7"
                              />
                            </svg>
                          </button>
                        </span>
                      )}
                      {props.coursesBy.providerName && (
                        <span className="m-1 inline-flex items-center rounded-full border border-gray-200 bg-white py-1.5 pl-3 pr-2 text-sm font-medium text-gray-900">
                          <span>{props.coursesBy.providerName}</span>
                          {props.coursesBy.providerName ? (
                            <button
                              type="button"
                              className="ml-1 inline-flex h-4 w-4 flex-shrink-0 rounded-full p-1 text-gray-400 hover:bg-gray-200 hover:text-gray-500"
                              onClick={() => {
                                props.removeProvider(props.coursesBy.byid);
                                resetProvider();
                              }}
                            >
                              <span className="sr-only">Remove filter for</span>
                              <svg
                                className="h-2 w-2"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 8 8"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeWidth="1.5"
                                  d="M1 1l6 6m0-6L1 7"
                                />
                              </svg>
                            </button>
                          ) : (
                            ""
                          )}{" "}
                        </span>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseFilter;
