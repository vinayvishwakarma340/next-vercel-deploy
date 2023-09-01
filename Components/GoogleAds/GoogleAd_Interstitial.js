import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import GoogleAd_1024x768 from "./GoogleAd_1024x768";

const GoogleAd_Interstitial = (props) => {
  return (
    <Transition.Root show={props.openModal} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => false}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-900 bg-opacity-80  transition-opacity" />
        </Transition.Child>

        <div className="fixed  my-2  inset-0 z-10 overflow-y-auto ">
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
              <Dialog.Panel className=" relative m-auto transform p-2 sm:p-4  rounded-lg bg-white  shadow-xl transition-all ">
                <div className="flex justify-end">
                  <span
                    className="cursor-pointer"
                    onClick={() => props.closeModal(false)}
                  >
                    <XMarkIcon className="h-6  text-gray-500 " />
                  </span>
                </div>
                {/* <p className="mb-2 text-center text-xl font-medium">
                  Advertisement
                </p> */}
                <div className="mt-4">
                  <div className=" hidden md:block ">
                    <GoogleAd_1024x768
                      path="/1064661/ta.com_Ver_interstitial"
                      ads_Id="div-gpt-ad-1674639883783-0"
                      size={[[1024, 768]]}
                    />
                  </div>
                  <div className="block md:hidden">
                    <GoogleAd_1024x768
                      path="/1064661/ta.com_Ver_Mob_interstitial"
                      ads_Id="div-gpt-ad-1674639691528-0"
                      size={[[320, 480]]}
                    />
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

export default GoogleAd_Interstitial;
