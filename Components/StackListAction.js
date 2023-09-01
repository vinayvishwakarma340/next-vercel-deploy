const announcements = [
  {
    id: 1,
    title: "Office closed on July 2nd",
    preview:
      "Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut.Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.",
  },
  {
    id: 2,
    title: "New password policy",
    preview:
      "Alias inventore ut autem optio voluptas et repellendus.Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum.Culpa cum vel natus. Est sit autem mollitia.",
  },
  {
    id: 3,
    title: "Office closed on July 2nd",
    preview:
      "Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.",
  },
];

const StackListAction = () => {
  return (
    <div>
      <div className="mt-6 flow-root bg-white">
        <ul role="list" className="-my-5 divide-y divide-gray-200 bg-white">
          {announcements.map((announcement, index) => (
            <li key={index} className="p-5">
              <div className="relative focus-within:ring-2 focus- within:ring-indigo-500">
                <h3 className="text-sm font-semibold text-gray-800">
                  <a href="#" className="hover:underline focus:outline-none">
                    {/* Extend touch target to entire panel */}
                    <span className="absolute inset-0" aria-hidden="true" />

                    {announcement.title}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                  {announcement.preview}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="block w-full rounded-bl-md rounded-br-md  border border-transparent bg-timesPurple px-4 py-2 text-center text-sm font-medium text-white shadow-sm hover:bg-timesPurple focus:outline-none focus:ring-2 focus:ring-timesPurple focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
    </div>
  );
};
export default StackListAction;
