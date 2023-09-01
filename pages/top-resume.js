import Cookies from "js-cookie";
import { Circles } from "react-loader-spinner";
import React, { useEffect } from "react";
import { useState } from "react";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import SuccessModal from "../Components/Modal/SuccessModal";
import Head from "next/head";
import { useRouter } from "next/router";
import BreadCrumbs from "../Components/BreadCrumbs";

const Topresume = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();
  const [login, setLogin] = useState("");
  useEffect(() => {
    setLogin(Cookies.get("userLoggedIn"));
  }, []);
  const closeModalHandler = (modalType) => {
    setShowModal(false);
  };
  const fetchFile = async (file) => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );

    var formdata = new FormData();
    formdata.append("candidateId", Cookies.get("USERID") || "-");
    formdata.append("fileUploads", file);
    formdata.append("type", "topResume");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/UploadFile`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          setShowModal(true);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };
  const Logcheck = () => {
    if (!login) {
      Cookies.set("pathname", router.pathname);
      router.push("/times-ascent-signin");
    }
  };
  const pages = [
    {
      name: "Resume Writing",
      href: "/resume-writing",
      current: false,
    },
    {
      name: "Top Resume",
      href: "/top-resume",
      current: true,
    },
  ];
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Free CV & Resume reviews  by Top Resume experts - TimesAscent.com`}</title>
        <meta
          name="description"
          content={`Resume review helps you make it past the ATS by catching and suggesting fixes for more than 30 of the most common resume errors including formatting, word choice, measurable results and more. - TimesAscent.com`}
        />
        <link rel="canonical" href="https://timesascent.com/top-resume" />
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
          content="Free CV & Resume reviews  by Top Resume experts - TimesAscent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Resume review helps you make it past the ATS by catching and suggesting fixes for more than 30 of the most common resume errors including formatting, word choice, measurable results and more. - TimesAscent.com"
        />
        <meta property="og:url" content="https://timesascent.com/top-resume" />
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
          content="Free CV & Resume reviews  by Top Resume experts - TimesAscent.com"
        />
        <meta
          property="twitter:description"
          content="Resume review helps you make it past the ATS by catching and suggesting fixes for more than 30 of the most common resume errors including formatting, word choice, measurable results and more. - TimesAscent.com"
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
                  name: "Resume Writing",
                  item: "https://timesascent.com/resume-writing",
                },
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Top resume",
                  item: "https://timesascent.com/top-resume",
                },
              ],
            }),
          }}
        />
      </Head>

      <SuccessModal
        openModal={showModal}
        closeModal={() => closeModalHandler()}
        headingText="Thank you!!"
        subHeadingText="Your critique is on the way by top Resume. Our review will help you with tips on the design, structure and content of your resume."
        buttonText="OK"
      />
      <MainHeader />
      <div className="bg-white">
        <div className="mx-auto  py-8  sm:py-12  container">
          <BreadCrumbs data={pages} />
          <div className="mx-auto max-w-2xl  lg:max-w-none">
            <div className="grid grid-cols-1 items-center gap-y-10 gap-x-16 lg:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900">
                  Share your latest resume with us
                </h2>
                <div className="mt-4 text-black">
                  Enhance your accomplishments and grab the attention of
                  recruiters and employers. Get a free expert review for your
                  latest resume and stand out the right way.
                  <dd>
                    <li>Pick the correct format for your Resume</li>
                    <li>Stick with your summary and objectives</li>
                    <li>
                      Get convincing design and cover check for your Resume
                    </li>
                    <li>Increase the efficiency rate of your Resume</li>
                    <li>Get your most noticeable point highlighted rightly </li>
                  </dd>
                </div>
              </div>
              <div className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg bg-white">
                <img
                  src="/topresume/topresume.webp"
                  alt="topresume"
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div>
              <h1 className="mx-auto text-center text-gray-900 text-2xl lg:mt-12 font-bold tracking-tight mt-7">
                Why use Resume Check?
              </h1>

              <p className="mx-auto text-center text-black text-md lg:mt-4 tracking-tight lg:w-7xl mt-7">
                The hard truth is, according to the Wall Street Journal,
                approximately 75% of submitted resumes never make it into a
                hiring manager’s hands. Most companies use screening software
                called applicant tracking systems (or ATS) to filter and rank
                applicants. While the goal is to weed out less-qualified job
                seekers, some highly qualified candidates don’t make it past the
                ATS. Since an ATS scans resumes for precise job titles, skills
                and experience, the modern resume lives and dies by its specific
                phrasing and being error-free. Resume Check helps you make it
                past the ATS by catching and suggesting fixes for more than 30
                of the most common resume errors including formatting, word
                choice, measurable results and more.
              </p>
            </div>

            {!login ? (
              <div className="sm:col-span-2">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="mt-7  items-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 lg:w-2/3 lg:mx-auto lg:mt-12">
                    <div className="space-y-1 text-center">
                      <label htmlFor="file-upload">
                        <label htmlFor="file-upload">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400 cursor-pointer"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </label>
                      </label>

                      <label
                        className="text-sm text-gray-600"
                        htmlFor="file-upload"
                      >
                        <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                          <span
                            className="text-center mx-auto text-lg"
                            onClick={Logcheck}
                          >
                            Upload your resume
                          </span>
                        </label>
                      </label>
                      <p className="text-xs text-black">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            ) : (
              <div className="sm:col-span-2">
                <label htmlFor="file-upload" className="cursor-pointer">
                  <div className="mt-7  items-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6 lg:w-2/3 lg:mx-auto lg:mt-12">
                    <div className="space-y-1 text-center">
                      <label htmlFor="file-upload">
                        <label htmlFor="file-upload">
                          <svg
                            className="mx-auto h-12 w-12 text-gray-400 cursor-pointer"
                            stroke="currentColor"
                            fill="none"
                            viewBox="0 0 48 48"
                            aria-hidden="true"
                          >
                            <path
                              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </label>
                      </label>

                      <label
                        className="text-sm text-gray-600"
                        htmlFor="file-upload"
                      >
                        {loading ? (
                          <button
                            type="button"
                            class="flex mt-1 mb-1 items-center justify-center mx-auto"
                            disabled
                          >
                            <div role="status">
                              <svg
                                aria-hidden="true"
                                class="mr-0 w-12  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                                viewBox="0 0 100 101"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                  fill="currentColor"
                                />
                                <path
                                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                  fill="currentFill"
                                />
                              </svg>
                            </div>
                          </button>
                        ) : (
                          <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                            <span className="text-center mx-auto text-lg">
                              Upload your resume
                            </span>
                            <input
                              name="file-upload"
                              required
                              accept=".png, .jpg, .jpeg, .webp"
                              id="file-upload"
                              autoComplete="file-upload"
                              type="file"
                              onChange={(e) => {
                                fetchFile(e.target.files[0]);
                              }}
                              className="cursor-pointer sr-only"
                            />
                          </label>
                        )}
                      </label>
                      <p className="text-xs text-black">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </label>
              </div>
            )}

            <div className="mt-7  lg:mt-12 lg:flex lg:justify-evenly  sm:items-center md:mx-auto mx-auto md:text-center text-center">
              <div className="lg:block ">
                <div className="sm:flex-shrink-0">
                  <img
                    className="h-10 w-10 mx-auto sm:mx-auto mt-5"
                    src="/topresume/Upload.svg"
                    alt=""
                  />
                </div>
                <div className="mt-0 sm:mt-0 sm:ml-6 lg:mt-2 lg:ml-0">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Upload resume
                  </h3>
                  <p className="mt-1 text-sm text-black ">
                    Show us what you're working with
                  </p>
                </div>
              </div>
              <div className=" lg:block">
                <div className="sm:flex-shrink-0">
                  <img
                    className="h-10 w-10 mx-auto mt-5"
                    src="/topresume/Scan.svg"
                    alt=""
                  />
                </div>
                <div className="mt-0 sm:mt-0 sm:ml-6 lg:mt-2 lg:ml-0">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Scan resume
                  </h3>
                  <p className="mt-1 text-sm text-black">
                    Wait while the magic happens
                  </p>
                </div>
              </div>
              <div className=" lg:block">
                <div className="sm:flex-shrink-0">
                  <img
                    className="h-10 w-10 mx-auto mt-5"
                    src="/topresume/Result.svg"
                    alt=""
                  />
                </div>
                <div className="mt-0 sm:mt-0 sm:ml-2 lg:mt-2 lg:ml-0">
                  <h3 className="text-xl font-medium text-gray-900">Results</h3>
                  <p className="mt-1 text-sm text-black">
                    Get our experts analysis
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Topresume;
