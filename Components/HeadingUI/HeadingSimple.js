import React from "react";

const HeadingSimple = (props) => {
  return (
    <div className="bg-white py-4 px-6 border-b-2 border-purple-100">
      <h3 className="text-lg md:text-2xl font-bold leading-6 text-gray-900">
        {props.heading}
      </h3>
      <div className="mt-2 sm:flex sm:items-start sm:justify-between">
        <div className="max-w-4xl  text-sm md:text-lg text-gray-500">
          <p>{props.subHeading}</p>
        </div>
      </div>
    </div>
  );
};

export default HeadingSimple;
