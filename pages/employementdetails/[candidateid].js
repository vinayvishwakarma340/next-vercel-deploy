import {
  AcademicCapIcon,
  BriefcaseIcon,
  CalendarDaysIcon,
  DocumentArrowDownIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import DashboardWrapper from "../../Components/DashboardWrapper";
import SuccessModal from "../../Components/Modal/SuccessModal";
import { ThreeDots } from "react-loader-spinner";
import Dashboardhead from "../../Components/Dashboardhead";
import DashboardCard from "../../Components/DashboardCard";
import Dashboardrecomcard from "../../Components/Dashboardrecomcard";
import DashboardNotification from "../../Components/DashboardNotification";
import MainHeader from "../../Components/MainHeader";
import PrimayWidgetNew from "../../Components/Widget/PrimayWidgetNew";
const Emplomentdetails = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState([]);
  const [resume, setResume] = useState("");

  const [buttonLoading, setButtonLoading] = useState();
  const [locationcity, setLocationcity] = useState("");

  const [organisation, setOrganisation] = useState("");
  const [position, setPosition] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [industry, setIndustry] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetchIpAdress();
    fetchLocation();
  }, []);
  useEffect(() => {
    const showEmployeeDetails = async () => {
      var myHeaders = new Headers();
      myHeaders.append(
        "Authorization",
        process.env.API_TOKEN_AUTH_SERVER
      );
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        CandidateId: Cookies.get("USERID"),
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      await fetch(
        `${process.env.Live_API_URL}/v1/api/apiTimes/getEmploymentDetail`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => {
          if (result.status_code === 200) {
            setOrganisation(result.data[0].employerName);
            setPosition(result.data[0].designation);
            setDateFrom(result.data[0].durationFromYear);
            setDateTo(result.data[0].durationToYear);
            setLocation(result.data[0].city);
          }
        })
        .catch((error) => console.log("error", error));
    };
    if (details.CandidateId) showEmployeeDetails();
  }, [details.CandidateId]);

  const fetchLocation = async () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      domain: "districtV2",
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
        setIndustry(result.data);
      })
      .catch((error) => console.log("error", error));
  };

  let locationDropdown = industry.map((item, index) => (
    <option key={index} value={item.KeyIndex}>
      {item.name}
    </option>
  ));

  const fetchEmployeDetails = async () => {
    setButtonLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      candidate: details.CandidateId,
      employerName: organisation,
      designation: position,
      durationFromYear: dateFrom,
      durationToYear: dateTo,
      city: locationcity,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/EmplomentDetail`,
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
  const widgetThree = {
    name: "Get a Free confidential review from a resume expert",
    description: "Upload your resume and get expert resume analysis",
    icon: AcademicCapIcon,
    src: "/mentorIcon/TopResume.webp",
    btnText: "Upload Resume",
    href: "/top-resume",
  };

  const widgetFour = {
    name: "Take up the psychometric test",
    description:
      "Design to measure cognitive abilities and potential to excel in specific position or career",
    icon: AcademicCapIcon,
    src: "/mentorIcon/9Links.webp",
    btnText: "Psychometric Test",
    href: "/psychometrictest/9links",
  };
  const closeModalHandler = () => {
    setShowModal(false);
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
                        Employment Details
                      </h2>
                      <form
                        action="#"
                        method="POST"
                        onSubmit={(e) => {
                          e.preventDefault();
                          fetchEmployeDetails();
                        }}
                        className="mt-0 grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-8"
                      >
                        <div>
                          <label
                            htmlFor="Organisation"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Organisation
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="Organisation"
                              required
                              id="Organisation"
                              onChange={(e) => {
                                setOrganisation(e.target.value);
                              }}
                              value={organisation}
                              autoComplete="Organisation"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="Position"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Position
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="Position"
                              required
                              onChange={(e) => {
                                setPosition(e.target.value);
                              }}
                              value={position}
                              id="Position"
                              autoComplete="First-name"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="Datefrom"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Date From
                          </label>
                          <div className="mt-1">
                            <input
                              type="date"
                              name="Datefrom"
                              required
                              onChange={(e) => {
                                setDateFrom(e.target.value);
                              }}
                              value={dateFrom}
                              id="Datefrom"
                              autoComplete="Datefrom"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            htmlFor="DateTo"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Date To
                          </label>
                          <div className="mt-1">
                            <input
                              type="date"
                              name="DateTo"
                              required
                              onChange={(e) => {
                                setDateTo(e.target.value);
                              }}
                              value={dateTo}
                              id="DateTo"
                              autoComplete="DateTo"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="location"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Location
                          </label>

                          <select
                            onChange={(e) => {
                              setLocationcity(e.target.value);
                            }}
                            value={locationcity}
                            name="location"
                            id="location"
                            className="truncate  mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 pr-5 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            {locationDropdown}
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
                      <PrimayWidgetNew {...widgetFour} />
                    </div>
                    <div className="mt-6 sm:w-[345px] m-auto sm:m-0 lg:mt-12">
                      <PrimayWidgetNew {...widgetThree} />
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

export default Emplomentdetails;
