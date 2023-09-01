const WriteForUs = (props) => {
  return (
    <section className="md:w-[300px]" aria-labelledby="who-to-follow-heading">
      <div className="rounded-lg  md:mt-0 mt-4 md:block flex justify-center bg-white shadow">
        <div className="p-6  md:w-full sm:w-6/12">
          <h2 className="text-xl font-semibold   mb-1 ">{props.heading}</h2>
          <h3
            id="who-to-follow-heading"
            className=" text-sm sm:text-base flex justify-center   text-gray-900"
          >
            {props.description}
          </h3>

          <div className="mt-6   md:block flex justify-center">
            <a
              href={props.href}
              onClick={props.onClick}
              className="block w-full bg-timesPurple  rounded-md border border-gray-300  px-4 py-2 text-center text-sm font-medium text-white shadow-sm "
            >
              {props.buttonText}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WriteForUs;
