import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { Keyboard, Autoplay, Navigation, Pagination } from 'swiper/modules';

import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
// import { Carousel } from 'flowbite-react';
// import animationData from "../../LottieJson/times_banner.json";
// import Lottie from "react-lottie";

const images = [
  {
    id: 1,
    desktopImageURL: "/homeBanner/HomePage.webp",
    mobileImageURL: "/homeBanner/mobileView/TimesascentHome.webp",
  },
  {
    id: 2,
    desktopImageURL: "/homeBanner/RightJob.webp",
    mobileImageURL: "/homeBanner/mobileView/RightJobMob.webp",
  },
  {
    id: 3,
    desktopImageURL: "/homeBanner/9Links.webp",
    mobileImageURL: "/homeBanner/mobileView/9linkMob.webp",
  },
  {
    id: 4,
    desktopImageURL: "/homeBanner/TopResume.webp",
    mobileImageURL: "/homeBanner/mobileView/TopResumeMob.webp",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const HomeCarousel = (props) => {

  return (
    <div className='relative'>
      <Swiper
        slidesPerView={1}
        loop={true}
        lazy={"true"}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        keyboard={{
          enabled: true,
        }}
        scrollbar={false}
        navigation={{ prevEl: ".arrow-left", nextEl: ".arrow-right" }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Keyboard, Navigation, Pagination]}
        className={`${classNames(props.isRounded && "md:rounded-lg")} overflow-hidden`}
      >
        {props.data.map((item, index) => {
          return <SwiperSlide key={index} >
            <div className={`${classNames(props.pageName === "home" ? "md:h-60" : "md:h-[400px] ")} relative h-40`} >
              <a
                rel="noreferrer"
                href={item.redirectionDesktopUrl}
              >
                <Image
                  className='bg-gray-100 '
                  priority={index === 0 ? true : false}
                  placeholder={index !== 0 ? "blur" : false}
                  blurDataURL="https://timesascent.com/TimeDummyLogo.webp"
                  src={
                    !props.isMobile ? item.desktopImageURL : item.mobileImageURL
                  }
                  fill
                  sizes={
                    !props.isMobile
                      ? "(max-width: 1600px) 100vw"
                      : "(max-width: 768px) 100vw"
                  }
                  alt={props.data.pageName || "Banner"}
                  quality={25}

                />  </a></div>

          </SwiperSlide>
        })}

      </Swiper>

      <button
        type="button"
        className="arrow-left arrow absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <ChevronLeftIcon className='w-6 h-6  text-white' />
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="arrow-right arrow absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <ChevronRightIcon className='w-6 h-6  text-white' />

          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );

}
export default HomeCarousel;


