import { useState, useEffect } from "react";
import getarticlewithoutimagearticle from "../../public/JSON/getarticlewithoutimagearticle.json";
import {
  CalendarIcon,
  ChatBubbleLeftEllipsisIcon,
  PencilIcon,
} from "@heroicons/react/20/solid";
import MainHeader from "../../Components/MainHeader";
import { forumDetail } from "../api/forumApi";
import BreadCrumbs from "../../Components/BreadCrumbs";
import Head from "next/head";
import SecondryWidget from "../../Components/Widget/SecondryWidget";
import ArticleWithoutImgCollection from "../../Components/CardCollection/ArticleWithoutImgCollection";
import SuccessModal from "../../Components/Modal/SuccessModal";
import Footer from "../../Components/Footer";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { ThreeDots } from "react-loader-spinner";

const forumdetail = ({ props }) => {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [answer, setAnswer] = useState("");
  const [showModals, setShowModals] = useState(false);
  const [dataList, setDataList] = useState(props.forumData);
  const [ansList, setAnsList] = useState(props.forumData.count);
  const [login, setLogin] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    setLogin(Cookies.get("userLoggedIn"));
  }, []);

  const Logcheck = () => {
    if (!login) {
      Cookies.set("pathname", router.asPath);
      router.push("/times-ascent-signin");
    } else {
      setShowModals(true);
      Addanswer();
      clearFields();
    }
  };

  const closesuccessModal = (modalType) => {
    setShowModals(false);
  };

  const handleClickScroll = () => {
    const element = document.getElementById("section-1");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const clearFields = () => {
    setFirstname("");
    setAnswer("");
    setEmail("");
  };

  const Addanswer = () => {
    setLoading(true);

    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      ForumQuestionID: id,
      Name: firstname,
      Email: email,
      Answer: answer,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/AddAnswers`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200 && result.status === "Success") {
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  const pages = [
    {
      name: "Forum",
      href: "/forum",
      current: false,
    },
    {
      name: props.forumData.data.Question,
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

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{props.forumData.data.Question}</title>
        <meta name="description" content={props.forumData.data.Question} />
        <link
          rel="canonical"
          href={`https://timesascent.com/forumdetail/${props.forumData.data.ForumQuestionID}`}
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
        <meta property="og:title" content={props.forumData.data.Question} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`Get answers to all your career related queries!`}
        />
        <meta
          property="og:url"
          content={`https://timesascent.com/forumdetail/${props.forumData.data.ForumQuestionID}`}
        />
        <meta
          property="og:image"
          content="https://timesascent.com/newimages/main/times_ascent_logo.svg"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/newimages/main/times_ascent_logo.svg"
        />
        <meta
          property="twitter:title"
          content={props.forumData.data.Question}
        />
        <meta
          property="twitter:description"
          content={props.forumData.data.Question}
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
                  item: "https://timesascent.com/forum",
                },
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Forum Detail",
                  item: `https://timesascent.com${router.asPath}`,
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
              mainEntity: {
                "@type": "Question",
                name: props.forumData.data.Question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: props.forumData?.relatedAnswers[0]?.Answer || "answer",
                },
              },
            }),
          }}
        />
      </Head>
      <MainHeader />

      <SuccessModal
        openModal={showModals}
        closeModal={() => closesuccessModal()}
        headingText="Thank you ! "
        buttonText="OK"
        subHeadingText="Your response has been saved "
      />

      <div className="relative   py-4 container lg:py-4 bg-white">
        <BreadCrumbs data={pages} />
      </div>
      <div className=" min-h-full">
        <div className="py-[2%] container">
          <div className="mx-auto   xl:grid  xl:grid-cols-12 xl:gap-8 ">
            <main className="lg:col-span-9 xl:col-span-8">
              <div className="px-4 sm:px-0">
                <div className="">
                  <div className="xl:col-span-2 xl:border-r xl:border-gray-200 xl:pr-8">
                    <div>
                      <div>
                        <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                          <div>
                            <h1 className="text-lg font-bold text-gray-900">
                              {props.forumData.data.Question}
                            </h1>
                          </div>
                          <div className="mt-4 flex space-x-3 md:mt-0">
                            <button
                              onClick={() => handleClickScroll()}
                              type="button"
                              className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                            >
                              <PencilIcon
                                className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span>Write an answer</span>
                            </button>
                          </div>
                        </div>
                        <aside className="mt-5 ">
                          <h2 className="sr-only">Details</h2>
                          <div className="space-y-3">
                            <div>
                              <div>
                                <div className="text-sm font-medium text-gray-500">
                                  Asked by
                                </div>
                                <div className="text-sm mt-1 font-medium text-gray-900">
                                  {props.forumData.data.QName}
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center space-x-2">
                              <ChatBubbleLeftEllipsisIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="text-sm font-medium text-gray-900">
                                {props.forumData.count} answers
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CalendarIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="text-sm font-medium text-gray-900">
                                Posted on{" "}
                                <a className="hover:underline">
                                  {props.forumData.data.QuestionDate &&
                                    dateHandler(
                                      props.forumData.data.QuestionDate.slice(
                                        0,
                                        10
                                      )
                                    )}
                                </a>
                              </span>
                            </div>
                          </div>
                          <div className="mt-6 space-y-2 border-t border-b border-gray-200 py-4">
                            <div>
                              <h2 className="text-sm font-medium text-gray-500">
                                Answered by
                              </h2>
                              <ul role="list" className="mt-1 space-y-3">
                                <li className="flex justify-start">
                                  <div className="text-sm font-medium text-gray-900">
                                    {dataList.relatedAnswers
                                      .slice(0, 1)
                                      .map((item) => {
                                        return item.Name;
                                      })}
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </aside>
                        <div className="py-3 xl:pt-6 xl:pb-0">
                          <h2 className="sr-only">Description</h2>
                          <div className="prose max-w-none">
                            <p>
                              {dataList.relatedAnswers
                                .slice(0, 1)
                                .map((item) => {
                                  return item.Answer;
                                })}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* =================================================== Other answers ============================== */}

                    <section
                      aria-labelledby="activity-title"
                      className="mt-8 xl:mt-8"
                    >
                      <div className="divide-y divide-gray-200">
                        {ansList > 1 ? (
                          <div>
                            <div className="pb-6">
                              <h2
                                id="activity-title"
                                className="text-lg font-medium text-gray-900"
                              >
                                Other answers
                              </h2>
                              <div className="mt-2 border border-b border-gray-200"></div>
                            </div>

                            <div>
                              <ul role="list" className="-mb-8  ">
                                {dataList.relatedAnswers
                                  ?.slice(1, dataList.relatedAnswers.length)
                                  .map((item, index) => (
                                    <li key={index}>
                                      <div className="relative pb-2  border-b border-gray-200 p-4 bg-slate-100 ">
                                        <div className="relative flex items-start space-x-3  ">
                                          <>
                                            <div className="min-w-0 flex-1">
                                              <div>
                                                <div className="text-sm mt-1">
                                                  <a className="font-medium text-gray-900">
                                                    {item.Name}
                                                  </a>
                                                </div>
                                                <p className="mt-0.5 text-sm text-gray-500">
                                                  {dateHandler(
                                                    item.CreatedAt.slice(0, 10)
                                                  )}
                                                </p>
                                              </div>
                                              <div className="mt-2 text-sm text-gray-700">
                                                <p>{item.Answer}</p>
                                              </div>
                                            </div>
                                          </>
                                        </div>
                                      </div>
                                    </li>
                                  ))}
                              </ul>
                            </div>
                          </div>
                        ) : (
                          ""
                        )}

                        <div>
                          {/* ------------------------------------------------- Form submitting an answer ---------------------------- */}

                          <div className="mt-6">
                            <div className="flex space-x-3">
                              <div className="flex-shrink-0"></div>
                              <div className="min-w-0 flex-1">
                                <form
                                  onSubmit={(e) => {
                                    e.preventDefault();
                                    Logcheck();
                                  }}
                                  className="mt-4"
                                >
                                  <div className="mb-3">
                                    <label
                                      id="section-1"
                                      htmlFor="email"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Name
                                    </label>
                                    <div className="mt-1">
                                      <input
                                        value={firstname}
                                        required
                                        onChange={(e) => {
                                          setFirstname(e.target.value);
                                        }}
                                        type="text"
                                        name="name"
                                        id="name"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                                        placeholder="Your name"
                                      />
                                    </div>
                                  </div>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="email"
                                      className="block text-sm font-medium text-gray-700"
                                    >
                                      Email
                                    </label>
                                    <div className="mt-1">
                                      <input
                                        value={email}
                                        required
                                        onChange={(e) => {
                                          setEmail(e.target.value);
                                        }}
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                                        placeholder="you@example.com"
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <label
                                      htmlFor="comment"
                                      className="sr-only"
                                    ></label>
                                    <textarea
                                      value={answer}
                                      onChange={(e) => {
                                        setAnswer(e.target.value);
                                      }}
                                      id="comment"
                                      name="comment"
                                      rows={3}
                                      required
                                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 text-sm"
                                      placeholder="Leave an answer"
                                    />
                                  </div>

                                  <div className="mt-6 flex items-center justify-end space-x-4">
                                    <button
                                      type="submit"
                                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-timesPurple  px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-  focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                    >
                                      {loading ? (
                                        <ThreeDots
                                          height="20"
                                          width="30"
                                          radius="9"
                                          color="white"
                                          ariaLabel="three-dots-loading"
                                          wrapperStyle={{}}
                                          wrapperClassName=""
                                          visible={true}
                                        />
                                      ) : (
                                        "Submit"
                                      )}
                                    </button>
                                  </div>
                                </form>
                                <div className="font-medium text-gray-900 mt-4">Disclaimer</div>
                                <p className="text-gray-900">BCCL disclaims any and all representation or warranties of any kind - expressed or implied - about the completeness, accuracy, reliability,  or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Views expressed herein are independent opinions. You may act at your own risk while relying on the information available on the website. Should you decide to act, or omit to act, you should seek appropriate professional advice.</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </main>
            <aside className=" xl:col-span-4 xl:block">
              <div className="sticky top-4 space-y-4">
                <section className=" ">
                  <div className="mt-4  md:mt-0 right-side md:ml-[18px] md:w-[300px]">
                    <SecondryWidget
                      iconUrl={`${process.env.Live_API_URL}/recruiterpostjob/staticGrowth.svg/2022/08/18/1660816388.svg`}
                      text2="HR Professional"
                      text3="Recognizing HR Excellence "
                      buttonText="Share your profile"
                      href="/share-your-profile"
                    />
                  </div>
                </section>

                <div className="mt-6    md:mt-0 right-side md:ml-[20px] md:w-[300px]">
                  <GoogleAd_300x250
                    path="/1064661/ASCENT_MREC1_HOME_300x250"
                    ads_Id="div-gpt-ad-1654231095099-0"
                    size={[[300, 250]]}
                  />
                </div>
                <section aria-labelledby="trending-heading">
                  <div className="rounded-lg bg-white shadow">
                    <div className="px-6 py-3">
                      <ArticleWithoutImgCollection
                        data={getarticlewithoutimagearticle.data.slice(8, 12)}
                        href={"/"}
                      />
                    </div>
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
  const forumData = await forumDetail(context.query.id);
  const props = {
    forumData,
  };
  return { props: { props } };
}

export default forumdetail;
