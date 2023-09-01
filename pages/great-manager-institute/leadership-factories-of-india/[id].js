import {
  EnvelopeIcon,
  GlobeAltIcon,
  MapIcon,
  MapPinIcon,
  PhoneArrowUpRightIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/outline";
import MainHeader from "../../../Components/MainHeader";
import { Fragment, useRef, useState, useEffect } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  BellIcon,
  CheckBadgeIcon,
  ClockIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";


import getarticlewithoutimagearticle from "../../../public/JSON/getarticlewithoutimagearticle.json";
import Head from "next/head";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import BreadCrumbs from "../../../Components/BreadCrumbs";
import useRemoveSpaceUrl from "../../../Components/CustomHook/useRemoveSpaceUrl";
import dynamic from "next/dynamic";
import FourZeroFour from "../../../Components/FourZeroFour";
import { GetLeadershipFactoryById } from "../../api/gmiApi";
import SimilarCompany from "../../../Components/NewCompo/SimilarCompany";
import SimilarCompanyLeadership from "../../../Components/NewCompo/SimilarCompanyLeadership";
import Image from "next/image";
const Footer = dynamic(() => import("../../../Components/Footer"), { srr: true });
const ArticleWithoutImgCollection = dynamic(
  () => import("../../../Components/CardCollection/ArticleWithoutImgCollection"),
  { srr: true }
);
const SuccessModal = dynamic(
  () => import("../../../Components/Modal/SuccessModal"),
  { srr: true }
);

const LeadershipFactory = ({ props }) => {
  if (props.isError) {
    return <FourZeroFour />;
  }

  const leadershipFactoryDetail = props?.leadershipFactoryDetail?.Data;
  const userLoggedIn = Cookies.get("userLoggedIn");
  const [show, setShow] = useState(false);
  const [loggedIn, setLoggedIn] = useState(userLoggedIn);
  const [showModal, setShowModal] = useState(false);


  console.log(leadershipFactoryDetail, "dfsf")



  const router = useRouter();
  // useEffect(() => {

  //   CheckSourceDevice();
  //   setPage(parseInt(props.page));
  // }, [props.page]);

  // const pageChange = (val) => {
  //   let goodUrl = router.asPath.split("?");
  //   router.push(`/${goodUrl[0]}?page=${val}`);
  // };

  // const CheckSourceDevice = () => {
  //   if (
  //     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
  //       navigator.userAgent
  //     )
  //   ) {
  //     setDeviceType("Mobile");
  //   } else {
  //     setDeviceType("Desktop");
  //   }
  // };

  // const Event = () => {
  //   gtag.event({
  //     action: companydata.CompanyName,
  //     category: "Company Impressions",
  //     label: router.asPath,
  //   });
  // };
  // const JoCardEvent = () => {
  //   // gtag.pageview({ page_path: router.asPath });
  //   window.gtag("config", GA_TRACKING_ID, {
  //     page_location: router.asPath,
  //   });
  //   {
  //     jobListDetail?.data &&
  //       jobListDetail?.data?.map((item) => {
  //         gtag.event({
  //           action: item.CompanyName,
  //           category: "Company Impressions",
  //           label: router.asPath,
  //         });
  //       });
  //   }
  //   {
  //     jobListDetail?.data &&
  //       jobListDetail?.data?.map((item) => {
  //         gtag.event({
  //           action: item.CompanyName,
  //           category: "Job Impressions",
  //           label: item.JobId,
  //         });
  //       });
  //   }
  // };

  // useEffect(() => {
  //   Event();
  //   JoCardEvent();
  //   SimilarJobEvent();
  //   JoCardEvent();
  // }, [companydata.CompanyName, similarcompany?.data, jobListDetail?.data]);

  // const FollowButton = () => {
  //   if (loggedIn) {
  //     FollowApi();
  //   } else {
  //     Cookies.set(
  //       "pathname",
  //       "NewCompanyProfile/" + router.query.id[0] + "/" + router.query.id[1]
  //     );
  //     router.push("/times-ascent-signin");
  //   }
  // };

  // const FollowApi = () => {
  //   var myHeaders = new Headers();
  //   myHeaders.append(
  //     "Authorization",
  //     process.env.API_TOKEN_AUTH_SERVER
  //   );
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     CompanyId: router.query.id[1],
  //     CandidateId: Cookies.get("USERID"),
  //   });

  //   var requestOptions = {
  //     method: "POST",
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: "follow",
  //   };

  //   fetch(
  //     "https://api.timesascent.com/v1/admin1_1/FollowCompany",
  //     requestOptions
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       if (
  //         result.status_code === 200 &&
  //         result.status === "Success" &&
  //         result.message === "data save successfully"
  //       ) {
  //         setShowModal(true);
  //       }
  //     })
  //     .catch((error) => console.log("error", error));
  // };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }


  const myRefabout = useRef(0);
  const executeScrollAbout = () =>
    myRefabout.current.scrollIntoView({ behavior: "smooth" });
  const myRefIndustry = useRef(0);
  const executeScrollIndustry = () =>
    myRefIndustry.current.scrollIntoView({ behavior: "smooth" });
  const myRefContact = useRef(0);
  const executeScrollContact = () =>
    myRefContact.current.scrollIntoView({ behavior: "smooth" });
  const myRefJob = useRef(0);
  // const executeScrollJob = () =>
  //   myRefJob.current.scrollIntoView({ behavior: "smooth" });

  // const About = () => {
  //   return (
  //     <>

  //       {props?.leadershipFactoryDetail?.OtherLeadership?.map((item) => {
  //         return <li className="mt-2 text-sm text-gray-500">{item.CompanyName}</li>;
  //       })}
  //     </>
  //   );
  // };

  // const user = {
  //   name: leadershipFactoryDetail?.CompanyName,
  //   email: "chelsea.hagon@example.com",
  //   role: leadershipFactoryDetail?.Location,
  //   imageUrl: "https://timesascent.com/" + leadershipFactoryDetail?.CompanyLogo,
  //   Industry: leadershipFactoryDetail?.Industry,
  // };
  const navigation = [
    // { name: "Jobs", href: executeScrollJob, current: true },
    { name: "About", href: executeScrollAbout, current: false },
    { name: "Industry", href: executeScrollIndustry, current: false },

    { name: "Contact", href: executeScrollContact, current: false },
  ];
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];
  // const stats = [
  //   {
  //     label: "Jobs",
  //     value: similarcompany.TotlejobsCount ? similarcompany.TotlejobsCount : "",
  //     href:
  //       "/" + useRemoveSpaceUrl(companydata.CompanyName) + "-jobs/designation",
  //   },
  //   {
  //     label: "Position",
  //     value: similarcompany.TotleLocationCount
  //       ? similarcompany.TotleLocationCount
  //       : "",
  //   },
  //   {
  //     label: "Locations",
  //     value: similarcompany.DistinctLocation
  //       ? similarcompany.DistinctLocation
  //       : "",
  //     href: "/jobs-in-" + companydata.city?.split("/")[0],
  //   },
  // ];

  const actions = [
    {
      icon: ClockIcon,
      name: "About",
      about: leadershipFactoryDetail.companyDescription,
      href: "/",
      iconForeground: "text-teal-700",
      iconBackground: "bg-teal-50",
      ref: myRefabout,
    },
    {
      icon: CheckBadgeIcon,
      name: "Industry",
      about: leadershipFactoryDetail?.Industry,
      href: `/${useRemoveSpaceUrl(leadershipFactoryDetail?.Industry)}-jobs/industry/${leadershipFactoryDetail?.IndustryId}`,
      iconForeground: "text-purple-700",
      iconBackground: "bg-purple-50",
      ref: myRefIndustry,
    },
  ];

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const pages = [
    { name: "Great Manager Institute", href: "/great-manager-institute", current: false },

    { name: "Leadership Factory", href: "/great-manager-institute/leadership-factories-of-india", current: false },
    { name: leadershipFactoryDetail.CompanyName, href: "#", current: true },
  ];

  // const isFeaturedCompany = props.topcompany.data?.some((item) => {
  //   return item.company_id === router.query?.id[1];
  // });

  return (
    <>
      <Head>
        <title>{leadershipFactoryDetail?.MetaTitle}</title>
        <link
          rel="canonical"
          href={`https://timesascent.com${router.asPath}`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={leadershipFactoryDetail?.MetaDescription} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta property="og:title" content={leadershipFactoryDetail?.MetaTitle} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={leadershipFactoryDetail?.MetaDescription}
        />
        <meta
          property="og:url"
          content={`https://timesascent.com/${router.asPath}`}
        />
        <meta property="og:image" content={user.imageUrl} />
        <meta property="twitter:image" content={user.imageUrl} />
        <meta property="twitter:title" content={leadershipFactoryDetail?.MetaTitle} />
        <meta
          property="twitter:description"
          content={leadershipFactoryDetail?.MetaDescription}
        />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:site"
          content="https://twitter.com/@timesascent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://timesascent.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Jobs",
                  item: "https://timesascent.com/jobs",
                },

                {
                  "@type": "ListItem",
                  position: 3,
                  name: "New Company Profile",
                },
              ],
            }),
          }}
        />
      </Head>
      <SuccessModal
        openModal={showModal}
        closeModal={() => closeModalHandler()}
        headingText={`You have started following ${leadershipFactoryDetail?.CompanyName}.`}
        subHeadingText={
          "You will receive updates on all Job post and positions by this company."
        }
        buttonText="OK"
      />
      <MainHeader />
      <div className="relative py-3 md:py-3 lg:py-3 container">
        <BreadCrumbs data={pages} />
      </div>

      <div className="">
        <>
          <div className="min-h-full">
            <Popover
              as="header"
              className="bg-gradient-to-r from-sky-800 to-cyan-600 pb-24"
            >
              {({ open }) => (
                <>
                  <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="relative flex flex-wrap items-center justify-center lg:justify-between">
                      <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20">
                        <div className="lg:grid lg:grid-cols-3 lg:items-center lg:gap-8">
                          <div className="lg:col-span-2 block">
                            <nav className="flex space-x-4">
                              {navigation &&
                                navigation.map((item) => (
                                  <div
                                    key={item.name}
                                    onClick={item.href}
                                    className={classNames(
                                      item.current
                                        ? "text-white"
                                        : "text-cyan-100",
                                      "cursor-pointer text-sm font-medium rounded-md bg-white bg-opacity-0 px-3 py-2 hover:bg-opacity-10"
                                    )}
                                    aria-current={
                                      item.current ? "page" : undefined
                                    }
                                  >
                                    {item.name}
                                  </div>
                                ))}
                            </nav>
                          </div>
                        </div>
                      </div>

                      <div className="absolute right-0 flex-shrink-0 hidden">
                        <Popover.Button className="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-cyan-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                          <span className="sr-only">Open main menu</span>
                          {open ? (
                            <XMarkIcon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <Bars3Icon
                              className="block h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </Popover.Button>
                      </div>
                    </div>
                  </div>

                  <Transition.Root as={Fragment}>
                    <div className="lg:hidden">
                      <Transition.Child
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="duration-150 ease-in"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                      >
                        <Popover.Overlay className="fixed inset-0 z-20 bg-black bg-opacity-25" />
                      </Transition.Child>

                      <Transition.Child
                        as={Fragment}
                        enter="duration-150 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-150 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                      >
                        <Popover.Panel
                          focus
                          className="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition"
                        >
                          <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                            <div className="pt-3 pb-2">
                              <div className="flex items-center justify-between px-4">
                                <div>
                                  <img
                                    className="h-8 w-auto"
                                    src="https://tailwindui.com/img/logos/mark.svg?color=cyan&shade=600"
                                    alt="Your Company"
                                  />
                                </div>
                                <div className="-mr-2">
                                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500">
                                    <span className="sr-only">Close menu</span>
                                    <XMarkIcon
                                      className="h-6 w-6"
                                      aria-hidden="true"
                                    />
                                  </Popover.Button>
                                </div>
                              </div>
                              <div className="mt-3 space-y-1 px-2">
                                {navigation.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                  >
                                    {item.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                            <div className="pt-4 pb-2">
                              <div className="flex items-center px-5">
                                <div className="flex-shrink-0">
                                  <div className={"h-10 w-10 mx-auto relative"}>
                                    <Image
                                      style={{ objectFit: "fill" }}
                                      src={leadershipFactoryDetail?.imagePath}
                                      alt={leadershipFactoryDetail?.imagePath}
                                      fill
                                    // placeholder="blur"
                                    // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
                                    />
                                  </div>
                                </div>
                                <div className="ml-3 min-w-0 flex-1">
                                  <div className="truncate text-base font-medium text-gray-800">
                                    {leadershipFactoryDetail?.CompanyName}
                                  </div>
                                  <div className="truncate text-sm font-medium text-gray-500">
                                    {leadershipFactoryDetail?.CompanyEmail}
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  className="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
                                >
                                  <span className="sr-only">
                                    View notifications
                                  </span>
                                  <BellIcon
                                    className="h-6 w-6"
                                    aria-hidden="true"
                                  />
                                </button>
                              </div>
                              <div className="mt-3 space-y-1 px-2">
                                {userNavigation.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800"
                                  >
                                    {item.name}
                                  </a>
                                ))}
                              </div>
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition.Child>
                    </div>
                  </Transition.Root>
                </>
              )}
            </Popover>
            <main className="-mt-24 pb-8">
              <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h1 className="sr-only">Profile</h1>

                <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                  <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                    <section aria-labelledby="profile-overview-title">
                      <div className="overflow-hidden rounded-lg bg-white shadow">
                        <h2 className="sr-only" id="profile-overview-title">
                          Profile Overview
                        </h2>
                        <div className="bg-white p-6">
                          <div className="sm:flex sm:items-center sm:justify-between">
                            <div className="sm:flex sm:space-x-5">
                              <div className="flex-shrink-0">
                                {!leadershipFactoryDetail?.CompanyLogo ? (
                                  <div className={"h-28 w-28 mx-auto relative"}>
                                    <Image
                                      style={{ objectFit: "fill" }}
                                      src="/TimeDummyLogo.webp"
                                      alt="/TimeDummyLogo.webp"
                                      fill
                                    // placeholder="blur"
                                    // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
                                    />
                                  </div>
                                ) : (
                                  <div className={"h-28 w-28 mx-auto relative"}>
                                    <Image
                                      style={{ objectFit: "fill" }}
                                      src={leadershipFactoryDetail?.CompanyLogo}
                                      alt={leadershipFactoryDetail?.CompanyLogo}
                                      fill
                                    // placeholder="blur"
                                    // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
                                    />
                                  </div>
                                )}
                              </div>
                              <div className="mt-4 text-center sm:mt-0 sm:pt-1 sm:text-left">
                                <p className="text-sm font-medium text-gray-600">
                                  {leadershipFactoryDetail?.Industry}
                                </p>
                                <h1 className="text-xl font-bold text-gray-900 sm:text-2xl">
                                  {leadershipFactoryDetail?.CompanyName}
                                </h1>
                                <p className="text-sm font-medium text-gray-600">
                                  {leadershipFactoryDetail?.location}
                                </p>
                              </div>
                            </div>
                            {/* <div
                              // onClick={() => FollowButton()}
                              className="flex justify-center py-2 sm:py-0"
                            >
                              <button
                                type="button"
                                className="inline-flex items-center rounded-md border border-transparent bg-purple-600 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              >
                                <PlusCircleIcon
                                  className="-ml-0.5 mr-2 h-4 w-4"
                                  aria-hidden="true"
                                />
                                Follow
                              </button>
                            </div> */}
                          </div>
                        </div>
                        {/* <div className="grid grid-cols-1 divide-y divide-gray-200 border-t border-gray-200 bg-gray-50 sm:grid-cols-3 sm:divide-y-0 sm:divide-x">
                          {stats.map((stat) => (
                            <a
                              href={stat.href}
                              target={"_self"}
                              key={stat.label}
                              className="px-6 py-5 text-center text-sm font-medium"
                            >
                              <span className="text-gray-900">
                                {stat.value}
                              </span>{" "}
                              <span className="text-gray-600">
                                {stat.label}
                              </span>
                            </a>
                          ))}
                        </div> */}
                      </div>
                    </section>

                    <section aria-labelledby="quick-links-title">
                      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid  sm:gap-px sm:divide-y-0">
                        <h2 className="sr-only" id="quick-links-title">
                          Quick links
                        </h2>
                        {actions.map((action, actionIdx) => (
                          <div
                            ref={action.ref}
                            key={action.name}
                            className={classNames(
                              actionIdx === 0
                                ? "rounded-tl-lg rounded-tr-lg sm:rounded-tr-none"
                                : "",
                              actionIdx === 1 ? "sm:rounded-tr-lg" : "",
                              actionIdx === actions.length - 2
                                ? "sm:rounded-bl-lg"
                                : "",
                              actionIdx === actions.length - 1
                                ? "rounded-bl-lg rounded-br-lg sm:rounded-bl-none"
                                : "",
                              "relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500"
                            )}
                          >
                            <div>
                              <span
                                className={classNames(
                                  action.iconBackground,
                                  action.iconForeground,
                                  "rounded-lg inline-flex p-3 ring-4 ring-white"
                                )}
                              >
                                <action.icon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                            <div className="mt-2">
                              <h3 className="text-lg font-medium">
                                <a
                                  href={action.href}
                                  className={
                                    action.name === "About"
                                      ? "pointer-events-none"
                                      : "focus:outline-none"
                                  }
                                >
                                  <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                  />
                                  {action.name}
                                </a>
                              </h3>

                              <ul>
                                <div className="text-sm text-gray-500">
                                  {action.about}
                                </div>
                              </ul>

                              {action.text}
                            </div>
                            {action.name === "About" ? (
                              <></>
                            ) : (
                              <span
                                className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400"
                                aria-hidden="true"
                              >
                                <svg
                                  className="h-6 w-6"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                                </svg>
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                      <div ref={myRefJob}></div>
                      {/* <div className="py-4">
                        <div className="relative ">
                          <a href="/latest-jobs">
                            <h2 className="text-lg font-bold text-gray-900 lg:text-lg">
                              Jobs
                            </h2>
                          </a>
                        </div>
                        <div className="pt-4 lg:grid grid grid-cols-1 lg:grid-cols-3 sm:grid sm:grid-cols-2 gap-4">
                          {jobListDetail?.data &&
                            jobListDetail?.data
                              ?.slice(0, 6)
                              .map((item, keyindex) => {
                                return (
                                  <div className="mt-6 sm:mt-2">
                                    {deviceType !== "Mobile" ? (
                                      <JobEventCard
                                        key={keyindex}
                                        data={item}
                                        device={deviceType}
                                      />
                                    ) : (
                                      <GlobalJobs
                                        key={keyindex}
                                        data={item}
                                        device={deviceType}
                                      />
                                    )}
                                  </div>
                                );
                              })}
                        </div>

                        <div className="flex justify-end mt-4">
                          {jobListDetail?.data?.length ? (
                            <NewPagination
                              maxPage={maxPage}
                              page={page}
                              pageChange={pageChange}
                            />
                          ) : (
                            ""
                          )}
                        </div>
                        {!isFeaturedCompany && (
                          <div className="mt-6">
                            {adShow ? (
                              <>
                                {" "}
                                <div className=" hidden md:block ">
                                  <GoogleAd_Hrec
                                    path="/1064661/ta.com_hrec1_Jobs"
                                    ads_Id="div-gpt-ad-1674564963656-0"
                                    size={[[728, 90]]}
                                  />
                                </div>
                                <div className="block md:hidden">
                                  <GoogleAd_Hrec
                                    path="/1064661/ta.com_hrec1_Mob_Jobs"
                                    ads_Id="div-gpt-ad-1674565632463-0"
                                    size={[[320, 50]]}
                                  />
                                </div>
                              </>
                            ) : (
                              <SkeletonHrec />
                            )}
                          </div>
                        )}
                      </div> */}
                      <div ref={myRefContact}></div>
                      <div className="divide-y divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid  sm:gap-px sm:divide-y-1">
                        <h2 className="sr-only" id="quick-links-title">
                          Quick links
                        </h2>
                        <div className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-cyan-500">
                          <div>
                            <span
                              className={classNames(
                                "text-sky-700",
                                "bg-purple-50",
                                "rounded-lg inline-flex p-3 ring-4 ring-white"
                              )}
                            >
                              <UsersIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </span>
                          </div>

                          <div className="sm:col-span-2">
                            <dt className="text-lg font-medium my-2">
                              Contact us
                            </dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              <ul
                                role="list"
                                className="divide-y divide-gray-200 rounded-md border border-gray-200"
                              >
                                {leadershipFactoryDetail?.email ? (
                                  <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                    <div className="flex w-0 flex-1 items-center">
                                      <EnvelopeIcon
                                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-2 w-0 flex-1 truncate">
                                        Email
                                      </span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                      <a
                                        href={`mailto:${leadershipFactoryDetail?.email}`}
                                        target={"_self"}
                                        className={
                                          leadershipFactoryDetail?.email
                                            ? "font-medium text-indigo-600 hover:text-indigo-500"
                                            : "font-medium text-gray-500 pointer-events-none"
                                        }
                                      >
                                        {leadershipFactoryDetail?.email}
                                      </a>
                                    </div>
                                  </li>
                                ) : (
                                  <></>
                                )}
                                {leadershipFactoryDetail?.phone ? (
                                  <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                    <div className="flex w-0 flex-1 items-center">
                                      <PhoneArrowUpRightIcon
                                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-2 w-0 flex-1 truncate">
                                        Contact
                                      </span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                      <a
                                        href={`tel:${leadershipFactoryDetail?.phone}`}
                                        target={"_self"}
                                        className={
                                          leadershipFactoryDetail?.phone
                                            ? "font-medium text-indigo-600 hover:text-indigo-500"
                                            : "font-medium text-gray-500 pointer-events-none"
                                        }
                                      >
                                        {leadershipFactoryDetail?.phone}
                                      </a>
                                    </div>
                                  </li>
                                ) : (
                                  <></>
                                )}
                                {leadershipFactoryDetail?.website ? (
                                  <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                                    <div className="flex w-0 flex-1 items-center">
                                      <GlobeAltIcon
                                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-2 w-0 flex-1 truncate">
                                        Company Website
                                      </span>
                                    </div>
                                    <div className="ml-4 flex-shrink-0">
                                      <a
                                        href={"https://" + leadershipFactoryDetail?.website}
                                        target={"_self"}
                                        className={
                                          leadershipFactoryDetail?.website
                                            ? "font-medium text-indigo-600 hover:text-indigo-500"
                                            : "font-medium text-gray-500 pointer-events-none"
                                        }
                                      >
                                        {leadershipFactoryDetail?.website}
                                      </a>
                                    </div>
                                  </li>
                                ) : (
                                  <></>
                                )}
                                <li className=" py-3 pl-3 pr-4 text-sm">
                                  <div className="flex items-center justify-between w-full">
                                    <div className="flex w-0 flex-1 items-center">
                                      <MapIcon
                                        className="h-5 w-5 flex-shrink-0 text-gray-400"
                                        aria-hidden="true"
                                      />
                                      <span className="ml-2 w-0 flex-1 truncate">
                                        Address
                                      </span>
                                    </div>

                                    <div
                                      className={
                                        leadershipFactoryDetail?.address
                                          ? "ml-4 flex-shrink-0 cursor-pointer"
                                          : "ml-4 flex-shrink-0 pointer-events-none"
                                      }
                                      onClick={() => setShow(!show)}
                                    >
                                      <div
                                        className={
                                          leadershipFactoryDetail?.address
                                            ? "font-medium text-indigo-600 hover:text-indigo-500"
                                            : "font-medium text-gray-500 pointer-events-none"
                                        }
                                      >
                                        Get Details
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
                                          {leadershipFactoryDetail?.address
                                            ? leadershipFactoryDetail?.address
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
                              </ul>
                            </dd>
                          </div>
                        </div>
                      </div>
                    </section>
                    {/* <SimilarJob data1={companydata} /> */}
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="border border-gray-50 shadow rounded">
                      <SimilarCompanyLeadership topcompany={props.leadershipFactoryDetail.OtherLeadership} />
                    </div>
                    {/* {!isFeaturedCompany && (
                      <div className="my-6 w-[300px] h-[250px] bg-gray-300 flex items-center text-center mx-auto">
                        {adShow ? (
                          <GoogleAd_300x250
                            path="/1064661/ta.com_mrec1_job"
                            ads_Id="div-gpt-ad-1674554579449-0"
                            size={[[300, 250]]}
                          />
                        ) : (
                          <SkeletonMrec />
                        )}
                      </div>
                    )} */}

                    <div className="border border-gray-50 shadow rounded">
                      <div className="px-6 py-3 bg-white">
                        <ArticleWithoutImgCollection
                          data={getarticlewithoutimagearticle.data.slice(0, 3)}
                          href={"/"}
                        />
                      </div>
                    </div>
                    {/* {!isFeaturedCompany && (
                      <div className="mt-6">
                        {adShow ? (
                          <GoogleAd_300x250
                            path="/22637491760/timesascent.com_erelego_d_ap_300x250"
                            ads_Id="div-gpt-ad-1674643828785-0"
                            size={[[300, 250]]}
                          />
                        ) : (
                          <SkeletonMrec />
                        )}
                      </div>
                    )} */}
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </>
      </div>
    </>
  );
};

export default LeadershipFactory;

export async function getServerSideProps(context) {
  let props = {};
  try {
    const page = context.query.page ? context.query.page : 1;

    const leadershipFactoryDetail = await GetLeadershipFactoryById({
      LeadershipSeoURL: `great-manager-institute/leadership-factories-of-india/${context.query.id}`
    })

    props = {
      leadershipFactoryDetail,
      page,
    };
  } catch (err) {
    props = {
      isError: true,
    };
  }

  return { props: { props } };
}
