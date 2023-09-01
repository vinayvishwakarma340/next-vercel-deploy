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
export const comapnyDetail = async (id) => {
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
    CompanyId: id,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/GetCompanyDetail`,
    requestOptions
  );

  try {
    const jsonData = await response.json();
    if (jsonData.status_code === 200) {
      return jsonData;

    } else {
      ApiErrorLog(raw, jsonData, "GetCompanyDetail")
    }
  } catch (error) {
    console.error(error); // you may also
    ApiErrorLog(raw, error, "GetCompanyDetail")
  }
};

export const SimilarCompanyList = async (id) => {
  var myHeaders = new Headers();
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    CompanyId: id,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/admin1_1/CompanyDetail`,
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
