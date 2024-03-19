const counter = () => {
  let num = 1;
  setInterval(() => {
    console.log(num);
    num++;
  }, 1000);
};

counter();
