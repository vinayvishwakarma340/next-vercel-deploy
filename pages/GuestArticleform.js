import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import { ImCross } from "react-icons/im";
import SuccessModal from "../Components/Modal/SuccessModal";
import Head from "next/head";
const GuestArticleform = () => {
  const [loading, setLoading] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState([]);
  const [topics, setTopics] = useState("");
  const [upload, setUpload] = useState([]);
  const [uploadUrls, setUploadUrls] = useState([]);
  const [selectedindustry, setSelectedindustry] = useState([]);
  const [industry, setIndustry] = useState([]);
  const [industryvalue, setIndustryvalue] = useState("");
  const [article, setArticle] = useState("");
  const [linkedProfileLink, setLinkedProfileLink] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [title, setTitle] = useState("");
  const [uploadProfilePicture, setUploadProfilePicture] = useState("");
  const [referencesCredits, setReferencesCredits] = useState("");
  const [referencessource, setReferencessource] = useState("");
  const [referencesWebsite, setReferencesWebsite] = useState("");
  const [imgerror, setImgerror] = useState(false);
  const [imgerror1, setImgerror1] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const fetchArticleForm = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    var formdata = new FormData();
    formdata.append("LinkedProfileLink", linkedProfileLink);
    formdata.append("FullName", fullName);
    formdata.append("EmailID", email);
    formdata.append("Mobile", mobile);
    formdata.append("ArticleTopic", selectedTopic);
    formdata.append("Industry", selectedindustry);
    formdata.append("Title", title);
    formdata.append("Article", article);
    formdata.append("UploadProfilePicture", uploadProfilePicture);
    upload.map((item) => {
      formdata.append("Upload", item);
    });
    formdata.append("ReferencesCredits", referencesCredits);
    formdata.append("Referencessource", referencessource);
    formdata.append("ReferencesWebsite", referencesWebsite);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
    };
    fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/WriteWithUs`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          setShowModal(true);
          setLinkedProfileLink("");
          setEmail("");
          setMobile("");
          setTitle("");

          setFullName("");
          setSelectedTopic([]);
          setSelectedindustry([]);
          setUploadProfilePicture("");
          setUpload("");
        } else {
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  const topic = [
    { id: 1, categoryTopic: "Managing People" },
    { id: 2, categoryTopic: "Leadership" },
    { id: 3, categoryTopic: "Strategy" },
    { id: 4, categoryTopic: "Communication" },
    { id: 5, categoryTopic: "Managing Yourself" },
    { id: 6, categoryTopic: "Innovation" },
    { id: 7, categoryTopic: "Technology" },
    { id: 8, categoryTopic: "Entrepreneurship" },
    { id: 9, categoryTopic: "Marketing" },
    { id: 10, categoryTopic: "Managing People" },
    { id: 11, categoryTopic: "Work-Life Balance" },
    { id: 12, categoryTopic: "Others" },
  ];
  useEffect(() => {
    fetchIndustry();
  }, []);
  const fetchIndustry = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      domain: "Industry",
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/getResultviaDomain`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setIndustry(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  const addTopics = (e) => {
    if (!selectedTopic.includes(e)) {
      setSelectedTopic((prev) => {
        return prev.concat(e);
      });
    }
  };

  const addIndusry = (event) => {
    if (!selectedindustry.includes(event)) {
      setSelectedindustry((prev1) => {
        return prev1.concat(event);
      });
    }
  };

  const removeHeading = (r) => {
    const filteredValue = selectedTopic.filter((item) => {
      return item !== r;
    });
    setSelectedTopic(filteredValue);
  };

  const removeIndustry = (e) => {
    let remove = selectedindustry.filter((item) => {
      return item !== e;
    });
    setSelectedindustry(remove);
  };

  const imageHandleChange = (e) => {
    if (upload.length <= 5) {
      if (e.target.files) {
        const fileArray = Array.from(e.target.files).map((file) =>
          URL.createObjectURL(file)
        );

        setUploadUrls((prevImages) => prevImages.concat(fileArray));

        setUpload((prevImages) => [...prevImages, e.target.files[0]]);
        Array.from(e.target.files).map((file) => URL.revokeObjectURL(file));
      }
    }
  };
  const removePhoto = (index) => {
    if (index > -1) {
      let array = upload;
      let array1 = uploadUrls;
      array.splice(index, 1);
      array1.splice(index, 1);
      setUpload(array);
      setUploadUrls(array1);
    }
  };
  const [value, setValue] = useState(0);
  let val = uploadUrls.map((item) => item);

  const renderPhotos = (source) => {
    return (
      source &&
      source.length > 0 &&
      source.map((photo, index) => {
        if (index > 4) {
          return;
        }
        return (
          <div className="relative">
            <img
              src={photo}
              alt="article"
              key={photo}
              className="w-[150px] h-[150px] border mr-5 mb-3"
            />
            <span
              onClick={() => {
                setValue(value + 1);
                removePhoto(index);
              }}
            >
              <ImCross className="absolute top-0 right-5 text-lg cursor-pointer" />
            </span>
          </div>
        );
      })
    );
  };

  const closeModalHandler = (modalType) => {
    setShowModal(false);
  };
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Write For Us - TimesAscent.com`}</title>
        <meta
          name="description"
          content={`
            We welcome you to share your knowledge and experiences for the benefits of job seekers and/or job providers - TimesAscent.com`}
        />

        <link rel="canonical" href="https://timesascent.com/GuestArticleform" />
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
        <meta property="og:title" content="Write For Us - TimesAscent.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content=" We welcome you to share your knowledge and experiences for the benefits of job seekers and/or job providers - TimesAscent.com"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/GuestArticleform"
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
          content="We welcome you to share your knowledge and experiences for the benefits of job seekers and/or job providers - TimesAscent.com"
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
        subHeadingText="We appreciate your interest in writing for us."
        buttonText="OK"
      />
      <MainHeader />
      <div className="bg-white py-5 sm:py-5">
        <div className="mx-auto max-w-md pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-center text-3xl font-bold leading-10 tracking-tight text-gray-900 sm:text-3xl sm:leading-none lg:text-4xl">
            Write for us
          </h1>
          <p className="mx-auto mt-3 max-w-3xl text-center text-sm sm:text-lg leading-normal text-gray-500">
            We welcome you to share your knowledge and experiences for the
            benefits of job seekers and/or job providers.
          </p>
        </div>
      </div>
      <div className="bg-white   sm:overflow-hidden sm:rounded-md">
        <form
          action="#"
          method="POST"
          onSubmit={(e) => {
            e.preventDefault();
            fetchArticleForm();
          }}
        >
          <div className="hidden sm:block" aria-hidden="true">
            <div className="pb-5 lg:pl-24 lg:pr-24">
              <div className="border-t border-gray-200" />
            </div>
          </div>

          <div className="sm:mt-0 lg:pl-24  lg:pr-24 sm:pr-5 sm:pl-5">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Publish Your Article
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Publish your most recent articles with Times Ascent readers’
                    section and allow professional readers, leaders from all
                    know/learn/ learn about your article its area of study, your
                    experiences and your educational trajectory.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="overflow-hidden shadow sm:rounded-md">
                  <div className="bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Full name
                        </label>
                        <input
                          type="text"
                          name="first-name"
                          id="first-name"
                          required
                          autoComplete="given-name"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={(e) => {
                            var re = /^[a-zA-Z ]*$/;
                            if (
                              e.target.value === "" ||
                              re.test(e.target.value)
                            ) {
                              setFullName(e.target.value);
                            }
                          }}
                          value={fullName}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="email-address"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email address
                        </label>
                        <input
                          type="text"
                          name="email-address"
                          id="email-address"
                          required
                          autoComplete="email"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={(e) => {
                            let keyword = e.target.value.toLowerCase();
                            var re = /^[a-z@A-Z.0-9_]*$/;
                            if (keyword === "" || re.test(keyword)) {
                              setEmail(keyword);
                            }
                          }}
                          value={email}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Mobile Number
                        </label>
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          maxLength="10"
                          minLength="0"
                          pattern="^[6789][0-9]{9}$"
                          required
                          aria-describedby="mobile-description"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={(e) => {
                            setMobile(e.target.value);
                          }}
                          value={mobile}
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="company-website"
                          className="block text-sm font-medium text-gray-700"
                        >
                          LinkedIn Profile
                        </label>
                        <div className="mt-1 flex rounded-md shadow-sm">
                          <input
                            type="url"
                            required
                            placeholder="https://www.example.com"
                            name="company-website"
                            id="company-website"
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                            onChange={(e) => {
                              setLinkedProfileLink(e.target.value);
                            }}
                            value={linkedProfileLink}
                          />
                        </div>
                      </div>

                      <div className="col-span-6 sm:col-span-6">
                        <div
                          className="block text-sm font-medium text-gray-700"
                          htmlFor="file-upload"
                        >
                          Upload Your Profile Picture
                        </div>
                        <label htmlFor="file-upload" className="cursor-pointer">
                          <div className="mt-1  items-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                            <div className="space-y-1 text-center">
                              <label htmlFor="file-upload cursor-pointer">
                                {uploadProfilePicture ? (
                                  <>
                                    <label htmlFor="file-upload">
                                      <img
                                        src={URL.createObjectURL(
                                          uploadProfilePicture
                                        )}
                                        className="w-[70px] h-[70px] text-center mx-auto mb-2 border object-contain cursor-pointer"
                                        accept=".png, .jpg, .jpeg"
                                      />
                                    </label>
                                  </>
                                ) : (
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
                                )}
                              </label>

                              <label
                                className="text-sm text-gray-600"
                                htmlFor="file-upload"
                              >
                                <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                  <span className="text-center mx-auto">
                                    {uploadProfilePicture?.name
                                      ? uploadProfilePicture?.name
                                      : "Upload a file"}
                                  </span>
                                  <input
                                    id="file-upload"
                                    name="file-upload"
                                    type="file"
                                    className="cursor-pointer sr-only"
                                    required
                                    accept=".png, .jpg, .jpeg"
                                    onChange={(e) => {
                                      e.target.files[0]?.name.match(
                                        /\.(jpg|jpeg|png|gif|webp)$/
                                      )
                                        ? setUploadProfilePicture(
                                          e.target.files[0]
                                        ) || setImgerror1("")
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:block" aria-hidden="true">
            <div className="py-5 lg:pl-24 lg:pr-24">
              <div className="border-t border-gray-200" />
            </div>
          </div>
          <div>
            <div className="md:grid md:grid-cols-3 md:gap-6 lg:pl-24 lg:pr-24 sm:pr-5 sm:pl-5">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className=" mt-4 text-lg font-medium leading-6 text-gray-900">
                    By publishing you
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                    Enable Readers from all across to benefit from your concepts
                    and experiences.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:col-span-2 md:mt-0">
                <div className="shadow sm:overflow-hidden sm:rounded-md">
                  <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="Title"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Title of your Article
                        </label>
                        <input
                          type="text"
                          name="Title"
                          required
                          id="Title"
                          autoComplete="Title"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={(e) => {
                            setTitle(e.target.value);
                          }}
                          value={title}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          htmlFor="References"
                          className="block text-sm font-medium text-gray-700"
                        >
                          References
                        </label>
                        <input
                          type="text"
                          name="References"
                          id="References"
                          required
                          autoComplete="References"
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                          onChange={(e) => {
                            setReferencessource(e.target.value);
                          }}
                          value={referencessource}
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-6">
                        <label
                          htmlFor="Topic"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Select related Industry (Select multiple industry)
                        </label>

                        <select
                          onChange={(e) => {
                            setIndustryvalue(e.target.value);
                            addIndusry(e.target.value);
                          }}
                          value={industryvalue}
                          id="Topic"
                          name="Topic"
                          required
                          autoComplete="Topic-name"
                          className="truncate cursor-pointer mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 pr-5 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option disabled value={""}>
                            Select Type
                          </option>
                          {industry.map((item) => {
                            return (
                              <option key={item.KeyIndex}>{item.name}</option>
                            );
                          })}
                        </select>
                        {selectedindustry.map((item, index) => {
                          return (
                            <span className=" inline-flex mt-4  break-words	 mr-4 items-center max-w-6 truncate rounded-full bg-purple-100 py-0.5 pl-2.5 pr-1 text-sm font-medium text-indigo-700">
                              <p className=" 	max-w-[150px] sm:max-w-full truncate	">
                                {" "}
                                {item}
                              </p>
                              <button
                                type="button"
                                className="ml-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-indigo-400 hover:bg-purple-200 hover:text-indigo-500 focus:bg-purple-500 focus:text-white focus:outline-none"
                                onClick={() => removeIndustry(item)}
                              >
                                <svg
                                  className="h-2 w-2"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 8 8"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeWidth="1.5"
                                    d="M1 1l6 6m0-6L1 7"
                                  />
                                </svg>
                              </button>
                            </span>
                          );
                        })}
                      </div>
                      <div className="col-span-6 sm:col-span-6">
                        <label
                          htmlFor="Topic-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Choose your Topic (Choose multiple topics)
                        </label>

                        <select
                          onChange={(e) => {
                            setTopics(e.target.value);
                            addTopics(e.target.value);
                          }}
                          value={topics}
                          id="Topic-name"
                          required
                          name="Topic-name"
                          autoComplete="Topic-name"
                          className="mt-1 cursor-pointer block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        >
                          <option selected value={""} disabled>
                            Select Type
                          </option>
                          {topic.map((item) => {
                            return (
                              <option key={item.id} required>
                                {item.categoryTopic}
                              </option>
                            );
                          })}
                        </select>
                        {selectedTopic.map((item, index) => {
                          return (
                            <span className="inline-flex mt-4 mr-4 items-center rounded-full bg-purple-100 py-0.5 pl-2.5 pr-1 text-sm font-medium text-indigo-700">
                              {item}
                              <button
                                type="button"
                                className="ml-1 inline-flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full text-indigo-400 hover:bg-purple-200 hover:text-indigo-500 focus:bg-purple-500 focus:text-white focus:outline-none"
                                onClick={() => removeHeading(item)}
                              >
                                <svg
                                  className="h-2 w-2"
                                  stroke="currentColor"
                                  fill="none"
                                  viewBox="0 0 8 8"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeWidth="1.5"
                                    d="M1 1l6 6m0-6L1 7"
                                  />
                                </svg>
                              </button>
                            </span>
                          );
                        })}
                      </div>
                      <div className="col-span-6 sm:col-span-6">
                        <label
                          htmlFor="article-text"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Article Text
                        </label>

                        <div className="mt-1">
                          <textarea
                            id="article-text"
                            name="article-text"
                            rows={6}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                            placeholder="Please enter your article text here"
                            onChange={(e) => {
                              setArticle(e.target.value);
                            }}
                            value={article}
                          />
                        </div>
                      </div>
                    </div>

                    <label htmlFor="creative" className="cursor-pointer">
                      <label className="block text-sm font-medium text-gray-700 mt-5">
                        {upload.length < 5
                          ? "Upload Relevant Creative for the Article (upload max 5 image)"
                          : "You have uploaded Five the images"}
                      </label>
                      {upload.length < 5 ? (
                        <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                          { }
                          <div className="space-y-1 text-center">
                            <svg
                              className="mx-auto h-12 w-12 text-gray-400"
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
                            <div className=" text-sm text-gray-600">
                              <label
                                htmlFor="creative"
                                className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
                              >
                                <span>Upload a file</span>
                                <input
                                  id="creative"
                                  name="creative"
                                  type="file"
                                  accept=".png, .jpg, .jpeg"
                                  onChange={imageHandleChange}
                                  className="sr-only"
                                />
                              </label>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG up to 10MB
                            </p>
                          </div>
                        </div>
                      ) : (
                        ""
                      )}
                    </label>
                    <div className="inline-flex flex-wrap mt-3 overflow-hidden items-center">
                      {renderPhotos(uploadUrls || [])}
                    </div>
                  </div>
                </div>
                <div className="mt-3  py-3 lg:text-center sm:px-0 lg:mx-auto text-center lg:mb-3">
                  <button
                    type="submit"
                    className="inline-flex justify-center  border border-transparent bg-timesPurple py-2 px-20 text-sm font-medium text-white shadow-sm  hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
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
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default GuestArticleform;
