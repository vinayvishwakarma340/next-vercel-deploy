import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import React from "react";

const SearchAreaInputMobile = (props) => {

  return (
    <div className=" mx-auto w-full sm:w-3/4 pb-0 sm:pb-4">
      <div className="items-center justify-center pt-4 px-4 flex gap-4">
        <label
          htmlFor="default-search-one"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>

        <div className="relative w-full sm:w-3/5" onClick={() => {
          props.setOpen(true);
          props.SearchLocationAutoFillApi();
        }}>
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
            name="title"
            id="default-search-one"
            className="pointer-events-none block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full focus:ring-timesPurple focus:border-timesPurple "
            placeholder={"Search your ideal job"}
          />
        </div>
        <div className="text-center sm:ml-2 ">
          <button
            type="button"
            name="filter"
            className="text-lg h-10 mt-0 sm:mb-6 sm:mt-5 inline-flex items-center justify-center rounded-md border border-transparent font-medium leading-4 text-gray-900"
            onClick={() => {
              props.setOpenFilterModal(true);
              props.SearchLocationAutoFillApi();
            }}
          >
            <span className="w-6 h-6">
              <AdjustmentsHorizontalIcon />
            </span>
            <span className="sr-only">Add Filter</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchAreaInputMobile;
