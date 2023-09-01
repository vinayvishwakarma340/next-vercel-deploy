import { Fragment, useState } from "react";
import ArticleWithoutImgCollection from "../Components/CardCollection/ArticleWithoutImgCollection";
import getarticlewithoutimagearticle from "../public/JSON/getarticlewithoutimagearticle.json";
import {
  ChatBubbleLeftEllipsisIcon,
  ShareIcon,
} from "@heroicons/react/20/solid";

import MainHeader from "../Components/MainHeader";
import { forumData } from "./api/forumApi";
import ForumQuestion from "../Components/Modal/ForumQuestion";
import Footer from "../Components/Footer";
import Head from "next/head";
import BreadCrumbs from "../Components/BreadCrumbs";
import SuccessModal from "../Components/Modal/SuccessModal";
import Pagination from "../Components/NewPagination";
import { useEffect } from "react";
import { useRouter } from "next/router";
import FreelancerWidget from "../Components/Widget/FreelancerWidget";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";
import GlobalShare from "../Components/GlobalShare";
import GoogleAd_Hrec from "../Components/GoogleAds/GoogleAd_Hrec";
import GoogleAd_728x90 from "../Components/GoogleAds/GoogleAd_728x90";
import SkeletonMrec from "../Components/Skeleton/SkeletonMrec";
import SkeletonHrec from "../Components/Skeleton/SkeletonHrec";
import Image from "next/image";

const forum = ({ props }) => {
  const router = useRouter();
  const [forumList, setForumList] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModals, setShowModals] = useState(false);
  const [currentTab, setCurrentTab] = useState("Recent");
  const [selectTab, setSelectTab] = useState(0);
  const [sortList, setSortList] = useState([]);
  const [deviceType, setDeviceType] = useState("");
  const [adShow, setadShow] = useState(false);

  const [page, setPage] = useState(
    router.query.page ? parseInt(router.query.page) : 1
  );
  const [maxPage, setMaxPage] = useState(
    Math.ceil(props.forumdata.TotalCount / 24)
  );

  const onSuccessForm = () => {
    setShowModal(false);
    const timeout = setTimeout(() => {
      setShowModals(true);
    }, 400);
    return () => clearTimeout(timeout)
  };

  const changeTab = (tab) => {
    setCurrentTab(tab);
  };

  const tabs = [
    { name: "Recent", current: true },
    { name: "Most Answers", current: false },
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    setPage(router.query.page ? parseInt(router.query.page) : 1);
    setSortList(
      props.sortForumData.Questions.sort(
        (a, b) => b.answersCount - a.answersCount
      )
    );
    setForumList(props.forumdata.Questions);
    CheckSourceDevice();
    return () => clearTimeout(timeout)
  }, [router.query.page]);

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

  const tab = (e) => {
    if (e) {
      if (e.target.value === "Recent") {
        setCurrentTab("Recent");
        setSelectTab(0);
      } else {
        setCurrentTab("Most Answers");
        setSelectTab(1);
      }
    }
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const pages = [
    {
      name: "Forum",
      current: true,
    },
  ];

  const dateHandler = (date) => {
    const dateObj = new Date(date);
    const day = dateObj.getDate();
    const monthNameLong = dateObj.toLocaleString("en-US", { month: "short" });
    const year = dateObj.getFullYear();
    return (day <= 9 ? "0" : "") + day + "-" + monthNameLong + "-" + year;
  };

  const closesuccessModal = (modalType) => {
    setShowModals(false);
  };

  const freelancerWidgetData = {
    heading: "Work Remotely",
    description: " Get a network of certified and experienced freelancers",
    buttonText: "Hire now ",
  };

  const pageChange = (val) => {
    router.push(`forum/?page=${val}`);
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Recently Answered Questions || Times Ascent</title>
        <meta
          name="description"
          content={`Get answers to all your career related queries!`}
        />
        <link rel="canonical" href="https://timesascent.com/forum" />
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
          content="Recently Answered Questions || Times Ascent"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`Get answers to all your career related queries!`}
        />
        <meta property="og:url" content="https://timesascent.com/forum" />
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
          content="Recently Answered Questions || Times Ascent"
        />
        <meta
          property="twitter:description"
          content={`Get answers to all your career related queries!`}
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
                  name: "Forum",
                  item: "https://timesascent.com/",
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
              "@type": "FAQPage",
              mainEntity: forumList?.map((item, index) => {
                return {
                  "@type": "Question",
                  name: item.Question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answers[0]?.Answer,
                  },
                };
              }),
            }),
          }}
        />
      </Head>
      <ForumQuestion
        openModal={showModal}
        setShowModals={setShowModals}
        closeModal={() => setShowModal(false)}
        onSuccessForm={onSuccessForm}
      />
      <SuccessModal
        openModal={showModals}
        closeModal={() => closesuccessModal()}
        headingText="Thank you !!"
        subHeadingText={"Your question will soon receive a response"}
        buttonText="OK"
      />
      <MainHeader />

      <div className="relative   py-4 container lg:py-4 bg-white">
        <BreadCrumbs data={pages} />
      </div>

      <div className="min-h-full">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
        <div className="relative py-4 container lg:py-4">
          <div className=" ml-8 mb-6 border-b border-gray-200 pb-5 ">
            <div className="flex flex-wrap items-baseline ">
              <h1 className=" text-lg font-medium leading-6 text-gray-900">
                Recently asked questions
              </h1>
              <p className="truncate text-sm text-gray-500 ml-2"> in career</p>
            </div>
          </div>
          <div className="mx-auto  sm:px-6 lg:grid  lg:grid-cols-12 lg:gap-8 lg:px-8">
            <main className="lg:col-span-9 xl:col-span-8">
              <div className="px-4 sm:px-0">
                <div className="sm:hidden">
                  <label htmlFor="question-tabs" className="sr-only">
                    Select a tab
                  </label>
                  <select
                    id="question-tabs"
                    className="block w-full rounded-md border-gray-300 text-base font-medium text-gray-900 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                    defaultValue={tabs.find((tab) => tab.current).name}
                    onChange={(e) => tab(e)}
                  >
                    {tabs.map((tab) => (
                      <option key={tab.name}>{tab.name}</option>
                    ))}
                  </select>
                </div>
                <div className="hidden sm:block">
                  {/* ------------------------------   T A B S ------------------------------- */}

                  <nav
                    className="isolate cursor-pointer flex divide-x divide-gray-200 rounded-lg shadow"
                    aria-label="Tabs"
                  >
                    {tabs.map((tab, tabIdx) => (
                      <a
                        onClick={() => {
                          setSelectTab(tabIdx);
                          changeTab(tab.name);
                          // mostAns(tab.name);
                        }}
                        key={tab.name}
                        href={tab.href}
                        aria-current={tab.current ? "page" : undefined}
                        className={classNames(
                          selectTab === tabIdx
                            ? "text-gray-900  rounded-l-lg"
                            : "text-gray-500 hover:text-gray-700",

                          "group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-6 text-sm font-medium text-center hover:bg-gray-50 focus:z-10"
                        )}
                      //
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
                      </a>
                    ))}
                  </nav>
                </div>
              </div>

              {/* --------------------------------- S I D E : two ----------------------- */}

              {currentTab === "Most Answers" ? (
                <div>
                  <div className="md:mt-0 mt-4">
                    <ul role="list1" className="space-y-4">
                      {sortList?.map((item, i) => (
                        <li
                          key={item.KeyIndex}
                          className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6"
                        >
                          <article
                            aria-labelledby={
                              "question-title-" + item.ForumQuestionID
                            }
                          >
                            <div>
                              <div className="flex space-x-3">
                                <div className="flex-shrink-0">
                                  <Image
                                    className="h-10 w-10 rounded-full"
                                    src={
                                      "https://timesascent.com/Times_Ascent_Icon.png"
                                    }
                                    alt=""
                                    height={50}
                                    width={50}
                                  />
                                </div>
                                <div className="min-w-0 flex-1">
                                  <p className="text-sm font-medium text-gray-900">
                                    <a className=" ">{item.Name}</a>
                                  </p>
                                  <p className="text-sm text-gray-500">
                                    <a className=" ">
                                      {item.UpdatedAt &&
                                        dateHandler(
                                          item.UpdatedAt.slice(0, 10)
                                        )}
                                    </a>
                                  </p>
                                </div>
                                <div className="flex flex-shrink-0 self-center"></div>
                              </div>
                              <a
                                href={"/forumdetail/" + item.ForumQuestionID}
                                className="hover:underline"
                              >
                                <h2
                                  id={"question-title-" + item.Question}
                                  className="mt-4 text-base font-medium text-gray-900"
                                >
                                  {item.Question}
                                </h2>
                              </a>
                            </div>
                            <div className="mt-2 space-y-4 text-sm text-gray-700">
                              {item.answers &&
                                item.answers
                                  .slice(0, 1)
                                  .map((answerData, i) => (
                                    <div className="line-clamp-2" key={i}>
                                      {" "}
                                      {answerData.Answer}{" "}
                                    </div>
                                  ))}
                            </div>

                            <div className="mt-6 flex justify-between space-x-8">
                              <div className="flex space-x-6">
                                <span className="inline-flex items-center text-sm">
                                  <a
                                    type="button"
                                    href={
                                      "/forumdetail/" + item.ForumQuestionID
                                    }
                                    className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                  >
                                    <ChatBubbleLeftEllipsisIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                    <span className="font-medium text-gray-900">
                                      {item.answersCount} Answer
                                    </span>
                                    <span className="sr-only">replies</span>
                                  </a>
                                </span>
                              </div>
                              <div className="flex text-sm">
                                <span className="inline-flex items-center text-sm">
                                  {deviceType !== "Mobile" ? (
                                    <button
                                      type="button"
                                      onClick={() => {
                                        document
                                          .getElementById(`ques${i}`)
                                          .classList.toggle("hidden");
                                      }}
                                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                    >
                                      <ShareIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                      <span className="font-medium text-gray-900">
                                        Share
                                      </span>
                                    </button>
                                  ) : (
                                    <GlobalShare
                                      url={`https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
                                    />
                                  )}
                                </span>
                              </div>
                            </div>

                            {/* ----------------------------------- s h a r e ---------------- */}

                            <div className="flex justify-end ">
                              <div
                                id={`ques${i}`}
                                className="flex items-center hidden  mt-1  justify-around w-[100%] md:w-[30%] flex-wrap pt-1 px-2"
                              >
                                {/* Facebook */}
                                <a
                                  href={`https://facebook.com/sharer/sharer.php?u=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}

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
                                  href={`https://web.whatsapp.com/send?text=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
                                  target={"_self"}
                                  className="text-gray-400 flex items-center justify-between hover:text-timesRed"
                                >
                                  {" "}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="18"
                                    height="18"
                                    fill="currentColor"
                                    className="bi bi-whatsapp"
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
                                {/* Instagram */}
                                <a
                                  href={`mailto:?body=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
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

                                {/* twitter */}
                                <a
                                  href={`https://twitter.com/intent/tweet?url=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
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
                                {/* linkedin */}
                                <a
                                  href={`https://www.linkedin.com/shareArticle?mini=true&url=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
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
                              </div>
                            </div>
                          </article>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex justify-center w-full   ">
                    <div className="mt-10 flex justify-center sm:flex sm:justify-end">
                      <Pagination
                        page={page}
                        maxPage={maxPage}
                        pageChange={pageChange}
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* --------------------------------- S I D E : ONE ----------------------- */}
                  {/* .................... recent answers ............... */}
                  <div className="md:mt-0 mt-4">
                    <h2 className="sr-only">Recent questions</h2>
                    <ul role="list" className="space-y-4">
                      {forumList.slice(0, 5).map((item, i) => {
                        return (
                          <li
                            key={item.KeyIndex}
                            className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6"
                          >
                            <article
                              aria-labelledby={
                                "question-title-" + item.ForumQuestionID
                              }
                            >
                              <div>
                                <div className="flex space-x-3">
                                  <div className="flex-shrink-0">
                                    <Image
                                      className="h-10 w-10 rounded-full"
                                      src={
                                        "https://timesascent.com/Times_Ascent_Icon.png"
                                      }
                                      alt=""
                                      height={50}
                                      width={50}
                                    />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                      <a className=" ">{item.Name}</a>
                                    </p>
                                    <p className="text-sm text-gray-500">
                                      <a className=" ">
                                        {item.UpdatedAt &&
                                          dateHandler(
                                            item.UpdatedAt.slice(0, 10)
                                          )}
                                      </a>
                                    </p>
                                  </div>
                                  <div className="flex flex-shrink-0 self-center"></div>
                                </div>
                                <a
                                  href={"/forumdetail/" + item.ForumQuestionID}
                                  className="hover:underline"
                                >
                                  <h2
                                    id={"question-title-" + item.Question}
                                    className="mt-4 text-base font-medium text-gray-900"
                                  >
                                    {item.Question}
                                  </h2>
                                </a>
                              </div>
                              <div className="mt-2 space-y-4 text-sm text-gray-700">
                                {item.answers &&
                                  item.answers
                                    ?.slice(0, 1)
                                    .map((answerData, i) => (
                                      <div className="line-clamp-2" key={i}>
                                        {" "}
                                        {answerData.Answer}{" "}
                                      </div>
                                    ))}
                              </div>

                              <div className="mt-6 flex justify-between space-x-8">
                                <div className="flex space-x-6">
                                  <span className="inline-flex items-center text-sm">
                                    <a
                                      type="button"
                                      href={
                                        "/forumdetail/" + item.ForumQuestionID
                                      }
                                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                    >
                                      <ChatBubbleLeftEllipsisIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                      <span className="font-medium text-gray-900">
                                        {item.answersCount} Answer
                                      </span>
                                      <span className="sr-only">replies</span>
                                    </a>
                                  </span>
                                </div>
                                <div className="flex text-sm">
                                  <span className="inline-flex items-center text-sm">
                                    {deviceType !== "Mobile" ? (
                                      <button
                                        type="button"
                                        onClick={() => {
                                          document
                                            .getElementById(`ques${i}`)
                                            .classList.toggle("hidden");
                                        }}
                                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                      >
                                        <ShareIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                        <span className="font-medium text-gray-900">
                                          Share
                                        </span>
                                      </button>
                                    ) : (
                                      <GlobalShare
                                        url={`https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
                                      />
                                    )}
                                  </span>
                                </div>
                              </div>
                              {/* ----------------------------------- s h a r e ---------------- */}

                              <div className="flex justify-end ">
                                <div
                                  className="flex items-center  mt-1  justify-around w-[100%] md:w-[30%] flex-wrap pt-1 px-2 hidden"
                                  id={`ques${i}`}
                                >
                                  {/* Facebook */}
                                  <a
                                    href={`https://facebook.com/sharer/sharer.php?u=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}

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
                                    href={`https://web.whatsapp.com/send?text=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
                                    target={"_self"}
                                    className="text-gray-400 flex items-center justify-between hover:text-timesRed"
                                  >
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="18"
                                      height="18"
                                      fill="currentColor"
                                      className="bi bi-whatsapp"
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
                                  {/* Instagram */}
                                  <a
                                    href={`mailto:?body=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
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

                                  {/* twitter */}
                                  <a
                                    href={`https://twitter.com/intent/tweet?url=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
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
                                  {/* linkedin */}
                                  <a
                                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
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
                                </div>
                              </div>
                            </article>
                          </li>
                        );
                      })}
                      <div className="mt-6">
                        {adShow ? (
                          <>
                            <div className=" hidden md:block ">
                              <GoogleAd_Hrec
                                path="/1064661/ta.com_hrec1_Forum"
                                ads_Id="div-gpt-ad-1674624078966-0"
                                size={[[728, 90]]}
                              />
                            </div>
                            <div className="block md:hidden">
                              <GoogleAd_Hrec
                                path="/1064661/ta.com_hrec1_Mob_Forum"
                                ads_Id="div-gpt-ad-1674624479201-0"
                                size={[[320, 50]]}
                              />
                            </div>
                          </>
                        ) : (
                          <SkeletonHrec />
                        )}
                      </div>

                      {forumList.slice(5, 10).map((item, i) => {
                        return (
                          <li
                            key={item.KeyIndex}
                            className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6"
                          >
                            <article
                              aria-labelledby={
                                "question-title-" + item.ForumQuestionID
                              }
                            >
                              <div>
                                <div className="flex space-x-3">
                                  <div className="flex-shrink-0">
                                    <Image
                                      className="h-10 w-10 rounded-full"
                                      src={
                                        "https://timesascent.com/Times_Ascent_Icon.png"
                                      }
                                      alt=""
                                      height={50}
                                      width={50}
                                    />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                      <a className=" ">{item.Name}</a>
                                    </p>
                                    <p className="text-sm text-gray-500">
                                      <a className=" ">
                                        {item.UpdatedAt &&
                                          dateHandler(
                                            item.UpdatedAt.slice(0, 10)
                                          )}
                                      </a>
                                    </p>
                                  </div>
                                  <div className="flex flex-shrink-0 self-center"></div>
                                </div>
                                <a
                                  href={"/forumdetail/" + item.ForumQuestionID}
                                  className="hover:underline"
                                >
                                  <h2
                                    id={"question-title-" + item.Question}
                                    className="mt-4 text-base font-medium text-gray-900"
                                  >
                                    {item.Question}
                                  </h2>
                                </a>
                              </div>
                              <div className="mt-2 space-y-4 text-sm text-gray-700">
                                {item.answers &&
                                  item.answers
                                    ?.slice(0, 1)
                                    .map((answerData, i) => (
                                      <div className="line-clamp-2" key={i}>
                                        {" "}
                                        {answerData.Answer}{" "}
                                      </div>
                                    ))}
                              </div>

                              <div className="mt-6 flex justify-between space-x-8">
                                <div className="flex space-x-6">
                                  <span className="inline-flex items-center text-sm">
                                    <a
                                      type="button"
                                      href={
                                        "/forumdetail/" + item.ForumQuestionID
                                      }
                                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                    >
                                      <ChatBubbleLeftEllipsisIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                      <span className="font-medium text-gray-900">
                                        {item.answersCount} Answer
                                      </span>
                                      <span className="sr-only">replies</span>
                                    </a>
                                  </span>
                                </div>
                                <div className="flex text-sm">
                                  <span className="inline-flex items-center text-sm">
                                    {deviceType !== "Mobile" ? (
                                      <button
                                        type="button"
                                        onClick={() => {
                                          document
                                            .getElementById(`ques${i}`)
                                            .classList.toggle("hidden");
                                        }}
                                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                      >
                                        <ShareIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                        <span className="font-medium text-gray-900">
                                          Share
                                        </span>
                                      </button>
                                    ) : (
                                      <GlobalShare
                                        url={`https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
                                      />
                                    )}
                                  </span>
                                </div>
                              </div>
                              {/* ----------------------------------- s h a r e ---------------- */}

                              <div className="flex justify-end ">
                                <div
                                  className="flex items-center  mt-1  justify-around w-[100%] md:w-[30%] flex-wrap pt-1 px-2 hidden"
                                  id={`ques${i}`}
                                >
                                  {/* Facebook */}
                                  <a
                                    href={`https://facebook.com/sharer/sharer.php?u=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}

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
                                    href={`https://web.whatsapp.com/send?text=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
                                    target={"_self"}
                                    className="text-gray-400 flex items-center justify-between hover:text-timesRed"
                                  >
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="18"
                                      height="18"
                                      fill="currentColor"
                                      className="bi bi-whatsapp"
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
                                  {/* Instagram */}
                                  <a
                                    href={`mailto:?body=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
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

                                  {/* twitter */}
                                  <a
                                    href={`https://twitter.com/intent/tweet?url=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
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
                                  {/* linkedin */}
                                  <a
                                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
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
                                </div>
                              </div>
                            </article>
                          </li>
                        );
                      })}
                      <div className="mt-6">
                        <div className=" hidden md:block ">
                          <GoogleAd_Hrec
                            path="/1064661/ta.com_hrec2_Forum"
                            ads_Id="div-gpt-ad-1674624163326-0"
                            size={[[728, 90]]}
                          />
                        </div>
                        <div className="block md:hidden">
                          <GoogleAd_Hrec
                            path="/1064661/ta.com_hrec2_Mob_Forum"
                            ads_Id="div-gpt-ad-1674624402701-0"
                            size={[[320, 50]]}
                          />
                        </div>
                      </div>

                      {forumList.slice(10, 15).map((item, i) => {
                        return (
                          <li
                            key={item.KeyIndex}
                            className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6"
                          >
                            <article
                              aria-labelledby={
                                "question-title-" + item.ForumQuestionID
                              }
                            >
                              <div>
                                <div className="flex space-x-3">
                                  <div className="flex-shrink-0">
                                    <Image
                                      className="h-10 w-10 rounded-full"
                                      src={
                                        "https://timesascent.com/Times_Ascent_Icon.png"
                                      }
                                      alt=""
                                      height={50}
                                      width={50}
                                    />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                      <a className=" ">{item.Name}</a>
                                    </p>
                                    <p className="text-sm text-gray-500">
                                      <a className=" ">
                                        {item.UpdatedAt &&
                                          dateHandler(
                                            item.UpdatedAt.slice(0, 10)
                                          )}
                                      </a>
                                    </p>
                                  </div>
                                  <div className="flex flex-shrink-0 self-center"></div>
                                </div>
                                <a
                                  href={"/forumdetail/" + item.ForumQuestionID}
                                  className="hover:underline"
                                >
                                  <h2
                                    id={"question-title-" + item.Question}
                                    className="mt-4 text-base font-medium text-gray-900"
                                  >
                                    {item.Question}
                                  </h2>
                                </a>
                              </div>
                              <div className="mt-2 space-y-4 text-sm text-gray-700">
                                {item.answers &&
                                  item.answers
                                    ?.slice(0, 1)
                                    .map((answerData, i) => (
                                      <div className="line-clamp-2">
                                        {" "}
                                        {answerData.Answer}{" "}
                                      </div>
                                    ))}
                              </div>

                              <div className="mt-6 flex justify-between space-x-8">
                                <div className="flex space-x-6">
                                  <span className="inline-flex items-center text-sm">
                                    <a
                                      type="button"
                                      href={
                                        "/forumdetail/" + item.ForumQuestionID
                                      }
                                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                    >
                                      <ChatBubbleLeftEllipsisIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                      <span className="font-medium text-gray-900">
                                        {item.answersCount} Answer
                                      </span>
                                      <span className="sr-only">replies</span>
                                    </a>
                                  </span>
                                </div>
                                <div className="flex text-sm">
                                  <span className="inline-flex items-center text-sm">
                                    {deviceType !== "Mobile" ? (
                                      <button
                                        type="button"
                                        onClick={() => {
                                          document
                                            .getElementById(`ques${i}`)
                                            .classList.toggle("hidden");
                                        }}
                                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                      >
                                        <ShareIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                        <span className="font-medium text-gray-900">
                                          Share
                                        </span>
                                      </button>
                                    ) : (
                                      <GlobalShare
                                        url={`https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
                                      />
                                    )}
                                  </span>
                                </div>
                              </div>
                              {/* ----------------------------------- s h a r e ---------------- */}

                              <div className="flex justify-end ">
                                <div
                                  className="flex items-center  mt-1  justify-around w-[100%] md:w-[30%] flex-wrap pt-1 px-2 hidden"
                                  id={`ques${i}`}
                                >
                                  {/* Facebook */}
                                  <a
                                    href={`https://facebook.com/sharer/sharer.php?u=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}

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
                                    href={`https://web.whatsapp.com/send?text=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
                                    target={"_self"}
                                    className="text-gray-400 flex items-center justify-between hover:text-timesRed"
                                  >
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="18"
                                      height="18"
                                      fill="currentColor"
                                      className="bi bi-whatsapp"
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
                                  {/* Instagram */}
                                  <a
                                    href={`mailto:?body=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
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

                                  {/* twitter */}
                                  <a
                                    href={`https://twitter.com/intent/tweet?url=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
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
                                  {/* linkedin */}
                                  <a
                                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
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
                                </div>
                              </div>
                            </article>
                          </li>
                        );
                      })}
                      <div className="mt-6">
                        <GoogleAd_728x90
                          isMobile={props.isMobile}
                          path="/22637491760/timesascent.com_erelego_ap_d_728x90"
                          ads_Id="div-gpt-ad-1666337275945-0"
                        />
                      </div>

                      {forumList.slice(15, 20).map((item, i) => {
                        return (
                          <li
                            key={item.KeyIndex}
                            className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6"
                          >
                            <article
                              aria-labelledby={
                                "question-title-" + item.ForumQuestionID
                              }
                            >
                              <div>
                                <div className="flex space-x-3">
                                  <div className="flex-shrink-0">
                                    <Image
                                      className="h-10 w-10 rounded-full"
                                      src={
                                        "https://timesascent.com/Times_Ascent_Icon.png"
                                      }
                                      alt=""
                                      height={50}
                                      width={50}
                                    />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                      <a className=" ">{item.Name}</a>
                                    </p>
                                    <p className="text-sm text-gray-500">
                                      <a className=" ">
                                        {item.UpdatedAt &&
                                          dateHandler(
                                            item.UpdatedAt.slice(0, 10)
                                          )}
                                      </a>
                                    </p>
                                  </div>
                                  <div className="flex flex-shrink-0 self-center"></div>
                                </div>
                                <a
                                  href={"/forumdetail/" + item.ForumQuestionID}
                                  className="hover:underline"
                                >
                                  <h2
                                    id={"question-title-" + item.Question}
                                    className="mt-4 text-base font-medium text-gray-900"
                                  >
                                    {item.Question}
                                  </h2>
                                </a>
                              </div>
                              <div className="mt-2 space-y-4 text-sm text-gray-700">
                                {item.answers &&
                                  item.answers
                                    ?.slice(0, 1)
                                    .map((answerData, i) => (
                                      <div className="line-clamp-2">
                                        {" "}
                                        {answerData.Answer}{" "}
                                      </div>
                                    ))}
                              </div>

                              <div className="mt-6 flex justify-between space-x-8">
                                <div className="flex space-x-6">
                                  <span className="inline-flex items-center text-sm">
                                    <a
                                      type="button"
                                      href={
                                        "/forumdetail/" + item.ForumQuestionID
                                      }
                                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                    >
                                      <ChatBubbleLeftEllipsisIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                      <span className="font-medium text-gray-900">
                                        {item.answersCount} Answer
                                      </span>
                                      <span className="sr-only">replies</span>
                                    </a>
                                  </span>
                                </div>
                                <div className="flex text-sm">
                                  <span className="inline-flex items-center text-sm">
                                    {deviceType !== "Mobile" ? (
                                      <button
                                        type="button"
                                        onClick={() => {
                                          document
                                            .getElementById(`ques${i}`)
                                            .classList.toggle("hidden");
                                        }}
                                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                      >
                                        <ShareIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                        <span className="font-medium text-gray-900">
                                          Share
                                        </span>
                                      </button>
                                    ) : (
                                      <GlobalShare
                                        url={`https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
                                      />
                                    )}
                                  </span>
                                </div>
                              </div>
                              {/* ----------------------------------- s h a r e ---------------- */}

                              <div className="flex justify-end ">
                                <div
                                  className="flex items-center  mt-1  justify-around w-[100%] md:w-[30%] flex-wrap pt-1 px-2 hidden"
                                  id={`ques${i}`}
                                >
                                  {/* Facebook */}
                                  <a
                                    href={`https://facebook.com/sharer/sharer.php?u=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}

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
                                    href={`https://web.whatsapp.com/send?text=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
                                    target={"_self"}
                                    className="text-gray-400 flex items-center justify-between hover:text-timesRed"
                                  >
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="18"
                                      height="18"
                                      fill="currentColor"
                                      className="bi bi-whatsapp"
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
                                  {/* Instagram */}
                                  <a
                                    href={`mailto:?body=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
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

                                  {/* twitter */}
                                  <a
                                    href={`https://twitter.com/intent/tweet?url=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
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
                                  {/* linkedin */}
                                  <a
                                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
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
                                </div>
                              </div>
                            </article>
                          </li>
                        );
                      })}
                      <div className="mt-6">
                        <GoogleAd_728x90
                          isMobile={props.isMobile}
                          path="/22637491760/timesascent.com_erelego_ap_d_728x90"
                          ads_Id="div-gpt-ad-1674643676290-0"
                        />
                      </div>

                      {forumList.slice(20).map((item, i) => {
                        return (
                          <li
                            key={item.KeyIndex}
                            className="bg-white px-4 py-6 shadow sm:rounded-lg sm:p-6"
                          >
                            <article
                              aria-labelledby={
                                "question-title-" + item.ForumQuestionID
                              }
                            >
                              <div>
                                <div className="flex space-x-3">
                                  <div className="flex-shrink-0">
                                    <Image
                                      className="h-10 w-10 rounded-full"
                                      src={
                                        "https://timesascent.com/Times_Ascent_Icon.png"
                                      }
                                      alt=""
                                      height={50}
                                      width={50}
                                    />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                      <a className=" ">{item.Name}</a>
                                    </p>
                                    <p className="text-sm text-gray-500">
                                      <a className=" ">
                                        {item.UpdatedAt &&
                                          dateHandler(
                                            item.UpdatedAt.slice(0, 10)
                                          )}
                                      </a>
                                    </p>
                                  </div>
                                  <div className="flex flex-shrink-0 self-center"></div>
                                </div>
                                <a
                                  href={"/forumdetail/" + item.ForumQuestionID}
                                  className="hover:underline"
                                >
                                  <h2
                                    id={"question-title-" + item.Question}
                                    className="mt-4 text-base font-medium text-gray-900"
                                  >
                                    {item.Question}
                                  </h2>
                                </a>
                              </div>
                              <div className="mt-2 space-y-4 text-sm text-gray-700">
                                {item.answers &&
                                  item.answers
                                    ?.slice(0, 1)
                                    .map((answerData, i) => (
                                      <div className="line-clamp-2">
                                        {" "}
                                        {answerData.Answer}{" "}
                                      </div>
                                    ))}
                              </div>

                              <div className="mt-6 flex justify-between space-x-8">
                                <div className="flex space-x-6">
                                  <span className="inline-flex items-center text-sm">
                                    <a
                                      type="button"
                                      href={
                                        "/forumdetail/" + item.ForumQuestionID
                                      }
                                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                    >
                                      <ChatBubbleLeftEllipsisIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                      <span className="font-medium text-gray-900">
                                        {item.answersCount} Answer
                                      </span>
                                      <span className="sr-only">replies</span>
                                    </a>
                                  </span>
                                </div>
                                <div className="flex text-sm">
                                  <span className="inline-flex items-center text-sm">
                                    {deviceType !== "Mobile" ? (
                                      <button
                                        type="button"
                                        onClick={() => {
                                          document
                                            .getElementById(`ques${i}`)
                                            .classList.toggle("hidden");
                                        }}
                                        className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                      >
                                        <ShareIcon
                                          className="h-5 w-5"
                                          aria-hidden="true"
                                        />
                                        <span className="font-medium text-gray-900">
                                          Share
                                        </span>
                                      </button>
                                    ) : (
                                      <GlobalShare
                                        url={`https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
                                      />
                                    )}
                                  </span>
                                </div>
                              </div>
                              {/* ----------------------------------- s h a r e ---------------- */}

                              <div className="flex justify-end ">
                                <div
                                  className="flex items-center  mt-1  justify-around w-[100%] md:w-[30%] flex-wrap pt-1 px-2 hidden"
                                  id={`ques${i}`}
                                >
                                  {/* Facebook */}
                                  <a
                                    href={`https://facebook.com/sharer/sharer.php?u=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}

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
                                    href={`https://web.whatsapp.com/send?text=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
                                    target={"_self"}
                                    className="text-gray-400 flex items-center justify-between hover:text-timesRed"
                                  >
                                    {" "}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="18"
                                      height="18"
                                      fill="currentColor"
                                      className="bi bi-whatsapp"
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
                                  {/* Instagram */}
                                  <a
                                    href={`mailto:?body=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
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

                                  {/* twitter */}
                                  <a
                                    href={`https://twitter.com/intent/tweet?url=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
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
                                  {/* linkedin */}
                                  <a
                                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://timesascent.com/forumdetail/${item.ForumQuestionID}`}
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
                                </div>
                              </div>
                            </article>
                          </li>
                        );
                      })}
                      <div className="mt-6">
                        <GoogleAd_728x90
                          isMobile={props.isMobile}
                          path="/22637491760/timesascent.com_erelego_cp_d_728x90"
                          ads_Id="div-gpt-ad-1674644273822-0"
                        />
                      </div>
                    </ul>
                  </div>
                  <div className="flex justify-center w-full   ">
                    <div className="mt-10 flex justify-center sm:flex sm:justify-end">
                      <Pagination
                        page={page}
                        maxPage={maxPage}
                        pageChange={pageChange}
                      />
                    </div>
                  </div>
                </>
              )}
            </main>

            {/* ------------------------------------- Right side part ---------------------------- */}
            <aside className="  xl:col-span-4 xl:block">
              <div className="  top-4 space-y-4">
                <section
                  className="lg:w-[300px]"
                  aria-labelledby="who-to-follow-heading"
                >
                  <div className="rounded-lg  md:mt-0 mt-4 xl:block flex justify-center bg-white shadow">
                    <div className="p-6  lg:w-full sm:w-6/12">
                      <h2
                        id="who-to-follow-heading"
                        className=" text-sm sm:text-base flex justify-center  font-medium text-gray-900"
                      >
                        Get answers to all your career related queries!
                      </h2>

                      <div className="mt-6   xl:block flex justify-center">
                        <button
                          type="button"
                          onClick={() => setShowModal(true)}
                          className="block w-full bg-timesPurple  rounded-md border border-gray-300  px-4 py-2 text-center text-sm font-medium text-white shadow-sm "
                        >
                          Ask a questions
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
                <div className="lg:w-[300px]">
                  <FreelancerWidget {...freelancerWidgetData} />
                </div>

                <div className=" mt-6  md:mt-0 right-side md:ml-[6px] xl:w-[300px]">
                  {adShow ? (
                    <GoogleAd_300x250
                      path="/1064661/ta.com_mrec1_Forum"
                      ads_Id="div-gpt-ad-1674560071746-0"
                      size={[[300, 250]]}
                    />
                  ) : (
                    <SkeletonMrec />
                  )}
                </div>

                <section
                  className="w-full lg:w-[300px]"
                  aria-labelledby="trending-heading"
                >
                  <div className="rounded-lg sm:mt-6 bg-white shadow">
                    <div className="p-6">
                      <div className=" flow-root">
                        {/* --------------------------------trending articles starts ----------------- */}

                        <div className="">
                          <ArticleWithoutImgCollection
                            data={getarticlewithoutimagearticle.data.slice(
                              4,
                              8
                            )}
                            href={"/"}
                          />
                        </div>
                        {/* --------------------------------trending articles ends----------------- */}
                      </div>
                    </div>
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
                </section>
              </div>
            </aside>
          </div>
        </div>
      </div>
      <Footer />
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
  const forumdata = await forumData(context.query.page);
  const sortForumData = await forumData(context.query.page);
  const props = {
    forumdata,
    sortForumData,
    isMobile: isMobile,
  };

  return { props: { props } };
}

export default forum;
