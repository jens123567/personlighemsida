const express = require("express");
const app = express();

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/start.html");
});

["news", "others", "recepies"].forEach((v) => {
  app.get("/" + v, (req, res) => {
    res.send("<h1>sug min snopp :) </h1>");
    res.sendFile(__dirname + "/public/" + v + ".html");
  });
});

app.listen(3000);
