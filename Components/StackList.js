const items = [
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  {
    id: 1,
    subject: "Velit placeat sit ducimus non sed",
    sender: "Gloria Roberston",
    time: "1d ago",
    datetime: "2021-01-27T16:35",
    preview:
      "Doloremque dolorem maiores assumenda dolorem facilis. Velit vel in a rerum natus facere. Enim rerum eaque qui facilis. Numquam laudantium sed id dolores omnis in. Eos reiciendis deserunt maiores et accusamus quod dolor.",
  },
  // More items...
];

const StackList = (props) => {
  const switchArticleHandler = (type) => {
    switch (type) {
      case "single article":
        return (
          <div className=" relative bg-gray-100 w-full h-full shadow-lg py-5 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50">
            <div className=" ">
              <div className="min-w-0 flex-1 min-h-[200px]">
                <a href="/" className="block focus:outline-none">
                  <span className="absolute inset-0" aria-hidden="true" />
                  <p className="line-clamp-2 text-sm font-medium text-gray-900">
                    {props.data.title}
                  </p>
                  <p className="line-clamp-6 text-sm text-gray-500">
                    {props.data.shortDescription}
                  </p>
                </a>
              </div>
              <div className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500">
                {props.data.updatedDate}
              </div>
            </div>
          </div>
        );
      default:
        return (
          <ul role="list" className="divide-y divide-gray-200">
            {props.data?.map((item, index) => (
              <>
                <li
                  key={item.keyIndex}
                  className="relative bg-white py-5 px-4 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 hover:bg-gray-50"
                >
                  <div className="flex justify-between space-x-3">
                    <div className="min-w-0 flex-1">
                      <a href="#" className="block focus:outline-none">
                        <span className="absolute inset-0" aria-hidden="true" />
                        <p className="line-clamp-2 text-sm font-medium text-gray-900">
                          {item.title}
                        </p>
                        <p className="line-clamp-3 text-sm text-gray-500">
                          {item.shortDescription}
                        </p>
                      </a>
                    </div>
                    <time
                      dateTime={item.datetime}
                      className="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                    >
                      {item.time}
                    </time>
                  </div>
                  <div className="mt-1">
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {item.preview}
                    </p>
                  </div>
                </li>
              </>
            ))}
          </ul>
        );
    }
  };
  return switchArticleHandler(props.type);
};

export default StackList;
