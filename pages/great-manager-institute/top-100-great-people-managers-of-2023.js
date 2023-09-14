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
import ManagersCardMain from "../../Components/CardUI/ManagersCardMain";
import Image from "next/image";
import { useRouter } from "next/router";

const pages = [
  {
    name: "Great Manager Institute",
    href: "/great-manager-institute",
    current: false,
  },
  {
    name: "Top-100 Great People Managers of 2023",

    current: true,
  },
];

const allGmi = ({ props }) => {
  if (props.isPageError) {
    return <FourZeroFour />;
  }

  const router = useRouter();
  const greatManagerInstitute = props?.greatManagerInstituteJson.Data;

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>
          List of Top 100 Great People Managers by Great Manager Institute on
          timesascent.com
        </title>
        <meta
          name="description"
          content={`Great Manager Institute announces a list of the Top 100 Managers on timesascent.com`}
        />
        <link
          rel="canonical"
          href="https://timesascent.com/great-manager-institute/top-100-great-people-managers-of-2023"
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
          content="List of Top 100 Great People Managers by Great Manager Institute on timesascent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Great Manager Institute announces a list of the Top 100 Managers on timesascent.com"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/great-manager-institute/top-100-great-people-managers-of-2023"
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
          content="List of Top 100 Great People Managers by Great Manager Institute on timesascent.com"
        />
        <meta
          property="twitter:description"
          content="Great Manager Institute announces a list of the Top 100 Managers on timesascent.com"
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
                  name: "Top-100 Great People Managers of 2023",
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
            alt="Great People Manager"
          />
        </div>
        <div className={"block sm:hidden relative"}>
          <Image
            priority

            style={{ objectFit: "cover" }}
            src="/greateManagers/Banner/ManagersMobile.webp"
            width={768}
            height={307}
            alt="Great People Manager"
          />
        </div>
      </div> */}

      <main className="mt-6 container">
        <div>
          <BreadCrumbs data={pages} />
        </div>

        {/* guest article */}

        <div className="main md:flex md:justify-between box-border w-full py-4 md:py-6">
          <div className="md:w-[calc(100%-320px)]">
            <section className="">
              <div className="flex justify-start items-center mb-4">
                <div className="font-playfairDisplay">
                  <HeadingWithIconH1
                    headingText="Top 100 Great People Managers of 2023 (in alphabetical order)"
                    // href="/great-manager-institute"
                  />
                </div>
                <div className={"ml-4 relative"}>
                  <Image
                    style={{ objectFit: "cover", borderRadius: "0.375rem" }}
                    src="/greateManagers/GreatPeopleManagersStamp.webp"
                    width={50}
                    height={50}
                    alt="Greate People Managers"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {greatManagerInstitute.slice(0, 75).map((item, index) => {
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
                <div className="font-playfairDisplay">
                  <HeadingWithIcon
                    headingText="A few Business Leaders in the Top 100 list (in alphabetical order)"
                    // href="/great-manager-institute"
                  />
                </div>
                <div className={"ml-4 relative"}>
                  <Image
                    style={{ objectFit: "cover", borderRadius: "0.375rem" }}
                    src="/greateManagers/GreatPeopleManagersStamp.webp"
                    width={50}
                    height={50}
                    alt="Greate People Managers"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {greatManagerInstitute.slice(75, 100).map((item, index) => {
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
                newTab={true}
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
    const greatManagerInstitute = await fetch(
      `${process.env.LIVE_HOST}/json/GeneralManagerGetFrontEndList.json`
    );
    const greatManagerInstituteJson = await greatManagerInstitute.json();

    props = {
      isMobile,
      greatManagerInstituteJson,
    };
  } catch (err) {
    console.log("api error in forher page");
    props = {
      isPageError: true,
    };
  }

  return { props: { props } };
}
export default allGmi;
