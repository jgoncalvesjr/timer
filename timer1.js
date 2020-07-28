const beeps = process.argv.slice(2).map(Number).sort((a,b) => a - b); // turns argument into array of numbers, sorted

for (const beep of beeps) {
  if (!isNaN(beep)) {
  return process.stdout.write('\x07 Invalid! \n'); 
  }
  setTimeout(() => {
  process.stdout.write('\x07 *beep* \n'); // beep text to simulate PC Speaker sound. Not working onmu Ubuntu
  }, (1000 * beep)) // 1000 ms * beep seconds. It's sorted, so it'll follow timer sequence, no need for an accumulator
}