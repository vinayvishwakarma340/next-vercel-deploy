import Head from "next/head";
import Image from "next/image";
import { useEffect } from "react";
import BreadCrumbs from "../Components/BreadCrumbs";
import PsychometricCard from "../Components/CardUI/PsychometricCard";
import Footer from "../Components/Footer";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";
import GoogleAd_728x90 from "../Components/GoogleAds/GoogleAd_728x90";
import MainHeader from "../Components/MainHeader";
import SkeletonMrec from "../Components/Skeleton/SkeletonMrec";
import SkeletonHrec from "../Components/Skeleton/SkeletonHrec";
import { useState } from "react";

const PsychometricTest = ({ props }) => {
  const [adShow, setadShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);
  const pages = [
    { name: "Psychometric test", href: "/psychometric-test", current: true },
  ];
  return (
    <div className="">
      <Head>
        <meta charSet="utf-8" />
        <title>{"Get career guidance from top mentor - timesascent.com"}</title>
        <meta
          name="description"
          content={`Guiding professionals from around the world to help you reach your goals, One to one mentor advise - timesascent.com`}
        />
        <link
          rel="canonical"
          href="https://timesascent.com/psychometric-test"
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
          content="Get career guidance from top mentor - timesascent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Guiding professionals from around the world to help you reach your goals, One to one mentor advise - timesascent.com"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/psychometric-test"
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
          content="Get career guidance from top mentor - timesascent.com"
        />
        <meta
          property="twitter:description"
          content="Guiding professionals from around the world to help you reach your goals, One to one mentor advise - timesascent.com"
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
      {/* <PsychometricBanner
        heading="GET ANSWERS TO YOUR PROFESSIONAL LIFE THROUGH"
        subHeading="PSYCHOMETRIC TEST"
        imageSrc="/banners/PsychometricTesting.webp"
        buttonHrefLeft="/"
        buttonTextLeft="TAKE ASSESSMENT"
        buttonHrefRight="/"
        buttonTextRight="CAREER GUIDANCE"
      /> */}

      {/* banner */}

      <div className={" relative "}>
        <Image
          style={{ objectFit: "cover" }}
          className="m-auto"
          src="/Banners/PsychometricTesting.webp"
          width={2000}
          height={500}
          alt="TimesAscent  banner"
        />
      </div>

      <div className="  py-4 md:py-6 lg:py-8 container">
        <BreadCrumbs data={pages} />

        <div className="mt-4 sm:grid grid-cols-4 gap-x-6">
          <div className="mx-auto max-w-prose text-base lg:max-w-none col-span-3">
            <h1 className="mt-2 text-xl font-bold leading-8 tracking-tight  ">
              Link between you and your career
            </h1>
            <p className="mt-2">
              Answers appear when the problem is clear" - Keith W Henline
            </p>
            <p className="mt-4 text-base">
              An evaluation of individuals, cognitive skills talent, personal
              traits that helps them to know better about themselves. Test -
              takers will find benefits and rich insights irrespective of their
              specialty and functional industry. It is a standard and scientific
              method that plays a significant role with unbiased evaluation.
              Psychometric tests further helps in empowering people, developing
              them , understanding them and acts as a link between research and
              industry with skill assessment and career guidance along with
              counselling as well. In the realm of education, standardised tests
              are used to analyse students' performance in multiple dimensions,
              whereas Psychometric exams are used to assess candidates'
              emotional and intellectual capacities.
            </p>
          </div>
          <div className="col-span-1">
            <div className="mt-6 sm:mt-0">
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
          </div>
        </div>

        <section className="mt-6 ">
          <div className="flex flex-col sm:flex-row  items-center  gap-4 ">

            <PsychometricCard
              imagePath="/psychometricTest/9LinkBanner.jpg"
              heading="9 Links"
              subHeading=" The Assessment company"
              buttonHref="/psychometrictest/9links"
              buttonText="Go to 9 links"
              description="9 Links is a consulting firm that works in the area of
                Organizational Development and Behavioral Assessment through
                Online psychometric tests."
            />



            <PsychometricCard
              imagePath="/psychometricTest/setMyCareerSmall.jpg"
              heading="Set My Career"
              subHeading="Career guidance and counselling"
              buttonHref="/psychometrictest/setmycareer"
              buttonText="Go to Set My Career"
              description="Provide optimum results in career development, our world-class psychometric assessments recognize the significance of your talent and passion."
            />



            <PsychometricCard
              imagePath="/psychometricTest/trueTestCard.webp"
              heading="Truetest"
              subHeading="Career Guidance and Career Management."
              buttonHref="/psychometrictest/truetest"
              buttonText="Go to Truetest"
              description="TRUEtest is India's first online assessment tool that allows people to determine their career inclination, aptitude, personality, and leadership attributes."
            />

          </div>
        </section>
        <div className="mt-6">
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
export default PsychometricTest;
