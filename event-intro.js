export function listenIntroEvents(option, nextRound) {
    const btn = document.getElementById("start-game");
    const levels = document.getElementById("choose-level");


    levels.oninput = (evt) => {
        console.log(evt)
        const level = Number(evt.target.value);
        btn.onclick = () => nextRound(1, {level});
    }

}