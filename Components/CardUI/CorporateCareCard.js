import Image from "next/image";
import { useRouter } from "next/router";
import { removeSpaceLowerCase } from "../CustomHook/useRemoveSpaceUrl";
const CorporateCareCard = (props) => {
  const router = useRouter();
  const onClickCardHandler = (activityName, organizationName, weCareId) => {
    return `/csr-activity/${removeSpaceLowerCase(
      activityName
    )}/${removeSpaceLowerCase(organizationName)}/${weCareId}`;
  };

  return (
    <div
      onClick={() =>
        router.push(
          onClickCardHandler(
            props.data.ActivityName,
            props.data.OrganisationName,
            props.data.WeCareID
          )
        )
      }
      className="flex flex-col bg-white cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-2xl"
    >
      <div className="">
        <div className={"h-32  w-full  relative"}>
          <Image
            style={{ objectFit: "contain" }}
            src={props.data.CompanyLogo}
            fill
            alt={props.data.OrganisationName}
            // placeholder="blur"
            // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
          />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white px-4 pb-4 pt-2">
        <div className="flex-1">
          <div className="mt-1 block ">
            <p className="text-lg font-semibold text-gray-900 line-clamp-2">
              {props.data.ActivityName}
            </p>
            <p className="mt-1 text-sm font-semibold text-timesPurple  line-clamp-1">
              {props.data.OrganisationName}
            </p>
            <div
              className="mt-2 text-sm  line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: props.data.ActivityDescription,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateCareCard;

// href={`/csr-activity/${props.data.ActivityName.replace(
//   /[^a-zA-Z ]/g,
//   " "
// )
//   .split(" ")
//   .join("-")
//   .split(" ")
//   .join("-")
//   .split("--")
//   .join("-")
//   .split("---")
//   .join("-")}/${props.data.OrganisationName.replace(/[^a-zA-Z ]/g, " ")
//   .split(" ")
//   .join("-")
//   .split(" ")
//   .join("-")
//   .split("--")
//   .join("-")}/${props.data.WeCareID}`}
