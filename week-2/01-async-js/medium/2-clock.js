const printTimeToConsole = () => {
  const date = new Date();

  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  let timeOfDay = 'AM';
  if (hours >= 12) {
    timeOfDay = 'PM';
  }

  console.log(`${hours}:${minutes}::${seconds} ${timeOfDay}`);
  setTimeout(printTimeToConsole, 1000);
};

printTimeToConsole();
