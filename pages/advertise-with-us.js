import Head from "next/head";
import React from "react";
import BreadCrumbs from "../Components/BreadCrumbs";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";
import { useRouter } from "next/router";
import Image from "next/image";

const advertisewithus = () => {
  const router = useRouter();
  const pages = [
    { name: "Advertise With Us", href: "/advertise-with-us", current: true },
  ];
  return (
    <div>
      <MainHeader />
      <Head>
        <meta charSet="utf-8" />
        <title>{`Advertise with us - TimesAscent.com`}</title>
        <meta
          name="description"
          content={`Advertise with Times Ascent to make most of online advertising mediums on Times Group`}
        />
        <link
          rel="canonical"
          href="https://timesascent.com/advertise-with-us"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

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
        <meta
          property="og:title"
          content="Advertise with us - TimesAscent.com"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Advertise with Times Ascent to make most of online advertising mediums on Times Group"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/Advertisewithus/Advertise With Us.webp"
        />
        <meta
          property="og:image"
          content="https://timesascent.com/Advertisewithus/Advertise With Us.webp"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/newimages/main/times_ascent_logo.svg"
        />
        <meta
          property="twitter:title"
          content="Advertise with us - TimesAscent.com"
        />
        <meta
          property="twitter:description"
          content="Advertise with Times Ascent to make most of online advertising mediums on Times Group"
        />
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
                  name: "Advertise with us",
                },
              ],
            }),
          }}
        />
      </Head>
      {/* -------------------Content starts here ----------------------------------> */}
      <div className="flex justify-center">
        <Image
          src="/Advertisewithus/Advertise With Us.webp"
          height={"400"}
          width={"1600"}
          priority
          alt="pic"
        />
      </div>

      {/* -------------------why advertise with us ----------------------------------> */}

      <div className="relative py-4 md:py-6 lg:py-8 container">
        <div>
          <BreadCrumbs data={pages} />
        </div>

        <h1 className="text-center  text-xl font-semibold text-gray-900    py-6 ">
          Why advertise with us?
        </h1>
        <div className="sm:flex justify-center gap-3">
          <div className="w-full  sm:text-start text-center sm:max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 sm:m-0 m-auto h-10 mb-2 text-red-600 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>

            <div className="mb-2 mt-2 text-base  font-semibold tracking-tight text-gray-900 dark:text-white">
              The Right Audience
            </div>
            <div className="mb-3 text-sm font-normal  ">
              Give your brand a massive head-start by targeting specific
              audience. Drive recognition and leads
            </div>
          </div>

          <div className="w-full sm:text-start text-center sm:max-w-sm p-6 sm:mt-0 mt-3 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 sm:m-0 m-auto h-10 mb-2 text-red-600 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
              />
            </svg>

            <div className="mb-2 mt-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white">
              Various Ad Solutions
            </div>
            <div className="mb-3 text-sm font-normal  ">
              We offer diverse ad formats for both raising brand awareness and
              driving traffic to your website.
            </div>
          </div>

          <div className="w-full sm:text-start text-center  sm:max-w-sm p-6 sm:mt-0 mt-3 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-10 sm:m-0 m-auto h-10 mb-2 text-red-600 "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>

            <div className="mb-2 mt-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white">
              Online Growth
            </div>
            <div className="mb-3 text-sm font-normal  ">
              Our ads will help you create one-on-one user engagement with your
              brand and delivers measurable results
            </div>
          </div>
        </div>

        {/* -------------------why advertise with us ends ----------------------------------> */}

        {/* -------------------advertising options  starts here ----------------------------------> */}

        <div className=" mt-4 border bg-gray-200"> </div>
        <div className="text-center   text-xl font-semibold text-gray-900    py-6 ">
          Advertising Options
        </div>

        <div className="sm:flex sm:justify-center gap-3">
          <div className="lg:flex flex-col sm:text-start text-center items-center bg-white   lg:flex-row lg:max-w-xl hover:bg-gray-100 dark:border-gray-700   dark:hover:bg-gray-700">
            <img
              className="sm:m-0 m-auto object-fit p-4 w-56   h-48 md:h-48 md:w-48  "
              src="/Advertisewithus/Group1.png"
              alt=""
            />

            <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="mb-3  text-base font-semibold tracking-tight text-gray-900 dark:text-white">
                Featured Ads
              </div>
              <div className="mb-3 text-sm font-normal     lg:break-keep break-all  ">
                Get featured in our trending section and get views from our
                thousands of daily visitors.
              </div>
              <div className="sm:m-0 m-auto">
                <button
                  onClick={() => router.push("/enquiry")}
                  type="submit"
                  className=" w-fit mt-2 block p-2 sm:p-1 cursor-pointer rounded-md border border-transparent bg-timesPurple h-full text-base font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-puple-700 sm:px-10 "
                >
                  Advertise Now
                </button>
              </div>
            </div>
          </div>

          <div className="lg:flex sm:text-start text-center flex-col items-center bg-white   lg:flex-row lg:max-w-xl hover:bg-gray-100 dark:border-gray-700   dark:hover:bg-gray-700">
            <img
              className="object-fit w-56 p-4 sm:m-0 m-auto   h-48 md:h-48 md:w-48 "
              src="/Advertisewithus/Group2.png"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="mb-3  text-base font-semibold tracking-tight text-gray-900 dark:text-white">
                Sponsored Ads
              </div>
              <div className="mb-3 text-sm font-normal   lg:break-keep break-all  ">
                Publish promotional content to reach digital marketers and reap
                the PR and SEO benefits.
              </div>
              <div className="sm:m-0 m-auto">
                <button
                  onClick={() => router.push("/enquiry")}
                  type="submit"
                  className=" w-fit mt-2 block  p-2 sm:p-1 cursor-pointer rounded-md border border-transparent bg-timesPurple h-full text-base font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-puple-700 sm:px-10 "
                >
                  Advertise Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ----------------second line ------------- */}

        <div className="sm:flex sm:justify-center gap-3">
          <div className="lg:flex flex-col sm:text-start text-center sm:w-1/2 items-center bg-white   lg:flex-row lg:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-fit p-4 w-56 sm:m-0 m-auto  h-48 md:h-48 md:w-48  "
              src="/Advertisewithus/Group3.png"
              alt=""
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="mb-3  text-base font-semibold tracking-tight text-gray-900 dark:text-white">
                Sidebar Banner Ads
              </div>
              <div className="mb-3 text-sm font-normal   lg:break-keep break-all  ">
                Promote your brand and increase sales with Sidebar Banner Ads in
                our feed, event, and job section.
              </div>
              <div className="sm:m-0 m-auto">
                <button
                  onClick={() => router.push("/enquiry")}
                  type="submit"
                  className=" w-fit mt-2 block p-2 sm:p-1 cursor-pointer rounded-md border border-transparent bg-timesPurple h-full text-base font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-puple-700 sm:px-10 "
                >
                  Advertise Now
                </button>
              </div>
            </div>
          </div>

          <div className="lg:flex sm:text-start text-center flex-col sm:w-1/2 items-center bg-white   lg:flex-row lg:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <img
              className="object-fit w-56 p-4  sm:m-0 m-auto  h-48 md:h-48 md:w-48 "
              src="/Advertisewithus/Group4.png"
              alt=""
            />

            <div className="flex flex-col justify-between p-4 leading-normal">
              <div className="mb-3  text-base font-semibold tracking-tight text-gray-900 dark:text-white">
                Sponsored Ads
              </div>
              <div className="mb-3 text-sm font-normal  lg:break-keep break-all  ">
                Publish promotional content to reach digital marketers and reap
                the PR and SEO benefits.
              </div>
              <div className="sm:m-0 m-auto">
                <button
                  onClick={() => router.push("/enquiry")}
                  type="submit"
                  className=" w-fit mt-2 block  p-2 sm:p-1 cursor-pointer rounded-md border border-transparent bg-timesPurple h-full text-base font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-puple-700 sm:px-10 "
                >
                  Advertise Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* -----------------line 3 ---------------- */}
        <div className="mt-3 mx-auto max-w-6xl gap-3  ">
          <div className="lg:flex  sm:text-start text-center   flex-col items-center bg-white   lg:flex-row lg:max-w-xl hover:bg-gray-100   dark:hover:bg-gray-700">
            <img
              className="object-fit p-3 w-56 sm:m-0 m-auto  h-48 md:h-48 md:w-48  "
              src="/Advertisewithus/group5.jpg"
              alt=""
            />

            <div className="flex flex-col  justify-between p-4 leading-normal">
              <div className="mb-3  text-base font-semibold tracking-tight text-gray-900 dark:text-white">
                Ads Inventory
              </div>
              <div className="mb-3 text-sm font-normal   lg:break-keep  break-all  ">
                Display ads provide opportunities to engage users with appealing
                ad formats. Here are some of the ad types you can run on Times
                Ascent
              </div>
            </div>
          </div>
        </div>

        {/* -------------------advertising options  ends here ----------------------------------> */}

        {/* -------------------Logo platform  starts here ----------------------------------> */}

        <div className=" mt-4 border bg-gray-200"> </div>
        <div className="py-6">
          <div className=" text-xl text-center font-semibold tracking-tight text-gray-900 dark:text-white  ">
            Other BCCL Platforms
          </div>
          <div className="text-center text-sm   font-normal      ">
            Inquire now to advertise on other credible BCCL platforms to amplify
            the reach
          </div>
        </div>
        <div className="sm:flex sm:justify-evenly mt-6 ">
          <div className="m-auto">
            <Image
              className="object-fit p-6 w-48 m-auto  h-15 md:h-15 md:w-48  "
              src="/Advertisewithus/gold.png"
              height={"58"}
              width={"192"}
              alt="pic"
            />
          </div>
          <div className="m-auto">
            <img
              className="object-fit  p-6 w-56 m-auto  h-15 md:h-15 md:w-48  "
              src="/Advertisewithus/papernew.png"
              alt=""
            />
          </div>
          <div className="m-auto">
            <Image
              className="object-fit p-6 w-48 m-auto  h-15 md:h-15 md:w-48  "
              src="/Advertisewithus/EDT.jpg"
              height={"58"}
              width={"192"}
              alt="pic"
            />
          </div>
          <div className="m-auto">
            <Image
              className="object-fit p-6 w-48 m-auto  h-15 md:h-15 md:w-48  "
              src="/Advertisewithus/diginew.png"
              height={"58"}
              width={"192"}
              alt="pic"
            />
          </div>

          <div className="m-auto">
            <Image
              className="object-fit p-6 w-48 m-auto  h-15 md:h-15 md:w-48  "
              src="/Advertisewithus/prop.png"
              height={"58"}
              width={"192"}
              alt="pic"
            />
          </div>
        </div>

        <div className="flex justify-center mt-6  sm:py-6">
          <button
            onClick={() => router.push("/enquiry")}
            type="submit"
            className=" w-fit mt-2 block p-2 sm:p-1 cursor-pointer rounded-md border border-transparent bg-timesPurple h-full text-base font-medium text-white shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-puple-700 sm:px-10 "
          >
            Advertise Now
          </button>
        </div>

        {/* -------------------Logo platform  ends here ----------------------------------> */}
      </div>

      {/* -------------------Footer ----------------------------------> */}

      <Footer />
    </div>
  );
};

export default advertisewithus;
