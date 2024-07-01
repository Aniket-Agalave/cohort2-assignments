const fs = require("fs");

const data = "my surname is agalave";

fs.writeFile("file.txt", data, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("file written succesfully...");
});

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});
