const JobPositionCard = (props) => {
  return (
    <>
      <div className="bg-white  shadow-md p-4 ">
        <h3 className="px-2 pb-2  text-lg font-semibold mb-4 border-b-2 border-puple-50">
          {props.headingText}
        </h3>
        <ul role="list" className="divide-y divide-gray-200">
          {props.data?.map((item) => (
            <a

              href={
                item.positionTitle
                  .replace(/[^a-zA-Z ]/g, " ")
                  .split("  ")
                  .join("-")
                  .split(" ")
                  .join("-")
                  .split("--")
                  .join("-") + "-jobs-in-india"
              }
            >
              <li
                key={item.keyIndex}
                className="flex cursor-pointer py-2 hover:bg-gray-50 "
              >
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">
                    {item.positionTitle}
                  </p>
                </div>
              </li>
            </a>
          ))}
        </ul>
      </div>{" "}
      <a
        href="/jobs-in-india"

        className="block w-full rounded-bl-md rounded-br-md  border border-transparent bg-timesPurple px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
      >
        {props.buttonText}
      </a>
    </>
  );
};

export default JobPositionCard;
