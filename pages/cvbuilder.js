import BreadCrumbs from "../Components/BreadCrumbs";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";

import Head from "next/head";
import Image from "next/image";
const cvbuilder = () => {
  const pages = [
    { name: "Resume Writing", href: "/resume-writing", current: false },
    { name: "Resume Builder", current: true },
  ];
  return (
    <div className="">
      <MainHeader />

      <Head>
        <meta charSet="utf-8" />
        <title>{`CV builder - TimesAscent.com`}</title>
        <meta
          name="description"
          content={`Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com`}
        />
        <link rel="canonical" href="https://timesascent.com/cvbuilder" />
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
        <meta property="og:url" content="https://timesascent.com/cvbuilder" />
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
                  name: "Resume Builder",
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
        <div className={"mt-6 h-60 sm:h-60 relative"}>
          <Image
            style={{ objectFit: "cover" }}
            src="/ResumeWriting/resumebuilder.jpg"
            fill
            alt="TimesAscent  banner"
          />
          <div className="absolute top-[40%] left-[10%]">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              Free Resume Builder
            </h1>
          </div>
        </div>
        <main className="mt-6">
          <h2 className="text-xl font-bold">Main Uses of Resume BUILDER</h2>
          <h3 className="text-xl font-semibold my-6">Introduction</h3>
          <p className="mt-6 text-sm">
            In general terms, Resume developer is a specialized tool, which can
            be used by the career consultants to create professional resumes for
            the job seekers.Basically a Resume developer can be helpful for
            career consultants and job seekers in many ways.
          </p>
          <p className="mt-6 text-sm">
            Here are some important features of a Resume developer tool used by
            H.R. Consultants and job seekers.
          </p>
          <ul class="list-disc text-sm px-[3%] mt-4 [&>li]:mb-3 [&>li]:leading-6">
            <li>
              A Resume developer tool can be helpful in preparing a well
              drafted, customization Resume Templates.
            </li>
            <li>
              A Resume developer tools, generally provide progressive guidance,
              along with expert opinion for creating a professional up-to-date
              Resume
            </li>
            <li>
              With the help of a Resume developer tool any person can add,
              professionally used ready-to-use examples, by just clicking a
              button.
            </li>
          </ul>
          <div className="">
            <h2 className="text-base font-bold">
              A Resume developer tool can also help a candidate, in getting his
              or her desired job in many ways given below:-
            </h2>

            <ul class="list-decimal text-sm px-[2%]  mt-4 [&>li]:mb-3 [&>li]:leading-6">
              <li>
                Generally, If an applicant wants to create a professionally
                updated Resume He or she might have to spend a number of hours
                in formatting a professional resume, but our Resume developer
                tool takes very less time in developing a professionally updated
                resume as compared to manually created resume.
              </li>
              <li>
                Resume developer tool is also an Applicant Tracking Software
                (ATS) friendly tool. As it can help in creating such a type of
                professional Resume Templates, which can avoid a troublesome
                Applicant Tracking Software, that normally, rejects poorly
                formatted resumes,submitted by the applicants.
              </li>
              <li>
                Our ready-to-use Resume developer tool is developed with the
                assistance of expert career consultants, this tool can be
                helpful in creating professionally developed, well formatted
                Resume which can be helpful for an applicant in getting his or
                her desired job,without facing frustration of rejection in
                several job interviews.
              </li>
              <li>
                Resume developer tool can provide assistance to the applicant by
                providing step- by-step progressive advice, tips & tricks for
                procuring a job by renowned H.R. Professionals. Several
                industry-oriented job descriptions that can help applicants in
                making a resume professionally updated.
              </li>
              <li>
                Resume developer tool is also useful in assisting an applicant
                in changing font; text size etc. in his or her Resume Along with
                this it can be helpful in adding or deleting any section of the
                resume in MS word or PDF format. This can be done, by just
                clicking a single button by the user.
              </li>
              <li>
                Resume developer can also help an applicant by helping him to
                choose a desired professional resume, from a number of
                professional resumes that are created with the help of this
                specialized tool.
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Conclusion</h3>
            <p>
              Thus, one can easily say that, now at present time, Resume
              developer is one of the important tools, used by the career
              consultants and applicants, which can help in developing a
              professional updated resume.It can also provide useful advice to
              the applicant,regarding creation of a professionally updated
              resume, which can be helpful in getting selected for a specific
              job profile. An applicant or HR. professionals can take help from
              Resume developer, in creating a well drafted professional resume
              without any hesitation. As this tool is being used by thousands of
              HR. Professionals and applicants, to create professional Resume
              worldwide.
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default cvbuilder;
