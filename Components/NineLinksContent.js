import React from "react";
import Widget from "./Widget";
import {
  Bars3Icon,
  ChatBubbleBottomCenterTextIcon,
  ChatBubbleLeftRightIcon,
  InboxIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import ModalRedirection from "./ModalRedirection";
import { GiTeacher } from "react-icons/gi";

const solutions = [
  {
    name: "Inbox",
    description:
      "Get a better understanding of where your traffic is coming from.",
    href: "#",
    icon: InboxIcon,
  },
  {
    name: "Messaging",
    description: "Speak directly to your customers in a more meaningful way.",
    href: "#",
    icon: ChatBubbleBottomCenterTextIcon,
  },
  {
    name: "Live Chat",
    description: "Your customers' data will be safe and secure.",
    href: "#",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    name: "Knowledge Base",
    description: "Connect with third-party tools that you're already using.",
    href: "#",
    icon: QuestionMarkCircleIcon,
  },
];
const navigation = [
  { name: "Pricing", href: "#" },
  { name: "Partners", href: "#" },
  { name: "Company", href: "#" },
];

const NineLinksContent = (props) => {
  const PsychometricHandler = (type) => {
    switch (type) {
      case "9Links":
        return (
          <>
            {" "}
            {/* {banner} */}
            <ModalRedirection />
            <div className="bg-white">
              <main>
                <div>
                  <div className="relative">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
                    <div className="mx-auto w-full ">
                      <div className="relative shadow-xl sm:overflow-hidden ">
                        <div className="absolute inset-0">
                          <img
                            className="h-full w-full object-cover"
                            src="../psychomericimages/Psychometric.webp"
                            alt="9Links"
                          />
                          <div className="absolute inset-0 bg-purple-700 mix-blend-multiply" />
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block text-white">
                              Take control of your
                            </span>
                            <span className="block text-indigo-200">
                              customer support
                            </span>
                          </h1>
                          <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                            Anim aute id magna aliqua ad ad non deserunt sunt.
                            Qui irure qui lorem cupidatat commodo. Elit sunt
                            amet fugiat veniam occaecat fugiat aliqua.
                          </p>
                          <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                            <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                              <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-purple-50 sm:px-8"
                              >
                                Get started
                              </a>
                              <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-purple-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                              >
                                Live demo
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            {/* {content} */}
            <div className="overflow-hidden bg-white py-5">
              <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-prose text-base lg:max-w-none">
                  <h2 className="text-lg font-semibold text-indigo-600">
                    9Links
                  </h2>
                  <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    What are Psychometric Assessments and their benefits
                  </p>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
                  <div className="relative z-10">
                    <div className="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">
                      <p>
                        Psychometric Assessment refers to the assessment of
                        personality, ability, attitude, motivation, interest,
                        needs, and emotional intelligence. We often suffer from
                        biases. Psychometric assessment tools help us to
                        overcome these biases preventing us from making
                        errors/assumptions while understanding self or others.
                      </p>
                      <p>
                        When one has to assess a person’s suitability for a
                        given position, relying on their CV or interview alone
                        can cause costly errors of judgment. Psychometric
                        assessments are a common part of the job interview
                        process at many companies across the globe. Psychometric
                        tests are used to assess the suitability of potential
                        employees.
                      </p>

                      <p>
                        The most common recruitment focussed psychometric tests
                        of today are designed to reveal details about
                        behavioural traits and personality which can be missed
                        during the interview process. The other types of tests
                        are aptitude or ability assessments devised to measure
                        reasoning or cognitive ability.
                      </p>

                      <p>
                        Lengthy or ambiguous selection processes lead to long
                        waiting time for declaring results for candidates. This
                        can lead to a high drop-off rate or employers losing top
                        candidates to competitors. Poor candidate experience can
                        lead to a poor brand image for the organisation.
                      </p>
                      <p>
                        On the other hand, assessments perform multiple tasks.
                        They are set in a user-friendly and graphically rich
                        interface, to capture real behavioural actions. They are
                        specifically designed to put users at ease. Behavioural
                        assessment tools often involve situations, thereby
                        enabling them to showcase their natural strengths and
                        preferences. The result is a data-driven, objective
                        measure of a candidate’s personality and cognition.
                      </p>
                      <p>
                        To add on, due to their engaging nature, they are less
                        stressful for candidates to complete and add a fun
                        factor to the application process. On the whole, they
                        minimise and can even reduce test anxiety and therefore
                        are a great option for candidates who tend to
                        underperform in traditional assessments and test
                        settings
                      </p>
                      <h3>We’re here to help</h3>
                      <p>
                        Psychometric assessments are used globally by
                        organisations, these assessments are providing with
                        speed and accuracy in the recruitment process thereby
                        improving the bottom lines.
                      </p>
                    </div>
                    <div className="mx-auto mt-10 flex max-w-prose text-base lg:max-w-none">
                      <div className="rounded-md shadow sm:mx-0 mx-auto">
                        <a
                          href="#"
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-600 px-5 py-3 text-base font-medium text-white hover:bg-purple-700"
                        >
                          Take the free assessment today
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="relative mx-auto mt-18 max-w-prose text-base lg:mt-0 lg:max-w-none">
                    <div className="mt-8 sm:mt-0">
                      <img
                        className="w-[300px] m-auto"
                        src="../DummyAdImage/dummyAd1.png"
                        alt="ads"
                      />
                    </div>
                    <div className="mt-3 ">
                      <div className="p-4 sm:p-6  ">
                        <Widget
                          type="powerby widget with logo"
                          name=" Online Courses for Executives"
                          description=" Variety of programs for working professionals in digital  marketing, product management, AI, Data Science & more"
                          icon={GiTeacher}
                          imgPath="/mentorIcon/upgrad-logo.png"
                          btnText="Explore the Course Catalogue"
                          href=""
                        />
                      </div>
                    </div>

                    <div className="mt-8 ">
                      <img
                        className="w-[300px] m-auto"
                        src="../DummyAdImage/dummyAd1.png"
                        alt="ads"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case "SetmyCareer":
        return (
          <>
            {" "}
            {/* {banner} */}
            <div className="bg-white">
              <main>
                <div>
                  <div className="relative">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
                    <div className="mx-auto w-full ">
                      <div className="relative shadow-xl sm:overflow-hidden ">
                        <div className="absolute inset-0">
                          <img
                            className="h-full w-full object-cover"
                            src="../psychomericimages/SetmyCareer.webp"
                            alt="SetmyCareer"
                          />
                          <div className="absolute inset-0 bg-purple-700 mix-blend-multiply" />
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block text-white">
                              Take control of your
                            </span>
                            <span className="block text-indigo-200">
                              customer support
                            </span>
                          </h1>
                          <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                            Anim aute id magna aliqua ad ad non deserunt sunt.
                            Qui irure qui lorem cupidatat commodo. Elit sunt
                            amet fugiat veniam occaecat fugiat aliqua.
                          </p>
                          <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                            <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                              <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-purple-50 sm:px-8"
                              >
                                Get started
                              </a>
                              <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-purple-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                              >
                                Live demo
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            {/* {content} */}
            <div className="overflow-hidden bg-white py-5">
              <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-prose text-base lg:max-w-none">
                  <h2 className="text-lg font-semibold text-indigo-600">
                    SetMyCareer
                  </h2>
                  <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    We Scientifically Guide You
                  </p>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
                  <div className="relative z-10">
                    <div className="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">
                      <p>
                        Career counselling & guidance primarily revolves around
                        but knowing ourselves to pursue the best career
                        opportunities. To provide optimum results in career
                        development, our world-class psychometric assessments
                        recognize the significance of your talent and passion.
                        Additionally, our trained psychologists provide you
                        career advice and evaluate the reports and embolden you
                        with your capabilities. This will finally help you make
                        the best career decisions in your life.
                      </p>
                      <p>
                        While addressing career development, we specialize in
                        scientifically linking connections, considering
                        candidate's appraisal data, personal aspirations,
                        passions and ambitions. To provide the most suitable
                        career plan, we have a comprehensive and systematic
                        methodology in pairing the best career path to the
                        candidate, through a combination of insightful knowledge
                        and quantifiable evaluation.
                      </p>
                    </div>
                    <div className="mx-auto mt-10 flex max-w-prose text-base lg:max-w-none">
                      <div className="rounded-md shadow sm:mx-0 mx-auto">
                        <a
                          href="#"
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-600 px-5 py-3 text-base font-medium text-white hover:bg-purple-700"
                        >
                          Take the free assessment today
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="relative mx-auto mt-18 max-w-prose text-base lg:mt-0 lg:max-w-none">
                    <div className="mt-8 sm:mt-0">
                      <img
                        className="w-[300px] m-auto"
                        src="../DummyAdImage/dummyAd1.png"
                        alt="ads"
                      />
                    </div>
                    <div className="mt-3 ">
                      <div className="p-4 sm:p-6  ">
                        <Widget
                          type="powerby widget with logo"
                          name=" Online Courses for Executives"
                          description=" Variety of programs for working professionals in digital  marketing, product management, AI, Data Science & more"
                          icon={GiTeacher}
                          imgPath="/mentorIcon/upgrad-logo.png"
                          btnText="Explore the Course Catalogue"
                          href=""
                        />
                      </div>
                    </div>

                    <div className="mt-8 ">
                      <img
                        className="w-[300px] m-auto"
                        src="../DummyAdImage/dummyAd1.png"
                        alt="ads"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      case "InterViewBuddy":
        return (
          <>
            {" "}
            {/* {banner} */}
            <div className="bg-white">
              <main>
                <div>
                  <div className="relative">
                    <div className="absolute inset-x-0 bottom-0 h-1/2 bg-white" />
                    <div className="mx-auto w-full ">
                      <div className="relative shadow-xl sm:overflow-hidden ">
                        <div className="absolute inset-0">
                          <img
                            className="h-full w-full object-cover"
                            src="./psychomericimages/Interview_Buddy.webp"
                            alt="Interview_Buddy"
                          />
                          <div className="absolute inset-0 bg-purple-700 mix-blend-multiply" />
                        </div>
                        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                          <h1 className="text-center text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                            <span className="block text-white">
                              Take control of your
                            </span>
                            <span className="block text-indigo-200">
                              customer support
                            </span>
                          </h1>
                          <p className="mx-auto mt-6 max-w-lg text-center text-xl text-indigo-200 sm:max-w-3xl">
                            Anim aute id magna aliqua ad ad non deserunt sunt.
                            Qui irure qui lorem cupidatat commodo. Elit sunt
                            amet fugiat veniam occaecat fugiat aliqua.
                          </p>
                          <div className="mx-auto mt-10 max-w-sm sm:flex sm:max-w-none sm:justify-center">
                            <div className="space-y-4 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5 sm:space-y-0">
                              <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-3 text-base font-medium text-indigo-700 shadow-sm hover:bg-purple-50 sm:px-8"
                              >
                                Get started
                              </a>
                              <a
                                href="#"
                                className="flex items-center justify-center rounded-md border border-transparent bg-purple-500 bg-opacity-60 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-opacity-70 sm:px-8"
                              >
                                Live demo
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </main>
            </div>
            {/* {content} */}
            <div className="overflow-hidden bg-white py-5">
              <div className="mx-auto max-w-7xl space-y-8 px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-prose text-base lg:max-w-none">
                  <h2 className="text-lg font-semibold text-indigo-600">
                    InterviewBuddy
                  </h2>
                  <p className="mt-2 text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                    InterviewBuddy is built on the premise that practice &
                    preparation are crucial to get over your anxieties when
                    attending an interview
                  </p>
                </div>

                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-8">
                  <div className="relative z-10">
                    <div className="prose prose-indigo mx-auto text-gray-500 lg:max-w-none">
                      <p>
                        “Interviews are crucial moments in one’s career.
                        Theoretical knowledge of interview questions isn't
                        enough when you actually face an interview. Too often
                        fear takes over our performance in job interviews.”
                      </p>
                      <p>
                        As the adage goes – practice makes perfect! Mock
                        interviews by InterviewBuddy give you the platform to
                        prepare, practice and experience firsthand how a
                        real-life job interview feels. Familiarizing yourself
                        with the interview environment beforehand in a relaxed
                        and stress-free environment gives you an edge over your
                        peers.
                      </p>

                      <p>
                        Our mock interviews are conducted by handpicked industry
                        experts with an average experience of 9+ years in the
                        interviewing game. So you’re sure to improve your
                        chances of getting hired!.
                      </p>
                      <p>
                        Every individual has its own ability & every phase in
                        life comes up with own challenge.
                      </p>
                      <ul role="list">
                        <li>
                          Reduce stress & anxiety: Doubts about how to answer
                          tricky interview questions may stress you out & create
                          anxiety. Get over your nerves with mock interviews.
                        </li>
                        <li>
                          Boost confidence: Test drive your answers with experts
                          to improve your skills & experience and boost
                          confidence.
                        </li>
                        <li>
                          Constructive feedback: Get in-depth analysis of your
                          interview style and tips to help you improve areas
                          where you may have weaknesses.
                        </li>
                        <li>
                          Behavioral interview questions: Mastering questions
                          like -'Tell me about a time you failed' show you have
                          the skills & competencies needed for the job.
                        </li>
                        <li>
                          No software downloads: If you have access to a
                          computer/tablet and an internet connection, you’re
                          ready to use our service. You’ll never need any
                          downloading.
                        </li>
                        <li>
                          Interview scorecard: Get a detailed interview
                          scorecard with performance-based metrics and
                          comprehensive feedback on your strengths &weaknesses.
                        </li>
                        <li>
                          Playback your interview: Our video interviewing system
                          automatically records your interview so that you can
                          review it anytime. You’ll receive access to the
                          recording of the interview within 2 hours.
                        </li>
                        <li>
                          Curated resources: Prime your interview skills &
                          etiquette by accessing the best hand-picked and
                          curated content covering every aspect of the interview
                          cycle with InterviewBuddy!
                        </li>
                      </ul>
                      <p>
                        InterviewBuddy helps students and job seekers crack
                        interviews & land their dream jobs!
                      </p>
                    </div>
                    <div className="mx-auto mt-10 flex max-w-prose text-base lg:max-w-none">
                      <div className="rounded-md shadow sm:mx-0 mx-auto">
                        <a
                          href="#"
                          className="flex w-full items-center justify-center rounded-md border border-transparent bg-purple-600 px-5 py-3 text-base font-medium text-white hover:bg-purple-700"
                        >
                          Prepare for interviews today
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="relative mx-auto mt-18 max-w-prose text-base lg:mt-0 lg:max-w-none">
                    <div className="mt-8 sm:mt-0">
                      <img
                        className="w-[300px] m-auto"
                        src="./DummyAdImage/dummyAd1.png"
                        alt="ads"
                      />
                    </div>
                    <div className="mt-3 ">
                      <div className="p-4 sm:p-6  ">
                        <Widget
                          type="powerby widget with logo"
                          name=" Online Courses for Executives"
                          description=" Variety of programs for working professionals in digital  marketing, product management, AI, Data Science & more"
                          icon={GiTeacher}
                          imgPath="/mentorIcon/upgrad-logo.png"
                          btnText="Explore the Course Catalogue"
                          href=""
                        />
                      </div>
                    </div>

                    <div className="mt-8 ">
                      <img
                        className="w-[300px] m-auto"
                        src="./DummyAdImage/dummyAd1.png"
                        alt="ads"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      default:
        console.log("Psychometric type not found");
    }
  };

  return <>{PsychometricHandler(props.type)}</>;
};

export default NineLinksContent;
