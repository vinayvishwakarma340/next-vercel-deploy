export const GmiListWithPagination = async (body) => {
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
        `${process.env.Live_API_URL}/v1/admin1_1/GeneralManagerGetFrontEndList`,
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

export const GetManagerDetailById = async (body) => {
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
        `${process.env.Live_API_URL}/v1/admin1_1/GeneralManagerDetailFrontEnd`,
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
}

export const GetLeadershipFactoryById = async (body) => {
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
        `${process.env.Live_API_URL}/v1/admin1_1/LeadershipFactoryDetailFrontEnd`,
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
}

export const GetLeadershipFactoryList = async (body) => {
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
        `${process.env.Live_API_URL}/v1/admin1_1/LeadershipFactoryFrontEndGetByList`,
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


export const GetCertificationOfWinnersList = async (body) => {
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
        `${process.env.Live_API_URL}/adminapi/GetLiveGMIWinners`,
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