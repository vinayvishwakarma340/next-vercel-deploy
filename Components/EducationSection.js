import Image from "next/image";
import {
  UserIcon,
  TableCellsIcon,
  CalendarDaysIcon,
  QuestionMarkCircleIcon,
  UsersIcon,
  ClipboardDocumentListIcon,
  ArrowTopRightOnSquareIcon,
} from "@heroicons/react/24/outline";

const EducationSection = () => {
  const images = [
    {
      id: 1,
      url: "/education/1640239603.webp",
    },
    {
      id: 2,
      url: "/education/1641912704.webp",
    },
    {
      id: 3,
      url: "/education/1648534886.webp",
    },
    {
      id: 4,
      url: "/education/1648722723.webp",
    },
    {
      id: 5,
      url: "/education/1662540062.webp",
    },
    {
      id: 6,
      url: "/education/1672812522.webp",
    },
  ];

  const Icons = [
    {
      id: "1",
      icon: QuestionMarkCircleIcon,
      title: "Q&A",
      url: "https://www.educationtimes.com/questions-and-answers",
    },
    {
      id: "2",
      icon: ClipboardDocumentListIcon,
      title: "Placement Report",
      url: "https://www.educationtimes.com/placement-report",
    },
    {
      id: "3",
      icon: UserIcon,
      title: "Counsellors",
      url: "https://www.educationtimes.com/counsellors",
    },
    {
      id: "4",
      icon: TableCellsIcon,
      title: "Top stories",
      url: "https://www.educationtimes.com/top-stories",
    },
    {
      id: "5",
      icon: CalendarDaysIcon,
      title: "Events",
      url: "https://www.educationtimes.com/events",
    },
    {
      id: "6",
      icon: UsersIcon,
      title: "Twinning Programs",
      url: "https://www.educationtimes.com/twinning-programs",
    },
  ];
  return (
    <div className="py-4 border-t-2 border-b-2 border-dashed">
      <div className="mx-auto  ">
        <div className="lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
          <div>
            {/* <h4 className="text-xl font-bold mb-2  text-gray-900">
              Education Times
            </h4> */}
            <div className="h-16 w-[200px] relative mb-4">
              <Image
                src="/education/EducationTimes.webp"
                style={{ object: "contain" }}
                fill
                sizes="(max-width:200px) 100vw"
                alt="logo"
                loading="lazy"
              />
            </div>
            <p className="max-w-3xl text-base ">
              Discover the most recent Educational & Career related updates with
              our Q&A section, Reviews, Counsellors Network, Top Stories, Events
              and Twinning Programs.
            </p>
            <div className="mt-4 sm:flex">
              <div className="">
                <a
                  href="https://www.educationtimes.com/"
                  target="_blank"
                  className="flex items-center justify-center rounded-md border border-transparent bg-purple-100 p-3 text-base font-medium text-indigo-700 hover:bg-purple-200"
                >
                  Visit Link
                  <ArrowTopRightOnSquareIcon
                    className="-mr-1 ml-3 h-5 w-5"
                    aria-hidden="true"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* <div className="mt-8  m-auto relative">
            <Image
              src="/Times/ComingSoon.webp"
              style={{ objectFit: "contain" }}
              width={500}
              height={500}
              alt="logo"
            />
          </div> */}
          <div className="mt-8 grid grid-cols-2 gap-0.5 md:grid-cols-2 lg:grid-cols-3 lg:mt-0 ">
            {/* {images.map((item) => {
              return (
                <div
                  key={item.id}
                  className="col-span-1 flex justify-center  p-4"
                >
                  <div className="h-20 w-20 relative">
                    <Image
                      src={item.url}
                      fill
                      sizes="(max-width: 80px) 100vw"
                      alt="logo"
                    />
                  </div>
                </div>
              );
            })} */}
            {Icons.map((item, index) => {
              return (
                <div key={index} className="bg-timesPurple text-white p-3 py-5">
                  <a href={item.url} target="_blank">
                    <item.icon className="h-8 text-white m-auto" />
                    <div className="text-center">{item.title}</div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;
