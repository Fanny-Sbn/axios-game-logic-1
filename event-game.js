export function listenGameEvents(nextRound) {
  console.log("main game logic is on ...");

  setTimeout(() => {
    nextRound(2);
  }, 2000);
}
