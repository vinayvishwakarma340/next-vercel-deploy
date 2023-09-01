import Image from "next/image";
import { useRouter } from "next/router";
const PodcastCard = (props) => {
  const router = useRouter();

  const regexHandler = (str) => {
    let value = str
      .replace(/[^\w\s]|_/g, "-")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-+|-+$/g, "")
      .toLowerCase();
    return value;
  };

  return (
    <div>
      <a
        href={`/podcasts/${regexHandler(props.data.PodcastTitle)}/${props.data.PodcastUUID}`}
      >
        <div className="h-full flex flex-col bg-white cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl">
          <div className={"h-[300px] sm:h-[200px]  w-auto  relative"}>
            <Image
              style={{ objectFit: "fill" }}
              src={props.data.Thumbnail}
              fill
              alt={props.data.PodcastTitle}
            // placeholder="blur"
            // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
            />
          </div>
          <div className="flex flex-1 flex-col justify-between bg-white px-4 pb-4 pt-2">
            <div className="flex-1">
              <div className="mt-1 block ">
                <h2 className="text-md font-semibold text-gray-900 line-clamp-2">
                  {props.data.PodcastTitle}
                </h2>
              </div>
            </div>
          </div>
          <div className="w-full rounded-bl-md rounded-br-md border border-transparent bg-purple-100 px-4 py-2 text-center text-lg font-medium shadow-sm text-timesPurple hover:bg-purple-200 focus:outline-none sm:text-base">
            Listen Now
          </div>
        </div>
      </a>
    </div>
  );
};

export default PodcastCard;

// href={`/csr-activity/${props.data.ActivityName.replace(
//   /[^a-zA-Z ]/g,
//   " "
// )
//   .split(" ")
//   .join("-")
//   .split(" ")
//   .join("-")
//   .split("--")
//   .join("-")
//   .split("---")
//   .join("-")}/${props.data.OrganisationName.replace(/[^a-zA-Z ]/g, " ")
//   .split(" ")
//   .join("-")
//   .split(" ")
//   .join("-")
//   .split("--")
//   .join("-")}/${props.data.WeCareID}`}
