import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ArchiveBoxIcon,
  Bars3BottomLeftIcon,
  Bars4Icon,
  ClockIcon,
  HomeIcon,
  UserCircleIcon as UserCircleIconOutline,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  BellIcon,
  CalendarIcon,
  ChatBubbleLeftEllipsisIcon,
  CheckCircleIcon,
  LockOpenIcon,
  MagnifyingGlassIcon,
  PencilIcon,
  TagIcon,
  PlusIcon,
  UserCircleIcon as UserCircleIconMini,
} from "@heroicons/react/20/solid";
import MainHeader from "../Components/MainHeader";
import { forumDetail } from "./api/forumApi";
import BreadCrumbs from "../Components/BreadCrumbs";
import Head from "next/head";
import GoogleAd_300x250 from "../Components/GoogleAds/GoogleAd_300x250";

const forumdetail = ({ props }) => {
  const navigation = [
    { name: "All Issues", href: "#", icon: HomeIcon, current: true },
    { name: "My Issues", href: "#", icon: Bars4Icon, current: false },
    {
      name: "Assigned",
      href: "#",
      icon: UserCircleIconOutline,
      current: false,
    },
    { name: "Closed", href: "#", icon: ArchiveBoxIcon, current: false },
    { name: "Recent", href: "#", icon: ClockIcon, current: false },
  ];
  const projects = [
    { id: 1, name: "GraphQL API", href: "#" },
    { id: 2, name: "iOS App", href: "#" },
    { id: 3, name: "Marketing Site Redesign", href: "#" },
    { id: 4, name: "Customer Portal", href: "#" },
  ];
  const activity = [
    {
      id: 1,
      type: "comment",
      person: { name: "Eduardo Benz", href: "#" },
      imageUrl:
        "https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. ",
      date: "6d ago",
    },
    {
      id: 2,
      type: "assignment",
      person: { name: "Hilary Mahy", href: "#" },
      assigned: { name: "Kristin Watson", href: "#" },
      date: "2d ago",
    },
    {
      id: 3,
      type: "tags",
      person: { name: "Hilary Mahy", href: "#" },
      tags: [
        { name: "Bug", href: "#", color: "bg-rose-500" },
        { name: "Accessibility", href: "#", color: "bg-purple-500" },
      ],
      date: "6h ago",
    },
    {
      id: 4,
      type: "comment",
      person: { name: "Jason Meyers", href: "#" },
      imageUrl:
        "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt nunc ipsum tempor purus vitae id. Morbi in vestibulum nec varius. Et diam cursus quis sed purus nam. Scelerisque amet elit non sit ut tincidunt condimentum. Nisl ultrices eu venenatis diam.",
      date: "2h ago",
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const whoToFollow = [
    {
      name: "Leonard Krasner",
      handle: "leonardkrasner",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    // More people...
  ];
  const trendingPosts = [
    {
      id: 1,
      user: {
        name: "Floyd Miles",
        imageUrl:
          "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      body: "What books do you have on your bookshelf just to look smarter than you actually are?",
      comments: 291,
    },
    // More posts...
  ];

  const pages = [
    {
      name: "Forum",
      href: "/forum",
      current: true,
    },
    {
      name: "Froum Detail",
      href: "#",
      current: true,
    },
  ];

  return (
    <>
      <Head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://timesascent.com/",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Forum",
                  item: "https://timesascent.com/forum",
                },
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Forum Detail",
                },
              ],
            }),
          }}
        />
      </Head>
      <MainHeader />

      <div className="relative   py-4 container lg:py-4 bg-white">
        <BreadCrumbs data={pages} />
      </div>
      <div className=" min-h-full">
        {/* Static sidebar for desktop */}

        <div className="py-[2%] container">
          <div className="mx-auto  sm:px-6 lg:grid  lg:grid-cols-12 lg:gap-8 lg:px-8">
            <main className="lg:col-span-9 xl:col-span-8">
              <div className="px-4 sm:px-0">
                <div className="">
                  <div className="xl:col-span-2 xl:border-r xl:border-gray-200 xl:pr-8">
                    <div>
                      <div>
                        <div className="md:flex md:items-center md:justify-between md:space-x-4 xl:border-b xl:pb-6">
                          <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                              {props.forumData.data.Question}
                            </h1>
                            <p className="mt-2 text-sm text-gray-500">
                              #
                              {props.forumData.data.ForumQuestionID.substring(
                                props.forumData.data.ForumQuestionID.length - 5
                              )}
                            </p>
                          </div>
                          <div className="mt-4 flex space-x-3 md:mt-0">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                            >
                              <PencilIcon
                                className="-ml-1 mr-2 h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span>Write an answer</span>
                            </button>
                          </div>
                        </div>
                        <aside className="mt-8 ">
                          <h2 className="sr-only">Details</h2>
                          <div className="space-y-5">
                            <div className="flex items-center space-x-2">
                              <ChatBubbleLeftEllipsisIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="text-sm font-medium text-gray-900">
                                4 comments
                              </span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <CalendarIcon
                                className="h-5 w-5 text-gray-400"
                                aria-hidden="true"
                              />
                              <span className="text-sm font-medium text-gray-900">
                                Created on{" "}
                                <time dateTime="2020-12-02">Dec 2, 2020</time>
                              </span>
                            </div>
                          </div>
                          <div className="mt-6 space-y-8 border-t border-b border-gray-200 py-6">
                            <div>
                              <h2 className="text-sm font-medium text-gray-500">
                                Asked by
                              </h2>
                              <ul role="list" className="mt-3 space-y-3">
                                <li className="flex justify-start">
                                  <a
                                    href="#"
                                    className="flex items-center space-x-3"
                                  >
                                    <div className="flex-shrink-0">
                                      <img
                                        className="h-5 w-5 rounded-full"
                                        src="https://images.unsplash.com/photo-1520785643438-5bf77931f493?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                        alt=""
                                      />
                                    </div>
                                    <div className="text-sm font-medium text-gray-900">
                                      {props.forumData.data.Name}
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h2 className="text-sm font-medium text-gray-500">
                                Tags
                              </h2>
                              <ul role="list" className="mt-2 leading-8">
                                <li className="inline">
                                  <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                                  >
                                    <div className="absolute flex flex-shrink-0 items-center justify-center">
                                      <span
                                        className="h-1.5 w-1.5 rounded-full bg-rose-500"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div className="ml-3.5 text-sm font-medium text-gray-900">
                                      Bug
                                    </div>
                                  </a>{" "}
                                </li>
                                <li className="inline">
                                  <a
                                    href="#"
                                    className="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5"
                                  >
                                    <div className="absolute flex flex-shrink-0 items-center justify-center">
                                      <span
                                        className="h-1.5 w-1.5 rounded-full bg-purple-500"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div className="ml-3.5 text-sm font-medium text-gray-900">
                                      Accessibility
                                    </div>
                                  </a>{" "}
                                </li>
                              </ul>
                            </div>
                          </div>
                        </aside>
                        <div className="py-3 xl:pt-6 xl:pb-0">
                          <h2 className="sr-only">Description</h2>
                          <div className="prose max-w-none">
                            <p>{props.forumData.data.Answer}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <section
                      aria-labelledby="activity-title"
                      className="mt-8 xl:mt-10"
                    >
                      <div>
                        <div className="divide-y divide-gray-200">
                          <div className="pb-4">
                            <h2
                              id="activity-title"
                              className="text-lg font-medium text-gray-900"
                            >
                              Activity
                            </h2>
                          </div>
                          <div className="pt-6">
                            {/* Activity feed*/}
                            <div className="flow-root">
                              <ul role="list" className="-mb-8">
                                {activity.map((item, itemIdx) => (
                                  <li key={item.id}>
                                    <div className="relative pb-8">
                                      {itemIdx !== activity.length - 1 ? (
                                        <span
                                          className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                                          aria-hidden="true"
                                        />
                                      ) : null}
                                      <div className="relative flex items-start space-x-3">
                                        {item.type === "comment" ? (
                                          <>
                                            <div className="relative">
                                              <img
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400 ring-8 ring-white"
                                                src={item.imageUrl}
                                                alt=""
                                              />

                                              <span className="absolute -bottom-0.5 -right-1 rounded-tl bg-white px-0.5 py-px">
                                                <ChatBubbleLeftEllipsisIcon
                                                  className="h-5 w-5 text-gray-400"
                                                  aria-hidden="true"
                                                />
                                              </span>
                                            </div>
                                            <div className="min-w-0 flex-1">
                                              <div>
                                                <div className="text-sm">
                                                  <a
                                                    href={item.person.href}
                                                    className="font-medium text-gray-900"
                                                  >
                                                    {item.person.name}
                                                  </a>
                                                </div>
                                                <p className="mt-0.5 text-sm text-gray-500">
                                                  Commented {item.date}
                                                </p>
                                              </div>
                                              <div className="mt-2 text-sm text-gray-700">
                                                <p>{item.comment}</p>
                                              </div>
                                            </div>
                                          </>
                                        ) : item.type === "assignment" ? (
                                          <></>
                                        ) : (
                                          <></>
                                        )}
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div className="mt-6">
                              <div className="flex space-x-3">
                                <div className="flex-shrink-0"></div>
                                <div className="min-w-0 flex-1">
                                  <form action="#" className="mt-4">
                                    <div className="mb-3">
                                      <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Name
                                      </label>
                                      <div className="mt-1">
                                        <input
                                          type="text"
                                          name="name"
                                          id="name"
                                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                          placeholder="Your name"
                                        />
                                      </div>
                                    </div>
                                    <div className="mb-3">
                                      <label
                                        htmlFor="email"
                                        className="block text-sm font-medium text-gray-700"
                                      >
                                        Email
                                      </label>
                                      <div className="mt-1">
                                        <input
                                          type="email"
                                          name="email"
                                          id="email"
                                          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                          placeholder="you@example.com"
                                        />
                                      </div>
                                    </div>
                                    <div>
                                      <label
                                        htmlFor="comment"
                                        className="sr-only"
                                      >
                                        Comment
                                      </label>
                                      <textarea
                                        id="comment"
                                        name="comment"
                                        rows={3}
                                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-gray-900 focus:ring-gray-900 sm:text-sm"
                                        placeholder="Leave a comment"
                                        defaultValue={""}
                                      />
                                    </div>
                                    <div className="mt-6 flex items-center justify-end space-x-4">
                                      <button
                                        type="submit"
                                        className="inline-flex items-center justify-center rounded-md border border-transparent bg-gray-900 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2"
                                      >
                                        Comment
                                      </button>
                                    </div>
                                  </form>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            </main>
            <aside className="hidden xl:col-span-4 xl:block">
              <div className="sticky top-4 space-y-4">
                <section aria-labelledby="who-to-follow-heading">
                  <div className="rounded-lg bg-white shadow">
                    <div className="p-6">
                      <h2
                        id="who-to-follow-heading"
                        className="text-base font-medium text-gray-900"
                      >
                        Who to follow
                      </h2>
                      <div className="mt-6 flow-root">
                        <ul
                          role="list"
                          className="-my-4 divide-y divide-gray-200"
                        >
                          {whoToFollow.map((user) => (
                            <li
                              key={user.handle}
                              className="flex items-center space-x-3 py-4"
                            >
                              <div className="flex-shrink-0">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={user.imageUrl}
                                  alt=""
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-medium text-gray-900">
                                  <a href={user.href}>{user.name}</a>
                                </p>
                                <p className="text-sm text-gray-500">
                                  <a href={user.href}>{"@" + user.handle}</a>
                                </p>
                              </div>
                              <div className="flex-shrink-0">
                                <button
                                  type="button"
                                  className="inline-flex items-center rounded-full bg-rose-50 px-3 py-0.5 text-sm font-medium text-rose-700 hover:bg-rose-100"
                                >
                                  <PlusIcon
                                    className="-ml-1 mr-0.5 h-5 w-5 text-rose-400"
                                    aria-hidden="true"
                                  />
                                  <span>Follow</span>
                                </button>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                </section>

                <div className="mt-6 md:mt-0 right-side md:ml-[20px] md:w-[300px]">
                  <GoogleAd_300x250
                    path="/22637491760/timesascent.com_erelego_hp_m_300x250"
                    ads_Id="div-gpt-ad-1667455336584-0"
                    size={[[300, 250]]}
                  />
                </div>
                <section aria-labelledby="trending-heading">
                  <div className="rounded-lg bg-white shadow">
                    <div className="p-6">
                      <h2
                        id="trending-heading"
                        className="text-base font-medium text-gray-900"
                      >
                        Trending
                      </h2>
                      <div className="mt-6 flow-root">
                        <ul
                          role="list"
                          className="-my-4 divide-y divide-gray-200"
                        >
                          {trendingPosts.map((post) => (
                            <li key={post.id} className="flex space-x-3 py-4">
                              <div className="flex-shrink-0">
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={post.user.imageUrl}
                                  alt={post.user.name}
                                />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm text-gray-800">
                                  {post.body}
                                </p>
                                <div className="mt-2 flex">
                                  <span className="inline-flex items-center text-sm">
                                    <button
                                      type="button"
                                      className="inline-flex space-x-2 text-gray-400 hover:text-gray-500"
                                    >
                                      <ChatBubbleLeftEllipsisIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                      <span className="font-medium text-gray-900">
                                        {post.comments}
                                      </span>
                                    </button>
                                  </span>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="block w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                        >
                          View all
                        </a>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const forumData = await forumDetail();

  const props = {
    forumData,
  };

  return { props: { props } };
}

export default forumdetail;
