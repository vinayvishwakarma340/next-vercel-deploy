import React, { useEffect, useState } from "react";
import MainHeader from "../Components/MainHeader";
import Footer from "../Components/Footer";

const paymentGateway = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const fetchRecruiterData = async (packageId, recruiterId) => {
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );

    var raw = JSON.stringify({
      PackageId: packageId,
      RecruiterId: recruiterId,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/RecruiterOrders`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.data.actionUrl) {
          setData(result.data);
          const timeout = setTimeout(() => {
            document.getElementById("paymentForm").submit();
            setLoading(false);
          }, 1000);
          return () => clearTimeout(timeout);
        }
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <div>
      <MainHeader />
      <button
        disabled={loading}
        className="block rounded-md w-40 my-10 m-auto h-full cursor-pointer   border border-transparent bg-timesPurple px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-purple-900 focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
        onClick={() => fetchRecruiterData("1", "A533501355")}
      >
        {loading ? "Processing..." : " Payment Gateway"}
      </button>
      <form
        style={{ display: "none" }}
        action={
          "https://digitalsolutions.timesgroup.com/responsesolutionsTAprd/AcceptMobileCustomerData.jsp"
        }
        method="POST"
        id="paymentForm"
      >
        <input
          type="text"
          id="txtOrderId"
          name="order_id"
          value={data.order_id}
        />{" "}
        <br />
        <input type="text" name="currency" value="INR" /> <br />
        <input type="text" id="txtAmount" name="amount" value={"1"} /> <br />
        <input type="text" name="language" value="EN" /> <br />
        <input
          type="text"
          name="redirect_url"
          value={"https://preview.timesascent.com/PaymentDetail"}
        />{" "}
        <br />
        <input
          type="text"
          name="cancel_url"
          value={"https://preview.timesascent.com/PaymentDetail"}
        />{" "}
        <br />
        <input
          type="text"
          id="txtBillingName"
          name="billing_name"
          value={data.billing_name}
        />{" "}
        <br />
        <input
          type="text"
          id="txtBillingAddress"
          name="billing_address"
          value={data.billing_address}
        />
        <br />
        <input
          type="text"
          id="txtBillingCity"
          name="billing_city"
          value={data.billing_city}
        />{" "}
        <br />
        <input
          type="text"
          id="txtBillingState"
          name="billing_state"
          value={data.billing_state}
        />
        <br />
        <input
          type="text"
          id="txtBillingPin"
          name="billing_zip"
          value={data.billing_zip}
        />{" "}
        <br />
        <input
          type="text"
          id="txtBillingCountry"
          name="billing_country"
          value={data.billing_country}
        />{" "}
        <br />
        <input
          type="text"
          id="txtBillingMobile"
          name="billing_tel"
          value={data.billing_tel}
        />
        <input
          type="text"
          id="txtBillingEmail"
          name="billing_email"
          value={data.billing_email}
        />
        <input type="text" name="region" value={data.region} />
        <input type="submit" id="btnSubmitPaymentInfo" value="Submit" />
      </form>

      <Footer />
    </div>
  );
};

export default paymentGateway;
