import Image from "next/image";
import React from "react";
import useRemoveSpaceUrl from "./CustomHook/useRemoveSpaceUrl";

const ArtcleWidget = (props) => {
  return (
    <a
      href={`/articles/${useRemoveSpaceUrl(props.data.title)}/${props.data.ArticleId
        }`}
      className="flex flex-col cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-200 hover:shadow-[0_1px_20px_1px_rgba(0,0,0,0.2)]  "
    >
      <div className={"h-40 sm:h-32 flex-shrink-0 w-full  relative "}>
        <Image
          style={{ objectFit: "cover", objectPosition: "top" }}
          src={`https://timesascent.com${props.data.imagePath}`}
          fill
          quality={25}
          sizes="(max-width: 500px) 100vw"
          alt={props.data.title || "article image"}

        />
      </div>

      <div className="flex flex-1 flex-col justify-between bg-white px-4 pb-4 pt-2">
        <div className="flex-1">
          <p className="text-sm font-medium text-timesPurple">
            <>{props.data.category}</>
          </p>
          <div className="mt-1 block ">
            <p className="text-base font-semibold  line-clamp-1">
              {props.data.title}
            </p>
            <p className="mt-1 text-sm line-clamp-2">
              {props.data.shortDescription}
            </p>
          </div>
        </div>
        <div className="mt-2 flex items-center ">
          <div className="truncate">
            <p className="text-sm  font-medium  truncate">
              {props.data.author}
            </p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time>{props.data.updatedDate}</time>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ArtcleWidget;
