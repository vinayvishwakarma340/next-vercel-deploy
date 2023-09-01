import React from "react";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import { AiOutlineArrowRight } from "react-icons/ai";
import Head from "next/head";
import GoogleAd_728x90 from "../Components/GoogleAds/GoogleAd_728x90";

const videolist = ({ props }) => {
  const Jobsurls = [
    {
      link: "https://www.youtube.com/embed/S36OoNt",
      description: "Trending Jobs 28th March - 1st April 2022",
    },
    {
      link: "https://www.youtube.com/embed/3YqJNgzlHDg",
      description: "Trending Jobs 21st March - 25th March 2022",
    },
    {
      link: "https://www.youtube.com/embed/SxaFiIt6uvU",
      description: "Jobs In Focus",
    },
    {
      link: "https://www.youtube.com/embed/kehItH3MHAo",
      description: "Trending Article Of The Day",
    },
  ];

  const Hrurl = [
    {
      link: "https://www.youtube.com/embed/T-P7XxpflyI",
      description: "Jumboking's team-building strategy with Mr. Dheeraj Gupta",
    },
    {
      link: "https://www.youtube.com/embed/vPlrNOe1EeE",
      description: "Back in the Game - Second Career Opportunity for Women",
    },
    {
      link: "https://www.youtube.com/embed/fLSSMinQLWA",
      description: "Career Pause : An out of Cubicle Enrichment Opportunity ",
    },
    {
      link: "https://www.youtube.com/embed/r0O6tbVcsog",
      description: " Returnship Readiness ",
    },
  ];

  const Articleurl = [
    {
      link: "https://www.youtube.com/embed/zdg0g_SBD3M",
      description: "Career Pause : Top Trending Guest Articles of the Week ",
    },
    {
      link: "https://www.youtube.com/embed/cMouuJP6Hu4",
      description: "Top Trending Guest Articles of the Week ",
    },
    {
      link: "https://www.youtube.com/embed/NQvrMLTbP0A",
      description: "Top Trending Article of The Day  ",
    },
    {
      link: "https://www.youtube.com/embed/NQvrMLTbP0A",
      description: "Top Trending Article of The Day  ",
    },
  ];

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Latest videos - timesascent.com`}</title>
        <meta
          name="description"
          content={`Check out the latest videos related to trending jobs, articles & HR Professionals`}
        />
        <link rel="canonical" href="https://timesascent.com/videolist" />
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
        <meta property="og:title" content="Latest videos - timesascent.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Check out the latest videos related to trending jobs, articles & HR Professionals"
        />
        <meta property="og:url" content="https://timesascent.com/videolist" />
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
          content="Latest videos - timesascent.com"
        />
        <meta
          property="twitter:description"
          content="Check out the latest videos related to trending jobs, articles & HR Professionals"
        />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:site"
          content="https://twitter.com/@timesascent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
      </Head>

      <MainHeader />
      <div className="relative py-4 md:py-6 lg:py-8 container">
        {/* -------------------------- trending jobs section ------------------ */}
        <div>
          <div>
            <div className="py-4">
              <div className="px-8   text-xl font-medium text-gray-900">
                Our top Video recommendations
              </div>

              <div className="px-8    text-gray-900 dark:text-gray-400 ">
                With the help of our video recommendation section, discover the
                most popular videos covering HR profiles, trending jobs, and
                articles.
              </div>
            </div>

            <div className="px-8 font-semibold   sm:text-base   text-gray-900 ">
              Trending Jobs
            </div>
            <div className="sm:flex  sm:justify-between  py-1 ">
              <div className="px-8 text-base font-normal text-gray-900 dark:text-gray-400">
                Videos for Career Centric recruitment and diverse employment
                type.
              </div>
              <div className="flex   text-base font-medium justify-end xl:pr-12">
                <div className="text-red-500 cursor-pointer"> Watch More </div>
                <div className="ml-2 my-auto">
                  <AiOutlineArrowRight className="text-red-500" />
                </div>
              </div>
            </div>

            <div className="border border-gray-200"></div>
          </div>
          <div className="flex xl:overflow-hidden overflow-auto gap-3 xl:justify-center   p-4 ">
            {Jobsurls.map((item) => {
              return (
                <div>
                  <div className=" flex-shrink-0 w-[300px]">
                    <iframe
                      className="w-sm rounded-lg"
                      src={item.link}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="py-2 text-sm ">
                    <p className="break-all text-sm w-[300px]">
                      {item.description}{" "}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* -------------------------- trending jobs section ends here ------------------ */}

        {/* -------------------------- Hr proffesionals section ------------------ */}

        <div>
          <div>
            <div className="px-8     sm:text-base font-semibold  text-gray-900 ">
              HR Professional
            </div>
            <div className="sm:flex  sm:justify-between  py-1 ">
              <div className="px-8 text-base font-normal text-gray-900 dark:text-gray-400">
                Videos of HR Specialist for information on diverse scenarios,
                tactics, and corporate world insights.
              </div>
              <div className="flex   text-base font-medium justify-end xl:pr-12">
                <div className="text-red-500 cursor-pointer"> Watch More </div>
                <div className="ml-2 my-auto">
                  <AiOutlineArrowRight className="text-red-500" />
                </div>
              </div>
            </div>

            <div className="border border-gray-200"></div>
          </div>
          <div className="flex xl:overflow-hidden  overflow-auto gap-3 xl:justify-center p-4 ">
            {Hrurl.map((item) => {
              return (
                <div>
                  <div className="flex-shrink-0">
                    <iframe
                      className="w-sm rounded-lg"
                      src={item.link}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="py-2 text-sm   ">
                    <p className="break-all text-sm w-[300px]">
                      {item.description}{" "}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* -------------------------- Hr proffesionals ends here ------------------ */}

        <div>
          <div className="  m-auto sm:mb-0 mb-2 sm:mt-0 mt-2 flex justify-center items-center">
            <GoogleAd_728x90
              isMobile={props.isMobile}
              path="/22637491760/timesascent.com_erelego_ap_d_728x90"
              ads_Id="div-gpt-ad-1666337275945-0"
            />
          </div>
        </div>

        {/* -------------------------- Articles section starts here ------------------ */}

        <div>
          <div>
            <div className="px-8  text-sm sm:text-base font-semibold  text-gray-900 ">
              Articles
            </div>
            <div className="sm:flex  sm:justify-between  py-1 ">
              <div className="px-8 text-base font-normal text-gray-900 dark:text-gray-400">
                Stay up to date with the most popular and trending weekly and
                daily Articles.
              </div>
              <div className="flex   text-base font-medium justify-end xl:pr-12">
                <div className="text-red-500 cursor-pointer"> Watch More </div>
                <div className="ml-2 my-auto">
                  <AiOutlineArrowRight className="text-red-500" />
                </div>
              </div>
            </div>

            <div className="border border-gray-200"></div>
          </div>
          <div className="flex xl:overflow-hidden overflow-auto gap-3 xl:justify-center p-4 ">
            {Articleurl.map((item) => {
              return (
                <div>
                  <div className="flex-shrink-0">
                    <iframe
                      className="w-sm rounded-lg"
                      src={item.link}
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="py-2 text-sm   ">
                    <p className="break-all text-sm w-[300px]">
                      {item.description}{" "}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* -------------------------- Articles section ends here ------------------ */}
      </div>
      <Footer />
    </div>
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

  const props = {
    isMobile: isMobile,
  };
  return { props: { props } };
}
export default videolist;
