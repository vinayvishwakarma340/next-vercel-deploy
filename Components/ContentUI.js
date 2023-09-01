import React from "react";

const ContenUI = (props) => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-full   px-4 sm:py-0 sm:px-6 lg:px-8">
                <div className="text-center">
                    {/* <h2 className="text-lg font-semibold text-indigo-600">Pricing</h2> */}
                    <h1 className="text-center text-xl font-bold     sm:leading-none flex justify-center py-1  mt-1  tracking-tight text-gray-900   ">
                        {props.heading}
                    </h1>
                    <p className=" mt-3  text-center    text-sm leading-normal sm:flex sm:justify-center     mx-auto max-w-full   ">
                        {props.content}
                    </p>
                    <p className="mx-auto mt-4 max-w-xl font-semibold text-base text-gray-900">
                        {props.subcontent}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContenUI;
