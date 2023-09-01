import {
   
    ShareIcon,
 
  } from "@heroicons/react/20/solid";

const SocialShare = (props) => {
  const shareData = {
    url: props.url,
  };
  const handleClick = async () => {
    try {
      await navigator.share(shareData);
    } catch (e) {
      if (e.toString().includes("AbortError")) {
        console.log("share modal closed");
      }
    }
  };

  return (
    <>
     
      <button
           onClick={handleClick}
          type="button"
          className="flex items-center w-1/2 bg-white p-2 justify-center text-indigo-600"
        >
          <ShareIcon className="h-6 w-6 " aria-hidden="true" />
          <span className="font-medium pl-2">Share</span>
        </button>
    </>
  );
};

export default SocialShare;
