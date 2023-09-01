import { useState } from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Squares2X2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
const HomeYoutube = (props) => {
  const [youtubeShow, setYoutubeShow] = useState(false);

  return (
    <div className="video-wrapper">
      {youtubeShow ? (
        <div>
          {props.isMobile ? (
            <YoutubeVideoModal
              openModal={youtubeShow}
              closeModal={() => setYoutubeShow(false)}
              url={props.url}
            />
          ) : (
            <iframe
              className={`h-[${props.height}px] w-full  overflow-hidden rounded-lg`}
              src={props.url}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          )}
        </div>
      ) : (
        <div
          onClick={() => setYoutubeShow(true)}
          className={`relative h-[${props.height}px] w-auto cursor-pointer rounded-md overflow-hidden`}
        >
          <Image
            fill
            sizes="(max-width: 500px) 100vw,"
            src={props.image}
            alt="youtube"
            // placeholder="blur"
            // blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
          />
        </div>
      )}
    </div>
  );
};
// used for mobile device
const YoutubeVideoModal = (props) => {
  return (
    <Transition.Root show={props.openModal} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={props.closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-60  transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative m-auto transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                <div>
                  <div className="mx-auto flex   justify-end rounded-full ">
                    <span onClick={props.closeModal}>
                      <XMarkIcon className="h-6 " />
                    </span>
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    <iframe
                      className={`w-full h-[300px] overflow-hidden rounded-lg`}
                      src={props.url}
                      frameborder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
export default HomeYoutube;
