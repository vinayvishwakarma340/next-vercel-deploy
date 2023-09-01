const JobsByLocation = (props) => {
  return (
    <div className="bg-white pb-8 ">
      <div className="">
        <h3 className="text-xl font-bold">Jobs by Location</h3>
      </div>

      <div className="pt-4 grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {props.people.slice(0, 10).map((person) => (
          <div
            key={person.email}
            className="relative flex items-center space-x-2 rounded-lg border border-gray-300 bg-white px-1 sm:px-2 py-2 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full"
                src={person.imageUrl}
                alt={person.location}
              />
            </div>
            <div className="min-w-0 flex-1">
              <a
                href={`/jobs-in-${person.location
                  .replace(/[^a-zA-Z ]/g, " ")
                  .split(" ")
                  .join("-")
                  .split(" ")
                  .join("-")
                  .split("--")
                  .join("-")}`}
                className="focus:outline-none"
              >
                <span className="absolute inset-0" aria-hidden="true" />
                <p className="text-base font-medium text-gray-900">
                  {person.location}
                </p>
                <p className="text-sm  text-gray-900">
                  {person.numberOfPosition}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsByLocation;
