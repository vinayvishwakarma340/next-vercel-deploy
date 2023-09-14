import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import "../styles/globals.css";
import * as gtag from "../lib/gtag";
import GoogleAd_Interstitial from "../Components/GoogleAds/GoogleAd_Interstitial";
import Cookies from "js-cookie";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";
// import dynamic from "next/dynamic";
import googleOneTap from "google-one-tap";

// const SessionProvider = dynamic(() =>
//   import("next-auth/react").then((mod) => mod.SessionProvider)
// );
// import 'flowbite/css/flowbite.css';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
function MyApp({ session, Component, pageProps }) {
  const [interstitialAds, setInterstitialAds] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  // for One tap google login signup
  const options = {
    client_id:
      "90938563153-9rh79ok6dgasud89tr8u5800bcmsfsa0.apps.googleusercontent.com", // required
    auto_select: false, // optional
    cancel_on_tap_outside: false, // optional
    context: "signin", // optional
  };

  const gotoPage = () => {
    if (Cookies.get("pathname")) {
      router.reload(Cookies.get("pathname"));
    }
  };


  // useEffect(() => {
  //   fetchIpAdress()
  // }, []);

  // const fetchIpAdress = async () => {
  //   const result = await fetch("/api/pageLogCheck");
  //   const ip = await result.json();
  //   pageLoginAllPagesFunc(ip)

  // }

  // const pageLoginAllPagesFunc = ({ ip }) => {
  //   const currentTime = new Date();

  //   var myHeaders = new Headers();
  //   myHeaders.append("Authorization", process.env.API_TOKEN_AUTH_SERVER);
  //   myHeaders.append("Content-Type", "application/json");

  //   var raw = JSON.stringify({
  //     "IP": ip,
  //     "Url": router.asPath,
  //     "TimeStamp": currentTime
  //   });

  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };

  //   fetch("https://vb1pzsq0m2.execute-api.ap-southeast-1.amazonaws.com/TA/v1/admin1_1/PageLoadLogs", requestOptions)
  //     .then(response => response.json())
  //     .then(result => {
  //       if (result.status === "SUCCESS" && result.status_code == 200) {
  //         // console.log("data saved", result);
  //       }
  //     })
  //     .catch(error => console.log('error', error));
  // }

  useEffect(() => {
    googleOneTap(options, (response) => {
      console.log("triiiiff")
      console.log(response, "jjjkkjjks")
      // Send response to server
      // googleLoginSignup(response.credential);
    });

    const intertitialAd = JSON.parse(localStorage.getItem("intertitialAd"));
    if (!intertitialAd?.showAd) {
      intetitialAdsApi();
    } else {
      getWithExpiry("intertitialAd");
    }
  }, []);


  useEffect(() => {

    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };


    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  const googleLoginSignup = async (token) => {
    Cookies.set("pathname", router.pathname);
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
          Cookies.set("pathname", router.pathname);
          Cookies.get("pathname")
            ? gotoPage()
            : router.push("/applicant-dashboard/" + response.data.CandidateId);
        }
      })
      .catch((error) => console.log("error", error));
  };

  const intetitialAdsApi = () => {
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({});

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/GetManageInterstitial`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          if (result.isadactive) {
            const second = 90 * 1000;
            setWithExpiry("intertitialAd", true, second);
          }
        }
      })
      .catch((error) => console.log("error", error));
  };

  const setWithExpiry = (key, value, ttl) => {
    const now = new Date();
    const item = {
      showAd: value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item));
    setInterstitialAds(true);
  };

  const getWithExpiry = (key) => {
    const itemStr = localStorage.getItem(key);
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
    }
  };

  return (
    <>
      <Head>
        <Head>
          <link rel="shortcut icon" sizes="32x32" href="/images/favicon.ico" />

        </Head>
        <Script
          key="product-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "TimesAcsent",
              logo: "https://timesascent.com/times_ascent_logo.svg",
              url: "https://timesascent.com/",
            }),
          }}
        />
      </Head>
      <GoogleAd_Interstitial
        openModal={interstitialAds}
        closeModal={setInterstitialAds}
      />
      {/* <div className="w-full fixed top-0 left-0 z-[100]">
          <div className={
            isLoading ? "h-[3px] sm:h-[4px] bg-timesRed animate-progresshalf" :
            "h-[3px] sm:h-[4px] bg-timesRed animate-progress"}  >
            <div className="animate-loading h-full w-10 bg-gradient-to-l from-violet-500 to-fuchsia-500"></div>
            </div>
          </div> */}
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}

export default MyApp;
