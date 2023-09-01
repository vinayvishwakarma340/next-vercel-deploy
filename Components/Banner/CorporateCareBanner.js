import Image from "next/image";
import useDeviceWidth from "../CustomHook/useDeviceWidth";

const CorporateCareBanner = (props) => {
  let { width } = useDeviceWidth();
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <a href={props.data.redirectionDesktopUrl}>
      <div className={"w-full relative"}>
        <Image
          // loader={myLoader}
           
          src={props.data.desktopImageURL}
          width={1600}
          height={400}
          alt="TimesAscent  banner"
        />
      </div>
    </a>
  );
};

export default CorporateCareBanner;
