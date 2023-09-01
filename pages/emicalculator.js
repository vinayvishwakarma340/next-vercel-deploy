import Head from "next/head";
import React, { useState, useEffect } from "react";
import BreadCrumbs from "../Components/BreadCrumbs";
import Footer from "../Components/Footer";
import GoogleAd_728x90 from "../Components/GoogleAds/GoogleAd_728x90";
import MainHeader from "../Components/MainHeader";
import UsefullTools from "../Components/UsefullTools";

const loancalculatornew = (props) => {
  const [openTable, setOpenTable] = useState(false);
  const [clicked, setClicked] = useState("");
  const [number, setNumber] = useState(0);
  const [rate, setRate] = useState(0);
  const [year, setYear] = useState(0);
  const [montlyCal, setMonthlyCal] = useState(0);
  const [totalCal, setTotalCal] = useState(0);
  const [interestCal, setInterestCal] = useState(0);

  const calculation = () => {
    const convertedrate = Number(rate) / 12 / 100;
    const upperRate = Math.pow(1 + convertedrate, Number(year) * 12);
    const lowerRate = upperRate - 1;
    const Mpayment = Number(number) * convertedrate * (upperRate / lowerRate);
    setMonthlyCal(Mpayment);
  };

  const Tpayment = () => {
    const totalPay = montlyCal * (Number(year) * 12);
    setTotalCal(totalPay);
    return totalCal;
  };

  const clearFields = () => {
    setNumber("");
    setRate("");
    setYear("");
  };

  const Tinterest = () => {
    const interestTotal = totalCal - Number(number);
    setInterestCal(interestTotal);
    return interestCal;
  };

  useEffect(() => {
    Tinterest();
    calculation();
    Tpayment();
  }, [number, year, rate, totalCal, interestCal]);

  const pages = [
    { name: "EmiCalculator", href: "/emicalculator", current: true },
  ];

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{`EMI Calculator for Personal Loan, Home Loan , Car Loan - TimesAscent.com`}</title>
        <meta
          name="description"
          content={`Use Free Times Ascent EMI Calculator to Calculate EMIs for Personal Loan, Home Loan, Car Loan etc. - TimesAscent.com`}
        />
        <link rel="canonical" href="https://timesascent.com/emicalculator" />
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
          content="EMI Calculator for Personal Loan, Home Loan , Car Loan - TimesAscent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Use Free Times Ascent EMI Calculator to Calculate EMIs for Personal Loan, Home Loan, Car Loan etc. - TimesAscent.com"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/emicalculator"
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
          content="EMI Calculator for Personal Loan, Home Loan , Car Loan - TimesAscent.com"
        />
        <meta
          property="twitter:description"
          content="Use Free Times Ascent EMI Calculator to Calculate EMIs for Personal Loan, Home Loan, Car Loan etc. - TimesAscent.com"
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

      {/* ----------------------------------main ui starts here ------------------------------------- */}

      <MainHeader />

      <div className=" relative py-4 md:py-6 lg:py-8 container">
        {/* -----------------------------breadcrumbs-------------- */}
        <div>
          <BreadCrumbs data={pages} />
        </div>
        {/* -------------------upper sections starts here -------------------- */}
        <div className=" mt-6">
          <div className="  mb-6 ">
            <h1 className="  flex justify-center  text-xl font-bold tracking-tight text-gray-900">
              EMI Calculator
            </h1>

            <div className=" sm:flex sm:justify-center text-center py-1 text-base  ">
              Our easy to understand EMI Calculator helps you calculate your
              monthly installments and grow your career
            </div>
          </div>

          {/* -------------------Card starts here -------------------- */}

          <div className="block lg:w-full sm:w-full md:w-full   m-auto p-6  bg-white border border-gray-200 rounded-lg shadow-md   dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 container">
            <div className="mb-6 mt-6  ">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
              >
                {clicked ? "Loan Amount ₹:" : "Amount ₹:"}
              </label>
              <input
                type="number"
                placeholder="Amount"
                id="default-input"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="bg-gray-50 border  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div className="mt-2">
                <input
                  id="default-range"
                  type="range"
                  style={{ accentColor: "indigo" }}
                  onChange={(e) => setNumber(parseInt(e.target.value) * 1000)}
                  min={0}
                  defaultValue={number}
                  max={5000}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none  cursor-pointer dark:bg-gray-700"
                />
                <div className="flex text-sm font-semibold justify-between   ">
                  <div>0</div>
                  <div>50lakh </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
              >
                {clicked ? "Interest %:" : "Interest Rate:"}
              </label>
              <input
                type="number"
                placeholder="Interest"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                // defaultValue={rate}
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div className="mt-2">
                <input
                  id="default-range"
                  type="range"
                  defaultValue={0}
                  style={{ accentColor: "indigo" }}
                  onChange={(e) => setRate(e.target.value)}
                  min={0}
                  max={20}
                  className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex text-sm font-semibold justify-between   ">
                  <div>0%</div>
                  <div>20% </div>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
              >
                {clicked ? "Years to repay:" : "Years:"}
              </label>
              <input
                type="number"
                placeholder="Years"
                value={year}
                // defaultValue={year}
                onChange={(e) => setYear(e.target.value)}
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div className="mt-2">
                <input
                  id="default-range"
                  type="range"
                  defaultValue={0}
                  style={{ accentColor: "indigo" }}
                  onChange={(e) => setYear(e.target.value)}
                  min={0}
                  max={40}
                  className="w-full h-2  bg-gray-300  rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <div className="flex ftext-sm font-semibold justify-between   ">
                  <div>0</div>
                  <div>40 </div>
                </div>
              </div>
            </div>

            {/* -------------------------------table-------------------- */}

            {openTable && (
              <div className="overflow-x-auto relative  mb-2">
                <table className="w-full   mt-2 border border-gray-200 rounded-lg text-sm text-left text-gray-500 dark:text-gray-400">
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="py-4 px-6 text-sm font-semibold   text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Monthly Payment ₹:
                      </th>

                      <td className="py-4 px-6 text-sm font-semibold text-red-500 ">
                        {montlyCal}
                      </td>
                    </tr>
                    <tr className="bg-white text-sm font-semibold border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="py-4 px-6 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Total Payment ₹:
                      </th>

                      <td className="py-4 px-6 text-sm font-semibold text-red-500">
                        {totalCal}
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="py-4 px-6 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Total Interest ₹:
                      </th>

                      <td className="py-4 px-6 text-sm font-semibold text-red-500">
                        {interestCal}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {/* -----------------------button------------------- */}

            {clicked ? (
              <div className="flex justify-center  mb-6">
                <button
                  onClick={() => {
                    setOpenTable(!openTable);
                    setClicked(!clicked);
                    clearFields();
                  }}
                  type="submit"
                  className=" w-full  sm:w-2/6 mt-6 block p-2 cursor-pointer rounded-md border border-transparent bg-timesPurple h-full text-base font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-puple-700 sm:px-10 "
                >
                  Calculate again
                </button>
              </div>
            ) : (
              <div className="flex justify-center  mb-4">
                <button
                  onClick={() => {
                    setOpenTable(!openTable);
                    setClicked(!clicked);
                  }}
                  type="submit"
                  className=" w-full  sm:w-2/6 mt-6 block p-2 cursor-pointer rounded-md border border-transparent bg-timesPurple h-full text-base font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-puple-700 sm:px-10 "
                >
                  Submit
                </button>
              </div>
            )}
          </div>
        </div>
        {/* -----------------------Card ends here --------------- */}

        {/* -----------------------visit card --------------- */}

        {/* -----------------------visit card ends here --------------- */}

        <div className="block p-6 border mt-6 mb-6 border-gray-200 rounded-lg shadow-md   dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 container w-full sm:w-full m-auto">
          <UsefullTools />
        </div>
        <div className="mt-6 ">
          <GoogleAd_728x90
            isMobile={props.isMobile}
            path="/22637491760/timesascent.com_erelego_ap_d_728x90"
            ads_Id="div-gpt-ad-1666337275945-0"
          />
        </div>
      </div>

      {/* -----------------------footer starts here --------------- */}

      <Footer />
    </div>
  );
};
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
  return {
    props: { isMobile },
  };
}

export default loancalculatornew;