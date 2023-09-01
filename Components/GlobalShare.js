import { BsFillShareFill } from "react-icons/bs";

const GlobalShare = (props) => {
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
      <BsFillShareFill
        onClick={handleClick}
        className="cursor-pointer"
        fontSize={20}
      />
    </>
  );
};

export default GlobalShare;
