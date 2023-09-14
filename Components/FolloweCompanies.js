import React from "react";

const FolloweCompanies = (props) => {
  return (
    <div className="bg-white pb-8">
      <div className="relative ">
        <h2 className="text-xl font-bold">Followed Companies</h2>
      </div>
      <ul
        role="list"
        className="pt-4 grid grid-cols-2 gap-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 "
      >
        {props.data?.map((person) => (
          <li
            key={person.email}
            className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow hover:drop-shadow-md"
          >
            <div className="flex flex-1 flex-col p-3">
              {person.imagePath === "" ? (
                <img
                  className="mx-auto h-20 w-20 flex-shrink-0 rounded-full"
                  src="/TimeDummyLogo.webp"
                  alt=""
                />
              ) : (
                <img
                  className="mx-auto h-20 w-20 flex-shrink-0 rounded-full"
                  src={`https://timess3spore.s3.amazonaws.com/ndata${person.imagePath}`}
                  alt={person.imagePath}
                />
              )}

              <h3 className="mt-2 text-sm font-medium text-gray-900">
                {person.CompanyName}
              </h3>
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="bg-purple-100 -ml-px flex w-0 flex-1">
                  <a
                    href={
                      person.CompanyName === "RozgaarIndia"
                        ? "/freelancer"
                        : "/NewCompanyProfile/" +
                        (person.CompanyName || "company")
                          .split(" ")
                          .join("-")
                          .split(".")
                          .join("") +
                        "/" +
                        person.companyId
                    }
                    className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-1 text-sm font-medium text-gray-700 hover:text-gray-500"
                  >
                    <span className="ml-3 text-indigo-600 font-semibold hover:text-indigo-900">
                      View
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FolloweCompanies;
