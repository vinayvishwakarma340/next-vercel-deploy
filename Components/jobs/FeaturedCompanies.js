import useRemoveSpaceUrl from "../CustomHook/useRemoveSpaceUrl";

const FeaturedCompanies = (props) => {
  const people = [
    {
      name: "Punjab national bank",
      title: "Leading india bank",
      role: "20+ openings",
      email: "mailto:janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl: "/pnglogo.webp",
    },
    {
      name: "Punjab national bank",
      title: "Leading india bank",
      role: "Admin",
      email: "mailto:janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl: "/iffco.webp",
    },
    {
      name: "Punjab national bank",
      title: "Leading india bank",
      role: "Admin",
      email: "mailto:janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl: "/pnglogo.webp",
    },
    {
      name: "Punjab national bank",
      title: "Leading india bank",
      role: "Admin",
      email: "mailto:janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl: "/pnglogo.webp",
    },
    {
      name: "Jane Cooper",
      title: "Paradigm Representative",
      role: "Admin",
      email: "mailto:janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    {
      name: "Jane Cooper",
      title: "Paradigm Representative",
      role: "Admin",
      email: "mailto:janecooper@example.com",
      telephone: "+1-202-555-0170",
      imageUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    // More people...
  ];
  return (
    <a href={
      props.data?.name === "RozgaarIndia"
        ? "/freelancer"
        : "/NewCompanyProfile/" +
        useRemoveSpaceUrl(props.data?.name || "company") +
        "/" +
        props.data?.company_id
    } className="bg-white pb-8">
      <ul role="list">
        <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow hover:drop-shadow-md">
          <div className="flex flex-1 flex-col p-3">
            <img
              className="mx-auto h-20 w-20 flex-shrink-0 rounded-full"
              src={props.data?.baseUrl + props.data?.image}
              alt={props.data?.name}
            />
            <h3 className="mt-2 text-sm h-12 font-medium text-gray-900">
              {props.data?.name}
            </h3>
            <dl className=" flex flex-grow flex-col justify-between"></dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="bg-purple-100 -ml-px flex w-0 flex-1">
                <div
                  href={
                    props.data?.name === "RozgaarIndia"
                      ? "/freelancer"
                      : "/NewCompanyProfile/" +
                      useRemoveSpaceUrl(props.data?.name || "company") +
                      "/" +
                      props.data?.company_id
                  }
                  className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-1 text-sm font-medium text-gray-700 hover:text-gray-500"
                >
                  <span className="ml-3 text-indigo-600 font-semibold hover:text-indigo-900">
                    View
                  </span>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </a>
  );
};

export default FeaturedCompanies;
