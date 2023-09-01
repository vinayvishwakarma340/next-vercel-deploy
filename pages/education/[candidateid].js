import { AcademicCapIcon } from "@heroicons/react/24/outline";

import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import DashboardWrapper from "../../Components/DashboardWrapper";
import SuccessModal from "../../Components/Modal/SuccessModal";
import { ThreeDots } from "react-loader-spinner";

import DashboardNotification from "../../Components/DashboardNotification";
import MainHeader from "../../Components/MainHeader";

import PrimayWidgetNew from "../../Components/Widget/PrimayWidgetNew";
const Education = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState([]);
  const [resume, setResume] = useState("");

  const [buttonLoading, setButtonLoading] = useState();

  const [course, setCourse] = useState("");
  const [courses, setCourses] = useState([]);
  const [years, setYears] = useState([]);
  const [yearofpassing, setYearofpassing] = useState("");
  const [specialisation, setSpecialisation] = useState("");
  const [institute, setInstitute] = useState("");
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetchIpAdress();

    fetchCourses();
    for (var i = 1972; i <= 2021; i++) {
      const yearArr = years;
      yearArr.push(i);
      setYears(yearArr);
    }
  }, []);

  useEffect(() => {
    if (details?.CandidateId) showEducationDetails();
  }, [details?.CandidateId]);
  const fetchCV = async (file) => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );

    var formdata = new FormData();
    formdata.append("candidateId", Cookies.get("USERID"));
    formdata.append("fileUploads", file);
    formdata.append("type", "resume");

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/UploadFile`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          setShowModal(true);
          CandidateDetailApi();
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchCourses = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      data: "Courses",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/GetCourses`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setCourses(result.data).catch((error) => console.log("error", error));
      })
      .catch((error) => console.log("error", error));
  };
  let coursesDropdown = courses.map((item, index) => (
    <option key={index} value={item.keyIndex}>
      {item.Courses}
    </option>
  ));

  const fetchIpAdress = async () => {
    const result = await fetch("/api/pageLogCheck");
    const ipAddress = await result.json();
    CandidateDetailApi(ipAddress)

  }

  const CandidateDetailApi = (ipAddress) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      CandidateId: Cookies.get("USERID"),
      IP: ipAddress.ip
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/CandidateDetail`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setDetails(result.CandidateDetai);
        setResult(result);

        setResume(result.Resume[0]);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };
  const showEducationDetails = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Candidate_Id: Cookies.get("USERID"),
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/GetEducationDetail`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          setCourse(result.data[0].course);
          setSpecialisation(result.data[0].specialization);
          setInstitute(result.data[0].institute);
          setYearofpassing(result.data[0].yearOfPassing);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const fetchEducationDetails = async () => {
    setButtonLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      candidate: Cookies.get("USERID"),
      course: course,
      specialization: specialisation,
      institute: institute,
      yearOfPassing: yearofpassing,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/AddEducationDetail`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          setShow(true);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setButtonLoading(false);
      });
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };
  const widgetThree = {
    name: "Get a Free confidential review from a resume expert",
    description: "Upload your resume and get expert resume analysis",
    icon: AcademicCapIcon,
    src: "/mentorIcon/TopResume.webp",
    btnText: "Upload Resume",
    href: "/top-resume",
  };
  const widgetTwo = {
    name: "Career Guidance & Counselling",
    description:
      "Improves your career management skills to help you take the right decisions at every major stage/situation in your future",
    icon: AcademicCapIcon,
    src: "/mentorIcon/SetMyCareer.png",
    btnText: "Take Expert Advise Today",
    href: "/psychometrictest/setmycareer",
  };
  return (
    <>
      <MainHeader />
      <DashboardNotification show={show} setShow={setShow} />
      <SuccessModal
        openModal={showModal}
        closeModal={() => closeModalHandler()}
        headingText="Thank-you !!"
        subHeadingText="Your resume has been submitted successfully."
        buttonText="OK"
      />
      <DashboardWrapper data={details}>
        <main>
          <main className="flex-1 pb-8">
            <div>
              <div className="mt-1 lg:mt-2">
                <div className="sm:block lg:flex lg:justify-evenly  block ">
                  <div className="lg:w-3/4 sm:w-full sm:pl-4 sm:pr-4 lg:pl-14   ">
                    <div className=" sm:pt-1 p-4 lg:mt-8">
                      <h2 className=" mb-3 text-xl font-bold leading-6 text-gray-900 flex align-center ">
                        Education Details
                      </h2>
                      <form
                        action="#"
                        method="POST"
                        onSubmit={(e) => {
                          e.preventDefault();
                          fetchEducationDetails();
                        }}
                        className="mt-0 grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-8"
                      >
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="Courses"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Courses
                          </label>

                          <select
                            onChange={(e) => {
                              setCourse(e.target.value);
                            }}
                            value={course}
                            name="Courses"
                            id="Courses"
                            className="truncate  mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 pr-5 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            <option value="" selected>
                              Select
                            </option>
                            {coursesDropdown}
                          </select>
                        </div>
                        <div>
                          <label
                            htmlFor="Specialisation"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Specialisation
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="Specialisation"
                              required
                              onChange={(e) => {
                                setSpecialisation(e.target.value);
                              }}
                              value={specialisation}
                              id="Specialisation"
                              autoComplete="Specialisation"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="Institute"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Institute
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="Institute"
                              required
                              id="Institute"
                              onChange={(e) => {
                                setInstitute(e.target.value);
                              }}
                              value={institute}
                              autoComplete="First-name"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="Passing"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Year Of Passing
                          </label>

                          <select
                            onChange={(e) => {
                              setYearofpassing(e.target.value);
                            }}
                            value={yearofpassing}
                            name="Passing"
                            id="Passing"
                            className="truncate  mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 pr-5 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            <option value="" selected>
                              Select
                            </option>
                            {years.reverse().map((value, index) => {
                              return <option key={index}>{value}</option>;
                            })}
                          </select>
                        </div>
                        <div className="text-center sm:col-span-2 md:w-1/2 w-full m-auto">
                          <button
                            type="submit"
                            className="inline-flex justify-center mt-2 border border-transparent bg-timesPurple py-2 px-12 w-7xl text-sm font-medium text-white shadow-sm hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
                          >
                            {buttonLoading ? (
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
                              "Save"
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="lg:w-2/5 p-4 sm:p-0 sm:w-full sm:pl-4 sm:pr-4 lg:pr-8 lg:mt-14">
                    <div className="mt-6 sm:w-[345px] m-auto sm:m-0 ">
                      <PrimayWidgetNew {...widgetThree} />
                    </div>
                    <div className="mt-6 sm:w-[345px] m-auto sm:m-0 lg:mt-12">
                      <PrimayWidgetNew {...widgetTwo} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </main>
      </DashboardWrapper>
    </>
  );
};

export default Education;
