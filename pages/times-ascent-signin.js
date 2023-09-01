import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import { useSession, signIn } from "next-auth/react";
const login = () => {
  const [loading, setLoading] = useState(false);
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [usererror, setUsererror] = useState("");
  const router = useRouter();
  let stepfirst = router.asPath?.split("#access_token=")[1]?.split("&data_access_expiration_time=")[0];

  const { data: session } = useSession();


  const gotoPage = () => {
    if (Cookies.get("pathname")) {
      window.open(Cookies.get("pathname"), "_self");
    }
  };

  useEffect(() => {
    if (Cookies.get("userLoggedIn")) {
      window.location.pathname = "/";
    }
    if (session) {
      googleLoginSignup(session.id_token);
    }
    if (stepfirst) {
      facebookLoginSignup(stepfirst)
    }
  }, [session, stepfirst]);

  const handleLogin = async (evt) => {
    evt.preventDefault();
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    await fetch(`${process.env.Live_API_URL}/v1/api/apiTimes/Login`, {
      method: "POST",
      body: JSON.stringify({
        Email: userid,
        Mobile: userid,
        Password: password,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: process.env.API_TOKEN_AUTH_SERVER,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status_code === 200 || response.status_code === 201) {
          Cookies.set("userLoggedIn", true);
          Cookies.set("USERID", response.data.CandidateId);
          if (response.data.firstName) {
            Cookies.set(
              "USERFULLNAME",
              response.data.firstName + " " + response.data.lastName
            );
          } else {
            Cookies.set("USERFULLNAME", "");
          }
          Cookies.set("USERMOBILENO", response.data.mobile);
          Cookies.set("USEREMAIL", response.data.email);
          Cookies.get("pathname")
            ? gotoPage()
            : router.push("/applicant-dashboard/" + response.data.CandidateId);
        } else if (response.status_code === 300) {
          setUsererror(response.message);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  // const googleLogin = async (token) => {
  //   var myHeaders = new Headers();
  //   myHeaders.append(
  //     "Authorization",
  //     process.env.API_TOKEN_AUTH_SERVER
  //   );
  //   await fetch("https://api.timesascent.com/v1/admin1_1/GoogleLogin", {
  //     method: "POST",
  //     body: JSON.stringify({
  //       Token: token,
  //     }),
  //     headers: {
  //       "Content-type": "application/json",
  //       Authorization: process.env.API_TOKEN_AUTH_SERVER,
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((response) => {
  //       if (
  //         response.status_code === 200 &&
  //         response.status === "Success" &&
  //         response.message !== "no data found"
  //       ) {
  //         Cookies.set("userLoggedIn", true);
  //         Cookies.set("USERID", response.data.CandidateId);
  //         if (response.data.firstName) {
  //           Cookies.set(
  //             "USERFULLNAME",
  //             response.data.firstName + " " + response.data.lastName
  //           );
  //         } else {
  //           Cookies.set("USERFULLNAME", "");
  //         }

  //         Cookies.set("USERMOBILENO", response.data.mobile);
  //         Cookies.set("USEREMAIL", response.data.email);
  //         Cookies.get("pathname")
  //           ? gotoPage()
  //           : router.push("/applicant-dashboard/" + response.data.CandidateId);
  //       } else if (
  //         response.status_code === 200 &&
  //         response.status === "Success" &&
  //         response.message === "no data found"
  //       ) {
  //         setUsererror("User Does not exits");
  //       }
  //     })
  //     .catch((error) => console.log("error", error))
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // };

  const googleLoginSignup = async (token) => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    await fetch(`${process.env.Live_API_URL}/v1/admin1_1/GoogleLoginSignup`, {
      method: "POST",
      body: JSON.stringify({
        IdToken: token,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: process.env.API_TOKEN_AUTH_SERVER,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status_code === 200 && response.status === "Success") {
          Cookies.set("userLoggedIn", true);
          Cookies.set("USERID", response.data.CandidateId);
          if (response.data.firstName) {
            Cookies.set(
              "USERFULLNAME",
              response.data.firstName + " " + response.data.lastName
            );
          } else {
            Cookies.set("USERFULLNAME", " ");
          }

          Cookies.set("USERMOBILENO", response.data.mobile);
          Cookies.set("USEREMAIL", response.data.email);
          Cookies.get("pathname")
            ? gotoPage()
            : router.push("/applicant-dashboard/" + response.data.CandidateId);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  const ApiErrorLog = async (req, res, ApiName) => {
    var myHeaders = new Headers();

    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      Request: req,
      Response: JSON.stringify(res),
      ApiName: ApiName,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    // Using a fetch here but could be any async operation to an external source
    const response = await fetch(
      `${process.env.Live_API_URL}/adminapi/ApiErrorLog`,
      requestOptions
    );
    const result = await response.json()
    if (result.status_code === 200) {
      console.log("api error logged successfully")

    }
  };
  const facebookLoginSignup = async (token) => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    await fetch(`${process.env.Live_API_URL}/v1/admin1_1/FacebookEmail`, {
      method: "POST",
      body: JSON.stringify({
        Token: token,
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: process.env.API_TOKEN_AUTH_SERVER,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.status_code === 200 && response.status === "Success") {
          Cookies.set("userLoggedIn", true);
          Cookies.set("USERID", response.data.CandidateId);
          if (response.data.firstName) {
            Cookies.set(
              "USERFULLNAME",
              response.data.firstName + " " + response.data.lastName
            );
          } else {
            Cookies.set("USERFULLNAME", " ");
          }

          Cookies.set("USERMOBILENO", response.data.mobile);
          Cookies.set("USEREMAIL", response.data.email);
          Cookies.get("pathname")
            ? gotoPage()
            : router.push("/applicant-dashboard/" + response.data.CandidateId);
        } else {
          ApiErrorLog(raw, response, "FacebookEmail")
        }
      })
      .catch((error) => {
        console.log("error", error);
        ApiErrorLog(raw, error, "FacebookEmail")
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <>
      <MainHeader />
      <div className="flex min-h-full justify-center">
        <div className="flex flex-2 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full sm:mx-auto  sm:w-[450px]">
            <div className="bg-white py-8 w-full px-4 shadow sm:rounded-lg sm:px-10">
              <h2 className="-mt-2 text-center text-3xl font-bold tracking-tight text-gray-900">
                Sign in to your account
              </h2>
              <p className="mt-2 mb-4 text-center text-sm text-gray-600">
                Need an account ?&nbsp;
                <a
                  href="/times-ascent-signup"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  sign up
                </a>
              </p>

              <div>
                {/* Social login div */}
                <div className="flex flex-row justify-center items-start space-x-3">
                  <a href="https://www.facebook.com/v16.0/dialog/oauth?client_id=807577897280884&display=popup&response_type=token&redirect_uri=https://timesascent.com/times-ascent-signin&scope=email">
                    <span className="w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white  bg-blue-900 hover:shadow-lg cursor-pointer transition ease-in duration-300">
                      <img
                        className="w-4 h-4"
                        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDI0IDI0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MTIgNTEyIiB4bWw6c3BhY2U9InByZXNlcnZlIiBjbGFzcz0iIj48Zz48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im0xNS45OTcgMy45ODVoMi4xOTF2LTMuODE2Yy0uMzc4LS4wNTItMS42NzgtLjE2OS0zLjE5Mi0uMTY5LTMuMTU5IDAtNS4zMjMgMS45ODctNS4zMjMgNS42Mzl2My4zNjFoLTMuNDg2djQuMjY2aDMuNDg2djEwLjczNGg0LjI3NHYtMTAuNzMzaDMuMzQ1bC41MzEtNC4yNjZoLTMuODc3di0yLjkzOWMuMDAxLTEuMjMzLjMzMy0yLjA3NyAyLjA1MS0yLjA3N3oiIGZpbGw9IiNmZmZmZmYiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48L2c+PC9zdmc+"
                      />
                    </span>
                  </a>


                  <span
                    onClick={() => signIn("google")}
                    className="mb-3   w-11 h-11 items-center justify-center inline-flex rounded-full font-bold text-lg  text-white bg-blue-400 hover:shadow-lg cursor-pointer transition ease-in duration-300"
                  >
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 488 512"
                    >
                      <path
                        fill="currentColor"
                        d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <span className="h-px w-16 bg-gray-300"></span>
                  <span className="text-gray-500 font-normal">OR</span>
                  <span className="h-px w-16 bg-gray-300"></span>
                </div>

                <form
                  action="#"
                  method="POST"
                  className="space-y-6"
                  onSubmit={(e) => handleLogin(e)}
                >
                  <div>
                    <label
                      htmlFor="text"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email/Mobile
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(e) => {
                          setUserid(e.target.value);
                          setUsererror("");
                        }}
                        id="text"
                        name="text"
                        value={userid}
                        type="text"
                        autoComplete="text"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        onChange={(e) => {
                          setPassword(e.target.value);
                          setUsererror("");
                        }}
                        id="password"
                        name="password"
                        type="password"
                        minLength={5}
                        value={password}
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  {usererror ? (
                    <p className="p-2 bg-red-200 text-sm text-red-500 rounded-md">
                      {usererror}
                    </p>
                  ) : (
                    ""
                  )}
                  <div className="flex items-center justify-end">
                    <div className="text-sm">
                      <a
                        href="/forget-password-verify"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center border border-transparent bg-timesPurple py-2 px-4 text-sm font-medium text-white shadow-sm  hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
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
                        " Sign in"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default login;
