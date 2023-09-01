import Image from "next/image";
// import topcompany from "../../public/JSON/topcompany.json";
import useRemoveSpaceUrl from "../CustomHook/useRemoveSpaceUrl";
const FeatureOrganizaion = (props) => {
  // const loader = () => {
  //   return (
  //    <div>loading</div>
  //   );
  // };
  return (
    <div className="bg-white">
      <div className="grid grid-cols-3 gap-2 ">
        {props.data?.map((item, index) => {
          return (
            <a
              href={
                item.name === "RozgaarIndia"
                  ? "/freelancer"
                  : `/NewCompanyProfile/${useRemoveSpaceUrl(
                    item.name || "company"
                  )}/${item.company_id}`
              }
              key={index}
            >
              <div
                className={
                  " hover:shadow shadow-[0_1px_10px_1px_rgba(0,0,0,0.1)]  "
                }
              >
                <div
                  className={
                    "h-24 w-full   relative hover:shadow shadow-[0_1px_10px_1px_rgba(0,0,0,0.1)]  [&>img]:p-2"
                  }
                >
                  <Image
                    // onLoad={loader}
                    priority
                    style={{ objectFit: "contain" }}
                    src={item.baseUrl + item.image}
                    fill
                    alt={item.name || "company"}
                    sizes="(max-width: 200px) 100vw"
                  // blurDataURL="https://timesascent.com/"
                  // placeholder="blur"
                  />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureOrganizaion;

{
  /* <div
className={
  "h-24 w-full   relative hover:shadow shadow-[0_1px_10px_1px_rgba(0,0,0,0.1)]  [&>img]:p-2"
}
>
<Image
  // onLoad={loader}
  priority
  style={{ objectFit: "contain" }}
  src={item.baseUrl + item.image}
  fill
  alt={item.name || "company"}
  sizes="(max-width: 200px) 100vw"
  blurDataURL="URL"
  placeholder="blur"
/>
</div> */
}
