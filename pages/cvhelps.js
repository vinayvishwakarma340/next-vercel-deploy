import BreadCrumbs from "../Components/BreadCrumbs";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";

import Head from "next/head";
import Image from "next/image";
const cvhelps = () => {
  const pages = [
    { name: "Resume Writing", href: "/resume-writing", current: false },
    { name: "Resume Help & Tips", href: "", current: true },
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
        <link rel="canonical" href="https://timesascent.com/cvhelps" />
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
        <meta property="og:url" content="https://timesascent.com/cvhelps" />
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
                  name: "Resume Help & Tips",
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
            src="/ResumeWriting/resumehelp.jpg"
            fill
            alt="TimesAscent  banner"
          />
          <div className="absolute top-[40%] left-[10%]">
            <h1 className="text-white text-3xl md:text-4xl font-bold">
              Resume creation Tips & Tricks
            </h1>
          </div>
        </div>
        <main className="mt-6">
          <h2 className="text-xl font-bold">Resume creation Tips & Tricks</h2>
          <p className="mt-6 text-sm">
            Since, in the present job market conditions, there are a large
            number of candidates, who want to apply for a single job opening,
            and there is tough competition in the job market. A Well Drafted
            Resume can help an applicant to be successful in getting his or her
            desired job. Here are some important Resume writing tips that can
            help a candidate in getting early selection for a specific job
            profile.
          </p>
          <ul class="list-disc text-sm container mt-4 [&>li]:mb-3 [&>li]:leading-6">
            <li>
              Since a Resume is a first point of contact between an applicant
              and a prospective recruiter. It should be well formatted, in an
              easy to read format using a professional font, with minimum
              styling and use of bullet points to display the essential
              information.
            </li>
            <li>
              While writing a resume a candidate should start by writing his
              Name, address and contact details, so that a recruiter can easily
              hire a candidate without any difficulty.
            </li>
            <li>
              In a well drafted resume, the applicant should generally highlight
              his or her relevant skills required for a particular job profile.
              Along with this, the applicant should provide the summary of his
              or her career achievements and qualifications required for a
              particular job profile.
            </li>
            <li>
              A good resume should generally highlight relevant experience
              according to the job profile applied by the candidate. For
              example, an applicant can highlight his important responsibilities
              in his or her previous jobs.
            </li>
            <li>
              Applicant should highlight in his Resume, that how he or she was
              able to overcome the challenges faced as team member of project
              assigned by his or her previous companies.
            </li>
            <li>
              Since a Resume gives an applicant an opportunity to do his or her
              self-marketing in front of a recruiter. So an applicant should
              highlight his or her important achievements in previous job roles.
            </li>
            <li>
              An applicant can easily show his or her personality in front of a
              recruiter by mentioning his or her hobbies in a well drafted
              Resume This will have a positive impression on the recruiter.
            </li>
            <li>
              Mentioning references is an important part of a well drafted
              Resume Although references are optional parts of a resume,
              references have a positive impact on the recruiter.
            </li>
            <li>
              Use of the right keywords is important while writing a good
              resume.
            </li>
            <li>
              If there are any gaps in an applicant's career, then he or she
              should highlight the skills developed during these gaps, if he or
              she wants to develop a professional Resume
            </li>
            <li>
              In a well drafted Resume there should be no use of acronyms, or
              company related terminology
            </li>
            <li>
              Contact details like mobile number, email form an important part
              of a well drafted Resume.
            </li>
            <li>
              Spelling and Grammar check is an essential part of preparing a
              well draftedResume. Applicants should make a comprehensive
              checking of grammar and spelling, while creating a well drafted
              professional Resume.
            </li>
          </ul>
          <div className="">
            <h2 className="text-xl font-bold"> Conclusion</h2>

            <p className="text-sm">
              Thus, one can say that the above mentioned tips & tricks can be
              very helpful in creating a professional resume, that can help an
              applicant in getting early selection in a job interview. A
              Professional and well drafted resume, can be useful grabbing
              recruiter’s attention, more frequently as compared to a normal
              resume.
            </p>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default cvhelps;
