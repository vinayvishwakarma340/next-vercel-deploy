import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
// import Title from "../../../public/JSON/positionFilter.json";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
// import useRemoveSpaceUrl from "../../CustomHook/useRemoveSpaceUrl";

const NewSearchAreaInput = (props) => {
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
      props.SearchLocationAutoFillApi();
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


  // const handleSearchInput = (e) => {
  //   setSelectedSuggestionIndex(-1);
  //   const { name, value } = e.target;
  //   if (name === "title") {
  //     setShowTitle(true);
  //     setSelectedTitle({ ...selectedTitle, name: e.target.value });
  //     let arr = props.suggetionData.filter((item) =>
  //       item.name
  //         .toLowerCase()
  //         ?.startsWith(value.toString().toLowerCase())
  //     );

  //     setFilteredTitle(arr);
  //   } else if (name === "location") {
  //     setShowLocation(true);
  //     setSelectedLocation({ ...selectedLocation, location: value });
  //     let arr = props.PopularCity.filter((item) =>
  //       item.location

  //         .toLowerCase()
  //         ?.startsWith(value.toString().toLowerCase())
  //     );
  //     setFilteredLocation(arr);
  //   } else {
  //     console.log("not result found");
  //   }
  // };

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
    } else if (selectedTitle.Type === "Location" || selectedTitle.Type === "City") {
      window.open(`/jobs-in-${urlPattern(selectedTitle.name)}`, "_self");
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

  const skeletonLoading = [0, 1, 2, 3, 4, 5]
  return (
    <div className=" mx-auto w-full sm:w-3/4 pb-0 sm:pb-4">
      <form className="sm:flex sm:justify-center" onSubmit={navigateHandler}>
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
            name="title"
            value={selectedTitle.name}
            required={!props.selectedLocation.location}
            onChange={handleSearchInput}
            onKeyDown={handleKeyDown}
            id="default-search"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full sm:rounded-lg focus:ring-timesPurple focus:border-timesPurple "
            placeholder={"Search your ideal job"}
          />


          {showTitle && selectedTitle.name ? (
            <div
              className="suggestions-title max-h-[380px] rounded-md w-full overflow-y-scroll absolute z-30 bg-white shadow"
              aria-labelledby="communities-headline"
            >
              {props.autoFillSearchData.map((item, index) => (
                <div
                  onClick={() => {
                    handleSuggestionClick(item);
                  }}
                  key={index}
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
          ) : <></>}
        </div>
        <div className="relative m-4">
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
            name="location"
            value={props.selectedLocation.location}
            required={!selectedTitle.name}
            onFocus={() => props.SearchLocationAutoFillApi()}
            onChange={handleSearchInput}
            onKeyDown={handleKeyDownLocation}
            id="default-search"
            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-full sm:rounded-lg focus:ring-timesPurple focus:border-timesPurple dark:focus:ring-timesPurple dark:focus:border-timesPurple"
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
                  key={index}
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
        <div className="sm:flex sm:justify-center mx-4 sm:mx-0 sm:gap-4 sm:items-center">
          <div className="text-center sm:ml-2 ">
            {props.loading ? (
              <div className="w-full sm:w-28  h-10 mt-0 sm:mb-6 sm:mt-5 inline-flex items-center justify-center rounded-md border border-transparent bg-timesPurple px-4  text-sm font-medium leading-4 text-white shadow-sm hover:bg-timesHoverBtn focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2">
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
                className="w-full sm:w-28 h-10 mt-0 sm:mb-6 sm:mt-5 inline-flex items-center justify-center rounded-full sm:rounded-md border border-transparent bg-timesPurple px-4  font-medium leading-4 text-white shadow-sm hover:bg-timesHoverBtn focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2 text-sm"
              >
                Search
              </button>
            )}
          </div>
          <div className="text-center sm:ml-2 ">
            <button
              type="button"
              className="w-full sm:w-28 h-10 mt-0 sm:mb-6 sm:mt-5 inline-flex items-center justify-center rounded-full sm:rounded-md border border-transparent bg-timesPurple px-4  font-medium leading-4 text-white shadow-sm hover:bg-timesHoverBtn focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2 text-sm"
              onClick={() => {
                props.setOpenFilterModal(true);
                props.SearchLocationAutoFillApi();
              }}
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
  );
};

export default NewSearchAreaInput;
