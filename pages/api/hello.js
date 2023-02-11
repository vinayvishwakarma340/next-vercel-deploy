const express = require("express");
var path = require("path");
const app = express();
const port = 3001;
const request = require("request");
const bodyParser = require("body-parser");
let mdata = "";

// let url_str = 'https://stories.sasone.in/Micro-Tasking-at-Work:-Smaller-Tasks,-Bigger-Win/79a403e2-5e99-11ed-929f-064df626ed42'.split('/')[4];
let orgurl = "";
// console.log(url_str);
app.use("/public", express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.set("views", "./views");
app.set("view engine", "ejs");

app.get("/:title/:id", (req, res) => {
  // console.log(req);
  var fullUrl = (
    req.protocol === "https"
      ? "https"
      : req.protocol + "s" + "://" + req.get("host") + req.originalUrl
  ).split("/")[4];

  orgurl = req.protocol + "://" + req.get("host") + req.originalUrl;
  console.log(req.host);
  console.log(orgurl);
  const url = "https://api.timesascent.com/v1/api/apiTimes/WebStoriesDetails";

  request(
    {
      url: url,
      method: "POST",
      headers: {
        Authorization: "Token 77927b69bb144b065ca11bf2a9d452819cd852db",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        WebStoriesSummaryID: fullUrl,
      }),
    },
    (error, response) => {
      const data = JSON.parse(response.body);
      mdata = data.WebStoriesDetails;
      console.log(mdata);
      // res.render("index", { mdata: mdata, orgurl: orgurl });
      res.json({"name":"vinay"})
    }
  );
});



