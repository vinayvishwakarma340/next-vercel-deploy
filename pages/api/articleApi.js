export const featureArticle = async (pageName) => {
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
    page: " 1",
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/getForherSreenData`,
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

export const SearchArticlesResponse = async (body) => {
  var myHeaders = new Headers();
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  // myHeaders.append(
  //   'Cache-Control',
  //   'public, s-maxage=10, stale-while-revalidate=59'

  // );
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
    `${process.env.Live_API_URL}/v1/api/apiTimes/SearchArticles`,
    requestOptions
  );
  if (!response.ok) {
  }
  try {
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error(error);
  }
};

export const GetArticleDetails = async (id) => {
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
    ArticleId: id,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const response = await fetch(
    `${process.env.Live_API_URL}/v1/admin1_1/GetArticles`,
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
export const RecommendedArticles = async () => {
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
    page: 1,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/RecommendedArticles`,
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

export const WeCareDetail = async (id) => {
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
    WeCareID: id,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/adminapi/WeCareDetail`,
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

export const RecommendedArticlesList = async (id) => {
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
    Domain: id,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/ArticlesbyDomain`,
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
