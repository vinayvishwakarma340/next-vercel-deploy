import MainHeader from "../Components/MainHeader";
import Footer from "../Components/Footer";
import { useEffect, useState } from "react";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import SearchArea from "../Components/jobs/SearchArea";
import Cookies from "js-cookie";
import { AcademicCapIcon } from "@heroicons/react/20/solid";
import HeadingWithIcon from "../Components/HeadingUI/HeadingWithIcon";
import BreadCrumbs from "../Components/BreadCrumbs";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import Head from "next/head";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";
import GoogleAd_Hrec from "../Components/GoogleAds/GoogleAd_Hrec";
import GoogleAd_BHrec from "../Components/GoogleAds/GoogleAd_BHrec";
import SkeletonMrec from "../Components/Skeleton/SkeletonMrec";
import SkeletonHrec from "../Components/Skeleton/SkeletonHrec";
import SkeletonBHrec from "../Components/Skeleton/SkeletonBHrec";
import JobsScroll from "../Components/JobsScroll";
import FilterModal from "../Components/Modal/FilterModal";

import dynamic from "next/dynamic";

const FeaturedCompanies = dynamic(() => import("../Components/jobs/FeaturedCompanies"));
const JobsByLocation = dynamic(() => import("../Components/jobs/JobsByLocation"));
const JobEventCard = dynamic(() => import("../Components/jobs/JobEventCard"));
const GlobalJobs = dynamic(() => import("../Components/jobs/GlobalJobs"));
const ArticleCardWithoutImg = dynamic(() => import("../Components/CardUI/ArticleCardWithoutImg"));
const AskQuestionWidget = dynamic(() => import("../Components/Widget/AskQuestionWidget"));
const PartnerCompanyJobs = dynamic(() => import("../Components/jobs/PartnerCompanyJobs"));
const ArticleNew = dynamic(() => import("../Components/NewCompo/ArticleNew"));
const PrimayWidgetNew = dynamic(() => import("../Components/Widget/PrimayWidgetNew"));
const HrProfessionalProfile = dynamic(() => import("../Components/CardUI/HrProfessionalProfile"));
const FreelancerWidget = dynamic(() => import("../Components/Widget/FreelancerWidget"));
const ForumQuestion = dynamic(() => import("../Components/Modal/ForumQuestion"));
const SuccessModal = dynamic(() => import("../Components/Modal/SuccessModal"));


//call on server side

// import TopCity from "../public/JSON/TopCity.json";
// import jobScreen from "../public/JSON/jobScreen.json";

// careerscreenData,
//     jobScreenData,
//     positionFilterData,
//     gethrprofessionallistData,
//     topcompanyData,
const jobs = ({ props }) => {
  const careerscreen = props.careerscreenData;
  const jobScreen = props.jobScreenData;
  const positionFilter = props.positionFilterData;
  const gethrprofessionallist = props.gethrprofessionallistData;
  const topcompany = props.topcompanyData;
  const TopCity = props.TopCityData;
  const PopularCity = props.cityFilterData;
  const jobCitySuggestion = props.jobCitySuggestionJSON;

  const [showModal, setShowModal] = useState(false);
  const [showModals, setShowModals] = useState(false);
  const [deviceType, setDeviceType] = useState("");
  const [adShow, setadShow] = useState(false);
  const [btnLoader, setBtnLoader] = useState(false);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  // const [jobSuggestions, setJobSuggestions] = useState([]);
  const [autoFillSearchData, setAutoFillSearchData] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState({ issuedate: "", keyIndex: "", location: "", numberOfPosition: "" });

  const USERID = Cookies.get("USERID")

  const widgetOne = {
    name: "FREE Mentorship Advise",
    description: "Free mentorship advice from top mentors",
    icon: AcademicCapIcon,
    src: "/mentorIcon/Mentor.webp",
    btnText: "Connect With Mentors",
    href: "/mentorship/mentorkart",
  };

  const widgetTwo = {
    name: "Online mock interview",
    description: "Virtual face to face mock interviews with industry experts",
    icon: AcademicCapIcon,
    src: "/mentorIcon/InterviewBuddy.webp",
    btnText: "Start Mock Interview",
    href: "/interview-buddy",
  };

  const partnerJobs = [
    {
      imageUrl: "/snaphunt.webp",
      CompanyName: "Snaphunt",
      Category: "12332",
      href: "/partner-jobs/snaphunt",
    },
    {
      imageUrl: "/cutshort.webp",
      CompanyName: "CutShort",
      Category: "11005",
      href: "/partner-jobs/cutshort",
    },
    {
      imageUrl: "/whatjobs.webp",
      CompanyName: "Whatjobs",
      Category: "25243",
      href: "/partner-jobs/whatjobs",
    },
  ];

  const pages = [
    {
      name: "Jobs",
      href: "#",
      current: true,
    },
  ];

  const freelancerWidgetData = {
    heading: "Hire Remote Freelancers",
    description: "Get a network of certified and experienced freelancers",
    buttonText: "Post a requirement",
  };


  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    EventJob();
    CompanyEvent();
    ArticleEvent();
    CheckSourceDevice();
    // fetchJobSuggentions();
    return () => clearTimeout(timeout)
  }, [
    jobScreen.latestJob,
    jobScreen.international,
    jobScreen.trendingJobs,
    jobScreen.wednesDayJobs,
    topcompany.data,
    careerscreen.hrArticles,
    careerscreen.recommendedArticles,
  ]);

  useEffect(() => {
    handleLocationClick();
  }, []);

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

  const closesuccessModal = (modalType) => {
    setShowModals(false);
  };

  const EventJob = () => {
    const pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    gtag.pageSpeedEvent({
      action: "Jobs Page Speed", pageTitle: "Jobs page", load_time: pageLoadTime
    });

    {
      jobScreen.latestJob.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Job Impressions",
          label: item.JobId,
        });
      });
    }

    {
      jobScreen.international.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Job Impressions",
          label: item.JobId,
        });
      });
    }
    {
      jobScreen.trendingJobs.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Job Impressions",
          label: item.JobId,
        });
      });
    }
    {
      jobScreen.wednesDayJobs.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Job Impressions",
          label: item.JobId,
        });
      });
    }
  };

  const CompanyEvent = () => {
    {
      jobScreen.latestJob.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Company Impressions",
          label: router.asPath,
        });
      });
    }
    {
      jobScreen.international.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Company Impressions",
          label: router.asPath,
        });
      });
    }
    {
      jobScreen.trendingJobs.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Company Impressions",
          label: router.asPath,
        });
      });
    }
    {
      jobScreen.wednesDayJobs.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Company Impressions",
          label: router.asPath,
        });
      });
    }
    {
      topcompany.data.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Company Impressions",
          label: router.asPath,
        });
      });
    }
  };

  const ArticleEvent = () => {
    {
      careerscreen.hrArticles.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
    {
      careerscreen.recommendedArticles.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
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
  // const fetchJobSuggentions = () => {
  //   var myHeaders = new Headers();
  //   myHeaders.append("Authorization", process.env.API_TOKEN_AUTH_SERVER);

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     redirect: 'follow'
  //   };

  //   fetch("https://api.timesascent.com/v1/api/apiTimes/AllDomainJSON", requestOptions)
  //     .then(response => response.json())
  //     .then(result => {
  //       // console.log(result.name.data);
  //       setJobSuggestions(result.name);
  //     })
  //     .catch(error => console.log('error', error));
  // }
  // const checkJSON = () => {
  //   let fakeArr = [];
  //   fakeArr = positionFilter.filter((item) => {
  //     return item.skill === title;
  //   });
  //   if (fakeArr.length === 0) {
  //     return false;
  //   } else {
  //     return true;
  //   }
  // }; 

  const saveSearchJob = (title, location) => {
    setBtnLoader(true)
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
        // console.log("saved", result);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setBtnLoader(false);
      });
  };

  const SearchAutoFillApi = (searchTerm) => {
    let term = searchTerm ? searchTerm : ""
    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.API_TOKEN_AUTH_SERVER);
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "searchTerm": term
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${process.env.Live_API_URL}/v1/api/apiTimes/SearchAutoFill`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status_code === 200 && result.status === "success") {
          setAutoFillSearchData(result.data)
        } else {
          setAutoFillSearchData([])
        }
      })
      .catch(error => console.log('error', error));
  }
  const onSuccessForm = () => {
    setShowModal(false);
    const timeout = setTimeout(() => {
      setShowModals(true);
    }, 500);
    return () => clearTimeout(timeout)
  };
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>
          Jobs, Job Search, Job Vacancies, Employment, Recruitment -
          Timesascent.com
        </title>
        <meta
          name="description"
          content=" More than 500000 job openings, advertisment, classified, government jobs, international jobs, remote work online. Apply for jobs Online, Jobs by Times Ascent, times of india - timesascent.com"
        />
        <link rel="canonical" href="https://timesascent.com/jobs" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

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
        <meta
          property="og:title"
          content="Jobs, Job Search, Job Vacancies, Employment, Recruitment - Timesascent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content=" More than 500000 job openings, advertisment, classified, government jobs, international jobs, remote work online. Apply for jobs Online, Jobs by Times Ascent, times of india - timesascent.com"
        />
        <meta property="og:url" content="https://timesascent.com/jobs" />
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
          content="Jobs, Job Search, Job Vacancies, Employment, Recruitment - Timesascent.com"
        />
        <meta
          property="twitter:description"
          content=" More than 500000 job openings, advertisment, classified, government jobs, international jobs, remote work online. Apply for jobs Online, Jobs by Times Ascent, times of india - timesascent.com"
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
                  position: 1,
                  name: "Jobs",
                },
              ],
            }),
          }}
        />
      </Head>
      <SuccessModal
        openModal={showModals}
        closeModal={() => closesuccessModal()}
        headingText="Thank you !!"
        subHeadingText={"Your question will soon receive a response"}
        buttonText="OK"
      />
      <ForumQuestion
        openModal={showModal}
        onSuccessForm={onSuccessForm}
        setShowModals={setShowModals}
        closeModal={() => setShowModal(false)}
      />
      <div className="bg-white relative">
        <MainHeader />
        <div className="relative   py-4 container mx-auto lg:py-4 bg-white">
          <BreadCrumbs data={pages} />
        </div>

        <FilterModal
          open={openFilterModal}
          setFilterModal={setOpenFilterModal}
          saveSearchJob={saveSearchJob}
          PopularCity={jobCitySuggestion}
          // suggetionData={jobSuggestions}
          loading={btnLoader}
          setLoading={setBtnLoader}
        />
        <div className="bg-purple-50">
          <SearchArea
            projects={positionFilter}
            saveSearchJob={saveSearchJob}
            selectedLocation={selectedLocation}
            setSelectedLocation={setSelectedLocation}
            PopularCity={jobCitySuggestion}
            // suggetionData={jobSuggestions}
            SearchAutoFillApi={SearchAutoFillApi}
            autoFillSearchData={autoFillSearchData}
            loading={btnLoader}
            setLoading={setBtnLoader}
            setOpenFilterModal={setOpenFilterModal}
          />
        </div>
        <div className="sm:hidden pb-4 pl-[4%]">
          <JobsScroll />
        </div>
        <div className="relative container   pb-4  mx-auto">
          <div className="relative mx-auto ">
            <div className="relative ">
              <a href="/latest-jobs">
                <h2 className="inline-flex text-xl font-bold">
                  Top companies actively hiring
                </h2>
              </a>
            </div>
            <div className="pt-4 grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 ">
              {topcompany.data
                .slice(2, topcompany.data.length)
                .map((item, keyindex) => {
                  return <FeaturedCompanies data={item} key={keyindex} />;
                })}
            </div>
            <div className="flex flex-col-reverse md:flex-row  items-center box-border w-full">
              <div className="mt-6 md:mt-0 w-full md:w-[calc(100%-320px)]">
                <JobsByLocation people={TopCity} />
              </div>

              <div className="mt-6 md:mt-0  md:ml-[20px] md:w-[300px]">
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
            </div>

            <div className="py-8">
              <div className="relative ">
                <a href="/latest-jobs">
                  <h2 className="inline-flex text-xl font-bold">Latest Jobs</h2>
                </a>
              </div>
              <div className="lg:grid grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 sm:grid sm:grid-cols-3 md:grid-cols-3 gap-2 md:gap-6">
                {jobScreen.latestJob.map((item, keyindex) => {
                  return (
                    <div key={keyindex} className="mt-4 sm:mt-4">
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
              <div className="text-end">
                <a
                  href="/latest-jobs"
                  className="inline-flex justify-end mt-2 text-sm text-timesPurple underline hover:text-indigo-600"
                >
                  Find your next job &rarr;
                </a>
              </div>
            </div>
            {adShow ? (
              <div className="mt-6">
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
              </div>
            ) : (
              <div className="mt-6">
                <SkeletonHrec />
              </div>
            )}

            <div className="py-3">
              <div className="relative ">
                <a href="/global-placement-jobs">
                  <h2 className="inline-flex text-xl font-bold">Global Jobs</h2>
                </a>
              </div>
              <div className="lg:grid grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 sm:grid sm:grid-cols-2 gap-2 md:gap-4">
                {jobScreen.international.slice(1, 7).map((item, keyindex) => {
                  return (
                    <div className="mt-4 sm:mt-4" key={keyindex}>
                      <GlobalJobs
                        key={keyindex}
                        data={item}
                        device={deviceType}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="text-end">
                <a
                  href="/Global-Placement-jobs"
                  className="inline-flex justify-end mt-2 text-sm text-timesPurple underline hover:text-indigo-600"
                >
                  Search more jobs &rarr;
                </a>
              </div>
            </div>
            {adShow ? (
              <div className="mt-6">
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
              </div>
            ) : (
              <div className="mt-6">
                <SkeletonHrec />
              </div>
            )}

            <section className="mt-6">
              <HeadingWithIcon headingText="Voice of HR" />
              <div className="flex flex-col md:flex-row">
                <ul
                  role="list"
                  className=" divide-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4  md:mr-10 gap-4  "
                >
                  {careerscreen.hrArticles.slice(0, 4).map((item, index) => {
                    return <ArticleCardWithoutImg key={index} data={item} />;
                  })}
                </ul>
                <div className="m-auto ">
                  <AskQuestionWidget
                    heading={"Ask us a question"}
                    description={
                      "Get answers to all your career related queries!"
                    }
                    buttonText="Drop your question here"
                    onClick={() => setShowModal(true)}
                  />
                </div>
              </div>
            </section>
            {adShow ? (
              <div className="mt-6">
                <div className=" hidden md:block ">
                  <GoogleAd_BHrec
                    path="/1064661/ta.com_bhrec1_Jobs"
                    ads_Id="div-gpt-ad-1674561057613-0"
                    size={[[750, 200]]}
                  />
                </div>
                <div className="block md:hidden">
                  <GoogleAd_BHrec
                    path="/1064661/ta.com_bhrec1_Mob_Jobs"
                    ads_Id="div-gpt-ad-1674561174474-0"
                    size={[[320, 100]]}
                  />
                </div>
              </div>
            ) : (
              <div className="mt-6">
                <SkeletonBHrec />
              </div>
            )}

            <div className="py-8">
              <div className="relative ">
                <a href="/trending-jobs">
                  <h2 className="inline-flex text-xl font-bold">
                    Trending Jobs
                  </h2>
                </a>
              </div>
              <div className="lg:grid grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 sm:grid sm:grid-cols-3 gap-2 md:gap-4">
                {jobScreen.trendingJobs.slice(0, 10).map((item, keyindex) => {
                  return (
                    <div className="mt-4 sm:mt-4" key={keyindex}>
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
              <div className="text-end">
                <a
                  href="/trending-jobs"
                  className="inline-flex justify-end mt-2 text-sm text-timesPurple underline hover:text-indigo-600"
                >
                  Applicants also search &rarr;
                </a>
              </div>
            </div>
            {adShow ? (
              <div className="mt-6">
                <div className=" hidden md:block ">
                  <GoogleAd_Hrec
                    path="/1064661/ta.com_hrec3_Jobs"
                    ads_Id="div-gpt-ad-1674565167515-0"
                    size={[[728, 90]]}
                  />
                </div>
                <div className="block md:hidden">
                  <GoogleAd_Hrec
                    path="/1064661/ta.com_hrec3_Mob_Jobs"
                    ads_Id="div-gpt-ad-1674565489980-0"
                    size={[[320, 50]]}
                  />
                </div>
              </div>
            ) : (
              <div className="mt-6">
                <SkeletonHrec />
              </div>
            )}

            <div className="py-8">
              <div className="relative ">
                <a href="/trending-jobs">
                  <h2 className="inline-flex text-xl font-bold">
                    Wednesday Jobs
                  </h2>
                </a>
              </div>
              <div className="lg:grid grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 sm:grid sm:grid-cols-3 gap-2 md:gap-4">
                {jobScreen.wednesDayJobs.slice(0, 10).map((item, keyindex) => {
                  return (
                    <div className="mt-4 sm:mt-4" key={keyindex}>
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
              <div className="text-end">
                <a
                  href="/wednesday-jobs"
                  className="inline-flex justify-end mt-2 text-sm text-timesPurple underline hover:text-indigo-600"
                >
                  Show more jobs &rarr;
                </a>
              </div>
            </div>
            <div className="py-6 md:py-8">
              <div className="relative ">
                <a href="#" className="pointer-events-none">
                  <h2 className="inline-flex text-xl font-bold">
                    Partner Jobs
                  </h2>
                </a>
              </div>
              <div className="md:flex  items-center box-border ">
                <div className="lg:grid grid grid-cols-1 lg:grid-cols-4 sm:grid sm:grid-cols-3 gap-2 md:gap-4 ">
                  {partnerJobs.slice(0, 10).map((item, keyindex) => {
                    return (
                      <div className="mt-4 sm:mt-4" key={keyindex}>
                        <PartnerCompanyJobs key={keyindex} data={item} />
                      </div>
                    );
                  })}
                  <div className="mt-6 md:mt-0 right-side md:ml-[20px] md:w-[300px]">
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
                  {/* <div className="h-[230px] mt-4 ">
                    <FreelancerWidget {...freelancerWidgetData} />
                  </div> */}
                </div>
              </div >
            </div >

            {/* <ArticleNew
            heading={"Interview Tips"}
            subHeading={
              "Tips that can precisely aid you, whether you are a new or seasoned job seeker"
            }
            data={careerscreen.interviewArticles.slice(0, 4)}
          /> */}

            <div div className="py-8" >
              <div className="relative pb-4">
                <a href="/articleslist/recommended-read">
                  <h2 className="inline-flex text-xl font-bold items-center hover:text-timesPurple">
                    Recommended Read{" "}
                    <span>
                      <ArrowRightIcon className="h-5 ml-2 mt-1" />
                    </span>
                  </h2>
                </a>
              </div>
              <ArticleNew data={careerscreen.recommendedArticles.slice(0, 5)} />
            </div >
            <section className="mt-6  ">
              <div className=" sm:flex w-full items-center  justify-between ">
                {adShow ? (
                  <GoogleAd_300x250
                    path="/1064661/ta.com_mrec2_job"
                    ads_Id="div-gpt-ad-1674554724509-0"
                    size={[[300, 250]]}
                  />
                ) : (
                  <SkeletonMrec />
                )}
                <div className="mt-6 sm:mt-0 sm:w-[calc(100%-640px)] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mx-4">
                  <div className="h-[250px]  ">
                    <PrimayWidgetNew {...widgetOne} />
                  </div>
                  <div className="h-[250px] ">
                    <PrimayWidgetNew {...widgetTwo} />
                  </div>
                </div>
                <div className="mt-6 sm:mt-0 ">
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
              </div>
            </section>
            {/* <JobsByPosition /> */}
            <section className="mt-6 md:flex justify-between box-border w-full">
              <div className="left-side w-full  md:w-[calc(100%-320px)]">
                <HeadingWithIcon headingText="Industry's Leading HR Professionals" />
                <div
                  role="list"
                  className=" space-y-2 sm:grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3  sm:gap-2 sm:space-y-0 lg:gap-x-2"
                >
                  {gethrprofessionallist.data?.slice(0, 6)?.map((item) => {
                    return (
                      <HrProfessionalProfile key={item.KeyIndex} data={item} />
                    );
                  })}
                </div>
              </div>
              <div className="mt-6 md:mt-9 right-side md:ml-[20px] md:w-[300px]">
                <div className="h-[230px] ">
                  <FreelancerWidget {...freelancerWidgetData} />
                </div>
                {/* <SecondryWidget
                    iconUrl="https://api.timesascent.com/recruiterpostjob/staticGrowth.svg/2022/08/18/1660816388.svg"
                    text2="HR Professional"
                    text3="Recognizing HR Excellence "
                    buttonText="Share your profile"
                    href="/share-your-profile"
                  /> */}
              </div>
            </section>

            {
              adShow ? (
                <div className="mt-6">
                  <div className=" hidden md:block ">
                    <GoogleAd_Hrec
                      path="/1064661/ta.com_hrec4_Jobs"
                      ads_Id="div-gpt-ad-1674565249901-0"
                      size={[[728, 90]]}
                    />
                  </div>
                  <div className="block md:hidden">
                    <GoogleAd_Hrec
                      path="/1064661/ta.com_hrec4_Mob_Jobs"
                      ads_Id="div-gpt-ad-1674565341263-0"
                      size={[[320, 50]]}
                    />
                  </div>
                </div>
              ) : (
                <div className="mt-6">
                  <SkeletonHrec />
                </div>
              )
            }
          </div >
        </div >

        < Footer />
      </div >
    </>
  );
};

export default jobs;

export async function getServerSideProps(context) {
  let props = {};
  try {

    const jobsMainJsonData = await fetch('https://timesascent.com/json/new/JobsPage.json');
    const { CareersScreen: careerscreenData, GetHRProfessionalList: gethrprofessionallistData, TopCompany: topcompanyData, jobScreen: jobScreenData, positionfilter: positionFilterData, cityfilter: cityFilterData, TopCity: TopCityData } = await jobsMainJsonData.json();


    const jobCitySuggestionData = await fetch("https://timesascent.com/json/cityFilter.json");
    const jobCitySuggestionJSON = await jobCitySuggestionData.json();
    // const careerscreen = await fetch(
    //   `${process.env.LIVE_HOST}/json/careerscreen.json`
    // );
    // const careerscreenData = await careerscreen.json();

    // const cityFilter = await fetch(
    //   `${process.env.LIVE_HOST}/json/cityFilter.json`
    // );
    // const cityFilterData = await cityFilter.json();

    // const jobScreen = await fetch(
    //   `${process.env.LIVE_HOST}/json/jobScreen.json`
    // );
    // const jobScreenData = await jobScreen.json();

    // const positionFilter = await fetch(
    //   `${process.env.LIVE_HOST}/json/positionFilter.json`
    // );
    // const positionFilterData = await positionFilter.json();

    // const gethrprofessionallist = await fetch(
    //   `${process.env.LIVE_HOST}/json/gethrprofessionallist.json`
    // );
    // const gethrprofessionallistData = await gethrprofessionallist.json();

    // const topcompany = await fetch(
    //   `${process.env.LIVE_HOST}/json/topcompany.json`
    // );
    // const topcompanyData = await topcompany.json();

    // const TopCity = await fetch(`${process.env.LIVE_HOST}/json/TopCity.json`);
    // const TopCityData = await TopCity.json();

    props = {
      careerscreenData,
      jobScreenData,
      positionFilterData,
      gethrprofessionallistData,
      topcompanyData,
      TopCityData,
      jobCitySuggestionJSON,
      cityFilterData
    };
  } catch (err) {
    props = {
      isPageError: true,
    };
  }

  return { props: { props } };
}
