import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import PopularCity from "../../../public/JSON/cityFilter.json";
import Title from "../../../public/JSON/positionFilter.json";
import { FunnelIcon } from "@heroicons/react/24/outline";

const SearchAreaInput = (props) => {
  const filteredLocation = PopularCity.filter((item) =>
    item.location
      ?.toLowerCase()
      ?.startsWith(props.valueLocation?.toString()?.toLowerCase())
  );
  const filteredtitle = Title.filter((item) =>
    item.skill
      ?.toLowerCase()
      ?.startsWith(props.value?.toString()?.toLowerCase())
  );

  return (
    <div className="mx-auto w-full sm:w-3/4 pb-4">
      <form className="sm:flex sm:justify-center" onSubmit={props.onSubmit}>
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative m-4  sm:w-3/5">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            autoComplete="off"
            value={props.value}
            onChange={props.onChange}
            id="default-search"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search your ideal job"
          />
          {props.value && filteredtitle.length && props.showTitle === true ? (
            <div
              className="max-h-[380px] rounded-md w-full overflow-y-scroll absolute z-30 bg-white shadow"
              aria-labelledby="communities-headline"
            >
              {props.value &&
                filteredtitle?.map((community) => (
                  <div
                    onClick={() => {
                      props.setTitle(community.skill);
                      props.setShowTitle(false);
                    }}
                    className="cursor-pointer border-b border-gray-300 group flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    <span className="truncate">{`${community.skill} (${community.numberOfPosition})`}</span>
                  </div>
                ))}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="relative  m-4">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              viewBox="0 0 1024 1024"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              id="IconChangeColor"
              height="18"
              width="18"
            >
              <path
                fill="currentColor"
                d="M288 896h448q32 0 32 32t-32 32H288q-32 0-32-32t32-32z"
                id="mainIconPathAttribute"
              ></path>
              <path
                fill="currentColor"
                d="M800 416a288 288 0 1 0-576 0c0 118.144 94.528 272.128 288 456.576C705.472 688.128 800 534.144 800 416zM512 960C277.312 746.688 160 565.312 160 416a352 352 0 0 1 704 0c0 149.312-117.312 330.688-352 544z"
                id="mainIconPathAttribute"
              ></path>
              <path
                fill="currentColor"
                d="M544 384h96a32 32 0 1 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64h96v-96a32 32 0 0 1 64 0v96z"
                id="mainIconPathAttribute"
              ></path>
            </svg>
          </div>
          <input
            type="search"
            autoComplete="off"
            value={props.valueLocation}
            onChange={props.onChangeLocation}
            id="default-search"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Location"
          />
          {props.valueLocation &&
            filteredLocation.length &&
            props.showLocation === true ? (
            <div
              className="max-h-[380px] w-full rounded-md overflow-y-scroll absolute z-30 bg-white shadow"
              aria-labelledby="communities-headline"
            >
              {props.valueLocation &&
                filteredLocation?.map((community) => (
                  <div
                    onClick={() => {
                      props.setLocation(community.location);
                      props.setShowLocation(false);
                    }}
                    className="cursor-pointer group border-b border-gray-300 flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                  >
                    <span className="truncate">{`${community.location} (${community.numberOfPosition})`}</span>
                  </div>
                ))}
            </div>
          ) : (
            <></>
          )}
        </div>
        <div className="text-center ml-2 ">
          {props.loading ? (
            <div className="w-40 sm:w-28  h-10 mt-0 mb-6 sm:mt-5 inline-flex items-center justify-center rounded-md border border-transparent bg-purple-600 px-4  text-sm font-medium leading-4 text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <ThreeDots
                height="20"
                width="30"
                radius="9"
                color="white"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />{" "}
            </div>
          ) : (
            <button
              type="submit"
              className="w-40 sm:w-28 text-lg h-10 mt-0 mb-6 sm:mt-5 inline-flex items-center justify-center rounded-md border border-transparent bg-purple-600 px-4  font-medium leading-4 text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Search
            </button>
          )}
        </div>
        <div className="text-center ml-2 ">
          <button
            type="button"
            className="w-40 sm:w-28 text-lg h-10 mt-0 mb-6 sm:mt-5 inline-flex items-center justify-center rounded-md border border-transparent bg-white px-4  font-medium leading-4 text-indigo-600 shadow-sm hover:bg-purple-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={() => props.setOpenFilterModal(true)}
          >
            <span className="w-5 h-5">
              <FunnelIcon />
            </span>
            <span className="text-xs ml-1">Add Filter</span>
          </button>
        </div>

      </form>
    </div>
  );
};

export default SearchAreaInput;
