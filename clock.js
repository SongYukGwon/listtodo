const clockContainer =document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");
const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    clockTitle.innerText = `${hours < 10 ? `$0${hours}` : hours}:${minutes <10 ? `0${minutes}`: minutes}:${seconds <10 ? `0${seconds}` : seconds}`;
    
}

function init() {
    setInterval(getTime, 1000);
}

init();