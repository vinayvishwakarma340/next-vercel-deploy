import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import BreadCrumbs from "../Components/BreadCrumbs";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";

import SuccessModal from "../Components/Modal/SuccessModal";

const CorporatesForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [companylogo, setCompanylogo] = useState("");
  const [upload, setUpload] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [initiative, setInitiative] = useState("");
  const [website, setWebsite] = useState("");
  const [uploadUrls, setUploadUrls] = useState([]);
  const [images, setImages] = useState([]);
  const [date, setDate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imgerror, setImgerror] = useState(false);
  const [imgerror1, setImgerror1] = useState(false);
  const pages = [
    { name: "Corporates Care", href: "/corporates-care", current: false },
    {
      name: "Corporates Care Form",
      href: "/corporates-care-request-form",
      current: true,
    },
  ];
  const formdatainsertApi = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );

    var formdata = new FormData();
    formdata.append("Name", fullname);
    formdata.append("Email", email);
    formdata.append("Mobile", mobile);
    formdata.append("Type", "corporatescare");
    formdata.append("ShortDescription", shortDesc);
    formdata.append("IsLive", "1");
    formdata.append("CompanyLogo", companylogo);
    formdata.append("CompanyWebsite", website);
    formdata.append("InitiativeName", initiative);
    formdata.append("EventDate", date);
    formdata.append("EventLocation", location);
    formdata.append("InitiativeDesc", initiative);
    formdata.append("UploadDocument", upload);
    for (let i = 0; i < uploadUrls.length; i++) {
      formdata.append("Images", uploadUrls[i]);
    }

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      `${process.env.Live_API_URL}/adminapi/AddWecareMOPRequest`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200 && result.status === "SUCCESS") {
          setShowModal(true);
          setFullname("");
          setEmail("");
          setMobile("");
          setShortDesc("");
          setInitiative("");
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  const imageHandlerChange = (e) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setImages(fileArray);
      setUploadUrls(e.target.files);
    }
  };
  const closeModalHandler = (modalType) => {
    setShowModal(false);
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>{"Corporates Care Request Form- TimesAscent.com"}</title>
        <meta
          name="description"
          content={`Times Ascent' Corporate care is a section established
                exclusively for corporate employees.`}
        />
        <link
          rel="canonical"
          href="https://timesascent.com/corporates-care-request-form"
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
        <meta property="og:title" content="Corporates Care - TimesAscent.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Times Ascent' Corporate care is a section established exclusively for corporate employees"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/corporates-care-request-form"
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
          content="Corporates Care - TimesAscent.com"
        />
        <meta
          property="twitter:description"
          content="Times Ascent' Corporate care is a section established exclusively for corporate employees"
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
        subHeadingText="Your story with us. Our team will connect with you soon."
        buttonText="OK"
      />
      <div className="bg-white">
        <MainHeader />
        <main>
          {/* Header */}
          <div className="bg-gray-50 py-5 sm:py-5">
            <div className="mx-auto max-w-md pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-center text-3xl font-bold leading-10 tracking-tight text-gray-900 sm:text-3xl sm:leading-none lg:text-4xl">
                Corporates Care
              </h1>
              <p className="mx-auto mt-3 max-w-3xl text-center text-sm sm:text-lg leading-normal text-gray-500">
                Times Ascent' Corporate care is a section established
                exclusively for corporate employees, business owners, and
                industrialists to showcase their initiatives and acts that have
                improved or revolutionised their setting and had a beneficial
                impact on it.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="relative bg-white">
            <div className="lg:absolute lg:inset-0">
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                  className="h-56 w-full object-cover lg:absolute lg:h-full"
                  src="./Advertisewithus/Corporates_Care.webp"
                  alt="corportaescareimage"
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
                      formdatainsertApi();
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
                            setWebsite(e.target.value);
                          }}
                          value={website}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="name-of-the-initiative"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Event Location
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="name-of-the-initiative"
                          required
                          id="name-of-the-initiative"
                          autoComplete="name-of-the-initiative"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          onChange={(e) => {
                            setLocation(e.target.value);
                          }}
                          value={location}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="name-of-the-initiative"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Event Date
                      </label>
                      <div className="mt-1">
                        <input
                          type="date"
                          name="name-of-the-initiative"
                          required
                          id="name-of-the-initiative"
                          autoComplete="name-of-the-initiative"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          onChange={(e) => {
                            setDate(e.target.value);
                          }}
                          value={date}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="name-of-the-initiative"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name of the initiative
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="name-of-the-initiative"
                          required
                          id="name-of-the-initiative"
                          autoComplete="name-of-the-initiative"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          onChange={(e) => {
                            setInitiative(e.target.value);
                          }}
                          value={initiative}
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="company-logo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Company Logo
                      </label>
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <div className="mt-1  items-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                          <div className="space-y-1 text-center">
                            <label htmlFor="file-upload cursor-pointer">
                              <label htmlFor="file-upload">
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400 cursor-pointer"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </label>
                            </label>

                            <label
                              className="text-sm text-gray-600"
                              htmlFor="company-logo"
                            >
                              <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                <span className="text-center mx-auto">
                                  {companylogo?.name
                                    ? companylogo?.name
                                    : "Upload a file"}
                                </span>
                                <input
                                  id="company-logo"
                                  name="company-logo"
                                  type="file"
                                  className="cursor-pointer sr-only"
                                  required
                                  accept=".png, .jpg, .jpeg, .webp"
                                  onChange={(e) => {
                                    e.target.files[0]?.name.match(
                                      /\.(jpg|jpeg|png|gif|webp)$/
                                    )
                                      ? setCompanylogo(e.target.files[0]) ||
                                      setImgerror1("")
                                      : setImgerror1(
                                        "Please Upload In Jpg/Png/Webp Format Only"
                                      );
                                  }}
                                />
                              </label>
                            </label>
                            {imgerror1 ? (
                              <p className="text-xs text-red-500">
                                {imgerror1}
                              </p>
                            ) : (
                              <p className="text-xs text-gray-500">
                                PNG, JPG, GIF, WEBP up to 10MB
                              </p>
                            )}
                          </div>
                        </div>
                      </label>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="images-from-the-event"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Images from the event
                      </label>
                      <label
                        htmlFor="images-from-the-event"
                        className="cursor-pointer"
                      >
                        <div className="mt-1  items-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                          <div className="space-y-1 text-center">
                            <label htmlFor="images-from-the-event cursor-pointer">
                              <label htmlFor="images-from-the-event">
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400 cursor-pointer"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </label>
                            </label>

                            <label
                              className="text-sm text-gray-600"
                              htmlFor="images-from-the-event"
                            >
                              <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                <span className="text-center mx-auto">
                                  {uploadUrls?.length ? (
                                    <>
                                      {uploadUrls?.length > 1
                                        ? `${uploadUrls?.length}  Images`
                                        : `${uploadUrls?.length}  Image`}
                                    </>
                                  ) : (
                                    "Upload a file"
                                  )}
                                </span>
                                <input
                                  id="images-from-the-event"
                                  name="images-from-the-event"
                                  type="file"
                                  multiple
                                  className="cursor-pointer sr-only"
                                  required
                                  accept=".png, .jpg, .jpeg"
                                  onChange={(e) => {
                                    imageHandlerChange(e);
                                  }}
                                />
                              </label>
                            </label>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF up to 10MB
                            </p>
                          </div>
                        </div>
                      </label>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="upload-a-document"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Upload a document
                      </label>
                      <label htmlFor="file-upload" className="cursor-pointer">
                        <div className="mt-1  items-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                          <div className="space-y-1 text-center">
                            <label htmlFor="file-upload cursor-pointer">
                              <label htmlFor="file-upload">
                                <svg
                                  className="mx-auto h-12 w-12 text-gray-400 cursor-pointer"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 48 48"
                                  aria-hidden="true"
                                >
                                  <path
                                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </label>
                            </label>

                            <label
                              className="text-sm text-gray-600"
                              htmlFor="upload-a-document"
                            >
                              <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                <span className="text-center mx-auto">
                                  {upload?.name
                                    ? upload?.name
                                    : "Upload a file"}
                                </span>
                                <input
                                  id="upload-a-document"
                                  name="upload-a-document"
                                  type="file"
                                  className="cursor-pointer sr-only"
                                  accept=".docx, .pdf"
                                  required
                                  onChange={(e) => {
                                    e.target.files[0]?.name.match(
                                      /\.(docx|pdf)$/
                                    )
                                      ? setUpload(e.target.files[0]) ||
                                      setImgerror("")
                                      : setImgerror(
                                        "Please Upload In docx/pdf Format Only"
                                      );
                                  }}
                                />
                              </label>
                            </label>
                            {imgerror ? (
                              <p className="text-xs text-red-500">{imgerror}</p>
                            ) : (
                              <p className="text-xs text-gray-500">
                                DOCX, PDF up to 10MB
                              </p>
                            )}
                          </div>
                        </div>
                      </label>
                    </div>

                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="how-can-we-help"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Description of the initiative
                        </label>
                        <span
                          id="how-can-we-help-description"
                          className="text-sm text-gray-500"
                        >
                          Max. 300 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="how-can-we-help"
                          name="how-can-we-help"
                          aria-describedby="how-can-we-help-description"
                          rows={4}
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          onChange={(e) => {
                            setShortDesc(e.target.value);
                          }}
                          value={shortDesc}
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

export default CorporatesForm;
