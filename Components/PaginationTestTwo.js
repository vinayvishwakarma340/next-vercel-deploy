import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

const PaginationTestTwo = (props) => {
  const change = (val) => {
    props.pageChange(parseInt(val));
  };

  var dataStartCount = 1 + 24 * (props.page - 1);

  return (
    <div className="flex m-auto items-center justify-center w-full rounded-t-md border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="text-center sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div className="mb-2 sm:m-0">
          <p className="text-sm text-gray-700">
            Showing <span className="font-medium">{dataStartCount}</span> to{" "}
            <span className="font-medium">{props.datalength}</span> of{" "}
            <span className="font-medium">{props.dataCount}</span> results
          </p>
        </div>
        <div>
          {props.maxPage > 1 && (
            <>
              {props.maxPage > 5 ? (
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <div
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
                    onClick={() => {
                      props.page !== 1 ? change(props.page - 1) : "";
                    }}
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div
                    aria-current="page"
                    className={`${props.page === 1
                        ? "z-10 bg-timesPurple text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-timesPurple"
                        : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                      } relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 cursor-pointer`}
                    onClick={(e) => {
                      change(e.target.innerText);
                    }}
                  >
                    {props.page <= 3
                      ? 1
                      : props.page === props.maxPage ||
                        props.page === props.maxPage - 1
                        ? props.maxPage - 4
                        : props.page - 2}
                  </div>
                  {props.maxPage > 1 && (
                    <div
                      className={`${props.page === 2
                          ? "z-10 bg-timesPurple text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-timesPurple"
                          : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                        } relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 cursor-pointer`}
                      onClick={(e) => {
                        change(e.target.innerText);
                      }}
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
                      className={`${props.page === 1 ||
                          props.page === 2 ||
                          props.page === props.maxPage - 1 ||
                          props.page === props.maxPage
                          ? "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                          : "z-10 bg-timesPurple text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-timesPurple"
                        } relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 cursor-pointer`}
                      onClick={(e) => {
                        change(e.target.innerText);
                      }}
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
                      className={`${props.page === props.maxPage - 1
                          ? "z-10 bg-timesPurple text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-timesPurple"
                          : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                        } relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 cursor-pointer`}
                      onClick={(e) => {
                        change(e.target.innerText);
                      }}
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
                      className={`${props.page === props.maxPage
                          ? "z-10 bg-timesPurple text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-timesPurple"
                          : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                        } relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 cursor-pointer`}
                      onClick={(e) => {
                        change(e.target.innerText);
                      }}
                    >
                      {props.page >= props.maxPage - 2
                        ? props.maxPage
                        : props.page === 1 || props.page === 2
                          ? 5
                          : props.page + 2}
                    </div>
                  )}
                  <div
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
                    onClick={() => {
                      props.page !== props.maxPage
                        ? change(props.page + 1)
                        : "";
                    }}
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </nav>
              ) : (
                <nav
                  className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                  aria-label="Pagination"
                >
                  <div
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 cursor-pointer"
                    onClick={() => {
                      props.page !== 1 ? change(props.page - 1) : "";
                    }}
                  >
                    <span className="sr-only">Previous</span>
                    <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div
                    aria-current="page"
                    className={`${props.page === 1
                        ? "z-10 bg-timesPurple text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-timesPurple"
                        : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                      } relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 cursor-pointer`}
                    onClick={(e) => {
                      change(e.target.innerText);
                    }}
                  >
                    1
                  </div>
                  {props.maxPage > 1 && (
                    <div
                      className={`${props.page === 2
                          ? "z-10 bg-timesPurple text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-timesPurple"
                          : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                        } relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 cursor-pointer`}
                      onClick={(e) => {
                        change(e.target.innerText);
                      }}
                    >
                      2
                    </div>
                  )}
                  {props.maxPage > 2 && (
                    <div
                      className={`${props.page === 3
                          ? "z-10 bg-timesPurple text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-timesPurple"
                          : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                        } relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 cursor-pointer`}
                      onClick={(e) => {
                        change(e.target.innerText);
                      }}
                    >
                      3
                    </div>
                  )}
                  {props.maxPage > 3 && (
                    <div
                      className={`${props.page === 4
                          ? "z-10 bg-timesPurple text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-timesPurple"
                          : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                        } relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 cursor-pointer`}
                      onClick={(e) => {
                        change(e.target.innerText);
                      }}
                    >
                      4
                    </div>
                  )}
                  {props.maxPage > 4 && (
                    <div
                      className={`${props.page === 5
                          ? "z-10 bg-timesPurple text-white  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-timesPurple"
                          : "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0"
                        } relative inline-flex items-center px-4 py-2 text-sm font-semibold focus:z-20 cursor-pointer`}
                      onClick={(e) => {
                        change(e.target.innerText);
                      }}
                    >
                      5
                    </div>
                  )}
                  <div
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                    onClick={() => {
                      props.page !== props.maxPage
                        ? change(props.page + 1)
                        : "";
                    }}
                  >
                    <span className="sr-only">Next</span>
                    <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </nav>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaginationTestTwo;
