const PsychometricBanner = (props) => {
  return (
    <div className="relative sm:h-[400px]">
      <div className="h-full absolute inset-x-0 bottom-0  bg-white" />
      <div className="mx-auto w-full h-full">
        <div className="h-full relative shadow-xl sm:overflow-hidden ">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src={props.imageSrc}
              alt="9Links"
            />
            <div className="absolute inset-0 bg-gray-700 opacity-30 mix-blend-multiply" />
          </div>
          {/* <div className="h-full relative px-4 py-16 sm:px-6 sm:py-16 lg:py-20 lg:px-8">
            <h1 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              <span className="block text-white">{props.heading}</span>
              <span className="block text-indigo-200">{props.subHeading}</span>
            </h1>
            <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
              {props.description}
            </p>
            <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
              <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                <a
                  href={props.buttonHrefLeft}
                  className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-base font-medium text-indigo-700 shadow-sm hover:bg-purple-50 sm:px-6"
                >
                  {props.buttonTextLeft}
                </a>
                <a
                  href={props.buttonHrefRight}
                  className="flex items-center justify-center rounded-md border border-transparent bg-timesPurple px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-6"
                >
                  {props.buttonTextRight}
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
    // <div className="bg-white">
    //   <main>
    //     <div>
    //       <div className="relative">
    //         <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
    //         <div className="mx-auto w-full ">
    //           <div className="relative shadow-xl sm:overflow-hidden ">
    //             <div className="absolute inset-0">
    //               <img
    //                 className="h-full w-full object-cover"
    //                 src={props.imageSrc}
    //                 alt="9Links"
    //               />
    //               <div className="absolute inset-0 bg-purple-700 mix-blend-multiply" />
    //             </div>
    //             <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
    //               <h1 className="text-center text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
    //                 <span className="block text-white">{props.heading}</span>
    //                 <span className="block text-indigo-200">
    //                   {props.subHeading}
    //                 </span>
    //               </h1>
    //               <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
    //                 {props.description}
    //               </p>
    //               <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
    //                 <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
    //                   <a
    //                     href={props.buttonHrefLeft}
    //                     className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-purple-50 sm:px-8"
    //                   >
    //                     {props.buttonTextLeft}
    //                   </a>
    //                   <a
    //                     href={props.buttonHrefRight}
    //                     className="flex items-center justify-center rounded-md border border-transparent bg-purple-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
    //                   >
    //                     {props.buttonTextRight}
    //                   </a>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    // </div>
  );
};

export default PsychometricBanner;
