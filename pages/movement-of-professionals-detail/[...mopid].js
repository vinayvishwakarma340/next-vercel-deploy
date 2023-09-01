import Footer from "../../Components/Footer";
import MainHeader from "../../Components/MainHeader";
import MopDetailUI from "../../Components/MopDetailUI";
import SecondryWidget from "../../Components/Widget/SecondryWidget";
import { mopDetailAPI } from "../api/mopdetailapi";
import BreadCrumbs from "../../Components/BreadCrumbs";
import Head from "next/head";
import { useRouter } from "next/router";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
import { useEffect } from "react";
import SkeletonMrec from "../../Components/Skeleton/SkeletonMrec";
import { useState } from "react";
const movementofprofessionalsdetail = (props) => {
  const [adShow, setadShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);
  const router = useRouter();
  const pages = [
    {
      name: "Movement Of Professionals",
      href: "/movement-of-professionals",
      current: true,
    },
    {
      name: "Movement Of Professionals Detail",
      current: true,
    },
  ];

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{`${props.mopdetail.data.Name} works at ${props.mopdetail.data.OrganizationName}`}</title>
        <meta
          name="description"
          content={`${props.mopdetail.data.Name} works at ${props.mopdetail.data.OrganizationName +
            props.mopdetail.data.Designation
            }`}
        />
        <link
          rel="canonical"
          href={trimDash(
            "https://timesascent.com/movement-of-professionals-detail/professionals/" +
            props.mopdetail.data.Name?.replace(global.regex, "-") +
            "/" +
            props.mopdetail.data.OrganizationName?.replace(
              global.regex,
              "-"
            ) +
            "/" +
            props.mopdetail.data.MovementProfessionalID
          )}
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
          content={`${props.mopdetail.data.Name} works at ${props.mopdetail.data.OrganizationName}`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`${props.mopdetail.data.Name} works at ${props.mopdetail.data.OrganizationName +
            props.mopdetail.data.Designation
            }`}
        />
        <meta
          property="og:url"
          href={trimDash(
            "https://timesascent.com/movement-of-professionals-detail/professionals/" +
            props.mopdetail.data.Name?.replace(global.regex, "-") +
            "/" +
            props.mopdetail.data.OrganizationName?.replace(
              global.regex,
              "-"
            ) +
            "/" +
            props.mopdetail.data.MovementProfessionalID
          )}
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
          content={`${props.mopdetail.data.Name} works at ${props.mopdetail.data.OrganizationName}`}
        />
        <meta
          property="twitter:description"
          content={`${props.mopdetail.data.Name} works at ${props.mopdetail.data.OrganizationName +
            props.mopdetail.data.Designation
            }`}
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
              "@context": "https://schema.org/",
              "@type": "Person",
              name: props.mopdetail.data.Name,
              url: router.asPath,
              image: props.mopdetail.data.ProfilePhoto,
              jobTitle: props.mopdetail.data.Designation,
              worksFor: {
                "@type": "Organization",
                name: props.mopdetail.data.OrganizationName,
              },
            }),
          }}
        />
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
                  position: 1,
                  name: "Movement Of Professionals",
                  item: "https://timesascent.com/movement-of-professionals",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Movement Of Professionals Detail",
                },
              ],
            }),
          }}
        />
      </Head>

      {/* ------------------------------content starts here ------------------ */}
      <MainHeader />
      <div className="  py-4 md:py-6 lg:py-8 container">
        <div className="">
          <BreadCrumbs data={pages} />
        </div>

        <div className="sm:flex gap-6">
          <div className="left-side w-full  md:w-[calc(100%-320px)]">
            <MopDetailUI mopdetail={props.mopdetail} />
            <div className="bg-white shadow sm:rounded-lg px-6 py-4">
              <div className="font-bold text-gray-900 mt-4">Disclaimer</div>
              <p className="text-gray-900 text-sm mt-2">BCCL disclaims any and all representation or warranties of any kind - expressed or implied - about the completeness, accuracy, reliability,  or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Views expressed herein are independent opinions. You may act at your own risk while relying on the information available on the website. Should you decide to act, or omit to act, you should seek appropriate professional advice.</p>
            </div>
          </div>
          <div className="md:w-[300px]">
            <div className="sm:mr-[8px] w-[300px] h-[250px] m-auto bg-gray-300 flex items-center text-center">
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

            <div className="mt-6 sm:mt-4 right-side md:ml-[4px] md:w-[300px]">
              <div className="border border-gray-50 rounded">
                <SecondryWidget
                  iconUrl={`${process.env.Live_API_URL}/recruiterpostjob/staticGrowth.svg/2022/08/18/1660816388.svg`}
                  text2="Psychometric Test"
                  text3="Difficult to hire the right candidate?"
                  buttonText="Learn from the experts"
                  href="/psychometric-test"
                />
              </div>
            </div>

            <div className="mt-6 sm:mr-[8px] w-[300px] h-[250px] m-auto bg-gray-300 flex items-center text-center">
              {adShow ? (
                <GoogleAd_300x250
                  path="/22637491760/timesascent.com_erelego_d_ap_300x250_1"
                  ads_Id="div-gpt-ad-1674643874881-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export const trimDash = (string) => {
  return string?.replace(/-+/g, "-");
};
export async function getServerSideProps(context) {
  const mopdetail = await mopDetailAPI(context.query.mopid[3]);

  return {
    props: { mopdetail },
  };
}

export default movementofprofessionalsdetail;
