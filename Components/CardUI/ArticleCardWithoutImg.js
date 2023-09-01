import useRemoveSpaceUrl from "../CustomHook/useRemoveSpaceUrl";
const ArticleCardWithoutImg = (props) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <a
      href={`/articles/${useRemoveSpaceUrl(props.data.title)}/${
        props.data.ArticleId
      }`}
      className=" relative  w-full h-full   "
    >
      <div className="flex flex-col justify-between h-full ">
        {/* <span className="absolute inset-0" aria-hidden="true" /> */}
        <div>
          {" "}
          <p className="line-clamp-2 text-base mb-2 font-semibold ">
            {props.data.title}
          </p>
          <p
            className={classNames(
              props.truncate
                ? `line-clamp-${props.truncate} text-sm`
                : "line-clamp-5 text-sm "
            )}
          >
            {props.data.shortDescription}
          </p>
        </div>
        <div className=" whitespace-nowrap text-sm text-gray-500 mt-2">
          {props.data.updatedDate}
        </div>
      </div>
    </a>
  );
};

export default ArticleCardWithoutImg;
