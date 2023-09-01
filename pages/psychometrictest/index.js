import Head from "next/head";
import Image from "next/image";
import PsychometricBanner from "../../Components/Banner/PsychometricBanner";
import BreadCrumbs from "../../Components/BreadCrumbs";
import PsychometricCard from "../../Components/CardUI/PsychometricCard";
import Footer from "../../Components/Footer";
import MainHeader from "../../Components/MainHeader";

const PsychometricTest = () => {
  const pages = [
    { name: "Psychometric Test", href: "/psychometric-test", current: true },
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
          content="https://timesascent.com/newimages/main/times_ascent_logo.svg"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/newimages/main/times_ascent_logo.svg"
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
                  name: "psychometric-test",
                },
              ],
            }),
          }}
        />
      </Head>
      <MainHeader />
      <div className={" relative "}>
        <Image
          style={{ objectFit: "cover" }}
          src="/Banners/PsychometricTesting.webp"
          width={1600}
          height={400}
          alt="TimesAscent  banner"
        />
      </div>
      <div className=" text-gray-500 py-4 md:py-6 lg:py-8 container">
        <BreadCrumbs data={pages} />

        <div className="mt-4 sm:grid grid-cols-4 gap-x-6">
          <div className="mx-auto max-w-prose text-base lg:max-w-none col-span-3">
            <p className="mt-2 text-xl font-bold leading-8 tracking-tight text-gray-900 ">
              Link between you and your career
            </p>
            <p className="mt-2">
              Answers appear when the problem is clear" - Keith W Henline
            </p>
            <p className="mt-4">
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
              <div className="w-[300px] h-[250px] bg-gray-300 m-auto flex justify-center items-center">
                <div>300 x 250</div>
              </div>
            </div>
          </div>
        </div>

        <section className="mt-6 ">
          <div className="sm:flex  items-center  ">
            <div className="sm:mr-6 mt-6 sm:mt-0">
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
            </div>

            <div className=" mt-6 md:mt-0 col-span-1 md:col-span-2 xl:col-span-3">
              <PsychometricCard
                imagePath="/psychometricTest/setMyCareerSmall.jpg"
                heading="Set My Career"
                subHeading="Career guidance and counselling"
                buttonHref="/psychometrictest/setmycareer"
                buttonText="Go to Set My Career"
                description="Provide optimum results in career development, our world-class psychometric assessments recognize the significance of your talent and passion."
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default PsychometricTest;
