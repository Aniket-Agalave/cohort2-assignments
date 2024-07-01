let initialCount = 0;

const counter = () => {
  console.log(`initial count: ${initialCount}`);
  initialCount++;
  setTimeout(counter, 1000);
};

counter();
