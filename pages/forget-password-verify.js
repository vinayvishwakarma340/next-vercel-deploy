import Cookies from "js-cookie";
import { useRouter } from "next/router";
import React from "react";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
const ForgotPasswordMobile = () => {
  const [loading, setLoading] = useState(false);
  const [forgotpasswordMobile, setForgotpasswordMobile] = useState("");
  const [errorMsgForForgotPassword1, setErrorMsgForForgotPassword1] =
    useState("");
  const router = useRouter();

  const handleForgotPassword1 = async (evt) => {
    evt.preventDefault();
    sendOtpForForgotPassword(forgotpasswordMobile);
  };
  const sendOtpForForgotPassword = async (mobile) => {
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
        if (result.status_code === 200) {
          router.push("/forget-password-otp");
          Cookies.set("mob", mobile);
        } else {
          setErrorMsgForForgotPassword1(result.message);
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <>
      <MainHeader />
      <div className=" min-h-full w-full">
        <div className="flex flex-2 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full  ">
            <div className=" sm:mx-auto w-full sm:w-[450px]">
              <div className="bg-white py-8 w-full px-4 shadow sm:rounded-lg sm:px-10">
                <h2 className="-mt-4 text-center  text-3xl font-bold tracking-tight text-gray-900">
                  Forgot Password
                </h2>
                <p className="mt-2 mb-2 text-center text-sm text-gray-600">
                  Enter Your Registered Mobile Number
                  { }
                </p>
                <div>
                  <form
                    className="space-y-6"
                    action="#"
                    method="POST"
                    onSubmit={(e) => {
                      handleForgotPassword1(e);
                    }}
                  >
                    <div className="mt-5">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mobile number
                      </label>
                      <div className="mt-1">
                        <input
                          type="text"
                          name="phone"
                          id="phone"
                          maxLength="10"
                          minLength="0"
                          pattern="^[6789][0-9]{9}$"
                          autoComplete="phone"
                          required
                          onChange={(e) =>
                            e.target.value >= 0
                              ? setForgotpasswordMobile(e.target.value)
                              : setForgotpasswordMobile(forgotpasswordMobile)
                          }
                          value={forgotpasswordMobile}
                          className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        />
                      </div>
                    </div>

                    {errorMsgForForgotPassword1 ? (
                      <p className="p-2 bg-red-200 text-sm font-semibold text-red-500 rounded-md">
                        {errorMsgForForgotPassword1}
                      </p>
                    ) : (
                      ""
                    )}
                    {/* {usererror ? (
            <p className="p-2 bg-red-200 text-sm font-semibold text-red-500 rounded-md">
              {usererror}
            </p>
          ) : (
            ""
          )} */}
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
                            wrapperClassName=""
                            visible={true}
                          />
                        ) : (
                          " Submit"
                        )}
                      </button>
                    </div>

                    {/* {successMsg ? (
            <div>
              <p className="text-sm text-white p-2 rounded-md text-center bg-green-500 animate-bounce ">
                {"OTP is sent successfully"}
              </p>
            </div>
          ) : (
            <></>
          )} */}
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

export default ForgotPasswordMobile;
