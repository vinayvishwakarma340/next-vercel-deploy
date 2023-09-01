import Image from "next/image";

const InspirationalStoriesCard = (props) => {
  // console.log(
  //   `/articles/${props.data.title
  //     .replace(/[^a-zA-Z0-9 ]/g, " ")
  //     .split(" ")
  //     .join("-")
  //     .split(" ")
  //     .join("-")
  //     .split("--")
  //     .join("-")
  //     .toLowerCase()}/${props.data.ArticleId}`,
  //   "chekkkk"
  // );

  return (
    <a
      href={`/articles/${props.data.title
        .replace(/[^a-zA-Z0-9 ]/g, " ")
        .split(" ")
        .join("-")
        .split(" ")
        .join("-")
        .split("--")
        .join("-")
        .toLowerCase()}/${props.data.ArticleId}`}
      className="cursor-pointer flex flex-col overflow-hidden rounded-lg shadow-lg"
    >
      <div className="flex-shrink-0 border-b">
        <div className="h-32 w-full  relative overflow-hidden">
          <Image
            style={{ objectFit: "cover" }}
            src={`https://timesascent.com${props.data.imagePath}`}
            fill
            alt="inspiration stories image"
            // placeholder="blur"
            // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white px-4 pb-4 pt-2">
        <div className="flex-1">
          <p className="text-sm font-medium text-timesPurple">
            {props.data.category}
          </p>
          <div className="mt-1 block ">
            <p className="text-lg font-semibold text-gray-900 line-clamp-2">
              {props.data.title}
            </p>
            <p className="mt-1 text-sm text-gray-500 line-clamp-3">
              {props.data.shortDescription}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default InspirationalStoriesCard;

// ?category=ForHer&utm_campaign=ForHer&utm_medium=organic&utm_source=website`
