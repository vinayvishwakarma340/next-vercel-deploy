import { Fragment, useState, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ThreeDots } from "react-loader-spinner";
// import Title from "../../../public/JSON/positionFilter.json";
// import { FunnelIcon } from "@heroicons/react/24/outline";

const SearchInputModal = (props) => {

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
    } else if (selectedTitle.Type === "Location" || selectedTitle.Type === "City") {
      window.open(`/jobs-in-${urlPattern(selectedTitle.name)}`, "_self");
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

  return (
    <Transition.Root show={props.open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={props.setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-x-hidden">
          <div className="absolute inset-0 overflow-x-hidden">
            <div className="pointer-events-none fixed inset-x-0 top-0 flex max-w-full">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300 sm:duration-700"
                enterFrom="-translate-y-full"
                enterTo="-translate-y-0"
                leave="transform transition ease-in-out duration-300 sm:duration-700"
                leaveFrom="-translate-y-0"
                leaveTo="-translate-y-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute right-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => props.setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col  bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <Dialog.Title className="text-xl mx-4 font-semibold leading-6 text-gray-900">
                        Search Jobs
                      </Dialog.Title>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
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
                            {showTitle && selectedTitle.name.length > 0 ? (
                              <div
                                className="suggestions-title max-h-[380px] rounded-md w-full overflow-y-scroll absolute z-30 bg-white shadow"
                                aria-labelledby="communities-headline"
                              >
                                {props.autoFillSearchData?.map((item, index) => (
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
                            ) : (
                              <></>
                            )}
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
                                <div className="w-full sm:w-28  h-10 mt-0 sm:mb-6 sm:mt-5 inline-flex items-center justify-center rounded-full border border-transparent bg-timesPurple px-4  text-sm font-medium leading-4 text-white shadow-sm hover:bg-timesHoverBtn focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2">
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
                            {/* <div className="text-center sm:ml-2 ">
            <button
              type="button"
              className="w-full sm:w-28 text-lg h-10 mt-0 sm:mb-6 sm:mt-5 inline-flex items-center justify-center rounded-md border border-transparent bg-white px-4  font-medium leading-4 text-timesPurple shadow-sm hover:bg-timesHoverBtn hover:text-white focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
              onClick={() => props.setOpenFilterModal(true)}
            >
              <span className="w-5 h-5">
                <FunnelIcon />
              </span>
              <span className="text-xs ml-1">Add Filter</span>
            </button>
          </div> */}
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}


export default SearchInputModal;