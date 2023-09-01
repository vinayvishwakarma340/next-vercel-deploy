export const Eventdescription = async (id) => {
  let Eventsdata = await fetch(
    `${process.env.Live_API_URL}/v1/api/apiTimes/EventsbyId`,
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
        EventsId: id,
      }),
    }
  );
  if (!Eventsdata.ok) {
    console.log("Eventsdata Api Error", Eventsdata.status);
  }
  try {
    const jsonData = await Eventsdata.json();
    return jsonData;
  } catch (error) {
    console.error(error); // you may also
  }
};
