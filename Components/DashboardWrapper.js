import { Fragment, useState } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import {
  AcademicCapIcon,
  Bars3CenterLeftIcon,
  CalendarDaysIcon,
  DocumentChartBarIcon,
  DocumentDuplicateIcon,
  HomeIcon,
  LockClosedIcon,
  PencilSquareIcon,
  ShieldCheckIcon,
  UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon, CloudArrowUpIcon } from "@heroicons/react/20/solid";

import { useRouter } from "next/router";
import Cookies from "js-cookie";
import Footer from "./Footer";

const DashboardWrapper = (props) => {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navigation = [
    {
      name: "Dashboard",
      href: "/applicant-dashboard/" + props.data?.CandidateId,
      icon: HomeIcon,
      current:
        router.asPath === "/applicant-dashboard/" + props.data?.CandidateId
          ? true
          : false,
    },
    {
      name: "Profile",
      href: "/editprofile/" + props.data?.CandidateId,
      icon: PencilSquareIcon,
      current:
        router.asPath === "/editprofile/" + props.data?.CandidateId
          ? true
          : false,
    },
    {
      name: "Experience Details",
      href: "/expdetail/" + props.data?.CandidateId,
      icon: CalendarDaysIcon,
      current:
        router.asPath === "/expdetail/" + props.data?.CandidateId
          ? true
          : false,
    },
    {
      name: "Employment Details",
      href: "/employementdetails/" + props.data?.CandidateId,
      icon: UserPlusIcon,
      current:
        router.asPath === "/employementdetails/" + props.data?.CandidateId
          ? true
          : false,
    },
    {
      name: "Education Details",
      href: "/education/" + props.data?.CandidateId,
      icon: AcademicCapIcon,
      current:
        router.asPath === "/education/" + props.data?.CandidateId
          ? true
          : false,
    },

    {
      name: "Interview Prep",
      href: "/interview-gd-prep",
      target: "_self",
      icon: DocumentChartBarIcon,
      current: false,
    },
    {
      name: "Resume Builder",
      href: "/resume-writing",
      target: "_self",
      icon: DocumentDuplicateIcon,
      current: false,
    },
  ];
  const secondaryNavigation = [
    // { name: "Settings", href: "#", icon: CogIcon },
    // { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
    // { name: "Privacy", href: "/privacy-policy", icon: ShieldCheckIcon },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <div className="min-h-full">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-40 lg:hidden"
            onClose={setSidebarOpen}
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
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-purple-700 pt-5 pb-4">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12  mt-20">
                      <button
                        type="button"
                        className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XMarkIcon
                          className="h-6 w-6 text-white"
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex flex-shrink-0 items-center px-8 mt-10"></div>
                  <nav
                    className="mt-5 h-full flex-shrink-0 divide-y bg-purple-700 overflow-y-auto"
                    aria-label="Sidebar"
                  >
                    <div className="space-y-1 px-2">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          target={item.target}
                          className={classNames(
                            item.current
                              ? "bg-purple-600 text-white"
                              : "text-cyan-100 hover:text-white hover:bg-purple-600",
                            "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          <item.icon
                            className="mr-4 h-6 w-6 flex-shrink-0 text-white"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </nav>
                </Dialog.Panel>
              </Transition.Child>
              <div className="w-14 flex-shrink-0" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
          {/* Sidebar component, swap this element with another sidebar if you like */}
          <div className="flex flex-grow flex-col overflow-y-auto bg-purple-700 pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-8 mt-10"></div>
            <nav
              className="lg:mt-6 md:mt-8 flex flex-1 flex-col divide-y divide-cyan-800 overflow-y-auto"
              aria-label="Sidebar"
            >
              <div className="space-y-1 px-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target={item.target}
                    className={classNames(
                      item.current
                        ? "bg-purple-600 text-white"
                        : "text-cyan-100 hover:text-white hover:bg-purple-600",
                      "group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    <item.icon
                      className="mr-4 h-6 w-6 flex-shrink-0 text-white"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>

        <div className="flex flex-1 flex-col lg:pl-64">
          <div className="flex h-16 lg:h-0 sm flex-shrink-0 border-gray-200 bg-white lg:border-none">
            <button
              type="button"
              className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div>{props.children}</div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default DashboardWrapper;
