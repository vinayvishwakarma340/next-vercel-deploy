import React from "react";

const SideImageArticleCard = () => {
  return (
    <a
      href="#"
      className="flex justify-between items-center max-w-[300px] py-2  border-b-2  bg-white hover:bg-gray-50 shadow-md "
    >
      <div className="flex pl-2 w-calc[100%-105px]   flex-col justify-between  ">
        <h5 className="mb-1  text-md font-medium  text-gray-900 line-clamp-2">
          Notewo techn acquisit 2021
        </h5>
      </div>
      <div className="w-[100px] h-full ">
        <img
          className="object-cover h-full w-full auto "
          src="https://timesascent.com/recruiterpostjob/static/2022/12/26/1672077480.webp"
          alt=""
        />
      </div>
    </a>
  );
};

export default SideImageArticleCard;
