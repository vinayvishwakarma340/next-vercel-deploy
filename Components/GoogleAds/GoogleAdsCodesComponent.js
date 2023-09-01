import React, { useEffect } from "react";
import classes from "../../styles/GoogleAdsCodesComponent.module.css";

const GoogleAdsCodesComponent = React.memo((props) => {
  const path = props.path;
  const size = props.size;
  const id = props.ads_Id;
  const mapping = props.mapping;
  let addInterval;
  useEffect(() => {
    const googletag = window.googletag || {};

    if (googletag.cmd) {
      googletag.cmd.push(function () {
        var mapping1 = googletag
          .sizeMapping()
          .addSize([992, 0], [[728, 90]])
          .addSize([320, 0], [[300, 50]])
          .build();

        var mapping2 = googletag
          .sizeMapping()
          .addSize([992, 0], [[300, 600]])
          .build();

        var mapping3 = googletag
          .sizeMapping()
          .addSize([992, 0], [[300, 250]])
          .build();

        var mapping4 = googletag
          .sizeMapping()
          .addSize([992, 0], [[970, 90]])
          .addSize([320, 0], [[300, 50]])
          .build();

        var mapping5 = googletag
          .sizeMapping()
          .addSize([992, 0], [[640, 480]])
          .addSize([320, 0], [[320, 480]])
          .build();

        let defineSlot = googletag.defineSlot(path, size, id);

        if (defineSlot) {
          defineSlot
            .defineSizeMapping(
              mapping === "mapping2"
                ? mapping2
                : mapping === "mapping3"
                  ? mapping3
                  : mapping === "mapping4"
                    ? mapping4
                    : mapping === "mapping5"
                      ? mapping5
                      : mapping1
            )
            .addService(googletag.pubads());
        }

        googletag.pubads().enableSingleRequest();
        googletag.pubads().collapseEmptyDivs(true, true);
        googletag.pubads().setCentering(true);
        googletag.enableServices();
        googletag.display(id);

        // var refreshIntervalId = setInterval(googletag.pubads().refresh([defineSlot]), 30000);

        // clearInterval(refreshIntervalId);

        // addInterval = setInterval(() => {
        //   googletag.pubads().refresh([defineSlot]);
        // }, 30000);
      });


    }
    // return () => clearInterval(addInterval)
  }, [path, size, id]);

  return (
    <>
      <div
        className={`${props.style} ${classes.adComp}`}
        style={{ height: props.size[0][1], width: props.size[0][0] }}
      >
        <div id={props.ads_Id}>{/* Advertisement */}</div>
      </div>
    </>
  );
});
export default GoogleAdsCodesComponent;
