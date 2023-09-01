import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

const SubscribeNews = (props) => {
  const [email, setEmail] = useState("");
  const formSubmitHandler = (e) => {
    e.preventDefault();
    props.emailFormHandler(email);
    setEmail("");
  };
  return (
    <div className="h-full ">
      <div className="h-full mx-auto bg-gradient-to-r from-timesPurple via-puple-400 to-timesRed relative overflow-hidden  bg-timesGradient p-6">
        <div className="relative">
          <div className="sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white  xl:text-4xl">
              Subscribe to our Newsletter!
            </h2>
            <p className="mx-auto mt-6 max-w-[400px] text-lg text-white">
              Get updated with latest Jobs, Newsletters, Articles, Courses, and
              Events.
            </p>
          </div>
          <form
            onSubmit={(e) => formSubmitHandler(e)}
            className="mt-8 sm:mx-auto sm:flex sm:max-w-lg"
          >
            <div className="min-w-0 flex-1">
              <label htmlFor="ta-email" className="sr-only">
                Email address
              </label>
              <input
                id="ta-email"
                type="email"
                required
                className="block w-full rounded-md border border-transparent px-5 py-3 text-base text-gray-900 placeholder-gray-500 shadow-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-timesPurple"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-3">
              <button
                type="submit"
                disabled={props.loading}
                className={`${props.loading ? "cursor-not-allowed " : ""
                  } py-3 block w-full cursor-pointer rounded-md border border-transparent bg-timesPurple h-full text-base font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-puple-700 sm:px-10 `}
              >
                {props.loading ? (
                  <ThreeDots
                    height="20"
                    width="30"
                    radius="9"
                    color="white"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClassName=""
                    visible={true}
                  />
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SubscribeNews;
