import { useEffect } from "react";
import { useState } from "react";
import EventCard from "../../Components/CardUI/EventCard";
import Footer from "../../Components/Footer";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
import HeadingWithIcon from "../../Components/HeadingUI/HeadingWithIcon";
import MainHeader from "../../Components/MainHeader";
import SkeletonMrec from "../../Components/Skeleton/SkeletonMrec";
import PrimayWidgetNew from "../../Components/Widget/PrimayWidgetNew";

const RecentEvent = ({ props }) => {
  const [adShow, setadShow] = useState(false);

  const getForherSreenData = props.getForherSreenData;
  const widgetOne = {
    name: "FREE Mentorship Advise",
    description: "Free mentorship advice from top mentors",
    src: "/mentorIcon/Mentor.webp",
    btnText: "Connect With Mentors",
    href: "/mentorship/mentorkart",
  };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <MainHeader />
      <section className="md:flex justify-between box-border w-full sm:container sm:py-4 md:py-6 lg:py-8 ">
        <div className=" md:flex justify-between  w-full">
          <div className=" w-full  md:w-[calc(100%-320px)]">
            <div className="">
              <HeadingWithIcon headingText="Recent Events" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {getForherSreenData.data.events.map((item, index) => {
                  return <EventCard key={index} data={item} />;
                })}
              </div>
            </div>
          </div>
          <div className="mt-10 md:w-[300px] md:ml-[20px]">
            <PrimayWidgetNew {...widgetOne} />
            <div className="mt-6 sm:w-[300px] m-auto ">
              {adShow ? (
                <GoogleAd_300x250
                  path="/1064661/ta.com_mrec3_For_Her"
                  ads_Id="div-gpt-ad-1674559519394-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
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
  let props = {};
  try {
    const getForher = await fetch(
      `${process.env.LIVE_HOST}/json/getForherSreenData.json`
    );
    const getForherSreenData = await getForher.json();
    props = {
      isMobile,
      getForherSreenData,
    };
  } catch (err) {
    console.log("api error in forher page");
    props = {
      isPageError: true,
    };
  }

  return { props: { props } };
}
export default RecentEvent;
