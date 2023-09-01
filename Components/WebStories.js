const WebStories = (props) => {
  return (
    <div className="group relative shadow-lg">
      <div className="h-96 w-full border overflow-hidden rounded-lg group-hover:opacity-75 sm:aspect-w-2 sm:aspect-h-3 sm:h-auto">
        <img
          src={props.data.Image}
          alt={"stories"}
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900">
          {props.data.Title}
        </h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-3 ">
          {props.data.Description}
        </p>
      </div>
    </div>
  );
};

export default WebStories;
