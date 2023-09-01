import React, { useEffect } from "react";

const GoogleAd_BHrec = (props) => {
  const size = props.size;
  const path = props.path;
  const id = props.ads_Id;
  useEffect(() => {
    let addInterval;
    const loadAds = async () => {
      const googletag = (await window.googletag) || {};
      if (googletag.cmd) {
        await googletag.cmd.push(() => {
          let defineSlot = googletag.defineSlot(path, size, id);

          defineSlot.addService(googletag.pubads());

          googletag.pubads().enableLazyLoad();
          googletag.pubads().enableLazyLoad({
            // Fetch slots within 5 viewports.
            fetchMarginPercent: 500,
            // Render slots within 2 viewports.
            renderMarginPercent: 200,
            // Double the above values on mobile, where viewports are smaller
            // and users tend to scroll faster.
            mobileScaling: 2.0,
          });

          googletag.enableServices();
          googletag.display(id);
          // addInterval = setInterval(() => {
          //   googletag.pubads().refresh([defineSlot]);
          // }, 30000);

        });
      }
    };

    loadAds();
    // return () => clearInterval(addInterval);
  }, []);

  return (
    <>
      <div
        className={
          "w-[320px] h-[100px] md:w-[750px] md:h-[200px] m-auto  bg-gray-100 "
        }
      >
        <div id={props.ads_Id}>{/* Advertisement */}</div>
      </div>
    </>
  );
};
export default GoogleAd_BHrec;

// animate-pulse
