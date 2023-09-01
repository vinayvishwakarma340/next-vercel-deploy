import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import BreadCrumbs from "../Components/BreadCrumbs";
import CourseCard from "../Components/CardUI/CourseCard";
import CourseFilter from "../Components/CourseFilter";
import DataNotFound from "../Components/DataNotFound";
import Footer from "../Components/Footer";
import HeadingWithIcon from "../Components/HeadingUI/HeadingWithIcon";
import MainHeader from "../Components/MainHeader";

import PaginationCourse from "../Components/PaginationCourse";

import { CoursedropdownData } from "./api/courseDropdownApi";
import { GetAllCourses } from "./api/getAllCoursesApi";

const PopularCourses = ({ props }) => {
  const [coursesByList, setCoursesByList] = useState(
    props.Coursedropdown.allcourseProvider
  );
  const [categoryList, setCategoryList] = useState(
    props.Coursedropdown.allcategory
  );
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [filterAllCourses, setFilterAllCourses] = useState([]);
  const [coursesBy, setCoursesBy] = useState([]);
  const [checkedValue, setCheckedValue] = useState("");
  const [proval, setProval] = useState("");
  const [catval, setCatval] = useState("");

  var val =
    router.pathname === "/free-courses"
      ? "Free"
      : router.pathname === "/paid-courses"
        ? "Paid"
        : "";
  const [coursestatus, setCoursestatus] = useState(val);

  let categoryListData = categoryList.map((item, index) => {
    return {
      catid: index,
      course_category: item.course_category,
      course_group: item.course_group,
    };
  });
  let CoursesbyData = coursesByList.map((item, index) => {
    return {
      byid: index,
      CourseGP: item.CourseGP,
      providerName: item.providerName,
    };
  });
  const [page, setPage] = useState(parseInt(1));
  const [maxPage, setMaxPage] = useState(1);
  const pageChange = (val) => {
    setPage(parseInt(val));
  };
  useEffect(() => {
    SearchCourses(page);
  }, [catval, proval, coursestatus, page]);

  const modelCheckboxHandler = (option) => {
    const isChecked = categoryListData.some(
      (item) => item.byid === option.byid
    );
    if (isChecked) {
      setCoursesBy(
        categoryListData.filter((item) => item.byid !== option.byid)
      );
    } else {
      setCoursesBy(option);
    }
  };

  const modelCheckboxHandler1 = (option) => {
    const isChecked = CoursesbyData.some((item) => item.catid === option.catid);
    if (isChecked) {
      setCheckedValue(
        CoursesbyData.filter((item) => item.catid !== option.catid)
      );
    } else {
      setCheckedValue(option);
    }
  };

  const removeProvider = (pid) => {
    const rem = categoryListData.filter((item) => {
      return item.byid !== pid;
    });
    setCoursesBy(rem);
  };
  const removeCategory = (cid) => {
    const rem1 = CoursesbyData.filter((item) => {
      return item.catid !== cid;
    });
    setCheckedValue(rem1);
  };
  useEffect(() => {
    setPage(parseInt(page));
    setMaxPage(Math.ceil(72 / 24));
  }, [page]);

  const SearchCourses = async () => {
    setLoading(false);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      Category: catval ? catval : "",
      CourseBy: proval ? proval : "",
      page: coursestatus === "Paid" ? page : "",
      Status: coursestatus,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/SearchCourses`,
      requestOptions
    )
      .then((response) => response.json())

      .then((result) => {
        setFilterAllCourses(result.data);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  const pages = [
    {
      name: "Courses",
      href: "/courses",
      current: true,
    },
    {
      name: "Popular Courses",
    },
  ];
  const pagiRef = useRef(0);
  const executeScrollJob = () =>
    pagiRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <div>
      <div ref={pagiRef} />
      <Head>
        <meta charSet="utf-8" />
        <title>{`Popular online courses with certificates from popular top educators - timesascent.com`}</title>
        <meta
          name="description"
          content={`Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com`}
        />
        <link rel="canonical" href=" https://timesascent.com/popular-courses" />
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
          content="Popular online courses with certificates from popular top educators - timesascent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content=" Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
        />
        <meta
          property="og:url"
          content=" https://timesascent.com/popular-courses"
        />
        <meta
          property="og:image"
          content="https://timesascent.com/newimages/main/times_ascent_logo.svg"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/newimages/main/times_ascent_logo.svg"
        />
        <meta
          property="twitter:title"
          content="Popular online courses with certificates from popular top educators - timesascent.com"
        />
        <meta
          property="twitter:description"
          content=" Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
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
                  item: "https://timesascent.com/courses",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Popular Courses",
                },
              ],
            }),
          }}
        />
      </Head>
      <MainHeader />
      <div className=" text-gray-500  container">
        <div className="pt-5  lg:pt-7 bg-white">
          <BreadCrumbs data={pages} />
        </div>

        <CourseFilter
          para={
            "With our popular courses, take account of the most popular and in-demand courses relevant to your needs and improve your capacity for learning and using new skills or procedures in the workplace."
          }
          SearchCourses={SearchCourses}
          setProval={setProval}
          setCatval={setCatval}
          catval={catval}
          proval={proval}
          setPage={setPage}
          CoursesbyData={CoursesbyData}
          categoryListData={categoryListData}
          setCoursesBy={setCoursesBy}
          coursesBy={coursesBy}
          modelCheckboxHandler={modelCheckboxHandler}
          modelCheckboxHandler1={modelCheckboxHandler1}
          checkedValue={checkedValue}
          setCheckedValue={setCheckedValue}
          removeProvider={removeProvider}
          removeCategory={removeCategory}
          coursestatus={coursestatus}
          filterAllCourses={filterAllCourses}
          setFilterAllCourses={setFilterAllCourses}
          setCoursestatus={setCoursestatus}
        />
      </div>
      <div className="pb-10 container">
        {" "}
        {filterAllCourses.length !== 0 ||
          catval.length !== 0 ||
          proval.length !== 0 ? (
          <>
            {" "}
            <section className="mt-6 md:flex justify-between items-center w-full">
              <div className=" w-full  ">
                <div className="">
                  {filterAllCourses.length === 0 ? (
                    ""
                  ) : (
                    <HeadingWithIcon
                      headingText={
                        coursestatus === "Free"
                          ? "Free Courses"
                          : coursestatus === "Paid"
                            ? "Paid Courses"
                            : coursestatus === ""
                              ? "Filtered Courses"
                              : "Filtered Courses"
                      }
                    />
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {filterAllCourses?.map((item, index) => {
                      return (
                        <CourseCard
                          isMobile={props.isMobile}
                          key={index}
                          data={item}
                          priority={true}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
            {filterAllCourses.length === 0 ? <DataNotFound /> : ""}
          </>
        ) : filterAllCourses.length === [] ? (
          <div>No data found</div>
        ) : filterAllCourses.length === 0 &&
          catval.length === 0 &&
          proval.length === 0 ? (
          <>
            <section className="mt-6 md:flex justify-between items-center w-full">
              <div className=" w-full  ">
                <div className="">
                  <HeadingWithIcon headingText="Popular Courses" />
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {props.getAllCoursesdata.Popualar_Courses.map(
                      (item, index) => {
                        return (
                          <CourseCard
                            isMobile={props.isMobile}
                            key={index}
                            data={item}
                          />
                        );
                      }
                    )}
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <></>
        )}
      </div>
      {filterAllCourses.length === 0 ||
        coursestatus === "Free" ||
        catval ||
        proval ? (
        ""
      ) : (
        <div className="mx-auto items-center text-center  mb-8">
          <PaginationCourse
            maxPage={maxPage}
            page={page}
            pageChange={pageChange}
            pagiRef={pagiRef}
            executeScrollJob={executeScrollJob}
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default PopularCourses;
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
  const getAllCoursesdata = await GetAllCourses();
  const Coursedropdown = await CoursedropdownData();
  const props = {
    getAllCoursesdata,
    Coursedropdown,
    isMobile,
  };
  return { props: { props } };
}
