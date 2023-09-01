import React from "react";
import BreadCrumbs from "../../Components/BreadCrumbs";
import MainHeader from "../../Components/MainHeader";
import Head from "next/head";
import ManagersCardGMI from "../../Components/CardUI/ManagersCardGMI";

const terms = ({ props }) => {
  const pages = [
    {
      name: "Terms of Use",

      current: true,
    },
  ];

  const greatManagerInstitute = props?.greatManagerInstituteJson.Data;

  return (
    <div className=" relative">
      <Head>
        <meta charSet="utf-8" />
        <title>{`Terms Of Use for Job Seekers, fffAdvertisers and Recruiters - TimesAscent.com`}</title>
        <meta
          name="description"
          content={`Get terms & conditions fff of usage Times Ascent for jobseekers, Advertisers & recruiters. The Site is owned, managed and operated by Bennett, Coleman & Co. Limited, Times Group`}
        />
        <link rel="canonical" href="https://preview.timesascent.com/terms-head" />
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
          content={`Terms Of Use for Job Seekers, Advertisers and Recruiters - TimesAscent.com`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`Get terms & conditions of usage Times Ascent for jobseekers, Advertisers & recruiters. The Site is owned, managed and operated by Bennett, Coleman & Co. Limited, Times Group`}
        />
        <meta property="og:url" content="https://preview.timesascent.com/terms-head" />
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
          content={`Terms Of Use for Job Seekers, Advertisers and Recruiters - TimesAscent.com`}
        />
        <meta
          property="twitter:description"
          content={`Get terms & conditions of usage Times Ascent for jobseekers, Advertisers & recruiters. The Site is owned, managed and operated by Bennett, Coleman & Co. Limited, Times Group`}
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
                  item: "https://preview.timesascent.com/",
                },
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Terms of Use",
                },
              ],
            }),
          }} container
        />
      </Head>
      <MainHeader />
      <div className="relative   py-4 container  bg-white">
        <BreadCrumbs data={pages} />
      </div>
      <div className="relative pb-10  container">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          changes 2
          {greatManagerInstitute.slice(0, 75).map((item, index) => {
            return (
              <ManagersCardGMI key={index} data={item} index={index + 1} />
            );
          })}
        </div>
      </div>

    </div>
  );
};

export async function getServerSideProps(context) {
  console.log(process.env.NEXTAUTH_SECRET, process.env.NEXTAUTH_URL, "server")
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
    )
    const greatManagerInstituteJson = await greatManagerInstitute.json();

    props = {
      isMobile,
      greatManagerInstituteJson
    };
  } catch (err) {
    console.log("api error in forher page");
    props = {
      isPageError: true,
    };
  }

  return { props: { props } };
}
export default terms;
