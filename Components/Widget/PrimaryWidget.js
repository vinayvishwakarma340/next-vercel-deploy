import Image from "next/image";

const PrimaryWidget = (props) => {
  return (
    <div className="max-w-[500px] m-auto h-full relative overflow-hidden rounded-lg bg-gray-50 px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6">
      <div className="flex">
        <div className="mr-4 justify-items-start h-12   rounded-md bg-purple-500 p-3">
          <props.icon className=" h-6 text-white" aria-hidden="true" />
        </div>
        <p className="text-xl font-semibold text-gray-900">{props.name}</p>
      </div>
      <div className="">
        <div className="flex items-center my-2">
          <p className="italic font-semibold text-gray-500">powered by</p>
          <div className={"h-12 w-20 ml-4   relative"}>
            <Image
              style={{ objectFit: "contain" }}
              src={props.src}
              fill
              sizes="(max-width: 80px) 100vw"
              alt="powerBy"
            />
          </div>
        </div>
        <p className="text-gray-500 mb-2 line-clamp-2">{props.description}</p>
        <div className="absolute inset-x-0 bottom-0 bg-gray-100 px-4 py-4 sm:px-6">
          <div className="text-sm">
            <a
              href={props.href}
              className="font-semibold text-timesPurple hover:text-purple-700"
            >
              {props.btnText}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrimaryWidget;
