import Head from "next/head";
import React from "react";
import { useState } from "react";
import BreadCrumbs from "../Components/BreadCrumbs";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import SuccessModal from "../Components/Modal/SuccessModal";
import SubscribeNews from "../Components/SubscribeNews";

const aboutus = () => {
  const [subcribeEmailLoading, setSubcribeEmailLoading] = useState(false);
  const [showModalSubcribeEmail, setShowModalSubcribeEmail] = useState(false);
  const pages = [
    {
      name: "About us",

      current: true,
    },
  ];

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

  const closeModalHandler = () => {
    setShowModalSubcribeEmail(false);
  };

  return (
    <div className=" relative">
      <Head>
        <meta charSet="utf-8" />
        <title>{`Times Ascent - Weekly Supplement Of Times Of India`}</title>
        <meta
          name="description"
          content={`Times Ascent is a weekly supplement of Times Of India. The Online version focusses on Employment, Human Resource development, Careers ,  Job Postings, Resume Builder, Psychometric Tests, `}
        />
        <link rel="canonical" href="https://timesascent.com/about-us" />
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
          content={`Times Ascent - Weekly Supplement Of Times Of India`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`Times Ascent is a weekly supplement of Times Of India. The Online version focusses on Employment, Human Resource development, Careers ,  Job Postings, Resume Builder, Psychometric Tests, `}
        />
        <meta property="og:url" content="https://timesascent.com/about-us" />
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
          content={`Times Ascent - Weekly Supplement Of Times Of India`}
        />
        <meta
          property="twitter:description"
          content={`Times Ascent is a weekly supplement of Times Of India. The Online version focusses on Employment, Human Resource development, Careers ,  Job Postings, Resume Builder, Psychometric Tests, `}
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
                  position: 1,
                  name: "About us",
                },
              ],
            }),
          }}
        />
      </Head>
      <MainHeader />

      <SuccessModal
        openModal={showModalSubcribeEmail}
        closeModal={() => closeModalHandler()}
        headingText="Thank-You !!"
        subHeadingText=" You will be updated with latest newsletters, articles,
                        courses and events on your Email."
        buttonText="OK"
      />
      <div className="relative   py-4 container lg:py-4 bg-white">
        <BreadCrumbs data={pages} />
      </div>

      <div className="relative ">
        <div className=" bg-white ">
          <div className=" container">
            <h1 className="mb-4 text-xl font-bold">About us</h1>
            <div className="[&>p]:leading-6">
              <h2 className=" text-md md:text-lg font-bold leading-6 text-gray-900">
                Who we are
              </h2>
              <p className="mt-2 text-sm">
                The Times Of India is the nation's leading media conglomerate
                with 45 dailies and periodicals in 3 languages and 108 editions
                from 9 centers and a combined readership of over 40 million. In
                fact The Times of India Group accounts for 30% of the measured
                ad spend in the country. We include in our stable The Times of
                India, among the top 2 English broadsheets worldwide; and The
                Economic Times among the top 3 English business dailies
                worldwide. The Times of India Group gives the highest reach
                among Indian decision makers, intelligentsia and the elite. The
                Group also has a range of 9 Business2Business publications from
                The Economic Times catering to industry segments as diverse as
                machinery and polymers.
              </p>
              <p className="mt-2 text-sm">
                It's new ventures include Times International Media Marketing
                with the role of attracting International business to India
                through a developmental approach. International Media
                Representation represents select mainline and business
                publications worldwide. With a network of over 50 offices across
                the country and a field force of 1000 the coverage of India is
                most comprehensive and perhaps unparalleled.
              </p>
              <p className="mt-2 text-sm">
                When infotainment became the buzz word Times Entertainment ,
                Times New Media, Times Music and Radio Mirchi entered this
                lineage. Times Retail with Planet M outlets staging merchandise
                from music to designer watches, books & cafes. An offshoot of
                its highly rated Economic Times Intelligence Group is
                timesofmoney.com, a bank solutions that empowers Indians & Non
                Resident Indians to make the best financial decisions.
              </p>
              <p className="mt-2 text-sm">
                The Times Group has created a galaxy of stars of different
                genres from Femina Miss Worlds and Femina Miss Universes all by
                products of Femina Miss India contests; and played hosts to a
                galaxy of stars at the Filmfare Awards. Also saluted the best &
                the brightest at The Economic Times Awards for Corporate
                Excellence or the Brand Equity Quiz. It has touched the lives of
                its readers & consumers through Exhibitions & Fairs - a spectrum
                from Times Utsav Consumer fairs to Education Events.
              </p>
              <p className="mt-2 text-sm">
                As a publishing house, it has not only sought to bring news but
                to portray the country's changing social scene. Through its
                incisive editorials, The Times of India Group has effectively
                molded public opinion and is indeed an accurate barometer of the
                nation today.
              </p>
              <p className="mt-2 text-sm">
                Its publications are printed using state-of-the-art technology
                at the country's most modern printing presses, offerings not
                only comparable to black and white but superior quality color
                printing as well... the best in the world.
              </p>
            </div>
            <div className="relative bg-purple-800 mt-8 py-10">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920 &q=60&&sat=-100"
                  alt=""
                />
                <div
                  className="absolute inset-0 bg-purple-800 mix-blend-multiply"
                  aria-hidden="true"
                />
              </div>
              <div className="relative mx-auto   py-12 sm:p-16 sm:px-24 lg:py-8 container">
                <h2 className="text-lg md:text-2xl font-bold leading-6 text-white ">
                  Benefit to advertisers
                </h2>
                <p className=" mt-2 text-sm md:text-lg text-white md:max-w-2xl">
                  The Times of India Group is the only media house to give
                  advertisers maximum value for their money and minimum wastage.
                  The range of publications, each with its own specific target
                  audience, helps advertising managers plan the ideal media mix,
                  optimizing the advertising budget.
                </p>
              </div>
            </div>
          </div>
          <div className="  py-4 md:py-6 lg:py-8 container">
            <h3 className=" text-md md:text-lg font-bold leading-6 text-gray-900">
              History
            </h3>
            <p className="mt-2 text-sm">
              Established in 4 November, 1838, this group has entered the
              mainstream of Indian life in every possible way. A dynamic group,
              it has entered the 21st century as a complete media house, with a
              turnover that is the highest in the country.
            </p>
            <p className="mt-2 text-sm">
              The philanthropic arm of the group, the Times Foundation, offers
              Non Government Organizations, institutions & others all over
              India, a platform to converge and address the country's
              developmental needs
            </p>
            <div className=" rounded-md m-auto mt-8">
              <SubscribeNews
                emailFormHandler={emailFormHandler}
                heading="Subscribe to our Newsletter!"
                subHeading="  Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque."
                loading={subcribeEmailLoading}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default aboutus;
