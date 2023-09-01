import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid";

const BreadCrumbs = (props) => {
  return (
    <nav className="flex " aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-1">
        <li>
          <div>
            <a href="/" className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </a>
          </div>
        </li>
        {props.data.map((page, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              <a
                href={page.href}
                className="ml-1 text-sm font-medium text-gray-500 hover:text-gray-700 line-clamp-1"
                aria-current={page.current ? "page" : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default BreadCrumbs;
