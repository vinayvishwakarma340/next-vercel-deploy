import BreadCrumbs from "../Components/BreadCrumbs";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import { MomentProfessionalResponse } from "./api/momentOfProfessionalApi";
import SecondryWidget from "../Components/Widget/SecondryWidget";
import MomentProfessionalCard from "../Components/CardUI/MomentProfessionalCard";
import SubscribeNews from "../Components/SubscribeNews";
import { useState } from "react";
import Image from "next/image";
import { HeadingWithIconH1 } from "../Components/HeadingUI/HeadingWithIcon";
import SuccessModal from "../Components/Modal/SuccessModal";
import Head from "next/head";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";
import GoogleAd_Hrec from "../Components/GoogleAds/GoogleAd_Hrec";
import SkeletonMrec from "../Components/Skeleton/SkeletonMrec";
import SkeletonHrec from "../Components/Skeleton/SkeletonHrec";
import { useEffect } from "react";
const MovementOfProfessionals = ({ props }) => {
  const [subcribeEmailLoading, setSubcribeEmailLoading] = useState(false);
  const [showModalSubcribeEmail, setShowModalSubcribeEmail] = useState(false);
  const [adShow, setadShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  const closeModalHandler = () => {
    setShowModalSubcribeEmail(false);
  };

  const emailFormHandler = (email) => {
    setSubcribeEmailLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Email: email,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/Subcription`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          setShowModalSubcribeEmail(true);
        }
      })

      .catch((error) => console.log("error", error))
      .finally(() => {
        setSubcribeEmailLoading(false);
      });
  };
  const pages = [
    {
      name: "Movement Of Professionals",
      href: "/movement-of-professionals",
      current: true,
    },
  ];
  return (
    <div className="">
      {/* modal start */}
      <SuccessModal
        openModal={showModalSubcribeEmail}
        closeModal={() => closeModalHandler()}
        headingText="Thank-You !!"
        subHeadingText=" You will be updated with latest newsletters, articles,
                        courses and events on your Email."
        buttonText="OK"
      />
      {/* modal end */}

      <Head>
        <meta charSet="utf-8" />
        <title>{`Movement Of Professionals`}</title>
        <meta
          name="description"
          content={`Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com`}
        />
        <link
          rel="canonical"
          href="https://timesascent.com/movement-of-professionals"
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
        <meta property="og:title" content="Movement Of Professionals" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/movement-of-professionals"
        />
        <meta
          property="og:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta property="twitter:title" content="Movement Of Professionals" />
        <meta
          property="twitter:description"
          content="Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
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
                  name: "Movement Of Professionals",
                },
              ],
            }),
          }}
        />
      </Head>

      <MainHeader />

      <div className={"  relative"}>
        <Image
          // loader={myLoader}
          style={{ objectFit: "cover" }}
          className="m-auto"
          src="/Banners/MovementsProfessional.webp"
          width={2000}
          height={500}
          alt="moment of professional banner"
        />
      </div>

      <div className=" py-4 md:py-6 lg:py-8 container">
        <BreadCrumbs data={pages} />
        <section className="mt-6">
          <HeadingWithIconH1 headingText="Celebrating Growth" />
          <div className=" sm:flex justify-between  ">
            <div className="  md:w-[calc(100%-310px)]">
              <div
                role="list"
                className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
              >
                {props.momentProfessionalData.data.slice(0, 12).map((item) => {
                  return (
                    <MomentProfessionalCard key={item.KeyIndex} data={item} />
                  );
                })}
              </div>
            </div>
            <div className="  m-auto sm:m-0 ">
              <div className="mt-6 sm:ml-6 sm:mt-0 sm:w-[300px]">
                <SecondryWidget
                  iconUrl={
                    `${process.env.Live_API_URL}/recruiterpostjob/staticGrowth.svg/2022/08/18/1660816388.svg`
                  }
                  text2={"Movement of Professionals"}
                  text3="Get a chance to share and feature your growth story with us"
                  buttonText={"Publish Your Growth Story"}
                  href={"/professionals-growth-journey"}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 md:flex justify-between box-border w-full">
          <div className="mt-6 md:mt-0  md:mr-[20px] ">
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
          <div className="mt-6 sm:mt-0 w-full  md:w-[calc(100%-320px)]">
            <SubscribeNews
              emailFormHandler={emailFormHandler}
              heading=" Subscribe to our Newsletter!"
              subHeading="  Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque."
              loading={subcribeEmailLoading}
            />
          </div>
          <div className="mt-6 md:mt-0  md:ml-[20px] ">
            {adShow ? (
              <GoogleAd_300x250
                path="/22637491760/timesascent.com_erelego_d_cp_300x250"
                ads_Id="div-gpt-ad-1674643917536-0"
                size={[[300, 250]]}
              />
            ) : (
              <SkeletonMrec />
            )}
          </div>
        </section>
        <div className="mt-6 ">
          {adShow ? (
            <>
              {" "}
              <div className=" hidden md:block ">
                <GoogleAd_Hrec
                  path="/1064661/ta.com_hrec1_HRProfessional"
                  ads_Id="div-gpt-ad-1674626435046-0"
                  size={[[728, 90]]}
                />
              </div>
              <div className="block md:hidden">
                <GoogleAd_Hrec
                  path="/1064661/ta.com_hrec1_Mob_HRProfessional"
                  ads_Id="div-gpt-ad-1674626050199-0"
                  size={[[320, 50]]}
                />
              </div>
            </>
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

  const momentProfessionalData = await MomentProfessionalResponse({
    Page: 1,
  });

  const props = {
    momentProfessionalData,
    isMobile,
  };

  return { props: { props } };
}

export default MovementOfProfessionals;
