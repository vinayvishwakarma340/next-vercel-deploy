import { useState } from "react";
import positionFilter from "../public/JSON/positionFilter.json";
import searchSuggestionSecond from "../public/JSON/searchSuggestionSecond.json";
import useRemoveSpaceUrl from "./CustomHook/useRemoveSpaceUrl";
import latestJobSection from "../public/JSON/latestJobSection.json";
import { ThreeDots } from "react-loader-spinner";

import { useRouter } from "next/router";

const jobOption = [
  {
    id: 1,
    name: "Jobs",
  },
  {
    id: 2,
    name: "Article",
  },
  {
    id: 3,
    name: "Courses",
  },
  {
    id: 4,
    name: "Events",
  },
  {
    id: 5,
    name: "HR Zone",
  },
];
const Search = () => {
  const [searchType, setSearchType] = useState("Jobs");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSuggestionBoxOpen, setIsSuggestionBoxOpen] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  const router = useRouter();
  const autoSuggestionHandler = (searchType) => {
    if (searchType === "Jobs") {
      if (searchTerm.trim()) {
        return positionFilter
          .filter((suggestion) => {
            return suggestion.skill
              .toLowerCase()
              .startsWith(searchTerm.toLowerCase());
          })
          .map((item) => {
            return (
              <div
                key={item.keyIndex}
                onClick={() => {
                  setSearchTerm(item.skill.toLocaleLowerCase());
                  setIsSuggestionBoxOpen(false);
                }}
                className=" py-1 px-2 cursor-pointer hover:bg-gray-50"
              >
                {item.skill.toLocaleLowerCase()}
              </div>
            );
          });
      }
    } else if (searchType === "Article") {
      if (searchTerm.trim()) {
        return searchSuggestionSecond
          .filter((suggestion) => {
            return suggestion.searchTerms
              .toLowerCase()
              .startsWith(searchTerm.toLowerCase());
          })
          .map((item) => {
            return (
              <div
                key={item.keyIndex}
                onClick={() => {
                  setSearchTerm(item.searchTerms.toLowerCase());
                  setIsSuggestionBoxOpen(false);
                }}
                className="block py-1 px-2 cursor-pointer hover:bg-gray-50"
              >
                {item.searchTerms.toLowerCase()}
              </div>
            );
          });
      }
    } else if (searchType === "Courses") {
      if (searchTerm.trim()) {
        return searchSuggestionSecond
          .filter((suggestion) => {
            return suggestion.searchTerms
              .toLowerCase()
              .startsWith(searchTerm.toLowerCase());
          })
          .map((item) => {
            return (
              <div
                key={item.keyIndex}
                className="block py-1 px-2 cursor-pointer hover:bg-gray-50"
                onClick={() => {
                  setSearchTerm(item.searchTerms.toLowerCase());
                  setIsSuggestionBoxOpen(false);
                }}
              >
                {item.searchTerms.toLowerCase()}
              </div>
            );
          });
      }
    } else if (searchType === "Events") {
      if (searchTerm.trim()) {
        return searchSuggestionSecond
          .filter((suggestion) => {
            return suggestion.searchTerms
              .toLowerCase()
              .startsWith(searchTerm.toLowerCase());
          })
          .map((item) => {
            return (
              <div
                key={item.keyIndex}
                className="block py-1 px-2 cursor-pointer hover:bg-gray-50"
                onClick={() => {
                  setSearchTerm(item.searchTerms);
                  setIsSuggestionBoxOpen(false);
                }}
              >
                {item.searchTerms.toLowerCase()}
              </div>
            );
          });
      }
    } else if (searchType === "HR Zone") {
      if (searchTerm.trim()) {
        return searchSuggestionSecond
          .filter((suggestion) => {
            return suggestion.searchTerms
              .toLowerCase()
              .startsWith(searchTerm.toLowerCase());
          })
          .map((item) => {
            return (
              <div
                key={item.keyIndex}
                className=" block py-1 px-2 cursor-pointer hover:bg-gray-50"
                onClick={() => {
                  setSearchTerm(item.searchTerms);
                  setIsSuggestionBoxOpen(false);
                }}
              >
                {item.searchTerms.toLowerCase()}
              </div>
            );
          });
      }
    }
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setBtnLoading(true);
    if (searchType === "Jobs") {
      // router.push(`/${useRemoveSpaceUrl(searchTerm)}-jobs/designation`);
      window.open(
        `/${useRemoveSpaceUrl(searchTerm)}-jobs/designation`,
        "_self"
      );
    } else if (searchType === "Article") {
      // router.push(
      //   `/articlessearch/${searchTerm.toLowerCase()}?category=article`
      // );

      window.open(`/articleslist/recommended-read`, "_self");
    } else if (searchType === "Events") {
      // router.push(
      //   `/articlessearch/${useRemoveSpaceUrl(searchTerm)}?category=events`
      // );
      window.open(`/events`, "_self");
    } else if (searchType === "Courses") {
      // router.push(
      //   `/articlessearch/${searchTerm.toLowerCase()}?category=courses`
      // );
      window.open(`/courses`, "_self");
    } else if ((searchType === "HR Zone", "_self")) {
      // window.open(
      //   `/articlessearch/${useRemoveSpaceUrl(searchTerm)}?category=hr-zone`
      // );
      window.open("/hrprofessionals", "_self");
    }
  };
  return (
    <div className="  sm:border border-gray-100 w-full h-full sm:p-5 ">
      <form
        className=" sm:flex items-center "
        onSubmit={(e) => onSubmitHandler(e)}
      >
        <label htmlFor="search" className="sr-only">
          Search in jobs
        </label>
        <div className="relative rounded-md shadow-sm sm:min-w-0 sm:flex-1">
          <input
            type="search"
            name="search"
            id="emails"
            autoComplete="off"
            className="text-base block w-full rounded-md border-timesPurple pr-32 focus:border-timesPurple focus:ring-timesPurple "
            placeholder={`Search in ${searchType}`}
            onChange={(e) => setSearchTerm(e.target.value)}
            value={searchTerm}
            onFocus={() => setIsSuggestionBoxOpen(true)}
          />
          {isSuggestionBoxOpen && autoSuggestionHandler(searchType) && (
            <div className="max-h-[220px] w-full mt-1 bg-white absolute shadow-md p-2 pb-0 divide-y divide-slate-100  overflow-scroll border ">
              {autoSuggestionHandler(searchType)}
            </div>
          )}
          <div className="absolute inset-y-0 right-0 flex items-center">
            <span className="h-4 w-px bg-gray-200" aria-hidden="true" />
            <label htmlFor="role" className="sr-only">
              Role
            </label>
            <select
              id="role"
              name="role"
              className="h-full text-base text-gray-600 rounded-md border-transparent bg-transparent py-0 pl-4 pr-7  focus:border-timesPurple focus:ring-timesPurple sm:text-md"
              onChange={(e) => {
                setSearchType(e.target.value);
                setSearchTerm("");
              }}
            >
              {jobOption.map((item) => {
                return <option key={item.id}>{item.name}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="mt-2 sm:mt-0 sm:ml-2  sm:flex-shrink-0">
          <button
            type="submit"
            className="flex justify-center w-full rounded-md border border-transparent bg-timesPurple px-6 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
          >
            {btnLoading ? (
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
            ) : (
              "Search"
            )}
          </button>
        </div>
      </form>

      <ul
        role="list"
        className="mt-4  flex justify-center sm:justify-start flex-wrap gap-y-4 gap-x-2 sm:gap-x-3 xl:gap-x-3"
      >
        {latestJobSection.map((item, itemIdx) => (
          <li key={itemIdx}>
            <a
              href={item.url}

              className="group  border-timesPurple    flex w-full items-center justify-center  space-x-2  rounded-full border  px-3 sm:px-4 xl:px-6 py-2 text-left shadow-sm hover:border-timesPurple  focus:outline-none "
            >
              <div className="text-xs md:text-sm block -z-10   font-medium ">
                {item.name}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
