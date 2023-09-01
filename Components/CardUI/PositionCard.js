import useRemoveSpaceUrl from "../CustomHook/useRemoveSpaceUrl";
const PositionCard = (props) => {
  return (
    <>
      <div className="bg-white  shadow-lg">
        <h3 className="p-2 text-base border-b-2 font-bold  ">
          {props.headingText}
        </h3>
        <ul role="list" className="divide-y divide-gray-200">
          {props.data?.map((item) => (
            <a
              href={`${useRemoveSpaceUrl(item.skill)}-jobs/designation`}
              key={item.keyIndex}
              className="flex py-2 cursor-pointer hover:bg-gray-50 "
            >
              <div className="ml-3">
                <p className="text-sm font-semibold ">{item.skill}</p>
                {item.numberOfPosition && (
                  <p className="text-sm ">Position : {item.numberOfPosition}</p>
                )}
              </div>
            </a>
          ))}
        </ul>
      </div>
      <div>
        <a
          href="/designation-jobs"

          type="submit"
          className="block w-full h-full cursor-pointer rounded-bl-md rounded-br-md  border border-transparent bg-timesPurple px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
        >
          View More
        </a>
      </div>
    </>
  );
};

export default PositionCard;
