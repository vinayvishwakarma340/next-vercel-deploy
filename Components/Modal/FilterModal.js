import { Combobox, Dialog, Transition, Listbox } from '@headlessui/react'
import { BriefcaseIcon, BuildingOfficeIcon, FunnelIcon, MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline'
import React, { useState, Fragment, useRef } from "react";
import { ThreeDots } from "react-loader-spinner";
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { AcademicCapIcon } from "@heroicons/react/24/outline";
import positionFilter from "../../public/JSON/positionFilter.json";
import levelsFilter from "../../public/JSON/levelsFilter.json";
import indusrtyJsonFilter from "../../public/JSON/indusrtyJsonFilter.json";
import companyFilter from "../../public/JSON/companyFilter.json";
import useRemoveSpaceNew from '../CustomHook/useRemoveSpaceNew';

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

const FilterModal = (props) => {

    const cancelButtonRef = useRef(null)
    const [loading, setLoading] = useState(false);
    const [designationQuery, setDesignationQuery] = useState("");
    const [selectedDesignation, setSelectedDesignation] = useState("");
    const [locationQuery, setLocationQuery] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [experienceQuery, setExperienceQuery] = useState("");
    const [selectedExperience, setSelectedExperience] = useState("");
    const [industryQuery, setIndustryQuery] = useState("");
    const [selectedIndustry, setSelectedIndustry] = useState("");
    const [companyQuery, setCompanyQuery] = useState("");
    const [selectedCompany, setSelectedCompany] = useState("");
    const [filteredDesignation, setFilteredDesignation] = useState([]);
    const [filteredLocation, setFilteredLocation] = useState([]);
    const [filteredExperience, setFilteredExperience] = useState([]);
    const [filteredIndustry, setFIlteredIndustry] = useState([]);
    const [filteredCompany, setFilteredCompany] = useState([]);

    const handleSearchInput = (e) => {
        const { value, name } = e.target;
        if (name === "designation") {
            setDesignationQuery(value);
            if (value.length > 1) {
                let arr = value === ''
                    ? positionFilter
                    : positionFilter.filter((item) =>
                        item.skill
                            .toLowerCase()
                            .replace(/\s+/g, '')
                            .startsWith(value.toLowerCase().replace(/\s+/g, ''))
                    )
                setFilteredDesignation(arr);
            }
        } else if (name === "location") {
            setLocationQuery(value);
            let arr = value === ''
                ? props.PopularCity
                : props.PopularCity.filter((item) =>
                    item.location
                        .toLowerCase()
                        .replace(/\s+/g, '')
                        .startsWith(value.toLowerCase().replace(/\s+/g, ''))
                )
            setFilteredLocation(arr);
        } else if (name === "experience") {
            setExperienceQuery(value);
            let arr = value === ''
                ? levelsFilter
                : levelsFilter.filter((item) =>
                    item.levels
                        .toLowerCase()
                        .replace(/\s+/g, '')
                        .startsWith(value.toLowerCase().replace(/\s+/g, ''))
                )
            setFilteredExperience(arr);
        } else if (name === "industry") {
            setIndustryQuery(value);
            let arr = value === ''
                ? indusrtyJsonFilter
                : indusrtyJsonFilter.filter((item) =>
                    item.name
                        .toLowerCase()
                        .replace(/\s+/g, '')
                        .startsWith(value.toLowerCase().replace(/\s+/g, ''))
                )
            setFIlteredIndustry(arr);
        } else if (name === "company") {
            setCompanyQuery(value);
            let arr = value === ''
                ? companyFilter
                : companyFilter.filter((item) =>
                    item.CompanyName
                        .toLowerCase()
                        .replace(/\s+/g, '')
                        .startsWith(value.toLowerCase().replace(/\s+/g, ''))
                )
            setFilteredCompany(arr);
        }
    }

    const clearAllField = () => {
        setDesignationQuery("");
        setSelectedDesignation("");
        setLocationQuery("");
        setSelectedLocation("");
        setExperienceQuery("");
        setSelectedExperience("");
        setIndustryQuery("");
        setSelectedIndustry("");
        setCompanyQuery("");
        setSelectedCompany("");
    }

    const navigateHandler = (e) => {
        e.preventDefault();

        const queryParams = new URLSearchParams();
        if (locationQuery) queryParams.append('location', useRemoveSpaceNew(locationQuery));
        if (designationQuery) queryParams.append('designation', useRemoveSpaceNew(designationQuery));
        if (companyQuery) queryParams.append('company', useRemoveSpaceNew(companyQuery));
        if (industryQuery) queryParams.append('industry', useRemoveSpaceNew(industryQuery));
        if (experienceQuery) queryParams.append('experience', useRemoveSpaceNew(experienceQuery));

        const url = `/latest-jobs?${queryParams.toString()}`;

        window.open(url, "_self");
    };


    return (
        <Transition.Root show={props.open} as={Fragment}>
            <Dialog as="div" className="relative z-50" initialFocus={cancelButtonRef} onClose={() => props.setFilterModal(false)}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="sm:flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 rounded-md sm:pb-4">
                                    <div className="divide-y-2">
                                        <div className='flex justify-between items-center px-4'>
                                            <div className='flex justify-start items-center'>
                                                <div className="flex h-12 w-auto items-center justify-start rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                                    <FunnelIcon className="h-6 w-6" aria-hidden="true" />
                                                </div>
                                                <div className="flex h-12 w-auto items-center justify-start rounded-full sm:mx-0 sm:h-10 sm:w-10">
                                                    <Dialog.Title as="h3" className="text-lg font-semibold leading-6 text-gray-900">
                                                        Filters
                                                    </Dialog.Title>
                                                </div>
                                            </div>
                                            <div className='text-timesPurple font-medium cursor-pointer hover:font-semibold'
                                                onClick={clearAllField}
                                            >
                                                Clear all
                                            </div>
                                        </div>
                                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                            <div className="mt-6">
                                                <div className="mx-auto w-full  pb-4">
                                                    <form onSubmit={navigateHandler}>
                                                        <label
                                                            htmlFor="default-search"
                                                            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                                                        >
                                                            Search
                                                        </label>
                                                        <div className="mt-4 mx-4">
                                                            <SearchSuggestionBox
                                                                searchType="Designation"
                                                                handleSearchInput={handleSearchInput}
                                                                name={"designation"}
                                                                query={designationQuery}
                                                                placeholder="Search your ideal job"
                                                                setQuery={setDesignationQuery}
                                                                selected={selectedDesignation}
                                                                setSelected={setSelectedDesignation}
                                                                filteredData={filteredDesignation}
                                                            />
                                                        </div>
                                                        {/* <div className="mt-4 mx-4">
                                                            <SearchSuggestionBox
                                                                searchType="Industry"
                                                                handleSearchInput={handleSearchInput}
                                                                name={"industry"}
                                                                query={industryQuery}
                                                                placeholder="Select Industry"
                                                                setQuery={setIndustryQuery}
                                                                setSelected={setSelectedIndustry}
                                                                selected={selectedIndustry}
                                                                filteredData={filteredIndustry}
                                                            />
                                                        </div> */}
                                                        <div className='mt-4 mx-4'>
                                                            <SearchDropDownBox
                                                                searchType="Industry"
                                                                handleSearchInput={handleSearchInput}
                                                                name={"industry"}
                                                                query={industryQuery}
                                                                placeholder="Select Industry"
                                                                setQuery={setIndustryQuery}
                                                                setSelected={setSelectedIndustry}
                                                                selected={selectedIndustry}
                                                                filteredData={indusrtyJsonFilter} />
                                                        </div>
                                                        <div className="mt-4 mx-4">
                                                            <SearchSuggestionBox
                                                                searchType="Company"
                                                                handleSearchInput={handleSearchInput}
                                                                name={"company"}
                                                                query={companyQuery}
                                                                placeholder="Select Company"
                                                                setQuery={setCompanyQuery}
                                                                setSelected={setSelectedCompany}
                                                                selected={selectedCompany}
                                                                filteredData={filteredCompany}
                                                            />
                                                        </div>
                                                        {/* <div className="mt-4 mx-4">
                                                            <SearchSuggestionBox
                                                                searchType="Experience"
                                                                handleSearchInput={handleSearchInput}
                                                                name={"experience"}
                                                                query={experienceQuery}
                                                                placeholder="Select Experience"
                                                                setQuery={setExperienceQuery}
                                                                setSelected={setSelectedExperience}
                                                                selected={selectedExperience}
                                                                filteredData={filteredExperience}
                                                            />
                                                        </div> */}
                                                        <div className='mt-4 mx-4'>
                                                            <SearchDropDownBox
                                                                searchType="Experience"
                                                                handleSearchInput={handleSearchInput}
                                                                name={"experience"}
                                                                query={experienceQuery}
                                                                placeholder="Select Experience"
                                                                setQuery={setExperienceQuery}
                                                                setSelected={setSelectedExperience}
                                                                selected={selectedExperience}
                                                                filteredData={levelsFilter} />
                                                        </div>
                                                        <div className="mt-4 mx-4">
                                                            <SearchSuggestionBox
                                                                searchType="Location"
                                                                handleSearchInput={handleSearchInput}
                                                                name={"location"}
                                                                query={locationQuery}
                                                                placeholder="Location"
                                                                setQuery={setLocationQuery}
                                                                setSelected={setSelectedLocation}
                                                                selected={selectedLocation}
                                                                filteredData={filteredLocation}
                                                            />
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
                                                                onClick={() => props.setFilterModal(false)}
                                                            >
                                                                Cancel
                                                            </button>
                                                        </div>
                                                        <div>

                                                        </div>

                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default FilterModal;


const SearchSuggestionBox = (props) => {

    return (
        <div className="w-full">
            <Combobox value={props.selected} onChange={(e) => {
                props.setSelected(e);
                props.setQuery(e.location || e.levels || e.CompanyName || e.name || e.skill);
            }}>
                <div className="relative mt-1">
                    <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                        <div className="absolute my-3 ml-3 text-gray-500 w-5 h-5">
                            {
                                props.searchType === "Experience" &&
                                <AcademicCapIcon />
                            }
                            {
                                props.searchType === "Designation" &&
                                <MagnifyingGlassIcon />
                            }
                            {
                                props.searchType === "Location" &&
                                <MapPinIcon />
                            }
                            {
                                props.searchType === "Industry" &&
                                <BuildingOfficeIcon />
                            }
                            {
                                props.searchType === "Company" &&
                                <BriefcaseIcon />
                            }
                        </div>
                        <Combobox.Input
                            className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-timesPurple focus:border-timesPurple"
                            placeholder={props.placeholder}
                            name={props.name}
                            displayValue={(item) => item.name || item.location || item.skill || item.levels || item.CompanyName || props.query}
                            onChange={props.handleSearchInput}
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
                    // afterLeave={() => props.setQuery('')}
                    >
                        <Combobox.Options className="absolute z-30 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {props.filteredData.length === 0 && props.query !== '' ? (
                                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                                    Nothing found.
                                </div>
                            ) : (
                                props.filteredData.map((person, personIndex) => (
                                    <Combobox.Option
                                        key={personIndex}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-5 sm:pl-10 pr-4 ${active ? 'bg-timesPurple text-white' : 'text-gray-900'
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
                                                    {person.name || person.location || person.skill || person.levels || person.CompanyName}
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

const SearchDropDownBox = (props) => {

    return (
        <div className="w-full">
            <Listbox value={props.selected} onChange={(e) => {
                props.setSelected(e);
                props.setQuery(e.location || e.levels || e.CompanyName || e.name || e.skill);
            }}>
                <div className="relative mt-1">
                    <Listbox.Button className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg focus:ring-timesPurple focus:border-timesPurple">
                        {
                            props.query ?
                                <span className="block truncate text-left">{props.query}</span> :
                                <span className="block truncate text-left text-gray-500">Select {props.searchType}</span>
                        }
                        <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                            <ChevronUpDownIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                            />
                        </span>
                    </Listbox.Button>
                    <div className="absolute my-3 ml-3 text-gray-500 w-5 h-5 top-0">
                        {
                            props.searchType === "Experience" &&
                            <AcademicCapIcon />
                        }
                        {
                            props.searchType === "Designation" &&
                            <MagnifyingGlassIcon />
                        }
                        {
                            props.searchType === "Location" &&
                            <MapPinIcon />
                        }
                        {
                            props.searchType === "Industry" &&
                            <BuildingOfficeIcon />
                        }
                        {
                            props.searchType === "Company" &&
                            <BriefcaseIcon />
                        }
                    </div>
                    <Transition
                        as={Fragment}
                        leave="transition ease-in duration-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Listbox.Options className="absolute mt-1 z-50 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {props.filteredData?.map((person, personIdx) => (
                                <Listbox.Option
                                    key={personIdx}
                                    className={({ active }) =>
                                        `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-timesHoverBtn text-white cursor-pointer' : 'text-gray-900'
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
                                                {person.name || person.location || person.skill || person.levels || person.CompanyName}
                                            </span>
                                            {selected ? (
                                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-timesPurple">
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

