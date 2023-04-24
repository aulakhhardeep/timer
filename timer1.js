'use strict';
const timer1 = function() {
  const input = process.argv.slice(2);
  if (input === " ") {
    return;
  }
  input.forEach(timer => {
    if (isNaN(timer) || (timer < 0)) {
      return;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, timer * 1000);
  });
  
};

timer1();

