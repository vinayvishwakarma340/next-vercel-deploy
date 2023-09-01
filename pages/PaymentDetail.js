import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainHeader from "../Components/MainHeader";
import Footer from "../Components/Footer";
import classes from "../styles/PaymentDetail.module.css";
const PaymentDetail = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [apiStatus, setApiStatus] = useState("pending");
  const router = useRouter();
  const { guid } = router.query;

  useEffect(() => {
    if (guid) {
      getPaymentDetail();
    }
  }, [guid]);
  const getPaymentDetail = async () => {
    setApiStatus("pending");
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/recruiterOrders_CallBackUrl?guid=${guid}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((response) => {
        setApiStatus("accepted");
        setData(response.data);
      })
      .catch((error) => {
        console.log("error", error);
        setApiStatus("rejected");
      });
  };

  if (apiStatus === "rejected") {
    return (
      <div>
        <MainHeader />
        <section className="md:flex justify-between box-border w-full container py-4 md:py-6 lg:py-8 ">
          <div className="m-auto">
            <img
              className="w-20 h-20 m-auto"
              src="/alert.png"
              alt="payment failed"
            />
            <h2 className="text-2xl font-semibold text-center">
              Transaction failed
            </h2>
            <a
              href={`/payment-gateway`}
              className="mt-4 m-auto block w-[150px] rounded-md  border border-transparent bg-purple-100 px-4 py-2 text-center text-sm font-medium  shadow-sm text-purple-700 hover:bg-purple-200 focus:outline-none "
            >
              Retry Again
            </a>
          </div>
        </section>
        <Footer />
      </div>
    );
  }
  return (
    <div>
      <MainHeader />

      <section className="md:flex justify-between box-border w-full container sm:py-4 md:py-6 lg:py-8 ">
        {apiStatus === "pending" ? (
          <div className={classes.mainLoader}>
            <div className={classes.loaderWrapper}>
              <span className={classes.loader}></span>
            </div>
          </div>
        ) : (
          <div className={classes.cardcontainer}>
            {data.orderstatus === "SUCCESS" ? (
              <div>
                <svg
                  className={classes.checkmark}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    className={classes.checkmark__circle}
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    className={classes.checkmark__check}
                    fill="none"
                    d="M14.1 27.2l7.1 7.2 16.7-16.8"
                  />
                </svg>
                <h1 className={classes.heading}>Payment Success</h1>
              </div>
            ) : (
              <div>
                <svg
                  className={classes.checkmark_fail}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 52 52"
                >
                  <circle
                    className={classes.checkmark__circle_fail}
                    cx="26"
                    cy="26"
                    r="25"
                    fill="none"
                  />
                  <path
                    className={classes.checkmark__check_fail}
                    fill="none"
                    d="M16 16 36 36 M36 16 16 36"
                  />
                </svg>
                <h1 className={classes.heading}>OOPS Payment failed</h1>
              </div>
            )}

            <table className={classes.table}>
              <tr className={classes.tr}>
                <td className={classes.td}>Billing Name</td>
                <td className={classes.td}>{data.billingname}</td>
              </tr>
              <tr className={classes.tr}>
                <td className={classes.td}>Amount</td>
                <td className={classes.td}>{data.amount}</td>
              </tr>
              <tr className={classes.tr}>
                <td className={classes.td}>BCC Reference id</td>
                <td className={classes.td}>{data.bcclrefrenceno}</td>
              </tr>
              <tr className={classes.tr}>
                <td className={classes.td}>TCC Reference id</td>
                <td className={classes.td}>{data.ccrefrenceid}</td>
              </tr>
              <tr className={classes.tr}>
                <td className={classes.td}>currency</td>
                <td className={classes.td}>{data.currency}</td>
              </tr>
              <tr className={classes.tr}>
                <td className={classes.td}>orderstatus</td>
                <td className={classes.td}>{data.orderstatus}</td>
              </tr>
              <tr className={classes.tr}>
                <td className={classes.td}>transactionid</td>
                <td className={classes.td}>{data.transactionid}</td>
              </tr>
            </table>
            {/* <button className={classes.button}>Go to home</button> */}
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default PaymentDetail;
