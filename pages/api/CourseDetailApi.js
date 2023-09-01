export const CourseDetailApi = async (id) => {
  let CourseDetailData = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/GetCourseId`,
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
        Id: id,
      }),
    }
  );
  if (!CourseDetailData.ok) {
    console.log("CourseDetailData Api Error", CourseDetailData.status);
  }
  try {
    const jsonData = await CourseDetailData.json();
    return jsonData;
  } catch (error) {
    console.error(error); // you may also
  }
};
