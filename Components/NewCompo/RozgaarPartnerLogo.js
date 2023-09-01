import Image from "next/image";
import RozgaarPartner from "../../public/JSON/RozgaarPartner.json";
import useRemoveSpaceUrl from "../CustomHook/useRemoveSpaceUrl";
const RozgaarPartnerLogo = () => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 ">
        {RozgaarPartner.map((item, index) => {
          return (
            <div
              className={
                "h-22 w-full bg-purple-500 flex items-center justify-center relative hover:shadow shadow-[0_1px_10px_1px_rgba(0,0,0,0.1)]  [&>img]:py-5 rounded-md"
              }
            >
              <Image
                // onLoad={loader}

                style={{ objectFit: "contain" }}
                src={item.image}
                alt={`Rozgaar_Partner_${item.name}`}
                width={130}
                height={70}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RozgaarPartnerLogo;
