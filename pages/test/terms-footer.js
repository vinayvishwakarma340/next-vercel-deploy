import React from "react";
import BreadCrumbs from "../../Components/BreadCrumbs";
import Footer from "../../Components/Footer";

const terms = () => {
  const pages = [
    {
      name: "Terms of Use",

      current: true,
    },
  ];



  return (
    <div className=" relative">
      <div className="columns-5 container  gap-2 space-y-2">
        <div ><img className="rounded" src="https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Technical Staff" /></div>
        <div ><img className="rounded" src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt="Technical Staff" /></div>
        <div ><img className="rounded" src="https://images.unsplash.com/photo-1551021794-03be4ddaf67d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt="Technical Staff" /></div>
        <div ><img className="rounded" src="https://images.unsplash.com/photo-1574169207511-e21a21c8075a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="Technical Staff" /></div>
        <div ><img className="rounded" src="https://images.unsplash.com/photo-1633621412960-6df85eff8c85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="Technical Staff" /></div>
        <div ><img className="rounded" src="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="Technical Staff" /></div>   <div ><img className="rounded" src="https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Technical Staff" /></div>
        <div ><img className="rounded" src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt="Technical Staff" /></div>
        <div ><img className="rounded" src="https://images.unsplash.com/photo-1551021794-03be4ddaf67d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt="Technical Staff" /></div>
        <div ><img className="rounded" src="https://images.unsplash.com/photo-1574169207511-e21a21c8075a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="Technical Staff" /></div>
        <div ><img className="rounded" src="https://images.unsplash.com/photo-1633621412960-6df85eff8c85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="Technical Staff" /></div>
        <div ><img className="rounded" src="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="Technical Staff" /></div>   <div ><img className="rounded" src="https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="Technical Staff" /></div>
        <div ><img className="rounded" src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt="Technical Staff" /></div>
        <div ><img className="rounded" src="https://images.unsplash.com/photo-1551021794-03be4ddaf67d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt="Technical Staff" /></div>
        <div ><img className="rounded" src="https://images.unsplash.com/photo-1574169207511-e21a21c8075a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="Technical Staff" /></div>
        <div ><img className="rounded" src="https://images.unsplash.com/photo-1633621412960-6df85eff8c85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="Technical Staff" /></div>
        <div ><img className="rounded" src="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGltYWdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="Technical Staff" /></div>
      </div>
      <div className="relative   py-4 container  bg-white">
        <BreadCrumbs data={pages} />
      </div>
      <div className="relative pb-10  container">
        <div className=" bg-white  ">
          <div className=" ">
            {/* <h2 className="font-semibold leading-6 text-indigo-600">
                      Work with us
                    </h2> */}
            <h1 className="mb-2 text-xl font-bold   ">Terms of Use</h1>
            <div>
              <h2 className=" text-base font-semibold leading-6 ">
                Coleman & Co. Limited ("We / BCCL / Company") as set out below
                ("Terms of Use / User Terms of Use"). This Agreement is for an
                indefinite term and you understand and agree that you are bound
              </h2>
              <ol class="list-decimal mt-6 ml-4">
                <li className="">
                  The Site is owned, managed and operated by Bennett, Coleman &
                  Co. Limited.
                </li>
                <li className="mt-2">
                  You must be 18 years of age or older to visit or use the Site
                  in any manner. In the event that you are below 18 yrs. of age,
                  you are visiting the Site at your own risk and you alone shall
                  be liable for your actions. By visiting this site or accepting
                  these Terms of Use, you represent and warrant to the Company
                  that you are 18 years of age or older, and that you have the
                  right, authority and capacity to use the Site and agree to and
                  abide by these Terms of Use. You also represent and warrant to
                  the Company that you will use the Site in a manner consistent
                  with any and all applicable laws and regulations.
                </li>
                <li className="mt-2">
                  By using the Site, you agree to follow and be bound by all
                  terms and conditions concerning your use of the Site. Certain
                  areas of the Site may have different terms of use posted. If
                  there is a conflict between the Terms of Use and terms of use
                  posted for a specific area of the Site, the latter shall have
                  precedence with respect to your use of that area of the Site.
                </li>
                <li className="mt-2">
                  BCCL may terminate User's access to the Site or any part
                  thereof at any time and for any reason without any notice. The
                  provisions regarding disclaimer of warranty, accuracy of
                  information, software, database other system or functionality
                  of website and indemnification shall survive such termination.
                  BCCL may monitor User's access to the Site.
                </li>
                <li className="mt-2">
                  BCCL may change or discontinue any aspect of the Site at any
                  time, including, its content or features. BCCL reserves the
                  right to change the Terms of Use applicable to use of the
                  Site. Such changes shall be effective immediately upon notice,
                  which shall be placed on the Site.
                </li>
                <li className="mt-2">
                  All contents on the Site are the exclusive property of BCCL
                  except the third party content. The software, text, images,
                  graphics, video and audio used on the Site belong to or are
                  licensed to BCCL or its subsidiaries and affiliates. No
                  material from the Site may be copied, modified, reproduced,
                  republished, uploaded, transmitted, posted or distributed in
                  any form without prior written permission from BCCL. All
                  rights not expressly granted herein are reserved. Unauthorised
                  use of the materials appearing on the Site may violate
                  copyright, trademark and other applicable laws, and could
                  result in criminal or civil penalties. You are granted a
                  non-exclusive, non-transferable, limited right to access the
                  Site and avail the services provided by BCCL on the Site.
                </li>
                <li className="mt-2">
                  BCCL does not make any warranties, express or implied, with
                  respect to any service, information, data, software, system,
                  functionality, statements or products made available on the
                  Site. The information contained in the Site has been obtained
                  from sources believed to be reliable. The Site, and all
                  content, materials, information, software and services
                  provided on the Site, are provided on an "as is" and "as
                  available" basis.
                </li>
              </ol>
            </div>
          </div>
          <ol class="list-decimal mt-6 ml-4" start={8}>
            <li className="mt-2">
              BCCL does not warrant that the Site will operate error-free or
              that the Site and its servers are free of computer viruses or
              other harmful mechanisms. If your use of the Site or content
              therein results in the need for servicing or replacing equipment
              or data, BCCL is not responsible for any such costs. Site and
              content are provided on an "as is" basis without any warranties of
              any kind. BCCL to the fullest extent permitted by law, disclaims
              all warranties, whether express or implied, including the fitness
              for particular purpose and non-infringement. BCCL makes no
              warranties about the accuracy, reliability, completeness, or
              timeliness of the content, services, software, text, graphics, and
              links.
            </li>
            <li className="mt-2">
              BCCL shall not be liablefor any damage to User's computer system
              or loss of data that result from the download of any content,
              materials, and information from the Site or use of any software,
              systems, functionality, or other services on the Site. Under no
              circumstances will BCCL be liable in any way for any content,
              including, but not limited to, inaccurate, false, incomplete,
              threatening, defamatory, obscene, offensive, illegal content,
              infringement of other's rights including intellectual property
              rights, for any errors or omissions in any content, or for any
              loss or damage of any kind incurred as a result of the use of any
              content posted or uploaded. Further, under no circumstances, BCCL
              shall be liable for any unlawful act of the User or its
              affiliates, relatives, employees, agents including misuse of any
              data, unfair trade practices, fraud, cyber squatting, hacking and
              other cyber crimes. In no event shall BCCL be liable for damages
              of any kind, including without limitation, direct, incidental or
              consequential damages (including, but not limited to, damages for
              lost profits, business interruption and loss of programs or
              information) arising out of the use of or inability to use Site,
              or any information provided thereon, or any claim attributable to
              errors, omissions or other inaccuracies in the Site.
            </li>
            <li className="mt-2">
              You may not send, submit, post, or otherwise transmit, material or
              messages that contain software virus, or any other files that are
              designed to interrupt, destroy, and negatively affect in any
              manner whatsoever, any electronic equipment in connection with the
              use of the Site, or other user's ability to use the Site.
            </li>
            <li className="mt-2">
              User agrees to indemnify and hold BCCL, its subsidiaries,
              affiliates, officers and employees, harmless from any claim,
              demand or damage, including reasonable attorney's fees, asserted
              by any third party due to or arising out of your use of or conduct
              on the Site BCCL reserves the right to disclosure any personal
              information about you and your use of the Site including its
              contents, without your prior permission if BCCL has a good faith
              belief that such action is necessary to :
              <ol className="list-disc	mt-2 pl-6">
                <li>
                  Conform to legal requirements or comply with legal process;
                </li>
                <li>
                  Protect and defend the rights or property of BCCL or its
                  affiliated companies;
                </li>
                <li>Enforce the Terms of Use; or</li>
                <li>Act to protect the interest of its members or others.</li>
              </ol>
            </li>
            <li className="mt-2">
              The User's right to privacy is of paramount importance to BCCL.
              Any information provided by the User will not be shared with any
              third party, except in the manner provided under these Terms of
              Use and for the intended purpose for which such information is
              provided by the User, in which case User's consent is implied.
              BCCL reserves the right to use the information to provide the User
              a more personalized online experience.
            </li>
            <li className="mt-2">
              If the Site provides links to web sites and access to content,
              products and services from third parties, including users,
              advertisers, affiliates and sponsors of the Site, you agree that
              BCCL is not responsible for the availability of, and content
              provided on, third party web sites or content. The User is
              requested to peruse the policies posted by other web sites
              regarding privacy and other topics before use. BCCL is not
              responsible for third party content accessible through the Site,
              including opinions, advice, statements and advertisements, and
              User shall bear all risks associated with the use of such content.
              BCCL is not responsible for any loss or damage of any sort which
              User may incur from dealing with any third party.
            </li>
            <li className="mt-2">
              By using any third party content, User may leave the Site and be
              directed to an external website, or to a website maintained by an
              entity other than BCCL. If you decide to visit any such site, you
              do so at your own risk and it is your responsibility to take all
              protective measures to guard against viruses or any other
              destructive elements. BCCL makes no warranty or representation
              regarding, and does not endorse, any linked web sites or the
              information appearing thereon or any of the products or services
              described thereon. Links do not imply that BCCL or the Site
              sponsors, endorses, is affiliated or associated with, or is
              legally authorized to use any trademark, trade name, logo or
              copyright symbol displayed in or accessible through the links, or
              that any linked site is authorized to use any trademark, trade
              name, logo or copyright symbol of BCCL or any of its affiliates or
              subsidiaries. You hereby expressly acknowledge and agree that the
              linked sites are not under the control of BCCL and BCCL is not
              responsible for the contents of any linked site or any link
              contained in a linked site, or any changes or updates to such
              sites. BCCL is not responsible for webcasting or any other form of
              transmission received from any linked site. BCCL is providing
              these links to you only as a convenience, and the inclusion of any
              link shall not be construed to imply endorsement by BCCL in any
              manner of the website.
            </li>
            <li className="mt-2">
              For availing the services under the Site, registration by the User
              is required. You will receive a password and account designation
              upon completing the registration on the Site. You are responsible
              for maintaining the confidentiality of the password and account
              and are fully responsible for all activities that occur under your
              password or account. By registering, you agree to the following
              terms in addition to any other specific terms which shall be
              posted at an appropriate location of the Site. Each registration
              is for a single individual user only. To access these services,
              you will be asked to enter your individual User Name and Password.
              Therefore, we do not permit any of the following:-:
              <ol className="list-disc	mt-2 pl-6">
                <li>Any other person sharing your User Name and Password.</li>
                <li>
                  Any part of the Site being cached in proxy servers and
                  accessed by individuals who have not registered with Site as
                  users.
                </li>
                <li>Enforce the Terms of Use; or</li>
                <li>
                  Access through a single User Name and Password being made
                  available to multiple users on a network.
                </li>
              </ol>
            </li>
            <li className="mt-2">
              If we reasonably believe that a User Name and Password are being
              used / misused in any manner as clarified above, we reserve the
              right to cancel access rights immediately without notice, and
              block access to all users from that IP address.
            </li>
            <li className="mt-2">
              You specifically agree that BCCL shall not be responsible for
              unauthorized access to or alteration of your transmissions or
              data, any material or data sent or received or not sent or
              received through the Site.
            </li>
            <li className="mt-2">
              <span className="text-md font-bold ">
                Prohibited Activities :
              </span>
              <div>
                You shall not host, display, upload, modify, publish, transmit,
                update or share any information on the Site, that ?
              </div>
              <ol className="list-disc	mt-2 pl-6">
                <li>
                  Belongs to another person and to which you do not have any
                  right to.
                </li>
                <li>
                  Is grossly harmful, harassing, blasphemous, defamatory,
                  obscene, pornographic, paedophilic, libellous, invasive of
                  another's privacy, hateful, or racially, ethnically
                  objectionable, disparaging, relating or encouraging money
                  laundering or gambling, or otherwise unlawful in any manner
                  whatever;
                </li>
                <li>Harm minors in any way.</li>
                <li>
                  Infringes any patent, trademark, copyright or other
                  proprietary rights.
                </li>

                <li>Violates any law for the time being in force;</li>
                <li>
                  Deceives or misleads the addressee about the origin of such
                  messages or communicates any information which is grossly
                  offensive or menacing in nature.
                </li>
                <li>
                  Impersonate another person;Contains software viruses or any
                  other computer code, files or programs designed to interrupt,
                  destroy or limit the functionality of any computer resource.
                </li>
                <li>
                  Threatens the unity, integrity, defence, security or
                  sovereignty of India, friendly relations with foreign states,
                  or public order or causes incitement to the commission of any
                  cognisable offence or prevents investigation of any offence or
                  is insulting any other nation.
                </li>
              </ol>
            </li>
          </ol>
          <div>
            <div className="mt-4 font-semibold ">
              Any Content uploaded by you shall be subject to relevant laws and
              may disabled, or and may be subject to investigation under
              appropriate laws. Furthermore, if you are found to be in
              non-compliance with the laws and regulations, these terms, or the
              privacy policy of the Site, we may terminate your account/block
              your access to the Site and we reserve the right to remove any
              non-compliant Content uploaded by you.
            </div>
            <div className="mt-4">
              <h5>Notice of Copyright Infringement</h5>
              <div className="mt-2">
                BCCL is not liable for any infringement of copyright arising out
                of materials posted on or transmitted through the site, or items
                advertised on the site, by end users or any other third parties.
                In the event you have any grievance in relation to any Content
                uploaded on the Site, you may contact our Grievance Officer, at
                copyright.infringement@timesgroup.com; or
              </div>
            </div>

            <div className="mt-4">
              <h5 className="font-semibold ">
                Write at the following address:
              </h5>
              <div>Bennett, Coleman & Co. Ltd.</div>
              <div>Times Of India Building,Dr.D.N.Road,</div>
              <div>Mumbai- 400 001.</div>
              <div>Ph No. 91-22-66353535</div>
            </div>
            <div className="mt-4">
              <h5 className="font-semibold ">
                We request you to please provide the following information in
                your complaint:-
              </h5>
              <ol className="list-decimal	mt-2 pl-6">
                <li>
                  A physical or electronic signature of a person authorized to
                  act on behalf of the copyright owner for the purposes of the
                  complaint.
                </li>
                <li>
                  Identification of the copyrighted work claimed to have been
                  infringed.
                </li>
                <li>
                  Identification of the material on our website that is claimed
                  to be infringing or to be the subject of infringing activity.
                  The address, telephone number or e-mail address of the
                  complaining party.
                </li>
                <li>
                  A statement that the complaining party has a good-faith belief
                  that use of the material in the manner complained of is not
                  authorized by the copyright owner, its agent or the law.
                </li>
                <li>
                  A statement, under penalty of perjury, that the information in
                  the notice of copyright infringement is accurate, and that the
                  complaining party is authorized to act on behalf of the owner
                  of the right that is allegedly infringed
                  <ol className="list-disc	mt-2 pl-6">
                    <li>
                      The User hereby specifically agrees to comply with the
                      requirements of the Information Technology Act, 2000 as
                      also rules, regulations, guidelines, bye laws and
                      notifications made thereunder, while on the Site. The user
                      also undertakes that the content provided by him/her is
                      not defamatory, obscene, threatening, abusive or hateful.
                      The User shall alone be responsible for all his acts,
                      deeds and things and that he alone shall be liable for
                      civil and criminal liability there under or under any
                      other law for the time being in force.
                    </li>
                    <li>
                      BCCL may, if you so choose, send direct mailers to you at
                      the address given by you. You have the option to 'opt-out'
                      of this direct mailer by way of links provided at the
                      bottom of each mailer. BCCL respect your privacy and in
                      the event that you choose to not receive such mailers,
                      BCCL will take all steps to remove you from the list.
                    </li>
                    <li>
                      BCCL recognizes the receipt, transmission or distribution
                      of spam emails (unsolicited bulk emails) as a major
                      concern and has taken reasonable measures to minimize the
                      transmission and effect of spam emails in its computing
                      environment. All emails received by BCCL, are subject to
                      spam check. Any email identified as spam will be rejected
                      with sufficient information to the Sender for taking
                      necessary action. With this measure, along with other
                      technical spam reduction measures, BCCL hopes to minimize
                      the effect of spam emails. BCCL reserves the right to
                      reject and/or report any suspicious spam emails, to the
                      authorities concerned, for necessary action, from time to
                      time.
                    </li>
                    <li>
                      No failure or delay by BCCL in exercising any right, power
                      or privilege under the Terms of Use will operate as a
                      waiver of it, nor will any single or partial exercise of
                      it preclude any further exercise or the exercise of any
                      right, power or privilege under the Terms of Use.
                    </li>
                    <li>
                      The Site is controlled, operated and administered by BCCL
                      from its offices within India. BCCL makes no
                      representation that Materials on this site are appropriate
                      or available for use at any other location(s) outside
                      India. Any access to this site from territories where
                      their contents are illegal is prohibited. You may not use
                      the site or export the materials in violation of any
                      applicable export laws and regulations. If you access this
                      site from a location outside India, you are responsible
                      for compliance with all local laws.
                    </li>
                    <li>
                      The Terms of Use shall be governed by the Laws of India.
                      The Courts of law at Mumbai shall have exclusive
                      jurisdiction over any disputes arising under the Terms of
                      Use. More ways to explore Ascent
                    </li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default terms;
