import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

const EventCard = (props) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0 border-b">
        <div className={"h-48 sm:h-32  w-full  relative"}>
          <Image
            style={{ objectFit: "cover" }}
            src={props.data.event_speaker_image}
            fill
            alt={props.data.eventName || props.data.eventTitle}
            // placeholder="blur"
            // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
            quality={50}
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white px-4 pb-4 pt-2">
        <div className="flex-1">
          <p className="text-sm font-medium text-gray-900 truncate">
            {props.data.eventName}
          </p>
          <div className="mt-1 text-sm ">
            <div className="flex items-center">
              <CalendarDaysIcon className="text-sm h-4 mr-1" />

              {props.data.startdate}
            </div>
            <div className="flex items-center">
              <ClockIcon className="text-sm h-4 mr-1" />
              {props.data.event_time}
            </div>
            <div className="flex items-center ">
              <MapPinIcon className="text-sm w-[15px] h-4 mr-1" />

              <div className="w-[calc(100%-19px)]  line-clamp-1 ">
                {props.data.eventLocation}
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        href={`/event/${props.data.eventName
          .toLowerCase()
          .replace(/[^a-zA-Z ]/g, " ")
          .split("  ")
          .join("-")
          .split(" ")
          .join("-")
          .split("--")}/${props.data.keyindex}`}
        className="block w-full rounded-bl-md rounded-br-md  border border-transparent bg-purple-100 px-4 py-2 text-center text-sm font-medium  shadow-sm text-purple-700 hover:bg-purple-200 focus:outline-none "
      >
        View Detail
      </a>
    </div>
  );
};

export default EventCard;
