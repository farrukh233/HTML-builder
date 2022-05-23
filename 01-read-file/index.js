const path = require("path");
const fs = require("fs");
let stream = fs.createReadStream(path.join(__dirname, "text.txt"), {
  encoding: "utf-8",
});

stream.on("readable", function () {
  const data = stream.read();
  console.log(data);
});
stream.on("error", error => console.log("Error", error.message));
