import Image from "next/image";
import useRemoveSpaceUrl from "../CustomHook/useRemoveSpaceUrl";
import { useState } from "react";

const LeadersOfChangeCard = (props) => {
  const [showImagePlaceHolder, setShowImagePlaceholder] = useState(true);

  return (
    <a
      // href={props.data?.LeadershipSeoURL}
      href={`${props.data?.SeoURL}`}
      className="bg-white"
    >
      <ul role="list">
        <li className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center border border-gray-200 shadow hover:drop-shadow-md">
          <div className="flex flex-row-reverse justify-between items-center gap-4 p-3">
            <div className="w-20 h-20 flex-shrink-0 shadow relative">
              <Image
                onError={(e) => setShowImagePlaceholder(true)}
                src={
                  props.data?.Logo
                    ? props.data?.Logo
                    : "https://timesascent.com/TimeDummyLogo.webp"
                }
                // src={props.data?.Logo ? props.data?.Logo : "https://timesascent.com/TimeDummyLogo.webp"}
                alt={
                  props.data?.imageAltTag
                    ? props.data?.imageAltTag
                    : props.data?.Name
                }
                fill
                priority={true}
                // style={{paddingRight: "10px", paddingLeft: "10px"}}
                className="shadow-lg"
              />
            </div>
            <div className="m-auto">
              <h3 className="text-sm font-medium text-gray-900 line-clamp-1">
                {props.data?.Name}
              </h3>
              <p className="text-sm text-gray-900 line-clamp-2">
                {props.data?.ShortDescription}
              </p>
            </div>
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

export default LeadersOfChangeCard;
