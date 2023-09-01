import React from "react";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import MopDetailUI from "../Components/MopDetailUI";
import { mopDetailAPI } from "./api/mopdetailapi";

const movementofprofessionalsdetail = (props) => {
  return (
    <div>
      <MainHeader />
      <div className="  py-4 md:py-6 lg:py-8 container">
        <div className="sm:flex gap-6">
          <div className="left-side w-full  md:w-[calc(100%-320px)]">
            <MopDetailUI
            // mopdetail={props.mopdetail}
            />
          </div>
          <div className=" right-side   md:w-[300px]">
            <div className="sm:mr-[8px] w-[300px] h-[250px] m-auto bg-gray-300 flex items-center text-center">
              <span className="w-full">300 x 250</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export async function getServerSideProps(context) {
  const mopdetail = await mopDetailAPI(query.professionalid);

  return {
    props: { mopdetail },
  };
}

export default movementofprofessionalsdetail;
