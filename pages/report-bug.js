import Head from "next/head";
import React from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import BreadCrumbs from "../Components/BreadCrumbs";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import SuccessModal from "../Components/Modal/SuccessModal";

const ReportBug = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mobile, setMobile] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [bugType, setBugType] = useState("");
  const [subject, setSubject] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");

  const ReportabugApi = async () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      CandidateId: "2101201",
      Email: email,
      Mobile: mobile,
      Name: fullname,
      FeedbacktypeandBug: bugType,
      Subject: subject,
      Comment: message,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/FeedbackandBug`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          setShowModal(true);
          setFullname(" ");
          setEmail(" ");
          setMobile(" ");
          setAddress(" ");
          setBugType(" ");
          setMessage(" ");
          setSubject(" ");
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => setLoading(false));
  };

  const closeModalHandler = () => {
    setShowModal(false);
  };
  const pages = [
    {
      name: "Report a bug",
      href: "/report-bug",
      current: true,
    },
  ];

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Report a bug - TimesAscent.com`}</title>
        <meta
          name="description"
          content={`Please report any bug or issues you find in the webiste and help us improve TimesAscent.com`}
        />
        <link rel="canonical" href="https://timesascent.com/report-bug" />
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
        <meta property="og:title" content="Report a bug - TimesAscent.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Please report any bug or issues you find in the webiste and help us improve TimesAscent.com"
        />
        <meta property="og:url" content="https://timesascent.com/report-bug" />
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
          content="Report a bug - TimesAscent.com"
        />
        <meta
          property="twitter:description"
          content="Please report any bug or issues you find in the webiste and help us improve TimesAscent.com"
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
                  name: "Report a bug",
                },
              ],
            }),
          }}
        />
      </Head>
      <SuccessModal
        openModal={showModal}
        closeModal={() => closeModalHandler()}
        headingText="Thank-you !!"
        subHeadingText="Our team will get this issue resolved."
        buttonText="OK"
      />
      <div className="bg-white">
        <MainHeader />
        <main>
          {/* Header */}
          <div className="bg-gray-50 py-5 sm:py-5">
            <div className="mx-auto max-w-md pl-4 pr-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-center text-3xl font-bold leading-10 tracking-tight text-gray-900 sm:text-3xl sm:leading-none lg:text-4xl">
                Report a bug
              </h1>
              <p className="mx-auto mt-3 max-w-3xl text-center text-sm sm:text-lg leading-normal text-gray-500">
                Please report any issues you find on this website.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="relative bg-white">
            <div className="lg:absolute lg:inset-0">
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                  className="h-56 w-full object-cover lg:absolute lg:h-full"
                  src="./Advertisewithus/Report.webp"
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
                      ReportabugApi();
                    }}
                    className="mt-0 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full name
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
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Phone
                      </label>
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

                    <div>
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
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Subject
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="subject"
                          required
                          id="subject"
                          autoComplete="subject"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          onChange={(e) => {
                            setSubject(e.target.value);
                          }}
                          value={subject}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Select Bug Type
                      </label>
                      <select
                        required
                        onChange={(e) => setBugType(e.target.value)}
                        className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                      >
                        <option value={""} disabled selected={bugType === ""}>
                          --Select Type--
                        </option>
                        <option value="Signup or Login">Signup or Login</option>
                        <option value="Search">Search</option>
                        <option value="Apply for Job">Apply for Job</option>
                        <option value="Not receiving emails">
                          Not receiving emails
                        </option>
                        <option value="Unable to upload resume">
                          Unable to upload resume
                        </option>
                        <option value="General Feedback ">
                          General feedback{" "}
                        </option>
                        <option value="Others">Others</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="address"
                          id="address"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          onChange={(e) => {
                            setAddress(e.target.value);
                          }}
                          value={address}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="Message"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Message
                        </label>
                        <span id="Message" className="text-sm text-gray-500">
                          Max. 300 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="Message"
                          name="Message"
                          aria-describedby="how-can-we-help-description"
                          rows={4}
                          required
                          onChange={(e) => setMessage(e.target.value)}
                          value={message}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
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

export default ReportBug;
