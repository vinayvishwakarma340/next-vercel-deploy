import React from 'react'

const JobIndustry = ({ industry }) => {
    return (
        <div className=" rounded-lg  bg-white shadow mt-6 lg:mt-0">
            <div className="px-6 pt-3 pb-6">
                <h2
                    id="who-to-follow-heading"
                    className="text-base font-medium text-gray-900"
                >
                    Industry
                </h2>
                <div className="mt-6 flow-root">
                    <ul
                        role="list"
                        className="-my-4 divide-y divide-gray-200"
                    >
                        {industry.slice(0, 7).map((user) => (
                            <li
                                key={user.name}
                                className="flex items-center space-x-3 py-2"
                            >
                                <div className="min-w-0 flex-1">
                                    <p className="text-sm font-medium text-gray-900">
                                        <a
                                            href={`/${user.name
                                                .replace(/[^a-zA-Z ]/g, " ")
                                                .split(" ")
                                                .join("-")
                                                .split(" ")
                                                .join("-")
                                                .split("--")
                                                .join("-")
                                                .toLowerCase()}-jobs/industry/${user.keyIndex
                                                }`}
                                        >
                                            {user.name}
                                        </a>
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        {user.Sname}
                                    </p>
                                </div>
                                <div className="flex-shrink-0">
                                    <button
                                        type="button"
                                        className="inline-flex items-center rounded-full bg-rose-50 px-3 py-0.5 text-sm font-medium text-rose-700 hover:bg-rose-100"
                                    >
                                        <span>{user.numberOfPosition}</span>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default JobIndustry