import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";
// import Image from "next/image";
const SecondryWidget = (props) => {
  return (
    <div className="relative rounded-lg bg-gray-800 text-center">
      <div className="relative mx-auto max-w-7xl p-4 ">
        <div className="">
          {/* <h2 className="text-lg font-semibold text-gray-300">{props.text1}</h2> */}
          {/* <div className={"rounded-full  inline-block m-auto p-2   relative"}>
            <Image src={props.iconUrl} width={30} height={30} />
          </div> */}

          <p className="mt-1 text-xl font-bold tracking-tight text-white sm:text-2xl">
            {props.text2}
          </p>
          <p className="mt-3 text-lg text-gray-300">{props.text3}</p>
          <div className="mt-8">
            <div className="inline-flex rounded-md shadow">
              <a
                href={props.href}
                target={props.newTab && "_self"}
                className="  inline-flex items-center justify-center rounded-md border border-transparent bg-white px-5 py-2 text-base font-medium text-gray-900 hover:bg-gray-50"
              >
                {props.buttonText}
                <ArrowTopRightOnSquareIcon
                  className="-mr-1 ml-3 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondryWidget;
