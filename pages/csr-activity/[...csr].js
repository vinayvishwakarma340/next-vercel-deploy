import React, { useState, useEffect, useRef } from "react";
import {
  DocumentDuplicateIcon,
  EnvelopeIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import MainHeader from "../../Components/MainHeader";
import { Fragment } from "react";
import { Menu, Popover, Transition } from "@headlessui/react";
import {
  AcademicCapIcon,
  BanknotesIcon,
  Bars3Icon,
  BellIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
// import SimilarJob from "../../Components/jobs/JobDetail/SimilarJob";
import RelatedArticle from "../../Components/ArticleDetail/RelatedArticle";
import {
  GetArticleDetails,
  RecommendedArticles,
  WeCareDetail,
} from "../api/articleApi";
import ArticleWithoutImgCollection from "../../Components/CardCollection/ArticleWithoutImgCollection";
import getarticlewithoutimagearticle from "../../public/JSON/getarticlewithoutimagearticle.json";
import { useRouter } from "next/router";
import Head from "next/head";
import ServicesforApplicants from "../../Components/CardCollection/ServicesforApplicants";
import InfiniteScroll from "react-infinite-scroll-component";
import { useCallback } from "react";
import BreadCrumbs from "../../Components/BreadCrumbs";
import Footer from "../../Components/Footer";
import Image from "next/image";
import useRemoveSpaceUrl from "../../Components/CustomHook/useRemoveSpaceUrl";
import copy from "copy-to-clipboard";
import PrimayWidgetNew from "../../Components/Widget/PrimayWidgetNew";
import * as gtag from "../../lib/gtag";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
import GlobalShare from "../../Components/GlobalShare";

const csr = (props) => {
  // const [articlesdata, setArticlesdata] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [success, setSuccess] = useState(false);

  const [posts, setPosts] = useState("");
  const [nextid, setNextid] = useState(props.props.ArticlesData.newarticleid);
  const [banner, setBanner] = useState(false);
  const [deviceType, setDeviceType] = useState("");

  const router = useRouter();
  useEffect(() => {
    setPosts(props.props.ArticlesData.data);
    CheckSourceDevice();
  }, []);

  useEffect(() => {
    Event();
  }, [posts.OrganisationName]);

  const CheckSourceDevice = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Windows Phone/i.test(
        navigator.userAgent
      )
    ) {
      setDeviceType("Mobile");
    } else {
      setDeviceType("Desktop");
    }
  };
  const Event = () => {
    gtag.event({
      action: posts.OrganisationName,
      category: "Company Impressions",
      label: router.asPath,
    });
    gtag.event({
      action: posts.ActivityName,
      category: "Article Impressions",
      label: posts.WeCareID,
    });
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const textAreaRef = useRef(null);

  const copyToClipboard = (e) => {
    textAreaRef.current.select();
    document.execCommand("copy");
    setSuccess(true);
  };

  const user = {
    name: "Airports Authority of India",
    email: "chelsea.hagon@example.com",
    role: "New Delhi",
    imageUrl:
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  const navigation = [
    { name: "About", href: "#", current: true },
    { name: "Industry", href: "#", current: false },
    { name: "Jobs", href: "#", current: false },
    { name: "Contact", href: "#", current: false },
  ];
  const userNavigation = [
    { name: "Your Profile", href: "#" },
    { name: "Settings", href: "#" },
    { name: "Sign out", href: "#" },
  ];
  const stats = [
    { label: "Jobs", value: 12 },
    { label: "Position", value: 4 },
    { label: "Locations", value: 2 },
  ];
  const actions = [
    {
      icon: ClockIcon,
      name: "About Airports Authority of India",
      about:
        "Airports Authority of India (AAI) was constituted by an Act of Parliament and came into being on 1st April 1995 by merging erstwhile National Airports Authority and International Airports Authority of India. The merger brought into existence a single Organization entrusted with the responsibility of creating, upgrading, maintaining and managing civil aviation infrastructure both on the ground and air space in the country. AAI manages 137 airports, which include 24 International Airports (including 3 International Civil Enclaves), 10 Customs Airports (including 4 Customs Civil Enclaves), 80 Domestic Airports and 23 Domestic Civil Enclaves at Defence airfields. AAI also provides Air Traffic Management Services (ATMS) over entire Indian Air Space and adjoining oceanic areas with ground installations at all Airports and 25 other locations to ensure safety of Aircraft operations.",
      href: "#",
      iconForeground: "text-teal-700",
      iconBackground: "bg-teal-50",
    },
    {
      icon: CheckBadgeIcon,
      name: "Industry",
      about: "Travel/Tourism/Airlines",
      href: "#",
      iconForeground: "text-purple-700",
      iconBackground: "bg-purple-50",
    },
    {
      icon: UsersIcon,
      name: "Connect with Airport Authority",
      about: "Webiste:",
      href: "#",
      iconForeground: "text-sky-700",
      iconBackground: "bg-purple-50",
    },
  ];
  const recentHires = [
    {
      name: "Leonard Krasner",
      handle: "leonardkrasner",
      imageUrl:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    {
      name: "Floyd Miles",
      handle: "floydmiles",
      imageUrl:
        "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    {
      name: "Emily Selman",
      handle: "emilyselman",
      imageUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
    {
      name: "Kristin Watson",
      handle: "kristinwatson",
      imageUrl:
        "https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      href: "#",
    },
  ];
  const announcements = [
    {
      id: 1,
      title: "Office closed on July 2nd",
      href: "#",
      preview:
        "Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.",
    },
    {
      id: 2,
      title: "New password policy",
      href: "#",
      preview:
        "Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.",
    },
    {
      id: 3,
      title: "Office closed on July 2nd",
      href: "#",
      preview:
        "Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.",
    },
  ];

  const socialnavigation = {
    main: [
      { name: "About", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Jobs", href: "#" },
      { name: "Press", href: "#" },
      { name: "Accessibility", href: "#" },
      { name: "Partners", href: "#" },
    ],
    social: [
      {
        name: "Facebook",
        href: "#",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "Instagram",
        href: "#",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "Twitter",
        href: "#",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        ),
      },
      {
        name: "GitHub",
        href: "#",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
      {
        name: "Dribbble",
        href: "#",
        icon: (props) => (
          <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
            <path
              fillRule="evenodd"
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  };

  const ServicesApplicants = [
    {
      title: "Times Ascent Jobs",
      shortDescription: "End your search for the perfect employer",
      href: "/latest-jobs",
    },
    {
      title: "Resume and Cover Letter",
      shortDescription: "Get your CV made professionally",
    },
    {
      title: "Interview & Group Discussion",
      shortDescription: "Crack the secrets with our tips and tricks",
      href: "/interview-gd-prep",
    },
    {
      title: "Work from Home",
      shortDescription: "Learn more about remote working",
    },
    {
      title: "Courses",
      shortDescription:
        "Upksill your career with the best professional programs",
      href: "/courses",
    },
  ];

  const widgetThree = {
    name: "Get a Free confidential review from a resume expert",
    description: "Upload your resume and get expert resume analysis",
    icon: AcademicCapIcon,
    src: "/mentorIcon/TopResume.webp",
    btnText: "Upload Resume",
    href: "/top-resume",
  };

  const MinsToRead = (wordCount) => {
    if (wordCount < 200) {
      return <div>Less than one minute to read</div>;
    } else {
      var count = Math.ceil(wordCount / 200);
      return <div>{count} minutes to read</div>;
    }
  };

  const pages = [
    {
      name: "Corporates Care",
      href: "https://timesascent.com/corporates-care",
      current: true,
    },
    {
      name: posts.OrganisationName,
      current: true,
    },
  ];

  return (
    <>
      <Head>
        <title> {posts.OrganisationName}</title>
        <link
          rel="canonical"
          href={`/csr-activity/${posts.ActivityName?.replace(/[^a-zA-Z ]/g, " ")
            .split("  ")
            .join("-")
            .split(" ")
            .join("-")
            .split("--")
            .join("-")
            .toLowerCase()}/${posts.OrganisationName?.replace(
              /[^a-zA-Z ]/g,
              " "
            )
              .split("  ")
              .join("-")
              .split(" ")
              .join("-")
              .split("--")
              .join("-")
              .toLowerCase()}/${posts.WeCareID}`}
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={posts.ActivityName} />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta property="og:title" content={posts.OrganisationName} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={posts.ActivityName} />
        <meta
          property="og:url"
          content={`/csr-activity/${posts.ActivityName?.replace(
            /[^a-zA-Z ]/g,
            " "
          )
            .split("  ")
            .join("-")
            .split(" ")
            .join("-")
            .split("--")
            .join("-")
            .toLowerCase()}/${posts.OrganisationName?.replace(
              /[^a-zA-Z ]/g,
              " "
            )
              .split("  ")
              .join("-")
              .split(" ")
              .join("-")
              .split("--")
              .join("-")
              .toLowerCase()}/${posts.WeCareID}`}
        />
        <meta property="og:image" content={posts.CompanyLogo} />
        <meta
          property="twitter:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta property="twitter:title" content={posts.OrganisationName} />
        <meta property="twitter:description" content={posts.ActivityName} />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:site"
          content="https://twitter.com/@timesascent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
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
                  position: 1,
                  name: "Corporates Care",
                  item: "https://timesascent.com/corporates-care",
                },
                {
                  "@type": "ListItem",
                  position: 1,
                  name: posts.OrganisationName,
                  item: "https://timesascent.com" + router.asPath
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: posts.OrganisationName,
              image: posts.CompanyLogo,
              datePublished: posts.EventDate,
              dateModified: posts.EventDate,
              url: `${"https://timesascent.com" + router.asPath}`,
              about: posts.ActivityDescription,
              isAccessibleForFree: "true",
              author: {
                "@type": "Person",
                name: posts.AuthorName,
                url: `${"https://timesascent.com" + router.asPath}`,
              },
            }),
          }}
        />
      </Head>
      <MainHeader />
      <div className="relative   py-4 container lg:py-4 bg-white">
        <BreadCrumbs data={pages} />
      </div>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div>
        <div className="min-h-full">
          <div className=" h-[400px] w-full relative  bg-purple-800 backdrop-blur ">
            {/* Logo */}

            <div
              className="absolute inset-0 bg-purple-800 mix-blend-multiply"
              aria-hidden="true"
            />
            <div className="flex ">
              <div className="absolute inset-0  mx-auto px-6 max-w-3xl lg:max-w-7xl pt-[20%] sm:pt-[5%] rounded ">
                <Image
                  src={posts.CompanyLogo}
                  alt={posts.OrganisationName}
                  width={100}
                  height={100}
                  className="rounded"
                />
              </div>
              <div className="absolute inset-0  mx-auto px-6 max-w-3xl lg:max-w-7xl pt-[20%] sm:pt-[5%] pl-36">
                <h1 className="text-lg sm:text-xl   text-white font-bold ">
                  {posts.OrganisationName}
                </h1>
                <h2 className="text-gray-300 text-base">
                  {`${posts.ActivityName}`}
                </h2>
                <h3 className="text-gray-300 pt-2 sm:pt-4 font-bold">
                  {" "}
                  {MinsToRead(posts.ActivityDescription?.split(" ").length)}
                </h3>
              </div>
            </div>

            <div className="w-full py-5 lg:border-t lg:border-white lg:border-opacity-20"></div>

            {/* Menu button */}
          </div>

          <main className="-mt-32 pb-8 relative">
            <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
              <h1 className="sr-only">Profile</h1>
              {/* Main 3 column grid */}
              <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
                {/* Left column */}
                <div className="grid grid-cols-1 gap-4 lg:col-span-2">
                  {/* Welcome panel */}
                  <section aria-labelledby="profile-overview-title">
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                      <h2 className="sr-only" id="profile-overview-title">
                        Profile Overview
                      </h2>
                      <div className="bg-white p-6">
                        <div className="sm:flex sm:items-center sm:justify-between">
                          <div className="text-gray-500 mr-8">
                            {" "}
                            <span className="font-bold text-black">
                              {" "}
                              {posts.AuthorName}
                            </span>{" "}
                            | {posts.EventDate}
                          </div>

                          {/* <div className=" flex justify-center space-x-6">
                                                          {socialnavigation.social.map((item) => (
                                                              <a key={item.name} href={item.href} className="text-gray-400 hover:text-gray-500">
                                                                  <span className="sr-only">{item.name}</span>
                                                                  <item.icon className="h-6 w-6" aria-hidden="true" />
                                                              </a>
                                                          ))}
                                                      </div> */}
                          {/* <span
                                onClick={() => setShowModal(!showModal)}
                                className={classNames(
                                  "text-sky-700",
                                  "bg-purple-100",
                                  "cursor-pointer rounded-lg inline-flex p-3 ring-4 ring-white my-2"
                                )}
                              >
                                <ShareIcon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </span> */}
                        </div>
                        <div className="text-sm">{posts.CompanySector}</div>
                        {/* {showModal && (
                              <div className="bg-white border shadow mt-4 py-4 sm:px-10 px-4">
                                <div className="flex flex-wrap sm:flex sm:flex-wrap">
                                  <a
                                    href={`https://facebook.com/sharer/sharer.php?u=https://timesascent.com/${router.asPath}`}
                                   
                                    className="flex items-center w-1/2 sm:w-1/3 mt-2 sm:mt-3"
                                  >
                                    {" "}
                                    <div className="w-6 h-6 mr-2">
                                      <svg
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        {...props}
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </div>
                                    <div>Facebook</div>
                                  </a>
                                  <a
                                    href={`https://web.whatsapp.com/send?text=https://timesascent.com/${router.asPath}`}
                                    target={"_self"}
                                    className="flex items-center w-1/2 sm:w-1/3 mt-2 sm:mt-3"
                                  >
                                    {" "}
                                    <div className="w-5 h-5 mr-4">
                                      {" "}
                                      <svg
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        {...props}
                                      >
                                        <path
                                          fillRule="evenodd"
                                          d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"
                                          clipRule="evenodd"
                                        />
                                      </svg>
                                    </div>
                                    <div>Whatsapp</div>
                                  </a>
                                  <a
                                    href={`https://twitter.com/intent/tweet?url=https://timesascent.com/${router.asPath}`}
                                   
                                    className="flex items-center w-1/2 sm:w-1/3 mt-2 sm:mt-3"
                                  >
                                    {" "}
                                    <div className="w-6 h-6 mr-2">
                                      <svg
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        {...props}
                                      >
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                      </svg>
                                    </div>
                                    <div>Twitter</div>
                                  </a>
                                  <a
                                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://timesascent.com/${router.asPath}`}
                                    target={"_self"}
                                    className="flex items-center w-1/2 sm:w-1/3 mt-2 sm:mt-3"
                                  >
                                    {" "}
                                    <div className="w-6 h-6 mr-2">
                                      {" "}
                                      <svg
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        {...props}
                                      >
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                      </svg>
                                    </div>
                                    <div>Linkedin</div>
                                  </a>
                                  <a
                                    href={`mailto:?body=https://timesascent.com/${router.asPath}`}
                                    target={"_self"}
                                    className="flex items-center w-1/2 sm:w-1/3 mt-2 sm:mt-3"
                                  >
                                    {" "}
                                    <div className="w-8 h-8 mr-2 mt-3">
                                      {" "}
                                      <svg
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                        {...props}
                                      >
                                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z" />
                                      </svg>
                                    </div>
                                    <div>Mail</div>
                                  </a>
                                  <div className="w-full ">
                                    <div className="flex items-center w-full sm:w-3/5 mt-0 sm:mt-3">
                                      {" "}
                                      <div className="w-9 h-6 mr-2">
                                        {" "}
                                        <PencilSquareIcon
                                          className="h-6 w-6"
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <input
                                        className="truncate w-full border-b py-1 px-4 rounded"
                                        value={`https://timesascent.com/${router.asPath}`}
                                        ref={textAreaRef}
                                      />
                                      <div
                                        onClick={() => {
                                          copyToClipboard();
                                          setSuccess(false);
                                          setTimeout(() => {
                                            setSuccess(false);
                                          }, 1000);
                                        }}
                                        className="cursor-pointer"
                                      >
                                        {" "}
                                        <DocumentDuplicateIcon
                                          className="h-6 w-6 mx-2"
                                          aria-hidden="true"
                                        />
                                      </div>
                                    </div>
                                    {success && (
                                      <div className="text-red-500">
                                        Link copied to clipboard
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            )} */}
                        {deviceType !== "Mobile" ? (
                          <>
                            <div className="flex items-center justify-between w-[70%] md:w-[40%] flex-wrap pt-1">
                              {/* Facebook */}
                              <a
                                href={`https://facebook.com/sharer/sharer.php?u=https://timesascent.com${router.asPath}`}

                                className="text-gray-400 flex items-center justify-between hover:text-timesRed "
                              >
                                <svg
                                  className="text-xl h-6 w-6"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>
                              <a
                                href={`https://web.whatsapp.com/send?text=https://timesascent.com${router.asPath}`}
                                target={"_self"}
                                className="text-gray-400 flex items-center justify-between hover:text-timesRed"
                              >
                                {" "}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  fill="currentColor"
                                  class="bi bi-whatsapp"
                                  viewBox="0 0 16 16"
                                  id="IconChangeColor"
                                >
                                  {" "}
                                  <path
                                    d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"
                                    id="mainIconPathAttribute"
                                  ></path>{" "}
                                </svg>
                              </a>
                              {/* Instagram */}
                              <a
                                href={`mailto:?body=https://timesascent.com${router.asPath}`}
                                target={"_self"}
                                className="text-gray-400 flex items-center justify-between hover:text-timesRed pt-3"
                              >
                                <svg
                                  className="text-xl h-7 w-7"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </a>

                              {/* twitter */}
                              <a
                                href={`https://twitter.com/intent/tweet?url=https://timesascent.com${router.asPath}`}
                                target={"_self"}
                                className="text-gray-400 flex items-center justify-between hover:text-timesRed "
                              >
                                <svg
                                  className="text-xl h-6 flex items-center w-6"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                              </a>
                              {/* linkedin */}
                              <a
                                href={`https://www.linkedin.com/shareArticle?mini=true&url=https://timesascent.com${router.asPath}`}
                                target={"_self"}
                                className="text-gray-400 flex items-center justify-between hover:text-timesRed "
                              >
                                <svg
                                  className="text-xl h-5 flex items-center w-5"
                                  fill="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                              </a>

                              {/* <input
                                className="truncate w-full py-1 sm:py-2 px-4 outline-none text-sm "
                                value={`https://timesascent.com/${router.asPath}`}
                                ref={textAreaRef}
                              /> */}
                              <div
                                onClick={() => {
                                  copy(
                                    `https://timesascent.com${router.asPath}`
                                  );
                                  setSuccess(true);
                                  const timeout = setTimeout(() => {
                                    setSuccess(false);
                                  }, 1000);
                                  return () => clearTimeout(timeout);
                                }}
                                className="cursor-pointer text-gray-400 flex items-center justify-between hover:text-timesRed "
                              >
                                {" "}
                                <DocumentDuplicateIcon
                                  className="h-6 w-6 mx-2"
                                  aria-hidden="true"
                                />
                              </div>
                            </div>
                            {success && (
                              <div className="text-red-500">
                                Link copied to clipboard
                              </div>
                            )}
                          </>
                        ) : (
                          <div className="pt-3">
                            {" "}
                            <GlobalShare
                              url={`https://timesascent.com${router.asPath}`}
                            />
                          </div>
                        )}
                      </div>
                      <div className="pt-2 px-6 pb-6 text-sm w-[100%] max-w-full">
                        <div
                          className="text-sm font-medium [&>p]:mb-6 [&>p>img]:m-auto w-[100%] max-w-full"
                          dangerouslySetInnerHTML={{
                            __html: posts.ActivityDescription,
                          }}
                        />
                      </div>
                      {/* {console.log(articlesdata?.content?.length)} */}
                    </div>
                    <div className="mt-4 px-4 shadow rounded-md py-4">
                      <div className="font-medium text-gray-900 mt-4">Disclaimer</div>
                      <p className="text-gray-900 text-sm mt-2">BCCL disclaims any and all representation or warranties of any kind - expressed or implied - about the completeness, accuracy, reliability,  or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Views expressed herein are independent opinions. You may act at your own risk while relying on the information available on the website. Should you decide to act, or omit to act, you should seek appropriate professional advice.</p>
                    </div>
                  </section>

                  {/* <SimilarJob /> */}
                </div>

                {/* Right column */}
                <div className="grid grid-cols-1 gap-4">
                  {/* Announcements */}
                  {/* <section aria-labelledby="announcements-title">
                                          <div className="overflow-hidden rounded-lg bg-white shadow">
                                              <div className="p-6">
                                                  <h2 className="text-base font-medium text-gray-900" id="announcements-title">
                                                      Announcements
                                                  </h2>
                                                  <div className="mt-6 flow-root">
                                                      <ul role="list" className="-my-5 divide-y divide-gray-200">
                                                          {announcements.map((announcement) => (
                                                              <li key={announcement.id} className="py-5">
                                                                  <div className="relative focus-within:ring-2 focus-within:ring-cyan-500">
                                                                      <h3 className="text-sm font-semibold text-gray-800">
                                                                          <a href={announcement.href} className="hover:underline focus:outline-none">
                                                                        
                                                                              <span className="absolute inset-0" aria-hidden="true" />
                                                                              {announcement.title}
                                                                          </a>
                                                                      </h3>
                                                                      <p className="mt-1 text-sm text-gray-600 line-clamp-2">{announcement.preview}</p>
                                                                  </div>
                                                              </li>
                                                          ))}
                                                      </ul>
                                                  </div>
                                                  <div className="mt-6">
                                                      <a
                                                          href="#"
                                                          className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                                                      >
                                                          View all
                                                      </a>
                                                  </div>
                                              </div>
                                          </div>


                                      </section> */}

                  {/* <PrimaryWidget {...widgetOne} /> */}
                  <div className="h-[250px]  ">
                    <PrimayWidgetNew {...widgetThree} />
                  </div>

                  <div className="place-content-center my-5 m-auto w-[300px] h-[250px] bg-gray-300 flex items-center text-center">
                    <GoogleAd_300x250
                      path="/22637491760/timesascent.com_erelego_hp_m_300x250"
                      ads_Id="div-gpt-ad-1667455336584-0"
                      size={[[300, 250]]}
                    />
                  </div>
                  <div className="border border-gray-50 bg-white rounded shadow">
                    <div className="px-6 py-3">
                      <ArticleWithoutImgCollection
                        data={getarticlewithoutimagearticle.data.slice(0, 3)}
                        href="/ArticlesList/Recommended-Read"
                      />
                    </div>
                  </div>

                  {/* Recent Hires */}
                  {/* <section aria-labelledby="recent-hires-title">
                    <div className="overflow-hidden rounded-lg bg-white shadow">
                      <div className="p-6">
                        <h2
                          className="text-base font-medium text-gray-900"
                          id="recent-hires-title"
                        >
                          Recent Hires
                        </h2>
                        <div className="mt-6 flow-root">
                          <ul
                            role="list"
                            className="-my-5 divide-y divide-gray-200"
                          >
                            {recentHires.map((person) => (
                              <li key={person.handle} className="py-4">
                                <div className="flex items-center space-x-4">
                                  <div className="flex-shrink-0">
                                    <img
                                      className="h-8 w-8 rounded-full"
                                      src={person.imageUrl}
                                      alt=""
                                    />
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium text-gray-900">
                                      {person.name}
                                    </p>
                                    <p className="truncate text-sm text-gray-500">
                                      {"@" + person.handle}
                                    </p>
                                  </div>
                                  <div>
                                    <a
                                      href={person.href}
                                      className="inline-flex items-center rounded-full border border-gray-300 bg-white px-2.5 py-0.5 text-sm font-medium leading-5 text-gray-700 shadow-sm hover:bg-gray-50"
                                    >
                                      View
                                    </a>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="mt-6">
                          <a
                            href="#"
                            className="flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                          >
                            View all
                          </a>
                        </div>
                      </div>
                    </div>
                  </section> */}
                  {/* <div className="border border-gray-50 bg-white rounded shadow mt-4">
                    <div className="px-6 py-3">
                      <ServicesforApplicants
                        data={ServicesApplicants}
                        href={"/"}
                      />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </main>

          {/* <div>
                 
                 {window.history.replaceState(
                   "",
                   "",
                   `/articles/${item.title?.replace(
                     /[ /%<>?:;'"`’|{},.~`!#!@()$^&*]/g,
                     "-"
                   )}/${item.ArticleId}`
                 )}
               </div> */}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default csr;

// export async function getServerSideProps(context) {
//     const ArticlesData = await GetArticleDetails(context.query.id[1]);
//     return { props: { ArticlesData } };
// }

export async function getServerSideProps(context) {
  const ArticlesData = await WeCareDetail(context.query.csr[2]);

  const props = {
    ArticlesData,
  };

  return { props: { props } };
}
