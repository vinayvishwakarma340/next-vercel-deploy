import React from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";

import BreadCrumbs from "../Components/BreadCrumbs";
import SuccessModal from "../Components/Modal/SuccessModal";
import Head from "next/head";
const Enquiry = () => {
  const [mobile, setMobile] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyWebsiteUrl, setCompanyWebsiteUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const AdvertiseApi = async () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      FullName: fullname,
      Mobile: mobile,
      CompanyName: companyName,
      CompanyWebsiteUrl: companyWebsiteUrl,
      Email: email,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/AdvertiseWithUs`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          setShowModal(true);
          setFullname(" ");
          setEmail(" ");
          setMobile(" ");
          setCompanyName(" ");
          setCompanyWebsiteUrl(" ");
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };
  const pages = [
    { name: "Advertise With Us", href: "/advertise-with-us", current: false },
    { name: "Enquiry", href: "/enquiry", current: true },
  ];
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Enquiry - TimesAscent.com`}</title>
        <meta
          name="description"
          content={`You can submit your ad enquiry by filling up the form and submitting it. -TimesAscent.com`}
        />

        <link rel="canonical" href="https://timesascent.com/enquiry" />
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
        <meta property="og:title" content="Enquiry - TimesAscent.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="You can submit your ad enquiry by filling up the form and submitting it. -TimesAscent.com"
        />
        <meta property="og:url" content="https://timesascent.com/enquiry" />
        <meta
          property="og:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta property="twitter:title" content="Enquiry - TimesAscent.com" />
        <meta
          property="twitter:description"
          content="You can submit your ad enquiry by filling up the form and submitting it. -TimesAscent.com"
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
      <SuccessModal
        openModal={showModal}
        closeModal={() => closeModalHandler()}
        headingText="Thank-you !!"
        subHeadingText="Your information has been saved. You will be contacted shortly."
        buttonText="OK"
      />
      <div className="bg-white">
        <MainHeader />
        <main>
          {/* Header */}
          <div className="bg-gray-50 py-5 sm:py-5">
            <div className="mx-auto max-w-md pl-4 pr-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-center text-3xl font-bold leading-10 tracking-tight text-gray-900 sm:text-3xl sm:leading-none lg:text-4xl">
                Advertise With Us
              </h1>
              <p className="mx-auto mt-3 max-w-3xl text-center text-sm sm:text-lg leading-normal text-gray-500">
                Get your Website/Company featured on Times Ascent and amplify
                your reach to make your presence felt.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="relative bg-white">
            <div className="lg:absolute lg:inset-0">
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                  className="h-56 w-full object-cover lg:absolute lg:h-full"
                  src="./Advertisewithus/Advertise_With_Us_1.webp"
                  alt=""
                />
              </div>
            </div>

            <div className="relative py-4 px-4 sm:py-8 sm:px-6 lg:mx-auto lg:grid lg:max-w-full align-center block lg:grid-cols-2 lg:px-8 lg:py-8">
              <div className="lg:pr-8">
                <div className="mx-auto max-w-md sm:max-w-lg lg:mx-28 mb-6">
                  <BreadCrumbs data={pages} />
                </div>
                <div className="mx-auto max-w-md sm:max-w-lg lg:mx-28">
                  <form
                    action="#"
                    method="POST"
                    onSubmit={(e) => {
                      e.preventDefault();
                      AdvertiseApi();
                    }}
                    className="mt-0 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="full-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="full-name"
                          required
                          id="full-name"
                          autoComplete="given-name"
                          onChange={(e) => {
                            setFullname(e.target.value);
                          }}
                          value={fullname}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          autoComplete="email"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          onChange={(e) => {
                            setEmail(e.target.value);
                          }}
                          value={email}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Phone
                        </label>
                      </div>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          maxLength="10"
                          minLength="0"
                          pattern="^[6789][0-9]{9}$"
                          required
                          aria-describedby="phone-description"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          onChange={(e) => {
                            setMobile(e.target.value);
                          }}
                          value={mobile}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="company-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="company-name"
                          required
                          id="company-name"
                          autoComplete="organization"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          onChange={(e) => {
                            setCompanyName(e.target.value);
                          }}
                          value={companyName}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="company-website"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company Website
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="url"
                          placeholder="https://www.example.com"
                          name="company-website"
                          id="company-website"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          onChange={(e) => {
                            setCompanyWebsiteUrl(e.target.value);
                          }}
                          value={companyWebsiteUrl}
                        />
                      </div>
                    </div>
                    <div className="text-center sm:col-span-2 md:w-1/2 w-full m-auto">
                      <button
                        type="submit"
                        className="inline-flex justify-center  border border-transparent   w-full text-sm font-medium text-white shadow-sm bg-timesPurple px-4 py-2 text-center   hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2 lg:mt-3 lg:mb-0 mb-3 mt-2"
                      >
                        {loading ? (
                          <ThreeDots
                            height="20"
                            width="30"
                            radius="9"
                            color="white"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            wrapperClassName=""
                            visible={true}
                          />
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Enquiry;
