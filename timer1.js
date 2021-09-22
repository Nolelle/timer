const args = process.argv.splice(2);
let secondsArr = args.map((x) => {
  return parseInt(x * 1000, 10);
});

// console.log(secondsArr);

for (let i = 0; i < secondsArr.length; i++) {
  if (!(secondsArr[i] < 0 || isNaN(secondsArr[i]))) {
    let timeDelay = secondsArr[i];
    console.log(secondsArr[i]);
    setTimeout(() => {
      process.stderr.write("\007");
    }, timeDelay);
  }
}
