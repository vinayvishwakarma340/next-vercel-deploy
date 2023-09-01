import ArticleCardWithoutImg from "../CardUI/ArticleCardWithoutImg";

const ArticleWithoutImgCollection = (props) => {
  return (
    <div>
      <div className=" flow-root bg-white">
        <ul role="list" className="divide-y divide-gray-200 bg-white">
          {props.data.map((item, index) => (
            <div key={index} className="py-2">
              <ArticleCardWithoutImg truncate={props.truncate} data={item} />
            </div>
          ))}
        </ul>
      </div>
      <>
        <div className="hidden sm:block">
          <a
            href={"/articleslist/recommended-read"}

            type="submit"
            className=" block w-full rounded-bl-md rounded-br-md  border border-transparent bg-timesPurple px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-timesPurple focus:outline-none "
          >
            View All
          </a>
        </div>
        <div className=" flex sm:hidden justify-end">
          <a
            href={"/articleslist/recommended-read"}

            className="inline-flex  items-center pr-4 text-sm font-medium text-center text-timesPurple "
          >
            <span className="line-clamp-1">View all</span>
            <span>
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </>
    </div>
  );
};

export default ArticleWithoutImgCollection;
