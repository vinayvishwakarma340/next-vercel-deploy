import Footer from "../../Components/Footer";
import MainHeader from "../../Components/MainHeader";
import HeadingWithIcon, { HeadingWithIconH1 } from "../../Components/HeadingUI/HeadingWithIcon";
import SecondryWidget from "../../Components/Widget/SecondryWidget";
import BreadCrumbs from "../../Components/BreadCrumbs";
import Head from "next/head";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
import FourZeroFour from "../../Components/FourZeroFour";
import Image from "next/image";
import { useRouter } from "next/router";


const pages = [
  {
    name: "Great Manager Institute",
    href: "/great-manager-institute",
    current: false,
  }, {
    name: "About",
    href: "/great-manager-institute/about",
    current: false,
  },
];

const index = ({ props }) => {
  if (props.isPageError) {
    return <FourZeroFour />;
  }

  const router = useRouter();

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>
          Great Managers Institute – timesascent.com
        </title>
        <meta
          name="description"
          content={`Great Managers Institute lists the top 100 Great People Managers of 2023 on timesascent.com.`}
        />
        <link rel="canonical" href="https://timesascent.com/great-manager-institute" />
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
          content="Great Managers Institute"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Great Managers Institute lists the top 100 Great People Managers of 2023 on timesascent.com."
        />
        <meta property="og:url" content="https://timesascent.com/great-manager-institute" />
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
          content="Great People Managers"
        />
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
                  item: `https://timesascent.com/great-manager-institute`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "About",
                  item: `https://timesascent.com${router.asPath}`,
                },
              ],
            }),
          }}
        />
      </Head>

      <MainHeader />

      {/* <div className="relative">
        <div className={"hidden sm:block relative"}>
          <Image
            priority
            style={{ objectFit: "cover" }}
            src="/greateManagers/Banner/ManagersWeb.webp"
            width={2000}
            height={500}
            alt="Great People Managers"
          />
        </div>
        <div className={"block sm:hidden relative"}>
          <Image
            priority

            style={{ objectFit: "cover" }}
            src="/greateManagers/Banner/ManagersMobile.webp"
            width={768}
            height={307}
            alt="Great People Managers"
          />
        </div>
      </div> */}


      {/* <ForherCarousel
        isMobile={props.isMobile}
        data={props.bannerResponse.data}
      /> */}

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
                // href="/great-people-manager"
                />
              </div>
              <p className="text-justify">
                Great Manager Institute®(GMI) is a global lifetime digital coach and profiler for people managers. It aims to redefine people management and lead the people management revolution. Here at Great Manager Institute®, we use technology in the form of data analytics and community-driven programs to help shape the new generation of people managers.
              </p>
            </section>
            <section className="mt-6">
              <div className="font-playfairDisplay ">
                <h2 className="font-semibold text-xl mb-2">About the Great People Manager Study™</h2>

              </div>
              <p className="text-justify">
                The Great People Manager Study™ is India's largest study on people management for practicing people managers. It captures team members' feedback through a valid and reliable survey instrument, across 3 broad themes of Connect, Develop, and Inspire. For the organizations participating, we give 2 reports-Organization report and Individual Manager Scorecards. <br />
                All the participating managers and leaders go through a rigorous selection process using a multi-layered evaluation methodology. This finally culminates into a list of the Top 100 Great People Managers which is published in one of the leading business magazines of India, like The Economic Times.<br />
                Our study partner for the Great People Manager Study 2023 is NHRDN (National Human Resources Development Network).
              </p>
            </section>
            <section className="mt-6">
              <div className="font-playfairDisplay">
                <h2 className="font-semibold text-xl mb-2">Criteria based on which Manager is eligible for recognition as part of the Top 100 Great People Managers’ List</h2>
              </div>
              <ul className="list-disc ml-6 text-justify">
                <li>There are 4 levels for arriving at the Top 100 Great People Managers.</li>
                <li>
                  In the 1st round, we assess managers with a minimum of 3 respondents. A team feedback survey is conducted for all these managers to assess their people managerial effectiveness.
                </li>
                <li>
                  After conducting the team feedback survey, scoring is done by an intelligent auditing system where an average score of the user is calculated by taking a mean of the quantitative statements and multiplying it by a scale multiplier.
                </li>
                <li>
                  The score is then compared with a threshold (the threshold is rolling every year, and is variable based on the industry of the individual)
                </li>
                <li>
                  For those individuals who cross the threshold, they move to Round 2 or the Second Layer of our Evaluation i.e., submission of 3 people practices, and scoring is done using a behaviourally anchored rating scale to assess the same.
                </li>
                <li>
                  Managers who move to Round 2 of the study are eligible for a certificate of merit by the Great Manager Institute® and NHRDN (National Human Resources Development Network).
                </li>
                <li>
                  All the scores mentioned above are combined and multiplied by a scale multiplier so that they can be added to the Round 1 scores.
                </li>
                <li>
                  2/3rd weightage of Round 1 scores and 1/3rd weightage of Round 2 scores are taken into consideration for the Top 100 managers.
                </li>
                <li>
                  For the 3rd Round reputation check of the top 120-150 managers is done. The aim is only to find any form of known reputational damage or any display of activities that can be considered damaging.
                </li>
                <li>
                  Based on the checks the Top 100 Great People Managers are finalized.
                </li>
                <li>
                  This year we have introduced a One-on-One mentoring session with Top Industry Leaders (CEOs, CXO, CHROs) for the Top 100 managers who opt for these sessions. These sessions enable the manager to reflect on what makes them a great people manager and also enable the mentor to share experience/ perspective on possible challenges that the manager is likely to face at the next level, and what to watch out for.
                </li>
              </ul>
            </section>
            <section className="mt-6">
              <div className="font-playfairDisplay">
                <h2 className="font-semibold text-xl mb-2">Leadership Factories of India – a Study that recognizes Organizations with the best leadership development processes.</h2>
              </div>
              <ul className="list-disc ml-6 text-justify">
                <li>Eligibility: Only Organizations which are certified as great workplaces by Great Place to Work® or Organizations with a minimum of 70 percent people manager effectiveness score of Great Manager Institute® will be eligible.  In case the Company is not certified by Great Place to Work®, the Company must nominate all its managers, or randomly select equal to or more number of managers than what is recommended by the Sampling Engine of GMI.</li>
                <li>
                  Process: A questionnaire to assess the leadership capability-building process of the Organization will be filled out by the concerned team. The same will be assessed by trained assessors at Great Manager Institute®. Shortlisted Organizations will have an on-site audit by GMI  to understand how the process and relevant practices are implemented on the ground.
                </li>
                <li>
                  Fees: There is currently no professional fee being charged by Great Manager Institute® for this Study.
                </li>
              </ul>
            </section>
            <section className="mt-6">
              <div className="font-playfairDisplay">
                <h2 className="font-semibold text-xl mb-2">Recognition</h2>
              </div>
              <ul className="list-disc ml-6 text-justify">
                <li>Leadership Factories of India will be unveiled at regular intervals by our media partner- The Economic Times.</li>

              </ul>
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
    </div >
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
    props = {
      isMobile
    };
  } catch (err) {
    console.log("api error in forher page");
    props = {
      isPageError: true,
    };
  }

  return { props: { props } };
}
export default index;
