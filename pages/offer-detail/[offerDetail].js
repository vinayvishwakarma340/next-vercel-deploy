import React, { useEffect } from "react";

import BreadCrumbs from "../../Components/BreadCrumbs";
import Footer from "../../Components/Footer";
import MainHeader from "../../Components/MainHeader";
import { offersDetail } from "../api/forherOffer";
import Head from "next/head";

const offerData = {
  id: 1,
  title: "Celebrating Women's Day",
  company: "Silkline",
  offer: "25%",
  startDate: "01/03/2023",
  endData: "09/03/2023",
  promo: null,
  location: "Opposite Alok Hotel, Naupada, Thane West. 400602",
  terms: null,
  url: "https://www.instagram.com/silkline_ethnic/?igshid=YmMyMTA2M2Y%3D",
  mobImage: "/forherOffers/silkline.jpg",
  webImage: "/forherOffers/silklineWeb.jpg",
};
const offerDetail = ({ props }) => {
  const detail = props.offerResponse.data;

  // useEffect(() => {
  //   setTimeout(() => {
  //     setadShow(true);
  //   }, 4000);
  // }, []);
  const pages = [
    {
      name: "Forher",
      href: "/ForHer",
      current: false,
    },
    {
      name: "Offers",

      current: true,
    },
  ];
  const convertDate = (date) => {
    return date.slice(0, 10).split("-").reverse().join("-");
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Offers - timesascent.com`}</title>
        <meta name="description" content={`Offers - timesascent.com`} />
        <link rel="canonical" href={"https://timesascent.com/ForHer"} />
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
        <meta property="og:title" content={`Offers - TimesAscent.com`} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={`Offers - timesascent.com`} />
        <meta property="og:url" content={"https://timesascent.com/ForHer"} />
        <meta
          property="og:image"
          content="https://timesascent.com/newimages/main/times_ascent_logo.svg"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/newimages/main/times_ascent_logo.svg"
        />
        <meta property="twitter:title" content={`Offers - TimesAscent.com`} />
        <meta
          property="twitter:description"
          content={`Offers - timesascent.com`}
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
      <div className="bg-white mb-8">
        <div className=" py-2 sm:py-5 sm:px-6 lg:grid  lg:grid-cols-2 lg:gap-x-2 mx-auto container ">
          <div className="lg:w-11/12 lg:self-end">
            <div className=" mb-6">
              <BreadCrumbs data={pages} />
            </div>
            <div className="mt-4">
              <h1 className="text-xl  font-bold tracking-tight text-gray-900 ">
                {detail.Title}
              </h1>
            </div>

            <section aria-labelledby="information-heading" className="mt-4">
              <div className="flex items-center">
                <p className="text-sm text-gray-900 sm:text-lg">
                  {detail.Company}
                </p>
              </div>

              <div className="mt-4 space-y-6">
                <div className="prose mt-0 text-black lg:max-w-none text-sm lg:text-sm lg:mt-4">
                  Offer Detail : {detail.Offer}
                </div>
              </div>

              {detail.Promo && (
                <div className="mt-4 space-y-6">
                  <div className="prose mt-0 text-black lg:max-w-none text-sm lg:text-sm lg:mt-4">
                    Promo : {detail.Promo}
                  </div>
                </div>
              )}

              <div className="mt-4 space-y-6">
                <div className="prose mt-0 text-black lg:max-w-none text-sm lg:text-sm lg:mt-4">
                  Location : {detail.Location}
                </div>
              </div>

              {detail.Terms && (
                <div className="mt-4 space-y-6">
                  <div className="prose mt-0 text-black lg:max-w-none text-sm lg:text-sm lg:mt-4">
                    Terms & Condition : {detail.Terms}
                  </div>
                </div>
              )}

              <div className="mt-4 ">
                <p className=" text-sm text-gray-500">
                  Start date : {convertDate(detail.StartDate)}
                </p>
                <p className="mt-2 text-sm text-gray-500">
                  End date : {convertDate(detail.EndData)}
                </p>
              </div>
              <div className="mt-8 lg:text-start  ">
                <a
                  href={detail.Url}

                  className="inline-flex rounded-md  mt-2 border border-transparent bg-timesPurple py-2 px-10 w-7xl text-sm font-medium text-white shadow-sm hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
                >
                  Visit site
                </a>
              </div>
            </section>
          </div>

          <div className="mt-4 lg:col-start-2 lg:row-span-2 lg:mt-10 ">
            <div className="overflow-hidden ">
              <img
                src={detail.WebImage}
                alt={"offers"}
                className="max-h-[400px] w-auto m-auto "
              />
            </div>
            {/* <div className="lg:mt-14 mt-5 mb-12 ">
              {adShow ? (
                <GoogleAd_300x250
                  path="/22637491760/timesascent.com_erelego_d_ap_300x250"
                  ads_Id="div-gpt-ad-1674643828785-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export async function getServerSideProps(context) {
  const id = context.query.offerDetail;
  const offerResponse = await offersDetail({
    WeCareOfferUUID: id,
  });

  let props = { offerResponse };
  return { props: { props } };
}

export default offerDetail;

// Cookies.set("USERID", response.data.CandidateId);
