import BreadCrumbs from "../Components/BreadCrumbs";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";

import Head from "next/head";
import Image from "next/image";
const coverletter = () => {
  const pages = [
    { name: "Resume Writing", href: "/resume-writing", current: false },
    { name: "Cover Letter", href: "", current: true },
  ];

  return (
    <div className="">
      <MainHeader />

      <Head>
        <meta charSet="utf-8" />
        <title>{`Corporates Care`}</title>
        <meta
          name="description"
          content={`Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com`}
        />
        <link rel="canonical" href="https://timesascent.com/coverletter" />
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
        <meta property="og:title" content="Corporates Care" />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com"
        />
        <meta property="og:url" content="https://timesascent.com/coverletter" />
        <meta
          property="og:image"
          content="https://timesascent.com/newimages/main/times_ascent_logo.svg"
        />
        <meta
          property="twitter:image"
          content="https://timesascent.com/newimages/main/times_ascent_logo.svg"
        />
        <meta property="twitter:title" content="Corporates Care" />
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
                  name: "Resume Writing",
                  item: "https://timesascent.com/resume-writing",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Cover Letter",
                },
              ],
            }),
          }}
        />
      </Head>

      <div className="  py-4 md:py-6 lg:py-8 container">
        <div className="">
          <BreadCrumbs data={pages} />
        </div>
        <div className={"mt-6 h-60 sm:h-60 relative "}>
          <Image
            style={{ objectFit: "cover" }}
            src="/ResumeWriting/resumecoverlettertemplates.jpg"
            fill
            alt="TimesAscent  banner"
          />
          <div className="absolute top-[40%] left-[10%]">
            <h1 className=" text-3xl md:text-4xl font-bold">Cover Letter</h1>
          </div>
        </div>
        <main className="mt-6">
          <h2 className="text-xl font-bold">Cover Letter</h2>
          <p className="mt-6 text-sm">
            A cover letter is a vital tool for demonstrating how your unique mix
            of abilities and expertise meets the job description's main
            requirements. It is your opportunity to demonstrate a clear
            connection between your knowledge, experience, and talents and the
            demands of the company. Cover letters are used for a variety of
            purposes, the correct structure for each one differs. There are
            mainly three types of cover letters: the application cover letter,
            the prospecting cover letter, and the networking cover letter.
          </p>

          <div className="bg-stone-400 min-h-[200px] mt-12 p-6 md:p-10 md:flex">
            <div className="sm:w-[55%] md:pt-10 md:pr-20">
              <h3 className="text-white text-3xl font-bold ">
                Create a Job-Winning Cover Letter in Minutes
              </h3>
              <p className="my-10 text-xl text-white font-semibold">
                Use our professional cover letter templates to create a message
                that wows employers!
              </p>
              <ul className=" text-white font-medium text-xl list-disc  container mt-4 [&>li]:mb-5 [&>li]:leading-10">
                <li>Choose a one-click design template</li>
                <li>Easily customize your cover letter</li>
                <li>Land the interview and get hired faster!</li>
              </ul>
            </div>
            <div className="md:w-[45%]">
              <div className={"mt-6 h-[700px] relative "}>
                <Image
                  src="/ResumeWriting/cover_letter_image.jpg"
                  fill
                  alt="TimesAscent  banner"
                />
                <div className="absolute top-0 left-0 px-[12%] pt-[5%] ">
                  <div className="text-white text-2xl font-medium mb-1">
                    CANDIDATE'S NAME
                  </div>
                  <div className="text-white text-base">
                    CANDIDATE'S POSITION
                  </div>

                  <div className="mt-20 text-sm">
                    <p>To</p>
                    <p>(Company Name)</p>
                    <p>Dear (Name of Concerned person)</p>
                    <p className="mt-6">
                      Proceed with informing them the source of the job posting
                      and thank them for giving you the opportunity to apply for
                      the position.
                    </p>
                    <p className="mt-3">
                      Give a 2-3 line brief about your qualifications and
                      experience. Also include your top skills. It should be
                      150-170 words. Keep it short and crisp for better impact.
                      Mention that you have attached a your resume and that you
                      are looking forward to hearing from them.
                    </p>
                    <p className="my-6">Sincerely,</p>
                    <p>Candidate's Name</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default coverletter;
