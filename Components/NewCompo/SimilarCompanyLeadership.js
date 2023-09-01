import useRemoveSpaceUrl from "../CustomHook/useRemoveSpaceUrl";

const SimilarCompanyLeadership = (props) => {
  return (
    <div className="bg-white py-4 px-4">
      <div className="text-xl font-bold">Similar Leadership Factory</div>
      <div className="">
        {props.topcompany &&
          props.topcompany?.map((item, index) => {
            return (
              <a
                href={"/" + item.LeadershipSeoURL}
                key={index}
                className=" "
              >
                <div className={"cursor-pointer text-sm text-gray-500 pt-3"}>
                  {item.CompanyName}
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default SimilarCompanyLeadership;
