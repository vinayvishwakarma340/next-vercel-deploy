import useRemoveSpaceUrl from "../CustomHook/useRemoveSpaceUrl";

const SimilarCompany = (props) => {
  return (
    <div className="bg-white py-4 px-4">
      <div className="text-xl font-bold">Similar Company</div>
      <div className="">
        {props.topcompany.data &&
          props.topcompany?.data?.map((item, index) => {
            return (
              <a
                href={`/NewCompanyProfile/${useRemoveSpaceUrl(
                  item.name || "company"
                )}/${item.CompanyId}`}
                key={index}
                className=" "
              >
                <div className={"cursor-pointer text-sm text-gray-500 pt-3"}>
                  {item.name}
                </div>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default SimilarCompany;
