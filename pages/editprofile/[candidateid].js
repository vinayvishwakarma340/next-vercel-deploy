import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import DashboardWrapper from "../../Components/DashboardWrapper";
import SuccessModal from "../../Components/Modal/SuccessModal";
import { ThreeDots } from "react-loader-spinner";
import DashboardNotification from "../../Components/DashboardNotification";
import MainHeader from "../../Components/MainHeader";
import ResumeCard from "../../Components/CardUI/ResumeCard";
import PrimayWidgetNew from "../../Components/Widget/PrimayWidgetNew";
const Edit = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [result, setResult] = useState([]);
  const [resume, setResume] = useState("");
  const [fname, setFname] = useState("");
  const [title, setTitle] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState(Cookies.get("USEREMAIL"));
  const [mobile, setMobile] = useState(Cookies.get("USERMOBILENO"));
  const [country, setCountry] = useState("");
  const [summary, setSummary] = useState("");
  const [countryList, setCountryList] = useState([]);
  const [buttonLoading, setButtonLoading] = useState();
  const [show, setShow] = useState(false);
  useEffect(() => {
    fetchIpAdress();
  }, []);

  const fetchCountry = async (country) => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      domain: "Country",
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
        setTitle(result.CandidateDetai.title);
        setFname(result.CandidateDetai.firstName);
        setLname(result.CandidateDetai.lastName);
        setEmail(result.CandidateDetai.email);
        setMobile(result.CandidateDetai.mobile);

        fetchCountry(result.CandidateDetai.Country);
        setCountry(result.CandidateDetai.Country);
        setSummary(result.CandidateDetai.professionalSummary);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  const fetchCandidateDetails = async (filepath) => {
    setButtonLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      CandidateId: details.CandidateId,
      email: email === Cookies.get("USEREMAIL") ? null : email,
      mobile: mobile === Cookies.get("USERMOBILENO") ? null : mobile,
      title: title,
      firstName: fname,
      lastName: lname,
      country: country,
      professionalSummary: summary,
      profile_picture_id: filepath,
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
          CandidateDetailApi();
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
  const widgetOne = {
    name: "FREE Mentorship Advise",
    description: "Free mentorship advice from top mentors",

    src: "/mentorIcon/Mentor.webp",
    btnText: "Connect With Mentors",
    href: "/mentorship/mentorkart",
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
            {/* Page header */}

            <div>
              <div className="mt-1 lg:mt-2">
                <div className="sm:block lg:flex lg:justify-evenly  block ">
                  <div className="lg:w-3/4 sm:w-full sm:pl-4 sm:pr-4 lg:pl-12   ">
                    <div className=" sm:pt-1 p-4 lg:mt-8">
                      <h2 className=" mb-3 text-xl font-bold leading-6 text-gray-900 flex align-center ">
                        Professional Details
                      </h2>
                      <form
                        action="#"
                        method="POST"
                        onSubmit={(e) => {
                          e.preventDefault();
                          fetchCandidateDetails();
                        }}
                        className="mt-0 grid grid-cols-1 gap-y-3 sm:grid-cols-2 sm:gap-x-8"
                      >
                        <div>
                          <label
                            htmlFor="First-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            First Name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="First-name"
                              required
                              id="First-name"
                              onChange={(e) => {
                                setFname(e.target.value);
                              }}
                              value={fname}
                              autoComplete="First-name"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="First-name"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Last Name
                          </label>
                          <div className="mt-1">
                            <input
                              type="text"
                              name="Last-name"
                              required
                              id="Last-name"
                              onChange={(e) => {
                                setLname(e.target.value);
                              }}
                              value={lname}
                              autoComplete="Last-name"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div>
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
                                readOnly
                                onChange={(e) => {
                                  setEmail(e.target.value);
                                }}
                                value={email}
                                autoComplete="email"
                                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                              />
                            </div>
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
                              readOnly
                              onChange={(e) => {
                                setMobile(e.target.value);
                              }}
                              value={mobile}
                              aria-describedby="phone-description"
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-2">
                          <label
                            htmlFor="Topic"
                            className="block text-sm font-medium text-gray-700"
                          >
                            Country
                          </label>

                          <select
                            onChange={(e) => {
                              setCountry(e.target.value);
                            }}
                            value={country}
                            name="Country"
                            id="Country"
                            className="truncate  mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 pr-5 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          >
                            <option value="" selected>
                              Select
                            </option>
                            {countryDropdown}
                          </select>
                        </div>
                        <div className="sm:col-span-2">
                          <div className="flex justify-between">
                            <label
                              htmlFor="how-can-we-help"
                              className="block text-sm font-medium text-gray-700"
                            >
                              Professional Summary
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
                              rows={7}
                              onChange={(e) => {
                                setSummary(e.target.value);
                              }}
                              value={summary}
                              className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                            />
                          </div>
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
                              "Save "
                            )}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  <div className="lg:w-2/5 p-4 sm:p-0 sm:w-full sm:pl-4 sm:pr-4 lg:pr-24">
                    <div className="mt-0 lg:mt-2">
                      {" "}
                      <section className="mt-6 md:flex justify-between  w-full">
                        <div className="mt-6 m-auto sm:mt-8">
                          <div className="sm:w-[300px] sm:ml-[20px]">
                            {/* <ResumeCard
                              imagePath="/ResumeWriting/resumetemplate.png"
                              description="Want your resume to pop out amongst the crowd?"
                              buttonText="Visit Now"
                              buttonHref="/"
                            /> */}
                            <PrimayWidgetNew {...widgetOne} />
                            <div className="mt-6">
                              <ResumeCard
                                imagePath="/ResumeWriting/logo-topresume-inverse.svg"
                                description="Still on the lookout for an ideal career?"
                                buttonText="View More"
                                buttonHref="/top-resume"
                              />
                            </div>
                          </div>
                        </div>
                      </section>
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

export default Edit;
