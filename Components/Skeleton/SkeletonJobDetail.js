const SkeletonJobDetail = (props) => {
  return (
    <div>
      <div className=" block lg:hidden ">
        <div
          role="status"
          className=" p-4   animate-pulse md:p-6 dark:border-gray-700"
        >
          <div className="mb-4">
            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
            <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
          </div>
          <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
            <svg
              className="w-12 h-12 text-gray-200 dark:text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 640 512"
            >
              <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
            </svg>
          </div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>

          <div
            role="status"
            className="mt-4 p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
          >
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <div className="flex items-center justify-between pt-4">
              <div>
                <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
              </div>
              <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
            </div>
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
      <div className=" hidden lg:block ">
        <div className="">
          <div className="main bg-gray-100 container">
            <div className="lg:flex lg:justify-between box-border w-full">
              <div className=" w-full lg:w-[75%] lg:px-0 sm:mt-4 lg:my-8">
                <div
                  role="status"
                  className=" p-4 space-y-4 border border-gray-200 divide-y divide-gray-200 rounded shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                      <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    </div>
                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12"></div>
                  </div>
                </div>

                <div
                  role="status"
                  className="space-y-8 py-4 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
                >
                  <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                    <svg
                      className="w-12 h-12 text-gray-200"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 640 512"
                    >
                      <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                    </svg>
                  </div>
                  <div className="w-full">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                  </div>
                  <span className="sr-only">Loading...</span>
                </div>

                <div className="mt-6">
                  <div role="status" className="space-y-2.5 animate-pulse">
                    <div className="flex items-center w-full space-x-2">
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    </div>
                    <div className="flex items-center w-full space-x-2 max-w-[480px]">
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    </div>
                    <div className="flex items-center w-full space-x-2 max-w-[400px]">
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    </div>
                    <div className="flex items-center w-full space-x-2 max-w-[480px]">
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    </div>
                    <div className="flex items-center w-full space-x-2 max-w-[440px]">
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                    </div>
                    <div className="flex items-center w-full space-x-2 max-w-[360px]">
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                <div className="mt-6">
                  <div role="status" className="max-w-sm animate-pulse">
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
              <div className="right-side lg:ml-5 w-full lg:w-[25%] mt-4 pb-12 lg:px-0">
                <div className="py-4 ">
                  <div
                    role="status"
                    className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
                  >
                    <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                      <svg
                        className="w-12 h-12 text-gray-200 dark:text-gray-600"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 640 512"
                      >
                        <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                      </svg>
                    </div>
                    <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                    <div className="flex items-center mt-4 space-x-3">
                      <svg
                        className="text-gray-200 w-14 h-14 dark:text-gray-700"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                      <div>
                        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2"></div>
                        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                      </div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
                <div className="mt-6">
                  <div role="status" className="space-y-2.5 animate-pulse">
                    <div className="flex items-center w-full space-x-2">
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    </div>
                    <div className="flex items-center w-full space-x-2 max-w-[480px]">
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    </div>
                    <div className="flex items-center w-full space-x-2 max-w-[400px]">
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    </div>
                    <div className="flex items-center w-full space-x-2 max-w-[480px]">
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                    </div>
                    <div className="flex items-center w-full space-x-2 max-w-[440px]">
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
                    </div>
                    <div className="flex items-center w-full space-x-2 max-w-[360px]">
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
                      <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
                    </div>
                    <span className="sr-only">Loading...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SkeletonTextPlaceholder = () => {
  return (
    <div role="status" className="space-y-2.5 animate-pulse px-4 py-5 sm:px-6">
      <div className="flex items-center w-full space-x-2">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-60"></div>
      </div>
      <div className="flex items-center w-full space-x-2 max-w-[480px]">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      <div className="flex items-center w-full space-x-2 max-w-[400px]">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <div className="flex items-center w-full space-x-2 max-w-[480px]">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
      </div>
      <div className="flex items-center w-full space-x-2 max-w-[440px]">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
      </div>
      <div className="flex items-center w-full space-x-2 max-w-[360px]">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <div className="flex items-center w-full space-x-2 max-w-[440px]">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-32"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full"></div>
      </div>
      <div className="flex items-center w-full space-x-2 max-w-[360px]">
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-80"></div>
        <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-full"></div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};
export default SkeletonJobDetail;
