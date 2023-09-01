import React, { useEffect } from "react";

const GoogleAd_300x250 = (props) => {
    const path = props.path;
    const size = props.size;
    const id = props.ads_Id;
    useEffect(() => {
        let addInterval;
        const loadAds = async () => {
            const googletag = (await window.googletag) || {};
            if (googletag.cmd) {
                await googletag.cmd.push(() => {
                    let defineSlot = googletag.defineSlot(path, size, id);

                    defineSlot.addService(googletag.pubads());
                    googletag.pubads().enableLazyLoad({
                        // Fetch slots within 5 viewports.
                        fetchMarginPercent: 500,
                        // Render slots within 2 viewports.
                        renderMarginPercent: 200,
                        // Double the above values on mobile, where viewports are smaller
                        // and users tend to scroll faster.
                        mobileScaling: 2.0,
                    });
                    /*   googletag.pubads().enableSingleRequest(); */
                    googletag.pubads().collapseEmptyDivs(true, true);
                    googletag.pubads().setCentering(true);
                    googletag.enableServices();

                    googletag.display(id);

                    addInterval = setInterval(() => {
                        googletag.pubads().refresh([defineSlot], { changeCorrelator: false });
                    }, 30000);

                });
            }
        };

        loadAds();
        // return () => clearInterval(addInterval);
        return () => {
            clearInterval(addInterval);
            const googletag = window.googletag || {};
            if (googletag.pubads) {
                googletag.pubads().clear();
            }
        };
    }, []);

    return (
        <>
            <div className={"w-[300px] h-[250px] m-auto bg-gray-100 "}>
                <div id={props.ads_Id}>{/* Advertisement */}</div>
            </div>
        </>
    );
};
// animate-pulse

const testAds = () => {
    return (
        <div>
            <GoogleAd_300x250
                path="/1064661/ta.com_mrec4_job"
                ads_Id="div-gpt-ad-1674555122258-0"
                size={[[300, 250]]}
            />

        </div>
    )
}

export default testAds