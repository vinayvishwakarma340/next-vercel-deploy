import React, { useRef, useState, useEffect } from "react";
import classes from "../styles/flipbook.module.css";
import HTMLFlipBook from "react-pageflip";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import useDeviceWidth from "../Components/CustomHook/useDeviceWidth";
import MainHeader from "../Components/MainHeader";
import Footer from "../Components/Footer";
import Image from "next/image";
import {
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/20/solid";
import timescalender from "../public/JSON/timescalender.json";
import Head from "next/head";
const Calender = ({ props }) => {
  const pages = timescalender.data;
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [isMute, setIsMute] = useState(false);
  const [gotoPage, setGotoPage] = useState("");

  const width = useDeviceWidth();
  const book = useRef();

  const onFlip = (e) => {
    setCurrentPage(e.data + 1);
  };
  const play = () => {
    var audio = new Audio("/sound/SoundEffect.mp3");
    audio.play();
  };
  const handleNextClick = () => {
    book.current.pageFlip().flipNext();
    !isMute && play();
  };
  const handlePrevClick = () => {
    book.current.pageFlip().flipPrev();
    !isMute && play();
  };

  const goToPage = (pageNumber) => {
    console.log(pageNumber);
    book.current.pageFlip().turnToPage(pageNumber);
    !isMute && pageNumber > 0 && play();
  };
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Times Ascent Calender - 2023</title>
        <meta
          name="description"
          content="Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
        />
        <link
          rel="canonical"
          href="https://timesascent.com/times-ascent-calender-2023"
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
        <meta property="og:title" content="Times Ascent Calender - 2023" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/times-ascent-calender-2023"
        />
        <meta
          property="og:image"
          content="https://timesascent.com/times_ascent_logo.svg"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/times_ascent_logo.svg"
        />
        <meta property="twitter:title" content="Times Ascent Calender - 2023" />
        <meta
          property="twitter:description"
          content="Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
        />
        <meta property="twitter:card" content="summary" />
        <meta
          property="twitter:site"
          content="https://twitter.com/@timesascent"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta property="og:image:width" content="200" />
        <meta property="og:image:height" content="200" />
      </Head>
      <MainHeader />
      <div className={classes.head}>
        <div className={classes.head_div}>
          <h1 className="text-xl font-semibold mb-2">
            Times Ascent Calender - 2023
          </h1>
        </div>
        <div className={classes.mainContainer}>
          {isLoading ? (
            <div className={classes.loadingDiv}>
              <div className="w-full h-[400px] bg-gray-50">Loading..</div>
            </div>
          ) : (
            <d>
              {" "}
              <div className={classes.gotoPageWrapper}>
                <input
                  id="flipbook"
                  type="number"
                  min="1"
                  maxLength={"4"}
                  placeholder="Go to page"
                  className={classes.goTopageInput}
                  onChange={(e) => setGotoPage(e.target.value)}
                  value={gotoPage}
                />
                <button
                  className={
                    gotoPage > pages.length
                      ? classes.goTopagebuttonDisable
                      : classes.goTopageButton
                  }
                  onClick={() => {
                    goToPage(parseInt(gotoPage) - 1);
                  }}
                >
                  Go
                </button>
                {isMute ? (
                  <div className={classes.muteIconWrapper}>
                    {" "}
                    <SpeakerXMarkIcon
                      className={classes.muteIcon}
                      onClick={() => setIsMute(false)}
                      size={35}
                    />
                  </div>
                ) : (
                  <div className={classes.muteIconWrapper}>
                    {" "}
                    <SpeakerWaveIcon
                      onClick={() => setIsMute(true)}
                      className={classes.muteIcon}
                    />
                  </div>
                )}
              </div>
              <div className={classes.bookContainer}>
                <div
                  className={
                    currentPage === 1
                      ? classes.iconContainerDisable
                      : classes.iconContainer
                  }
                  onClick={() => handlePrevClick()}
                >
                  <ChevronLeftIcon className={classes.arrowIcon} />
                </div>

                {width > 768 ? (
                  <HTMLFlipBook
                    width={450}
                    useMouseEvents={false}
                    height={560}
                    onFlip={onFlip}
                    ref={book}
                    style={{ margin: "0 auto" }}
                  >
                    {pages.length &&
                      pages.map((item, index) => {
                        return (
                          <div key={index}>
                            <TransformWrapper>
                              <TransformComponent>
                                <div className={"h-auto  w-[100%]  relative"}>
                                  <Image
                                    objectFit="cover"
                                    src={item.DImageUrl}
                                    fill
                                    alt="GPTW MAGAZINE"
                                  />
                                </div>
                              </TransformComponent>
                            </TransformWrapper>
                          </div>
                        );
                      })}
                  </HTMLFlipBook>
                ) : (
                  <HTMLFlipBook
                    width={300}
                    useMouseEvents={false}
                    // disableFlipByClick={true}
                    // showCover={true}
                    height={520}
                    onFlip={onFlip}
                    ref={book}
                    style={{ margin: "0 auto" }}
                  >
                    {pages.length &&
                      pages.map((item, index) => {
                        return (
                          <div key={index}>
                            <TransformWrapper>
                              <TransformComponent>
                                <img
                                  src={item.MImageUrl}
                                  alt="GPTW MAGAZINE"
                                  width={"100%"}
                                  height={"auto"}
                                />
                              </TransformComponent>
                            </TransformWrapper>
                          </div>
                        );
                      })}
                  </HTMLFlipBook>
                )}
                {width > 768 ? (
                  <div
                    className={
                      currentPage === pages.length - 1
                        ? classes.iconContainerDisable
                        : classes.iconContainer
                    }
                    onClick={() => handleNextClick()}
                  >
                    <ChevronRightIcon className={classes.arrowIcon} />
                  </div>
                ) : (
                  <div
                    className={
                      currentPage === pages.length
                        ? classes.iconContainerDisable
                        : classes.iconContainer
                    }
                    onClick={() => handleNextClick()}
                  >
                    <ChevronRightIcon className={classes.arrowIcon} />
                  </div>
                )}
              </div>{" "}
              {pages.length && (
                <div className={classes.bottomButtonWrapper}>
                  <button
                    className={
                      currentPage === 1 ? classes.buttonDisable : classes.button
                    }
                    onClick={() => handlePrevClick()}
                  >
                    Previous page
                  </button>{" "}
                  Page {currentPage} of {pages.length}
                  {width > 768 ? (
                    <button
                      className={
                        currentPage === pages.length - 1
                          ? classes.buttonDisable
                          : classes.button
                      }
                      onClick={() => handleNextClick()}
                    >
                      Next page
                    </button>
                  ) : (
                    <button
                      className={
                        currentPage === pages.length
                          ? classes.buttonDisable
                          : classes.button
                      }
                      onClick={() => handleNextClick()}
                    >
                      Next page
                    </button>
                  )}
                </div>
              )}
            </d>
          )}{" "}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Calender;
