import { Fragment, useEffect, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  ChartBarIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
  UserGroupIcon,
  UsersIcon,
  UserIcon,
  PencilSquareIcon,
  ClipboardDocumentIcon,
  DocumentMagnifyingGlassIcon,
  BookOpenIcon,
  BriefcaseIcon,
  HomeIcon,
  NewspaperIcon,
  QuestionMarkCircleIcon,
  MicrophoneIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  UserCircleIcon,
} from "@heroicons/react/20/solid";

import ExploreJobs from "../pages/MainHeaderJson/data.json"
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import { HumBurger } from "./Icons/CustomIcons";
import useRemoveSpaceUrl from "./CustomHook/useRemoveSpaceUrl";
import { Menu } from "@headlessui/react";
// import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { signOut } from "next-auth/react";

const MainHeader = (props) => {
  const [userLoggedIn, setUserLoggedIn] = useState("");
  const [userFullName, setUserFullName] = useState("");
  const [userId, setUserId] = useState("");
  // const USERFULLNAME
  // userLoggedIn

  useEffect(() => {
    setUserLoggedIn(Cookies.get("userLoggedIn"));
    setUserFullName(Cookies.get("USERFULLNAME"));
    setUserId(Cookies.get("USERID"));
  }, [userLoggedIn, userId, userFullName]);
  // const userLoggedIn = props.cookies?.userLoggedIn;
  // const userFullName = props.cookies?.USERFULLNAME;
  // const userId = props.cookies?.USERID;
  const nameFirstLetter = userFullName
    ?.split(" ")[0]
    ?.slice(0, 1)
    ?.toUpperCase();
  const nameLastLetter = userFullName
    ?.split(" ")[1]
    ?.slice(0, 1)
    ?.toUpperCase();

  const router = useRouter();
  const pathname = router.pathname;
  const { cityFilter, CityJobsLastweek, companyFilter, positionFilter, levelsFilter, latestJobSection, jobfunctionFilter, indusrtyJsonFilter } = ExploreJobs;
  const homeMenu = [
    {
      name: "Corporates Care",
      description:
        "Display actions and initiatives at workplace that have helped your team.",
      href: "/corporates-care",
      icon: UsersIcon,
    },
    {
      name: "Podcast",
      description:
        "Digital audio series on various topics, accessible on-demand.",
      href: "/podcasts",
      icon: MicrophoneIcon,
    },

    {
      name: "Interview and GD Prep",
      description:
        "Face to face mock with our professionals and Industry Experts. ",
      href: "/interview-gd-prep",
      icon: ClipboardDocumentIcon,
    },
    {
      name: "Resume Writing",
      description:
        "Tailor your resume for career events and highlight your achievements. ",
      href: "/resume-writing",
      icon: PencilSquareIcon,
    },
    {
      name: "Mentorship",
      description:
        "learn from mentors to discover and strengthen your career-building skills.",
      href: "/mentorship/mentorkart",
      icon: UserGroupIcon,
    },
    {
      name: "Psychometric Test",
      description: "Get an Idea of your personality & behaviour traits. ",
      href: "/psychometric-test",
      icon: DocumentMagnifyingGlassIcon,
    },
    {
      name: "CXO Jobs",
      description:
        "Enroll for best Executive officer posts with with our CXO jobs segment. ",
      href: "/cxo-zone",
      icon: BriefcaseIcon,
    },
    {
      name: "For Her",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/ForHer",
      icon: UserCircleIcon,
    },
    {
      name: "Movement Of Professionals",
      description:
        " Take your career to the next level with help from professionals.",
      href: "/movement-of-professionals",
      icon: UserIcon,
    },
    {
      name: "Great Manager Institute®",
      description:
        "A great lifelong digital coach and profiler of people managers.",
      href: "/great-manager-institute",
      icon: BuildingLibraryIcon,
    },
    // {
    //   name: "HR Professionals",
    //   description:
    //     "Display actions and initiatives at workplace that have helped your team.",
    //   href: "/hrprofessionals",
    //   icon: UsersIcon,
    // },
  ];

  const blogMenu = [
    {
      name: "Recommended Read",
      description:
        "Display actions and initiatives at workplace that have helped your team.",
      href: "/articleslist/recommended-read",
      icon: UsersIcon,
    },
    {
      name: "Featured Articles",
      description:
        "Digital audio series on various topics, accessible on-demand.",
      href: "/articleslist/featured-articles",
      icon: MicrophoneIcon,
    },

    {
      name: "Career Development",
      description:
        "Face to face mock with our professionals and Industry Experts. ",
      href: "/articleslist/career-development",
      icon: ClipboardDocumentIcon,
    },
    {
      name: "Voice of HR",
      description:
        "Tailor your resume for career events and highlight your achievements. ",
      href: "/articleslist/voice-of-hr",
      icon: PencilSquareIcon,
    },
    // {
    //   name: "Interview Tips",
    //   description:
    //     "learn from mentors to discover and strengthen your career-building skills.",
    //   href: "/articleslist/interview-tips",
    //   icon: UserGroupIcon,
    // },
    // {
    //   name: "Resume Writing",
    //   description:
    //     "learn from mentors to discover and strengthen your career-building skills.",
    //   href: "/resume-writing",
    //   icon: UserGroupIcon,
    // },
    // {
    //   name: "Trending Articles",
    //   description:
    //     "learn from mentors to discover and strengthen your career-building skills.",
    //   href: "/mentorship/mentorkart",
    //   icon: UserGroupIcon,
    // },
    // {
    //   name: "Recommended HR Read",
    //   description:
    //     "learn from mentors to discover and strengthen your career-building skills.",
    //   href: "/mentorship/mentorkart",
    //   icon: UserGroupIcon,
    // },
    // {
    //   name: "Featured HR Content",
    //   description:
    //     "learn from mentors to discover and strengthen your career-building skills.",
    //   href: "/mentorship/mentorkart",
    //   icon: UserGroupIcon,
    // },
    {
      name: "Guest Articles",
      description:
        "learn from mentors to discover and strengthen your career-building skills.",
      href: "/articleslist/featured-articles",
      icon: UserGroupIcon,
    },
    {
      name: "Trending Articles for Women",
      description:
        "learn from mentors to discover and strengthen your career-building skills.",
      href: "/articleslist/articles-for-her",
      icon: UserGroupIcon,
    },
    {
      name: "Inspirational Stories",
      description:
        "learn from mentors to discover and strengthen your career-building skills.",
      href: "/articleslist/inspirational-stories",
      icon: UserGroupIcon,
    },
    // {
    //   name: "GMI",
    //   description:
    //     "learn from mentors to discover and strengthen your career-building skills.",
    //   href: "/great-manager-institute",
    //   icon: UserGroupIcon,
    // },
  ];

  // ,
  //   {
  //     name: "Podcast",
  //     description:
  //       "Digital audio series on various topics, accessible on-demand.",
  //     href: "/podcast",
  //     icon: MicrophoneIcon,
  //   },

  const JobExploreMenu = [
    {
      id: 1,
      name: "Jobs this week by location",
      subMenu: CityJobsLastweek,
    },
    {
      id: 2,
      name: "Jobs by industry",
      subMenu: indusrtyJsonFilter,
    },
    {
      id: 3,
      name: "Jobs by company",
      subMenu: companyFilter,
    },
    {
      id: 4,
      name: "Jobs by city",
      subMenu: cityFilter,
    },
    {
      id: 5,
      name: "Jobs by skill",
      subMenu: positionFilter,
    },
    {
      id: 6,
      name: "Jobs by category",
      subMenu: jobfunctionFilter,
    },
    {
      id: 7,
      name: "Jobs by level",
      subMenu: levelsFilter,
    },
  ];

  const extraMenuMobile = [
    {
      name: "Home",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/",
      icon: HomeIcon,
    },
    {
      name: "Jobs",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/jobs",
      icon: BriefcaseIcon,
    },
    {
      name: "Courses",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/courses",
      icon: NewspaperIcon,
    },
    {
      name: "Events",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/events",
      icon: Squares2X2Icon,
    },
    {
      name: "HR Professionals",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/hrprofessionals",
      icon: UsersIcon,
    },
    {
      name: "Freelancer",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/freelancer",
      icon: ShieldCheckIcon,
    },
    // {
    //   name: "GPTW-23",
    //   description: "Explore the greatest workplaces of all time.",
    //   href: "/Great-Places-To-Work-2023",
    //   icon: BookOpenIcon,
    // },
    // {
    //   name: "Leaders of Change",
    //   description: "Independence Day Special Feature: Leaders of Change",
    //   href: "/leaders-of-change",
    //   icon: BookOpenIcon,
    // },

    {
      name: "Blogs",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/blogs",
      icon: Squares2X2Icon,
    },
    {
      name: "Forum",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/forum",
      icon: QuestionMarkCircleIcon,
    },
  ];

  const logoutHandler = () => {
    Cookies.remove("USERID");
    Cookies.remove("userLoggedIn");
    Cookies.remove("USEREMAIL");
    Cookies.remove("USERFULLNAME");
    Cookies.remove("USERMOBILENO");
    Cookies.remove("googleBiEmail");
    Cookies.remove("googleEmail");
    Cookies.remove("LoginType");
    Cookies.remove("pathname");
    // signOut();
    // sessionStorage.removeItem("_cltk");
    if (router.route === "/") {
      setUserLoggedIn(false);
    } else {
      setUserLoggedIn(false);
      router.replace("/");
    }
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const exploreJobRedirectionHandler = (item, subItem) => {
    if (item === "Jobs this week by location") {
      return `/jobsthisweek-in-${useRemoveSpaceUrl(subItem.name)}`;
    } else if (item === "Jobs by industry") {
      return `/${useRemoveSpaceUrl(subItem.name)}-jobs/industry/${subItem.keyIndex
        }`;
    } else if (item === "Jobs by company") {
      return `/NewCompanyProfile/${useRemoveSpaceUrl(subItem.name)}/${subItem.keyIndex
        }`;
    } else if (item === "Jobs by city") {
      return `/jobs-in-${useRemoveSpaceUrl(subItem.name)}`;
    } else if (item === "Jobs by skill") {
      return `/${useRemoveSpaceUrl(subItem.name)}-jobs/designation`;
    } else if (item === "Jobs by category") {
      return `/${useRemoveSpaceUrl(subItem.name)}-jobs/categories`;
    } else if (item === "Jobs by level") {
      return `/${useRemoveSpaceUrl(subItem.name)}-jobs/level`;
    }
  };

  const viewMoreRedirection = (item) => {
    if (item === "Jobs this week by location") {
      return "/jobsthisweek";
    } else if (item === "Jobs by industry") {
      return "/industry-jobs";
    } else if (item === "Jobs by company") {
      return "/companies-jobs";
    } else if (item === "Jobs by city") {
      return "/city-jobs";
    } else if (item === "Jobs by skill") {
      return "/designation-jobs";
    } else if (item === "Jobs by category") {
      return "/categories-jobs";
    } else {
      return;
    }
  };
  return (
    <div className="sticky top-0 z-50 drop-shadow-lg">
      <Popover className="relative   py-4  lg:py-4 bg-white ">
        <div className="flex items-center justify-between  lg:justify-start container mx-auto">
          <div className=" lg:hidden ">
            <Popover.Button className="  inline-flex items-center justify-center rounded-md    hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset  ring-timesPurple">
              <span className="sr-only">Open menu</span>
              <HumBurger className="h-8 w-8 rounded-md border p-1 " />
            </Popover.Button>
          </div>
          <div className="lg:hidden ">
            <a href="/" className="">
              <Image
                src="/mainHeader/TimesLogo.webp"
                alt="timesAscent logo"
                priority={true}
                width={160}
                height={40}
              />
            </a>
          </div>
          <div className="lg:hidden ">
            {userLoggedIn ? (
              <Menu as="div" className="relative ">
                <div>
                  <Menu.Button className="flex  items-center rounded-full bg-white text-sm focus:outline-none ">
                    <span className="sr-only">Open user menu</span>
                    {userFullName.trim() ? (
                      <div className="border rounded-full w-8 h-8 flex items-center justify-center text-timesPurple font-semibold">{`${nameFirstLetter}${nameLastLetter}`}</div>
                    ) : (
                      <UserIcon className="h-6  text-timesPurple " />
                    )}
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      <a
                        href={`/applicant-dashboard/${userId}`}
                        className={
                          "block px-4 py-2 text-sm text-gray-700 cursor-pointer border-b border-gray-100 last:border-none"
                        }
                      >
                        Dashboard
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="/contact-us"
                        className={
                          "block px-4 py-2 text-sm text-gray-700 cursor-pointer border-b border-gray-100 last:border-none"
                        }
                      >
                        Contact us
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <div
                        onClick={() => logoutHandler()}
                        className={
                          "block px-4 py-2 text-sm text-gray-700 cursor-pointer border-b border-gray-100 last:border-none"
                        }
                      >
                        Logout
                      </div>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <Menu as="div" className="relative ">
                <div>
                  <Menu.Button className="flex  items-center rounded-full bg-white text-sm focus:outline-none ">
                    <span className="sr-only">Open user menu</span>
                    <UserCircleIcon className="h-8  text-gray-500 " />
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      <a
                        href="/times-ascent-signin"
                        className={
                          "block px-4 py-2 text-sm text-gray-700 cursor-pointer border-b border-gray-100 last:border-none"
                        }
                      >
                        Sign in
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <div onClick={() => Cookies.set("pathname", pathname)}>
                        <a
                          href="/times-ascent-signup"
                          className={
                            "block px-4 py-2 text-sm text-gray-700 cursor-pointer border-b border-gray-100 last:border-none"
                          }
                        >
                          Sign up
                        </a>
                      </div>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            )}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-between">
            <div className="hidden lg:flex lg:flex-1 lg:items-center">
              <a href="/" className="flex mr-4">
                <span className="sr-only">Times Ascent</span>
                <div className=" ">
                  <Image
                    src="/mainHeader/TimesLogo.webp"
                    alt="timesAscent logo"
                    priority={true}
                    width={160}
                    height={40}
                  />
                </div>
              </a>

              <Popover.Group
                as="nav"
                className="flex  xl:w-[75%] justify-evenly"
              >
                <div
                  className={
                    "[&>div]:hover:visible [&>div]:hover:opacity-100   cursor-pointer p-2   relative text-black group    text-base font-medium hover:text-timesPurple focus:outline-none  focus:ring-indigo-500 focus:ring-offset-2"
                  }
                >
                  <a
                    href="/"
                    className={`${classNames(
                      pathname === "/"
                        ? "font-bold text-timesPurple [&>svg]:text-timesPurple"
                        : "font-medium text-gray-900"
                    )} flex items-center text-sm xl:text-base  hover:text-timesPurple [&>svg]:hover:text-timesPurple`}
                  >
                    <span className="text-inherit">Home</span>
                    <ChevronDownIcon
                      className={"text-inherit ml-1 h-5 w-5 "}
                      aria-hidden="true"
                    />
                  </a>

                  <div className="invisible transition ease-in-out duration-100 opacity-75 absolute top-6 bg-white z-20 -ml-4 mt-3 w-screen max-w-md transform lg:max-w-3xl">
                    <div className="overflow-hidden rounded-lg shadow-lg ring-1  ring-black ring-opacity-5">
                      <div className="relative grid gap-6  px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                        {homeMenu.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="-m-3 flex items-start rounded-lg p-3 hover:bg-gray-50"
                          >
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-timesPurple text-white sm:h-12 sm:w-12">
                              <item.icon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4">
                              <div className="text-base font-medium text-gray-900">
                                {item.name}
                              </div>
                              <div className="mt-1 text-sm text-gray-500">
                                {item.description}
                              </div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <>
                  <div
                    className={
                      "[&>div]:hover:visible [&>div]:hover:opacity-100   p-2   relative text-black group    text-base font-medium hover:text-timesPurple focus:outline-none  focus:ring-indigo-500 focus:ring-offset-2"
                    }
                  >
                    <a
                      href="/jobs"
                      className={`${classNames(
                        pathname === "/jobs"
                          ? "font-bold text-timesPurple [&>svg]:text-timesPurple"
                          : "font-medium text-gray-900"
                      )} flex items-center text-sm xl:text-base  hover:text-timesPurple [&>svg]:hover:text-timesPurple`}
                    >
                      <span className="text-inherit">Jobs</span>
                      <ChevronDownIcon
                        className={"text-inherit ml-1 h-5 w-5 "}
                        aria-hidden="true"
                      />
                    </a>

                    <div className="invisible transition ease-in-out duration-100 opacity-50 absolute top-6  z-20 -ml-4 mt-3 w-max transform ">
                      <div className=" rounded-lg shadow-lg ring-1 bg-white ring-black ring-opacity-5">
                        <div className="relative flex bg-white px-5 py-6  sm:p-6  rounded-lg">
                          <div className="border-r-2 w-max pr-4">
                            <div className="text-base  text-black pl-1 font-bold mb-4 ">
                              Job Collection
                            </div>
                            {latestJobSection?.map((item) => (
                              <a
                                key={item.name}
                                href={item.url}
                                className="block text-base p-1 cursor-pointer mb-1  font-medium text-gray-900 hover:text-red-500"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                          {/* check */}
                          <div>
                            <div className="ml-6 text-black text-base font-bold mb-4 ">
                              Explore Jobs
                            </div>
                            <div className="-m-3  flex items-start rounded-lg px-2 py-3  ">
                              {/* check */}
                              <div className="ml-4 w-full ">
                                {JobExploreMenu.map((item) => {
                                  return (
                                    <div
                                      key={item.id}
                                      className="relative text-base font-medium text-gray-900"
                                    >
                                      <div className="[&>div]:hover:visible  m-auto text-center cursor-pointer  flex items-center  w-full justify-between ">
                                        <div className="hover:text-red-500 p-2  hover:bg-gray-50 flex justify-between w-full">
                                          <span> {item.name}</span>
                                          <ChevronRightIcon className="ml-4 h-6  text-gray-500 " />
                                        </div>
                                        <div className=" invisible  absolute z-10 left-[245px] -top-[25%]  rounded ">
                                          <div className="inline-block align-middle w-[10px] h-[10px] border-[13px] absolute top-[10px] -left-[10px] border-b-transparent border-t-transparent border-r-[rgb(255,255,255)] border-l-0 " />
                                          <div className="bg-white max-h-[400px] overflow-auto w-max  max-w-[400px] p-2 rounded shadow-lg shadow-gray-500">
                                            {item.subMenu
                                              .slice(0, 20)
                                              .map((subItem) => {
                                                return (
                                                  <a
                                                    key={subItem.keyIndex}
                                                    className={` px-2 py-1  w-auto cursor-pointer 	 flex justify-between text-sm hover:text-red-500
                                                              `}
                                                    href={exploreJobRedirectionHandler(
                                                      item.name,
                                                      subItem
                                                    )}
                                                  // href="#"
                                                  >
                                                    <span className="line-clamp-1 text-left">
                                                      {subItem.name}
                                                    </span>
                                                    <span className="ml-4">
                                                      ({subItem.position})
                                                    </span>
                                                  </a>
                                                );
                                              })}

                                            {item.subMenu.length > 20 && (
                                              <a
                                                href={viewMoreRedirection(
                                                  item.name
                                                )}
                                                className="text-timesRed hover:underline text-sm mt-2 text-center cursor-pointer"
                                              >
                                                View More
                                              </a>
                                            )}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
                <a
                  href="/courses"
                  className={`${classNames(
                    pathname === "/courses"
                      ? "font-bold text-timesPurple"
                      : "font-medium text-black"
                  )} text-sm xl:text-base p-2  hover:text-timesPurple`}
                >
                  Courses
                </a>
                <a
                  href="/events"
                  className={`${classNames(
                    pathname === "/events"
                      ? "font-bold text-timesPurple"
                      : "font-medium text-black"
                  )} text-sm xl:text-base p-2  hover:text-timesPurple`}
                >
                  Events
                </a>
                <a
                  href="/hrprofessionals"
                  className={`${classNames(
                    pathname === "/hrprofessionals"
                      ? "font-bold text-timesPurple"
                      : "font-medium text-black"
                  )} text-sm xl:text-base p-2  hover:text-timesPurple`}
                >
                  HR Professionals
                </a>
                {/* <a
                  href="/leaders-of-change"
                  className={`${classNames(
                    pathname === "/leaders-of-change"
                      ? "font-bold text-timesPurple"
                      : "font-medium text-black"
                  )} text-sm xl:text-base p-2  hover:text-timesPurple`}
                >
                  Leaders of Change
                </a> */}
                <a
                  href="/freelancer"
                  className={`${classNames(
                    pathname === "/freelancer"
                      ? "font-bold text-timesPurple"
                      : "font-medium text-black"
                  )} text-sm xl:text-base p-2  hover:text-timesPurple`}
                >
                  Freelancer
                </a>
                {/* <a
                  href="/Great-Places-To-Work-2023"
                  className={`${classNames(
                    pathname === "/Great-Places-To-Work-2023"
                      ? "font-bold text-timesPurple"
                      : "font-medium text-black"
                  )} text-sm xl:text-base p-2  hover:text-timesPurple`}
                >
                  GPTW-23
                </a> */}
                <>
                  <div
                    className={
                      "[&>div]:hover:visible [&>div]:hover:opacity-100   p-2   relative text-black group    text-base font-medium hover:text-timesPurple focus:outline-none  focus:ring-indigo-500 focus:ring-offset-2"
                    }
                  >
                    <a
                      href="/blogs"
                      className={`${classNames(
                        pathname === "/blogs"
                          ? "font-bold text-timesPurple [&>svg]:text-timesPurple"
                          : "font-medium text-gray-900"
                      )} flex items-center text-sm xl:text-base  hover:text-timesPurple [&>svg]:hover:text-timesPurple`}
                    >
                      <span className="text-inherit">Blogs</span>
                      <ChevronDownIcon
                        className={"text-inherit ml-1 h-5 w-5 "}
                        aria-hidden="true"
                      />
                    </a>

                    <div className="invisible transition ease-in-out duration-100 opacity-50 absolute top-6  z-20 -ml-4 mt-3 w-max transform ">
                      <div className=" rounded-lg shadow-lg ring-1 bg-white ring-black ring-opacity-5">
                        <div className="relative flex bg-white px-5 py-6  sm:p-6  rounded-lg">
                          <div className="w-max">
                            {/* <div className="text-base  text-black pl-1 font-bold mb-4 ">
                              Job Collection
                            </div> */}
                            {blogMenu?.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block text-base p-1 cursor-pointer mb-1  font-medium text-gray-900 hover:text-red-500"
                              >
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
                <a
                  href="/forum"
                  className={`${classNames(
                    pathname === "/forum"
                      ? "font-bold text-timesPurple"
                      : "font-medium text-black"
                  )} text-sm xl:text-base p-2  hover:text-timesPurple`}
                >
                  Forum
                </a>
              </Popover.Group>
            </div>
            {userLoggedIn ? (
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="flex max-w-xs items-center border-b border-gray-100 last:border-none rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span className="sr-only">Open user menu</span>
                    {userFullName.trim() ? (
                      <div className="border rounded-full w-10 h-10 flex items-center justify-center text-timesPurple font-semibold">{`${nameFirstLetter}${nameLastLetter}`}</div>
                    ) : (
                      <UserIcon className="h-6  text-timesPurple " />
                    )}
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <Menu.Item>
                      <a
                        href={`/applicant-dashboard/${userId}`}
                        className={
                          "block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-50 border-b border-gray-100 last:border-none"
                        }
                      >
                        Dashboard
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="/contact-us"
                        className={
                          "block px-4 py-2 text-sm text-gray-700 cursor-pointer border-b hover:bg-gray-50 border-gray-100 last:border-none"
                        }
                      >
                        Contact us
                      </a>
                    </Menu.Item>
                    <Menu.Item>
                      <div
                        onClick={() => logoutHandler()}
                        className={
                          "block px-4 py-2 text-sm text-gray-700 cursor-pointer border-b hover:bg-gray-50 border-gray-100 last:border-none"
                        }
                      >
                        Logout
                      </div>
                    </Menu.Item>
                  </Menu.Items>
                </Transition>
              </Menu>
            ) : (
              <div
                className="flex items-center"
                onClick={() => Cookies.set("pathname", pathname)}
              >
                <a
                  href="/times-ascent-signin"
                  className="text-base font-medium text-timesPurple "
                >
                  Sign in
                </a>
                <a
                  href="/times-ascent-signup"
                  className="ml-6 inline-flex items-center justify-center rounded-md border border-transparent bg-timesPurple px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-purple-700"
                >
                  Sign up
                </a>
              </div>
            )}
          </div>
        </div>

        <Transition
          as={Fragment}
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="z-10 absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden"
          >
            <div className="max-h-[90vh] overflow-auto  divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pt-5 ">
                <div className="flex items-center justify-between">
                  <a href="/" className="relative outline-none">
                    <Image
                      src="/mainHeader/TimesLogo.webp"
                      alt="timesAscent logo"
                      priority={true}
                      width={160}
                      height={40}
                    />
                  </a>
                  <div className="-mr-2">
                    <Popover.Button className="inline-flex items-center justify-center rounded-md  p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="pb-6 ">
                  <div className="grid ">
                    {extraMenuMobile.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-base flex mt-4 items-center font-medium text-gray-900 hover:text-gray-700"
                      >
                        <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-md bg-timesPurple text-white sm:h-12 sm:w-12">
                          <item.icon className="h-4 w-4" aria-hidden="true" />
                        </div>
                        <span className="text-base font-semibold ml-2">
                          {item.name}
                        </span>{" "}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="">
                  <nav className="grid grid-cols-2 gap-4">
                    {homeMenu.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className=" flex items-center rounded-lg  hover:bg-gray-50"
                      >
                        <div className=" text-sm font-medium text-gray-900">
                          {item.name}
                        </div>
                      </a>
                    ))}
                  </nav>
                  {userLoggedIn ? (
                    <div className="my-6">
                      <a
                        onClick={logoutHandler}
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-timesPurple px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-purple-700"
                      >
                        Log out
                      </a>
                    </div>
                  ) : (
                    <div
                      className="my-6"
                      onClick={() => Cookies.set("pathname", pathname)}
                    >
                      <a
                        href="/times-ascent-signup"
                        className="flex w-full items-center justify-center rounded-md border border-transparent bg-timesPurple px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-purple-700"
                      >
                        Sign up
                      </a>
                      <div className="mt-6 text-center text-base font-medium text-gray-500">
                        Existing customer?{" "}
                        <a
                          href="/times-ascent-signin"
                          className="text-indigo-600 hover:text-indigo-500"
                        >
                          Sign in
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      {router.route !== "/applicant-dashboard/[candidateid]" &&
        router.route !== "/education/[candidateid]" &&
        router.route !== "/employementdetails/[candidateid]" &&
        router.route !== "/expdetail/[candidateid]" &&
        router.route !== "/editprofile/[candidateid]" ? (
        <>
          <div className="sm:hidden w-full hide-scroll-bar  overflow-x-scroll flex flex-col    ">
            <div className="flex  w-max overflow-hidden bg-timesPurple px-[5%] ">
              <ul className="flex flex-nowrap pt-2 pb-1 ">
                {extraMenuMobile.map((item) => {
                  return (
                    <li className="mr-8 last:mr-0 " key={`menu-${item.name}`}>
                      <a
                        className={classNames(
                          pathname === item.href
                            ? " text-sm border-b-2 rounded-l-sm rounded-r-sm leading-6 pb-[2px] border-gray-200 text-white font-semibold"
                            : " text-sm text-white font-semibold"
                        )}
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default MainHeader;
