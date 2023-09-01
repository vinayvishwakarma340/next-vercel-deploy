import Footer from "../../Components/Footer";
import MainHeader from "../../Components/MainHeader";
import { useEffect, useState } from "react";
import FourZeroFour from "../../Components/FourZeroFour";
import Image from "next/image";
import BreadCrumbs from "../../Components/BreadCrumbs";
import HeadingWithIcon from "../../Components/HeadingUI/HeadingWithIcon";
import ManagersCard from "../../Components/CardUI/ManagersCard";
import copy from "copy-to-clipboard";
// import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { DocumentDuplicateIcon } from "@heroicons/react/24/outline";
import { GetManagerDetailById } from "../api/gmiApi";
import Head from "next/head";
import GlobalShare from "../../Components/GlobalShare";
// import Script from "next/script";


const managerDetail = ({ props }) => {
  if (props.isPageError) {
    return <FourZeroFour />;
  }

  const pages = [
    {
      name: "Great Manager Institute",
      href: "/great-manager-institute",
      current: false,
    },
    {
      name: "Top 100 Managers",
      href: "/great-manager-institute/top-100-great-people-managers-of-2023",
      current: false,
    },
    {
      name: `${props?.managerDetailById.Data.ManagerName}`,
      current: true,
    },
  ];
  const managerDetailById = props?.managerDetailById.Data;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [successMessage, setSuccessMessage] = useState(false);
  const [userLiked, setUserLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(managerDetailById.Likes);
  const [deviceType, setDeviceType] = useState("");
  const router = useRouter();

  useEffect(() => {
    CheckSourceDevice();
  }, []);

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % (props.managerDetailById.OtherManager.length - 4));
  };

  // Function to handle previous button click
  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
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


  // const likeManagerFunc = (managerId) => {
  //   if (Cookies.get("userLoggedIn")) {
  //     // setRedirectionUrl1(redirectionURL);
  //     // setCompanyName1(companyName);
  //     // if (companyName === "setMyCareer") {
  //     //   setShowRedirectionModal(true);
  //     //   return;
  //     // }
  //     // setShowRedirectionModal(true);
  //     likeManagerById(managerId);
  //   } else {
  //     router.push("/times-ascent-signin");
  //     // setCompanyName1(companyName);
  //   }
  // }

  const likeManagerById = (managerId) => {
    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.API_TOKEN_AUTH_SERVER);

    var formdata = new FormData();
    formdata.append("ManagerUUID", managerId);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };

    fetch(`${process.env.Live_API_URL}/v1/admin1_1/GeneralManagerLikes`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.status === "Success" && result.status_code == 200) {
          setLikesCount(+(likesCount) + 1);
          setUserLiked(!userLiked);
        }
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div className="bg-zinc-100">
      <Head>
        <meta charSet="utf-8" />
        <title>{`${managerDetailById?.MetaTitle}`}</title>
        <meta
          name="description"
          content={`${managerDetailById?.MetaDescription}`}
        />
        <link rel="canonical" href={`https://timesascent.com/${managerDetailById?.ManagerSeoURL}`} />
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
          content={`${managerDetailById?.MetaTitle}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`${managerDetailById?.MetaDescription}`}
        />
        <meta property="og:url" content={`https://timesascent.com/${managerDetailById?.ManagerSeoURL}`} />
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
          content={`${managerDetailById?.MetaTitle}`}
        />
        <meta
          property="twitter:description"
          content={`${managerDetailById?.MetaDescription}`}
        />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:site"
          content="https://twitter.com/@timesascent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
        {/* <script
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
                  position: 3,
                  name: "For Her",
                },
              ],
            }),
          }}
        /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: managerDetailById.ManagerName,
              url: `https://timesascent.com${router.asPath}`,
              email: "test@gmail.com",
              image: managerDetailById.ManagerImage,
              worksFor: managerDetailById.CompanyName,
              jobTitle: managerDetailById.Designation,
              knows: "knows",
              knowsAbout: managerDetailById.CompanyName,
              description: managerDetailById.ManagerDescription,
              award: managerDetailById.ManagerDescription,
              workLocation: managerDetailById.CompanyName,
              telephone: "telephone",
              sameAs: [
                `https://timesascent.com${router.asPath}`,
              ],
            }),
          }}
        />

      </Head>

      <MainHeader />

      <div className="relative py-4 container lg:py-4 bg-white">
        <BreadCrumbs data={pages} />
      </div>

      <section className="main bg-zinc-100 box-border w-full pt-4 md:pt-6 lg:pt-8 container">
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <div className="flex flex-col sm:flex-row justify-bewteen items-center sm:items-start w-full">
              <div className={"h-44 w-44 flex-shrink-0 relative "}>
                <Image
                  priority
                  src={managerDetailById.ManagerImage}
                  placeholder="blur"
                  blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
                  fill
                  style={{ borderRadius: "8px" }}
                  sizes="(max-width: 200px) 100vw"
                  quality={10}
                  alt={managerDetailById.ManagerImageAltTag}
                />
              </div>
              <div className="sm:pl-10 mt-4 sm:mt-0 w-full">
                <h1 className="text-lg font-bold text-gray-900">{managerDetailById.ManagerName}</h1>
                <dd className="mt-1 text-base text-gray-900 font-medium">{managerDetailById.Designation}</dd>
                <dd className="mt-1 text-base text-gray-900">{managerDetailById.CompanyName}</dd>
                <div>
                  {
                    deviceType !== "Mobile" ?
                      <>
                        <div className="flex items-center space-x-2">
                          <a
                            href={`https://facebook.com/sharer/sharer.php?u=https://timesascent.com${router.asPath}`}

                            className="text-gray-400 flex items-center justify-between hover:text-timesRed "
                          >
                            <svg
                              className="text-xl h-6 w-6"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                          <a
                            href={`https://web.whatsapp.com/send?text=https://timesascent.com${router.asPath}`}
                            target={"_self"}
                            className="text-gray-400 flex items-center justify-between hover:text-timesRed"
                          >
                            {" "}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              fill="currentColor"
                              class="bi bi-whatsapp"
                              viewBox="0 0 16 16"
                              id="IconChangeColor"
                            >
                              {" "}
                              <path
                                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                                id="mainIconPathAttribute"
                              ></path>{" "}
                            </svg>
                          </a>
                          <a
                            href={`mailto:?body=https://timesascent.com${router.asPath}`}
                            target={"_self"}
                            className="text-gray-400 flex items-center justify-between hover:text-timesRed pt-3"
                          >
                            <svg
                              className="text-xl h-7 w-7"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fillRule="evenodd"
                                d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </a>
                          <a
                            href={`https://twitter.com/intent/tweet?url=https://timesascent.com${router.asPath}`}
                            target={"_self"}
                            className="text-gray-400 flex items-center justify-between hover:text-timesRed "
                          >
                            <svg
                              className="text-xl h-6 flex items-center w-6"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                          <a
                            href={`https://www.linkedin.com/shareArticle?mini=true&url=https://timesascent.com${router.asPath}`}
                            target={"_self"}
                            className="text-gray-400 flex items-center justify-between hover:text-timesRed "
                          >
                            <svg
                              className="text-xl h-5 flex items-center w-5"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </a>
                          <div
                            onClick={() => {
                              copy(
                                `https://timesascent.com${router.asPath}`
                              );
                              setSuccessMessage(true);
                              let successTimeout = setTimeout(() => {
                                setSuccessMessage(false);
                              }, 1000);
                              return () => clearTimeout(successTimeout)
                            }}
                            className="cursor-pointer text-gray-400 flex items-center justify-between hover:text-timesRed "
                          >
                            {" "}
                            <DocumentDuplicateIcon
                              className="h-6 w-6 mx-2"
                              aria-hidden="true"
                            />
                          </div>
                        </div>
                        {
                          successMessage &&
                          <div className="text-red-500">
                            Link copied to clipboard
                          </div>
                        }
                        <div className="flex items-center space-x-4 mt-4 sm:mt-0 w-full sm:w-auto">
                          {/* Facebook */}
                          <div className={userLiked ? "text-timesRed flex items-center justify-between hover:text-timesRed cursor-pointer" : "text-gray-400 flex items-center justify-between hover:text-timesRed cursor-pointer"}
                            onClick={() => {
                              likeManagerById(managerDetailById.ManagerUUID);
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-xl h-6 w-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg>
                            <span className="ml-1">Like</span>
                          </div>
                          <span className="text-gray-400">{likesCount}</span>
                        </div>
                      </>
                      :
                      <div className="pt-3 text-gray-400 flex items-center gap-4">
                        {" "}
                        <GlobalShare
                          url={`https://timesascent.com${router.asPath}`}
                        />
                        <div className="flex items-center space-x-4">
                          {/* Facebook */}
                          <div className={userLiked ? "text-timesRed flex items-center justify-between hover:text-timesRed cursor-pointer" : "text-gray-400 flex items-center justify-between hover:text-timesRed cursor-pointer"}
                            onClick={() => {
                              likeManagerById(managerDetailById.ManagerUUID);
                            }}
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-xl h-6 w-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                            </svg>
                            <span className="ml-1">Like</span>
                          </div>
                          <span className="text-gray-400">{likesCount}</span>
                        </div>
                      </div>

                  }
                </div>
              </div>
              {/* <div className="flex items-center space-x-4 mt-4 sm:mt-0 w-full sm:w-auto">
                <div className={userLiked ? "text-timesRed flex items-center justify-between hover:text-timesRed cursor-pointer" : "text-gray-400 flex items-center justify-between hover:text-timesRed cursor-pointer"}
                  onClick={() => {
                    likeManagerById(managerDetailById.ManagerUUID);
                  }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-xl h-6 w-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                  </svg>
                  <span className="ml-1">Like</span>
                </div>
                <span className="text-gray-400">{likesCount}</span>
              </div> */}
            </div>
            <div>
              <dt className="mt-4 text-base font-medium text-gray-900">About</dt>
              <dd
                className="mt-1 text-sm text-gray-900 text-justify"
                dangerouslySetInnerHTML={{ __html: managerDetailById.ManagerDescription }} />
            </div>
          </div>
        </div>

      </section >
      <section className=" bg-zinc-100 box-border w-full container">
        <div className="mt-6 mb-6 bg-white shadow sm:rounded-lg pl-4 py-5 sm:px-6 relative"
        >
          <div className="font-playfairDisplay">
            <HeadingWithIcon
              headingText="Other Managers"
            // href="/articleslist/featured-articles"
            />
          </div>
          <div className="py-6 bg-white hide-scroll-bar overflow-x-auto lg:overflow-hidden">
            <div className={`flex gap-4 transition ease-in-out delay-75 duration-500`}
              style={{
                transform: `translateX(-${currentIndex * 210}px)`,
              }}
            >
              {props?.managerDetailById.OtherManager?.map((item, index) => {
                return (
                  <ManagersCard key={index} data={item} />
                );
              })}
            </div>
          </div>

          <div className="hidden lg:block absolute top-[45%] left-5">
            <div
              id="carousel-controls-right"
              className={
                currentIndex < 1
                  ? "pointer-events-none rounded-full opacity-40 bg-white"
                  : ""
              }
            >
              <button onClick={handlePrevClick}>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-200 dark:bg-gray-800/30 group-hover:bg-gray-400 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 19l-7-7 7-7"
                    ></path>
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
            </div>
          </div>
          <div className="hidden lg:block absolute top-[45%] right-5">
            <div
              id="carousel-controls-left"
            // className={
            //   currentIndex > 2
            //     ? "pointer-events-none opacity-40 rounded-full bg-white"
            //     : ""
            // }
            >
              <button onClick={handleNextClick}>
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-gray-200 dark:bg-gray-800/30 group-hover:bg-gray-400 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-black sm:w-6 sm:h-6 dark:text-gray-800"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div >
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
  let props = {};
  try {

    const managerDetailById = await GetManagerDetailById({
      ManagerSeoURL: `/great-manager-institute/${context.query.id[0]}`
    })

    props = {
      isMobile,
      managerDetailById
    };
  } catch (err) {
    console.log("api error in forher page");
    props = {
      isPageError: true,
    };
  }

  return { props: { props } };
}
export default managerDetail;
