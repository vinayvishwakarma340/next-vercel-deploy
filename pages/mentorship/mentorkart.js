import Mentorvisit from "../../Components/Mentorvisit";
import BannerUI from "../../Components/BannerUI";
import ContenUI from "../../Components/ContentUI";
import ServiceImages from "../../Components/ServiceImages";
import MainHeader from "../../Components/MainHeader";
import Footer from "../../Components/Footer";
import FAQ from "../../Components/FAQ";
import BreadCrumbs from "../../Components/BreadCrumbs";
import Head from "next/head";
import Cookies from "js-cookie";
import Router, { useRouter } from "next/router";
import { useState } from "react";
import ModalRedirection from "../../Components/ModalRedirection";
import { CandidateDetailsApi } from "../api/candidatelist";
import GoogleAd_728x90 from "../../Components/GoogleAds/GoogleAd_728x90";
import GoogleAd_300x250 from "../../Components/GoogleAds/GoogleAd_300x250";
import { useEffect } from "react";
import SkeletonMrec from "../../Components/Skeleton/SkeletonMrec";
import SkeletonHrec from "../../Components/Skeleton/SkeletonHrec";
import FreelancerWidget from "../../Components/Widget/FreelancerWidget";

const mentorkart = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [showRedirectionModal, setShowRedirectionModal] = useState(false);
  const [showOpen, setShowOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firstname, setFirstname] = useState(
    props?.candidateDetail?.CandidateDetai?.firstName || ""
  );
  const [lastname, setLastname] = useState(
    props?.candidateDetail?.CandidateDetai?.lastName || ""
  );
  const [mob, setMob] = useState(
    props?.candidateDetail?.CandidateDetai?.mobile || ""
  );
  const [email, setEmail] = useState(
    props?.candidateDetail?.CandidateDetai?.email || ""
  );
  const [redirectionUrl1, setRedirectionUrl1] = useState("");
  const [adShow, setadShow] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setadShow(true);
    }, 4000);
    return () => clearTimeout(timeout);
  }, []);

  const data = [
    {
      question: "What is MentorKart?",
      answer:
        " MentorKart is a platform which will help you in career growth through different mentoring programs, courses and mentorship sessions.",
    },
    {
      question: "What are things required for career growth?",
      answer:
        "  Career growth can be achieved by right set of mentorship from mentors along with support of programs and courses.",
    },
    {
      question: "What is Student Mentorship Program and how it will help me?",
      answer:
        " If you are a student then it will help you to become Industry and Future ready.In this program you will be   getting recorded contents of Industry Experts and live sessions.You can learn the skills from Mentors andstart your professional journey.",
    },
    {
      question:
        " Will I be getting any certificate in the Student Mentorship Program?",
      answer:
        "  Yes, to get your certificate you have to complete all the modules and towards the end of the modules you haveto appear for the assessments.After you have completedthe assessments, you will be able to download yourcertificate.",
    },
    {
      question:
        " Are there only recorded videos, how I will be able to clear my doubts?",
      answer:
        " There are Live Sessions also included in our programs. You can join the live sessions where our Industry expert  can answer your all the queries and clear your doubts.",
    },

    {
      question: "How does the Mentorship Model work?",
      answer:
        "Goal & Objective clarification with Mentor Creating a Concrete Plan Call scheduling with specific agendas Task allocation by Mentor after each call Progress Tracking Goal achieving",
    },
    {
      question: " In 1:1 goal-based mentorship, how will I know my Mentor?",
      answer:
        "Before enrolling into 1:1 Goal Based Mentorship we understand your goal and challenges properly and thenbased on that we suggest you a list of mentors.Finally, you can choose the best suitable mentor for you",
    },
    {
      question: " How long can I talk to my Mentor?",
      answer:
        " Every session with a Mentor happens for 1 hour but you  can have multiple sessions in our 3 Months and 6 Months  package where you will get 6 sessions and 12 sessions respectively..",
    },
    {
      question: "What is the benefit of Active Learning Subscription?",
      answer:
        " Active Learning Subscription you will get to know about various job roles like Data Science Professional, Full Stack Developer, Digital Marketing and many more.Youcan learn about them in live sessions with Industry Experts.All the sessions will happen with question - and - answer sessionso that you can clarify yourdoubts.",
    },

    {
      question:
        " Can I customize take sessions from multiple Mentors as per my requirement in a package?",
      answer:
        "   Yes, MentorKart provides customized package for you so that you can have multiple sessions with different mentors as per your requirements but the pricing of the package might change due to different pricing of the Mentors.",
    },
    {
      question: "Can I chat with my Mentor?",
      answer:
        "Yes, once you enroll in a Mentorship package then you can chat with your Mentor through the MentorKart App.",
    },

    {
      question: " Is the Active Learning Subscriptions only for Students?",
      answer:
        "   No, working professionals who want to grow in their career can also take the subscription.",
    },
    {
      question: "Is the Active Learning Subscription is for 1 year?",
      answer: " The subscription is for quarterly, however you can renew it.",
    },
    {
      question:
        " How the Career Acceleration Program will give me a Job Guarantee?",
      answer:
        " In this program you will get Mentored by Industry Experts who will help you to become job ready and then you will get guaranteed job interviews with companies where you can get a Job.",
    },
  ];
  const pages = [
    { name: "Mentorship", href: "", current: false },
    { name: "Mentorkart", href: "/mentorship/mentorkart", current: true },
  ];

  const onSuccessForm = () => {
    setShowModal(false);
    const timeout = setTimeout(() => { }, 1000);
    return () => clearTimeout(timeout);
  };

  const modalopen = () => {
    if (Cookies.get("userLoggedIn")) {
      setShowModal(true);
    } else {
      setShow(true);
      Cookies.set("pathname", router.pathname);
      router.push("/times-ascent-signin");
    }
  };

  const updateCandidateDetails = async () => {
    Cookies.set("USERFULLNAME", firstname + " " + lastname);
    setLoading(true);
    var myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      process.env.API_TOKEN_AUTH_SERVER
    );
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      CandidateId: Cookies.get("USERID"),
      firstName: firstname,
      lastName: lastname,
    });
    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    await fetch(
      `${process.env.Live_API_URL}/v1/api/apiTimes/UpdateCandidateProfile`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        if (result.status_code === 200) {
          setShowOpen(true);
          onSuccessForm();
        }
      })
      .catch((error) => console.log("error", error))
      .finally(() => {
        setLoading(false);
      });
  };

  const close = () => {
    setShowOpen(false);
    Router.reload();
  };

  const partnerClick = async (companyName, redirectionURL) => {
    window.open(redirectionUrl1, "_self");

    await fetch(`${process.env.Live_API_URL}/v1/api/apiTimes/UserActivity`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: process.env.API_TOKEN_AUTH_SERVER,
      },
      body: JSON.stringify({
        CandidateId: Cookies.get("USERID"),
        RedirectionUrl: redirectionURL,
        Company: companyName,
        Event: "redirection",
        Page: "https://timesascent.com" + router.pathname,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // /    console.log('jobsByIndustry', result.data) /
      });
    setShowOpen(false);
    Router.reload();
  };
  const freelancerWidgetData = {
    heading: "Hire Remote Freelancers",
    description: "Get a network of certified and experienced freelancers",
    buttonText: "Post a requirement",
  };
  return (
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>{"Learn from best Mentors for free - Times Ascent"}</title>
        <meta
          name="description"
          content={`MentorKart is a tech-based Mentorship platform aimed to help Youth achieve their professional Goals, making youth of India Industry & Future Ready.You can learn from Top Industry Mentors & Coaches in many ways like attending their live sessions, Enrolling in Courses, Joining Job Oriented programs and having 1:1 Mentoring Sessions`}
        />
        <link
          rel="canonical"
          href="https://timesascent.com/mentorship/mentorkart"
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
          content="Learn from best Mentors for free - Times Ascent"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="MentorKart is a tech-based Mentorship platform aimed to help Youth achieve their professional Goals, making youth of India Industry & Future Ready.You can learn from Top Industry Mentors & Coaches in many ways like attending their live sessions, Enrolling in Courses, Joining Job Oriented programs and having 1:1 Mentoring Sessions"
        />
        <meta
          property="og:url"
          content="https://timesascent.com/mentorship/mentorkart"
        />
        <meta
          property="og:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/Times_Ascent_Icon.png"
        />
        <meta
          property="twitter:title"
          content="Learn from best Mentors for free - Times Ascent"
        />
        <meta
          property="twitter:description"
          content="MentorKart is a tech-based Mentorship platform aimed to help Youth achieve their professional Goals, making youth of India Industry & Future Ready.You can learn from Top Industry Mentors & Coaches in many ways like attending their live sessions, Enrolling in Courses, Joining Job Oriented programs and having 1:1 Mentoring Sessions"
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
                  position: 2,
                  name: "Mentorkart",
                  item: "https://timesascent.com/",
                },
              ],
            }),
          }}
        />


        <script

          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: data?.map((item, index) => {
                return {
                  "@type": "Question",
                  name: item.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.answer,
                  },
                };
              })

            }),
          }}
        />


      </Head>

      {/* ---------------------------------header---------------------------- */}

      <MainHeader />

      {/* ---------------------------------banner---------------------------- */}
      <ModalRedirection
        show={showRedirectionModal}
        companyName1={"MentorKart"}
        openModal={showOpen}
        closeModal={close}
        partnerClick={() => {
          partnerClick("MentorKart", redirectionUrl1);
        }}
        open={open}
        setOpen={setOpen}
        redirectionUrl1={redirectionUrl1}
        setRedirectionUrl1={setRedirectionUrl1}
      />

      <div className="">
        <BannerUI
          heading={"UNLOCKING the POTENTIAL in you."}
          subheading={
            "With the help of mentorship and expert guidance work out goals and create the ultimate belief in yourself"
          }
        />
      </div>

      <div className="relative py-4 md:py-6 lg:py-8 container">
        {/* -----------------------------breadcrumbs-------------- */}
        <div>
          <BreadCrumbs data={pages} />
        </div>

        {/* ---------------------------------content under banner---------------------------- */}
        <div className="mt-8">
          <ContenUI
            heading={"Learn from best Mentors and Accelerate your career"}
            content={
              "Mentorkart is a tech-based Mentorship platform aimed to help Youth achieve their professional Goals, making youth of India Industry & Future Ready.You can learn from Top Industry Mentors & Coaches in many ways like attending their live sessions, Enrolling in Courses, Joining Job Oriented programs and having 1:1 Mentoring Sessions with them from one single call to long term like 3 months & 6 months Packages. Whether you are working professional from any industry or Studying in College, MentorKart have several programs for you to achieve your career Goals from Employability to Entrepreneurship."
            }
            subcontent={
              " So, hurry up and Join MentorKart from right here to know more"
            }
          />
        </div>

        {/* ---------------------------------services---------------------------- */}

        <div className="mt-8">
          <ServiceImages
            setFirstname={setFirstname}
            firstname={firstname}
            updateCandidateDetails={updateCandidateDetails}
            modalopen={modalopen}
            showModal={showModal}
            setShowModal={setShowModal}
            lastname={lastname}
            setLastname={setLastname}
            setEmail={setEmail}
            setMob={setMob}
            mob={mob}
            email={email}
            loading={loading}
          />
        </div>
        <div className="mt-8  ">
          {adShow ? (
            <GoogleAd_728x90
              isMobile={props.isMobile}
              path="/22637491760/timesascent.com_erelego_cp_d_728x90"
              ads_Id="div-gpt-ad-1666337496013-0"
            />
          ) : (
            <SkeletonHrec />
          )}
        </div>

        {/* ---------------------------------button for joining---------------------------- */}

        <div className="mt-8">
          <div>
            <Mentorvisit
              btnonetext={"Find Now"}
              modalopen={modalopen}
              btntwotext={"Chat Now"}
              heading={"Reach out to Experts and Mentors"}
              subhead={
                "Get Career Advice, Feedbacks,  Action Plans and resources to boost your productivity and upskills.   "
              }
            />
          </div>
        </div>

        {/* ---------------------------------add---------------------------- */}
        <div className=" mt-8 sm:flex  sm:gap-6 sm:justify-center ">
          <div className="   ">
            <div className="sm:mr-[8px]">
              {adShow ? (
                <GoogleAd_300x250
                  path="/22637491760/timesascent.com_erelego_d_ap_300x250"
                  ads_Id="div-gpt-ad-1674643828785-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
            </div>
          </div>
          <div className="mt-6 md:mt-0 right-side  md:w-[300px]">
            <FreelancerWidget {...freelancerWidgetData} />
          </div>
          <div className="mt-3 sm:mt-0">
            <div className="sm:mr-[8px]">
              {adShow ? (
                <GoogleAd_300x250
                  path="/22637491760/timesascent.com_erelego_d_ap_300x250_1"
                  ads_Id="div-gpt-ad-1674643874881-0"
                  size={[[300, 250]]}
                />
              ) : (
                <SkeletonMrec />
              )}
            </div>
          </div>
        </div>

        {/* ---------------------------------faq---------------------------- */}

        <div className="mt-8">
          <FAQ
            heading={"Trending Questions answered by Mentors"}
            data={data}
            color={"bg-zinc-100"}
          />
        </div>

        {/* ---------------------------------add---------------------------- */}

        <div className="  mt-8">
          {adShow ? (
            <GoogleAd_728x90
              isMobile={props.isMobile}
              path="/22637491760/timesascent.com_erelego_d_ap_728x90_1"
              ads_Id="div-gpt-ad-1666337386219-0"
            />
          ) : (
            <SkeletonHrec />
          )}
        </div>
      </div>

      {/* ---------------------------------footer---------------------------- */}

      <Footer />
    </div>
  );
};

export default mentorkart;
export async function getServerSideProps(context) {
  const ipAddress = context.req.headers['x-forwarded-for'] || context.req.socket.remoteAddress;
  let userAgent;
  if (context) {
    userAgent = context.req.headers["user-agent"];
  } else {
    userAgent = navigator.userAgent;
  }
  let isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  const candidateDetail = await CandidateDetailsApi(
    context.req.cookies.USERID ? context.req.cookies.USERID : "", ipAddress
  );
  return { props: { candidateDetail, isMobile } };
}
