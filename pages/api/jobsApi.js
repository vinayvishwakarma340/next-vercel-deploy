
export const ApiErrorLog = async (req, res, ApiName) => {
  var myHeaders = new Headers();

  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    Request: req,
    Response: JSON.stringify(res),
    ApiName: ApiName,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/adminapi/ApiErrorLog`,
    requestOptions
  );
  const result = await response.json()
  if (result.status_code === 200) {

    console.log("api error logged successfully")

  }
};

const removeHyphenFunc = (str) => {
  let value = str?.replace(/-/g, " ").trim();
  return value;
};

export const JobsResponse = async () => {
  var myHeaders = new Headers();
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  // myHeaders.append(
  //   "Cache-Control",
  //   "public, s-maxage=10, stale-while-revalidate=59"
  // );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    page: "1",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/indiaJobs`,
    requestOptions
  );
  if (!response.ok) {
  }
  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};

export const JobsDetailApi = async (id, ipAddress) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    JobId: id,
    IP: ipAddress,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/GetJobCard`,
    requestOptions
  );

  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};

export const SearchJobCard = async (jobs, location, global, page) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    SearchLocation: location,
    Search_Term: jobs,
    isGlobal: global.toLowerCase() === "global-placement-jobs" ? "1" : "",
    isGovernment: global.toLowerCase() === "government-jobs" ? "1" : "",
    page: page,
    thisWeek: global.toLowerCase().includes("jobsthisweek") ? "1" : "",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // console.log(raw, "jobcardsearch")

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/JobCardSearch`,
    requestOptions
  );
  try {
    if (response.status !== 200) {
      const jsonData = {
        data: [],
        message: "data not found  ",
      };
      return jsonData;
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also

    return apiError;
  }
};

export const WildCardJobSearch = async (searchKey, page) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    Key: searchKey,
    page: page,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/searchjobs`,
    requestOptions
  );
  if (!response.ok) {
  }
  try {
    if (response.status !== 200) {
      const jsonData = {
        data: [],
        message: "data not found  ",
      };
      return jsonData;
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};
export const AdvancedSearchJob = async (
  location,
  designation,
  company,
  industry,
  experience,
  page
) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  // console.log(location, designation, company, industry, experience, page)

  var raw = JSON.stringify({
    Location: removeHyphenFunc(location),
    Designation: removeHyphenFunc(designation),
    Company: removeHyphenFunc(company),
    Industry: removeHyphenFunc(industry),
    Level: removeHyphenFunc(experience),
    Category: "",
    page: page,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/AdvanceSearchJobsv1`,
    requestOptions
  );
  if (!response.ok) {
  }
  try {
    if (response.status !== 200) {
      const jsonData = {
        data: [],
        message: "data not found  ",
      };
      return jsonData;
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};

export const JobListNewAPI = async (searchTerm, location, page) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  // console.log(location, designation, company, industry, experience, page)

  var raw = JSON.stringify({
    term: searchTerm,
    location: location,
    page: page,
  });
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // console.log(raw, "jobListApi")
  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/JobList`,
    requestOptions
  );

  try {
    let result = await response.json();
    if (result.status_code === 200) {
      return result;
    } else {
      ApiErrorLog(raw, result, "JobList")
      result = {
        data: [],
        message: "data not found  ",
      };
    }
    return result;
  } catch (error) {
    ApiErrorLog(raw, error, "JobList")
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};

export const JobListByTypeNewAPI = async (searchTerm, jobType, page) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  // console.log(location, designation, company, industry, experience, page)

  var raw = JSON.stringify({
    term: searchTerm,
    jobType: jobType,
    page: page,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  // Using a fetch here but could be any async operation to an external source
  // console.log(raw)

  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/JobListByType`,
    requestOptions
  );

  try {
    let result = await response.json();
    if (result.status_code === 200) {

      return result;

    } else {
      ApiErrorLog(raw, result, "JobListByType")
      result = {
        data: [],
        message: "data not found  ",
      };
      return result;
    }

  } catch (error) {
    ApiErrorLog(raw, error, "JobListByType")
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};

export const saveInvalidUrl = async (url) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    searchTerm: url,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/InvalidUrlnsert`,
    requestOptions
  );
  if (!response.ok) {
  }
  try {
    if (response.status !== 200) {
      const jsonData = {
        data: [],
        message: "URL Not Inserted",
      };
      return jsonData;
    }

    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};

export const GetIndustry = async (id) => {
  var myHeaders = new Headers();

  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    IndustryId: id,
    page: "1",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/GetJobByIndustries`,
    requestOptions
  );

  if (!response.ok) {
  }
  try {
    const jsonData = await response.json();

    return jsonData;
  } catch (error) {
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};

export const RelatedJob = async (id) => {
  var myHeaders = new Headers();

  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    Search_Term: id,
    page: "1",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/JobCardSearch`,
    requestOptions
  );
  if (!response.ok) {
  }
  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};

export const getJobsByDesignationFunc = async (searchTerm, page) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    searchTerm: searchTerm,
    page: page,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // console.log(searchTerm, domainType, location, "API WORKING")

  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/JobCardSearchDesignation`,
    requestOptions
  );
  if (!response.ok) {
  }
  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};

export const fetchJobsTagCarousel = async (type, location, searchTerm) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    Type: type,
    Location: location,
    SearchTerm: searchTerm,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/JobCount`,
    requestOptions
  );
  if (!response.ok) {
  }
  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};

export const getJobsByCategoryFunc = async (searchTerm, page) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    searchTerm: searchTerm,
    page: page,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // console.log(searchTerm, domainType, location, "API WORKING")

  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/JobCardSearchCategory`,
    requestOptions
  );
  if (!response.ok) {
  }
  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};

export const getJobsByCityFunc = async (searchTerm, page) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    Location: searchTerm,
    page: page,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // console.log(searchTerm, domainType, location, "API WORKING")

  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/JobCardSearchCity`,
    requestOptions
  );
  if (!response.ok) {
  }
  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};

export const getJobsByDesignationInLocationFunc = async (
  searchTerm,
  location,
  page
) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    searchTerm: searchTerm,
    Location: location,
    page: page,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // console.log(searchTerm, domainType, location, "API WORKING")

  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/JobCardSearchDesignationInLocation`,
    requestOptions
  );
  if (!response.ok) {
  }
  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};

export const getJobsByCategoryInLocationFunc = async (
  searchTerm,
  location,
  page
) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    searchTerm: searchTerm,
    Location: location,
    page: page,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // console.log(searchTerm, domainType, location, "API WORKING")

  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/JobCardSearchCategoryInLocation`,
    requestOptions
  );
  if (!response.ok) {
  }
  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error(error); // you may also
  }
};

export const PartnerCompany = async (id, page) => {
  var myHeaders = new Headers();

  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    PartnerCompanyName: id,
    page: page,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/adminapi/GetPartnerJobs`,
    requestOptions
  );
  if (!response.ok) {
  }
  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};

export const GetJobCompanyDetails = async (id, page) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    CompanyId: id,
    page: page,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/GetJobDetailCompany`,
    requestOptions
  );
  if (!response.ok) {
  }
  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};

export const CandidateDetailsApi = async (id, ipAddress) => {
  var myHeaders = new Headers();

  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    CandidateId: id,
    IP: ipAddress,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/CandidateDetail`,
    requestOptions
  );
  if (!response.ok) {
  }
  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};

export const NewJobsRelatedJobs = async (id, ID, ipAddress) => {
  var myHeaders = new Headers();

  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    Designation: id,
    City: ID,
    IP: ipAddress,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/Jobsrelated`,
    requestOptions
  );

  try {
    let result = await response.json();

    if (result.status_code === 200) {

      return result;

    } else {
      ApiErrorLog(raw, result, "Jobsrelated ")
      result = {
        data: [],
        message: "data not found  ",
      };
      return result;
    }
  } catch (error) {
    ApiErrorLog(raw, error, "Jobsrelated ")

    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};



export const forherJobs = async (body) => {
  var myHeaders = new Headers();

  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(body);

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/GetJobsForher`,
    requestOptions
  );
  if (!response.ok) {
  }
  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    let apiError = {
      status_code: 500,
      status: "FAIL",
      data: [],
      count: "",
      message: "data not found",
    };
    console.error(error, apiError); // you may also
    return apiError;
  }
};

