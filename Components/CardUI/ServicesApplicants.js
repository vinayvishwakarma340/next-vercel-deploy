const ServicesApplicants = (props) => {
    return (
      <a href={props.data.href} className=" relative  w-full h-full  hover:bg-gray-50">
        <div className="flex flex-col justify-between h-full border-b border-slate-200 pb-4">
          <div>
            <span className="absolute inset-0" aria-hidden="true" />
            <p className="line-clamp-2 text-md mb-2 font-semibold text-indigo-500">
              {props.data.title}
            </p>
            <p className="line-clamp-5 text-sm text-gray-500">
              {props.data.shortDescription}
            </p>
          </div>
          
        </div>
      </a>
    );
  };
  
  export default ServicesApplicants;
  