let countdown;

function timer(seconds) {
  const now = Date.now();
  const then = now + seconds*1000;

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then -Date.now()) / 1000);
    console.log(secondsLeft);
// check if we should stop it
if(secondsLeft <= 0){
  clearInterval(countdown);
  return;
}
// display it
// displayTimeLeft(secondsLeft);
  }, 1000);
  console.log(now, then);
}
