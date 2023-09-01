import { HrProfessionalResponse } from "../../pages/api/HrProfessionalApi";
import { SearchArticlesResponse } from "../../pages/api/articleApi";
import { ShareIcon, AcademicCapIcon } from "@heroicons/react/20/solid";
import MainHeader from "../../Components/MainHeader";
import Footer from "../../Components/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HeadingWithIcon from "../../Components/HeadingUI/HeadingWithIcon";
import Image from "next/image";
import PrimayWidgetNew from "../../Components/Widget/PrimayWidgetNew";
import SecondryWidget from "../../Components/Widget/SecondryWidget";
import SubscribeNews from "../../Components/SubscribeNews";
import SuccessModal from "../../Components/Modal/SuccessModal";
import ArticleCard from "../../Components/CardUI/ArticleCard";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
import GoogleAd_728x90 from "../../Components/GoogleAds/GoogleAd_728x90";
import Head from "next/head";
import SkeletonMrec from "../../Components/Skeleton/SkeletonMrec";
import SkeletonHrec from "../../Components/Skeleton/SkeletonHrec";
import BreadCrumbs from "../../Components/BreadCrumbs";
const Tabs = [
  { name: "Work", current: true },
  { name: "Expertise", current: false },
  { name: "Awards", current: false },
  { name: "About", current: false },
  { name: "Media", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const HrProfile = ({ props }) => {
  const [tabs, setTabs] = useState(Tabs);
  const [hrProfileData, setHrProfileData] = useState({});
  const [subcribeEmailLoading, setSubcribeEmailLoading] = useState(false);
  const [showModalSubcribeEmail, setShowModalSubcribeEmail] = useState(false);
  const [adShow, setadShow] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);

    if (
      props.HrProfessionalData.data.some((item) => {
        return item.Hrid === router.query.id;
      })
    ) {
      let data = props.HrProfessionalData.data.filter((item) => {
        return item.Hrid === router.query.id;
      });
      setHrProfileData(...data);
    } else {
      setHrProfileData({});
    }
    return () => clearTimeout(timeout);
  }, [router.query.id]);

  const onClickTabHandler = (tabName) => {
    const upd_obj = tabs.map((obj) => {
      if (obj.name == tabName) {
        return { ...obj, current: true };
      }
      return { ...obj, current: false };
    });
    setTabs(upd_obj);
  };

  const currentTabData = (tabName) => {
    if (tabName.name === "Work") {
      return (
        <div
          className="text-sm font-medium grid grid-cols-1 lg:grid-cols-4 gap-4  [&>p]:mb-6 "
          dangerouslySetInnerHTML={{
            __html: hrProfileData?.workHistory
              ? hrProfileData?.workHistory
              : "work experience not found",
          }}
        />
      );
    } else if (tabName.name === "About") {
      return (
        <div
          className="mt-1 max-w-7xl space-y-5 text-sm "
          dangerouslySetInnerHTML={{
            __html: hrProfileData?.shortDescription
              ? hrProfileData?.shortDescription
              : "No description found",
          }}
        />
      );
    } else if (tabName.name === "Expertise") {
      return (
        <div
          className="mt-1 max-w-7xl space-y-5 text-sm  "
          dangerouslySetInnerHTML={{
            __html: hrProfileData?.areaOfExpertise
              ? hrProfileData?.areaOfExpertise
              : "No experties found",
          }}
        />
      );
    } else if (tabName.name === "Awards") {
      return (
        <div
          className="mt-1 max-w-7xl space-y-5 text-sm  "
          dangerouslySetInnerHTML={{
            __html: hrProfileData?.awardsAchievements
              ? hrProfileData?.awardsAchievements
              : "No awards found",
          }}
        />
      );
    } else if (tabName.name === "Media") {
      return (
        <div
          className={`mt-1 max-w-7xl space-y-5 text-sm ${classNames(
            hrProfileData?.featuredMedia && "!text-purple-600 "
          )}  `}
          dangerouslySetInnerHTML={{
            __html: hrProfileData?.featuredMedia
              ? hrProfileData?.featuredMedia
              : " No media found",
          }}
        />
      );
    }
  };

  const closeModalHandler = () => {
    setShowModalSubcribeEmail(false);
  };

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

  const widgetOne = {
    name: "Career Guidance & Counselling",
    description:
      "Improves your career management skills to help you take the right decisions at every major stage/situation in your future",
    icon: AcademicCapIcon,
    src: "/mentorIcon/SetmyCareer.webp",
    btnText: "Take Expert Advise Today",
    href: "/psychometrictest/setmycareer",
  };

  const widgetTwo = {
    name: "Online Courses for Executives",
    description:
      "Variety of programs for working professionals in digital marketing, product management, AI, Data Science, & more",
    icon: AcademicCapIcon,
    src: "/mentorIcon/Upgrad.webp",
    btnText: "Explore The Course Catalogue",
    href: "/courses",
  };

  const pages = [
    { name: "HR Professionals", href: "/hrprofessionals", current: false },
    { name: hrProfileData?.fullName, href: "#", current: false },
  ];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Learn from Human Resource management professionals - timesascent.com`}</title>
        <meta
          name="description"
          content={`Learn and get advice from top Human Resource management professionals from India - timesascent.com`}
        />
        <link
          rel="canonical"
          href={`https://timesascent.com/hrprofessional-profile/${router.query.id}`}
        />
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
          content="Learn from Human Resource management professionals - timesascent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Learn and get advice from top Human Resource management professionals from India - timesascent.com"
        />
        <meta
          property="og:url"
          content={`https://timesascent.com/hrprofessional-profile/${router.query.id}`}
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
          content="Learn from Human Resource management professionals - timesascent.com"
        />
        <meta
          property="twitter:description"
          content="Learn and get advice from top Human Resource management professionals from India - timesascent.com"
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
                  name: "HR Professionals",
                  item: "https://timesascent.com/hrprofessionals",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "HR Professionals Profile",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: hrProfileData?.fullName,
              url: `https://timesascent.com${router.asPath}`,
              email: hrProfileData?.email,
              image: hrProfileData?.profilePicture,
              worksFor: hrProfileData?.currentCompany,
              jobTitle: hrProfileData?.designation,
              knows: hrProfileData?.workHistory,
              knowsAbout: hrProfileData?.areaOfExpertise,
              description: hrProfileData?.shortDescription,
              award: hrProfileData?.awardsAchievements,
              workLocation: hrProfileData?.location,
              telephone: hrProfileData?.mobile,
              sameAs: [
                `https://timesascent.com${router.asPath}`,
                hrProfileData?.connectToTwitter,
                hrProfileData?.connectToLinkdin,
              ],
            }),
          }}
        />
      </Head>
      {/* modal start */}
      <SuccessModal
        openModal={showModalSubcribeEmail}
        closeModal={() => closeModalHandler()}
      />
      {/* modal end */}

      {/* navbar */}
      <MainHeader />

      <main className="relative z-0 flex-1 overflow-y-auto focus:outline-none xl:order-last">
        <div className="container">
          <div className="absolute text-white mx-auto  text-center  py-3">
            <BreadCrumbs data={pages} />
          </div></div>
        <article>
          <div>
            <div className="h-28 sm:h-40  w-full   relative -z-10">
              <Image
                src="/Banners/HR_Profile_Banner.webp"
                style={{ objectFit: "cover" }}
                fill
                alt="hr professional"
              />
            </div>
            <div className="mx-auto container">
              <div className="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div className=" relative h-28 w-28 sm:h-48 sm:w-48 [&>img]:rounded-full [&>img]:ring-4 [&>img]:ring-white ">
                  <Image
                    src={
                      hrProfileData?.profilePicture ||
                      "https://timesascent.com/images/cms/articles/2021/8/13/article_default_large_1628861200583.png"
                    }
                    style={{ objectFit: "cover" }}
                    priority
                    fill
                    alt="hr professional"
                  />
                </div>
                <div className=" sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                  <div className=" min-w-0 flex-1 2xl:block">
                    <h1 className="truncate text-xl font-bold text-gray-900">
                      {hrProfileData?.fullName}
                    </h1>
                    <h4 className="truncate text-lg font-semibold text-gray-700">
                      {hrProfileData?.currentCompany}
                    </h4>
                    <h4 className="truncate text-md font-semibold text-gray-700">
                      {hrProfileData?.totalExperience}
                    </h4>
                  </div>
                  {/* <div className="justify-stretch mt-6 sm:mt-0 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
                    >
                      <ShareIcon
                        className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span>Share</span>
                    </button>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-6 sm:mt-2 2xl:mt-5">
            <div className="border-b border-gray-200">
              <div className="mx-auto container">
                <nav
                  className="-mb-px flex space-x-4 sm:space-x-8"
                  aria-label="Tabs"
                >
                  {tabs.map((tab, index) => (
                    <div
                      key={index}
                      onClick={() => onClickTabHandler(tab.name)}
                      className={classNames(
                        tab.current
                          ? "border-timesRed text-gray-900"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                        "whitespace-nowrap cursor-pointer py-4 px-1 border-b-2 font-medium text-sm"
                      )}
                      aria-current={tab.current ? "page" : undefined}
                    >
                      {tab.name}
                    </div>
                  ))}
                </nav>
              </div>
            </div>
          </div>

          {/* Description list */}
          <div className="mx-auto mt-6 container">
            {currentTabData(
              tabs.find((item) => {
                if (item.current) {
                  return item;
                }
              })
            )}
          </div>

          {/* Team member list */}

          <section className="mt-10  container md:flex justify-between  box-border w-full">
            <div className="left-side w-full  md:w-[calc(100%-320px)]">
              <HeadingWithIcon headingText="Leading HR Professionals" />
              <div className="mt-1 grid grid-cols-1 gap-4  lg:grid-cols-3 2xl:grid-cols-4">
                {props.HrProfessionalData.data.map((person) => (
                  <div
                    key={person.KeyIndex}
                    className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white p-2 shadow-sm focus-within:ring-2 focus-within:ring-timesPurple focus-within:ring-offset-2 hover:border-timesPurple"
                  >
                    <div className="flex-shrink-0 relative h-20 w-20 [&>img]:rounded-full">
                      <Image
                        src={person.profilePicture}
                        priority
                        style={{ objectFit: "cover" }}
                        fill
                        alt="hr professional"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <a
                        href={`/hrprofessional-profile/${person.Hrid}`}
                        className="focus:outline-none cursor-pointer"
                      >
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="text-sm font-medium text-gray-900">
                          {person.fullName}
                        </p>
                        <p className="truncate text-sm text-gray-500">
                          {person.currentCompany}
                        </p>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 sm:mt-10 right-side md:ml-[20px] md:w-[300px]">
              {adShow ? (
                <GoogleAd_300x250
                  path="/1064661/ta.com_mrec1_HRProfessional"
                  ads_Id="div-gpt-ad-1674559164415-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
              <div className="mt-6">
                <PrimayWidgetNew {...widgetOne} />
              </div>
              <div className="mt-6">
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
              <div className="mt-6">
                <SecondryWidget
                  iconUrl={`${process.env.Live_API_URL}/recruiterpostjob/staticGrowth.svg/2022/08/18/1660816388.svg`}
                  text2="Work Remotely "
                  text3="Find Remote, Hybrid, Onsite, Flexible Freelance Work"
                  buttonText="Become a Freelancer"
                  href="/freelancer"
                />
              </div>
              <div className="mt-6">
                <PrimayWidgetNew {...widgetTwo} />
              </div>
            </div>
          </section>

          <section className="mt-6 md:flex justify-between box-border w-full container ">
            <div className="mt-6 md:mt-0  md:mr-[20px] md:w-[300px]">
              {adShow ? (
                <GoogleAd_300x250
                  path="/22637491760/timesascent.com_erelego_d_cp_300x250"
                  ads_Id="div-gpt-ad-1674643917536-0"
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
                  path="/22637491760/timesascent.com_erelego_d_ap_300x250"
                  ads_Id="div-gpt-ad-1674643828785-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
            </div>
          </section>

          <section className="mt-6  w-full container ">
            <HeadingWithIcon headingText="The best Human Resource read" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {props.searchHrData.data.slice(0, 10)?.map((item) => (
                <ArticleCard key={item.ArticleId} data={item} />
              ))}
            </div>
            <div className="mt-4 px-4 shadow-lg rounded-md py-4">
              <div className="font-medium text-gray-900 mt-4">Disclaimer</div>
              <p className="text-gray-900 text-sm mt-2">BCCL disclaims any and all representation or warranties of any kind - expressed or implied - about the completeness, accuracy, reliability,  or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Views expressed herein are independent opinions. You may act at your own risk while relying on the information available on the website. Should you decide to act, or omit to act, you should seek appropriate professional advice.</p>
            </div>
          </section>

          <div className="mt-6 ">
            {adShow ? (
              <GoogleAd_728x90
                isMobile={props.isMobile}
                path="/22637491760/timesascent.com_erelego_cp_d_728x90"
                ads_Id="div-gpt-ad-1674644273822-0"
              />
            ) : (
              <SkeletonHrec />
            )}
          </div>

        </article>

      </main>
      {/* Footer */}
      <div className="mt-6">
        <Footer />
      </div>
    </>
  );
};
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
  const allData = await Promise.all([
    HrProfessionalResponse(),
    SearchArticlesResponse({
      SearchCategory: "HR ZONE",
      page: "1",
    }),
  ]);
  const props = {
    HrProfessionalData: allData[0],
    searchHrData: allData[1],
    isMobile: isMobile,
  };
  return { props: { props } };
}
export default HrProfile;
