import { useState } from "react";
import {
  BriefcaseIcon,
  CalendarDaysIcon,
  DocumentArrowDownIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

import Cookies from "js-cookie";
import SuccessModal from "../../Components/Modal/SuccessModal";

import DashboardWrapper from "../../Components/DashboardWrapper";
import { useEffect } from "react";
import NewJobCardSecond from "../../Components/jobs/NewJobCardSecond";
import DashboardCard from "../../Components/DashboardCard";
import Footer from "../../Components/Footer";
import Dashboardhead from "../../Components/Dashboardhead";
import Dashboardrecomcard from "../../Components/Dashboardrecomcard";
import MainHeader from "../../Components/MainHeader";
import { useRouter } from "next/router";
import FolloweCompanies from "../../Components/FolloweCompanies";
import Head from "next/head";

const candidateid = ({ props }) => {
  const [resume, setResume] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading1, setLoading1] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [details, setDetails] = useState([]);
  const [result, setResult] = useState([]);
  const [login, setLogin] = useState("");
  const router = useRouter();
  const [followc, setFollowc] = useState([]);

  useEffect(() => {
    if (!Cookies.get("userLoggedIn")) {
      window.location.pathname = "/times-ascent-signin";
    }
  }, []);

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

  useEffect(() => {
    fetchIpAdress();
  }, []);

  const fetchIpAdress = async () => {
    const result = await fetch("/api/pageLogCheck");
    const ipAddress = await result.json();
    CandidateDetailApi(ipAddress)

  }

  const CandidateDetailApi = (ipAddress) => {
    setLoading1(true);
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
        setFollowc(result.followcompanylist);
        setResume(result.Resume[0]);
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading1(false);
      });
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };
  const updateCandidateProfilePic = async (file) => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );

    var formdata = new FormData();
    formdata.append("CandidateId", Cookies.get("USERID"));
    formdata.append("Profile_image", file);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
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
        }
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>
          Ascent Jobs, Recruitment, Employment - timesascent.com
        </title>
        <meta
          name="description"
          content="Times Ascent, a part of The Times of India, is focused on career enhancement, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
        />
        <link rel="canonical" href="https://timesascent.com/" />
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
          content="Ascent Jobs, Recruitment, Employment - timesascent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Times Ascent, a part of The Times of India, is focused on career enhancement courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
        />
        <meta property="og:url" content="https://timesascent.com/" />
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
          content="Ascent Jobs, Vacancies, Employment - timesascent.com"
        />
        <meta
          property="twitter:description"
          content="Times Ascent, a part of The Times of India, is focused on career enhancement, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
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
      <MainHeader cookies={props.cookies} />
      <SuccessModal
        openModal={showModal}
        closeModal={() => closeModalHandler()}
        headingText="Thank-you !!"
        subHeadingText="Your resume has been submitted successfully."
        buttonText="OK"
      />
      <DashboardWrapper data={details}>
        <main className="flex-1 pb-8">
          {/* Page header */}

          {loading1 ? (
            <button
              type="button"
              class="flex mt-20 mb-20 items-center justify-center mx-auto"
              disabled
            >
              <div role="status">
                <svg
                  aria-hidden="true"
                  class="mr-2 w-12  text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                  viewBox="0 0 100 101"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                    fill="currentColor"
                  />
                  <path
                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                    fill="currentFill"
                  />
                </svg>
              </div>
            </button>
          ) : (
            <>
              <Dashboardhead
                details={details}
                loading={loading}
                fetchCV={fetchCV}
                updateCandidateProfilePic={updateCandidateProfilePic}
              />{" "}
              {!resume ? (
                <h1 className="px-[4%] lg:px-[5%] text-black text-lg mt-8  pb-2 font-bold">
                  Please add your details and upload your latest resume!
                </h1>
              ) : (
                <>
                  {" "}
                  <div>
                    <div className="mt-4 lg:mt-8">
                      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="mt-2 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                          <DashboardCard
                            resume={resume}
                            iconTop={DocumentTextIcon}
                            icon={ArrowDownTrayIcon}
                            headingText={"Your Latest Resume"}
                            linkText={"Download"}
                          />
                          <Dashboardrecomcard
                            resume={resume}
                            iconTop={CalendarDaysIcon}
                            icon={CalendarDaysIcon}
                            headingText={"New Recomended Job(s)"}
                            linkText={"View All"}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
              {followc?.length > 0 ? (
                <div className="mt-8">
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mt-2">
                      <FolloweCompanies data={followc} />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
              {result.SaveJobs?.length > 0 ? (
                <div className="mt-8">
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex ">
                      <h2 className="text-xl font-bold">
                        <div>Saved Jobs</div>
                      </h2>
                    </div>
                    <div className="sm:grid grid-cols-2 gap-4">
                      {result.SaveJobs.slice(0, 5).map((item) => {
                        return <NewJobCardSecond jobDataSearch={item} />;
                      })}
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </>
          )}
        </main>
      </DashboardWrapper>
    </>
  );
};

export async function getServerSideProps(context) {
  const props = {
    cookies: context.req.cookies,
  };

  return { props: { props } };
}
export default candidateid;
