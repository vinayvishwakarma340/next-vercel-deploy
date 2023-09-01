import Image from "next/image";
import useRemoveSpaceUrl from "../../Components/CustomHook/useRemoveSpaceUrl";
const MomentProfessionalCard = (props) => {
  const onClickMop = (name, organization, mopId) => {
    return `/movement-of-professionals-detail/professionals/${useRemoveSpaceUrl(
      name
    )}/${useRemoveSpaceUrl(organization)}/${mopId}`;
  };
  return (
    <a
      href={onClickMop(
        props.data.Name,
        props.data.OrganizationName,
        props.data.MovementProfessionalID
      )}
      className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white p-2 shadow-sm focus-within:ring-2 focus-within:ring-timesPurple focus-within:ring-offset-2 hover:border-timesPurple"
    >
      <div className="flex-shrink-0 relative h-20 w-20 [&>img]:rounded-full">
        <Image
          src={props.data.ProfilePhoto}
          style={{ objectFit: "cover" }}
          fill
          alt="moment professional"
          // placeholder="blur"
          // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
        />
      </div>
      <div className="min-w-0 flex-1">
        <div className="focus:outline-none cursor-pointer">
          <span className="absolute inset-0" aria-hidden="true" />
          <p className="text-sm font-medium text-gray-900">{props.data.Name}</p>
          <p className="truncate text-sm text-timesPurple">
            {props.data.OrganizationName}
          </p>
          <p className="truncate text-sm text-gray-500">
            {props.data.Designation}
          </p>
        </div>
      </div>
    </a>
  );
};

export default MomentProfessionalCard;
