import Footer from "../../Components/Footer";
import MainHeader from "../../Components/MainHeader";
import { HeadingWithIconH1 } from "../../Components/HeadingUI/HeadingWithIcon";
// import SecondryWidget from "../../Components/Widget/SecondryWidget";
// import BreadCrumbs from "../../Components/BreadCrumbs";
import Head from "next/head";
// import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
import FourZeroFour from "../../Components/FourZeroFour";
import Image from "next/image";
// import ForherCarousel from "../../Components/Banner/ForherCarousel";
// import ArticleCardGMI from "../../Components/CardUI/ArticleCardGMI";
import { useEffect, useState } from "react";
import { GetLeadersOfChangeBySeoUrl } from "../api/leadersOfChangeApi";

// const pages = [
//   {
//     name: "Great Manager Institute",
//     href: "/great-manager-institute",
//     current: false,
//   },
// ];

// const widgetThree = {
//   name: "Nominate yourself for Great People Manager Study™",
//   description:
//     "Opportunity to get recognised as one of the Top 100 Great People Managers.",
//   src: "/greateManagers/GreatPeopleManagersStamp.webp",
//   btnText: "Click for register",
//   newTab: true,
//   href: "https://app.greatmanagerinstitute.com/manager?utmSource=ETMicrosite",
//   width: "w-10",
// };

// const widgetTwo = {
//   name: "Nominate your organisation for Leadership Factories of India",
//   description:
//     "Get recognised as a Leadership Factory of India and become an employer of choice.",
//   src: "/greateManagers/LeadershipFactoriesStamp.webp",
//   btnText: "Click for register",
//   newTab: true,
//   width: "w-10",
//   href: "https://forms.zohopublic.com/greatmanagerresearchconsulta/form/GreatPeopleManagerStudyExpressyourInterest1/formperma/WkgFMVDWwo0zuko8-h-xAXoEQFqoV1EAjPAdvy6WGV0?utmSource=ETMicrosite",
// };
const index = ({ props }) => {
  if (props.isPageError) {
    return <FourZeroFour />;
  }

  //   const [adShow, setadShow] = useState(false);
  //   const getForherSreenData = props?.GreatManagerInstituteJson.Article;
  //   const leadershipFactoryJson =
  //     props?.GreatManagerInstituteJson.LeadershipFactory;
  const leadersOfChangeDetail = props?.GetLeadersOfChangeData.data;

  //   useEffect(() => {
  //     const addTimer = setTimeout(() => {
  //       setadShow(true);
  //     }, 4000);
  //   }, []);


  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{leadersOfChangeDetail.MetaTitle}</title>
        <meta
          name="description"
          content={leadersOfChangeDetail.MetaDescription}
        />
        <link
          rel="canonical"
          href={`https://timesascent.com${leadersOfChangeDetail.SeoURL}`}
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
        <meta property="og:title" content={leadersOfChangeDetail.MetaTitle} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={leadersOfChangeDetail.MetaDescription}
        />
        <meta
          property="og:url"
          content={`https://timesascent.com${leadersOfChangeDetail.SeoURL}`}
        />
        <meta
          property="og:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta property="twitter:title" content={leadersOfChangeDetail.MetaTitle} />
        <meta
          property="twitter:description"
          content={leadersOfChangeDetail.MetaDescription}
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

      {/* <div className="my-6 container">
        <BreadCrumbs data={pages} />
      </div> */}
      {/* <div className="relative">
        <ForherCarousel isMobile={props.isMobile} data={gmiBanner} />
      </div> */}
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

      <main className="mt-6 container">
        {/* guest article */}

        <div className="main relative box-border w-full py-4 md:py-6">
          {/* <div className="md:w-[calc(100%-320px)]"> */}
          <div>
            <section>
              <div className="absolute left-0 -top-20 z-30">
                <div className="bg-white rounded-sm shadow-lg">
                  <Image
                    src={leadersOfChangeDetail.Logo}
                    alt={leadersOfChangeDetail.imageAltTag}
                    width={96}
                    height={96}
                    priority={true}
                    style={{ objectFit: "cover" }}
                    className="shadow-lg rounded-sm"
                  />
                </div>
              </div>
              <div className="font-playfairDisplay mt-4">
                <HeadingWithIconH1
                  headingText={leadersOfChangeDetail.Name}
                //   href="/great-manager-institute/about"
                />
              </div>
              <div
                //   className="text-sm font-medium [&>p]:mb-6 [&>p>img]:m-auto [&>p>span>img]:m-auto w-[100%] max-w-full"
                className="text-sm font-medium [&>p]:mb-6 [&>p]:font-normal [&>ul]:font-normal w-[100%] [&>ul]:list-disc max-w-full mt-4 "
                dangerouslySetInnerHTML={{
                  __html: leadersOfChangeDetail.Description,
                }}
              />
              {
                leadersOfChangeDetail.CompanyWebsite &&
                <div className="text-center text-timesPurple hover:underline cursor-pointer">
                  <a href={`https://${leadersOfChangeDetail.CompanyWebsite}`} target="_blank">
                    {leadersOfChangeDetail.CompanyWebsite}
                  </a>
                </div>
              }
            </section>
            {/* <section className="mt-6">
              <div className="flex justify-start items-center mb-4">
                <div className="font-playfairDisplay w-[calc(100%-70px)] sm:w-auto">
                  <HeadingWithIcon
                    headingText="Leaders of Change"
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
            </section> */}

            {/* <section className="mt-6">
              <div className="flex justify-start items-center mb-4">
                <div className="font-playfairDisplay w-[calc(100%-50px)] sm:w-auto">
                  <HeadingWithIcon
                    headingText="Leaders of Change (in alphabetical order)"
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
                  return <LeadersOfChangeCard data={item} key={keyindex} />;
                })}
              </div>
            </section> */}

            {/* <section className="mt-6">
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
            </section> */}

            {/* <section className="mt-6 mb-6">
              <div className="font-playfairDisplay">
                <HeadingWithIcon
                  headingText="Articles"
                  href="/articleslist/featured-articles"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {getForherSreenData.slice(0, 10)?.map((item) => (
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
            </section> */}
          </div>

          {/* <div className="right-side md:self-start md:sticky md:-top-60 md:w-[300px] md:ml-[20px]">
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
          </div> */}
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
    const seoUrl = `/leaders-of-change/${context.query.id}`;
    const GetLeadersOfChangeData = await GetLeadersOfChangeBySeoUrl(seoUrl);

    props = {
      isMobile,
      GetLeadersOfChangeData,
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
