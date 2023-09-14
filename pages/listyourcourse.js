import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import BreadCrumbs from "../Components/BreadCrumbs";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import SuccessModal from "../Components/Modal/SuccessModal";
const ListYourCourse = () => {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();
  const [courseName, setCourseName] = useState("");
  const [courseCategory, setCourseCategory] = useState("");
  const [courseShortDescription, setCourseShortDescription] = useState("");
  const [courseType, setCourseType] = useState("");
  const [platformName, setPlatformName] = useState("");
  const [courseLogo, setCourseLogo] = useState("");
  const [displayCardImage, setDisplayCardImage] = useState("");
  const [minutesDuration, setMinutesDuration] = useState();
  const [hoursDuration, setHoursDuration] = useState();
  const [redirectionUrl, setRedirectionUrl] = useState("");
  const [courseCategoryRadio, setCourseCategoryRadio] = useState("");
  const [imgerror, setImgerror] = useState(false);
  const [imgerror1, setImgerror1] = useState(false);
  const insertCourse = () => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Authorization", process.env.API_TOKEN_AUTH_SERVER);

    var formdata = new FormData();
    formdata.append("courseName", courseName);
    formdata.append("email", email);
    formdata.append("courseCategory", courseCategory);
    formdata.append("courseType", courseType);
    formdata.append("platformName", platformName);
    formdata.append("course_desc", courseShortDescription);
    formdata.append("courseLogo", courseLogo);
    formdata.append("courseDisplayCard", displayCardImage);
    formdata.append("courseRelevance", courseCategoryRadio);
    formdata.append(
      "courseDuration",
      `${hoursDuration} hours ${minutesDuration} minutes`
    );
    formdata.append("redirectionUrl", redirectionUrl);
    formdata.append("mobile", mobile);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/requesttoPublishCourse`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200 && result.status === "SUCCESS") {
          setShowModal(true);
          setRedirectionUrl("");
          setHoursDuration("");
          setMinutesDuration("");
          setDisplayCardImage("");

          setCourseLogo("");
          setPlatformName("");
          setCourseType("");
          setCourseShortDescription("");
          setCourseCategory("");
          setCourseName("");
          setEmail("");
          setMobile("");
        } else {
          alert("Something went wrong. Please try again...");
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  const category = [
    {
      id: 1,
      categoryName: "Artificial Intelligence",
    },
    {
      id: 2,
      categoryName: "Architecture and Interior Designing",
    },

    {
      id: 3,
      categoryName: "Big Data",
    },

    {
      id: 4,
      categoryName: "Blockchain",
    },

    {
      id: 5,
      categoryName: "Business Management",
    },
    {
      id: 6,
      categoryName: "Career Guidance",
    },
    {
      id: 7,
      categoryName: "Civil",
    },
    {
      id: 8,
      categoryName: "Content",
    },
    {
      id: 9,
      categoryName: "CSE/IT",
    },
    {
      id: 10,
      categoryName: "Cloud Computing",
    },
    {
      id: 11,
      categoryName: "CRM",
    },
    {
      id: 12,
      categoryName: "Data Science/ Analytics",
    },
    {
      id: 13,
      categoryName: "Design",
    },
    {
      id: 14,
      categoryName: "Digital Science",
    },
    {
      id: 15,
      categoryName: "Economics",
    },
    {
      id: 16,
      categoryName: "Electrical",
    },
    {
      id: 17,
      categoryName: "Enterprise Resource Planning",
    },
    {
      id: 18,
      categoryName: "Fashion and Beauty",
    },
    {
      id: 19,
      categoryName: "Finance",
    },
    {
      id: 20,
      categoryName: "Game and Design",
    },
    {
      id: 21,
      categoryName: "Javascript",
    },
    {
      id: 29,
      categoryName: "Language Learning",
    },
    {
      id: 22,
      categoryName: "Management",
    },
    {
      id: 23,
      categoryName: "Marketing/  Digital marketing",
    },
    {
      id: 24,
      categoryName: "Mechanical/ Automotive/ Electrical and CS",
    },
    {
      id: 25,
      categoryName: "Microeconomics",
    },
    {
      id: 26,
      categoryName: "Python",
    },
    {
      id: 27,
      categoryName: "Robotics",
    },
    {
      id: 28,
      categoryName: "Soft Skills",
    },
    {
      id: 26,
      categoryName: "Software Development",
    },
    {
      id: 27,
      categoryName: "Technology",
    },
    {
      id: 28,
      categoryName: "Web Development",
    },
  ];

  const closeModalHandler = (modalType) => {
    setShowModal(false);
    router.push("/");
  };

  const pages = [
    { name: "Courses", href: "/courses", current: false },
    {
      name: "List Your Course",
      href: "/listyourcourse",
      current: true,
    },
  ];
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Publish your Course - TimesAscent.com`}</title>
        <meta
          name="description"
          content={`Grab an opportunity to publish your course and get the desired audience.
        Fill in the details now. -TimesAscent.com`}
        />
        <link rel="canonical" href="https://timesascent.com/listyourcourse" />
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
          content="Publish your Course - TimesAscent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Grab an opportunity to publish your course and get the desired audience.
        Fill in the details now. -TimesAscent.com"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/listyourcourse"
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
          content="Publish your Course - TimesAscent.com"
        />
        <meta
          property="twitter:description"
          content="Grab an opportunity to publish your course and get the desired audience.
        Fill in the details now. -TimesAscent.com"
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
                  name: "Courses",
                  item: `https://timesascent.com/courses`,
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "List Your Course",
                  item: `https://timesascent.com${router.asPath}`,
                },
              ],
            }),
          }}
        />
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
            <div className="mx-auto max-w-md pl-4 pr-4 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="text-center text-3xl font-bold leading-10 tracking-tight text-gray-900 sm:text-3xl sm:leading-none lg:text-4xl">
                Publish your Course
              </h1>
              <p className="mx-auto mt-3 max-w-3xl text-center text-sm sm:text-lg leading-normal text-gray-500">
                Publish your Course with Times Ascent and receive the best
                reaction from readers. Get your course promoted to attract
                readers from all throughout and take your course to the next
                level of accomplishment.
              </p>
            </div>
          </div>

          {/* Contact Section */}
          <div className="relative bg-white">
            <div className="lg:absolute lg:inset-0">
              <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img
                  className="h-56 w-full object-cover lg:absolute lg:h-full"
                  src="./Advertisewithus/Course.webp"
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
                      insertCourse();
                    }}
                    className="mt-0 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-8"
                  >
                    <div>
                      <label
                        htmlFor="provider-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Provider Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="provider-name"
                          required
                          id="provider-name"
                          autoComplete="provider-name"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          value={platformName}
                          onChange={(e) => setPlatformName(e.target.value)}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="course-name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Course Name
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="course-name"
                          required
                          id="course-name"
                          autoComplete="course-name"
                          value={courseName}
                          onChange={(e) => setCourseName(e.target.value)}
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                        />
                      </div>
                    </div>
                    <div>
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
                        htmlFor="Hours"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Hours
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="Hours"
                          required
                          id="Hours"
                          autoComplete="Hours"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          value={hoursDuration}
                          min="0"
                          onChange={(e) => {
                            setHoursDuration(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div>
                      <label
                        htmlFor="Minutes"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Minutes
                      </label>
                      <div className="mt-1">
                        <input
                          type="number"
                          name="Minutes"
                          required
                          id="Minutes"
                          autoComplete="Minutes"
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          value={minutesDuration}
                          min="0"
                          max="59"
                          onChange={(e) => {
                            setMinutesDuration(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Course Category
                      </label>
                      <select
                        required
                        className="block w-full rounded-md mt-1 border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                        onChange={(e) => setCourseCategory(e.target.value)}
                        value={courseCategory}
                      >
                        <option value={""} disabled selected>
                          --Select Type--
                        </option>
                        {category.map((item) => {
                          return (
                            <option key={item.id} value={item.categoryName}>
                              {item.categoryName}
                            </option>
                          );
                        })}
                      </select>
                    </div>

                    <fieldset className="sm:col-span-2">
                      {/* <legend className="block text-sm font-medium text-gray-700">
                        Course Type
                      </legend> */}
                      <div className="mt-4 grid grid-cols-2 gap-y-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="Students"
                            name="CourseRadio"
                            onChange={(e) => setCourseCategoryRadio("Students")}
                            value={courseCategoryRadio}
                            className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500 cursor-pointer"
                          />
                          <label htmlFor="Students" className="ml-3">
                            <span className="block text-sm font-medium text-gray-700 cursor-pointer">
                              Relevant for students
                            </span>
                          </label>
                        </div>
                        <div className="flex items-center col-span-2">
                          <input
                            type="radio"
                            id="WorkingProfessionals"
                            name="CourseRadio"
                            onChange={(e) =>
                              setCourseCategoryRadio("Working Professionals")
                            }
                            value={courseCategoryRadio}
                            className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500 cursor-pointer"
                          />
                          <label
                            htmlFor="WorkingProfessionals"
                            className="ml-3"
                          >
                            <span className="block text-sm font-medium text-gray-700 cursor-pointer">
                              Relevant for working professionals
                            </span>
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500 cursor-pointer"
                            id="Both"
                            name="CourseRadio"
                            onChange={(e) => setCourseCategoryRadio("Both")}
                            value={courseCategoryRadio}
                          />
                          <label htmlFor="Both" className="ml-3">
                            <span className="block text-sm font-medium text-gray-700 cursor-pointer">
                              Relevant for both
                            </span>
                          </label>
                        </div>
                      </div>
                    </fieldset>
                    <div className="sm:col-span-2">
                      <label
                        htmlFor="course-provider-logo"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Course Provider Logo
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
                              htmlFor="course-provider-logo"
                            >
                              <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                <span className="text-center mx-auto">
                                  {displayCardImage?.name
                                    ? displayCardImage?.name
                                    : "Upload a file"}
                                </span>
                                <input
                                  name="course-provider-logo"
                                  required
                                  accept=".png, .jpg, .jpeg, .webp"
                                  id="course-provider-logo"
                                  autoComplete="course-provider-logo"
                                  type="file"
                                  className="cursor-pointer sr-only"
                                  onChange={(e) => {
                                    e.target.files[0]?.name.match(
                                      /\.(jpg|jpeg|png|gif|webp)$/
                                    )
                                      ? setDisplayCardImage(
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
                                PNG, JPG, GIF up to 10MB
                              </p>
                            )}
                          </div>
                        </div>
                      </label>
                    </div>
                    <fieldset className="sm:col-span-2">
                      <legend className="block text-sm font-medium text-gray-700">
                        Course Type
                      </legend>
                      <div className="mt-4 grid grid-cols-4 gap-y-4">
                        <div className="flex items-center">
                          <input
                            type="radio"
                            id="Free"
                            name="Course"
                            onChange={(e) => setCourseType("Free")}
                            value={courseType}
                            className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500 cursor-pointer"
                          />
                          <label htmlFor="Free" className="ml-3">
                            <span className="block text-sm font-medium text-gray-700 cursor-pointer">
                              Free
                            </span>
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            className="h-4 w-4 border-gray-300 text-grape-600 focus:ring-grape-500 cursor-pointer"
                            id="Paid"
                            name="Course"
                            onChange={(e) => setCourseType("Paid")}
                            value={courseType}
                          />
                          <label htmlFor="Paid" className="ml-3">
                            <span className="block text-sm font-medium text-gray-700 cursor-pointer">
                              Paid
                            </span>
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="course-image"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Course Image
                      </label>
                      <label htmlFor="course-image" className="cursor-pointer">
                        <div className="mt-1  items-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                          <div className="space-y-1 text-center">
                            <label htmlFor="course-image cursor-pointer">
                              <label htmlFor="course-image">
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
                              htmlFor="course-image"
                            >
                              <label className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500">
                                <span className="text-center mx-auto">
                                  {courseLogo?.name
                                    ? courseLogo?.name
                                    : "Upload a file"}
                                </span>
                                <input
                                  name="course-image"
                                  required
                                  accept=".png, .jpg, .jpeg, .webp"
                                  id="course-image"
                                  autoComplete="course-image"
                                  type="file"
                                  className="cursor-pointer sr-only"
                                  onChange={(e) => {
                                    e.target.files[0]?.name.match(
                                      /\.(jpg|jpeg|png|gif|webp)$/
                                    )
                                      ? setCourseLogo(e.target.files[0]) ||
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
                                PNG, JPG, GIF up to 10MB
                              </p>
                            )}
                          </div>
                        </div>
                      </label>
                    </div>

                    <div className="sm:col-span-2">
                      <label
                        htmlFor="Redirection"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Redirection URL
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                        <input
                          type="url"
                          placeholder="https://www.example.com"
                          name="Redirection"
                          id="Redirection"
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          value={redirectionUrl}
                          onChange={(e) => setRedirectionUrl(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="sm:col-span-2">
                      <div className="flex justify-between">
                        <label
                          htmlFor="Short-description"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Short Description About The Course
                        </label>
                        <span
                          id="Short-description"
                          className="text-sm text-gray-500"
                        >
                          Max. 1000 characters
                        </span>
                      </div>
                      <div className="mt-1">
                        <textarea
                          id="Short-description"
                          name="Short-description"
                          aria-describedby="Short-description"
                          rows={4}
                          required
                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                          value={courseShortDescription}
                          onChange={(e) =>
                            setCourseShortDescription(e.target.value)
                          }
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
        </main>
        <Footer />
      </div>
    </>
  );
};

export default ListYourCourse;
