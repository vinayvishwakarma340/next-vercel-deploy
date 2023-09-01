import Image from "next/image";
import { MapPinIcon } from "@heroicons/react/20/solid";
const HrProfessionalProfile = (props) => {
  return (
    <a
      href={`/hrprofessional-profile/${props.data.Hrid}`}
      className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white p-2 shadow-sm focus-within:ring-2 focus-within:ring-timesPurple focus-within:ring-offset-2 hover:border-timesPurple"
    >
      <div className="flex-shrink-0 relative h-20 w-20 [&>img]:rounded-full">
        <Image
          src={props.data.profilePicture}
          style={{ objectFit: "cover" }}
          fill
          sizes="(max-width: 80px) 100vw"
          priority={props.priority}
          // placeholder="blur"
          // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
          alt={props.data.fullName || "hr professional"}
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none cursor-pointer">
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="text-sm font-semibold ">{props.data.fullName}</p>
          <p className="truncate text-sm text-timesPurple">
            {props.data.designation}
          </p>
          <p className="truncate text-sm ">{props.data.currentCompany}</p>
        </div>
      </div>
    </a>
  );
};

export default HrProfessionalProfile;

// <a
//   href={`hrprofessional-profile/${props.data.Hrid}`}
//   className="flex items-center cursor-pointer space-x-4 "
// >
//   <div
//     className={
//       "max-w-[30%] flex transition-all rounded-full overflow-hidden duration-200 hover:scale-125  relative"
//     }
//   >
//     <Image
//       src={props.data.profilePicture}
//       style={{ objectFit: "cover" }}
//       width={80}
//       height={80}
//       alt="hr professional"
//     />
//   </div>

//   <div className="w-[70%]    ">
//     <h3 className="text-lg font-medium">{props.data.fullName}</h3>
//     <p className="text-sm my-1 truncate font-medium">
//       {props.data.currentCompany}
//     </p>
//     <p className="text-sm text-timesPurple font-medium truncate">
//       {props.data.designation}
//     </p>
//     <p className="text-sm flex items-center">
//       <MapPinIcon className=" h-4 text-gray-400 mr-1" />

//       {props.data.location}
//     </p>
//   </div>
// </a>
