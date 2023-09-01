const FreelanceJobCard = (props) => {
  const timeSince = (date) => {
    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
  };
  const companyName = (firstName, lastName) => {
    return (
      firstName.charAt(0).toUpperCase() +
      firstName.slice(1) +
      " " +
      lastName.charAt(0).toUpperCase()
    );
  };
  const mainSkillHandler = (skill) => {
    let firstSkill = skill[0];

    let mainSkill =
      firstSkill.Skill.charAt(0).toUpperCase() + firstSkill.Skill.slice(1);
    return mainSkill;
  };

  const workTypeColor = (workType) => {
    if (workType === "commission") {
      return "Commission";
    }
    if (workType === "monthly-basis") {
      return "Monthly";
    }
    if (workType === "onetime") {
      return "One-Time";
    }

    if (workType === "contract") {
      return "Contract";
    }
  };
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-6 px-3 mx-auto max-w-screen-xl lg:py-10 lg:px-4">
          <div className="mx-auto max-w-screen-sm text-center  mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Apply on the Freelance Projects
            </h2>
            <p className="font-semibold text-gray-900 sm:text-xl dark:text-gray-400">
              Find the best matched Freelance jobs & projects. Search for the
              right job and work the way you want
            </p>
          </div>
          <div className="grid gap-4 lg:gap-6 md:grid-cols-3">
            {props.freelancerData.dataMain.map((item, i) => (
              <article className="px-6 py-6 md:px-2 md:py-4 lg:py-6  lg:px-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between items-center mb-4 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center  py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                    </svg>
                    Its a {workTypeColor(item.RequirementType)} job!
                  </span>

                  <span className="text-sm ">
                    {timeSince(new Date(item.UpdatedDate))} ago
                  </span>
                </div>

                <h2 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2 h-14 hover:text-gray-500">
                  <a
                    href={`https://freelancer.rozgaarindia.com/requirementDetail/${item.RequirementID}`}
                    target={"_self"}
                  >
                    {item.Title}
                  </a>
                </h2>

                <span className="inline-flex items-center rounded-full bg-blue-100 px-3 mb-2 py-0.5 text-sm font-medium text-purple-800">
                  {item.FreelancerPolicy}
                </span>
                <div
                  className="mb-5 text-md line-clamp-2"
                  dangerouslySetInnerHTML={{
                    __html: item.Description,
                  }}
                ></div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    {item.ImageUrl ? (
                      <img
                        className="w-10 h-10 rounded-full"
                        src={item.ImageUrl}
                        alt="Jese Leos avatar"
                      />
                    ) : item.FirstName ? (
                      <div className="rounded-full border text-sm w-10 h-10 border-gray-500 font-semibold flex items-center justify-center p-1">
                        {`${item.FirstName?.split(" ")[0]
                          ?.charAt(0)
                          .toUpperCase()} ${item.LastName?.split(" ")[0]
                            ?.charAt(0)
                            .toUpperCase()}`}
                      </div>
                    ) : (
                      <div className="rounded-full border text-sm w-10 h-10 border-gray-500 font-semibold flex items-center justify-center p-1">
                        R I
                      </div>
                    )}

                    <span className="font-semibold text-sm">
                      {`${item.FirstName} ${item.LastName}`}
                      <br />

                      <span className="text-sm text-purple-800 text-clip overflow-hidden line-clamp-1">
                        {item.IsCompany === "0"
                          ? companyName(item.FirstName, item.LastName)
                          : item.CompanyName}{" "}
                      </span>
                    </span>
                  </div>
                </div>
                <div className="text-end">
                  {" "}
                  <a
                    href={`https://freelancer.rozgaarindia.com/requirementDetail/${item.RequirementID}`}
                    target={"_self"}
                    className="pt-2  inline-flex items-center  font-medium text-primary-600 dark:text-primary-500 hover:underline hover:text-indigo-600"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4 mt-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default FreelanceJobCard;
