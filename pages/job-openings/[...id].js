import { useState, useEffect } from "react";

import {
  ArrowTrendingUpIcon,
  FireIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import MainHeader from "../../Components/MainHeader";
import { SearchJobCard } from "../api/jobsApi";
import NewJobCard from "../../Components/jobs/NewJobCard";

import SearchAreaInput from "../../Components/jobs/JobDetail/SearchAreaInput";
import { useRouter } from "next/router";
import BreadCrumbs from "../../Components/BreadCrumbs";
import Footer from "../../Components/Footer";
import Head from "next/head";
import NewPagination from "../../Components/NewPagination";
import * as gtag from "../../lib/gtag";
import Cookies from "js-cookie";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
import ArtcleWidget from "../../Components/ArticleWidget";
import { SearchArticlesResponse } from "../api/articleApi";

import GoogleAd_Hrec from "../../Components/GoogleAds/GoogleAd_Hrec";
import SkeletonMrec from "../../Components/Skeleton/SkeletonMrec";
import SkeletonHrec from "../../Components/Skeleton/SkeletonHrec";
import FourZeroFour from "../../Components/FourZeroFour";

const jobsearch = (props) => {
  console.log("exeuuuu");
  const router = useRouter();
  if (props.props.isPageError) {
    return <FourZeroFour />;
  }
  // const getForherSreenData = props.props.getForherSreenData;
  const articleData = props.props.articledata.data;
  const PopularCity = props.props.cityFilterData;
  const PopularDesignations = props.props.positionFilterData;
  const Company = props.props.companyFilterData;
  const industry = props.props.indusrtyJsonFilterData;
  const [jobDataSearch, setJobDataSearch] = useState([]);
  const [count, setCount] = useState("");
  const [likecount, setLikeCount] = useState("");
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobLike, setJobLike] = useState("");

  const [page, setPage] = useState(parseInt(props.props.page));
  const [maxPage, setMaxPage] = useState(1);
  const [showLocation, setShowLocation] = useState(false);
  const [showTitle, setShowTitle] = useState(false);
  const [saveLikeJob, setSaveLikeJob] = useState([]);
  const [selectTab, setSelectTab] = useState(0);
  const [deviceType, setDeviceType] = useState("");
  const USERID = Cookies.get("USERID");
  const loggedIn = Cookies.get("userLoggedIn");
  const [adShow, setadShow] = useState(false);
  const [btnLoader, setBtnLoader] = useState(false);
  useEffect(() => {
    selectTab === 0 && setJobDataSearch(props.props.searchJob.data);
    selectTab === 0 && setCount(props.props.searchJob);
    setPage(parseInt(props.props.page));
    selectTab === 0
      ? setMaxPage(Math.ceil(props.props.searchJob.count / 24))
      : setMaxPage(Math.ceil(likecount / 24));
  }, [props.props.page, selectTab]);



  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    setPage(parseInt(props.props.page));
    CheckSourceDevice();
    return () => clearTimeout(timeout);
  }, [props.props.page]);
  useEffect(
    (page) => {
      selectTab === 1 && MostLikeJob(page);
    },
    [page]
  );
  useEffect(() => {
    if (selectTab === 1) {
      setMaxPage(Math.ceil(likecount / 24));
    }
  }, [likecount]);



  const CheckSourceDevice = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
        navigator.userAgent
      )
    ) {
      setDeviceType("Mobile");
    } else {
      setDeviceType("Desktop");
    }
  };
  const FollowButton = (id) => {
    if (loggedIn) {
      LikeJob(id);
    } else {
      Cookies.set("pathname", router.asPath);
      router.push("/times-ascent-signin");
    }
  };

  const Event = () => {
    const pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    gtag.pageSpeedEvent({
      action: "Jobs opening Page Speed", pageTitle: "Jobs opening page", load_time: pageLoadTime
    });
    {
      jobDataSearch.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Company Impressions",
          label: router.asPath,
        });
      });
    }
  };
  const JobEvent = () => {
    {
      jobDataSearch.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Job Impressions",
          label: item.JobId,
        });
      });
    }
  };
  const ArticleEvent = () => {
    {
      articleData.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
  };
  useEffect(() => {
    Event();
    JobEvent();
    ArticleEvent();
  }, [jobDataSearch, articleData]);

  const navigation = [
    {
      name: "Snaphunt",
      href: "/partner-jobs/snaphunt",
      icon: FireIcon,
      current: false,
    },
    {
      name: "Cutshort",
      href: "/partner-jobs/cutshort",
      icon: UserGroupIcon,
      current: false,
    },
    {
      name: "whatjobs",
      href: "/partner-jobs/whatjobs",
      icon: ArrowTrendingUpIcon,
      current: false,
    },
  ];

  const tabs = [
    { name: "Recent", href: "#", current: true },
    { name: "Most Liked", href: "#", current: false },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const checkJSON = () => {
    let fakeArr = [];
    fakeArr = PopularDesignations.filter((item) => {
      return item.skill === title;
    });
    if (fakeArr.length === 0) {
      return false;
    } else {
      return true;
    }
  };

  const JobCardSearchByLocation = (e) => {
    e.preventDefault();
    saveSearchJob();
    setBtnLoader(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      SearchLocation: location,
      Search_Term: title,
      isGlobal: "",
      isGovernment: "",
      page: 1,
      thisWeek: "",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/JobCardSearch`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200 && result.status === "SUCCESS") {
          if (title && location) {
            window.open(
              "/" +
              title
                .replace(/[^a-zA-Z ]/g, " ")
                .split(" ")
                .join("-")
                .split(" ")
                .join("-")
                .split("--")
                .join("-")
                .toLowerCase() +
              "-jobs-in-" +
              location
                .replace(/[^a-zA-Z ]/g, " ")
                .split(" ")
                .join("-")
                .split(" ")
                .join("-")
                .split("--")
                .join("-")
                .toLowerCase(), "_self"
            );
          } else if (location) {
            window.open(
              "/jobs-in-" +
              location
                .replace(/[^a-zA-Z ]/g, " ")
                .split(" ")
                .join("-")
                .split(" ")
                .join("-")
                .split("--")
                .join("-")
                .toLowerCase(), "_self"
            );
          } else if (checkJSON()) {
            window.open(
              "/" +
              title
                .replace(/[^a-zA-Z ]/g, " ")
                .split(" ")
                .join("-")
                .split(" ")
                .join("-")
                .split("--")
                .join("-")
                .toLowerCase() +
              "-jobs/designation", "_self"
            );
          } else {
            window.open(
              "/latest-jobs/" +
              title
                .replace(/[^a-zA-Z ]/g, " ")
                .split(" ")
                .join("-")
                .split(" ")
                .join("-")
                .split("--")
                .join("-")
                .toLowerCase(), "_self"
            );
          }
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setBtnLoader(false);
      });
  };

  const saveSearchJob = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      searchTerms: title,
      type: location,
      USERID: USERID ? USERID : ""

    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.Live_API_URL}/adminapi/search-term`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log("saved", result);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setBtnLoader(false);
      });
  };

  const LikeJob = (id) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      CandidateId: USERID,
      JobId: id,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(`${process.env.Live_API_URL}/v1/admin1_1/LikeJob`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (
          result.status === "Success" &&
          result.status_code === 200 &&
          result.message === "data save successfully"
        ) {
          handleCheck(id);
        }
      })
      .catch((error) => console.log("error", error));
  };
  const handleCheck = (value) => {
    if (value) {
      if (!saveLikeJob.includes(value)) {
        setSaveLikeJob([...saveLikeJob, value]);
      } else {
        setSaveLikeJob(saveLikeJob.filter((item) => item !== value));
      }
    }
  };

  const MostLikeJob = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      page: page,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/MostlikedJobs`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (
          result.status_code === 200 &&
          result.status === "SUCCESS" &&
          result.message === "data found"
        ) {
          setJobDataSearch(result.data);
          setLikeCount(result.count);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const pages = [
    {
      name: "Jobs",
      href: "/jobs",
      current: false,
    },
    {
      name: "Jobs Search",
      href: "#",
      current: true,
    },
  ];

  const pageChange = (val) => {
    let goodUrl = router.asPath.split("?");
    router.push(`/${goodUrl[0]}?page=${val}`);
  };

  const metaTitle = () => {
    if (router.query.id[0].split("-").shift() === "jobs") {
      return `Jobs in ${router.query.id[0]
        .split("-in-")[1]
        ?.replace(/[^a-zA-Z ]/g, " ")
        .split(" ")
        .join("-")
        .split(" ")
        .join("-")
        .split("--")
        .join("-")
        .toLowerCase()}  -timesascent.com`;
    } else if (
      router.query.id[1] === "categories" ||
      router.query.id[1] === "experience" ||
      router.query.id[1] === "level" ||
      router.query.id[1] === "designation" ||
      router.query.id[1] === "industry"
    ) {
      return `${router.query.id[0].split("-jobs")[0]} Jobs at timesascent.com`;
    } else if (router.query.id[0] === "Global-Placement-jobs") {
      return `Global Placement Jobs at timesascent.com`;
    } else if (router.query.id[0] === "Government-jobs") {
      return `Government job openings at timesascent.com`;
    } else if (router.query.id[0] === "jobsthisweek") {
      return `Latest Jobs This Week -TimesAscent.com	`;
    } else if (router.query.id[0].split("-in-").shift() === "jobsthisweek") {
      return `Latest Jobs This week in ${router.query.id[0]
        .split("-in-")[1]
        ?.replace(/-/g, " ")} TimesAscent.com`;
    } else if (router.query.id[0] === "trending-jobs") {
      return `Trending jobs at timesascent.com`;
    } else if (router.query.id[0] === "partner-jobs") {
      return `Partner jobs at timesascent.com`;
    } else if (router.query.id[0] === "wednesday-jobs") {
      return `Wednesday job openings at timesascent.com	`;
    } else if (router.query.id[0] === "cxo-jobs") {
      return `CEO, CTO, CMO ,COO ,CAO, CXO jobs at timesascent.com`;
    } else if (router.query.id[0] === "cxo-jobs") {
      return `CEO, CTO, CMO ,COO ,CAO, CXO jobs at timesascent.com`;
    }
    // else if(router.query.id[0].split("-jobs-in-")[0]===title&&router.query.id[0].split("-jobs-in-")[1]===location){
    //     return `/${router.query.id[0].split("jobs-in-")[0]} in ${router.query.id[0].split("jobs-in-")[1]}`
    // }

    // else if (router.asPath===(`/${position}-jobs-in-${location}`)) {
    //     return `${router.query.id[0].split("-jobs-in-")[0]} Jobs in ${router.query.id[0].split("-jobs-in-")[1]}`;
    // }
    // if (location && ( position)) {
    //     return `${( position)?.replace(
    //         /-/g,
    //         " "
    //     )} jobs in ${location?.replace(/-/g, " ")} -timesascent.com`;
    // } else if (location) {
    //     return `Jobs in ${location?.replace(/-/g, " ")} -timesascent.com`;
    // } else if ( position || searchedValue) {
    //     return `${( position || searchedValue)?.replace(
    //         /-/g,
    //         " "
    //     )} jobs -timesascent.com`;
    // } else if (location) {
    //     let locationMeta = location?.replace(/-/g, " ");
    //     return `Jobs in ${locationMeta || keywordMeta}  -timesascent.com`;
    // }
    // if (searchedValue && searchedValue !== "Latest"){
    //     return `Latest Job Openings, Top available Vacancies for ${searchedValue?.replace(
    //         /-/g,
    //         " "
    //     )}-timesascent.com`;}
    //
    else return `Latest jobs at timesascent.com`;
  };

  const metaDesc = () => {
    if (router.query.id[0].split("-").shift() === "jobs") {
      return `latest job openings in ${router.query.id[0]
        .split("-in-")[1]
        ?.replace(/[^a-zA-Z ]/g, " ")
        .split(" ")
        .join("-")
        .split(" ")
        .join("-")
        .split("--")
        .join("-")
        .toLowerCase()},Apply Online at timesascent.com`;
    } else if (
      router.query.id[1] === "categories" ||
      router.query.id[1] === "experience" ||
      router.query.id[1] === "level" ||
      router.query.id[1] === "designation" ||
      router.query.id[1] === "industry"
    ) {
      return `Latest ${router.query.id[0]
        .split("-jobs")[0]
        .replace(/[^a-zA-Z ]/g, " ")} Jobs , Apply for ${router.query.id[0]
          .split("-jobs")[0]
          .replace(/[^a-zA-Z ]/g, " ")} Jobs Online -TimesAscent.com	`;
    } else if (router.query.id[1] === "level") {
      return `TOP job openings for ${router.query.id[0]
        .split("-jobs")[0]
        .replace(/[^a-zA-Z ]/g, " ")} at timesascent.com`;
    } else if (router.query.id[1] === "industry") {
      return `Latest Job vacancies for  ${router.query.id[0]
        .split("-jobs")[0]
        .replace(/[^a-zA-Z ]/g, " ")} jobs. Apply Online at Timesascent.com`;
    } else if (router.query.id[0] === "Global-Placement-jobs") {
      return `Latest International Job vacancies for Global Placement at timesascent.com`;
    } else if (router.query.id[0] === "Government-jobs") {
      return `Latest Government job vacancies for Goverment jobs at timesascent.com`;
    } else if (router.query.id[0] === "jobsthisweek") {
      return `Latest Jobs openings this week -Timesascent.com`;
    } else if (router.query.id[0].split("-in-").shift() === "jobsthisweek") {
      return `Latest Job vacancies this week in ${router.query.id[0]
        .split("-in-")[1]
        ?.replace(/-/g, " ")}. Apply Online at Timesascent.com`;
    } else if (router.query.id[0] === "trending-jobs") {
      return `Most trending job vacancies at timesascent.com`;
    } else if (router.query.id[0] === "partner-jobs") {
      return `Latest Partner jobs vacancies at timesascent.com`;
    } else if (router.query.id[0] === "wednesday-jobs") {
      return `Latest wednesday job vacancies at timesascent.com`;
    } else if (router.query.id[0] === "cxo-jobs") {
      return `TOP CXO Jobs. Job openings for  CEO  CMO  COO  CIO  President at timesascent.com`;
    }

    // else if(router.query.id[0].split("-jobs-in-")[0]===title&&router.query.id[0].split("-jobs-in-")[1]===location){
    //     return `/${router.query.id[0].split("jobs-in-")[0]} in ${router.query.id[0].split("jobs-in-")[1]}`
    // }

    // else if (router.asPath===(`/${position}-jobs-in-${location}`)) {
    //     return `${router.query.id[0].split("-jobs-in-")[0]} Jobs in ${router.query.id[0].split("-jobs-in-")[1]}`;
    // }
    // if (location && ( position)) {
    //     return `${( position)?.replace(
    //         /-/g,
    //         " "
    //     )} jobs in ${location?.replace(/-/g, " ")} -timesascent.com`;
    // } else if (location) {
    //     return `Jobs in ${location?.replace(/-/g, " ")} -timesascent.com`;
    // } else if ( position || searchedValue) {
    //     return `${( position || searchedValue)?.replace(
    //         /-/g,
    //         " "
    //     )} jobs -timesascent.com`;
    // } else if (location) {
    //     let locationMeta = location?.replace(/-/g, " ");
    //     return `Jobs in ${locationMeta || keywordMeta}  -timesascent.com`;
    // }
    // if (searchedValue && searchedValue !== "Latest"){
    //     return `Latest Job Openings, Top available Vacancies for ${searchedValue?.replace(
    //         /-/g,
    //         " "
    //     )}-timesascent.com`;}
    //
    else return `latest job vacancies at timesascent.com`;
  };

  const JobHeading = () => {
    if (router.query.id[0] === "latest-jobs") {
      return "LATEST JOBS";
    } else if (router.query.id[0] === "wednesday-jobs") {
      return "WEDNESDAY JOBS";
    } else if (router.query.id[0] === "global-placement-jobs") {
      return "GLOBAL JOBS";
    } else if (router.query.id[0] === "partner-jobs") {
      return "PARTNER JOBS";
    } else if (router.query.id[0] === "government-jobs") {
      return "GOVERNMENT JOBS";
    } else if (router.query.id[0] === "cxo-jobs") {
      return "CXO JOBS";
    } else if (router.query.id[0] === "trending-jobs") {
      return "TRENDING JOBS";
    } else if (router.query.id[0] === "jobsthisweek") {
      return "JOBS THIS WEEK";
    } else if (router.query.id[0].split("-in-").shift() === "jobsthisweek") {
      return `JOBS THIS WEEK IN ${router.query.id[0]
        .split("-in-")[1]
        ?.replace(/-/g, " ")
        .toUpperCase()}`;
    } else if (router.query.id[1] === "industry") {
      return `${router.query.id[0]
        .split("-jobs")[0]
        .replace(/[^a-zA-Z ]/g, " ")
        .toUpperCase()} JOBS`;
    } else if (router.query.id[0].split("-in-")[0] === "jobs") {
      return `JOBS IN ${router.query.id[0]
        .split("-in-")[1]
        .replace(/[^a-zA-Z ]/g, " ")
        .toUpperCase()}`;
    } else if (router.query.id[1] === "designation") {
      return `${router.query.id[0]
        .split("-jobs")[0]
        .replace(/[^a-zA-Z ]/g, " ")
        .toUpperCase()} JOBS`;
    } else if (router.query.id[1] === "categories") {
      return `${router.query.id[0]
        .split("-jobs")[0]
        .replace(/[^a-zA-Z ]/g, " ")
        .toUpperCase()} JOBS`;
    } else if (router.query.id[1] === "level") {
      return `${router.query.id[0]
        .split("-jobs")[0]
        .replace(/[^a-zA-Z ]/g, " ")
        .toUpperCase()} JOBS`;
    }
    // else {
    //   return `${router.query.id[0]
    //     .split("-jobs-in-")[0]
    //     .replace(/[^a-zA-Z ]/g, " ")
    //     .toUpperCase()} JOBS IN ${router.query.id[0]
    //     .split("-jobs-in-")[1]
    //     .replace(/[^a-zA-Z ]/g, " ")
    //     .toUpperCase()}`;
    // }
  };

  return (
    <>
      <Head>
        <title>{metaTitle()}</title>
        <link
          rel="canonical"
          href={`https://timesascent.com${router.asPath}`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={metaDesc()} />
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
        <meta property="og:title" content={metaTitle()} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={metaDesc()} />
        <meta
          property="og:url"
          content={`https://timesascent.com${router.asPath}`}
        />
        <meta
          property="og:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta property="twitter:title" content={metaTitle()} />
        <meta property="twitter:description" content={metaDesc()} />
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
                  name: "Job Search",
                },
              ],
            }),
          }}
        />
      </Head>
      <div className=" bg-zinc-100">
        <MainHeader />

        <div className="min-h-full">
          <div className="relative   py-4 container lg:py-4 bg-white">
            <BreadCrumbs data={pages} />
          </div>

          <div className="py-4">
            <SearchAreaInput
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setShowTitle(true);
              }}
              showTitle={showTitle}
              setShowTitle={setShowTitle}
              setLocation={setLocation}
              setTitle={setTitle}
              valueLocation={location}
              onChangeLocation={(e) => {
                setLocation(e.target.value);
                setShowLocation(true);
              }}
              onSubmit={JobCardSearchByLocation}
              showLocation={showLocation}
              setShowLocation={setShowLocation}
              loading={btnLoader}
            />
            <div className="mx-auto max-w-3xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-8 lg:px-8">
              <div className="col-span-1 pb-3 lg:pb-20 lg:col-span-3 lg:block xl:col-span-2">
                <nav
                  aria-label="Sidebar"
                  className="sticky top-4 divide-y divide-gray-300"
                >
                  <div className="space-y-1 pt-4 lg:pt-0 pb-4 grid grid-cols-3 lg:grid-cols-1">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-gray-200 text-gray-900"
                            : "text-gray-700 hover:bg-gray-50",
                          "group flex items-center px-3 py-1 text-sm font-medium rounded-md"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className={classNames(
                            item.current
                              ? "text-gray-500"
                              : "text-gray-400 group-hover:text-gray-500",
                            "flex-shrink-0 -ml-1 mr-3 h-6 w-6"
                          )}
                          aria-hidden="true"
                        />
                        <span className="truncate">{item.name}</span>
                      </a>
                    ))}
                  </div>
                  <div className="py-4 hidden lg:block">
                    <p
                      className="px-3 text-md font-medium text-gray-900"
                      id="communities-headline"
                    >
                      Popular Cities
                    </p>
                    <div
                      className="mt-3 space-y-2 grid grid-cols-2 lg:grid-cols-1"
                      aria-labelledby="communities-headline"
                    >
                      {PopularCity?.slice(0, 6).map((community) => (
                        <a
                          key={community.location}
                          href={`/jobs-in-${community.location
                            .replace(/[^a-zA-Z ]/g, " ")
                            .split(" ")
                            .join("-")
                            .split(" ")
                            .join("-")
                            .split("--")
                            .join("-")
                            .toLowerCase()}`}
                          className="group flex items-center rounded-md px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                          <span className="truncate">{`${community.location
                            ?.split(" ")[0]
                            ?.charAt(0)
                            .toUpperCase() +
                            community.location
                              ?.split(" ")[0]
                              ?.slice(1)
                              .toLowerCase() +
                            " " +
                            (community.location?.split(" ")[1]
                              ? community.location
                                ?.split(" ")[1]
                                ?.charAt(0)
                                .toUpperCase() +
                              community.location
                                ?.split(" ")[1]
                                ?.slice(1)
                                .toLowerCase()
                              : "")
                            } (${community.numberOfPosition})`}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="py-4 hidden lg:block">
                    <p
                      className="px-3 text-md font-medium text-gray-900"
                      id="communities-headline"
                    >
                      Popular Designations
                    </p>
                    <div
                      className="mt-3 space-y-2 grid grid-cols-2 lg:grid-cols-1"
                      aria-labelledby="communities-headline"
                    >
                      {PopularDesignations?.slice(0, 6).map((community) => (
                        <a
                          key={community.skill}
                          href={`/${community.skill
                            .replace(/[^a-zA-Z ]/g, " ")
                            .split(" ")
                            .join("-")
                            .split(" ")
                            .join("-")
                            .split("--")
                            .join("-")
                            .toLowerCase()}-jobs/designation`}
                          className="group flex items-center rounded-md px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                          <span className="truncate">{`${community.skill
                            ?.split(" ")[0]
                            ?.charAt(0)
                            .toUpperCase() +
                            community.skill
                              ?.split(" ")[0]
                              ?.slice(1)
                              .toLowerCase() +
                            " " +
                            (community.skill?.split(" ")[1]
                              ? community.skill
                                ?.split(" ")[1]
                                ?.charAt(0)
                                .toUpperCase() +
                              community.skill
                                ?.split(" ")[1]
                                ?.slice(1)
                                .toLowerCase()
                              : "")
                            } (${community.numberOfPosition})`}</span>
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="py-4 hidden lg:block">
                    <p
                      className="px-3 text-md font-medium text-gray-900"
                      id="communities-headline"
                    >
                      Company
                    </p>
                    <div
                      className="mt-3 space-y-2"
                      aria-labelledby="communities-headline"
                    >
                      {Company?.slice(0, 6).map((community) => (
                        <a
                          key={community.CompanyName}
                          href={
                            "/NewCompanyProfile/" +
                            (community.CompanyName || "company")
                              .split(" ")
                              .join("-")
                              .split(".")
                              .join("")
                              .toLowerCase() +
                            "/" +
                            community.keyIndex
                          }
                          className="group flex items-center rounded-md px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                        >
                          <span className="truncate">{`${community.CompanyName} (${community.NumberOfPosition})`}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>
              <main className="col-span-1 lg:col-span-5 xl:col-span-6 ">
                <div className="px-4 sm:px-0">
                  <div className="sm:flex items-center justify-between">
                    <h1 className="text-base font-medium mb-2 sm:mb-4 mr-6">
                      {selectTab === 0 ? JobHeading() : "Most Like Jobs"}
                    </h1>
                    <div className="text-sm font-semibold mb-4">
                      {" "}
                      {selectTab === 0
                        ? `Results: ${jobDataSearch.length * page} of ${count.count ? count.count : "0"
                        }`
                        : `Results: ${jobDataSearch.length * page
                        } of ${likecount}`}
                    </div>
                  </div>
                  {/* <div className="sm:hidden">
                    <label htmlFor="question-tabs" className="sr-only">
                      Select a tab
                    </label>
                    <select
                      id="question-tabs"
                      className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                      defaultValue={tabs.find((tab) => tab.current).name}
                    >
                      {tabs.map((tab,tabIdx) => (
                        <option key={tab.name} onClick={() => { setSelectTab(tabIdx); tab.name === "Most Liked" ? MostLikeJob() : ""}}>{tab.name}</option>
                      ))}
                    </select>
                  </div> */}
                  <div className="block">
                    <nav
                      className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
                      aria-label="Tabs"
                    >
                      {tabs.map((tab, tabIdx) => (
                        <div
                          key={tab.name}
                          onClick={() => {
                            setSelectTab(tabIdx);
                            tab.name === "Most Liked" ? MostLikeJob() : "";
                          }}
                          aria-current={tab.current ? "page" : undefined}
                          className={classNames(
                            selectTab === tabIdx
                              ? "text-gray-900 "
                              : "text-gray-500 hover:text-gray-700",
                            tabIdx === 0 ? "rounded-l-lg" : "",
                            tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                            "cursor-pointer group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                          )}
                        >
                          <span>{tab.name}</span>
                          <span
                            aria-hidden="true"
                            className={classNames(
                              selectTab === tabIdx
                                ? "bg-rose-500"
                                : "bg-transparent",
                              "absolute inset-x-0 bottom-0 h-0.5"
                            )}
                          />
                        </div>
                      ))}
                    </nav>
                  </div>

                  {jobDataSearch.length ? (
                    jobDataSearch.slice(0, 5).map((item) => {
                      return (
                        <NewJobCard
                          jobLike={saveLikeJob}
                          LikeButton={FollowButton}
                          jobDataSearch={item}
                          device={deviceType}
                        />
                      );
                    })
                  ) : (
                    <div className="text-2xl font-semibold py-8 text-center">
                      There are no data
                    </div>
                  )}
                  <div className="place-content-center mt-5 mb-5 ">
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
                  {jobDataSearch.slice(5, 10).map((item) => {
                    return (
                      <NewJobCard
                        jobLike={saveLikeJob}
                        LikeButton={FollowButton}
                        jobDataSearch={item}
                        device={deviceType}
                      />
                    );
                  })}

                  <div className="sm:grid sm:grid-cols-2 gap-x-2 mt-4">
                    {articleData.slice(0, 2).map((item) => {
                      return (
                        <div className="mb-4 sm:mb-0">
                          <ArtcleWidget data={item} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-end">
                    <a
                      href="/articleslist/featured-articles"
                      target={"_self"}
                      className="inline-flex justify-end mt-2 text-sm text-timesPurple hover:text-indigo-600"
                    >
                      View all Articles &rarr;
                    </a>
                  </div>
                  {jobDataSearch.slice(10, 15).map((item) => {
                    return (
                      <NewJobCard
                        jobLike={saveLikeJob}
                        LikeButton={FollowButton}
                        jobDataSearch={item}
                        device={deviceType}
                      />
                    );
                  })}
                  <div className="place-content-center mt-5 mb-5 ">
                    {adShow ? (
                      <GoogleAd_300x250
                        path="/22637491760/timesascent.com_erelego_d_ap_300x250_1"
                        ads_Id="div-gpt-ad-1674643874881-0"
                        size={[[300, 250]]}
                      />
                    ) : (
                      <SkeletonMrec />
                    )}
                  </div>
                  <div className="mb-6">
                    {jobDataSearch.slice(15, 20).map((item) => {
                      return (
                        <NewJobCard
                          jobLike={saveLikeJob}
                          LikeButton={FollowButton}
                          jobDataSearch={item}
                          device={deviceType}
                        />
                      );
                    })}
                  </div>
                  <div className="sm:grid sm:grid-cols-2 gap-x-2 mt-4">
                    {articleData.slice(2, 4).map((item) => {
                      return (
                        <div className="mb-4 sm:mb-0">
                          <ArtcleWidget data={item} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-end">
                    <a
                      href="/articleslist/featured-articles"
                      target={"_self"}
                      className="inline-flex justify-end mt-2 text-sm text-timesPurple hover:text-indigo-600"
                    >
                      View all Articles &rarr;
                    </a>
                  </div>
                  {jobDataSearch.slice(20, 24).map((item) => {
                    return (
                      <NewJobCard
                        jobLike={saveLikeJob}
                        LikeButton={FollowButton}
                        jobDataSearch={item}
                        device={deviceType}
                      />
                    );
                  })}
                  <div className="mt-6 lg:hidden block">
                    {adShow ? (
                      <>
                        <div className=" hidden md:block ">
                          <GoogleAd_Hrec
                            path="/1064661/ta.com_hrec2_Jobs"
                            ads_Id="div-gpt-ad-1674565092589-0"
                            size={[[728, 90]]}
                          />
                        </div>
                        <div className="block md:hidden">
                          <GoogleAd_Hrec
                            path="/1064661/ta.com_hrec2_Mob_Jobs"
                            ads_Id="div-gpt-ad-1674565561579-0"
                            size={[[320, 50]]}
                          />
                        </div>
                      </>
                    ) : (
                      <SkeletonHrec />
                    )}
                  </div>
                  {jobDataSearch.length ? (
                    <div className="relative flex justify-center  py-4 container lg:pt-10">
                      <NewPagination
                        maxPage={maxPage}
                        page={page}
                        pageChange={pageChange}
                      />
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </main>

              <aside className="col-span-1 xl:col-span-4 lg:col-span-3 lg:block  xl:block">
                <div className="my-6">
                  {adShow ? (
                    <GoogleAd_300x250
                      path="/1064661/ta.com_mrec4_job"
                      ads_Id="div-gpt-ad-1674555122258-0"
                      size={[[300, 250]]}
                    />
                  ) : (
                    <SkeletonMrec />
                  )}
                </div>
                <div className="sticky top-4 space-y-4  ">
                  <section aria-labelledby="who-to-follow-heading pb-20">
                    <div className="py-4 lg:hidden block border-b border-gray-200">
                      <p
                        className="px-3 text-md font-medium text-gray-900"
                        id="communities-headline"
                      >
                        Popular Cities
                      </p>
                      <div
                        className="mt-3 space-y-2 grid grid-cols-2 lg:grid-cols-1"
                        aria-labelledby="communities-headline"
                      >
                        {PopularCity?.slice(0, 6).map((community) => (
                          <a
                            key={community.location}
                            href={`/jobs-in-${community.location
                              .replace(/[^a-zA-Z ]/g, " ")
                              .split(" ")
                              .join("-")
                              .split(" ")
                              .join("-")
                              .split("--")
                              .join("-")
                              .toLowerCase()}`}
                            className="group flex items-center rounded-md px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                          >
                            <span className="truncate">{`${community.location
                              ?.split(" ")[0]
                              ?.charAt(0)
                              .toUpperCase() +
                              community.location
                                ?.split(" ")[0]
                                ?.slice(1)
                                .toLowerCase() +
                              " " +
                              (community.location?.split(" ")[1]
                                ? community.location
                                  ?.split(" ")[1]
                                  ?.charAt(0)
                                  .toUpperCase() +
                                community.location
                                  ?.split(" ")[1]
                                  ?.slice(1)
                                  .toLowerCase()
                                : "")
                              } (${community.numberOfPosition})`}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="place-content-center mt-5  lg:hidden block">
                      {adShow ? (
                        <GoogleAd_300x250
                          path="/1064661/ta.com_mrec3_job"
                          ads_Id="div-gpt-ad-1674554850210-0"
                          size={[[300, 250]]}
                        />
                      ) : (
                        <SkeletonMrec />
                      )}
                    </div>
                    <div className="py-4 lg:hidden block border-b border-gray-200">
                      <p
                        className="px-3 text-md font-medium text-gray-900"
                        id="communities-headline"
                      >
                        Popular Designations
                      </p>
                      <div
                        className="mt-3 space-y-2 grid grid-cols-2 lg:grid-cols-1"
                        aria-labelledby="communities-headline"
                      >
                        {PopularDesignations?.slice(0, 6).map((community) => (
                          <a
                            key={community.skill}
                            href={`/${community.skill
                              .replace(/[^a-zA-Z ]/g, " ")
                              .split(" ")
                              .join("-")
                              .split(" ")
                              .join("-")
                              .split("--")
                              .join("-")
                              .toLowerCase()}-jobs/designation`}
                            className="group flex items-center rounded-md px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                          >
                            <span className="truncate">{`${community.skill
                              ?.split(" ")[0]
                              ?.charAt(0)
                              .toUpperCase() +
                              community.skill
                                ?.split(" ")[0]
                                ?.slice(1)
                                .toLowerCase() +
                              " " +
                              (community.skill?.split(" ")[1]
                                ? community.skill
                                  ?.split(" ")[1]
                                  ?.charAt(0)
                                  .toUpperCase() +
                                community.skill
                                  ?.split(" ")[1]
                                  ?.slice(1)
                                  .toLowerCase()
                                : "")
                              } (${community.numberOfPosition})`}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="place-content-center mt-5 pb-5 sm:pb-20  lg:hidden block">
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
                    <div className="py-4 lg:hidden block border-b border-gray-200">
                      <p
                        className="px-3 text-md font-medium text-gray-900"
                        id="communities-headline"
                      >
                        Company
                      </p>
                      <div
                        className="mt-3 space-y-2"
                        aria-labelledby="communities-headline"
                      >
                        {Company?.slice(0, 6).map((community) => (
                          <a
                            key={community.CompanyName}
                            href={
                              "/NewCompanyProfile/" +
                              (community.CompanyName || "company")
                                .split(" ")
                                .join("-")
                                .split(".")
                                .join("")
                                .toLowerCase() +
                              "/" +
                              community.keyIndex
                            }
                            className="group flex items-center rounded-md px-3 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                          >
                            <span className="truncate">{`${community.CompanyName} (${community.NumberOfPosition})`}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                    <div className="mt-6 lg:hidden block">
                      {adShow ? (
                        <>
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
                    <div className=" rounded-lg bg-white shadow mt-6 lg:mt-0">
                      <div className="px-6 pt-3 pb-6">
                        <h2
                          id="who-to-follow-heading"
                          className="text-base font-medium text-gray-900"
                        >
                          Industry
                        </h2>
                        <div className="mt-6 flow-root">
                          <ul
                            role="list"
                            className="-my-4 divide-y divide-gray-200"
                          >
                            {industry.slice(0, 7).map((user) => (
                              <li
                                key={user.name}
                                className="flex items-center space-x-3 py-2"
                              >
                                <div className="min-w-0 flex-1">
                                  <p className="text-sm font-medium text-gray-900">
                                    <a
                                      href={`/${user.name
                                        .replace(/[^a-zA-Z ]/g, " ")
                                        .split(" ")
                                        .join("-")
                                        .split(" ")
                                        .join("-")
                                        .split("--")
                                        .join("-")
                                        .toLowerCase()}-jobs/industry/${user.keyIndex
                                        }`}
                                    >
                                      {user.name}
                                    </a>
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    {user.Sname}
                                  </p>
                                </div>
                                <div className="flex-shrink-0">
                                  <button
                                    type="button"
                                    className="inline-flex items-center rounded-full bg-rose-50 px-3 py-0.5 text-sm font-medium text-rose-700 hover:bg-rose-100"
                                  >
                                    <span>{user.numberOfPosition}</span>
                                  </button>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="place-content-center mt-5 pb-5 sm:pb-20 ">
                      {adShow ? (
                        <GoogleAd_300x250
                          path="/1064661/ta.com_mrec2_job"
                          ads_Id="div-gpt-ad-1674554724509-0"
                          size={[[300, 250]]}
                        />
                      ) : (
                        <SkeletonMrec />
                      )}
                    </div>
                  </section>
                </div>
              </aside>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default jobsearch;

export async function getServerSideProps(context) {
  let userAgent;
  if (context) {
    userAgent = context.req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  let isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );

  const page = context.query.page ? context.query.page : 1;
  let props = {};
  try {
    const searchJob = await SearchJobCard(context.query.id[0], page);

    const articledata = await SearchArticlesResponse({
      SearchTerm: "Jobs",
    });

    // const getForherSreen = await fetch(
    //   `${process.env.LIVE_HOST}/json/getForherSreenData.json`
    // );
    // const getForherSreenData = await getForherSreen.json();

    const cityFilter = await fetch(
      `${process.env.LIVE_HOST}/json/cityFilter.json`
    );
    const cityFilterData = await cityFilter.json();

    const positionFilter = await fetch(
      `${process.env.LIVE_HOST}/json/positionFilter.json`
    );
    const positionFilterData = await positionFilter.json();

    const companyFilter = await fetch(
      `${process.env.LIVE_HOST}/json/companyFilter.json`
    );
    const companyFilterData = await companyFilter.json();

    const indusrtyJsonFilter = await fetch(
      `${process.env.LIVE_HOST}/json/indusrtyJsonFilter.json`
    );

    const indusrtyJsonFilterData = await indusrtyJsonFilter.json();
    props = {
      searchJob,
      articledata,
      // getForherSreenData,
      cityFilterData,
      positionFilterData,
      companyFilterData,
      indusrtyJsonFilterData,
      page,
      isMobile,
    };
  } catch (err) {
    console.log(err, "error on job search page");
    props = {
      isPageError: true,
    };
  }

  return { props: { props } };
}
