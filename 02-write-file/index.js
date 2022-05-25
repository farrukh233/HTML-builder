const fs = require("fs");
const path = require("path");

console.log("Введите текст:");

const output = fs.createWriteStream(path.join(__dirname, "txt.txt"));
process.stdin.on("data", data => {
  if (data.toString().trim() === "exit") process.exit();
  output.write(data.toString());
});
process.on("SIGINT", () => process.exit());
process.on("exit", () => console.log("Пока!"));
