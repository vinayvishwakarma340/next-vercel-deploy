import Image from "next/image";
import useRemoveSpaceUrl from "../CustomHook/useRemoveSpaceUrl";

const LeadershipFactory = (props) => {


  return (
    <a
      href={props.data?.LeadershipSeoURL}
      className="bg-white ">
      <ul role="list">
        <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center border border-gray-200 shadow hover:drop-shadow-md">
          <div className="flex flex-1 flex-col p-3">
            <div className="w-20 h-20 mx-auto flex-shrink-0 rounded-full relative">
              <Image
                src={props.data?.CompanyLogo ? props.data?.CompanyLogo : props.data?.AlternateCompanyLogo}
                alt={props.data?.CompanyLogo ? props.data?.CompanyLogo : props.data?.AlternateCompanyLogo}
                fill
              />
            </div>
            <h3 className="mt-2 text-sm h-12 font-medium text-gray-900">
              {props.data?.CompanyName}
            </h3>
            <dl className=" flex flex-grow flex-col justify-between"></dl>
          </div>
          {/* <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="bg-purple-100 -ml-px flex w-0 flex-1">
                <a
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
                </a>
              </div>
            </div>
          </div> */}
        </li>
      </ul>
    </a>
  );
};

export default LeadershipFactory;
