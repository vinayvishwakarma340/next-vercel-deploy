import { useRouter } from "next/router";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tabs = (props) => {
  const router = useRouter();

  const onChangeHandler = (tab) => {
    router.push(tab);
  };
  return (
    <div>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>

        <select
          id="tabs"
          name="tabs"
          onChange={(e) => onChangeHandler(e.target.value)}
          className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
        >
          {props.tabsMobile.map((tab) => (
            <option key={tab.name} value={tab.href}>
              {tab.name}
            </option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {props.tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href}
                className={classNames(
                  "border-transparent text-gray-500 hover:text-timesPurple hover:border-gray-300 group inline-flex items-center py-4 px-1 border-b-2 font-medium text-md"
                )}
                aria-current={tab.current ? "page" : undefined}
              >
                <tab.icon
                  className={classNames(
                    "text-gray-400  group-hover:text-timesPurple -ml-0.5 mr-2 h-5 w-5"
                  )}
                  aria-hidden="true"
                />
                <span>{tab.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};
export default Tabs;
