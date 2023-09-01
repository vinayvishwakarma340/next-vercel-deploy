import Image from "next/image";

const ForherOffers = (props) => {
  return (
    <a
      href={`/offer-detail/${props.data.WeCareOfferUUID}`}

      className=" relative flex flex-col cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-200 hover:shadow-[0_1px_20px_1px_rgba(0,0,0,0.2)]  "
    >
      <div className={"h-40 sm:h-32 flex-shrink-0 w-full  relative "}>
        <Image
          style={{ objectFit: "cover", objectPosition: "top" }}
          src={`${props.data.MobImage}`}
          fill
          quality={40}
          sizes="(max-width: 500px) 100vw"
          alt={props.data.Title || "article image"}
        // placeholder="blur"
        // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
        />
      </div>
      {/* <div className="absolute right-0 top-0 h-10 w-16">
        <div className="absolute transform rotate-45 bg-red-600 text-center text-sm text-yellow-200 font-semibold  py-1 left-[-34px] top-[12px] w-[140px]">
          {` ${props.data.offer} OFF`}
        </div>
      </div> */}
      <div className="flex flex-1 flex-col justify-between bg-white px-4 pb-4 pt-2">
        <div className="flex-1">
          <p className="text-sm font-medium text-timesPurple">
            <>{props.data.Company}</>
          </p>
          <div className="mt-1 block ">
            <p className="text-sm font-medium text-gray-900">
              {props.data.Title}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ForherOffers;
