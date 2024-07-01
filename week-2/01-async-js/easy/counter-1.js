let count = 0;
const counter = () => {
  count++;
  console.log(`count: ${count}`);
};

setInterval(counter, 1000);
