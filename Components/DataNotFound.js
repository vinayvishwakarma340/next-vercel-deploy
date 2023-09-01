import React from "react";

const DataNotFound = () => {
  return (
    <div className="py-8">
      <div className="w-full text-center bg-white font-bold text-gray-800 text-xl pt-4  m-auto">
        No Results found
      </div>
      <div className="  text-center text-md bg-white  pb-4 pt-2 m-auto">
        No Data is available for this combination of filters
      </div>
    </div>
  );
};

export default DataNotFound;
