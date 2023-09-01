import * as gtag from "../lib/gtag";
import { useEffect, useState } from "react";
import Head from "next/head";
import MainHeader from "../Components/MainHeader";
import HomeCarousel from "../Components/CarouselBanner/HomeCarousel";
import FeatureOrganizaionNew from "../Components/NewCompo/FeatureOrganizaionNew";
import HeadingWithIcon from "../Components/HeadingUI/HeadingWithIcon";
import { HeadingWithIconH1 } from "../Components/HeadingUI/HeadingWithIcon";
import { useRouter } from "next/router";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";
import GoogleAd_BHrec from "../Components/GoogleAds/GoogleAd_BHrec";
import SkeletonMrec from "../Components/Skeleton/SkeletonMrec";
import SkeletonBHrec from "../Components/Skeleton/SkeletonBHrec";
// import HomeYoutube from "../Components/CardUI/HomeYoutube";

import FreelancerWidget from "../Components/Widget/FreelancerWidget";
import HomeYoutube from "../Components/CardUI/HomeYoutube";
import AskQuestionWidget from "../Components/Widget/AskQuestionWidget";
import ForumQuestion from "../Components/Modal/ForumQuestion";
import ArticleNew from "../Components/NewCompo/ArticleNew";

import dynamic from "next/dynamic";
import FourZeroFour from "../Components/FourZeroFour";
// import TestCarousel from "../Components/CarouselBanner/TestCarousel";
// import Lottie from "react-lottie";
// import animationData from "../LottieJson/animation.json";
import Image from "next/image";


const ArticleCard = dynamic(() => import("../Components/CardUI/ArticleCard"), {
  ssr: true,
});
const UsefullTools = dynamic(() => import("../Components/UsefullTools"), {
  ssr: true,
});
const WriteForUs = dynamic(() => import("../Components/Widget/WriteForUs"), {
  ssr: true,
});
const Search = dynamic(() => import("../Components/Search"), { ssr: true });
const ArticleCardWithoutImg = dynamic(
  () => import("../Components/CardUI/ArticleCardWithoutImg"),
  { ssr: true }
);
const AskQuestionForum = dynamic(
  () => import("../Components/AskQuestionForum"),
  { ssr: true }
);
const HrProfessionalProfile = dynamic(
  () => import("../Components/CardUI/HrProfessionalProfile"),
  { ssr: true }
);
const SubscribeNews = dynamic(() => import("../Components/SubscribeNews"), {
  ssr: true,
});
const SuccessModal = dynamic(() => import("../Components/Modal/SuccessModal"), {
  ssr: true,
});
const PositionCard = dynamic(
  () => import("../Components/CardUI/PositionCard"),
  { ssr: true }
);
const WebStories = dynamic(() => import("../Components/CardUI/WebStories"), {
  ssr: true,
});
const EducationSection = dynamic(
  () => import("../Components/EducationSection"),
  { ssr: true }
);
const ArticleWithoutImgCollection = dynamic(
  () => import("../Components/CardCollection/ArticleWithoutImgCollection"),
  { ssr: true }
);
const TimesPolls = dynamic(() => import("../Components/TimesPolls"), {
  ssr: true,
});
const Footer = dynamic(() => import("../Components/Footer"), { ssr: true });
const InterviewCard = dynamic(() => import("../Components/InterviewCard"), {
  ssr: true,
});
const PrimayWidgetNew = dynamic(
  () => import("../Components/Widget/PrimayWidgetNew"),
  { ssr: true }
);

const widgetThree = {
  name: "FREE Mentorship Advise",
  description: "Free mentorship advice from top mentors",
  src: "/mentorIcon/Mentor.webp",
  btnText: "Connect With Mentors",
  href: "/mentorship/mentorkart",
};
const widgetFour = {
  name: "Online mock interview",
  description: "Virtual face to face mock interviews with industry experts",
  src: "/mentorIcon/InterviewBuddy.webp",
  btnText: "Start Mock Interview",
  href: "/interview-buddy",
};

const widgetOne = {
  name: "Get a Free confidential review from a resume expert",
  description: "Upload your resume and get expert resume analysis",
  src: "/mentorIcon/TopResume.webp",
  btnText: "Upload Resume",
  href: "/top-resume",
};

const widgetTwo = {
  name: "Take up the psychometric test",
  description:
    "Design to measure cognitive abilities and potential to excel in specific position or career",
  src: "/mentorIcon/9Links.webp",
  btnText: "Psychometric Test",
  href: "/psychometrictest/9links",
};
const widgetFive = {
  name: "Career Guidance & Counselling",
  description:
    "Improves your career management skills to help you take the right decisions at every major stage/situation in your future",

  src: "/mentorIcon/SetmyCareer.webp",
  btnText: "Take Expert Advise Today",
  href: "/psychometrictest/setmycareer",
};
const widgetSix = {
  name: "Online Courses for Executives",
  description:
    "Variety of programs for working professionals in digital marketing, product management, AI, Data Science, & more",

  src: "/mentorIcon/Upgrad.webp",
  btnText: "Explore The Course Catalogue",
  href: "/courses",
};

const freelancerWidgetData = {
  heading: "Hire Remote Freelancers",
  description: "Get a network of certified and experienced freelancers",
  buttonText: "Post a requirement",
};

let opinion = [
  {
    "id": "270",
    "question": "Are you planning to switch your job in 2023?",
    "status": "0",
    "isCurrent": "1",
    "option1": "Yes",
    "option2": "No",
    "option3": "Maybe",
    "option4": "",
    "option5": "",
    "option1Count": "3708",
    "option2Count": "200",
    "option3Count": "354",
    "option4Count": "0",
    "option5Count": "0",
    "createdBy": "System",
    "updatedBy": "System",
    "createdDate": "2022-01-27T13:37:27",
    "updatedDate": ""
  },
  {
    "id": "269",
    "question": "Would you work for a startup or an established large enterprise?",
    "status": "0",
    "isCurrent": "1",
    "option1": "Startup",
    "option2": "Enterprise",
    "option3": "",
    "option4": "",
    "option5": "",
    "option1Count": "1371",
    "option2Count": "1311",
    "option3Count": "0",
    "option4Count": "0",
    "option5Count": "0",
    "createdBy": "System",
    "updatedBy": "system",
    "createdDate": "2022-01-27T12:23:57",
    "updatedDate": ""
  },
  {
    "id": "268",
    "question": "Are you satisfied with your job and profile?",
    "status": "0",
    "isCurrent": "1",
    "option1": "Yes",
    "option2": "No",
    "option3": "Maybe",
    "option4": "",
    "option5": "",
    "option1Count": "1431",
    "option2Count": "639",
    "option3Count": "351",
    "option4Count": "0",
    "option5Count": "0",
    "createdBy": "System",
    "updatedBy": "system",
    "createdDate": "2022-01-27T12:22:01",
    "updatedDate": ""
  },
  {
    "id": "262",
    "question": "Do HR managers make first impressions easily? ",
    "status": "2",
    "isCurrent": "1",
    "option1": "Yes",
    "option2": "No",
    "option3": "Maybe",
    "option4": "",
    "option5": "",
    "option1Count": "4777",
    "option2Count": "1212",
    "option3Count": "1058",
    "option4Count": "0",
    "option5Count": "0",
    "createdBy": "editor@itsmyascent.com",
    "updatedBy": "editor@itsmyascent.com",
    "createdDate": "2015-05-12T14:26:56",
    "updatedDate": "2015-05-12T14:26:56"
  },
  {
    "id": "261",
    "question": "Are we lured easily with a foreign academic degree?",
    "status": "1",
    "isCurrent": "1",
    "option1": "Yes",
    "option2": "No",
    "option3": "Maybe",
    "option4": "",
    "option5": "",
    "option1Count": "2399",
    "option2Count": "2237",
    "option3Count": "950",
    "option4Count": "0",
    "option5Count": "25",
    "createdBy": "editor@itsmyascent.com",
    "updatedBy": "editor@itsmyascent.com",
    "createdDate": "2015-05-12T14:26:26",
    "updatedDate": "2015-05-12T14:26:26"
  }
]


// const defaultOptions = {
//   autoplay: true,
//   loop: true,
//   animationData: animationData
// };

const Home = ({ props }) => {
  if (props.isPageError) {
    return <FourZeroFour />;
  }

  const [subcribeEmailLoading, setSubcribeEmailLoading] = useState(false);
  const [showModalSubcribeEmail, setShowModalSubcribeEmail] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModals, setShowModals] = useState(false);
  const [adShow, setadShow] = useState(false);
  const [isMobile, setIsMobile] = useState(false);




  const [activeborder, setActiveborder] = useState();
  const [yes, setYes] = useState(false);
  const [No, setNo] = useState(false);
  const [maybe, setMaybe] = useState(false);
  const [isdata, setIsdata] = useState(opinion);
  const [loading, setLoading] = useState();
  const [errors, setErrors] = useState(false);
  const [showQuestion, setShowQuestion] = useState(0);
  const [showAnswer, setShowAnswer] = useState(0);

  const topCompany = props.topcompany;
  const featureArticle = props.TimesHomeScreenData?.data;
  const recommendedRead = props.careerscreen?.recommended_Articles;
  const careerDevelopment = props.careerscreen?.career_article;
  const voiceOfHr = props.careerscreen?.HR_articles;
  const hrprofessionals = props.gethrprofessionallist;
  const interviewTips = props.careerscreen?.interview_articles;
  const faq = props.GetForumQuestionAnswerList?.Questions;
  const getWebStoriesSummary = props.GetWebStoriesSummary;
  const withoutImageArticle = props.getarticlewithoutimagearticle;
  const router = useRouter();

  const closeModalHandler = () => {
    setShowModalSubcribeEmail(false);
  };

  const closesuccessModal = (modalType) => {
    setShowModals(false);
  };

  const SimilarJobEvent = () => {
    let pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    topCompany?.map((item) => {
      gtag.event({
        action: item.name,
        category: "Company Impressions",
        label: router.asPath,
      });
    });
    gtag.pageSpeedEvent({
      action: "Home Page Speed", pageTitle: "Home page", load_time: pageLoadTime
    });

  };
  const ArticleEvent = () => {
    {
      recommendedRead.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
    {
      featureArticle.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
    {
      withoutImageArticle.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }

    {
      interviewTips.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
    {
      voiceOfHr.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
    {
      careerDevelopment.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
  };

  useEffect(() => {

    let isMobile = Boolean(
      navigator.userAgent.match(
        /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
      )
    );
    setIsMobile(isMobile);
    const timeoutAd = setTimeout(() => {
      setadShow(true);
    }, 4000);

    SimilarJobEvent();
    ArticleEvent();
    return () => clearTimeout(timeoutAd)
  }, [
    topCompany,
    recommendedRead,
    featureArticle,
    interviewTips,
    voiceOfHr,
    careerDevelopment,
  ]);

  // useEffect(() => {
  //   pageLoadTime();
  // }, [])

  const pageLoadTime = () => {
    let pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    gtag.pageSpeedEvent({
      action: "Page Load Time", pageTitle: "Home page", load_time: pageLoadTime
    });
  }
  const emailFormHandler = (email) => {
    setSubcribeEmailLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Email: email,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/Subcription`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          setShowModalSubcribeEmail(true);
        }
      })

      .catch((error) => console.log("error", error))
      .finally(() => {
        setSubcribeEmailLoading(false);
      });
  };

  const onSuccessForm = () => {
    setShowModal(false);
    const timemm = setTimeout(() => {
      setShowModals(true);
    }, 400);
    return () => clearTimeout(timemm)
  };

  const youtubeUrl = {
    url: "https://www.youtube.com/embed/hQb7VsPrPn0?autoplay=1&mute=1",
    image: "/homeBanner/youtubeHome.webp",
  };


  const Updatepolls = () => {
    if (yes === false && No === false && maybe === false) {
      setErrors("Please select one field");
      return;
    } else {
      setErrors("");
    }
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Id: isdata[showQuestion].id,
      Option1: yes ? yes : "",
      Option2: No ? No : "",
      Option3: maybe ? maybe : "",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/UpdatePollCount`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          // setData(result.data);
          setShowQuestion(showQuestion + 1);
          setShowAnswer(showAnswer + 1);
          setYes(false);
          setNo(false);
          setMaybe(false);
          setActiveborder("");
        }
      })
      .catch((error) => console.log("error", error));
  };


  useEffect(() => {
    let pollsQuestionIndex = JSON.parse(
      sessionStorage.getItem("pollsQuestionIndex")
    );
    if (pollsQuestionIndex) {
      setShowQuestion(pollsQuestionIndex);
      setShowAnswer(pollsQuestionIndex);
    }
  }, []);
  useEffect(() => {
    if (showQuestion) {
      sessionStorage.setItem("pollsQuestionIndex", showQuestion);
    }
  }, [showQuestion]);



  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>
          Ascent Jobs, Vacancies, Recruitment, Employment - timesascent.com
        </title>
        <meta
          name="description"
          content="Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
        />
        <link rel="canonical" href="https://timesascent.com/" />
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
          content="Ascent Jobs, Vacancies, Recruitment, Employment - timesascent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
        />
        <meta property="og:url" content="https://timesascent.com/" />
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
          content="Ascent Jobs, Vacancies, Recruitment, Employment - timesascent.com"
        />
        <meta
          property="twitter:description"
          content="Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
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
                },
              ],
            }),
          }}
        />
      </Head>

      <>
        {/* modal start */}
        <SuccessModal
          openModal={showModalSubcribeEmail}
          closeModal={() => closeModalHandler()}
          headingText="Thank-You !!"
          subHeadingText=" You will be updated with latest newsletters, articles,
                        courses and events on your Email."
          buttonText="OK"
        />

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
        {/* modal end */}
      </>

      <MainHeader cookies={props.cookies} />

      <section className="md:flex justify-between box-border w-full sm:container mx-auto sm:pt-4 md:pt-6 lg:pt-8 ">
        <div className="left-side w-full  md:w-[calc(100%-320px)]">
          <div className=" ">

            {/* <div
              className=" relative "
              data-carousel-item
            >
              <Image
                priority
                src='/homeBanner/9Links.webp'
                style={{ "borderRadius": "10px" }}
                width={1600}
                height={400}
                alt={"Banner"}
                quality={25}

              />
              <div className="absolute top-0 left-[40%] 	">
                <Lottie
                  height={200}
                  // eventListeners={this.eventListeners}
                  options={defaultOptions}
                /></div>

            </div> */}
            <HomeCarousel
              isMobile={isMobile}
              isRounded={true}
              pageName="home"
              data={props.HomePageBannerData}
            />


            {/* <TestCarousel
              isMobile={isMobile}
              items={props.HomePageBannerData.data}
            /> */}
          </div>
          <div className="block w-full sm:hidden mt-6 sm:mt-0 box-border px-[4%]  sm:px-0">
            <FeatureOrganizaionNew data={topCompany} />
          </div>

          {recommendedRead && (
            <div className="mt-6 px-[4%] sm:px-0">
              <HeadingWithIconH1
                headingText="Recommended Read"
                href="/articleslist/recommended-read"
              />
              <ArticleNew data={recommendedRead.slice(0, 7)} priority={true} />
              <div className="flex justify-end mt-1">
                <a
                  href="/articleslist/recommended-read"
                  className="text-sm hover:underline text-timesPurple"
                >
                  More Relevant Articles &rarr;
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="mt-6 md:mt-0 right-side  px-[4%] md:ml-[20px] sm:px-0 ">
          <div className="hidden sm:block">
            <FeatureOrganizaionNew data={topCompany} />
          </div>

          <div className="mt-6">
            {adShow ? (
              <GoogleAd_300x250
                path="/1064661/ta.com_mrec1_home"
                ads_Id="div-gpt-ad-1674541338202-0"
                size={[[300, 250]]}
              />
            ) : (
              <SkeletonMrec />
            )}
          </div>
        </div>
      </section>

      <main className=" pb-4 md:pb-6 lg:pb-8 container mx-auto">
        <section className="mt-6 md:flex border-t-2  border-dashed justify-between box-border w-full ">
          <div className="pt-8 pb-6  w-full  sm:w-[calc(100%-320px)]">
            <div className="flex flex-col-reverse sm:flex-row  sm:justify-between">
              <div className="mt-6 sm:mt-0">
                {adShow ? (
                  <GoogleAd_300x250
                    path="/1064661/ta.com_mrec2_home"
                    ads_Id="div-gpt-ad-1674543159236-0"
                    size={[[300, 250]]}
                  />
                ) : (
                  <SkeletonMrec />
                )}
              </div>

              <div className="md:w-[calc(100%-320px)]">
                <Search />
              </div>
            </div>
          </div>
          <div className="  md:ml-[20px] md:w-[300px]">
            <div className="mt-8">
              <WriteForUs
                heading={"Write for Us"}
                description={
                  "Share your knowledge and experience for the benefits of Job providers and seekers "
                }
                buttonText="Publish your Article"
                href="/GuestArticleform"
              />
            </div>
          </div>
        </section>

        <section className="mt-6 md:flex border-t-2  border-dashed justify-between box-border w-full ">
          <div className=" pb-6  w-full flex justify-center  sm:w-[calc(100%-320px)]">
            <div className="mt-6">
              <HeadingWithIcon
                headingText="Featured Articles"
                href="/articleslist/featured-articles"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {featureArticle.slice(0, 4).map((item) => (
                  <ArticleCard key={item.ArticleId} data={item} />
                ))}
              </div>
              <div className="flex justify-end mt-2">
                <a
                  href="/articleslist/featured-articles"
                  className="text-sm hover:underline text-timesPurple"
                >
                  View More Articles &rarr;
                </a>
              </div>
            </div>
          </div>
          <div className="border-t-2 border-dashed w-full sm:border-0 right-side md:ml-[20px] md:w-[300px]">
            <div className="mt-6 md:mt-16 rounded">
              <HomeYoutube isMobile={isMobile} height={300} {...youtubeUrl} />
            </div>
          </div>
        </section>

        <section className="mt-6  py-6  border-y-2  border-dashed">
          <div className=" sm:flex w-full items-center  justify-between ">
            {adShow ? (
              <GoogleAd_300x250
                path="/1064661/ta.com_mrec3_home"
                ads_Id="div-gpt-ad-1674543668052-0"
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
            <div className="mt-6 sm:mt-0">
              {adShow ? (
                <GoogleAd_300x250
                  path="/1064661/ta.com_mrec4_home"
                  ads_Id="div-gpt-ad-1674544552466-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
            </div>
          </div>
        </section>

        <>
          <section className="mt-6 md:flex justify-between box-border w-full">
            {careerDevelopment && (
              <div className="pt-4 left-side w-full  md:w-[calc(100%-320px)]">
                <HeadingWithIcon
                  headingText="Career Development"
                  href="/articleslist/career-development"
                />
                <ArticleNew data={careerDevelopment.slice(0, 7)} priority={false} />
                <div className="flex justify-end mt-1">
                  <a
                    href="/articleslist/career-development"
                    className="text-sm hover:underline text-timesPurple"
                  >
                    Accelerate Your Career &rarr;
                  </a>
                </div>
              </div>
            )}

            <div className="mt-6 md:mt-0  md:ml-[20px] md:w-[300px]">
              <PositionCard
                headingText="Popular Position"
                data={props.getrightcarddata.popularPosition.slice(0, 6)}
              />
            </div>
          </section>

          <section className="mt-6 pt-4 border-t-2  border-dashed">
            <HeadingWithIcon
              headingText="Voice of HR"
              href="/articleslist/voice-of-hr"
            />
            <ul
              role="list"
              className=" divide-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 "
            >
              {voiceOfHr.slice(0, 5).map((item, index) => {
                return <ArticleCardWithoutImg key={index} data={item} />;
              })}
            </ul>
          </section>

          <section className="mt-8 pt-8 border-t-2  border-dashed sm:flex w-full items-center  justify-between ">
            {adShow ? (
              <GoogleAd_300x250
                path="/1064661/ta.com_mrec5_home"
                ads_Id="div-gpt-ad-1674551209965-0"
                size={[[300, 250]]}
              />
            ) : (
              <SkeletonMrec />
            )}

            <div className="mt-6 sm:mt-0 sm:w-[calc(100%-640px)] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mx-4">
              <div className="h-[250px]  ">
                <PrimayWidgetNew {...widgetThree} />
              </div>
              <div className="h-[250px] ">
                <PrimayWidgetNew {...widgetFour} />
              </div>
            </div>
            <div className="mt-6 sm:mt-0 ">
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
          </section>

          <section className="mt-6 md:flex justify-between items-center box-border w-full">
            <div className="left-side w-full  md:w-[calc(100%-320px)]">
              <HeadingWithIcon
                headingText="Industry's Leading HR Professionals"
                href="/hrprofessionals"
              />
              {/* className=" space-y-12 sm:grid sm:grid-cols-2 lg:grid-cols-3  sm:gap-12 sm:space-y-0 lg:gap-x-6" */}

              <div
                role="list"
                className=" grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3"
              >
                {hrprofessionals?.slice(0, 9).map((item) => {
                  return (
                    <HrProfessionalProfile key={item.KeyIndex} data={item} />
                  );
                })}
              </div>
            </div>
            <div className="mt-6 md:mt-0 right-side md:ml-[20px] md:w-[300px]">
              <div className="">
                <TimesPolls
                  Updatepolls={Updatepolls}
                  loading={loading}
                  isdata={isdata}
                  showQuestion={showQuestion}
                  setYes={setYes}
                  setNo={setNo}
                  setMaybe={setMaybe}
                  setActiveborder={setActiveborder}
                  activeborder={activeborder}
                  showAnswer={showAnswer}
                  errors={errors}
                />
              </div>
            </div>
          </section>

          <section className="mt-6 pt-4 border-t-2  border-dashed md:flex justify-between box-border w-full">
            <div className="left-side w-full  md:w-[calc(100%-320px)]">
              <HeadingWithIcon
                headingText="Interview tips"
                href="/articleslist/interview-tips"
              />
              <InterviewCard data={interviewTips.slice(0, 6)} />
            </div>
            <div className="mt-6 pt-4 sm:pt-0 border-t-2  border-dashed sm:border-0  md:mt-0 right-side md:ml-[20px] md:w-[300px]">
              <div className="sm:border border-gray-50 rounded">
                <ArticleWithoutImgCollection
                  truncate={3}
                  data={withoutImageArticle.slice(0, 3)}
                  href={"/articleslist/Recommended-Read"}
                />
              </div>
            </div>
          </section>

          <section className="mt-6 sm:flex w-full items-center  justify-between ">
            {adShow ? (
              <GoogleAd_300x250
                path="/1064661/ta.com_mrec7_home"
                ads_Id="div-gpt-ad-1674551466303-0"
                size={[[300, 250]]}
              />
            ) : (
              <SkeletonMrec />
            )}
            <div className="mt-6 sm:mt-0 sm:w-[calc(100%-640px)] grid grid-cols-1 sm:grid-cols-2 gap-4 sm:mx-4">
              <div className="h-[250px]  ">
                <PrimayWidgetNew {...widgetFive} />
              </div>
              <div className="h-[250px] ">
                <PrimayWidgetNew {...widgetSix} />
              </div>
            </div>
            <div className="mt-6 sm:mt-0 ">
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

          <section className="mt-6 md:flex justify-between box-border w-full">
            <div className="left-side w-full  md:w-[calc(100%-320px)]">
              <HeadingWithIcon
                headingText="Frequently asked questions"
                href="/forum"
              />
              <AskQuestionForum data={faq.slice(0, 6)} />
            </div>
            <div className="mt-6 md:mt-0 right-side md:ml-[20px] md:w-[300px]">
              <FreelancerWidget {...freelancerWidgetData} />

              <div className="m-auto mt-6 ">
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

          <section className="mt-12 md:flex justify-between box-border w-full">
            <div className="mt-6 md:mt-0  md:mr-[20px] ">
              {adShow ? (
                <GoogleAd_300x250
                  path="/1064661/ta.com_mrec9_home"
                  ads_Id="div-gpt-ad-1674552576647-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
            </div>

            <div className="mt-6 sm:mt-0 w-full  md:w-[calc(100%-640px)]">
              <SubscribeNews
                emailFormHandler={emailFormHandler}
                heading=" Subscribe to our Newsletter!"
                subHeading="  Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque."
                loading={subcribeEmailLoading}
              />
            </div>
            <div className="mt-6 md:mt-0 right-side md:ml-[20px] md:w-[300px]">
              {adShow ? (
                <GoogleAd_300x250
                  path="/1064661/ta.com_mrec10_home"
                  ads_Id="div-gpt-ad-1674552670844-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
            </div>
          </section>

          <section className="mt-6 ">
            <HeadingWithIcon headingText="Web Stories" href="/allwebstories" />
            <div className=" w-full hide-scroll-bar  overflow-x-scroll  sm:overflow-auto  ">
              <ul className="pb-1 flex sm:grid sm:grid-cols-5  w-max sm:w-full overflow-hidden sm:overflow-auto flex-nowrap gap-x-4  ">
                {getWebStoriesSummary.slice(0, 5)?.map((item) => (
                  <WebStories key={item.KeyIndex} data={item} />
                ))}
              </ul>
            </div>
            <div className="flex justify-end mt-1">
              <a
                href="/allwebstories"
                className="text-sm hover:underline text-timesPurple"
              >
                Display More Web Stories &rarr;
              </a>
            </div>
          </section>

          <section className="py-6">
            <EducationSection />
          </section>

          <section className="mt-6 flex flex-col-reverse sm:flex-row justify-between items-center box-border w-full">
            <div className="left-side w-full  md:w-[calc(100%-320px)]">
              <UsefullTools />
            </div>
            <div className="lg:mt-6 mb-6 sm:mb-0  right-side md:ml-[20px] ">
              {adShow ? (
                <GoogleAd_300x250
                  path="/1064661/ta.com_mrec11_home"
                  ads_Id="div-gpt-ad-1674552754946-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
            </div>
          </section>
        </>

        {adShow ? (
          <div className="mt-8">
            <div className=" hidden md:block ">
              <GoogleAd_BHrec
                path="/1064661/ta.com_bhrec1_home"
                ads_Id="div-gpt-ad-1674553926357-0"
                size={[[750, 200]]}
              />
            </div>
            <div className="block md:hidden">
              <GoogleAd_BHrec
                path="/1064661/ta.com_bhrec1_mob_home"
                ads_Id="div-gpt-ad-1674554084126-0"
                size={[[320, 100]]}
              />
            </div>
          </div>
        ) : (
          <div className="mt-8">
            <SkeletonBHrec />
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  let props = {};

  try {
    // const res = await fetch(`${process.env.LIVE_HOST}/json/careerscreen.json`);
    // const careerscreen = await res.json();

    // const forum = await fetch(
    //   `${process.env.LIVE_HOST}/json/GetForumQuestionAnswerList.json`
    // );
    // const GetForumQuestionAnswerList = await forum.json();
    // const gethrprofessional = await fetch(
    //   `${process.env.LIVE_HOST}/json/gethrprofessionallist.json`
    // );
    // const gethrprofessionallist = await gethrprofessional.json();
    // const HomePageBanner = await fetch(
    //   `${process.env.LIVE_HOST}/json/HomePageBannerData.json`
    // );
    // const HomePageBannerData = await HomePageBanner.json();
    // const getarticlewithoutimage = await fetch(
    //   `${process.env.LIVE_HOST}/json/getarticlewithoutimagearticle.json`
    // );
    // const getarticlewithoutimagearticle = await getarticlewithoutimage.json();
    // const getrightcard = await fetch(
    //   `${process.env.LIVE_HOST}/json/getrightcarddata.json`
    // );
    // const getrightcarddata = await getrightcard.json();
    // const topcomp = await fetch(
    //   `${process.env.LIVE_HOST}/json/topcompany.json`
    // );
    // const topcompany = await topcomp.json();
    // const GetWebStories = await fetch(
    //   `${process.env.LIVE_HOST}/json/GetWebStoriesSummary.json`
    // );
    // const GetWebStoriesSummary = await GetWebStories.json();

    // const TimesHomeScreen = await fetch(
    //   `${process.env.LIVE_HOST}/json/TimesHomeScreenData.json`
    // );
    // const TimesHomeScreenData = await TimesHomeScreen.json();
    const homePageMainJsonData = await fetch(`${process.env.LIVE_HOST}/json/new/homePageMainJSON.json`);

    const { careerscreen, GetForumQuestionAnswerList, gethrprofessionallist, BannerImageByPageName: HomePageBannerData, getArticleWithoutImage: getarticlewithoutimagearticle, getRightCardData: getrightcarddata, TopCompany: topcompany, GetWebStoriesSummary, SearchArticles: TimesHomeScreenData } = await homePageMainJsonData.json();

    // const arr = ["careerscreen", 'TimesHomeScreenData', "GetForumQuestionAnswerList", "gethrprofessionallist", "HomePageBannerData", "getarticlewithoutimagearticle", "getrightcarddata", "topcompany", 'GetWebStoriesSummary'
    // ]
    // const result = await Promise.all(arr.map((item) => {
    //   return fetch(`${process.env.LIVE_HOST}/json/${item}.json`).then((res) => res.json())
    // }));
    props = {
      careerscreen,
      TimesHomeScreenData,
      GetForumQuestionAnswerList,
      gethrprofessionallist,
      HomePageBannerData,
      getarticlewithoutimagearticle,
      getrightcarddata,
      topcompany,
      GetWebStoriesSummary,
    };
  } catch (error) {
    props = {
      isPageError: true,
    };
  }

  return { props: { props }, revalidate: 600 };
}

export default Home;
