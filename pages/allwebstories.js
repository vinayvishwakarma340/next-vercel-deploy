import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import HeadingWithIcon from "../Components/HeadingUI/HeadingWithIcon";
import { webStoriesResponse } from "../pages/api/webStoriesApi";
import WebStories from "../Components/CardUI/WebStories";
import BreadCrumbs from "../Components/BreadCrumbs";
import Head from "next/head";

const Blogs = ({ props }) => {
  const pages = [
    { name: "Blogs", href: "/blogs", current: false },
    { name: "All Web Stories", href: "/allwebstories", current: true },
  ];
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Latest articles for blogs - timesascent.com`}</title>
        <meta
          name="description"
          content={`Blogs epaper articles from Times of india newspaper - timesascent.com`}
        />
        <link rel="canonical" href="https://timesascent.com/allwebstories" />
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
          content="Latest articles for blogs - timesascent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Blogs epaper articles from Times of india newspaper - timesascent.com"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/allwebstories"
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
          content="Latest articles for blogs - timesascent.com"
        />
        <meta
          property="twitter:description"
          content="Blogs epaper articles from Times of india newspaper - timesascent.com"
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
                  name: "Blogs",
                  item: "https://timesascent.com/blogs",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "All Web Stories",
                },
              ],
            }),
          }}
        />
      </Head>

      <MainHeader />
      <main>
        <div className="  py-4 md:py-6 lg:py-8 container">
          <div className="mb-6">
            <BreadCrumbs data={pages} />
          </div>

          {/* web stories */}
          <section className=" mx-auto ">
            <HeadingWithIcon headingText="Web Stories" />
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-6  ">
              {props.webStoriesData.data?.map((item) => (
                <div className="m-auto">
                  <WebStories key={item.KeyIndex} data={item} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};
export async function getServerSideProps(context) {
  const GetWebStoriesSummary = await fetch(
    `${process.env.LIVE_HOST}/json/GetWebStoriesSummary.json`
  );
  const GetWebStoriesSummaryData = await GetWebStoriesSummary.json();
  // const webStoriesData = await webStoriesResponse();
  const props = {
    webStoriesData: GetWebStoriesSummaryData,
  };
  return { props: { props } };
}
export default Blogs;
