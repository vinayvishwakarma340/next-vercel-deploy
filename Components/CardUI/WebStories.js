import Image from "next/image";
import React from "react";
import useRemoveSpaceUrl from "../CustomHook/useRemoveSpaceUrl";
const WebStories = (props) => {
  return (
    <a
      href={`/web-stories/${useRemoveSpaceUrl(props.data.Title)}/${props.data.WebStoriesSummaryID
        }`}

      className="group relative shadow-md rounded-md sm:rounded-lg  "
    >
      <div className="  relative  overflow-hidden w-[250px] sm:w-auto">
        <div
          className={
            "h-72  w-[250px] sm:w-full relative  rounded-tl-lg rounded-tr-lg overflow-hidden "
          }
        >
          <Image
            style={{ objectFit: "cover" }}
            src={props.data.Image}
            fill
            sizes="(max-width: 250px) 100vw"
            alt={props.data.Title || "web stories"}
          // placeholder="blur"
          // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
          />
        </div>
        <div className=" bg-black opacity-50 rounded-full p-2 absolute  top-1 right-1">
          <Image
            src="/webStories/instaIcon.webp"
            width={30}
            height={30}
            alt="article image"
          />
        </div>
      </div>
      <div className="p-2 w-[250px] sm:w-full">
        <div className="h-12 mb-2">
          <p className="text-base font-semibold text-gray-900 line-clamp-2">
            {props.data.Title}
          </p>
        </div>
        {/* <p className="mt-1 text-sm text-gray-500 line-clamp-3 ">
          {props.data.Description}
        </p> */}
      </div>
    </a>
  );
};

export default WebStories;
