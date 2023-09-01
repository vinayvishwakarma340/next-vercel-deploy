import { CalendarIcon, MapPinIcon, UsersIcon } from "@heroicons/react/20/solid";

const InterestingJobs = (props) => {
  const positions = [
    {
      id: 1,
      title: "Back End Developer",
      type: "Full-time",
      location: "Remote",
      department: "Engineering",
      closeDate: "2020-01-07",
      closeDateFull: "January 7, 2020",
    },
    {
      id: 2,
      title: "Front End Developer",
      type: "Full-time",
      location: "Remote",
      department: "Engineering",
      closeDate: "2020-01-07",
      closeDateFull: "January 7, 2020",
    },
    {
      id: 3,
      title: "User Interface Designer",
      type: "Full-time",
      location: "Remote",
      department: "Design",
      closeDate: "2020-01-14",
      closeDateFull: "January 14, 2020",
    },
  ];

  return (
    <div className="mt-5 overflow-hidden bg-white shadow rounded-lg">
      <h3 className="px-4 py-4 text-lg font-medium leading-6 text-gray-900 border-b">
        Related Jobs
      </h3>
      <ul role="list" className="divide-y divide-gray-200">
        {props.positions &&
          props.positions?.slice(0, 4).map((position) => (
            <li key={position.id}>
              <a
                href={`/new-jobs/${position.positionTitle
                  .replace(/[^a-zA-Z ]/g, " ")
                  .split(" ")
                  .join("-")}/${position.CompanyName.replace(/[^a-zA-Z ]/g, " ")
                    .split(" ")
                    .join("-")}/${position.locationName
                      .replace(/[^a-zA-Z ]/g, " ")
                      .split(" ")
                      .join("-")}/${position.JobId}`}
                className="block hover:bg-gray-50"
              >
                <div className="px-6 py-4">
                  <div className="flex items-center justify-between">
                    <p className="truncate text-sm font-medium text-timesPurple">{`${position.positionTitle}-${position.Category}`}</p>
                    <div className="ml-2 flex flex-shrink-0">
                      <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                        Full-time
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 justify-between">
                    <div className="">
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <UsersIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        {position.CompanyName}
                      </p>
                      <p className="mt-2 flex items-center text-sm text-gray-500">
                        <MapPinIcon
                          className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                          aria-hidden="true"
                        />
                        {position.city}
                      </p>
                    </div>
                    <div className="mt-2 flex items-center text-sm text-gray-500">
                      <CalendarIcon
                        className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                        aria-hidden="true"
                      />
                      <p>
                        Opening on{" "}
                        <time dateTime={position.closeDate}>
                          {position.issueDate}
                        </time>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default InterestingJobs;
