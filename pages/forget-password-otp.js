import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [errorMsgForForgotPassword2, setErrorMsgForForgotPassword2] =
    useState("");
  const [forgotPasswordOtpInput, setForgotPasswordOtpInput] = useState("");
  const [forgotpasswordMobile, setForgotpasswordMobile] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newConfPassword, setNewConfPassword] = useState("");
  const [errorMsgForOtp, setErrorMsgForOtp] = useState("");
  const router = useRouter();
  const [otp1, setOtp1] = useState("");
  const [otp2, setOtp2] = useState("");
  const [otp3, setOtp3] = useState("");
  const [otp4, setOtp4] = useState("");
  const [otp5, setOtp5] = useState("");
  const [otp6, setOtp6] = useState("");
  const [getMob, setGetMob] = useState("");
  useEffect(() => {
    setGetMob(Cookies.get("mob"));
  }, []);
  let mob = Cookies.get("mob");
  const [successMsg, setSuccessMsg] = useState(false);

  const onVerifyNewPassword = (password, confirmPassword) => {
    if (password !== confirmPassword) {
      return false;
    } else {
      return true;
    }
  };
  useEffect(() => {
    if (successMsg) {
      const timeout = setTimeout(() => {
        setSuccessMsg(false);
      }, 2500);
      return () => clearTimeout(timeout)
    }
  }, [successMsg]);

  const sendOtp = async (mobile) => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      mobile: mobile,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/sendOtp`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code !== 200) {
          return result.message;
        } else return true;
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleForgotPassword2 = async (evt) => {
    evt.preventDefault();
    if (!onVerifyNewPassword(newPassword, newConfPassword)) {
      setErrorMsgForForgotPassword2(`Both password's should be same`);
      return;
    }
    verifyOtp(forgotpasswordMobile, forgotPasswordOtpInput, "forgotPassword");
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
  const verifyOtp = async (mobile, otp, type) => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      otp: `${otp1}${otp2}${otp3}${otp4}${otp5}${otp6}`,
      mobile: getMob,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/NewVerifyOtp`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (type === "signup") {
          if (result.status_code === 200) {
            handleSignup();
          } else if (result.status_code === 300) {
            setErrorMsgForOtp(result.message);
          } else {
            setErrorMsgForOtp("Otp Verification Failed");
          }
        } else if (type === "forgotPassword") {
          if (result.status_code === 200) {
            changePassword(forgotpasswordMobile, newPassword);
          } else if (result.status_code === 300) {
            setErrorMsgForOtp(result.message);
          } else {
            ApiErrorLog(raw, result, "NewVerifyOtp")
            setErrorMsgForOtp("Otp Verification Failed");
          }
        }
      })
      .catch((error) => {
        console.log("error", error)
        ApiErrorLog(raw, error, "NewVerifyOtp")
      })
      .finally(() => {

        setLoading(false);
      });
  };



  const changePassword = async (mobile, password) => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      mobile: getMob,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/ChangePasswordWithOtp`,
      requestOptions
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.status_code === 200) {
          router.push("/");

          sessionStorage.setItem("userLoggedIn", true);
          sessionStorage.setItem("USERID", response.data.CandidateId);
          sessionStorage.setItem(
            "USERFULLNAME",
            response.data.firstName + " " + response.data.lastName
          );
          sessionStorage.setItem("USERMOBILENO", response.data.mobile);
          sessionStorage.setItem("USEREMAIL", response.data.email);

          Cookies.set("userLoggedIn", true);
          Cookies.set("USERID", response.data.CandidateId);
          Cookies.set(
            "USERFULLNAME",
            response.data.firstName + " " + response.data.lastName
          );
          Cookies.set("USERMOBILENO", response.data.mobile);
          Cookies.set("USEREMAIL", response.data.email);
        } else {
          setErrorMsgForForgotPassword2(response.message);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };
  const changeCursor1 = (event, identity) => {
    // if ((parseInt(event.target.value) >= 0 && parseInt(event.target.value) <= 9) || event.keyCode === 8) {
    if (
      parseInt(event.target.value) >= 0 &&
      parseInt(event.target.value) <= 9
    ) {
      switch (identity) {
        case "1": {
          setOtp1(parseInt(event.target.value));
          setErrorMsgForOtp("");
          document.getElementById("second").focus();
          break;
        }
        case "2": {
          setOtp2(parseInt(event.target.value));
          setErrorMsgForOtp("");
          document.getElementById("third").focus();
          break;
        }
        case "3": {
          setOtp3(parseInt(event.target.value));
          setErrorMsgForOtp("");
          document.getElementById("fourth").focus();
          break;
        }
        case "4": {
          document.getElementById("five").focus();
          setOtp4(parseInt(event.target.value));
          setErrorMsgForOtp("");

          break;
        }
        case "5": {
          document.getElementById("six").focus();
          setOtp5(parseInt(event.target.value));
          setErrorMsgForOtp("");

          break;
        }
        case "6": {
          setErrorMsgForOtp("");
          setOtp6(parseInt(event.target.value));
          break;
        }
      }
    } else {
      console.log("invalid key");
    }
  };

  const removeOtpInput = (e, identity) => {
    if (e.keyCode === 8) {
      switch (identity) {
        case "1": {
          setOtp1("");
          break;
        }
        case "2": {
          setOtp2("");
          document.getElementById("first").focus();
          setErrorMsgForOtp("");
          break;
        }
        case "3": {
          setOtp3("");
          document.getElementById("second").focus();
          setErrorMsgForOtp("");
          break;
        }
        case "4": {
          setOtp4("");
          document.getElementById("third").focus();
          setErrorMsgForOtp("");
          break;
        }
        case "5": {
          setOtp5("");
          document.getElementById("fourth").focus();
          setErrorMsgForOtp("");
          break;
        }
        case "6": {
          setOtp6("");
          document.getElementById("five").focus();
          setErrorMsgForOtp("");
          break;
        }
      }
    }
  };

  return (
    <>
      <MainHeader />
      <div className=" min-h-full w-full">
        <div className="flex flex-2 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full  ">
            <div className=" sm:mx-auto w-full sm:w-[450px]">
              <div className="bg-white py-8 w-full px-4 shadow sm:rounded-lg sm:px-10">
                <h2 className="-mt-2 text-center  text-3xl font-bold tracking-tight text-gray-900">
                  Forgot Password
                </h2>
                <p className="mt-2 mb-2 text-center text-sm text-gray-600">
                  {/* Enter 6 digit OTP sent to {signupmobile} */}
                  { }
                </p>
                <div>
                  <form
                    className="space-y-6"
                    action="#"
                    method="POST"
                    onSubmit={(e) => {
                      handleForgotPassword2(e);
                    }}
                  >
                    <div>
                      <label className="block text-sm text-center  text-gray-700">
                        Enter OTP sent on your Mobile {getMob}
                      </label>
                      <div className="mt-1">
                        <div
                          id="otp"
                          class="flex flex-row justify-center text-center px-2 mt-5"
                        >
                          <input
                            class="m-2 border h-10 w-10 text-center form-control rounded"
                            type="text"
                            id="first"
                            maxlength="1"
                            value={otp1}
                            required
                            onInput={(e) => {
                              changeCursor1(e, "1");
                            }}
                            onKeyDown={(e) => {
                              removeOtpInput(e, "1");
                            }}
                          />
                          <input
                            class="m-2 border h-10 w-10 text-center form-control rounded"
                            type="text"
                            id="second"
                            maxlength="1"
                            required
                            value={otp2}
                            onInput={(e) => {
                              changeCursor1(e, "2");
                            }}
                            onKeyDown={(e) => {
                              removeOtpInput(e, "2");
                            }}
                          />
                          <input
                            class="m-2 border h-10 w-10 text-center form-control rounded"
                            type="text"
                            id="third"
                            maxlength="1"
                            required
                            value={otp3}
                            onInput={(e) => {
                              changeCursor1(e, "3");
                            }}
                            onKeyDown={(e) => {
                              removeOtpInput(e, "3");
                            }}
                          />
                          <input
                            class="m-2 border h-10 w-10 text-center form-control rounded"
                            type="text"
                            id="fourth"
                            maxlength="1"
                            required
                            value={otp4}
                            onInput={(e) => {
                              changeCursor1(e, "4");
                            }}
                            onKeyDown={(e) => {
                              removeOtpInput(e, "4");
                            }}
                          />
                          <input
                            class="m-2 border h-10 w-10 text-center form-control rounded"
                            type="text"
                            id="five"
                            maxlength="1"
                            required
                            value={otp5}
                            onInput={(e) => {
                              changeCursor1(e, "5");
                            }}
                            onKeyDown={(e) => {
                              removeOtpInput(e, "5");
                            }}
                          />
                          <input
                            class="m-2 border h-10 w-10 text-center form-control rounded"
                            type="text"
                            id="six"
                            maxlength="1"
                            required
                            value={otp6}
                            onInput={(e) => {
                              changeCursor1(e, "6");
                            }}
                            onKeyDown={(e) => {
                              removeOtpInput(e, "6");
                            }}
                          />
                        </div>
                        <p className="mx-auto text-center text-sm mt-4 ">
                          {" "}
                          Didn't get OTP ?{" "}
                          <span
                            className="cursor-pointer font-semibold  text-timesPurple"
                            onClick={() => {
                              setSuccessMsg(sendOtp(mob));
                            }}
                          >
                            Resend OTP
                          </span>
                        </p>
                      </div>
                      <div className="space-y-1">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700 mt-4"
                        >
                          Password
                        </label>
                        <div className="mt-1">
                          <input
                            id="password"
                            name="password"
                            type="password"
                            onChange={(e) => {
                              setNewPassword(e.target.value);
                              setErrorMsgForForgotPassword2("");
                            }}
                            value={newPassword}
                            minLength={5}
                            autoComplete="current-password"
                            required
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label
                          htmlFor="cpassword"
                          className="block text-sm font-medium text-gray-700 mt-4"
                        >
                          Confirm password
                        </label>
                        <div className="mt-1">
                          <input
                            id="cpassword"
                            name="cpassword"
                            type="password"
                            minLength={5}
                            autoComplete="c-password"
                            required
                            onChange={(e) => {
                              setNewConfPassword(e.target.value);
                              setErrorMsgForForgotPassword2("");
                            }}
                            value={newConfPassword}
                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                          />
                        </div>
                      </div>
                    </div>
                    {errorMsgForOtp ? (
                      <p className="p-2 bg-red-200 text-sm font-semibold text-red-500 rounded-md">
                        {errorMsgForOtp}
                      </p>
                    ) : (
                      ""
                    )}
                    {errorMsgForForgotPassword2 ? (
                      <p className="p-2 bg-red-200 text-sm font-semibold text-red-500 rounded-md">
                        {errorMsgForForgotPassword2}
                      </p>
                    ) : (
                      ""
                    )}
                    <div>
                      <button
                        type="submit"
                        className="flex w-full justify-center  border border-transparent bg-timesPurple py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
                      >
                        {loading ? (
                          <ThreeDots
                            height="20"
                            width="30"
                            radius="9"
                            color="white"
                            ariaLabel="three-dots-loading"
                            wrapperStyle={{}}
                            visible={true}
                          />
                        ) : (
                          "Submit"
                        )}
                      </button>
                    </div>

                    {successMsg ? (
                      <div>
                        <p className="text-sm text-white p-2 rounded-md text-center bg-green-500 animate-bounce ">
                          {"OTP is sent successfully"}
                        </p>
                      </div>
                    ) : (
                      <></>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ForgotPassword;
