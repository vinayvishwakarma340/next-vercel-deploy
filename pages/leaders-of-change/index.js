import Footer from "../../Components/Footer";
import MainHeader from "../../Components/MainHeader";
import HeadingWithIcon, {
  HeadingWithIconH1,
} from "../../Components/HeadingUI/HeadingWithIcon";
import SecondryWidget from "../../Components/Widget/SecondryWidget";
import BreadCrumbs from "../../Components/BreadCrumbs";
import Head from "next/head";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
import FourZeroFour from "../../Components/FourZeroFour";
// import LeadershipFactory from "../../Components/jobs/LeadershipFactory";
// import ManagersCardMain from "../../Components/CardUI/ManagersCardMain";
// import Image from "next/image";
// import ForherCarousel from "../../Components/Banner/ForherCarousel";
// import PrimayWidgetGMI from "../../Components/Widget/PrimayWidgetGMI";
import ArticleCardGMI from "../../Components/CardUI/ArticleCardGMI";
import GoogleAd_Hrec from "../../Components/GoogleAds/GoogleAd_Hrec";
import SkeletonHrec from "../../Components/Skeleton/SkeletonHrec";
import { useEffect, useState } from "react";
import LeadersOfChangeCard from "../../Components/CardUI/LeadersOfChangeCard";
// import { GetLeadersOfChangeList } from "../api/leadersOfChangeApi";
import Image from "next/image";
import { useRouter } from "next/router";

const pages = [
  {
    name: "Leaders of Change",
    // href: "/great-manager-institute",
    current: true,
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
  const [adShow, setadShow] = useState(false);

  const leadersOfChangeJson = props.LeadersOfChangeData.LeadersofChange;
  const recommendedRead =
    props.LeadersOfChangeData.CareersScreen.recommended_Articles;

  useEffect(() => {
    const addTimer = setTimeout(() => {
      setadShow(true);
    }, 4000);
  }, []);

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>
          Leaders of Change - Independence Day Special – timesascent.com
        </title>
        <meta
          name="description"
          content={`Independence Day Special Feature: Leaders of Change`}
        />
        <link
          rel="canonical"
          href="https://timesascent.com/leaders-of-change"
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
          content="Leaders of Change - Independence Day Special"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Independence Day Special Feature: Leaders of Change"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/leaders-of-change"
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
          content="Leaders of Change - Independence Day Special"
        />
        <meta
          property="twitter:description"
          content="Independence Day Special Feature: Leaders of Change"
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
                  name: "Leadership Factory",
                  item: `https://timesascent.com${router.asPath}`,
                },
              ],
            }),
          }}
        />
      </Head>

      <MainHeader />

      <div className="relative">
        <div className={"hidden sm:block relative"}>
          <Image
            priority
            style={{ objectFit: "cover" }}
            src="/leadersOfChange/Banner/LeadersOfChangeWeb.webp"
            width={2000}
            height={500}
            alt="Great People Managers"
          />
        </div>
        <div className={"block sm:hidden relative"}>
          <Image
            priority
            style={{ objectFit: "cover" }}
            src="/leadersOfChange/Banner/LeadersOfChangeMobile.webp"
            width={768}
            height={307}
            alt="Great People Managers"
          />
        </div>
      </div>

      {/* <ForherCarousel isMobile={props.isMobile} data={gmiBanner} /> */}

      <main className="mt-6 container">
        <div>
          <BreadCrumbs data={pages} />
        </div>

        {/* guest article */}

        <div className="main md:flex md:justify-between box-border w-full py-4 md:py-6">
          {/* <div className="md:w-[calc(100%-320px)]"> */}
          <div>
            <section>
              <div className="font-playfairDisplay">
                <HeadingWithIconH1
                  headingText="About Leaders of Change"
                  // href="/great-manager-institute/about"
                />
              </div>
              <p>
                From agriculture & services to banking and tech - remarkable
                contributions from a broad variety of sectors, industries and
                companies catapulated India's rise to superpower status. Their
                contributions became synonymous with the global perception. As
                they emboldened her success story, these sectors not only
                championed economic growth, but also gained the trust of the
                common man.
              </p>
            </section>

            <section className="mt-6">
              <div className="flex justify-start items-center mb-4">
                <div className="font-playfairDisplay w-[calc(100%-50px)] sm:w-auto">
                  <HeadingWithIcon
                    headingText="Leaders of Change"
                    // href="/great-manager-institute/leadership-factories-of-india"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {leadersOfChangeJson.map((item, keyindex) => {
                  return <LeadersOfChangeCard data={item} key={keyindex} />;
                })}
              </div>
            </section>

            <section className="mt-6">
              <div className="mx-[4%] lg:mx-0">
                {adShow ? (
                  <>
                    <div className=" hidden md:block ">
                      <GoogleAd_Hrec
                        path="/1064661/ta.com_hrec1_JobDetails"
                        ads_Id="div-gpt-ad-1674637758774-0"
                        size={[[728, 90]]}
                      />
                    </div>
                    <div className="block md:hidden">
                      <GoogleAd_Hrec
                        path="/1064661/ta.com_hrec1_mob_JobDetails"
                        ads_Id="div-gpt-ad-1674637851556-0"
                        size={[[320, 50]]}
                      />
                    </div>
                  </>
                ) : (
                  <SkeletonHrec />
                )}
              </div>
            </section>

            <section className="mt-6 mb-6">
              <div className="font-playfairDisplay">
                <HeadingWithIcon
                  headingText="Recommended Read"
                  // href="/articleslist/featured-articles"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {recommendedRead.slice(0, 10)?.map((item) => (
                  <ArticleCardGMI key={item.ArticleId} data={item} />
                ))}
              </div>
            </section>
            <section className="mt-8 pt-8 border-t-2  border-dashed flex gap-4 flex-col lg:flex-row w-full items-center  justify-center sm:justify-between">
              <div className="w-[300px] bg-gray-50">
                <GoogleAd_300x250
                  path="/1064661/ta.com_mrec5_home"
                  ads_Id="div-gpt-ad-1674551209965-0"
                  size={[[300, 250]]}
                />
              </div>
              <div className="h-[250px] w-full  sm:w-[calc(100%-300px)]">
                <SecondryWidget
                  text2={"Corporate Care"}
                  text3={
                    "Share your stories and let the world know about your corporate Initiatives"
                  }
                  buttonText={"Share Now"}
                  href="/corporates-care-request-form"
                />
              </div>

              <div className="h-[250px] w-full sm:w-[calc(100%-300px)]">
                <SecondryWidget
                  text2="HR Professional"
                  text3="Share your story with us and motivate people around the world."
                  buttonText="Share your profile"
                  href="/share-your-profile"
                />
              </div>
              <div className="w-[300px] bg-gray-50">
                <GoogleAd_300x250
                  path="/1064661/ta.com_mrec1_job"
                  ads_Id="div-gpt-ad-1674554579449-0"
                  size={[[300, 250]]}
                />
              </div>
            </section>
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

    // const LeadersOfChangeData = await GetLeadersOfChangeList("");
    // const RecommendedReadResponse = await fetch(
    //   `${process.env.LIVE_HOST}/json/careerscreen.json`
    // );
    // const RecommendedReadData = await RecommendedReadResponse.json();

    const LeadersOfChangeResponse = await fetch(
      "https://timesascent.com/json/new/LeadersOfChangeMainJSON.json"
    );
    const LeadersOfChangeData = await LeadersOfChangeResponse.json();

    props = {
      isMobile,
      LeadersOfChangeData,
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
