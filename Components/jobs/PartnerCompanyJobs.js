import React from "react";

const PartnerCompanyJobs = (props) => {
  return (
    <div className="bg-white">
      <ul role="list" className="">
        <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow hover:drop-shadow-md">
          <div className="flex flex-1 flex-col p-3">
            <a href={props.data?.href} target={"_self"}>
              <img
                className="mx-auto h-28 w-28 flex-shrink-0 rounded-full"
                src={props.data?.imageUrl}
                alt={props.data?.CompanyName}
              />
            </a>
            <h3 className="mt-2 text-lg font-semibold text-purple-500">
              {" "}
              {props.data?.CompanyName}
            </h3>
            <dl className=" flex flex-grow flex-col justify-between">
              <dd className="text-sm text-gray-500">
                {" "}
                {props.data?.Category} +jobs
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="bg-purple-100 -ml-px flex w-0 flex-1">
                <a
                  href={props.data?.href}
                  target={"_self"}
                  // href={
                  //   "/NewCompanyProfile/" +
                  //   (person.name || "company")
                  //     .split(" ")
                  //     .join("-")
                  //     .split(".")
                  //     .join("") +
                  //   "/" +
                  //   person.company_id
                  // }
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-2 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <span className="ml-3 text-indigo-600 font-semibold hover:text-indigo-900">
                    View Jobs
                  </span>
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default PartnerCompanyJobs;
