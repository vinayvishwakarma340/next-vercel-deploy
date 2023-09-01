import Head from "next/head";
import React, { useState } from "react";
import { useEffect } from "react";
import BreadCrumbs from "../Components/BreadCrumbs";
import Footer from "../Components/Footer";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";
import MainHeader from "../Components/MainHeader";
import SkeletonMrec from "../Components/Skeleton/SkeletonMrec";
import UsefullTools from "../Components/UsefullTools";

const salarycal = (props) => {
  const [openTable, setOpenTable] = useState(false);
  const [clicked, setClicked] = useState("");
  const [bonus, setBonus] = useState("");
  const [tax, setTax] = useState("");
  const [epf, setEpf] = useState("");
  const [epef, setEpef] = useState("");
  const [insurance, setInsurance] = useState("");
  const [ctc, setCtc] = useState("");
  const [deduct, setDeduct] = useState("");
  const [annualDeduct, setAnnualDeduct] = useState("");
  const [netMonth, setNetMonth] = useState("");
  const [netYear, setNetYear] = useState("");
  const [errors, setErrors] = useState("");
  const [adShow, setadShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  const deductions = () => {
    const result = Number(tax) + Number(epf) + Number(epef) + Number(insurance);
    setDeduct(result);
    setAnnualDeduct(result * 12);
    const netMonthHome =
      Number(ctc) / 12 -
      Number(bonus) / 12 -
      Number(tax) -
      Number(epf) -
      Number(epef) -
      Number(insurance);
    setNetMonth(netMonthHome);
    setNetYear(netMonthHome * 12);
  };

  const clearFields = () => {
    setCtc(""),
      setBonus(""),
      setTax(""),
      setEpf(""),
      setEpef(""),
      setInsurance("");
    setNetMonth("");
    setNetYear("");
    setAnnualDeduct("");
    setDeduct("");
  };

  const validation = () => {
    let actualerror = "";
    if (
      ctc === "" ||
      bonus === "" ||
      tax === "" ||
      epf === "" ||
      epef === "" ||
      insurance === ""
    ) {
      actualerror = "Please fill out all the details required";
      setErrors(actualerror);
      return false;
    }
    return true;
  };

  const btnclicked = () => {
    deductions();
    setOpenTable(!openTable);
    setClicked(!clicked);
  };
  // console.log(netYear);

  // console.log((Number(ctc) - (Number(tax) + Number(epf) + Number(epef) + Number(insurance))))

  const pages = [{ name: "Salary-Cal", href: "/salary-cal", current: true }];

  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{`Salary Calculator: Take Home Salary Calculator in India - TimesAscent.com`}</title>
        <meta
          name="description"
          content={`Use free Times Ascent salary calculator. Simply add you CTC, bonus, P.F.  amounts to know take home salary - TimesAscent.com`}
        />

        <link rel="canonical" href="https://timesascent.com/salary-cal" />
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
          content="Salary Calculator: Take Home Salary Calculator in India - TimesAscent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Use free Times Ascent salary calculator. Simply add you CTC, bonus, P.F.  amounts to know take home salary - TimesAscent.com"
        />
        <meta property="og:url" content="https://timesascent.com/salary-cal" />
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
          content="Salary Calculator: Take Home Salary Calculator in India - TimesAscent.com"
        />
        <meta
          property="twitter:description"
          content="Use free Times Ascent salary calculator. Simply add you CTC, bonus, P.F.  amounts to know take home salary - TimesAscent.com"
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

      {/* --------------------------------------main ui starts here -------------------------------------------- */}

      <MainHeader />
      <div className="relative py-4 md:py-6 lg:py-8 container">
        {/* -----------------------------breadcrumbs-------------- */}
        <div>
          <BreadCrumbs data={pages} />
        </div>

        {/* -------------------upper sections starts here -------------------- */}

        <div className=" mt-4 ">
          <div className="  mb-4 ">
            <h1 className=" text-center text-xl font-semibold leading-10   sm:leading-none flex justify-center py-1    tracking-tight text-gray-900">
              Salary Calculator
            </h1>

            <div className="mx-auto mt-3 max-w-5xl text-center text-base   leading-normal   sm:flex sm:justify-center    ">
              Try our free Take-Home salary Calculator. Know detailed salary
              breakup from CTC to tax, gratuity, pf etc
            </div>
          </div>

          {/* -------------------Card starts here -------------------- */}

          <div className="block lg:w-full sm:w-full md:w-full   m-auto p-6  bg-white border border-gray-200 rounded-lg shadow-md   dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 container">
            <div className="mb-6 ">
              <label
                htmlFor="default-input"
                className="block mb-2  text-sm font-semibold text-gray-900 dark:text-white"
              >
                Cost to Company (CTC) ₹:
              </label>
              <input
                type="number"
                value={ctc}
                onChange={(e) => {
                  setCtc(e.target.value);
                  setErrors("");
                }}
                id="default-input"
                placeholder=" Cost to Company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-semibold   text-gray-900 dark:text-white"
              >
                Bonus included in CTC ₹:
              </label>
              <input
                type="number"
                value={bonus}
                onChange={(e) => {
                  setBonus(e.target.value);
                  setErrors("");
                }}
                placeholder=" Bonus "
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
              >
                Professional Tax ₹:
              </label>
              <input
                type="number"
                value={tax}
                onChange={(e) => {
                  setTax(e.target.value);
                  setErrors("");
                }}
                placeholder="Professional Tax"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
              >
                Employer PF ₹:
              </label>
              <input
                type="number"
                value={epf}
                onChange={(e) => {
                  setEpf(e.target.value);
                  setErrors("");
                }}
                placeholder=" Employer contribution"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
              >
                Employee PF ₹:
              </label>
              <input
                type="number"
                value={epef}
                onChange={(e) => {
                  setEpef(e.target.value);
                  setErrors("");
                }}
                placeholder=" Employee PF"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="default-input"
                className="block mb-2 text-sm font-semibold text-gray-900 dark:text-white"
              >
                Employer Insurance ₹:
              </label>
              <input
                type="number"
                value={insurance}
                onChange={(e) => {
                  setInsurance(e.target.value);
                  setErrors("");
                }}
                placeholder=" Employer Insurance"
                id="default-input"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <div className="text-red-500 text-center mt-2 text-sm font-semibold">
                {errors}
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
                        className="py-4 px-6 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Total Monthly Deductions ₹:
                      </th>

                      <td className="py-4 px-6 text-sm font-semibold text-red-500 ">
                        {deduct}
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="py-4 px-6 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Total Annual Deductions ₹:
                      </th>

                      <td className="py-4 px-6 text-sm font-semibold text-red-500">
                        {/* 1,35,600 */}
                        {annualDeduct}
                      </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="py-4 px-6 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Net take home monthly ₹:
                      </th>

                      <td className="py-4 px-6 text-sm font-semibold text-red-500">
                        {netMonth}
                      </td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th
                        scope="row"
                        className="py-4 px-6 text-sm font-semibold text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        Net take home Annual ₹:
                      </th>

                      <td className="py-4 px-6 text-sm font-semibold text-red-500">
                        {netYear}
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
                    clearFields();
                    setOpenTable(!openTable);
                    setClicked(!clicked);
                  }}
                  type="submit"
                  className=" w-full  sm:w-2/6 mt-6 block p-2 cursor-pointer rounded-md border border-transparent bg-timesPurple h-full text-base font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-puple-700 sm:px-10 "
                >
                  Calculate again
                </button>
              </div>
            ) : (
              <div className="flex justify-center  mb-6">
                <button
                  onClick={() => {
                    validation()
                      ? btnclicked()
                      : console.log("something went wrong");
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
        <div className=" ">
          {adShow ? (
            <GoogleAd_300x250
              path="/22637491760/timesascent.com_erelego_d_cp_300x250"
              ads_Id="div-gpt-ad-1674643917536-0"
              size={[[300, 250]]}
            />
          ) : (
            <SkeletonMrec />
          )}
        </div>
      </div>

      {/* -----------------------footer starts here --------------- */}

      <Footer />
    </div>
  );
};

export default salarycal;
