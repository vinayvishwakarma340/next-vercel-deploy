const Press = (props) => {
  return (
    <div className="bg-white ">
      <div className="relative mx-auto ">
        <div className=" grid gap-4  lg:grid-cols-2">
          {props.data?.map((item) => (
            <a
              href={
                "/articles/" +
                item.title
                  .replace(/[^a-zA-Z ]/g, " ")
                  .split(" ")
                  .join("-")
                  .split(" ")
                  .join("-")
                  .split("--")
                  .join("-") +
                "/" +
                item.ArticleId
              }
              key={item.ArticleId}
            >
              {/* <p className="text-sm text-gray-500">
                <time>{item.updatedDate}</time>
              </p> */}
              <div className="mt-2 block">
                <p className="text-base font-semibold  line-clamp-2">
                  {item.title}
                </p>
                <p className="mt-1 text-sm  line-clamp-4">
                  {item.shortDescription}
                </p>
              </div>
              <div className="mt-1">
                <div className="text-sm  text-timesPurple hover:text-timesPurple hover:underline">
                  Read More
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Press;
