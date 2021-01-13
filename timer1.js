const args = process.argv.splice(2);
//returns array from index 2 and onwards

const ascending = args.sort(function (a, b) {
  return a-b
});
//returns and array in order

//given an array of numbers ex. [30, 20 ,40 , 10];

let i = 0;
function timer() {
  setTimeout(() => {
    if (args[i] < 0 || typeof args[i] !== 'number') {
      process.stdout.write('Error' + '\n');
      return;
    }

    if (i > args.length - 1) {
      return;
    }
    process.stdout.write(`BEEP BEEP ALARM AT ${args[i]} SECONDS!`+'\n');
    i++;
    timer();
  }, args[i] * 1000);
}

timer(args);