import { ImLocation2 } from "react-icons/im";

const HRprofessionals = (props) => {
  const switchHrProfessionalHandler = (type) => {
    switch (type) {
      case "single profile":
        return (
          <div className="flex items-center cursor-pointer space-x-4 lg:space-x-6">
            <img
              className="h-16 w-16 rounded-full lg:h-20 lg:w-20 transition-all duration-200 hover:scale-125"
              src={props.data.profilePicture}
              alt=""
            />
            <div className="space-y-1  font-medium leading-6">
              <h3 className="text-lg">{props.data.fullName}</h3>
              <p className="text-timesPurple">{props.data.designation}</p>
              <p className="text-sm flex items-center">
                <span>
                  <ImLocation2 className="text-sm text-gray-400 mr-2" />
                </span>
                {props.data.location}
              </p>
            </div>
          </div>
        );
      default:
        return (
          <div className="bg-white">
            <div className="mx-auto  p-4 sm:p-6 ">
              <div className="grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8">
                <div className="space-y-5 sm:space-y-4">
                  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                    Industry's Leading HR Professionals
                  </h2>
                  <p className="text-lg text-gray-500">
                    Libero fames augue nisl porttitor nisi, quis. Id ac elit
                    odio vitae elementum enim vitae ullamcorper suspendisse.
                    Vivamus fringilla. vitae elementum enim vitae ullamcorper
                    suspendisse. Vivamus fringilla.
                  </p>
                </div>
                <div className="lg:col-span-2">
                  <ul
                    role="list"
                    className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-6"
                  >
                    {props.data?.map((item) => (
                      <li key={item.id}>
                        <div className="flex items-center space-x-4 lg:space-x-6">
                          <img
                            className="h-16 w-16 rounded-full lg:h-20 lg:w-20"
                            src={item.profilePicture}
                            alt=""
                          />
                          <div className="space-y-1  font-medium leading-6">
                            <h3 className="text-lg">{item.fullName}</h3>
                            <p className="text-timesPurple">
                              {item.designation}
                            </p>
                            <p className="text-sm flex items-center">
                              <span>
                                <ImLocation2 className="text-sm text-gray-400 mr-2" />
                              </span>
                              {item.location}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="text-center font-medium">
                <button className="mx-auto mt-8 text-timesRed hover:underline">
                  View Detail
                </button>
              </div>
            </div>
          </div>
        );
    }
  };
  return switchHrProfessionalHandler(props.type);
};
export default HRprofessionals;
