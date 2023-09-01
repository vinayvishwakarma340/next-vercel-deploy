import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import BreadCrumbs from "../../Components/BreadCrumbs";
import ArticleCard from "../../Components/CardUI/ArticleCard";
import Footer from "../../Components/Footer";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
import GoogleAd_728x90 from "../../Components/GoogleAds/GoogleAd_728x90";
import MainHeader from "../../Components/MainHeader";
import FreelancerWidget from "../../Components/Widget/FreelancerWidget";
import SecondryWidget from "../../Components/Widget/SecondryWidget";
const freelancerWidgetData = {
  heading: "Work Remotely",
  description: " Get a network of certified and experienced freelancers",
  buttonText: "Hire now ",
};
const SearchArticle = ({ props }) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const SearchCategory = router.query?.category;
  const SearchTerm = router.query?.SearchTerm;
  useEffect(() => {
    searchArticlApi();
  }, []);
  const searchArticlApi = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      SearchCategory: SearchCategory,
      SearchTerm: SearchTerm,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/SearchByCategory`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          setCount(result.datacount || 0);
          setData(result.data);
          setLoading(false);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const renderBySearchType = (SearchCategory) => {
    switch (SearchCategory) {
      case "Article":
        return (
          <>
            {data.map((item) => (
              <ArticleCard
                key={item.ArticleId}
                data={item}
                articledatalength={article.data.length}
              />
            ))}
          </>
        );
      default:
        return <div>nothing found</div>;
    }
  };

  const pages = [
    { name: "Interview Gd Prep", href: "/interview-gd-prep", current: false },
  ];
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Latest articles for Recommended Read - timesascent.com`}</title>
        <meta
          name="description"
          content={` Recommended Read epaper articles from Times of india newspaper - timesascent.com `}
        />

        {/* <link
          rel="canonical"
          href={`https://timesascent.com/articleslist/${id}`}
        /> */}
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
          content={`Latest articles for Recommended Read - timesascent.com`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={` Recommended Read epaper articles from Times of india newspaper - timesascent.com `}
        />
        {/* <meta
          property="og:url"
          content={`https://timesascent.com/articleslist/${id}`}
        /> */}
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
          content={`Latest articles for Recommended Read - timesascent.com`}
        />
        <meta
          property="twitter:description"
          content={` Recommended Read epaper articles from Times of india newspaper - timesascent.com `}
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
              ],
            }),
          }}
        />
      </Head>

      <MainHeader />

      <div className="  py-4 md:py-6 lg:py-8 container">
        <BreadCrumbs data={pages} />
        <h1 className="text-xl   py-4  capitalize font-bold text-gray-900 ">
          search article
        </h1>
        <div className="sm:flex gap-6">
          <div className="left-side w-full  md:w-[calc(100%-320px)]">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {renderBySearchType()}
            </div>

            <div className="py-4">
              <div className="  m-auto sm:mb-0 mb-2 sm:mt-0 mt-2 flex justify-center items-center">
                <GoogleAd_728x90
                  isMobile={props.isMobile}
                  path="/22637491760/timesascent.com_erelego_cp_d_728x90"
                  ads_Id="div-gpt-ad-1674644273822-0"
                />
              </div>
            </div>
          </div>
          <div className=" right-side   md:w-[300px]">
            <div className=" ml-2 xl:w-[300px] mb-2">
              <FreelancerWidget {...freelancerWidgetData} />
            </div>

            <div className="sm:mr-[8px] w-[300px] sm:mt-6 md:ml-[8px] h-[250px] m-auto bg-gray-300 flex items-center text-center">
              <GoogleAd_300x250
                path="/22637491760/timesascent.com_erelego_d_ap_300x250"
                ads_Id="div-gpt-ad-1674643828785-0"
                size={[[300, 250]]}
              />
            </div>
            <div>
              <div className="mt-4   sm:mt-6 right-side md:ml-[8px] md:w-[300px]">
                <SecondryWidget
                  iconUrl={`${process.env.Live_API_URL}/recruiterpostjob/staticGrowth.svg/2022/08/18/1660816388.svg`}
                  text2="Events"
                  text3="Looking out to Host your Event Online & Get the Desired Audience"
                  buttonText="List Your Event"
                  href="/listyourevent"
                />
              </div>
              <div className="sm:mr-[8px] md:ml-[8px] w-[300px] h-[250px] mt-4 sm:mt-6 m-auto bg-gray-300 flex items-center text-center">
                <GoogleAd_300x250
                  path="/22637491760/timesascent.com_erelego_d_ap_300x250_1"
                  ads_Id="div-gpt-ad-1674643874881-0"
                  size={[[300, 250]]}
                />
              </div>
            </div>
          </div>
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
  const page = context.query.page ? context.query.page : 1;

  let props = {};

  try {
    props = {
      isMobile,
    };
  } catch (err) {
    props = {
      isPageError: true,
    };
  }

  return { props: { props } };
}
export default SearchArticle;
