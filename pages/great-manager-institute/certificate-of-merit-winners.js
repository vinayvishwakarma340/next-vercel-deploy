import Footer from "../../Components/Footer";
import MainHeader from "../../Components/MainHeader";
import { HeadingWithIconH1 } from "../../Components/HeadingUI/HeadingWithIcon";
import SecondryWidget from "../../Components/Widget/SecondryWidget";
import BreadCrumbs from "../../Components/BreadCrumbs";
import Head from "next/head";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
import FourZeroFour from "../../Components/FourZeroFour";
// import ManagersCardMain from "../../Components/CardUI/ManagersCardMain";
// import Image from "next/image";
import ManagersCardGMI from "../../Components/CardUI/ManagersCardGMI";
import { useRouter } from "next/router";
import { GetCertificationOfWinnersList } from "../api/gmiApi";

const pages = [
  {
    name: "Great Manager Institute",
    href: "/great-manager-institute",
    current: false,
  },
  {
    name: "Certificate of Merit Winners",

    current: true,
  },
];

const certificationOfWinners = ({ props }) => {
  if (props.isPageError) {
    return <FourZeroFour />;
  }
  const router = useRouter();
  const certificateWinnersData = props?.certificateWinnersJson.data;

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Certificate of Merit Winners – timesascent.com</title>
        <meta
          name="description"
          content={`Certificate of Merit Winners by Great Manager Institute on timesascent.com`}
        />
        <link
          rel="canonical"
          href="https://timesascent.com/great-manager-institute/certificate-of-merit-winners"
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
          content="Certificate of Merit Winners – timesascent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Certificate of Merit Winners by Great Manager Institute on timesascent.com"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/great-manager-institute/certificate-of-merit-winners"
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
          content="Certificate of Merit Winners – timesascent.com"
        />
        <meta
          property="twitter:description"
          content="Certificate of Merit Winners by Great Manager Institute on timesascent.com"
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
                  item: "https://timesascent.com/great-manager-institute",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Certificate of Merit Winners",
                  item: `https://timesascent.com${router.asPath}`,
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
              "@type": "Person",
              itemListElement: certificateWinnersData?.map(
                (managerDetailById, index) => {
                  return {
                    "@type": "ListItem",
                    position: index + 1,
                    name: managerDetailById.Name,
                    url: `https://timesascent.com${router.asPath}`,
                    email: "test@gmail.com",
                    image: managerDetailById.Image,
                    worksFor: managerDetailById.CompanyName,
                    jobTitle: managerDetailById.Designation,
                    knows: "knows",
                    knowsAbout: managerDetailById.CompanyName,
                    description: managerDetailById.Designation,
                    award: managerDetailById.Designation,
                    workLocation: managerDetailById.CompanyName,
                    telephone: "telephone",
                    sameAs: [`https://timesascent.com${router.asPath}`],
                  };
                }
              ),
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
                    headingText="Certificate of Merit Winners"
                  // href="/great-manager-institute"
                  />
                  <p className="font-medium text-sm mb-2">
                    Congratulations to all Managers who have received the
                    Certificate of Merit!
                  </p>
                  <p className="text-sm">
                    We are thrilled to acknowledge these exceptional Managers
                    who participated in the Great People Manager Study 2024, the
                    largest study of its kind in people management. Their
                    remarkable managerial capabilities have garnered exceptional
                    feedback from their team members.
                  </p>
                </div>
                {/* <div className={"ml-4 relative"}>
                  <Image
                    style={{ objectFit: "cover", borderRadius: "0.375rem" }}
                    src="/greateManagers/GreatPeopleManagersStamp.webp"
                    width={50}
                    height={50}
                    alt="Greate People Managers"
                  />
                </div> */}
              </div>

              {
                certificateWinnersData.map((yearGMIWinner, yearIdx) => (
                  <>
                    {
                      yearGMIWinner.months.map((monthGMIWinner, monthIdx) => (
                        <>
                          <div className="font-bold text-lg my-4">{monthGMIWinner.month + " " + yearGMIWinner.year}</div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {monthGMIWinner.gmiWinner?.map((item, index) => {
                              return (
                                <ManagersCardGMI key={index} data={item} index={index} />
                              );
                            })}
                          </div>
                        </>
                      ))
                    }
                  </>
                ))
              }

            </section>
            {/* <section className="mt-6">
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
                    <ManagersCardMain key={index} data={item} index={index + 1} />
                  );
                })}
              </div>
            </section> */}
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
    const certificateWinnersJson = await GetCertificationOfWinnersList();
    // const certificateWinnersJson = await certificateWinnersData.json();

    props = {
      isMobile,
      certificateWinnersJson,
    };
  } catch (err) {
    console.log(err);
    props = {
      isPageError: true,
    };
  }

  return { props: { props } };
}
export default certificationOfWinners;
