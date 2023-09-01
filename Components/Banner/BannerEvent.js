import Image from "next/image";

const BannerEvent = (props) => {
  return (
    <div className="relative">
      <div className="absolute inset-x-0 bottom-0 h-max bg-white" />
      <div className="mx-auto w-full ">
        <div className="relative shadow-xl sm:overflow-hidden ">
          <div className="h-full w-full absolute inset-0">
            <Image
              style={{ objectFit: "cover" }}
              src={props.imageSrc}
              fill
              alt="9Links"
              loading="lazy"
            />

            <div className="absolute inset-0 bg-gray-700 mix-blend-multiply" />
          </div>
          <div className="relative px-4 py-16 sm:px-6 sm:py-16 lg:py-20 lg:px-8">
            <h1 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="block text-white">{props.heading}</span>
              <span className="block text-indigo-200">{props.subHeading}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
              {props.description}
            </p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <div className="">
                <a
                  href={props.buttonHref}

                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-3 py-2 text-base font-medium  shadow-sm hover:bg-purple-50 sm:px-4"
                >
                  {props.buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerEvent;
