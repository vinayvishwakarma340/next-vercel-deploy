import Image from "next/image";

const HeadingWithImage = (props) => {
  return (
    <div className="relative bg-purple-800 ">
      <div className="h-36  w-full absolute inset-0">
        <Image objectFit="cover" src={props.src} fill alt="heading image" />
        <div
          className=" absolute inset-0 bg-purple-800 mix-blend-multiply"
          aria-hidden="true"
        />
      </div>
      <div className="h-36  relative mx-auto  px-4 py-5 sm:p-6">
        <h1 className="text-lg md:text-2xl font-bold leading-6 text-white ">
          {props.heading}
        </h1>
        <p className="max-w-3xl mt-2 text-sm md:text-lg text-white">
          {props.subHeading}
        </p>
      </div>
    </div>
  );
};

export default HeadingWithImage;
