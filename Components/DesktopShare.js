import { Menu, Transition } from '@headlessui/react';
import { LinkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react'
import copy from 'copy-to-clipboard';

const DesktopShare = (props) => {

  const shareData = {
    url: props.url,
  };
  const handleClick = async () => {
    try {
      await navigator.share(shareData);
    } catch (e) {
      if (e.toString().includes("AbortError")) {
        console.log("share modal closed");
      }
    }
  };

  const [success, setSuccess] = useState(false);
  const router = useRouter();

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div>
      <div>
        <div className="hidden mb-3 sm:block">
          <Menu
            as="div"
            className="relative mt-2 inline-block text-left"
          >
            <div>
              <Menu.Button className="inline-flex rounded-full border text-sm border-gray-200 w-full items-center justify-center gap-x-2  bg-white px-4 py-1.5  text-etGray shadow-sm  hover:bg-gray-50">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z"
                    fill="currentColor"
                  ></path>
                </svg>
                <span className="mt-0.5"> Share</span>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute  z-10 mt-2 w-52 divide-y origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <div
                        onClick={() => {
                          copy(
                            `https://timesascent.com${router.asPath}`
                          );
                          setSuccess(true);
                          setTimeout(() => {
                            setSuccess(false);
                          }, 1000);
                        }}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-etGray"
                            : "text-etGray",
                          " px-4 py-2 cursor-pointer text-sm gap-2 flex"
                        )}
                      >
                        <LinkIcon className="h-6 w-6" />
                        Copy link
                      </div>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href={`https://facebook.com/sharer/sharer.php?u=https://timesascent.com${router.asPath}`}
                        target="_blank"
                        className={classNames(
                          active
                            ? "bg-gray-100 text-etGray"
                            : "text-etGray",
                          " px-4 py-2  text-sm gap-3 flex"
                        )}

                      >
                        <svg
                          className="text-xl h-6 w-6 -mr-0.5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Share on facebook
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href={`https://web.whatsapp.com/send?text=https://timesascent.com${router.asPath}`}
                        target={"_blank"}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-etGray"
                            : "text-etGray",
                          " px-4 py-2 pl-5 text-sm gap-3 flex"
                        )}
                      >
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
                        Share on Whatsapp
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href={`mailto:?body=https://timesascent.com${router.asPath}`}
                        target={"_blank"}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-etGray"
                            : "text-etGray",
                          " px-4 pt-2 pl-5 text-sm gap-3 flex"
                        )}
                      >
                        <svg
                          className="text-xl h-7 w-7 -mr-2"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555zM0 4.697v7.104l5.803-3.558L0 4.697zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757zm3.436-.586L16 11.801V4.697l-5.803 3.546z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Share on Mail
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href={`https://www.linkedin.com/shareArticle?mini=true&url=https://timesascent.com${router.asPath}`}
                        target={"_blank"}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-etGray"
                            : "text-etGray",
                          " px-4 py-2 pl-5 text-sm gap-3 flex"
                        )}
                      >
                        <svg
                          className="text-xl h-5 flex items-center w-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                        Share on LinkedIn
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href={`https://twitter.com/intent/tweet?url=https://timesascent.com${router.asPath}`}
                        target={"_blank"}
                        className={classNames(
                          active
                            ? "bg-gray-100 text-etGray"
                            : "text-etGray",
                          " px-4 py-2 pl-5 text-sm gap-3 flex"
                        )}
                      >
                        <svg
                          className="text-xl h-6 flex items-center w-6 -mr-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                        Share on Twitter
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        {/* <div className=" w-full flex items-end mb-2 sm:hidden">
        {" "}
        <ArticleShare
          page={"Article"}
          url={
            `https://www.educationtimes.com/` +
            props.data.seopath
          }
        />
      </div> */}
        {success && (
          <div className="text-sky-500 bg-white w-full absolute">
            Link copied to clipboard
          </div>
        )}
      </div>
      <div className='block sm:hidden my-3'>
        <div onClick={handleClick}
          className="cursor-pointer inline-block"
          fontSize={20}>
          <div className="inline-flex rounded-full border text-sm border-gray-200 w-full items-center justify-center gap-x-2  bg-white px-4 py-1.5  text-etGray shadow-sm  hover:bg-gray-50">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.22 4.93a.42.42 0 0 1-.12.13h.01a.45.45 0 0 1-.29.08.52.52 0 0 1-.3-.13L12.5 3v7.07a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5V3.02l-2 2a.45.45 0 0 1-.57.04h-.02a.4.4 0 0 1-.16-.3.4.4 0 0 1 .1-.32l2.8-2.8a.5.5 0 0 1 .7 0l2.8 2.8a.42.42 0 0 1 .07.5zm-.1.14zm.88 2h1.5a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-10a2 2 0 0 1 2-2H8a.5.5 0 0 1 .35.14c.1.1.15.22.15.35a.5.5 0 0 1-.15.35.5.5 0 0 1-.35.15H6.4c-.5 0-.9.4-.9.9v10.2a.9.9 0 0 0 .9.9h11.2c.5 0 .9-.4.9-.9V8.96c0-.5-.4-.9-.9-.9H16a.5.5 0 0 1 0-1z"
                fill="currentColor"
              ></path>
            </svg>
            <span className="mt-0.5"> Share</span>
          </div>
        </div>
        {/* <BsFillShareFill
          
        /> */}
      </div>
    </div>
  )
}

export default DesktopShare