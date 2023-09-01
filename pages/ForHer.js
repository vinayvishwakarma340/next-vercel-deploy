import Footer from "../Components/Footer";
import BannerForHer from "../Components/Banner/BannerForHer";
import MainHeader from "../Components/MainHeader";
import ArticleCard from "../Components/CardUI/ArticleCard";
import ForherOffers from "../Components/CardUI/ForherOffers";
import ArticleCardWithoutImg from "../Components/CardUI/ArticleCardWithoutImg";
import SecondryWidget from "../Components/Widget/SecondryWidget";
import CourseCard from "../Components/CardUI/CourseCard";
import InspirationalStoriesCard from "../Components/CardUI/InspirationalStoriesCard";
import EventCard from "../Components/CardUI/EventCard";
import HeadingWithIcon from "../Components/HeadingUI/HeadingWithIcon";
import BreadCrumbs from "../Components/BreadCrumbs";
import Head from "next/head";
import PrimayWidgetNew from "../Components/Widget/PrimayWidgetNew";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";
import GoogleAd_BHrec from "../Components/GoogleAds/GoogleAd_BHrec";
import JobEventCard from "../Components/jobs/JobEventCard";
import FreelancerWidget from "../Components/Widget/FreelancerWidget";
import { useEffect, useState } from "react";
import * as gtag from "../lib/gtag";
import { useRouter } from "next/router";
import SkeletonMrec from "../Components/Skeleton/SkeletonMrec";
import SkeletonBHrec from "../Components/Skeleton/SkeletonBHrec";
import FourZeroFour from "../Components/FourZeroFour";
// import ForherCarousel from "../Components/Banner/ForherCarousel";

import WriteForUs from "../Components/Widget/WriteForUs";
import ForherYoutube from "../Components/CardUI/ForherYoutube";
import HomeCarousel from "../Components/CarouselBanner/HomeCarousel";


const widgetOne = {
  name: "FREE Mentorship Advise",
  description: "Free mentorship advice from top mentors",
  src: "/mentorIcon/Mentor.webp",
  btnText: "Connect With Mentors",
  href: "/mentorship/mentorkart",
};
const freelancerWidgetData = {
  heading: "Work Remotely",
  description: " Get a network of certified and experienced freelancers",
  buttonText: "Post a requirement",
};

const pages = [{ name: "For Her", href: "/ForHer", current: false }];

const forHer = ({ props }) => {
  if (props.isPageError) {
    return <FourZeroFour />;
  }
  const getForherSreenData = props?.getForherSreenData;
  const offerData = props.offerResponse.data;
  const dataYoutube = props.videoData.data;

  const router = useRouter();
  const [adShow, setadShow] = useState(false);
  const [youtubeUrl, setYoutubeUrl] = useState([]);

  useEffect(() => {

    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    Event();
    setYoutubeUrl([
      "https://www.youtube.com/embed/2ob2rxmjKJ4",
      "https://www.youtube.com/embed/Ub15CTcvDKE",
      "https://www.youtube.com/embed/AhMzRwr_-MU",
      "https://www.youtube.com/embed/8vM1USZdXRg",
      "https://www.youtube.com/embed/jp9hexk5KKE",
      "https://www.youtube.com/embed/r0O6tbVcsog",
    ]);
    return () => clearTimeout(timeout)
  }, [
    getForherSreenData.data.jobs,
    getForherSreenData.data.ForHerGuestarticle,
    getForherSreenData.data.articles,
  ]);



  const Event = () => {
    const pageLoadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
    gtag.pageSpeedEvent({
      action: "Forher Page Speed", pageTitle: "Forher page", load_time: pageLoadTime
    });

    {
      getForherSreenData.data.jobs.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Company Impressions",
          label: router.asPath,
        });
      });
    }
    {
      getForherSreenData.data.jobs.map((item) => {
        gtag.event({
          action: item.CompanyName,
          category: "Job Impressions",
          label: item.JobId,
        });
      });
    }
    {
      getForherSreenData.data.ForHerGuestarticle.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
    {
      getForherSreenData.data.articles.map((item) => {
        gtag.event({
          action: item.title,
          category: "Article Impressions",
          label: item.ArticleId,
        });
      });
    }
  };





  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Career options for women - Times Ascent`}</title>
        <meta
          name="description"
          content={`For her is a new section at Times Ascent which showcases career options and guidance for working women and women  coming to work after a long break`}
        />
        <link rel="canonical" href="https://timesascent.com/ForHer" />
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
          content="Career options for women - Times Ascent"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="For her is a new section at Times Ascent which showcases career options and guidance for working women and women  coming to work after a long break"
        />
        <meta property="og:url" content="https://timesascent.com/ForHer" />
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
          content="Career options for women - Times Ascent"
        />
        <meta
          property="twitter:description"
          content="For her is a new section at Times Ascent which showcases career options and guidance for working women and women  coming to work after a long break"
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
                  position: 3,
                  name: "For Her",
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
              "@type": "ItemList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  item: {
                    "@type": "VideoObject",
                    "@id": "#video1",
                    name: "Check out the Careers by Moms for Moms #backtowork",
                    description:
                      "Visit now to know more about the Best Careers for Moms on https://timesascent.com/ForHer",
                    thumbnailUrl:
                      "https://i.ytimg.com/vi/Pw6ahMKvJHo/default.jpg",
                    uploadDate: "2022-05-04T07:40:39Z",
                    duration: "PT58S",
                    embedUrl: "https://www.youtube.com/embed/Pw6ahMKvJHo",
                    interactionCount: "168",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  item: {
                    "@type": "VideoObject",
                    "@id": "#video2",
                    name: "| Returnship Readiness |",
                    description:
                      "Going back to work after a career break, and the thought of clearing interviews - can make anyone jittery. It also made Sanya, the mother of a young toddler, nervous. Today, Sanya has aced her interviews and works for FlexiBees - a flexible talent platform for Women and Mothers who want to work part-time and remotely to balance their work and life.  She shares her top tips that worked for her :-  Before the interview -   - Do breathing exercises to relax and feel confident - Visualize success and walk confidently into the Interview, even if it is on video - Prepare on the company, their products or services, their vision, and about the role.   At the interview -  - Build a personal connection with the panel - Be brave and sell yourself. Your Skills and unique stories that are relevant for the job are what the interviewers are looking for    #timesascent #career #growth #mothersday #mothersdaygift #love #happymothersday #mom #mother #family #motherhood #momlife #careerbreak #careerbreakjourney #postcareerbreak #returnship #prepartion #jobinterview #workfromhome #workingmom #flexibees",
                    thumbnailUrl:
                      "https://i.ytimg.com/vi/r0O6tbVcsog/default.jpg",
                    uploadDate: "2022-05-02T08:34:59Z",
                    duration: "PT1M45S",
                    embedUrl: "https://www.youtube.com/embed/r0O6tbVcsog",
                    interactionCount: "141",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  item: {
                    "@type": "VideoObject",
                    "@id": "#video3",
                    name: "Check out the Best Flexible Jobs for a Working Mothers #backtowork",
                    description:
                      "Visit now to know more about the Best Flexible Jobs for Mothers on https://timesascent.com/ForHer",
                    thumbnailUrl:
                      "https://i.ytimg.com/vi/qMex0i8uaF0/default.jpg",
                    uploadDate: "2022-05-04T07:34:43Z",
                    duration: "PT55S",
                    embedUrl: "https://www.youtube.com/embed/qMex0i8uaF0",
                    interactionCount: "94",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  item: {
                    "@type": "VideoObject",
                    "@id": "#video4",
                    name: "| Back in the Game - Second Career Opportunity for Women |",
                    description:
                      "Returning from sabbatical is a brave decision but most likely you cannot commit to a full time job due to family and social responsibilities. You are not alone. 6 out of 10 women returning from sabbatical opt for self-employment over regular jobs.  If you have a sense of style and aesthetics, passion for helping people change their lives and a burning desire to become your own boss, then Image Consulting and Soft Skills Training could be a great option for you.  Suman Agarwal, the most senior Image Consultant in the Indian Subcontinent and Director of Image Consulting Business Institute (ICBI) talks about the highlights of this excellent second career opportunities in this video.",
                    thumbnailUrl:
                      "https://i.ytimg.com/vi/vPlrNOe1EeE/default.jpg",
                    uploadDate: "2022-05-07T13:23:03Z",
                    duration: "PT2M42S",
                    embedUrl: "https://www.youtube.com/embed/vPlrNOe1EeE",
                    interactionCount: "100",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  item: {
                    "@type": "VideoObject",
                    "@id": "#video5",
                    name: "| Career Pause : An out of Cubicle Enrichment Opportunity |",
                    description:
                      "Returning to career can be quite a daunting task... Let's know from Dipika Trehan, Founder Corporate Diva, some commandments from her journey, that made a mother bounce back,  drive success and thrive.",
                    thumbnailUrl:
                      "https://i.ytimg.com/vi/fLSSMinQLWA/default.jpg",
                    uploadDate: "2022-05-07T12:48:27Z",
                    duration: "PT6M42S",
                    embedUrl: "https://www.youtube.com/embed/fLSSMinQLWA",
                    interactionCount: "128",
                  },
                },
                {
                  "@type": "ListItem",
                  position: 6,
                  item: {
                    "@type": "VideoObject",
                    "@id": "#video6",
                    name: "Check out the Best Courses for Mothers #backtowork",
                    description:
                      "Visit now to know more about the Best Courses for Mothers on https://timesascent.com/ForHer",
                    thumbnailUrl:
                      "https://i.ytimg.com/vi/68YpHm1_qQk/default.jpg",
                    uploadDate: "2022-05-04T07:29:04Z",
                    duration: "PT1M1S",
                    embedUrl: "https://www.youtube.com/embed/68YpHm1_qQk",
                    interactionCount: "49",
                  },
                },
              ],
            }),
          }}
        />
      </Head>

      <MainHeader />

      {/* {!props.isMobile ? (
        <div className={" relative"}>
          <Image
            style={{ objectFit: "cover" }}
            src="/Banners/forHerBanner.webp"
            width={1600}
            height={400}
            alt="For her Banner"
          />
        </div>
      ) : (
        <div className={" relative"}>
          <Image
            style={{ objectFit: "cover" }}
            src="/Banners/forHerBannerMob.webp"
            width={768}
            height={307}
            alt="For her Banner"
          />
        </div>
      )} */}
      <HomeCarousel
        isMobile={props.isMobile}
        data={props.bannerResponse.data}
      />

      <BannerForHer />

      <main className=" mt-6 container">
        <div className="mb-6">
          <BreadCrumbs data={pages} />
        </div>

        {/* guest article */}
        <section className="mt-6 md:flex justify-between items-center w-full">
          <div className=" w-full  md:w-[calc(100%-320px)]">
            <div className="">
              <HeadingWithIcon
                headingText="Guest Articles"
                href="/articleslist/featured-articles"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {getForherSreenData.data.ForHerGuestarticle.slice(0, 4)?.map(
                  (item) => (
                    <ArticleCard key={item.ArticleId} data={item} />
                  )
                )}
              </div>
              {/* <div className="flex justify-end mt-1">
                <a
                  href="/articleslist/featured-articles"
                  className="text-sm hover:underline text-timesPurple"
                >
                  Display more Articles &rarr;
                </a>
              </div> */}
            </div>
          </div>
          <div className=" mt-6 sm:mt-0">
            {adShow ? (
              <GoogleAd_300x250
                path="/1064661/ta.com_mrec1_For_Her"
                ads_Id="div-gpt-ad-1674559345473-0"
                size={[[300, 250]]}
              />
            ) : (
              <SkeletonMrec />
            )}
          </div>
        </section>

        <section className="mt-6 md:flex justify-between items-center w-full">
          <div className=" w-full  md:w-[calc(100%-320px)]">
            <div className="">
              <HeadingWithIcon
                headingText="Popular Courses"
                href="/popular-courses"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {getForherSreenData.data.course
                  .slice(0, 4)
                  .map((item, index) => {
                    return (
                      <CourseCard
                        isMobile={props.isMobile}
                        key={index}
                        data={item}
                      />
                    );
                  })}
              </div>
              {/* <div className="flex justify-end mt-1">
                <a
                  href="/popular-courses"
                  className="text-sm hover:underline text-timesPurple"
                >
                  Show Popular Courses &rarr;
                </a>
              </div> */}
            </div>
          </div>

          <div className="m-auto mt-6 sm:m-0 md:w-[300px] h-[250px]  flex items-center text-center">
            <SecondryWidget
              iconUrl="/mentorIcon/calender.png"
              text2="Events"
              text3="Looking out to host your Event Online ? Get the Desired Audience for your Event"
              buttonText="List Your Event"
              href="/listyourevent"
            />
          </div>
        </section>

        <section className="mt-6 md:flex justify-between items-center w-full">
          <div className=" w-full  md:w-[calc(100%-320px)]">
            <>
              <HeadingWithIcon
                headingText="Recommended Videos"
                href="/recommended-videos"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
                {dataYoutube.slice(0, 6).map((item, index) => {
                  return (
                    <ForherYoutube
                      isMobile={props.isMobile}
                      key={index}
                      url={`${item.YoutubeUrl}?autoplay=1&mute=1`}
                      image={item.Image}
                    />
                  );
                })}
              </div>
            </>
          </div>
          <div className=" mt-6  ">
            {adShow ? (
              <GoogleAd_300x250
                path="/1064661/ta.com_mrec2_For_Her"
                ads_Id="div-gpt-ad-1674559443586-0"
                size={[[300, 250]]}
              />
            ) : (
              <SkeletonMrec />
            )}
          </div>
        </section>

        <section className="mt-8 py-6 border-y-2 border-dashed">
          <HeadingWithIcon
            headingText="Trending Articles For Women"
            href={"/articleslist/articles-for-her"}
          />
          <ul
            role="list"
            className=" divide-gray-200 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 "
          >
            {getForherSreenData.data.articles.slice(0, 5).map((item, index) => {
              return <ArticleCardWithoutImg key={index} data={item} />;
            })}
          </ul>
          {/* <div className="flex justify-end mt-1">
            <a
              href="/articleslist/articles-for-her"
              className="text-sm hover:underline text-timesPurple"
            >
              Display more Articles &rarr;
            </a>
          </div> */}
        </section>
        <div className="mt-12">
          {adShow ? (
            <>
              <div className=" hidden md:block ">
                <GoogleAd_BHrec
                  path="/1064661/ta.com_bhrec2_For_Her"
                  ads_Id="div-gpt-ad-1674564189159-0"
                  size={[[750, 200]]}
                />
              </div>
              <div className="block md:hidden">
                <GoogleAd_BHrec
                  path="/1064661/ta.com_bhrec2_Mob_For_Her"
                  ads_Id="div-gpt-ad-1674564268497-0"
                  size={[[320, 100]]}
                />
              </div>
            </>
          ) : (
            <SkeletonBHrec />
          )}
        </div>

        <section className="mt-6 md:flex justify-between items-center w-full">
          <div className=" w-full  md:w-[calc(100%-320px)]">
            <div className="">
              <HeadingWithIcon
                headingText="Recent Events"
                href="/event-list/recent-events"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {getForherSreenData.data.events
                  .slice(0, 4)
                  .map((item, index) => {
                    return <EventCard key={index} data={item} />;
                  })}
              </div>
            </div>
          </div>
          <div className="mt-6 md:w-[300px] md:ml-[20px]">
            <PrimayWidgetNew {...widgetOne} />
          </div>
        </section>

        <section className="mt-6 md:flex justify-between items-center w-full">
          <div className=" w-full  md:w-[calc(100%-320px)]">
            <div className="">
              <HeadingWithIcon
                headingText="Latest Jobs For Women"
                href="/latest-jobs-for-her"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {getForherSreenData.data.jobs.slice(0, 4).map((item, index) => {
                  return (
                    <div className="">
                      <JobEventCard
                        device={props.isMobile ? "Mobile" : "Desktop"}
                        key={index}
                        data={item}
                      />
                    </div>
                  );
                })}
              </div>
              {/* <div className="flex justify-end mt-2">
                <a
                  href="/latest-jobs-for-her"
                  className="text-sm hover:underline text-timesPurple"
                >
                  Find your job &rarr;
                </a>
              </div> */}
            </div>
          </div>
          <div className="mt-6 sm:w-[300px] m-auto sm:m-0 ">
            {adShow ? (
              <GoogleAd_300x250
                path="/1064661/ta.com_mrec3_For_Her"
                ads_Id="div-gpt-ad-1674559519394-0"
                size={[[300, 250]]}
              />
            ) : (
              <SkeletonMrec />
            )}
          </div>
        </section>

        {/* ----------------------- Forher offer section start -------------------------------------- */}

        <section className="mt-6 md:flex justify-between items-center w-full">
          <div className=" w-full  md:w-[calc(100%-320px)]">
            <div className="">
              <HeadingWithIcon headingText="Offers" href="/offer-list" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {offerData.slice(0, 4)?.map((item) => (
                  <ForherOffers key={item.id} data={item} />
                ))}
              </div>
              {/* <div className="flex justify-end mt-1">
                <a
                  href="/articleslist/featured-articles"
                  className="text-sm hover:underline text-timesPurple"
                >
                  Display more Articles &rarr;
                </a>
              </div> */}
            </div>
          </div>
          {/* <div className=" mt-6 sm:mt-0">
            {adShow ? (
              <GoogleAd_300x250
                path="/22637491760/timesascent.com_erelego_d_ap_300x250"
                ads_Id="div-gpt-ad-1674643828785-0"
                size={[[300, 250]]}
              />
            ) : (
              <SkeletonMrec />
            )}
          </div> */}
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

        {/* ----------------------- Forher offer section end ------------------------ */}

        <section className="mt-10 md:flex justify-between items-center w-full">
          <div className=" w-full  md:w-[calc(100%-320px)]">
            <div className=" ">
              <HeadingWithIcon
                headingText="Inspirational Stories"
                href="/articleslist/inspirational-stories"
              />
              <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {getForherSreenData.data.Inspirationalstories.slice(0, 4).map(
                  (item, index) => {
                    return <InspirationalStoriesCard key={index} data={item} />;
                  }
                )}
              </div>
            </div>
          </div>
          <div className="mt-6 sm:ml-[20px] sm:mt-10 md:w-[300px]">
            <FreelancerWidget {...freelancerWidgetData} />
          </div>
        </section>

        <div className="my-6">
          {adShow ? (
            <>
              <div className=" hidden md:block ">
                <GoogleAd_BHrec
                  path="/1064661/ta.com_bhrec1_For_Her"
                  ads_Id="div-gpt-ad-1674564106446-0"
                  size={[[750, 200]]}
                />
              </div>
              <div className="block md:hidden">
                <GoogleAd_BHrec
                  path="/1064661/ta.com_bhrec1_Mob_For_Her"
                  ads_Id="div-gpt-ad-1674564023970-0"
                  size={[[320, 100]]}
                />
              </div>
            </>
          ) : (
            <SkeletonBHrec />
          )}
        </div>
      </main>

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
  let props = {};
  try {
    // const bannerResponse = await bannerData("forher");

    const forHerMainJson = await fetch(`${process.env.LIVE_HOST}/json/new/ForherPage.json`);

    const { BannerImageByPageName: bannerResponse, WecareoffFrontDetail: offerResponse, ForHerVideoList: videoData, getForherSreenData } = await forHerMainJson.json();


    // const ForherBanner = await fetch(
    //   `${process.env.LIVE_HOST}/json/ForherBanner.json`
    // );
    // const bannerResponse = await ForherBanner.json();

    // const offerResponse = await offers();

    // const forherOffer = await fetch(
    //   `${process.env.LIVE_HOST}/json/forherOffer.json`
    // );
    // const offerResponse = await forherOffer.json();

    // const videoData = await videoResponse();
    // const forherYoutubeVideo = await fetch(
    //   `${process.env.LIVE_HOST}/json/forherYoutubeVideo.json`
    // );
    // const videoData = await forherYoutubeVideo.json();

    // const getForher = await fetch(
    //   `${process.env.LIVE_HOST}/json/getForherSreenData.json`
    // );
    // const getForherSreenData = await getForher.json();
    props = {
      isMobile,
      getForherSreenData,
      bannerResponse,
      offerResponse,
      videoData,
    };
  } catch (err) {
    console.log("api error in forher page");
    props = {
      isPageError: true,
    };
  }

  return { props: { props } };
}
export default forHer;
