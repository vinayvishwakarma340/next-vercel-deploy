import { AcademicCapIcon } from "@heroicons/react/24/outline";

import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import DashboardWrapper from "../../Components/DashboardWrapper";
import SuccessModal from "../../Components/Modal/SuccessModal";
import { ThreeDots } from "react-loader-spinner";

import DashboardNotification from "../../Components/DashboardNotification";
import MainHeader from "../../Components/MainHeader";
import PrimayWidgetNew from "../../Components/Widget/PrimayWidgetNew";

const ExperienceDetail = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState([]);
  const [resume, setResume] = useState("");

  const [country, setCountry] = useState("");

  const [countryList, setCountryList] = useState([]);
  const [buttonLoading, setButtonLoading] = useState();
  const [jobfunction, setJobfunction] = useState([]);
  const [jobFuncType, setJobFuncType] = useState("");
  const [experType, setExperType] = useState("");
  const [exp, setExp] = useState();
  const [experYear, setExperYear] = useState("");
  const [experMonth, setExperMonth] = useState("");
  const [ctcYear, setCtcYear] = useState("");
  const [ctcMonth, setCtcMonth] = useState("");
  const [industryType, setIndustryType] = useState("");

  const [show, setShow] = useState(false);
  useEffect(() => {
    fetchIpAdress();
    fetchIndustry();
    fetchjobfunc();
  }, []);

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

  const fetchExpDetails = async () => {
    setButtonLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      CandidateId: details.CandidateId,
      candidateStage: experType,
      totalExperienceInYears: experYear,
      totalExperienceInMonths: experMonth,
      currentCtcInLakhs: ctcYear,
      currentCtcInThousands: ctcMonth,
      industry: industryType,
      jobFunction: jobFuncType,
      skills: "",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/UpdateCandidateProfile`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          setShow(true);
          CandidateDetailApi();
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

  const fetchIndustry = async (country) => {
    setLoading(true);
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

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/getResultviaDomain`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setCountryList(result.data);
        setCountry(
          result.data.filter((item) => {
            return item.name === country;
          })[0].KeyIndex
        );
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };
  let countryDropdown = countryList.map((item, index) => (
    <option key={index} value={item.KeyIndex}>
      {item.name}
    </option>
  ));
  const fetchjobfunc = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      data: "Jobfunction",
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/JobFunction`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        setJobfunction(result.data);
      })
      .catch((error) => console.log("error", error));
  };
  let jobfunction1 = jobfunction.map((item, index) => (
    <option key={index} value={item.keyIndex}>
      {item.Jobfunction}
    </option>
  ));

  const widgetOne = {
    name: "FREE Mentorship Advise",
    description: "Free mentorship advice from top mentors",
    icon: AcademicCapIcon,
    src: "/mentorIcon/Mentor.webp",
    btnText: "Connect With Mentors",
    href: "/mentorship/mentorkart",
  };
  const widgetTwo = {
    name: "Online mock interview",
    description: "Virtual face to face mock interviews with industry experts",
    icon: AcademicCapIcon,
    src: "/mentorIcon/InterviewBuddy.webp",
    btnText: "Start Mock Interview",
    href: "/interview-buddy",
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
                  <div className="lg:w-3/4 sm:w-full sm:pl-4 sm:pr-4 lg:pl-12   ">
                    <div className=" sm:pt-1 p-4 lg:mt-8">
                      <h2 className=" mb-3 text-xl font-bold leading-6 text-gray-900 flex align-center ">
                        Experience Details
                      </h2>
                      <form
                        action="#"
                        method="POST"
                        onSubmit={(e) => {
                          e.preventDefault();
                          fetchExpDetails();
                        }}
                        className="mt-0 grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-8"
                      >
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="Exp_type"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Experience Type
                          </label>

                          <select
                            onChange={(e) => {
                              e.target.value === "Experienced"
                                ? setExp(true)
                                : setExp(false);
                              setExperType(e.target.value);
                            }}
                            value={experType}
                            name="Exp_type"
                            id="Exp_type"
                            className="truncate  mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 pr-5 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            <option value="Fresher">Fresher</option>
                            <option value="Experienced">Experienced</option>
                          </select>
                        </div>
                        {!exp ? (
                          <></>
                        ) : (
                          <>
                            <div>
                              <div className="flex justify-between">
                                <label
                                  htmlFor="Year"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Total Experience(In Year)
                                </label>
                              </div>
                              <div className="mt-1">
                                <input
                                  type="number"
                                  name="Year"
                                  id="Year"
                                  maxLength="2"
                                  minLength="0"
                                  onChange={(e) => {
                                    setExperYear(e.target.value);
                                  }}
                                  value={experYear}
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between">
                                <label
                                  htmlFor="Months"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Total Experience(In Months)
                                </label>
                              </div>
                              <div className="mt-1">
                                <input
                                  type="number"
                                  name="Months"
                                  id="Months"
                                  minLength="0"
                                  maxlength="2"
                                  onChange={(e) => {
                                    setExperMonth(e.target.value);
                                  }}
                                  value={experMonth}
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between">
                                <label
                                  htmlFor="Lacs"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Current CTC(In Lacs)
                                </label>
                              </div>
                              <div className="mt-1">
                                <input
                                  type="number"
                                  name="Lacs"
                                  id="Lacs"
                                  minLength="0"
                                  maxLength="2"
                                  onChange={(e) => {
                                    setCtcYear(e.target.value);
                                  }}
                                  value={ctcYear}
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="flex justify-between">
                                <label
                                  htmlFor="Thousand"
                                  className="block text-sm font-medium text-gray-700"
                                >
                                  Current CTC(In Thousand)
                                </label>
                              </div>
                              <div className="mt-1">
                                <input
                                  type="number"
                                  name="Thousand"
                                  id="Thousand"
                                  onChange={(e) => {
                                    setCtcMonth(e.target.value);
                                  }}
                                  value={ctcMonth}
                                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                                />
                              </div>
                            </div>
                          </>
                        )}
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="Industry"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Select Industry
                          </label>

                          <select
                            onChange={(e) => {
                              setIndustryType(e.target.value);
                            }}
                            value={industryType}
                            name="Industry"
                            id="Industry"
                            className="truncate  mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 pr-5 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            {countryDropdown}
                          </select>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="Function"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Job Function
                          </label>

                          <select
                            onChange={(e) => {
                              setJobFuncType(e.target.value);
                            }}
                            value={jobFuncType}
                            name="Function"
                            id="Function"
                            className="truncate  mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 pr-5 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            {jobfunction1}
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
                      <PrimayWidgetNew {...widgetOne} />
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

export default ExperienceDetail;
