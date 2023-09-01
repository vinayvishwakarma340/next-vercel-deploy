import React from "react";
import {
  ArrowPathIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/router";
const JobsScroll = () => {
  const router = useRouter();
  const pathname = router.pathname;
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const extraMenuMobile = [
    {
      name: "Latest Jobs",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/latest-jobs",
      icon: ChartBarIcon,
    },
    {
      name: "Wednesday Jobs",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/wednesday-jobs",
      icon: ChartBarIcon,
    },
    {
      name: "Global Jobs",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/global-placement-jobs",
      icon: ArrowPathIcon,
    },
    {
      name: "Partner Jobs",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/partner-jobs",
      icon: Squares2X2Icon,
    },
    {
      name: "Government Job",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/government-jobs",
      icon: CursorArrowRaysIcon,
    },
    {
      name: "CXO Jobs",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/cxo-jobs",
      icon: ShieldCheckIcon,
    },
    {
      name: "Trending Jobs",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/trending-jobs",
      icon: ChartBarIcon,
    },
    {
      name: "Jobs this week",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/jobsthisweek",
      icon: Squares2X2Icon,
    },
    {
      name: "Freshers/Start-up Jobs",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/fresher-jobs",
      icon: Squares2X2Icon,
    },
    {
      name: "Technological Jobs",
      description:
        "Get all of your questions answered in our forums or contact support.",
      href: "/tech-jobs",
      icon: Squares2X2Icon,
    },
  ];

  return (
    <div className="w-full hide-scroll-bar  overflow-x-scroll flex flex-col    ">
      <div className="flex  w-max overflow-hidden">
        <ul className="flex flex-nowrap">
          {extraMenuMobile.map((item) => {
            return (
              <li
                className="mr-1  bg-purple-600 py-1 px-2 rounded last:mr-4"
                key={`menu-${item.name}`}
              >
                <a
                  className={classNames(
                    pathname === item.href
                      ? " text-sm border-b-2 rounded-l-sm rounded-r-sm leading-6 pb-[2px] border-gray-200 text-white font-semibold"
                      : " text-sm text-white font-semibold w-full"
                  )}
                  href={item.href}
                >
                  {item.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default JobsScroll;
