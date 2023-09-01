import Image from "next/image";
import Link from "next/link";

const ForHerCompanyBanner = () => {
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
  ];

  return (
    <div className="bg-purple-200 bg-opacity-25">
      <div className="mx-auto py-6 md:py-10 container">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <h2 className=" max-w-md text-center text-3xl font-bold tracking-tight text-indigo-900 lg:max-w-xl lg:text-left">
            The world's most innovative companies use our app
          </h2>
          <div className="mt-8 flow-root self-center lg:mt-0">
            <div className="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
              {bannerLogo.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="mt-4 ml-8 flex flex-shrink-0 flex-grow justify-center lg:ml-4 lg:flex-grow-0"
                  >
                    <a href={item.url}>
                      <div className={"  w-full  relative"}>
                        <Image
                          objectFit="cover"
                          src={item.imgUrl}
                          width={100}
                          height={100}
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
      </div>
    </div>
  );
};

export default ForHerCompanyBanner;
