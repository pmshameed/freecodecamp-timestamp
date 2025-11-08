// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

function processDate(dateParam) {
  let date;

  if (!dateParam) {
    date = new Date();
  } else {
    const isUnixTimestamp = /^\d+$/.test(dateParam) && dateParam.length >= 10;

    if (isUnixTimestamp) {
      date = new Date(parseInt(dateParam, 10));
    } else {
      date = new Date(dateParam);
    }
  }

  if (date.toUTCString() === "Invalid Date") {
    return { error: "Invalid Date" };
  }

  return {
    unix: date.getTime(),
    utc: date.toUTCString(),
  };
}

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

app.get(["/api", "/api/"], (req, res) => {
  const result = processDate(undefined);
  res.json(result);
});

app.get("/api/:date", (req, res) => {
  const result = processDate(req.params.date);
  res.json(result);
});

// Listen on port set in environment variable or default to 5000
// Bind to 0.0.0.0 for Replit environment
var listener = app.listen(process.env.PORT || 5000, "0.0.0.0", function () {
  console.log("Your app is listening on port " + listener.address().port);
});
