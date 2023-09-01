import Image from "next/image";

const ManagersCardMain = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="h-full flex flex-col cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl"
    // style={{ flex: "1 0 calc(33.3333% - 10.6667px)" }}
    >
      <a href={props.data.ManagerSeoURL}>
        <div className="relative">
          <div>
            <div className={"h-[300px] sm:h-[170px]  w-auto  relative"}>
              <Image
                style={{ objectFit: "cover", objectPosition: "top" }}
                src={props.data.ManagerImage}
                fill
                alt={props.data.ManagerImageAltTag}
              // placeholder="blur"
              // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
              />
            </div>
          </div>
          <div className="absolute top-0 left-0 h-full w-full flex opacity-0 items-center justify-center hover:opacity-100 hover:backdrop-blur-[2px] transition-all hover:-translate-y-2">
            <p className="text-white text-lg">View Detail</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-between px-4 pb-4 pt-2">
          <div className="flex-1">
            <div className="mt-1 block ">
              <p className="text-md text-center font-semibold text-gray-900 line-clamp-2">
                {props.data.ManagerName}
              </p>
              <p className="text-sm text-center text-gray-900">
                {props.data.Designation}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ManagersCardMain;
