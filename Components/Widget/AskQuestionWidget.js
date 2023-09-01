import React from "react";

const AskQuestionWidget = (props) => {
  return (
    <section
      className="md:w-[300px]  shadow-lg"
      aria-labelledby="who-to-follow-heading"
    >
      <div className="rounded-lg  md:mt-0 mt-4 md:block  bg-white ">
        <div className="p-6  md:w-full sm:w-6/12">
          <h2 className="text-xl font-semibold   mb-1 ">{props.heading}</h2>
          <h3
            id="who-to-follow-heading"
            className=" text-sm sm:text-base    text-gray-900"
          >
            {props.description}
          </h3>

          <div className="mt-6   md:block flex justify-center">
            <button
              type="button"
              onClick={props.onClick}
              className="block w-full bg-timesPurple  rounded-md border border-gray-300  px-4 py-2 text-center text-sm font-medium text-white shadow-sm "
            >
              {props.buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AskQuestionWidget;
