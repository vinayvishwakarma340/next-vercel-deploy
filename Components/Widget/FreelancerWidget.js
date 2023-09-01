import Image from "next/image";

const FreelancerWidget = (props) => {
  return (
    <div className="max-w-[500px] max-h-[250px] flex flex-col justify-between m-auto h-full relative overflow-hidden rounded-lg bg-gray-50  shadow ">
      <div className="p-4">
        <div className={"  relative"}>
          <img
            style={{ objectFit: "contain" }}
            src="https://rozgaarindia.com/assets/IPassets/Rozgaar_Black_Logo.svg"
            className="h-16 w-24"
            alt="powerBy"
          />
        </div>
        <p className="text-base  font-bold xl:text-xl xl:font-semibold text-gray-900">{props.heading}</p>

        <p className="mt-2 line-clamp-3">{props.description}</p>
      </div>

      <div className=" bg-purple-100 px-4 py-4 sm:px-6">
        <div className="text-sm">
          <a
            href="/freelancer"
            className="font-semibold text-timesPurple hover:text-purple-700"
          >
            {props.buttonText}
          </a>
        </div>
      </div>
    </div>
  );
};

export default FreelancerWidget;
