import Footer from "./Footer";
import MainHeader from "./MainHeader";

const PageNotFound = () => {
  return (
    <>
      <MainHeader />
      <div className="my-6 h-1/2  ">
        <div className={"relative "}>
          <div className="mt-10 flex flex-col items-center justify-center">
            {/* <div className="text-2xl font-bold">500</div>
            <div className="text-xl">Something went wrong</div> */}
            <img
              src="/PageError/pageNotFound.webp"
              className="h-auto w-[90%] sm:w-[55%] "
              alt="error"
            />
            {/* <button
              onClick={() => router.reload()}
              className="block mt-4 m-auto h-full cursor-pointer  rounded-md  border border-transparent bg-timesPurple px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
            >
              Try Again
            </button> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PageNotFound;
