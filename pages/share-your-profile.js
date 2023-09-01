import React from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";

import { XMarkIcon } from "@heroicons/react/24/outline";
import SuccessModal from "../Components/Modal/SuccessModal";
import Head from "next/head";
import BreadCrumbs from "../Components/BreadCrumbs";

import { useRouter } from "next/router";

const HrForm = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [fullname, setFullname] = useState("");
  const [companylogo, setCompanylogo] = useState("");
  const [connect, setConnect] = useState("");
  const [uploadcv, setUploadcv] = useState("");
  const [profile, setProfile] = useState("");
  const [arr, setArr] = useState([{ awards: "" }]);
  const [imgerror, setImgerror] = useState(false);
  const [imgerror1, setImgerror1] = useState(false);
  const router = useRouter();
  const inputArr1 = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];
  const [arr1, setArr1] = useState(inputArr1);

  const addInput1 = () => {
    setArr1((s) => {
      return [
        ...s,
        {
          type: "text",
          value: "",
        },
      ];
    });
  };

  const handleChange1 = (e) => {
    e.preventDefault();

    const index = e.target.id;
    setArr1((s) => {
      const newArr1 = s.slice();
      newArr1[index].value = e.target.value;

      return newArr1;
    });
  };

  var Awardsac = arr1.map((item) => {
    return item.value;
  });

  const Api = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    var formdata = new FormData();
    formdata.append("FullName", fullname);
    formdata.append("Connect", connect);
    formdata.append("AwardsAchievements", Awardsac);
    formdata.append("IsLive", "1");
    formdata.append("UploadCV", uploadcv);
    formdata.append("CompanyLogo", companylogo);
    formdata.append("ProfilePicture", profile);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/AddRecognizingHrExc`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200 && result.status === "Success") {
          setShowModal(true);
          setProfile("");
          setUploadcv("");
          setConnect("");
          setCompanylogo("");
          setArr("");
          setFullname("");
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  const removeValue1 = (i) => {
    let newRemove1 = [...arr1];
    newRemove1.splice(i, 1);
    setArr1(newRemove1);
  };
  const closeModalHandler = (modalType) => {
    setShowModal(false);
    router.push("/");
  };

  const pages = [
    {
      name: "HR Professionals",
      href: "/hrprofessionals",
      current: false,
    },
    {
      name: "Share your profile",
      href: "",
      current: true,
    },
  ];
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Learn from Human Resource management professionals - timesascent.com`}</title>
        <meta
          name="description"
          content={`Share your work profile with us if you are a leading HR
                Professional for
                getting your profile featured on-TimesAscent.com`}
        />
        <link
          rel="canonical"
          href="https://timesascent.com/share-your-profile"
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
          content="Share your Profile - TimesAscent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Share your work profile with us if you are a leading HR
                Professional for
                getting your profile featured on-TimesAscent.com"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/share-your-profile"
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
          content="Share your Profile - TimesAscent.com"
        />
        <meta
          property="twitter:description"
          content="Share your work profile with us if you are a leading HR
                Professional for
                getting your profile featured on-TimesAscent.com"
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
        subHeadingText="Your registration details has been saved."
        buttonText="OK"
      />
      <div className="bg-white">
        <MainHeader />
        <main>
          {/* Header */}
          <div className="bg-gray-50 py-5 sm:py-5">
            <div className="mx-auto max-w-md pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-center text-3xl font-bold leading-10 tracking-tight text-gray-900 sm:text-3xl sm:leading-none lg:text-4xl">
                Share your Profile
              </h1>
              <p className="mx-auto mt-3 max-w-3xl text-center text-sm sm:text-lg leading-normal text-gray-500">
                Share your work profile with us if you are a leading HR
                Professional who contributes to building and shaping HR
                Practices in your organisation and grab the opportunity of
                getting your profile featured on Times Ascent.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="relative bg-white">
            <div className="lg:absolute lg:inset-0">
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                  className="h-56 w-full object-cover lg:absolute lg:h-full"
                  src="./Advertisewithus/HR.webp"
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
                        htmlFor="LinkedIn"
                        className="block text-sm font-medium text-gray-700"
                      >
                        LinkedIn Profile Link
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="url"
                          placeholder="https://www.example.com"
                          name="LinkedIn"
                          id="LinkedIn"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          onChange={(e) => {
                            setConnect(e.target.value);
                          }}
                          value={connect}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="file-upload"
                      >
                        Upload a document
                      </div>
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
                              htmlFor="file-upload"
                            >
                              <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                <span className="text-center mx-auto mb-1">
                                  {uploadcv ? uploadcv.name : "Upload a file"}
                                </span>
                                <input
                                  id="file-upload"
                                  name="file-upload"
                                  type="file"
                                  className="cursor-pointer sr-only"
                                  required
                                  accept=".png, .jpg, .jpeg, .docx, .pdf, .docx"
                                  onChange={(e) => {
                                    setUploadcv(e.target.files[0]);
                                  }}
                                />
                              </label>
                            </label>
                            <p className="text-xs text-gray-500">
                              DOCX, JPG, PDF up to 10MB
                            </p>
                          </div>
                        </div>
                      </label>
                    </div>

                    <div className="sm:col-span-2">
                      <div
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="Company"
                      >
                        Company Logo
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
                                    : "Company Logo"}
                                </span>
                                <input
                                  id="Company"
                                  name="Company"
                                  className="cursor-pointer sr-only"
                                  required
                                  accept=".png, .jpg, .jpeg, .webp"
                                  type="file"
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
                                PNG, JPG, Webp up to 10MB
                              </p>
                            )}
                          </div>
                        </div>
                      </label>
                    </div>

                    <div className="sm:col-span-2">
                      <div
                        className="block text-sm font-medium text-gray-700"
                        htmlFor="Profile"
                      >
                        Profile Picture
                      </div>
                      <label htmlFor="Profile" className="cursor-pointer">
                        <div className="mt-1  items-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                          <div className="space-y-1 text-center">
                            <label htmlFor="Profile cursor-pointer">
                              <label htmlFor="Profile">
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
                              htmlFor="Profile"
                            >
                              <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                <span className="text-center mx-auto mb-1">
                                  {profile
                                    ? profile.name
                                    : "Upload your profile"}
                                </span>
                                <input
                                  id="Profile"
                                  name="Profile"
                                  type="file"
                                  className="cursor-pointer sr-only"
                                  required
                                  accept=".png, .jpg, .jpeg, .webp"
                                  onChange={(e) => {
                                    e.target.files[0]?.name.match(
                                      /\.(jpg|jpeg|png|gif|webp)$/
                                    )
                                      ? setProfile(e.target.files[0]) ||
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

                    <div className="sm:col-span-2 inline-flex items-center">
                      <label
                        htmlFor="Awards/Achievements"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Awards/Achievements
                      </label>

                      <div>
                        <button
                          type="button"
                          className="inline-flex ml-2 items-center px-4 py-2 border border-transparent text-xs font-medium rounded-full shadow-sm text-white  bg-timesPurple  hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
                          onClick={() => addInput1()}
                        >
                          Add More
                        </button>
                      </div>
                    </div>
                    <div className="sm:col-span-2 ">
                      {arr1.map((item, i) => {
                        return (
                          <>
                            <div className=" mt-2 relative">
                              <input
                                type="text"
                                name="awards"
                                id={i}
                                value={item.value}
                                onChange={handleChange1}
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                              />

                              {i ? (
                                <>
                                  <XMarkIcon
                                    className=" text-xs ml-2 h-6 font-extrabold absolute top-2 right-1 cursor-pointer"
                                    onClick={() => removeValue1(i)}
                                  />
                                </>
                              ) : null}
                            </div>
                          </>
                        );
                      })}
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

export default HrForm;
