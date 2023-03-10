export const webStoriesResponse = async (pageName) => {
  var myHeaders = new Headers();
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Token 77927b69bb144b065ca11bf2a9d452819cd852db"
  );
  // myHeaders.append(

  //   "Cache-Control",
  //   "public, s-maxage=10, stale-while-revalidate=59"
  // );
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    "https://api.timesascent.com/v1/api/apiTimes/GetWebStoriesSummary",
    requestOptions
  );
  if (!response.ok) {
    console.log("Api Error", response.status);
  }
  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error(error); // you may also
  }
};

export const webStoriesDetailApi = async (body) => {
  // console.log(body, "body...");
  var myHeaders = new Headers();
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    "Token 77927b69bb144b065ca11bf2a9d452819cd852db"
  );

  myHeaders.append("Content-Type", "application/json");
  var raw = JSON.stringify(body);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(
    "https://api.timesascent.com/v1/api/apiTimes/WebStoriesDetails",
    requestOptions
  );
  if (!response.ok) {
    console.log("Api Error", response.status);
  }
  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error(error); // you may also
  }
};
