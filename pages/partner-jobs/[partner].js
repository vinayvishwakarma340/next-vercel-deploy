import { useState, useEffect } from "react";
import {
  ArrowTrendingUpIcon,
  FireIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import MainHeader from "../../Components/MainHeader";
import { PartnerCompany } from "../api/jobsApi";
import NewJobCard from "../../Components/jobs/NewJobCard";

import SearchAreaInput from "../../Components/jobs/JobDetail/SearchAreaInput";
import { useRouter } from "next/router";
import BreadCrumbs from "../../Components/BreadCrumbs";
import Head from "next/head";
import Footer from "../../Components/Footer";
import NewPagination from "../../Components/NewPagination";
import * as gtag from "../../lib/gtag";
import Cookies from "js-cookie";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
import ArtcleWidget from "../../Components/ArticleWidget";

import SkeletonMrec from "../../Components/Skeleton/SkeletonMrec";
import GoogleAd_Hrec from "../../Components/GoogleAds/GoogleAd_Hrec";
import SkeletonHrec from "../../Components/Skeleton/SkeletonHrec";
import FourZeroFour from "../../Components/FourZeroFour";
import FilterModal from "../../Components/Modal/FilterModal";
import NewSearchAreaInput from "../../Components/jobs/JobDetail/NewSearchAreaInput";
import dynamic from "next/dynamic";
import SearchAreaInputMobile from "../../Components/jobs/JobDetail/SearchAreaInputMobile";
import SearchInputModal from "../../Components/jobs/JobDetail/SearchInputModal";

const JobIndustry = dynamic(() => import("../../Components/jobs/JobIndustry"));

const partner = ({ props }) => {
  if (props.isPageError) {
    return <FourZeroFour />;
  }
  const getForherSreenData = props.getForherSreenData;
  const PopularCity = props.cityFilterData;
  const PopularDesignations = props.positionFilterData;
  const Company = props.companyFilterData;
  const industry = props.indusrtyJsonFilterData;
  const jobDataSearch = props.searchJob.data;
  const [count, setCount] = useState("");
  const [page, setPage] = useState(parseInt(props.page));
  const [maxPage, setMaxPage] = useState(1);
  const [saveLikeJob, setSaveLikeJob] = useState([]);
  const [adShow, setadShow] = useState(false);
  const [selectTab, setSelectTab] = useState("");
  const [deviceType, setDeviceType] = useState("");
  const USERID = Cookies.get("USERID");
  // const [jobSuggestions, setJobSuggestions] = useState([]);
  const loggedIn = Cookies.get("userLoggedIn");
  const [btnLoader, setBtnLoader] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [autoFillSearchData, setAutoFillSearchData] = useState([]);
  const [locationSuggestionData, setLocationSuggestionData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({
    issuedate: "",
    keyIndex: "",
    location: "",
    numberOfPosition: "",
  });

  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    setCount(props.searchJob ? props.searchJob : "");
    setPage(parseInt(props.page));
    setMaxPage(Math.ceil(props?.searchJob?.datacount / 2));
    return () => clearTimeout(timeout);
  }, [props.page]);
  useEffect(() => {
    CheckSourceDevice();
    setPage(parseInt(props.page));
  }, [props.page]);
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
  useEffect(() => {
    handleLocationClick();
  }, [])

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

  const Event = () => {
    const pageLoadTime =
      window.performance.timing.domContentLoadedEventEnd -
      window.performance.timing.navigationStart;
    gtag.pageSpeedEvent({
      action: "Partner Job detail Page Speed",
      pageTitle: "Partner Job detail page",
      load_time: pageLoadTime,
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
      getForherSreenData.articles.map((item) => {
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
  }, [jobDataSearch, getForherSreenData.articles]);

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

  const FollowButton = (id) => {
    if (loggedIn) {
      LikeJob(id);
    } else {
      Cookies.set("pathname", router.asPath);
      router.push("/times-ascent-signin");
    }
  };

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

  const saveSearchJob = (title, location) => {
    setBtnLoader(true);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.API_TOKEN_AUTH_SERVER);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      searchTerms: title,
      type: location,
      USERID: USERID ? USERID : "",
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
  // const fetchJobSuggentions = () => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Authorization", process.env.API_TOKEN_AUTH_SERVER);

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     redirect: 'follow'
  //   };

  //   fetch(`${process.env.Live_API_URL}/v1/api/apiTimes/AllDomainJSON`, requestOptions)
  //     .then(response => response.json())
  //     .then(result => {
  //       // console.log(result.name.data);
  //       setJobSuggestions(result.name);
  //     })
  //     .catch(error => console.log('error', error));
  // }

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

  const JobHeading = () => {
    if (router.query.partner === "cutshort") {
      return "PARTNER JOBS";
    } else if (router.query.partner === "snaphunt") {
      return "PARTNER JOBS";
    } else if (router.query.partner === "whatjobs") {
      return "PARTNER JOBS";
    }
  };

  return (
    <div className=" bg-zinc-50">
      <Head>
        <title>{`Partner jobs at timesascent.com`}</title>
        <link
          rel="canonical"
          href={`https://timesascent.com${router.asPath}`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={`Latest Partner jobs vacancies at timesascent.com`}
        />
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
        <meta property="og:title" content={`Partner jobs at timesascent.com`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`Latest Partner jobs vacancies at timesascent.com`}
        />
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
        <meta
          property="twitter:title"
          content={`Partner jobs at timesascent.com`}
        />
        <meta
          property="twitter:description"
          content={`Latest Partner jobs vacancies at timesascent.com`}
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
                  name: "Job Search",
                },
              ],
            }),
          }}
        />
      </Head>
      <MainHeader />
      <div className="relative py-4 container lg:py-4 bg-white">
        <BreadCrumbs data={pages} />
      </div>
      <div className="min-h-full">
        <div className="pb-4 sm:py-4">
          <FilterModal
            open={openFilterModal}
            setFilterModal={setOpenFilterModal}
            saveSearchJob={saveSearchJob}
            PopularCity={locationSuggestionData}
            // suggetionData={jobSuggestions}
            loading={btnLoader}
            setLoading={setBtnLoader}
          />

          <div className="hidden sm:block">
            <NewSearchAreaInput
              saveSearchJob={saveSearchJob}
              selectedLocation={selectedLocation}
              setSelectedLocation={setSelectedLocation}
              PopularCity={locationSuggestionData}
              SearchLocationAutoFillApi={SearchLocationAutoFillApi}
              // suggetionData={jobSuggestions}
              loading={btnLoader}
              setLoading={setBtnLoader}
              setOpenFilterModal={setOpenFilterModal}
              SearchAutoFillApi={SearchAutoFillApi}
              autoFillSearchData={autoFillSearchData}
            />
          </div>
          <div className="block sm:hidden">
            <SearchAreaInputMobile
              open={open}
              setOpen={setOpen}
              SearchLocationAutoFillApi={SearchLocationAutoFillApi}
              setOpenFilterModal={setOpenFilterModal}
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
              // suggetionData={jobSuggestions}
              loading={btnLoader}
              setLoading={setBtnLoader}
              setOpenFilterModal={setOpenFilterModal}
              SearchAutoFillApi={SearchAutoFillApi}
              autoFillSearchData={autoFillSearchData}
            />
          </div>

          <div className="mx-auto w-full md:flex gap-6 justify-between  sm:container">
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
                        "group flex items-center justify-center lg:justify-start px-3 py-1 text-sm font-medium rounded-md"
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
            <main className="w-full md:w-[calc(100%-550px)]">
              <div className="px-4 sm:px-0">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-medium mb-2 sm:mb-4 mr-6">
                    {JobHeading()}
                  </h1>
                  <div className="text-sm font-semibold mb-4">
                    Results: {24 * page} of {count.datacount}
                  </div>
                </div>

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
                            ? "text-gray-900"
                            : "text-gray-500 hover:text-gray-700",
                          tabIdx === 0 ? "rounded-l-lg" : "",
                          tabIdx === tabs.length - 1 ? "rounded-r-lg" : "",
                          "pointer-events-none group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                        )}
                      >
                        <span>{tab.name}</span>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            tab.current ? "bg-rose-500" : "bg-transparent",
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
                      <>
                        <NewJobCard
                          jobLike={saveLikeJob}
                          LikeButton={FollowButton}
                          jobDataSearch={item}
                          device={deviceType}
                        />
                      </>
                    );
                  })
                ) : (
                  <div className="text-xl font-medium py-8 text-center flex justify-center items-center">
                    <img
                      src="/PageError/ResultNotFound.png"
                      className="h-12 w-12 mr-4"
                    />
                    No Result Found !
                  </div>
                )}
                <div className="place-content-center mt-5 mb-5 ">
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
                  {getForherSreenData.articles.slice(0, 2).map((item) => {
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
                    className="inline-flex justify-end mt-2 text-sm text-timesPurple  hover:text-indigo-600"
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
                      path="/1064661/ta.com_mrec4_job"
                      ads_Id="div-gpt-ad-1674555122258-0"
                      size={[[300, 250]]}
                    />
                  ) : (
                    <SkeletonMrec />
                  )}
                </div>
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
                <div className="sm:grid sm:grid-cols-2 gap-x-2 mt-4">
                  {getForherSreenData.articles.slice(2, 4).map((item) => {
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
                    className="inline-flex justify-end mt-2 text-sm text-timesPurple  hover:text-indigo-600"
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
            <aside className="w-full md:w-[300px]">
              <div className="sticky top-4 space-y-4 ">
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
                  <div className="place-content-center mt-5 pb-5 sm:pb-20 lg:hidden block">
                    {adShow ? (
                      <GoogleAd_300x250
                        path="/1064661/ta.com_mrec6_home"
                        ads_Id="div-gpt-ad-1674551324910-0"
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
                        path="/1064661/ta.com_mrec7_home"
                        ads_Id="div-gpt-ad-1674551466303-0"
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
                  <JobIndustry industry={industry} />
                  <div className="place-content-center mt-5 pb-5 sm:pb-20 ">
                    {adShow ? (
                      <GoogleAd_300x250
                        path="/1064661/ta.com_mrec8_home"
                        ads_Id="div-gpt-ad-1674551589952-0"
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
  );
};

export default partner;

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
    const searchJob = await PartnerCompany(context.query.partner, page);

    // const getForherSreen = await fetch(
    //   `${process.env.LIVE_HOST}/json/getForherSreenData.json`
    // );
    // const getForherSreenData = await getForherSreen.json();

    // const cityFilter = await fetch(
    //   `${process.env.LIVE_HOST}/json/cityFilter.json`
    // );
    // const cityFilterData = await cityFilter.json();

    // const positionFilter = await fetch(
    //   `${process.env.LIVE_HOST}/json/positionFilter.json`
    // );
    // const positionFilterData = await positionFilter.json();

    // const companyFilter = await fetch(
    //   `${process.env.LIVE_HOST}/json/companyFilter.json`
    // );
    // const companyFilterData = await companyFilter.json();

    // const indusrtyJsonFilter = await fetch(
    //   `${process.env.LIVE_HOST}/json/indusrtyJsonFilter.json`
    // );
    // const indusrtyJsonFilterData = await indusrtyJsonFilter.json();

    const PartnerJobsMainJSON = await fetch(
      "https://timesascent.com/json/new/PartnerJobsMainJSON.json"
    );
    const partnerJobsData = await PartnerJobsMainJSON.json();

    const {
      Cityfilter,
      Positionfilter,
      Companyjobs,
      Industryfilter,
      getForherSreenData,
    } = partnerJobsData;

    props = {
      searchJob,
      getForherSreenData: getForherSreenData,
      cityFilterData: Cityfilter,
      positionFilterData: Positionfilter,
      companyFilterData: Companyjobs,
      indusrtyJsonFilterData: Industryfilter,
      page,
      isMobile,
    };
  } catch (err) {
    props = {
      isMobile,
      isPageError: true,
    };
  }

  return { props: { props } };
}
