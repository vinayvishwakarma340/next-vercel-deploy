import React from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import SuccessModal from "../Components/Modal/SuccessModal";
import Head from "next/head";
import BreadCrumbs from "../Components/BreadCrumbs";
import { useRouter } from "next/router";
const MopForm = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [mobile, setMobile] = useState("");
  const [open, setOpen] = useState(false);
  const [companylogo, setCompanylogo] = useState("");
  const [ccompany, setCcompany] = useState("");
  const [cdesignation, setCdesignation] = useState("");
  const [crole, setCrole] = useState("");
  const [growth, setGrowth] = useState("");
  const [formValues, setFormValues] = useState([
    { companyname: "", designation: "", role: "" },
  ]);
  const [imgerror, setImgerror] = useState(false);
  const Api = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );

    var formdata = new FormData();
    formdata.append("FullName", fullname);
    formdata.append("Email", email);
    formdata.append("Mobile", mobile);
    formdata.append("CurrentCompany", ccompany);
    formdata.append("CurrentDesignation", cdesignation);
    formdata.append("CurrentRole", crole);
    formdata.append("PreviousCompany", cname);
    formdata.append("PreviousDesignation", desi);
    formdata.append("PreviousRole", prl);
    formdata.append("GrowthStory", growth);
    formdata.append("Photo", companylogo);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    fetch(`${process.env.Live_API_URL}/v1/admin1_1/MOPJourney`, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200 && result.status === "Success") {
          setShowModal(true);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  let handleChange = (i, e) => {
    let newFormValues = [...formValues];
    newFormValues[i][e.target.name] = e.target.value;
    setFormValues(newFormValues);
  };

  let addFormFields = () => {
    setFormValues([
      ...formValues,
      { companyname: "", designation: "", role: "" },
    ]);
  };

  let removeFormFields = (i) => {
    let newFormValues = [...formValues];
    newFormValues.splice(i, 1);
    setFormValues(newFormValues);
  };

  let cname = formValues.map((item) => {
    return item.companyname;
  });
  let desi = formValues.map((item) => {
    return item.designation;
  });
  let prl = formValues.map((item) => {
    return item.role;
  });
  const closeModalHandler = (modalType) => {
    setShowModal(false);
    router.push("/");
  };
  const pages = [
    {
      name: "Movement Of Professionals",
      href: "/movement-of-professionals",
      current: false,
    },
    {
      name: "Professionals growth journey",
      href: "/movement-of-professionals-form",
      current: true,
    },
  ];
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Share your Growth journey - TimesAscent.com`}</title>
        <meta
          name="description"
          content={`Share your work profile with your Growth Journey to get Featured on Times Ascent. -TimesAscent.com`}
        />

        <link
          rel="canonical"
          href="https://timesascent.com/professionals-growth-journey"
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
          content="   Share your Growth journey - TimesAscent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Share your work profile with your Growth Journey to get Featured on Times Ascent. -TimesAscent.com"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/professionals-growth-journey"
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
          content="   Share your Growth journey - TimesAscent.com"
        />
        <meta
          property="twitter:description"
          content="Share your work profile with your Growth Journey to get Featured on Times Ascent. -TimesAscent.com"
        />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:site"
          content="https://twitter.com/@timesascent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
      </Head>{" "}
      <SuccessModal
        openModal={showModal}
        closeModal={() => closeModalHandler()}
        headingText="Thanks for submitting your details !!"
        subHeadingText="Please check your E-mail. 
 For any queries, please feel free to write at  nirmam.sanghvi@timesgroup.com "
        buttonText="OK"
      />
      <div className="bg-white">
        <MainHeader />
        <main>
          {/* Header */}
          <div className="bg-gray-50 py-5 sm:py-5">
            <div className="mx-auto max-w-md pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-center text-3xl font-bold leading-10 tracking-tight text-gray-900 sm:text-3xl sm:leading-none lg:text-4xl">
                Share your Growth journey
              </h1>
              <p className="mx-auto mt-3 max-w-3xl text-center text-sm sm:text-lg leading-normal text-gray-500">
                Share your work profile with your Growth Journey to get Featured
                on Times Ascent.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="relative bg-white">
            <div className="lg:absolute lg:inset-0">
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                  className="h-56 w-full object-cover lg:absolute lg:h-full"
                  src="./Advertisewithus/Share_Profile.webp"
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
                      Api();
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
                          pattern="^(\w\w+)\s(\w+)$"
                          onChange={(e) => setFullname(e.target.value)}
                          value={fullname}
                          autoComplete="given-name"
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
                          onChange={(e) => setMobile(e.target.value)}
                          value={mobile}
                          aria-describedby="phone-description"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
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
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="Company"
                      >
                        Photo
                      </div>
                      <label htmlFor="Company" className="cursor-pointer">
                        <div className="mt-1  items-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                          <div className="space-y-1 text-center">
                            <label htmlFor="Company cursor-pointer">
                              <label htmlFor="Company">
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
                              htmlFor="Company"
                            >
                              <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                <span className="text-center mx-auto mb-1">
                                  {companylogo
                                    ? companylogo.name
                                    : "Upload a file"}
                                </span>
                                <input
                                  id="Company"
                                  name="Company"
                                  className="cursor-pointer sr-only"
                                  required
                                  accept=".png, .jpg, .jpeg"
                                  type="file"
                                  onChange={(e) => {
                                    e.target.files[0]?.name.match(
                                      /\.(jpg|jpeg|png|gif|webp)$/
                                    )
                                      ? setCompanylogo(e.target.files[0]) ||
                                      setImgerror("")
                                      : setImgerror(
                                        "Please Upload In Jpg/Png/Webp Format Only"
                                      );
                                  }}
                                />
                              </label>
                            </label>
                            {imgerror ? (
                              <p className="text-xs text-red-500">{imgerror}</p>
                            ) : (
                              <p className="text-xs text-gray-500">
                                PNG, JPG, Webp up to 10MB
                              </p>
                            )}
                          </div>
                        </div>
                      </label>
                    </div>

                    <label
                      htmlFor="Current-company"
                      className="block text-sm font-medium text-gray-700 bg-gray-200 rounded-md p-4 w-full"
                    >
                      CURRENT COMPANY
                    </label>
                    <div className="sm:col-span-2 ">
                      <label
                        htmlFor="company-name"
                        className="block text-sm font-medium text-gray-700 mt-0"
                      >
                        Company Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="company-name"
                          required
                          id="company-name"
                          autoComplete="company-name"
                          onChange={(e) => setCcompany(e.target.value)}
                          value={ccompany}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="designation"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Designation
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="designation"
                          required
                          id="designation"
                          autoComplete="designation"
                          onChange={(e) => setCdesignation(e.target.value)}
                          value={cdesignation}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="role"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Role
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="role"
                          required
                          id="role"
                          autoComplete="role"
                          onChange={(e) => setCrole(e.target.value)}
                          value={crole}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    <div className="sm:col-span-2 inline-flex">
                      <label
                        htmlFor="Previous-company"
                        className=" text-sm font-medium text-gray-700 inline-flex items-center "
                      >
                        PREVIOUS COMPANY
                      </label>
                      <div>
                        <button
                          type="button"
                          className="inline-flex ml-2 items-center px-4 py-2 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-timesPurple  hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
                          onClick={() => {
                            addFormFields();
                          }}
                        >
                          Add More{" "}
                        </button>
                      </div>
                    </div>

                    <div className=" sm:col-span-2">
                      {formValues.map((element, index) => {
                        return (
                          <div className="mb-6  ">
                            {" "}
                            <div className="sm:col-span-2 ">
                              <div className="inline-flex items-center">
                                <label
                                  htmlFor="companyname"
                                  className="block text-sm font-medium text-gray-700 mt-0"
                                >
                                  Company Name{" "}
                                </label>
                                <div>
                                  {index ? (
                                    <>
                                      <XCircleIcon
                                        className="h-6 text-sm ml-1 cursor-pointer"
                                        onClick={() => removeFormFields(index)}
                                      />
                                    </>
                                  ) : null}
                                </div>
                              </div>

                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="companyname"
                                  required
                                  id="companyname"
                                  autoComplete="companyname"
                                  value={element.companyname || ""}
                                  onChange={(e) => handleChange(index, e)}
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-2  ">
                              <label
                                htmlFor="designation"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Designation
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="designation"
                                  required
                                  id="designation"
                                  autoComplete="designation"
                                  value={element.designation || ""}
                                  onChange={(e) => handleChange(index, e)}
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div className="sm:col-span-2  ">
                              <label
                                htmlFor="role"
                                className="block text-sm font-medium text-gray-700"
                              >
                                Role
                              </label>
                              <div className="mt-1">
                                <input
                                  type="text"
                                  name="role"
                                  required
                                  id="role"
                                  autoComplete="role"
                                  value={element.role || ""}
                                  onChange={(e) => handleChange(index, e)}
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="Message"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Growth Story
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
                          onChange={(e) => setGrowth(e.target.value)}
                          value={growth}
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

export default MopForm;
