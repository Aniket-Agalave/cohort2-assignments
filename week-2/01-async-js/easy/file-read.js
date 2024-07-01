const fs = require("fs");

// try {
//     const data = fs.readFileSync('file.txt', 'utf8');
//     console.log(data);
// } catch (e) {
//     console.log(e);
// }

fs.readFile("file.txt", "utf8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data);
});

let a = 1;
for (let index = 0; index < 10000000000; index++) {
  a += index;
}
