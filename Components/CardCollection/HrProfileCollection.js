import HrProfessionalProfile from "../CardUI/HrProfessionalProfile";

const HrProfileCollection = (props) => {
  return (
    <div className="bg-white">
      <div className="mx-auto  p-4 sm:p-6 ">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {props.heading}
            </h2>
            <p className="text-lg text-gray-500">{props.subHeading}</p>
          </div>
          <div className="lg:col-span-2">
            <ul
              role="list"
              className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-6"
            >
              {props.data?.map((item) => (
                <HrProfessionalProfile key={item.id} data={item} />
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center font-medium">
          <button className="mx-auto mt-6 text-timesRed hover:underline">
            View Detail
          </button>
        </div>
      </div>
    </div>
  );
};

export default HrProfileCollection;
