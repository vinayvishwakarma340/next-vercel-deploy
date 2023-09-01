const Pagination = (props) => {
  const change = (val) => {
    props.pageChange(parseInt(val));
  };

  return (
    <nav aria-label="Page navigation example">
      {props.maxPage > 1 && (
        <>
          {props.maxPage > 5 ? (
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <span
                  className={`block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:text-gray-700 mr-2 cursor-pointer`}
                  onClick={() => {
                    props.page !== 1 ? change(props.page - 1) : "";
                  }}
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </li>

              <li>
                <span
                  className={`${props.page === 1
                      ? "border border-indigo-500 z-40"
                      : "border border-gray-300 z-10"
                    } px-3 py-2 text-[15px] hover:bg-purple-100 leading-tight text-gray-500 bg-white border border-gray-300  hover:text-gray-700 cursor-pointer`}
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
                </span>
              </li>

              {props.maxPage > 1 && (
                <li>
                  <span
                    className={`${props.page === 2
                        ? "border border-indigo-500 z-40"
                        : "border border-gray-300 z-10"
                      } px-3 py-2 text-[15px] hover:bg-purple-100 leading-tight text-gray-500 bg-white border border-gray-300  hover:text-gray-700 cursor-pointer`}
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
                  </span>
                </li>
              )}

              {props.maxPage > 2 && (
                <li>
                  <span
                    className={`${props.page === 1 ||
                        props.page === 2 ||
                        props.page === props.maxPage - 1 ||
                        props.page === props.maxPage
                        ? "border border-gray-300 z-10"
                        : "border border-indigo-500 z-40"
                      } px-3 py-2 text-[15px] hover:bg-purple-100 leading-tight text-gray-500 bg-white hover:text-gray-700 cursor-pointer`}
                    onClick={(e) => {
                      change(e.target.innerText);
                    }}
                  >
                    {props.page <= 3
                      ? 3
                      : props.page >= props.maxPage - 2
                        ? props.maxPage - 2
                        : props.page}
                  </span>
                </li>
              )}

              {props.maxPage > 3 && (
                <li>
                  <span
                    className={`${props.page === props.maxPage - 1
                        ? "border border-indigo-500 z-40"
                        : "border border-gray-300 z-10"
                      } z-10 px-3 py-2 text-[15px] hover:bg-purple-100 leading-tight text-gray-500 bg-white border border-gray-300  hover:text-gray-700 cursor-pointer`}
                    onClick={(e) => {
                      change(e.target.innerText);
                    }}
                  >
                    {props.page >= props.maxPage - 2
                      ? props.maxPage - 1
                      : props.page === 1 || props.page === 2
                        ? 4
                        : props.page + 1}
                  </span>
                </li>
              )}

              {props.maxPage > 4 && (
                <li>
                  <span
                    className={`${props.page === props.maxPage
                        ? "border border-indigo-500 z-40"
                        : "border border-gray-300 z-10"
                      } px-3 py-2 text-[15px] hover:bg-purple-100 leading-tight text-gray-500 bg-white border border-gray-300  hover:text-gray-700 cursor-pointer`}
                    onClick={(e) => {
                      change(e.target.innerText);
                    }}
                  >
                    {props.page >= props.maxPage - 2
                      ? props.maxPage
                      : props.page === 1 || props.page === 2
                        ? 5
                        : props.page + 2}
                  </span>
                </li>
              )}

              <li>
                <span
                  className={`block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:text-gray-700 sm:ml-2 cursor-pointer`}
                  onClick={() => {
                    props.page !== props.maxPage ? change(props.page + 1) : "";
                  }}
                >
                  <span className="sr-only">Next</span>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </li>
            </ul>
          ) : (
            <ul className="inline-flex items-center -space-x-px">
              <li>
                <span
                  className={`block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:text-gray-700 mr-2 cursor-pointer`}
                  onClick={() => {
                    props.page !== 1 ? change(props.page - 1) : "";
                  }}
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </li>

              <li>
                <span
                  className={`${props.page === 1
                      ? "border border-indigo-500 z-40"
                      : "border border-gray-300 z-10"
                    } px-3 py-2 text-[15px] hover:bg-purple-100 leading-tight text-gray-500 bg-white border border-gray-300  hover:text-gray-700 cursor-pointer`}
                  onClick={(e) => {
                    change(e.target.innerText);
                  }}
                >
                  1
                </span>
              </li>

              {props.maxPage > 1 && (
                <li>
                  <span
                    className={`${props.page === 2
                        ? "border border-indigo-500 z-40"
                        : "border border-gray-300 z-10"
                      } px-3 py-2 text-[15px] hover:bg-purple-100 leading-tight text-gray-500 bg-white border border-gray-300  hover:text-gray-700 cursor-pointer`}
                    onClick={(e) => {
                      change(e.target.innerText);
                    }}
                  >
                    2
                  </span>
                </li>
              )}

              {props.maxPage > 2 && (
                <li>
                  <span
                    className={`${props.page === 3
                        ? "border border-indigo-500 z-40"
                        : "border border-gray-300 z-10"
                      } px-3 py-2 text-[15px] hover:bg-purple-100 leading-tight text-gray-500 bg-white hover:text-gray-700 cursor-pointer`}
                    onClick={(e) => {
                      change(e.target.innerText);
                    }}
                  >
                    3
                  </span>
                </li>
              )}

              {props.maxPage > 3 && (
                <li>
                  <span
                    className={`${props.page === 4
                        ? "border border-indigo-500 z-40"
                        : "border border-gray-300 z-10"
                      } z-10 px-3 py-2 text-[15px] hover:bg-purple-100 leading-tight text-gray-500 bg-white border border-gray-300  hover:text-gray-700 cursor-pointer`}
                    onClick={(e) => {
                      change(e.target.innerText);
                    }}
                  >
                    4
                  </span>
                </li>
              )}

              {props.maxPage > 4 && (
                <li>
                  <span
                    className={`${props.page === 5
                        ? "border border-indigo-500 z-40"
                        : "border border-gray-300 z-10"
                      } px-3 py-2 text-[15px] hover:bg-purple-100 leading-tight text-gray-500 bg-white border border-gray-300  hover:text-gray-700 cursor-pointer`}
                    onClick={(e) => {
                      change(e.target.innerText);
                    }}
                  >
                    5
                  </span>
                </li>
              )}

              <li>
                <span
                  className={`block px-3 py-2 mr-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:text-gray-700 sm:ml-2 cursor-pointer`}
                  onClick={() => {
                    props.page !== props.maxPage ? change(props.page + 1) : "";
                  }}
                >
                  <span className="sr-only">Next</span>
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </li>
            </ul>
          )}
        </>
      )}
    </nav>
  );
};

export default Pagination;
