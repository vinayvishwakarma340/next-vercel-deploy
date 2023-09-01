import Image from "next/image";

const PrimayWidgetGMI = (props) => {
  return (
    <div className="min-h-[250px]  w-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="bg-purple-200">
        <div className={` h-16    ${props.width ? props.width : "w-32"} m-auto   relative`}>
          <Image
            src={props.src}
            style={{ objectFit: "contain" }}
            fill
            sizes="(max-width: 128px) 100vw"
            alt="card"
          />
        </div>
      </div>

      <div className="p-2   ">
        <div className="h-[110px]">
          <h3 className="lg:line-clamp-2 xl:line-clamp-3 text-base font-bold tracking-tight ">
            {props.name}
          </h3>

          <p className="mb-3 lg:line-clamp-2 xl:line-clamp-3 font-normal ">
            {props.description}
          </p>
        </div>
        <a
          href={props.href}
          target={props.newTab && "_self"}
          className="inline-flex mt-4 items-center px-3 py-2 text-sm font-medium text-center text-white bg-timesPurple rounded-lg hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <span className="line-clamp-1">{props.btnText}</span>
          <span>
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
          </span>
        </a>
      </div>
    </div>
  );
};

export default PrimayWidgetGMI;
