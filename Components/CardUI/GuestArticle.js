import Image from "next/image";
import { AritcleIcon } from "../Icons/CustomIcons";
import useRemoveSpaceUrl from "../CustomHook/useRemoveSpaceUrl";

const GuestArticle = (props) => {
  return (
    <a
      href={`/articles/${useRemoveSpaceUrl(props.data.title)}/${props.data.ArticleId
        }`}
      className="p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
    >
      <div className="flex justify-between items-center mb-4 text-gray-500">
        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center  rounded dark:bg-primary-200 dark:text-primary-800">
          <AritcleIcon className="h-3 w-3 mr-2" />
          Article
        </span>
        <span className="text-sm">{props.data.updatedDate}</span>
      </div>
      <h2 className="mb-1 text-base font-bold tracking-tight text-gray-900 dark:text-white">
        {props.data.title}
      </h2>
      <div className="min-h-[100px]">
        <p className="mb-4 text-sm  line-clamp-4">
          {props.data.shortDescription}
        </p>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div
            className={
              "w-7 h-7 [&>img]:rounded-full flex items-center space-x-4 w  relative "
            }
          >
            <Image
              style={{ objectFit: "cover", objectPosition: "center" }}
              src={`https://timess3spore.s3.amazonaws.com/ndata${props.data.imagePath}`}
              fill
              sizes="(max-width: 20px) 100vw"
              alt="article image"
            // placeholder="blur"
            // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
            />
          </div>
          <div className="ml-2 text-sm  truncate">
            {props.data.author?.split("|")[0]}
          </div>
        </div>
        <div className="inline-flex text-sm text-timesPurple items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
          Read more
          <svg
            className="ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </a>
  );
};

export default GuestArticle;
