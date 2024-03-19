const counter = (count) => {
  console.log(count);
  count++;
  setTimeout(() => counter(count), 1000);
};

counter(1);
