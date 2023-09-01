import React from "react";
import HeadingWithIcon from "../HeadingUI/HeadingWithIcon";
import ArticleBigCard from "./ArticleBigCard";
import ArticleSmallCard from "./ArticleSmallCard";
import GoogleAd_300x250 from "../GoogleAds/GoogleAd_300x250";
import SkeletonMrec from "../Skeleton/SkeletonMrec";
import { useRouter } from "next/router";

const BlogGridArticles = ({ data, adShow }) => {
  const router = useRouter();

  const blogMenu = [
    {
      name: "Recommended Read",
      description:
        "Display actions and initiatives at workplace that have helped your team.",
      href: "/articleslist/recommended-read",
      //icon: UsersIcon,
    },
    {
      name: "Featured Articles",
      description:
        "Digital audio series on various topics, accessible on-demand.",
      href: "/articleslist/featured-articles",
      //icon: MicrophoneIcon,
    },

    {
      name: "Career Development",
      description:
        "Face to face mock with our professionals and Industry Experts. ",
      href: "/articleslist/career-development",
      //icon: ClipboardDocumentIcon,
    },
    {
      name: "Voice of HR",
      description:
        "Tailor your resume for career events and highlight your achievements. ",
      href: "/articleslist/voice-of-hr",
      //icon: PencilSquareIcon,
    },
    // {
    //   name: "Interview Tips",
    //   description:
    //     "learn from mentors to discover and strengthen your career-building skills.",
    //   href: "/articleslist/interview-tips",
    //   //icon: UserGroupIcon,
    // },
    // {
    //   name: "Resume Writing",
    //   description:
    //     "learn from mentors to discover and strengthen your career-building skills.",
    //   href: "/resume-writing",
    //   //icon: UserGroupIcon,
    // },
    // {
    //   name: "Trending Articles",
    //   description:
    //     "learn from mentors to discover and strengthen your career-building skills.",
    //   href: "/mentorship/mentorkart",
    //   //icon: UserGroupIcon,
    // },
    // {
    //   name: "Recommended HR Read",
    //   description:
    //     "learn from mentors to discover and strengthen your career-building skills.",
    //   href: "/mentorship/mentorkart",
    //   //icon: UserGroupIcon,
    // },
    // {
    //   name: "Featured HR Content",
    //   description:
    //     "learn from mentors to discover and strengthen your career-building skills.",
    //   href: "/mentorship/mentorkart",
    //   //icon: UserGroupIcon,
    // },
    {
      name: "Guest Articles",
      description:
        "learn from mentors to discover and strengthen your career-building skills.",
      href: "/articleslist/featured-articles",
      //icon: UserGroupIcon,
    },
    {
      name: "Trending Articles for Women",
      description:
        "learn from mentors to discover and strengthen your career-building skills.",
      href: "/articleslist/articles-for-her",
      //icon: UserGroupIcon,
    },
    {
      name: "Inspirational Stories",
      description:
        "learn from mentors to discover and strengthen your career-building skills.",
      href: "/articleslist/inspirational-stories",
      //icon: UserGroupIcon,
    },
    // {
    //   name: "GMI",
    //   description:
    //     "learn from mentors to discover and strengthen your career-building skills.",
    //   href: "/great-manager-institute",
    //   //icon: UserGroupIcon,
    // },
  ];

  return (
    <div className="lg:flex justify-between items-start w-full gap-4">
      <div className=" w-full">
        <div className="">
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700 block lg:hidden">
            <ul
              className="flex overflow-x-auto hide-scroll-bar -mb-px text-sm font-medium text-center"
            // id="myTab"
            // data-tabs-toggle="#myTabContent"
            // role="tablist"
            >
              {blogMenu.map((item, index) => (
                <li key={index} className="mr-2 shrink-0" role="presentation">
                  <a
                    href={item.href}
                    className={index === 0 ? "inline-block p-4 border-b-2 border-timesPurple rounded-t-lg" : "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 "}
                    id="profile-tab"
                    data-tabs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="featuredArticles"
                    aria-selected="true"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:flex justify-between">
            <HeadingWithIcon
              headingText="Featured Articles"
              href="/articleslist/featured-articles"
            />

          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-2">
            <ArticleBigCard data={data[0]} />
            <div className="space-y-2 md:pl-2">
              {data.slice(1, 5).map((item) => {
                return <ArticleSmallCard key={item.KeyIndex} data={item} />;
              })}
              {/* <div className="flex justify-end mt-1 items-end">
                <a
                  href="/articleslist/featured-articles"
                  className="text-sm hover:underline text-timesPurple"
                >
                  Show more Articles &rarr;
                </a>
              </div> */}
            </div>
            <div className="h-full">
              <div className="space-y-2 md:pl-2">
                {data.slice(5, 6).map((item) => {
                  return <ArticleSmallCard key={item.KeyIndex} data={item} />;
                })}
              </div>
              <div className="flex justify-end mt-1 items-end mb-4 md:pr-4">
                <a
                  href="/articleslist/featured-articles"
                  className="text-sm hover:underline text-timesPurple"
                >
                  Show more Articles &rarr;
                </a>
              </div>
              {adShow ? (
                <GoogleAd_300x250
                  path="/1064661/ta.com_mrec1_Blogs"
                  ads_Id="div-gpt-ad-1674559646662-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
              {/* <div className="w-[300px] mt-4 mx-auto">
          <ArticleCardWithoutImg data={data[0]} />
        </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogGridArticles;
