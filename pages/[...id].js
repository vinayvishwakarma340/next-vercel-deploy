import { useState, useEffect } from "react";
import {
  ArrowTrendingUpIcon,
  FireIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import MainHeader from "../Components/MainHeader";
import {
  JobListNewAPI,
  WildCardJobSearch,
  AdvancedSearchJob,
  fetchJobsTagCarousel,
  JobListByTypeNewAPI,
} from "./api/jobsApi";
// import { SearchArticlesResponse } from "./api/articleApi";
import NewSearchAreaInput from "../Components/jobs/JobDetail/NewSearchAreaInput";
import { useRouter } from "next/router";
import BreadCrumbs from "../Components/BreadCrumbs";
import Footer from "../Components/Footer";
import Head from "next/head";
import * as gtag from "../lib/gtag";
import Cookies from "js-cookie";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";
// const logger = require("../logger");
import GoogleAd_Hrec from "../Components/GoogleAds/GoogleAd_Hrec";
import SkeletonMrec from "../Components/Skeleton/SkeletonMrec";
import SkeletonHrec from "../Components/Skeleton/SkeletonHrec";
import FourZeroFour from "../Components/FourZeroFour";
import SearchAreaInputMobile from "../Components/jobs/JobDetail/SearchAreaInputMobile";
import NewJobCard from "../Components/jobs/NewJobCard";
import dynamic from "next/dynamic";
import JobTagCarousel from "../Components/jobs/JobDetail/JobTagCarousel";
import useRemoveSpaceNew from "../Components/CustomHook/useRemoveSpaceNew";


const NewJobCardLazy = dynamic(() =>
  import("../Components/jobs/NewJobCardLazy")
);
const FilterModal = dynamic(() => import("../Components/Modal/FilterModal"));
const SearchInputModal = dynamic(() =>
  import("../Components/jobs/JobDetail/SearchInputModal")
);
const PaginationTestTwo = dynamic(() =>
  import("../Components/PaginationTestTwo")
);
const ArtcleWidget = dynamic(() => import("../Components/ArticleWidget"));
const JobIndustry = dynamic(() => import("../Components/jobs/JobIndustry"));

const jobsearch = ({ props }) => {
  const router = useRouter();

  if (props.isPageError || props.searchJob.status_code === 500) {
    return <FourZeroFour />;
  }

  // return <Error statusCode={500} />

  const articleData = props.articledata;
  const PopularCity = props.cityFilterData;
  const PopularDesignations = props.positionFilterData;
  const Company = props.companyFilterData;
  const industry = props.indusrtyJsonFilterData;
  const jobTagCarouselValues = props.jobTagCarouselValues;
  const titleJobsCount = props.searchJob?.count;
  const jobCarouselData = props.jobCarouselData.data;
  const [jobDataSearch, setJobDataSearch] = useState(props.searchJob.data);
  const [count, setCount] = useState("");
  const [likecount, setLikeCount] = useState("");
  const [page, setPage] = useState(parseInt(props.page));
  const [maxPage, setMaxPage] = useState(1);
  const [saveLikeJob, setSaveLikeJob] = useState([]);
  const [selectTab, setSelectTab] = useState(0);
  const [deviceType, setDeviceType] = useState("");
  const USERID = Cookies.get("USERID");
  const loggedIn = Cookies.get("userLoggedIn");
  const [adShow, setadShow] = useState(false);
  const [btnLoader, setBtnLoader] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [autoFillSearchData, setAutoFillSearchData] = useState([]);
  const [locationSuggestionData, setLocationSuggestionData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({ issuedate: "", keyIndex: "", location: "", numberOfPosition: "" });
  const advanceQuery =
    router.query.designation ||
    router.query.location ||
    router.query.company ||
    router.query.industry ||
    router.query.experience;

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

  useEffect(() => {
    selectTab === 0 && setJobDataSearch(props.searchJob.data);
    selectTab === 0 && setCount(props.searchJob);
    setPage(parseInt(props.page));
    selectTab === 0
      ? setMaxPage(Math.ceil(props.searchJob.count / 24))
      : setMaxPage(Math.ceil(likecount / 24));
  }, [props.page, selectTab]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    setPage(parseInt(props.page));
    CheckSourceDevice();
    return () => clearTimeout(timeout);
  }, [props.page]);

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

  useEffect(() => {
    const pageLoadTime =
      window.performance.timing.domContentLoadedEventEnd -
      window.performance.timing.navigationStart;
    gtag.pageSpeedEvent({
      action: "Job list Page Speed",
      pageTitle: "Job list Page",
      load_time: pageLoadTime,
    });
    handleLocationClick();
  }, []);

  useEffect(() => {
    Event();
    JobEvent();
    ArticleEvent();
  }, [jobDataSearch, articleData]);

  const generateRedirectionUrl = (value, id) => {
    let result = "";
    let searchTerm = useRemoveSpaceNew(value);

    if (
      jobTagCarouselValues[2] === "IndustryJob" ||
      jobTagCarouselValues[2] === "DesignationJob"
    ) {
      return (result = `/${jobTagCarouselValues[0]}-jobs-in-${searchTerm}`);
    } else if (
      jobTagCarouselValues[2] === "DesignationJobInCity" ||
      jobTagCarouselValues[2] === "IndustryJobInCity"
    ) {
      return (result = `/NewCompanyProfile/${searchTerm}/${id}`);
    } else if (jobTagCarouselValues[2] === "JobInCity") {
      return (result = `/${searchTerm}-jobs-in-${jobTagCarouselValues[1]}`);
    }
    return result;
  };

  const generateJobTagClouds = (value) => {
    let result = value;
    let searchTerm = jobTagCarouselValues[0]?.replace("-", " ");
    searchTerm = capitalizeFirstLetter(searchTerm);
    let searchLocation = jobTagCarouselValues[1]?.replace("-", " ");

    if (
      jobTagCarouselValues[2] === "IndustryJob" ||
      jobTagCarouselValues[2] === "DesignationJob"
    ) {
      return (result = `${searchTerm} jobs in ${value}`);
    } else if (
      jobTagCarouselValues[2] === "DesignationJobInCity" ||
      jobTagCarouselValues[2] === "IndustryJobInCity"
    ) {
      return (result = value);
    } else if (jobTagCarouselValues[2] === "JobInCity") {
      return (result = `${value} jobs in ${searchLocation}`);
    }
    return result;
  };

  const SearchLocationAutoFillApi = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      "Token 77927b69bb144b065ca11bf2a9d452819cd852db"
    );

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/CityFilterJSON`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setLocationSuggestionData(result.name);
      })
      .catch((error) => console.log("error", error));
  };
  const SearchAutoFillApi = (searchTerm) => {
    let term = searchTerm ? searchTerm : "";
    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.API_TOKEN_AUTH_SERVER);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      searchTerm: term,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/SearchAutoFill`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200 && result.status === "success") {
          setAutoFillSearchData(result.data);
        } else {
          setAutoFillSearchData([]);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(locationSuccess, locationError);
    } else {
      // console.log("Geolocation not supported");
    }
  };

  const locationSuccess = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token 77927b69bb144b065ca11bf2a9d452819cd852db");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "latitude": latitude,
      "longitude": longitude
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${process.env.Live_API_URL}/v1/api/apiTimes/GeoLocation`, requestOptions)
      .then(response => response.json())
      .then((result) => {
        setSelectedLocation({ ...selectedLocation, location: result.data });
      })
      .catch(error => console.log('error', error));
  };

  const locationError = () => {
    // console.log("Unable to retrieve your location");
  };

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

  const saveSearchJob = (title, location) => {
    setBtnLoader(true);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.API_TOKEN_AUTH_SERVER);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      searchTerms: title,
      type: location,
      USERID: USERID ? USERID : "",
      IsRedirected: 1,
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
        // console.log("saved", result);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setBtnLoader(false);
      });
  };

  const LikeJob = (id) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.API_TOKEN_AUTH_SERVER);
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
    myHeaders.append("Authorization", process.env.API_TOKEN_AUTH_SERVER);
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

  const pageChange = (val) => {
    if (
      router.asPath.includes("latest-jobs?location") ||
      router.asPath.includes("latest-jobs?designation") ||
      router.asPath.includes("latest-jobs?company") ||
      router.asPath.includes("latest-jobs?experience") ||
      router.asPath.includes("latest-jobs?industry")
    ) {
      let advanceSearchUrl = router.asPath?.split("&page=")[0];
      router.push(`/${advanceSearchUrl}&page=${val}`);
    } else {
      let goodUrl = router.asPath.split("?");
      router.push(`/${goodUrl[0]}?page=${val}`);
    }
  };

  const capitalizeFirstLetter = (str) => {
    let removeHyphen = str?.replace(/-/g, " ").trim();
    let finalString =
      removeHyphen?.charAt(0).toUpperCase() + removeHyphen?.slice(1);
    return finalString;
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
      router.query.id[1] === "companies" ||
      router.query.id[1] === "industry"
    ) {
      return `${capitalizeFirstLetter(
        router.query.id[0]?.split("-jobs")[0]
      )} Jobs at timesascent.com`;
    } else if (router.query.id[0] === "global-placement-jobs") {
      return `Global Placement Jobs at timesascent.com`;
    } else if (router.query.id[0] === "government-jobs") {
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
    } else if (router.query.id[0] === "fresher-jobs") {
      return `Fresher jobs at timesascent.com`;
    } else if (router.query.id[0] === "tech-jobs") {
      return `Techonological jobs at timesascent.com`;
    } else if (
      router.query.id[0] === "latest-jobs" &&
      router.query.id[1] &&
      router.query.id[0]
    ) {
      return `${capitalizeFirstLetter(
        router.query.id[1]
      )} jobs at timesascent.com`;
    } else if (
      router.query.id[0].includes("-in-") &&
      !router.query.id[1] &&
      router.query.id[0]
    ) {
      return `${capitalizeFirstLetter(router.query.id[0])}`;
    } else if (advanceQuery) {
      return `${capitalizeFirstLetter(advanceQuery)} jobs at timesascent.com`;
    } else return `Latest jobs at timesascent.com`;
  };

  const metaDesc = () => {
    if (router.query.id[0].split("-").shift() === "jobs") {
      return `Latest job openings in ${router.query.id[0]
        .split("-in-")[1]
        ?.replace(/[^a-zA-Z ]/g, " ")
        .split(" ")
        .join("-")
        .split(" ")
        .join("-")
        .split("--")
        .join("-")
        .toLowerCase()}, Apply Online at timesascent.com`;
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
    } else return `Latest job vacancies at timesascent.com`;
  };

  const JobHeading = () => {
    if (
      router.query.id[0] === "latest-jobs" &&
      !router.query.id[1] &&
      !advanceQuery
    ) {
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
    } else if (router.query.id[0] === "fresher-jobs") {
      return `${router.query.id[0]
        .split("-jobs")[0]
        .replace(/[^a-zA-Z ]/g, " ")
        .toUpperCase()} JOBS`;
    } else if (router.query.id[0] === "tech-jobs") {
      return ` ${"Technological Jobs".toUpperCase()}`;
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
    } else if (router.query.id[1] === "companies") {
      return `${router.query.id[0]
        .split("-jobs")[0]
        .replace(/[^a-zA-Z ]/g, " ")
        .toUpperCase()} JOBS`;
    } else if (
      router.query.id[0] === "latest-jobs" &&
      router.query.id[1] &&
      router.query.id[0]
    ) {
      return `${capitalizeFirstLetter(router.query.id[1]).toUpperCase()} JOBS`;
    } else if (
      router.query.id[0].includes("-in-") &&
      !router.query.id[1] &&
      router.query.id[0]
    ) {
      return `${capitalizeFirstLetter(router.query.id[0]).toUpperCase()}`;
    } else if (advanceQuery) {
      return `${capitalizeFirstLetter(advanceQuery).toUpperCase()} JOBS`;
    }
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const pages = [
    {
      name: "Jobs",
      href: "/jobs",
      current: false,
    },
    {
      name: capitalizeFirstLetter(JobHeading()?.toLowerCase()),
      href: "#",
      current: true,
    },
  ];

  return (
    <>
      <Head>
        <title>{`${titleJobsCount ? titleJobsCount : ""
          } ${metaTitle()}`}</title>
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "ItemList",
              itemListElement: jobCarouselData?.map((item, index) => {
                return {
                  "@type": "ListItem",
                  position: index + 1,
                  name: generateJobTagClouds(item.name),
                  url: `https://timesascent.com${generateRedirectionUrl(
                    item.name,
                    item.id
                  )}`,
                };
              }),
            }),
          }}
        />
      </Head>
      <div className=" bg-zinc-50 ">
        <MainHeader />
        <div className="relative   py-4  lg:py-4 bg w-full bg-white">
          <div className="container mx-auto">
            <BreadCrumbs data={pages} />
          </div>
        </div>
        <div className="container mx-auto">
          <div className="min-h-full">
            <div className="pb-4 sm:py-4">
              <FilterModal
                open={openFilterModal}
                setFilterModal={setOpenFilterModal}
                saveSearchJob={saveSearchJob}
                PopularCity={locationSuggestionData}
                SearchLocationAutoFillApi={SearchLocationAutoFillApi}
                loading={btnLoader}
                setLoading={setBtnLoader}
              />

              <div className="hidden sm:block">
                <NewSearchAreaInput
                  saveSearchJob={saveSearchJob}
                  PopularCity={locationSuggestionData}
                  selectedLocation={selectedLocation}
                  setSelectedLocation={setSelectedLocation}
                  loading={btnLoader}
                  setLoading={setBtnLoader}
                  setOpenFilterModal={setOpenFilterModal}
                  SearchLocationAutoFillApi={SearchLocationAutoFillApi}
                  SearchAutoFillApi={SearchAutoFillApi}
                  autoFillSearchData={autoFillSearchData}
                />
              </div>
              <div className="block sm:hidden">
                <SearchAreaInputMobile
                  open={open}
                  setOpen={setOpen}
                  setOpenFilterModal={setOpenFilterModal}
                  SearchLocationAutoFillApi={SearchLocationAutoFillApi}
                />
              </div>
              <div>
                <SearchInputModal
                  open={open}
                  setOpen={setOpen}
                  saveSearchJob={saveSearchJob}
                  selectedLocation={selectedLocation}
                  setSelectedLocation={setSelectedLocation}
                  PopularCity={locationSuggestionData}
                  loading={btnLoader}
                  setLoading={setBtnLoader}
                  setOpenFilterModal={setOpenFilterModal}
                  SearchAutoFillApi={SearchAutoFillApi}
                  autoFillSearchData={autoFillSearchData}
                />
              </div>

              <div className="w-full md:flex gap-6 justify-between    mx-auto">
                <div className="w-full md:w-[250px] sm:bg-white sm:border-b sm:border-gray-200 sm:shadow sm:py-6 sm:px-4 sm:rounded-lg">
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
                            "group flex items-center text-center justify-center lg:justify-start px-3 py-1 text-sm font-medium rounded-md"
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
                        id="communities-headline-sd"
                      >
                        Popular Cities
                      </p>
                      <div
                        className="mt-3 space-y-2 grid grid-cols-2 lg:grid-cols-1"
                        aria-labelledby="communities-headline-sd"
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
                        id="communities-headline-cd"
                      >
                        Popular Designations
                      </p>
                      <div
                        className="mt-3 space-y-2 grid grid-cols-2 lg:grid-cols-1"
                        aria-labelledby="communities-headline-cd"
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
                        id="communities-headline-bv"
                      >
                        Company
                      </p>
                      <div
                        className="mt-3 space-y-2"
                        aria-labelledby="communities-headline-bv"
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
                <main className="w-full md:w-[calc(100%-550px)]">
                  <div className="">
                    <div className="flex items-center justify-between">
                      <h1 className="text-base font-medium mb-2 sm:mb-4 mr-6">
                        {selectTab === 0
                          ? `${titleJobsCount ? titleJobsCount : ""
                          } ${JobHeading()}`
                          : "Most Like Jobs"}
                      </h1>
                      {/* <div className="text-sm font-semibold mb-4">
                      {" "}
                      {selectTab === 0
                        ? `Results: ${jobDataSearch?.length * page} of ${count.count ? count.count : "0"
                      }`
                        : `Results: ${jobDataSearch?.length * page
                        } of ${likecount}`}
                    </div> */}
                    </div>

                    <div className="block">
                      <nav
                        className="isolate flex divide-x divide-gray-200 rounded-lg shadow"
                        aria-label="Tabs"
                      >
                        {tabs.map((tab, tabIdx) => (
                          <div
                            key={tabIdx}
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
                              tabIdx === tabs?.length - 1 ? "rounded-r-lg" : "",
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

                    {jobDataSearch?.length > 0 && (
                      <NewJobCard
                        jobLike={saveLikeJob}
                        LikeButton={FollowButton}
                        jobDataSearch={jobDataSearch[0]}
                        device={deviceType}
                      />
                    )}
                    {jobDataSearch?.length > 1 &&
                      jobDataSearch?.map((item, index) => {
                        return (
                          <div key={index}>
                            <NewJobCardLazy
                              jobLike={saveLikeJob}
                              LikeButton={FollowButton}
                              jobDataSearch={jobDataSearch[index + 1]}
                              device={deviceType}
                            />
                            {index === 1 && jobCarouselData?.length > 0 && (
                              <JobTagCarousel
                                data={jobCarouselData}
                                generateRedirectionUrl={generateRedirectionUrl}
                                generateJobTagClouds={generateJobTagClouds}
                              />
                            )}
                            {index === 3 && (
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
                            )}
                            {index === 13 && (
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
                            )}
                            {index === 8 && (
                              <>
                                <div className="sm:grid sm:grid-cols-2 gap-x-2 mt-4">
                                  {articleData
                                    ?.slice(0, 2)
                                    .map((item, index) => {
                                      return (
                                        <div
                                          key={index}
                                          className="mb-4 sm:mb-0"
                                        >
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
                              </>
                            )}
                            {index === 18 && (
                              <>
                                <div className="sm:grid sm:grid-cols-2 gap-x-2 mt-4">
                                  {articleData
                                    ?.slice(2, 4)
                                    .map((item, index) => {
                                      return (
                                        <div
                                          key={index}
                                          className="mb-4 sm:mb-0"
                                        >
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
                              </>
                            )}
                          </div>
                        );
                      })}
                    {!jobDataSearch?.length > 0 && (
                      <div className="text-xl font-medium py-8 text-center flex justify-center items-center">
                        <img
                          src="/PageError/ResultNotFound.png"
                          className="h-12 w-12 mr-4"
                        />
                        No Result Found !
                      </div>
                    )}

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
                    {count.count > 24 ? (
                      <div className="relative flex justify-center  py-4 w-full lg:pt-10">
                        <PaginationTestTwo
                          maxPage={maxPage}
                          dataCount={count.count}
                          datalength={jobDataSearch?.length * page}
                          pageChange={pageChange}
                          page={page}
                        />
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </main>
                <aside className="w-full md:w-[300px]">
                  <div className="mt-6 sm:mt-0 mb-6">
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
                  <div className="sticky top-4 space-y-4">
                    <section aria-labelledby="who-to-follow-heading pb-20">
                      <div className="py-4 lg:hidden block border-b border-gray-200">
                        <p
                          className="px-3 text-md font-medium text-gray-900"
                          id="communities-headline-po"
                        >
                          Popular Cities
                        </p>
                        <div
                          className="mt-3 space-y-2 grid grid-cols-2 lg:grid-cols-1"
                          aria-labelledby="communities-headline-po"
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
                          id="communities-headline-oo"
                        >
                          Popular Designations
                        </p>
                        <div
                          className="mt-3 space-y-2 grid grid-cols-2 lg:grid-cols-1"
                          aria-labelledby="communities-headline-oo"
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
                          id="communities-headline-az"
                        >
                          Company
                        </p>
                        <div
                          className="mt-3 space-y-2"
                          aria-labelledby="communities-headline-az"
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
                      <JobIndustry industry={industry} />
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
        </div>
        <Footer />
      </div>
    </>
  );
};

export default jobsearch;

export async function getServerSideProps(context) {
  const location = context.query.location || "";
  const designation = context.query.designation || "";
  const company = context.query.company || "";
  const industry = context.query.industry || "";
  const experience = context.query.experience || "";
  const page = context.query.page || 1;
  let jobTagCarouselValues = "";

  const checkingAdvanceSearch =
    location || designation || company || industry || experience;

  const useRemoveSpaceNew = (value) => {
    return value
      ?.replace(/[^\w\s-]/g, "-") // Replace special characters except hyphen
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/--+/g, "-") // Replace multiple consecutive hyphens with a single hyphen
      .replace(/^-/, "")
      .replace(/^-+|-+$|(-)+/g, "$1")
      .toLowerCase()
      .trim();
  };
  // console.log(context.query)

  const jobCarouselTagTypeFunc = (getJob, getDesignation, searchType) => {
    let jobs = useRemoveSpaceNew(getJob);
    let jobsSplit = jobs?.split("-jobs-in-");
    let jobType = jobsSplit[0];
    let jobsByTypes = jobs?.split("-jobs")[0];
    let jobLocation = "";
    let designation = getDesignation.toLowerCase();
    let jobTagCarouselType = "";

    if (jobs.includes("-jobs-in-")) {
      if (searchType === "Designation" || searchType === "Industry") {
        jobTagCarouselType = `${searchType}JobInCity`;
        jobLocation = jobsSplit[jobsSplit.length - 1];
      }
    } else if (designation) {
      if (designation === "level") {
        jobTagCarouselType = false;
        jobType = jobsByTypes;
      } else if (designation === "categories") {
        jobTagCarouselType = false;
        jobType = jobsByTypes;
      } else if (designation === "industry") {
        jobTagCarouselType = "IndustryJob";
        jobType = jobsByTypes;
      } else if (designation === "designation") {
        jobTagCarouselType = "DesignationJob";
        jobType = jobsByTypes;
      } else if (designation === "companies") {
        jobTagCarouselType = false;
        jobType = jobsByTypes;
      }
    } else if (
      jobs.split("jobs-in-").length == 2 &&
      jobs.split("jobs-in-")[0] === ""
    ) {
      jobTagCarouselType = "JobInCity";
      jobLocation = jobs.split("jobs-in-")[1];
      jobType = "City";
    }
    return [jobType, jobLocation, jobTagCarouselType];
  };

  const urlDetailFetch = (getJob, getDesignation) => {
    let jobs = useRemoveSpaceNew(getJob);
    let jobsSplit = jobs?.split("-jobs-in-");
    // let jobType = jobsSplit[0];
    // let jobsByTypes = jobs?.split("-jobs")[0];
    let designation = getDesignation.toLowerCase();
    const jobSplitHyphen = jobs.split("-");
    const whildCardSearchQuery =
      context.query.id[0] === "latest-jobs" && context.query.id?.length === 2;

    let searchTerm;
    let location;
    let apiCall = "";

    if (jobs.includes("-jobs-in-")) {
      apiCall = "JobListAPI";
      searchTerm = jobsSplit[0];
      location = jobsSplit[jobsSplit.length - 1];
    } else if (
      jobs.split("jobs-in-").length == 2 &&
      jobs.split("jobs-in-")[0] === ""
    ) {
      apiCall = "JobsListByType";
      searchTerm = jobs.split("jobs-in-")[1];
      location = "location-jobs";
    } else if (
      designation === "designation" ||
      designation === "industry" ||
      designation === "level" ||
      designation === "categories" ||
      designation === "companies"
    ) {
      apiCall = "JobsListByType";
      searchTerm = jobs.replace("-jobs", "");
      location = designation + "-jobs";
    } else if (jobs.includes("jobsthisweek-in-")) {
      apiCall = "JobsListByType";
      searchTerm = jobs.split("jobsthisweek-in-")[1];
      location = "this-week-by-location-jobs";
    } else {
      if (
        jobSplitHyphen[1] === "jobs" &&
        !checkingAdvanceSearch &&
        !whildCardSearchQuery
      ) {
        apiCall = "JobsListByType";
        searchTerm = jobSplitHyphen[0] + "-jobs";
        location = jobSplitHyphen[0] + "-jobs";
      } else if (
        jobSplitHyphen[2] === "in" &&
        !checkingAdvanceSearch &&
        !whildCardSearchQuery
      ) {
        apiCall = "JobsListByType";
        searchTerm = jobSplitHyphen[0] + jobSplitHyphen[2];
        location = jobSplitHyphen[0] + jobSplitHyphen[2];
      } else if (
        jobs === "global-placement-jobs" ||
        jobs === "government-jobs" ||
        (jobs === "advancedSearch" &&
          !checkingAdvanceSearch &&
          !whildCardSearchQuery)
      ) {
        apiCall = "JobsListByType";
        searchTerm = jobs;
        location = jobs;
      } else if (
        jobs === "moreJobsLikeThis" ||
        jobs === "jobs-search" ||
        (jobs === "advancedSearch" &&
          !checkingAdvanceSearch &&
          !whildCardSearchQuery)
      ) {
        apiCall = "JobsListByType";
        searchTerm = "latest-jobs";
        location = "latest-jobs";
      } else if (
        jobs === "latest-jobs" &&
        !checkingAdvanceSearch &&
        !whildCardSearchQuery
      ) {
        apiCall = "JobsListByType";
        searchTerm = jobs;
        location = jobs;
      } else if (jobs === "jobsthisweek") {
        apiCall = "JobsListByType";
        searchTerm = jobs;
        location = jobs;
      }
    }
    return [apiCall, searchTerm, location];
  };

  const urlDetailData = urlDetailFetch(
    context.query.id[0],
    context.query.id[1] || ""
  );

  let props = {};
  try {
    let searchJob;
    if (location || designation || company || industry || experience) {
      searchJob = await AdvancedSearchJob(
        location,
        designation,
        company,
        industry,
        experience,
        page
      );
    } else if (
      context.query.id[0] === "latest-jobs" &&
      context.query.id?.length === 2
    ) {
      searchJob = await WildCardJobSearch(context.query.id[1], page);
    } else if (urlDetailData[0] === "JobListAPI") {
      searchJob = await JobListNewAPI(urlDetailData[1], urlDetailData[2], page);
      jobTagCarouselValues = jobCarouselTagTypeFunc(
        context.query.id[0],
        context.query.id[1] || "",
        searchJob.type
      );
    } else if (urlDetailData[0] === "JobsListByType") {
      searchJob = await JobListByTypeNewAPI(
        urlDetailData[1],
        urlDetailData[2],
        page
      );

      jobTagCarouselValues = jobCarouselTagTypeFunc(
        context.query.id[0],
        context.query.id[1] || "",
        ""
      );
    } else {
      return {
        redirect: {
          destination: `/three-zero-one?invalidURL=${context.req.url}`, // The URL to redirect to
          permanent: true, // Set to true for permanent redirects (HTTP 301), false for temporary redirects (HTTP 302)
        },
      };
    }
    let jobCarouselData = [];

    if (jobTagCarouselValues[2]) {
      jobCarouselData = await fetchJobsTagCarousel(
        jobTagCarouselValues[2],
        jobTagCarouselValues[1],
        jobTagCarouselValues[0]
      );
    }

    // const articledata = await SearchArticlesResponse({
    //   SearchTerm: "Jobs",
    // });

    const jobsListPageMainJSON = await fetch(
      "https://timesascent.com/json/new/JobsListPageMainJSON.json"
    );
    const {
      Cityfilter,
      Positionfilter,
      Companyjobs,
      Industryfilter,
      Articledata,
    } = await jobsListPageMainJSON.json();

    // const arr = [

    //   "cityFilter",
    //   "positionFilter",
    //   "companyFilter",
    //   "indusrtyJsonFilter",
    // ];
    // const result = await Promise.all(
    //   arr.map((item) => {
    //     return fetch(`${process.env.LIVE_HOST}/json/${item}.json`).then((res) =>
    //       res.json()
    //     );
    //   })
    // );

    props = {
      searchJob,
      articledata: Articledata,
      cityFilterData: Cityfilter,
      positionFilterData: Positionfilter,
      companyFilterData: Companyjobs,
      indusrtyJsonFilterData: Industryfilter,
      jobTagCarouselValues,
      jobCarouselData,
      page,
    };
  } catch (err) {
    console.log(err);

    props = {
      isPageError: true,
    };
  }

  return { props: { props } };
}
