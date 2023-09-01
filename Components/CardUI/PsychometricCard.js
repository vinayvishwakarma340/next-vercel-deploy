import Image from "next/image";
import Link from "next/link";

const PsychometricCard = (props) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="w-full ">
        <div className={"h-40 w-full rounded-t-lg  relative "}>
          <Image
            style={{ objectFit: "cover" }}
            // placeholder="blur"
            // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
            src={props.imagePath}
            fill
            alt="card"
          />
        </div>
      </div>
      <div className="p-5">
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {props.heading}
        </h2>
        <h3 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">
          {props.subHeading}
        </h3>

        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {props.description}
        </p>
        <a
          href={props.buttonHref}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-timesPurple rounded-lg hover:bg-purple-600 focus:ring-4 focus:outline-none focus:ring-purple-300 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-800"
        >
          {props.buttonText}
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
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
        </a>
      </div>
    </div>
    // <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
    //   <div className="flex-shrink-0">
    //     <img
    //       className="h-full w-full object-cover bg-top"
    //       src={props.imagePath}
    //       alt=""
    //     />
    //   </div>
    //   <div className="flex flex-1 flex-col justify-between bg-white px-4 pb-4 pt-2">
    //     <h3
    //       className="text-gray-900 font-bold text-lg
    // "
    //     >
    //       {props.heading}
    //     </h3>
    //     <p className="my-2 font-semibold text-gray-900">{props.subHeading}</p>
    //     <p>{props.description}</p>
    //   </div>
    //   <a
    //     href={props.buttonHref}
    //     className="cursor-pointer mt-8 inline-flex w-full items-center justify-center rounded-md border border-transparent  px-5 py-3 text-base font-medium text-indigo-600 bg-purple-50 hover:bg-purple-100 sm:w-auto"
    //   >
    //     {props.buttonText}
    //   </a>{" "}
    // </div>
  );
};

export default PsychometricCard;
