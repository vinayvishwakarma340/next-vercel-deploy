export const authordetailapi = async (id) => {
  let authordetail = await fetch(
    `${process.env.Live_API_URL}/v1/admin1_1/GetAutherDetail`,
    {
      method: "POST",
      headers: {
        Authorization: process.env.API_TOKEN_AUTH_SERVER,
        "Content-Type": "application/json",
      },
      // headers: {
      //   'Cache-Control':
      //     'public, s-maxage=10, stale-while-revalidate=59'
      // },
      body: JSON.stringify({
        AutherId: id,
      }),
    }
  );
  if (!authordetail.ok) {
    console.log("authordetail Api Error", authordetail.status);
  }
  try {
    const jsonData = await authordetail.json();
    return jsonData;
  } catch (error) {
    console.error(error); // you may also
  }
};
