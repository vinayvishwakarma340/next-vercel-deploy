import React, { useEffect } from "react";

const GoogleAd_728x90 = (props) => {
  const path = props.path;
  const id = props.ads_Id;
  const size = props.isMobile ? [[300, 50]] : [[728, 90]];

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
          "w-[300px] h-[50px] md:w-[728px] sm:h-[90px] m-auto  bg-gray-100 "
        }
      >
        <div id={props.ads_Id}>{/* Advertisement */}</div>
      </div>
    </>
  );
};
export default GoogleAd_728x90;

// animate-pulse
