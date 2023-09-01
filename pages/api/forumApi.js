export const forumData = async (pageName) => {
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
    page: pageName,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/GetForumQuestionAnswerList`,
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

export const forumDetail = async (id) => {
  var myHeaders = new Headers();
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    ForumQuestionID: id,
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  // Using a fetch here but could be any async operation to an external source
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/admin1_1/QuestionsAnserdrtail`,
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
