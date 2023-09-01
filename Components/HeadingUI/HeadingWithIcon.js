import { ArrowRightIcon } from "@heroicons/react/20/solid";

const HeadingWithIcon = (props) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <a
      title={props.href && ` Read More ${props.headingText}`}
      href={props.href}

      className={`${classNames(
        props.href ? "cursor-pointer" : "pointer-events-none"
      )}  inline-flex mb-2 items-center   hover:text-timesPurple`}
    >
      <h2 className="text-xl font-bold"> {props.headingText}</h2>
      {props.href && <div><ArrowRightIcon className="h-5 ml-2 " /></div>}
    </a>
  );
};

export const HeadingWithIconH1 = (props) => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <a
      title={props.href && ` Read more ${props.headingText}`}
      href={props.href}

      className={`${classNames(
        props.href ? "cursor-pointer" : "pointer-events-none"
      )}  inline-flex mb-2 items-center   hover:text-timesPurple`}
    >
      <h1 className="text-xl font-bold"> {props.headingText}</h1>
      {props.href && <ArrowRightIcon className="h-5 ml-2 " />}
    </a>
  );
};
export default HeadingWithIcon;
