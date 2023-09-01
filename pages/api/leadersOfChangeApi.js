export const GetLeadersOfChangeList = async () => {
    var myHeaders = new Headers();
    myHeaders.append(
        "Authorization",
        process.env.API_TOKEN_AUTH_SERVER
    );

    myHeaders.append("Content-Type", "application/json");

    // var raw = JSON.stringify({
    //     page: "1"
    // });
    var raw = "";

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    // Using a fetch here but could be any async operation to an external source
    const response = await fetch(
        `${process.env.Live_API_URL}/adminapi/GetLiveLeadersofChange`,
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

export const GetLeadersOfChangeBySeoUrl = async (seoUrl) => {
    var myHeaders = new Headers();
    myHeaders.append(
        "Authorization",
        process.env.API_TOKEN_AUTH_SERVER
    );

    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "SeoURL": seoUrl
    });

    var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
    };

    // Using a fetch here but could be any async operation to an external source
    const response = await fetch(
        `${process.env.Live_API_URL}/adminapi/LeadersofChangeBySeoURL`,
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