import Footer from "../../Components/Footer";
import MainHeader from "../../Components/MainHeader";
import HeadingWithIcon, {
  HeadingWithIconH1,
} from "../../Components/HeadingUI/HeadingWithIcon";
import SecondryWidget from "../../Components/Widget/SecondryWidget";
import BreadCrumbs from "../../Components/BreadCrumbs";
import Head from "next/head";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
// import { useEffect, useState } from "react";
import FourZeroFour from "../../Components/FourZeroFour";
import LeadershipFactory from "../../Components/jobs/LeadershipFactory";
import ManagersCardMain from "../../Components/CardUI/ManagersCardMain";
import Image from "next/image";
// import { useRef } from "react";
// import ForherCarousel from "../../Components/Banner/ForherCarousel";
import PrimayWidgetGMI from "../../Components/Widget/PrimayWidgetGMI";
import ArticleCardGMI from "../../Components/CardUI/ArticleCardGMI";
import ManagersCardGMI from "../../Components/CardUI/ManagersCardGMI";
import HomeCarousel from "../../Components/CarouselBanner/HomeCarousel";
import { useRouter } from "next/router";

const pages = [
  {
    name: "Great Manager Institute",
    href: "/great-manager-institute",
    current: false,
  },
];

const widgetThree = {
  name: "Nominate yourself for Great People Manager Study™",
  description:
    "Opportunity to get recognised as one of the Top 100 Great People Managers.",
  src: "/greateManagers/GreatPeopleManagersStamp.webp",
  btnText: "Click for register",
  newTab: true,
  href: "https://app.greatmanagerinstitute.com/manager?utmSource=ETMicrosite",
  width: "w-10",
};

const widgetTwo = {
  name: "Nominate your organisation for Leadership Factories of India",
  description:
    "Get recognised as a Leadership Factory of India and become an employer of choice.",
  src: "/greateManagers/LeadershipFactoriesStamp.webp",
  btnText: "Click for register",
  newTab: true,
  width: "w-10",
  href: "https://forms.zohopublic.com/greatmanagerresearchconsulta/form/GreatPeopleManagerStudyExpressyourInterest1/formperma/WkgFMVDWwo0zuko8-h-xAXoEQFqoV1EAjPAdvy6WGV0?utmSource=ETMicrosite",
};
const index = ({ props }) => {
  if (props.isPageError) {
    return <FourZeroFour />;
  }

  const router = useRouter();
  const getForherSreenData = props?.GreatManagerInstituteJson.Article;
  const greatManagerInstituteJson =
    props?.GreatManagerInstituteJson.GeneralManager;
  const leadershipFactoryJson =
    props?.GreatManagerInstituteJson.LeadershipFactory;
  const gmiBanner = props?.GreatManagerInstituteJson.BannerImage;
  const certificationOfWinnersJson =
    props?.GreatManagerInstituteJson.GMIWinners;


  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Great Manager Institute – timesascent.com</title>
        <meta
          name="description"
          content={`Great Manager Institute lists the top 100 Great People Managers of 2023 on timesascent.com.`}
        />
        <link
          rel="canonical"
          href="https://timesascent.com/great-manager-institute"
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
        <meta property="og:title" content="Great Manager Institute" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Great Manager Institute lists the top 100 Great People Managers of 2023 on timesascent.com."
        />
        <meta
          property="og:url"
          content="https://timesascent.com/great-manager-institute"
        />
        <meta
          property="og:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta property="twitter:title" content="Great People Manager" />
        <meta
          property="twitter:description"
          content="Great Managers Institute lists the top 100 Great People Managers of 2023 on timesascent.com."
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
                  name: "Great Manager Institute",
                  item: `https://timesascent.com${router.asPath}`,
                },
              ],
            }),
          }}
        />
      </Head>

      <MainHeader />

      <HomeCarousel isMobile={props.isMobile} data={gmiBanner} />

      <main className="mt-6 container">
        <div>
          <BreadCrumbs data={pages} />
        </div>

        {/* guest article */}

        <div className="main md:flex md:justify-between box-border w-full py-4 md:py-6">
          <div className="md:w-[calc(100%-320px)]">
            <section>
              <div className="font-playfairDisplay">
                <HeadingWithIconH1
                  headingText="About Great Manager Institute®"
                  href="/great-manager-institute/about"
                />
              </div>
              <p>
                Great Manager Institute®(GMI) is a global lifetime digital coach
                and profiler for people managers. It aims to redefine people
                management and lead the people management revolution. Here at
                Great Manager Institute®, we use technology in the form of data
                analytics and community-driven programs to help shape the new
                generation of people managers.
              </p>
            </section>
            <section className="mt-6">
              <div className="flex justify-start items-center mb-4">
                <div className="font-playfairDisplay w-[calc(100%-70px)] sm:w-auto">
                  <HeadingWithIcon
                    headingText="India's Top 100 Great People Manager List (in alphabetical order)"
                    href="/great-manager-institute/top-100-great-people-managers-of-2023"
                  />
                </div>
                <div className={"ml-4 relative"}>
                  <Image
                    style={{ objectFit: "cover", borderRadius: "0.375rem" }}
                    src="/greateManagers/GreatPeopleManagersStamp.webp"
                    width={50}
                    height={50}
                    alt="Great People Managers"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {greatManagerInstituteJson.slice(0, 12).map((item, index) => {
                  return (
                    <ManagersCardMain
                      key={index}
                      data={item}
                      index={index + 1}
                    />
                  );
                })}
              </div>
            </section>

            <section className="mt-6">
              <div className="flex justify-start items-center mb-4">
                <div className="font-playfairDisplay w-[calc(100%-50px)] sm:w-auto">
                  <HeadingWithIcon
                    headingText="Leadership Factories of India (in alphabetical order)"
                    href="/great-manager-institute/leadership-factories-of-india"
                  />
                  <div className="font-medium text-sm">
                    Organizations with best-in-class leadership development
                    processes
                  </div>
                </div>

                <div className={"ml-4 relative w-[50px] h-[50px]"}>
                  <Image
                    style={{ objectFit: "cover", borderRadius: "0.375rem" }}
                    src="/greateManagers/LeadershipFactoriesStamp.webp"
                    width={50}
                    height={50}
                    alt="Great People Managers"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {leadershipFactoryJson.slice(0, 12)?.map((item, keyindex) => {
                  return <LeadershipFactory data={item} key={keyindex} />;
                })}
              </div>
            </section>

            <section className="mt-6">
              <div className="flex justify-start items-center mb-4">
                <div className="font-playfairDisplay w-[calc(100%-50px)] sm:w-auto">
                  <HeadingWithIcon
                    headingText="Certificate of Merit Winners"
                    href="/great-manager-institute/certificate-of-merit-winners"
                  />
                  <div className="font-medium text-sm">
                    Congratulations to all Managers who have received the
                    Certificate of Merit!
                  </div>
                </div>


              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {certificationOfWinnersJson
                  .slice(0, 8)
                  ?.map((item, keyindex) => {
                    return (
                      <ManagersCardGMI key={index} data={item} index={index} />
                    );
                  })}
              </div>
            </section>

            <section className="mt-6 mb-6">
              <div className="font-playfairDisplay">
                <HeadingWithIcon
                  headingText="Articles"
                // href="/articleslist/featured-articles"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {getForherSreenData.slice(0, 8)?.map((item) => (
                  <ArticleCardGMI key={item.ArticleId} data={item} />
                ))}
              </div>
            </section>
            <section className="mt-8 pt-8 border-t-2  border-dashed flex gap-4 flex-col sm:flex-row w-full items-center  justify-center sm:justify-between ">
              <div className="h-[250px] w-full  sm:w-[calc(100%-300px)]">
                <PrimayWidgetGMI {...widgetThree} />
              </div>

              <div className="w-[300px] bg-gray-50">
                <GoogleAd_300x250
                  path="/1064661/ta.com_mrec5_home"
                  ads_Id="div-gpt-ad-1674551209965-0"
                  size={[[300, 250]]}
                />
              </div>

              <div className="h-[250px] w-full sm:w-[calc(100%-300px)]">
                <PrimayWidgetGMI {...widgetTwo} />
              </div>


            </section>
          </div>

          <div className="right-side md:self-start md:sticky md:-top-60 md:w-[300px] md:ml-[20px]">
            <div className="py-4 md:mt-8 sm:py-0 sm:pb-4">
              <GoogleAd_300x250
                path="/1064661/ta.com_mrec1_job"
                ads_Id="div-gpt-ad-1674554579449-0"
                size={[[300, 250]]}
              />
            </div>
            <div className="mt-6">
              <SecondryWidget
                iconUrl="/mentorIcon/calender.png"
                newTab={true}
                text2="Managers 2023"
                text3="Top 100 Great People Managers of 2023"
                buttonText="Visit Link"
                href="https://www.greatmanagerinstitute.com/"
              />
            </div>
          </div>
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
    // const offerResponse = await offers();

    const GreatManagerInstitute = await fetch(
      `${process.env.LIVE_HOST}/json/MainGMIPageJSON.json`
    );
    const GreatManagerInstituteJson = await GreatManagerInstitute.json();

    props = {
      isMobile,
      GreatManagerInstituteJson,
    };
  } catch (err) {
    console.log("api error in GMI page");
    props = {
      isPageError: true,
    };
  }

  return { props: { props } };
}
export default index;
