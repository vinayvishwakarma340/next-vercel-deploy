import React from "react";

import { PaperClipIcon } from "@heroicons/react/20/solid";
import Footer from "../../Components/Footer";
import MainHeader from "../../Components/MainHeader";
import { authordetailapi } from "../api/authordetailapi";
import ResumeCard from "../../Components/CardUI/ResumeCard";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
import BreadCrumbs from "../../Components/BreadCrumbs";
const authorprofile = ({ authordetail }) => {
  // const pages = [
  //   { name: "Author Profile", href: "", current: false },
  //   { name: "Mentorkart", href: "/mentorship/mentorkart", current: true },
  // ];
  return (
    <>
      {" "}
      <MainHeader />
      <div>
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="py-4 md:py-6 lg:py-8 container ">
            {/* <div className="mb-5">
              <BreadCrumbs data={pages} />
            </div> */}
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Author Profile
            </h3>
            <p className="mt-1 max-w-2xl text-sm text-black">
              Personal details
            </p>

            <div className="lg:flex md:block lg:justify-between mx-auto">
              <div className=" lg:px-0 lg:py-5 sm:p-0 lg:w-2/3">
                <dl className="sm:divide-y sm:divide-gray-200">
                  <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5 sm:px-2">
                    <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      <img
                        src={authordetail.data.AutherImage}
                        className="rounded-full w-[80px] h-[80px] object-cover border-gray-500 border"
                      />
                    </dd>
                  </div>
                  <div className="py-4 lg:flex justify-between sm:py-5 sm:px-2 border-b pb-5">
                    <div className="text-sm font-medium text-black">
                      Full name
                    </div>
                    <div className="lg:mt-1 mt-4 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
                      {authordetail.data.AutherName}
                    </div>
                  </div>

                  <div className="py-4 lg:flex justify-between sm:py-5 sm:px-2 border-b pb-5">
                    <div className="text-sm font-medium text-black">
                      Designation
                    </div>
                    <div className="lg:mt-1 mt-4 text-sm text-gray-900 sm:col-span-2 mailto:sm:mt-0 ">
                      {authordetail.data.Designation}
                    </div>
                  </div>

                  <div className="py-2  sm:py-3 sm:px-2">
                    <div className="text-sm font-medium text-black mt-2">
                      About
                    </div>
                    <div className="text-sm text-gray-900   break-words mt-3 border-b pb-5">
                      {authordetail.data.ShortDesc}
                    </div>
                  </div>
                </dl>
              </div>
              <div className="">
                <GoogleAd_300x250
                  path="/22637491760/timesascent.com_erelego_d_ap_300x250_1"
                  ads_Id="div-gpt-ad-1674643874881-0"
                  size={[[300, 250]]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default authorprofile;
export async function getServerSideProps(context) {
  const authordetail = await authordetailapi(context.query.autherId);
  return {
    props: { authordetail },
  };
}
