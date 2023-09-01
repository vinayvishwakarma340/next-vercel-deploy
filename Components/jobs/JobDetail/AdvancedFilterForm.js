import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Fragment } from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { AcademicCapIcon } from "@heroicons/react/24/outline";

const people = [
    { id: 1, name: 'Fresher', value: 0 },
    { id: 2, name: '1 year', value: 1 },
    { id: 3, name: '2 year', value: 2 },
    { id: 4, name: '3 year', value: 3 },
    { id: 5, name: '4 year', value: 4 },
    { id: 6, name: '5 year', value: 5 },
    { id: 7, name: '6 year', value: 6 },
    { id: 8, name: '7 year', value: 7 },
    { id: 9, name: '8 year', value: 8 },
    { id: 10, name: '9 year', value: 9 },
    { id: 11, name: '10 year', value: 10 },
]

const AdvancedFilterForm = (props) => {
    const [loading, setLoading] = useState(false);
    const [selectedLocation, setSelectedLocation] = useState({ issuedate: "", keyIndex: "", location: "", numberOfPosition: "" });
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
            setSelectedTitle({ ...selectedTitle, name: e.target.value });
            let arr = props.suggetionData.filter((item) =>
                item.name
                    .toLowerCase()
                    ?.startsWith(value.toString().toLowerCase())
            );

            setFilteredTitle(arr);
        } else if (name === "location") {
            setShowLocation(true);
            setSelectedLocation({ ...selectedLocation, location: value });
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
        setSelectedLocation(suggestion);
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
        props.saveSearchJob(selectedTitle.name, selectedLocation.location);
        setLoading(true);
        if (selectedTitle.name && selectedTitle.Type && selectedLocation.location) {
            window.open(
                `/${urlPattern(selectedTitle.name)}-jobs-in-${urlPattern(
                    selectedLocation.location
                )}`, "_self"
            );
        } else if (!selectedTitle.name && !selectedTitle.Type && selectedLocation.location) {
            window.open(`/jobs-in-${urlPattern(selectedLocation.location)}`, "_self");
        } else if (selectedTitle.Type === "Designation") {
            window.open(`/${urlPattern(selectedTitle.name)}-jobs/designation`, "_self");
        } else if (selectedTitle.Type === "Category") {
            window.open(`/${urlPattern(selectedTitle.name)}-jobs/categories`, "_self");
        } else if (selectedTitle.Type === "Level") {
            window.open(`/${urlPattern(selectedTitle.name)}-jobs/level`, "_self");
        } else if (selectedTitle.Type === "Company") {
            window.open(
                `NewCompanyProfile/${urlPattern(selectedTitle.name)}/${selectedTitle.id
                }`, "_self"
            );
        } else {
            window.open(`/latest-jobs/${urlPattern(selectedTitle.name)}`, "_self");
        }
        setSelectedTitle({ name: "", Type: "", id: "" });
        setSelectedLocation({ issuedate: "", keyIndex: "", location: "", numberOfPosition: "" });
        setTimeout(() => setLoading(false), 1000);
    };

    return (
        <div className="mx-auto w-full  pb-4">
            <form onSubmit={navigateHandler}>
                <label
                    htmlFor="default-search"
                    className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                    Search
                </label>
                <div className="relative m-4 ">
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
                        required={!selectedLocation.location}
                        onChange={handleSearchInput}
                        onKeyDown={handleKeyDown}
                        id="default-search"
                        className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-timesPurple focus:border-timesPurple "
                        placeholder="Search your ideal job"
                    />
                    {showTitle && selectedTitle.name ? (
                        <div
                            className="suggestions-title max-h-[380px] rounded-md w-full overflow-y-scroll absolute z-50 bg-white shadow"
                            aria-labelledby="communities-headline"
                        >
                            {filteredTitle?.map((item, index) => (
                                <div
                                    onClick={() => {
                                        handleSuggestionClick(item);
                                    }}
                                    className={`${selectedSuggestionIndex === index
                                        ? "bg-timesPurple text-white hover:bg-timesPurple"
                                        : "border-gray-300 hover:bg-purple-50"
                                        }  cursor-pointer border-b  group flex items-center px-3 py-2 text-sm font-medium   `}
                                >
                                    <span className="truncate">{item.name}</span>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <></>
                    )}
                </div>
                <div className="relative  mt-4 mx-4">
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
                        value={selectedLocation.location}
                        required={!selectedTitle.name}
                        onChange={handleSearchInput}
                        onKeyDown={handleKeyDownLocation}
                        id="location-search"
                        className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-timesPurple focus:border-timesPurple "
                        placeholder="Location"
                    />
                    {showLocation && selectedLocation.location ? (
                        <div
                            className="suggestions-location max-h-[380px] w-full rounded-md overflow-y-scroll absolute z-50 bg-white shadow"
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
                <div className="mt-4 mx-4">
                    <SearchSuggestionBox />
                </div>
                <div className="text-center sm:ml-2 mt-4 mx-2 sm:mt-0">
                    <button
                        type="submit"
                        className="w-max sm:w-28 text-sm h-10 mt-0 mb-6 sm:mt-5 inline-flex items-center justify-center rounded-md border border-transparent bg-timesPurple px-4  font-medium leading-4 text-white shadow-sm hover:bg-timesHoverBtn focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
                    >
                        {
                            loading ? <ThreeDots
                                height="15"
                                width="30"
                                radius="9"
                                color="white"
                                ariaLabel="three-dots-loading"
                                wrapperStyle={{}}
                                wrapperClassName=""
                                visible={true}
                            /> : "Search"
                        }
                    </button>
                    <button
                        type="button"
                        className="w-max ml-4 sm:w-28 text-sm h-10 mt-0 mb-6 sm:mt-5 inline-flex items-center justify-center rounded-md border border-gray-200 bg-white px-4  font-medium leading-4 text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-offset-2"
                        onClick={() => props.setOpenFilterModal(false)}
                    >
                        Cancel
                    </button>
                </div>
                <div>

                </div>

            </form>
        </div>
    );
};

export default AdvancedFilterForm;


const SearchSuggestionBox = () => {
    const [selected, setSelected] = useState("")
    const [query, setQuery] = useState('')

    const filteredPeople =
        query === ''
            ? people
            : people.filter((person) =>
                person.name
                    .toLowerCase()
                    .replace(/\s+/g, '')
                    .includes(query.toLowerCase().replace(/\s+/g, ''))
            )
    return (
        <div className="w-full">
            <Combobox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        <div className="absolute my-3 ml-3 text-gray-500 w-5 h-5">
                            <AcademicCapIcon />
                        </div>
                        <Combobox.Input
                            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-timesPurple focus:border-timesPurple"
                            placeholder="Select Experience"
                            displayValue={(person) => person.name}
                            onChange={(event) => setQuery(event.target.value)}
                        />
                        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </Combobox.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                        afterLeave={() => setQuery('')}
                    >
                        <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {filteredPeople.length === 0 && query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                filteredPeople.map((person) => (
                                    <Combobox.Option
                                        key={person.id}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-timesPurple text-white' : 'text-gray-900'
                                            }`
                                        }
                                        value={person}
                                    >
                                        {({ selected, active }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                        }`}
                                                >
                                                    {person.name}
                                                </span>
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? 'text-white' : 'text-teal-600'
                                                            }`}
                                                    >
                                                        <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    )
}

const SearchDropDownBox = () => {
    const [selected, setSelected] = useState("")

    return (
        <div className="fixed top-16 w-72">
            <Listbox value={selected} onChange={setSelected}>
                <div className="relative mt-1">
                    <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                        <span className="block truncate">{selected.name}</span>
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {people.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                                        }`
                                    }
                                    value={person}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span
                                                className={`block truncate ${selected ? 'font-medium' : 'font-normal'
                                                    }`}
                                            >
                                                {person.name}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                                    <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                </span>
                                            ) : null}
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    )
}
