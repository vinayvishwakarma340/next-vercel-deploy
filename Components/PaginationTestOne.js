import {
  ArrowLongLeftIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/20/solid";

const PaginationTestOne = (props) => {
  const change = (val) => {
    props.pageChange(parseInt(val));
  };
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    props.maxPage > 1 && (
      <nav className="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
        <div className="-mt-px flex w-0 flex-1">
          <div
            onClick={() => {
              props.page !== 1 ? change(props.page - 1) : "";
            }}
            className={`${classNames(
              props.page === 1
                ? "cursor-none pointer-events-none"
                : "cursor-pointer"
            )} inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700`}
          >
            <ArrowLongLeftIcon
              className="mr-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Previous
          </div>
        </div>
        <div className="hidden md:-mt-px md:flex">
          <div
            onClick={(e) => {
              change(e.target.innerText);
            }}
            className={`${classNames(
              props.page === 1
                ? "border-indigo-500  text-indigo-600"
                : "text-gray-500 hover:border-gray-300 hover:text-gray-700"
            )} cursor-pointer inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium`}
          >
            {props.page <= 3
              ? 1
              : props.page === props.maxPage || props.page === props.maxPage - 1
              ? props.maxPage - 4
              : props.page - 2}
          </div>
          {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
          {props.maxPage > 1 && (
            <div
              onClick={(e) => {
                change(e.target.innerText);
              }}
              className={`${classNames(
                props.page === 2
                  ? "border-indigo-500  text-indigo-600"
                  : "text-gray-500 hover:border-gray-300 hover:text-gray-700"
              )} cursor-pointer inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium`}
              aria-current="page"
            >
              {props.page <= 3
                ? 2
                : props.page === props.maxPage ||
                  props.page === props.maxPage - 1
                ? props.maxPage - 3
                : props.page - 1}
            </div>
          )}
          {props.maxPage > 2 && (
            <div
              onClick={(e) => {
                change(e.target.innerText);
              }}
              className={`${classNames(
                props.page === 1 ||
                  props.page === 2 ||
                  props.page === props.maxPage - 1 ||
                  props.page === props.maxPage
                  ? "text-gray-500 hover:border-gray-300 hover:text-gray-700"
                  : "border-indigo-500  text-indigo-600"
              )} cursor-pointer inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium`}
            >
              {props.page <= 3
                ? 3
                : props.page >= props.maxPage - 2
                ? props.maxPage - 2
                : props.page}
            </div>
          )}

          {props.maxPage > 3 && (
            <div
              onClick={(e) => {
                change(e.target.innerText);
              }}
              className={`${classNames(
                props.page === props.maxPage - 1
                  ? "border-indigo-500  text-indigo-600"
                  : "text-gray-500 hover:border-gray-300 hover:text-gray-700"
              )} cursor-pointer inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium`}
            >
              {props.page >= props.maxPage - 2
                ? props.maxPage - 1
                : props.page === 1 || props.page === 2
                ? 4
                : props.page + 1}
            </div>
          )}
          {props.maxPage > 4 && (
            <div
              onClick={(e) => {
                change(e.target.innerText);
              }}
              className={`${classNames(
                props.page === props.maxPage
                  ? "border-indigo-500  text-indigo-600"
                  : "text-gray-500 hover:border-gray-300 hover:text-gray-700"
              )} cursor-pointer inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium`}
            >
              {props.page >= props.maxPage - 2
                ? props.maxPage
                : props.page === 1 || props.page === 2
                ? 5
                : props.page + 2}
            </div>
          )}
        </div>
        <div
          onClick={() => {
            props.page !== props.maxPage ? change(props.page + 1) : "";
          }}
          className="-mt-px flex w-0 flex-1 justify-end cursor-pointer"
        >
          <div className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700">
            Next
            <ArrowLongRightIcon
              className="ml-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </div>
        </div>
      </nav>
    )
  );
};

export default PaginationTestOne;
