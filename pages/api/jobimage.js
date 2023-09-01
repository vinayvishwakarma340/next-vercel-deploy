export const jobimage = async (id, ipAddress) => {
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    process.env.API_TOKEN_AUTH_SERVER
  );
  // myHeaders.append(

  //     "Cache-Control",
  //     "public, s-maxage=10, stale-while-revalidate=59"
  // );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    JobId: id,
    IP: ipAddress
  });

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };
  const response = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/GetJobCard`,
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
