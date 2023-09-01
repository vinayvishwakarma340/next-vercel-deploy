import {
  BanknotesIcon,
  CalendarDaysIcon,
  ChevronRightIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const AboutDashboardCard = (props) => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:mt-3">
      <h2 className="mx-auto mt-2 max-w-7xl px-0 text-lg font-medium  text-gray-900 sm:px-6 lg:px-0 flex al">
        <UserIcon
          className="h-6 w-6 mr-1 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
          aria-hidden="true"
        />{" "}
        About You
      </h2>

      <div>
        <div className="mx-auto max-w-7xl px-0 sm:px-6 lg:px-0">
          <div className="mt-2 flex flex-col">
            <div className="min-w-full overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <tbody className="divide-y divide-gray-200 bg-white">
                  <tr className="bg-white">
                    <td className="w-full max-w-0 whitespace-nowrap px-4 py-3 text-sm text-gray-900">
                      <div className="flex">
                        <a
                          href=""
                          className="group inline-flex space-x-2 truncate text-sm"
                        >
                          <CalendarDaysIcon
                            className="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          <p className="truncate text-gray-500 group-hover:text-gray-900">
                            {props.data?.updatedDate
                              ?.slice(0, 10)
                              .split("-")
                              .join("/")}
                          </p>
                        </a>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className=" items-center  border-t border-gray-200 bg-white px-4 py-5 sm:px-4">
                <div className=" sm:block">
                  <div>
                    <textarea
                      id="Short-description"
                      name="Short-description"
                      aria-describedby="Short-description"
                      rows={3}
                      required
                      readOnly
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-grape-500 focus:ring-grape-500 sm:text-sm"
                      value={props.data?.professionalSummary}
                    ></textarea>
                  </div>
                </div>
                <div className="flex flex-1 mt-5  justify-end">
                  <a
                    href={"/editprofile/" + props.data?.CandidateId}
                    className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Edit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDashboardCard;
