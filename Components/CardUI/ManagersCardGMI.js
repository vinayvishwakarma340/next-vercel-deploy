import Image from "next/image";
import React from "react";

const ManagersCardGMI = ({data}) => {
  return (
    <div
      className="rounded-2xl shadow-lg border border-gray-300 bg-gray-50 px-4 py-4"
      // onClick={props.onClick}
    >
      <div className="relative h-32 w-32 mx-auto rounded-full border-gray-300 overflow-hidden">
        <Image
        src={data.Image}
        alt={data.imageAltTag}
        fill
        style={{objectFit: "cover", borderRadius: "100%"}}
        className="hover:scale-110 transition-all ease-in-out delay-150 duration-500"
        />
      </div>
      {/* <img
        className="mx-auto h-48 w-48 rounded-full md:h-40 md:w-40 border border-gray-300 hover:scale-125"
        src={data.ManagerImage}
        alt=""
      /> */}
      <h3 className="mt-4 text-lg font-semibold leading-7 tracking-tight text-gray-900 text-center">
        {data.Name}
      </h3>
      <p className="text-sm leading-6 text-gray-600 line-clamp-1 text-center">
        {data.CompanyName}
      </p>
      <p className="text-sm leading-6 text-gray-600 line-clamp-1 text-center">
        {data.Designation}
      </p>
    </div>
  );
};

export default ManagersCardGMI;
