import Image from "next/image";

const BannerForHer = () => {
  const urls = [
    "https://www.youtube.com/embed/Pw6ahMKvJHo",
    "https://www.youtube.com/embed/r0O6tbVcsog",
    "https://www.youtube.com/embed/qMex0i8uaF0",
    "https://www.youtube.com/embed/vPlrNOe1EeE",
    "https://www.youtube.com/embed/fLSSMinQLWA",
    "https://www.youtube.com/embed/68YpHm1_qQk",
  ];

  const bannerLogo = [
    {
      id: 1,
      imgUrl: "/ForHerLogoImages/Flexibees.webp",
      url: "/NewCompanyProfile/FlexiBees-Business-Services/53371",
    },
    {
      id: 2,
      imgUrl: "/ForHerLogoImages/HerSecondInnings.webp",
      url: "/NewCompanyProfile/her-second-innings/53358",
    },
    {
      id: 3,
      imgUrl: "/ForHerLogoImages/mentorrr.webp",
      url: "/NewCompanyProfile/MentorKart/53373",
    },
    {
      id: 4,
      imgUrl: "/ForHerLogoImages/unimo_logo.webp",
      url: "/NewCompanyProfile/Universe-of-Moms/53387",
    },
    {
      id: 5,
      imgUrl: "/ForHerLogoImages/Amoazone_Saheli.webp",
      url: "https://www.amazon.in/b/?node=14311774031&ref_=sdin_saheli_soa&initialSessionID=257-0879715-5337321&ld=NSGoogle",
      target: "_self",
    },
  ];

  const randomHandler = (arr) => {
    return arr[Math.floor(Math.random() * 6)];
  };

  return (
    <main className="container pt-8  ">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8">
        <div className="sm:text-center  md:max-w-2xl lg:col-span-6 lg:text-left">
          <h1>
            <span className="mt-1 block text-center text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
              <span className="block text-gray-900">#Back2Work</span>
              {/* <span className="block text-indigo-600">online business</span> */}
            </span>
          </h1>
          <h2 className="text-2xl text-gray-900 text-center xl:text-4xl  font-bold">
            There's no restriction on what Women can accomplish
          </h2>
          <p className="mt-2 text-base text-center text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
            Let's get back to work and make another run at it.
          </p>
          <div className="my-6 flow-root self-center ">
            <div className="md:max-w-[80%] m-auto flex flex-wrap justify-between ">
              {bannerLogo.map((item) => {
                return (
                  <div
                    key={item.id}
                    className=" flex flex-shrink-0 flex-grow justify-center  lg:flex-grow-0"
                  >
                    <a href={item.url} target={item.target}>
                      <div className={"  w-full  relative"}>
                        <Image
                          src={item.imgUrl}
                          style={{ objectFit: "contain" }}
                          width={80}
                          height={80}
                          alt="company logo image"
                        />
                      </div>
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* https://www.youtube.com/embed/ah97j7_DSFE */}
        <div className="relative mt-12 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:max-w-none lg:items-center">
          <div className="relative mx-auto w-full sm:w-[400px]  h-[300px] shadow-lg lg:max-w-md">
            <iframe
              className="w-full h-[300px] overflow-hidden rounded-lg"
              // src={randomHandler(urls)}
              src="https://www.youtube.com/embed/ah97j7_DSFE"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default BannerForHer;
