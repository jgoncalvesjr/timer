const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  // if (key === '\u0062') {
  //   process.stdout.write('\n\r\x07*beep* \n');
  // }
  if (key === '\u0003') {
    process.stdout.write('\nThanks for your time, bye!\n');
    process.exit();
  }
});

const countdown = (timer) => {
  if (timer.match(/[b]/i)) {
    process.stdout.write('\r\x07*beep* \n');
    askCountdown("Set a timer from 1 to 9: ");
  } else if (isNaN(timer) || timer < 1 || timer > 9) {
    console.log(`Not a valid timer, try again!\n`);
    askCountdown("Set a timer from 1 to 9: ");
    } else {
      console.log(`setting timer for ${timer} seconds...`);
      setTimeout(() => {
        process.stdout.write(`\r\x07*BOOM* blasted off after ${timer} seconds!\n`);
      }, timer * 1000);
      setTimeout(() => {
        askCountdown("Set a timer from 1 to 9: ");
      }, (timer * 1000) + 3000);
    }
};

const askCountdown = (question) => {
  rl.question(question, answer => {
    countdown(answer);
  });
};

askCountdown("Set a timer from 1 to 9: ");