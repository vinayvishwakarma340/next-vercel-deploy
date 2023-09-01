import Head from "next/head";
import React from "react";
import BreadCrumbs from "../Components/BreadCrumbs";
import Footer from "../Components/Footer";
import MainHeader from "../Components/MainHeader";

const PrivacyPolicy = () => {
  const pages = [
    {
      name: "Privacy Policy",
      href: "#",
      current: true,
    },
  ];

  return (
    <div className=" relative">
      <Head>
        <meta charSet="utf-8" />
        <title>{`Privacy Policy  - TimesAscent.com`}</title>
        <meta
          name="description"
          content={`Times Ascent is a weekly supplement of Times Of India. The Online version focusses on Employment, Human Resource development, Careers ,  Job Postings, Resume Builder, Psychometric Tests, `}
        />
        <link rel="canonical" href="https://timesascent.com/privacy-policy" />
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
          content={`Privacy Policy  - TimesAscent.com`}
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`Get Privacy Policy of Times Ascent. Find policies on User Information,Cookies,Link to Third Party Side,Information Sharing,Assessing & Updating Personal Information,Information Security`}
        />
        <meta
          property="og:url"
          content="https://timesascent.com/privacy-policy"
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
          content={`Privacy Policy  - TimesAscent.com`}
        />
        <meta
          property="twitter:description"
          content={`Get Privacy Policy of Times Ascent. Find policies on User Information,Cookies,Link to Third Party Side,Information Sharing,Assessing & Updating Personal Information,Information Security`}
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
                  position: 1,
                  name: "Privacy policy",
                },
              ],
            }),
          }}
        />
      </Head>

      <MainHeader />
      <div className="relative   py-4 container lg:py-4 bg-white">
        <BreadCrumbs data={pages} />
      </div>
      <div className="relative py-4  container">
        <div className="relative bg-white shadow-lg "></div>
        <div className=" ">
          {/* <h2 className="font-semibold leading-6 text-indigo-600">
                  Work with us
                </h2> */}
          <h1 className=" text-xl font-bold  tracking-tight  ">
            Privacy Policy
          </h1>
          <div>
            <p className="mt-4 ">
              BCCL respects the privacy of it's users and is committed to
              protect it in all respects. With a view to offer most enriching
              and holistic internet experience to it's users BCCL offers a vast
              repository of Online Sites and variety of community services. Most
              of the Online Community Services are offered for free but you need
              a Universal mandatory registration to surf 'BCCL Channels' in
              detail. The information about the user as collected by BCCL is:
              (a) information supplied by users and (b) information
              automatically tracked while navigation (Information) .
            </p>
            <p className="mt-2">
              By using BCCL's website or its services, you consent to
              collection, storage, and use of the personal information you
              provide (including any changes thereto as provided by you) for any
              of the services that we offer.
            </p>
          </div>
          <div className="mt-6">
            <h2 className="mb-2 text-lg md:text-xl font-bold leading-6 ">
              User Information
            </h2>
            <p>
              To avail certain sites / services on our websites, users are
              required to provide certain information for the registration
              process namely:- a) your name, (b) email address, (c) Contact
              addresses, (d) sex, (e) age, (f) PIN code , (g) credit card or
              debit card details (h) medical records and history (i) sexual
              orientation, (j) biometric information, (k) password etc., and /
              or your occupation, interests, and the like.. The Information as
              supplied by the users enables us to improve our sites and provide
              you the most user-friendly experience.All required information is
              service dependent and BCCL may use the above said User information
              to, maintain, protect, and improve its services (including
              advertising services) and for developing new services.Such
              information will not be considered as sensitive if it is freely
              available and accessible in the public domain or is furnished
              under the Right to Information Act, 2005 or any other law for the
              time being in force.
            </p>
          </div>
          <div className="mt-6">
            <h3 className="mb-2 text-lg md:text-xl font-bold leading-6 ">
              Cookies
            </h3>
            <p>
              To avail certain sites / services on our websites, users are
              required to provide certain information for the registration
              process namely:- (a) your name, (b) email address, (c) Contact
              addresses, (d) sex, (e) age, (f) PIN code , (g) credit card or
              debit card details (h) medical records and history (i) sexual
              orientation, (j) biometric information, (k) password etc., and /
              or your occupation, interests, and the like.. The Information as
              supplied by the users enables us to improve our sites and provide
              you the most user-friendly experience.All required information is
              service dependent and BCCL may use the above said User information
              to, maintain, protect, and improve its services (including
              advertising services) and for developing new services.Such
              information will not be considered as sensitive if it is freely
              available and accessible in the public domain or is furnished
              under the Right to Information Act, 2005 or any other law for the
              time being in force.
            </p>
          </div>
          <div className="mt-6">
            <h3 className="mb-2 text-lg md:text-xl font-bold leading-6 ">
              Link to Third Party Side
            </h3>
            <p>
              BCCL includes links to other websites. Such sites are governed by
              their respective privacy policies, which are beyond our control.
              Once you leave our servers (you can tell where you are by checking
              the URL in the location bar on your browser), use of any
              information you provide is governed by the privacy policy of the
              operator of the site you are visiting. That policy may differ from
              ours. If you can't find the privacy policy of any of these sites
              via a link from the site's homepage, you should contact the site
              directly for more information. When we present information to our
              advertisers -- to help them understand our audience and confirm
              the value of advertising on our website -- it is usually in the
              form of aggregated statistics on traffic to various pages within
              our site. When you register with BCCL, we contact you from time to
              time about updation of your content to provide the users such
              features that we believe may benefit you.
            </p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="mb-2 text-lg md:text-xl font-bold leading-6 ">
            Information Sharing
          </h3>
          <p>
            BCCL shares the sensitive personal information to any third party
            without obtaining the prior consent of the User in the following
            limited circumstances: 1. When itis requested or required by law or
            by any court or governmental agency or authority to disclose, for
            the purpose of verification of identity, or for the prevention,
            detection, investigation including cyber incidents, or for
            prosecution and punishment of offences. These disclosures are made
            in good faith and belief that such disclosure is reasonably
            necessary for enforcing these Terms; for complying with the
            applicable laws and regulations. 2. BCCL proposes to sharesuch
            information within its group companies and officers and employees of
            such group companies for the purpose of processing personal
            information on its behalf. We also ensure that these recipients of
            such information agree to process such information based on our
            instructions and in compliance with this Privacy Policy and any
            other appropriate confidentiality and security measures.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="mb-2 text-lg md:text-xl font-bold leading-6 ">
            Assessing & Updating Personal Information
          </h3>
          <p>
            When you use BCCL's websites, we make good faith efforts to provide
            you, as and when requested by you, with access to your personal
            information and shall further ensure that any personal information
            or sensitive personal data or information found to be inaccurate or
            deficient shall be corrected or amended as feasible, subject to any
            requirement for such personal information or sensitive personal data
            or information to be retained by law or for legitimate business
            purposes. We ask individual users to identify themselves and the
            information requested to be accessed, corrected or removed before
            processing such requests, and we may decline to process requests
            that are unreasonably repetitive or systematic, require
            disproportionate technical effort, jeopardize the privacy of others,
            or would be extremely impractical (for instance, requests concerning
            information residing on backup tapes), or for which access is not
            otherwise required. In any case where we provide information access
            and correction, we perform this service free of charge, except if
            doing so would require a disproportionate effort. Because of the way
            we maintain certain services, after you delete your information,
            residual copies may take a period of time before they are deleted
            from our active servers and may remain in our backup systems.
          </p>
        </div>
        <div className="mt-6">
          <h3 className="mb-2 text-lg md:text-xl font-bold leading-6 ">
            Information Security
          </h3>
          <p>
            We take appropriate security measures to protect against
            unauthorized access to or unauthorized alteration, disclosure or
            destruction of data. These include internal reviews of our data
            collection, storage and processing practices and security measures,
            including appropriate encryption and physical security measures to
            guard against unauthorized access to systems where we store personal
            data.
          </p>
          <p className="mt-2">
            All information gathered on BCCL is securely stored within the BCCL
            controlled database. The database is stored on servers secured
            behind a firewall; access to the servers is password-protected and
            is strictly limited. However, as effective as our security measures
            are, no security system is impenetrable. We cannot guarantee the
            security of our database, nor can we guarantee that information you
            supply will not be intercepted while being transmitted to us over
            the Internet. And, of course, any information you include in a
            posting to the discussion areas is available to anyone with Internet
            access.
          </p>
          <p className="mt-2">
            We use third-party advertising companies to serve ads when you visit
            our Web site. These companies may use information (not including
            your name, address, email address or telephone number) about your
            visits to this and other Web sites in order to provide
            advertisements about goods and services of interest to you.
          </p>
          <p className="mt-2">
            In the event you have any grievance relating to the processing of
            information provided by you, you may contact our Grievance Officer,
            at copyright.infringement@timesgroup.com or
          </p>
          <p className="mt-2">write at the following address:</p>
          <div>
            <p>Bennett, Coleman & Co. Ltd.</p>
            <p>Times Of India Building,Dr.D.N.Road,</p>
            <p>Mumbai- 400 001.</p>
            <p>Ph No. 91-22-66353535</p>
          </div>
        </div>
        <div className="mt-6">
          <h3 className="mb-2 text-lg md:text-xl font-bold leading-6 ">
            Assessing & Updating Personal Information
          </h3>
          <p>
            When you use BCCL's websites, we make good faith efforts to provide
            you, as and when requested by you, with access to your personal
            information and shall further ensure that any personal information
            or sensitive personal data or information found to be inaccurate or
            deficient shall be corrected or amended as feasible, subject to any
            requirement for such personal information or sensitive personal data
            or information to be retained by law or for legitimate business
            purposes. We ask individual users to identify themselves and the
            information requested to be accessed, corrected or removed before
            processing such requests, and we may decline to process requests
            that are unreasonably repetitive or systematic, require
            disproportionate technical effort, jeopardize the privacy of others,
            or would be extremely impractical (for instance, requests concerning
            information residing on backup tapes), or for which access is not
            otherwise required. In any case where we provide information access
            and correction, we perform this service free of charge, except if
            doing so would require a disproportionate effort. Because of the way
            we maintain certain services, after you delete your information,
            residual copies may take a period of time before they are deleted
            from our active servers and may remain in our backup systems.
          </p>
        </div>
        <div className="mt-6">
          <p className="mb-2">
            We request you to please provide the following information in your
            complaint:-
          </p>
          <ol class="list-decimal pl-6">
            <li>Identification of the information provided by you</li>
            <li>
              Clear statement as to whether the information is personal
              information or sensitive personal information
            </li>
            <li>Your address, telephone number or e-mail address.</li>
            <li>
              A statement that you have a good-faith belief that the information
              has been processed incorrectly or disclosed without authorization,
              as the case may be.
            </li>
            <li>
              A statement, under penalty of perjury, that the information in the
              notice is accurate, and that the information being complained
              about belongs to you.
            </li>
          </ol>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
