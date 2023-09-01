import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
// import PopularCity from "../../public/JSON/cityFilter.json";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";


const SearchArea = (props) => {

  // const [selectedLocation, setSelectedLocation] = useState({ issuedate: "", keyIndex: "", location: "", numberOfPosition: "" });
  const [selectedTitle, setSelectedTitle] = useState({ name: "", Type: "", id: "" });
  const [showTitle, setShowTitle] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [filteredTitle, setFilteredTitle] = useState([]);
  const [filteredLocation, setFilteredLocation] = useState([]);
  const [selectedSuggestionIndex, setSelectedSuggestionIndex] = useState(-1);
  const [selectedLocationIndex, setSelectedLocationIndex] = useState(-1);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest(".suggestions-title")) {
        setShowTitle(false);
      }
      if (!event.target.closest(".suggestions-location")) {
        setShowLocation(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const urlPattern = (str) => {
    return str?.replace(/[^a-zA-Z ]/g, " ")
      .split(" ")
      .join("-")
      .split(" ")
      .join("-")
      .split("--")
      .join("-")
      .toLowerCase();
  };

  const handleSearchInput = (e) => {
    setSelectedSuggestionIndex(-1);
    const { name, value } = e.target;
    if (name === "title") {
      setShowTitle(true);
      props.SearchAutoFillApi(e.target.value)
      setSelectedTitle({ ...selectedTitle, name: e.target.value });
      setFilteredTitle(props.autoFillSearchData);
    } else if (name === "location") {
      setShowLocation(true);
      props.setSelectedLocation({ ...props.selectedLocation, location: value });
      let arr = props.PopularCity.filter((item) =>
        item.location
          .toLowerCase()
          ?.startsWith(value.toString().toLowerCase())
      );
      setFilteredLocation(arr);
    } else {
      console.log("not result found");
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSelectedTitle(suggestion);
    setShowTitle(false);
    setSelectedSuggestionIndex(-1);
  };

  const handleLocationClick = (suggestion) => {
    props.setSelectedLocation(suggestion);
    setShowLocation(false);
    setSelectedLocationIndex(-1);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedSuggestionIndex(
        (prevIndex) =>
          (prevIndex - 1 + filteredTitle.length) % filteredTitle.length
      );
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedSuggestionIndex(
        (prevIndex) => (prevIndex + 1) % filteredTitle.length
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (selectedSuggestionIndex !== -1) {
        handleSuggestionClick(filteredTitle[selectedSuggestionIndex]);
        setShowTitle(false);
      }
    }
  };

  const handleKeyDownLocation = (event) => {
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedLocationIndex(
        (prevIndex) =>
          (prevIndex - 1 + filteredLocation.length) % filteredLocation.length
      );
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedLocationIndex(
        (prevIndex) => (prevIndex + 1) % filteredLocation.length
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (selectedLocationIndex !== -1) {
        handleLocationClick(filteredLocation[selectedLocationIndex]);
        setShowLocation(false);
      }
    }
  };

  const navigateHandler = (e) => {
    e.preventDefault();
    props.saveSearchJob(selectedTitle.name, props.selectedLocation.location);
    props.setLoading(true);
    if (selectedTitle.name && selectedTitle.Type && props.selectedLocation.location) {
      window.open(
        `/${urlPattern(selectedTitle.name)}-jobs-in-${urlPattern(
          props.selectedLocation.location
        )}`, "_self"
      );
    } else if (!selectedTitle.name && !selectedTitle.Type && props.selectedLocation.location) {
      window.open(`/jobs-in-${urlPattern(props.selectedLocation.location)}`, "_self");
    } else if (selectedTitle.Type === "Designation") {
      window.open(`/${urlPattern(selectedTitle.name)}-jobs/designation`, "_self");
    } else if (selectedTitle.Type === "Category") {
      window.open(`/${urlPattern(selectedTitle.name)}-jobs/categories`, "_self");
    } else if (selectedTitle.Type === "Level") {
      window.open(`/${urlPattern(selectedTitle.name)}-jobs/level`, "_self");
    } else if (selectedTitle.Type === "Industry") {
      window.open(`/${urlPattern(selectedTitle.name)}-jobs/industry/${selectedTitle.id}`, "_self");
    } else if (selectedTitle.Type === "Company") {
      window.open(
        `/NewCompanyProfile/${urlPattern(selectedTitle.name)}/${selectedTitle.id
        }`, "_self"
      );
    } else {
      window.open(`/latest-jobs/${urlPattern(selectedTitle.name)}`, "_self");
    }
    setSelectedTitle({ name: "", Type: "", id: "" });
    props.setSelectedLocation({ issuedate: "", keyIndex: "", location: "", numberOfPosition: "" });
    setTimeout(() => props.setLoading(false), 1000);
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className=" pt-6 pb-2 sm:pb-6 sm:mb-8 container mx-auto">
      <div className="relative pb-4 w-3/4 mx-auto">
        <h1 className="text-center text-2xl font-bold leading-8 tracking-tight text-gray-900 sm:text-3xl">
          Find your dream Job
        </h1>
        <p className="mx-auto mt-4   text-center text-l text-gray-500 px-4 sm:px-0">
          Discover the best Jobs with our variety of Job opportunities,
          and improve your career with the appropriate position in keeping with
          your skills, profile, and preferences in your area of interest.
        </p>
      </div>

      <div className=" mx-auto w-full ">
        <form className="sm:flex sm:justify-center" onSubmit={navigateHandler}>
          <label
            htmlFor="title-search"
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
              name="title"
              value={selectedTitle.name}
              required={!props.selectedLocation.location}
              onChange={handleSearchInput}
              onKeyDown={handleKeyDown}
              id="title-search"
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-timesPurple focus:border-timesPurple "
              placeholder="Search your ideal job"
            />
            {showTitle && selectedTitle.name ? (
              <div
                className="suggestions-title max-h-[380px] rounded-md w-full overflow-y-scroll absolute z-30 bg-white shadow"
                aria-labelledby="communities-headline"
              >
                {props.autoFillSearchData?.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      handleSuggestionClick(item);
                    }}
                    className={`${selectedSuggestionIndex === index
                      ? "bg-timesPurple text-white hover:bg-timesPurple"
                      : "border-gray-300 hover:bg-purple-50"
                      }  cursor-pointer border-b  group flex items-center px-3 py-2 text-sm font-medium   `}
                  >
                    <span className="truncate">{item.name}</span>
                    {/* (${community.numberOfPosition}) */}
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
            <label
              htmlFor="location-search"
              className=" mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              location search
            </label>
            <input
              type="search"
              autoComplete="off"
              name="location"
              required={!selectedTitle.name}
              value={props.selectedLocation.location}
              onChange={handleSearchInput}
              onKeyDown={handleKeyDownLocation}
              id="location-search"
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-timesPurple focus:border-timesPurple dark:focus:ring-timesPurple dark:focus:border-blue-500"
              placeholder="Location"
            />
            {showLocation && props.selectedLocation.location ? (
              <div
                className="suggestions-location max-h-[380px] w-full rounded-md overflow-y-scroll absolute z-30 bg-white shadow"
                aria-labelledby="communities-headline"
              >
                {filteredLocation?.map((item, index) => (
                  <div
                    onClick={() => {
                      handleLocationClick(item);
                    }}
                    className={`${selectedLocationIndex === index
                      ? "bg-timesPurple text-white hover:bg-timesPurple"
                      : "border-gray-300 hover:bg-purple-50"
                      }  cursor-pointer border-b  group flex items-center px-3 py-2 text-sm font-medium   `}
                  >
                    <span className="truncate">{`${item.location} (${item.numberOfPosition})`}</span>
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="flex justify-center mx-4 sm:mx-0 gap-4 items-center">
            <div className="text-center ml-2 ">
              {props.loading ? (
                <div className="w-40 sm:w-28  h-10 mt-0 mb-6 sm:mt-5 inline-flex items-center justify-center rounded-md border border-transparent bg-timesPurple px-4  text-sm font-medium leading-4 text-white shadow-sm hover:bg-timesHoverBtn focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2">
                  <ThreeDots
                    height="20"
                    width="30"
                    radius="9"
                    color="white"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-28 text-sm h-10 mt-0 mb-6 sm:mt-5 inline-flex items-center justify-center rounded-md border border-transparent bg-timesPurple px-4  font-medium leading-4 text-white shadow-sm hover:bg-timesHoverBtn focus:outline-none focus:ring-2 focus:timesPurple focus:ring-offset-2"
                >
                  Search
                </button>
              )}
            </div>
            <div className="text-center ml-2 ">
              <button
                type="button"
                className="w-28 text-sm h-10 mt-0 mb-6 sm:mt-5 inline-flex items-center justify-center rounded-md border border-transparent bg-timesPurple px-4  font-medium leading-4 text-white shadow-sm hover:bg-timesHoverBtn focus:outline-none focus:ring-2 focus:timesPurple focus:ring-offset-2"
                onClick={() => props.setOpenFilterModal(true)}
              >
                <span className="w-5 h-5">
                  <AdjustmentsHorizontalIcon />
                </span>
                <span className="text-xs ml-1">Add Filter</span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="m-4 ">
        <ul
          role="list"
          className=" drop-shadow-md mt-4 grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 sm:gap-6 md:gap-3 lg:grid-cols-5 xl:grid-cols-6"
        >
          {props.projects.slice(0, 12).map((project, index) => (
            <li key={index}>
              <a
                href={`/${project.skill
                  .replace(/[^a-zA-Z ]/g, " ")
                  .split(" ")
                  .join("-")
                  .split(" ")
                  .join("-")
                  .split("--")
                  .join("-")}-jobs/designation`}
                className="col-span-1 flex rounded-md shadow-sm"
              >
                <div
                  className={classNames(
                    project.bgColor,
                    "flex items-center p-2 justify-center w-3 text-white text-sm rounded-l-md bg-red-400"
                  )}
                ></div>
                <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-t border-r border-b border-gray-200 bg-white">
                  <div className="flex-1 truncate px-2 lg:px-1 xl:px-2 sm:px-4 py-2 text-sm">
                    <div className="font-medium text-gray-900 hover:text-gray-600">
                      {project.skill?.split(" ")[0]?.charAt(0).toUpperCase() +
                        project.skill?.split(" ")[0]?.slice(1).toLowerCase() +
                        " " +
                        (project.skill?.split(" ")[1]
                          ? project.skill
                            ?.split(" ")[1]
                            ?.charAt(0)
                            .toUpperCase() +
                          project.skill?.split(" ")[1]?.slice(1).toLowerCase()
                          : "")}
                    </div>
                    <p className="text-gray-500">
                      {project.numberOfPosition}+ Jobs
                    </p>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchArea;
