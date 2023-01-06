var $ = document.querySelector.bind (document);
var $$ = document.querySelectorAll.bind (document);

var hoursLine = $(".point-hours");
var minutesLine = $(".point-minutes");
var secondsLine = $(".point-seconds");
var darkModeIcon = `<i class="fa-regular fa-moon"></i>`;
var darkModeFrame = `./assets/imgs/dark-mode.png`
var lightModeFrame = `./assets/imgs/light-mode.png`
var lightModeIcon = `<i class="fa-regular fa-sun"></i>`;
var switchModeBtn = $(".switch-btn");
var switchModeBtnIcon = $(".switch-btn i")
var switchMode = $(".switch-mode-container");
var clockFrame = $(".clock");

function startTime() {
    var today = new Date();
    var hours = (today.getHours() > 12) ? today.getHours()-12 : today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    hoursLine.style.transform = `rotate(${hours*30+30/(60/minutes)}deg)`;
    minutesLine.style.transform = `rotate(${minutes*6}deg)`;
    secondsLine.style.transform = `rotate(${seconds*6}deg)`;
    setTimeout (startTime, 1000);
}
var today = new Date();

startTime()




switchMode.onclick = () => {
    if (switchModeBtn.classList.contains ("day")) {
        switchModeBtn.classList.remove ("day");
        switchModeBtn.classList.add ("night");
        switchModeBtn.innerHTML = darkModeIcon;
        setTimeout(() => {
            clockFrame.style.background = `url(${darkModeFrame})`
            clockFrame.style.backgroundPosition = `center`
            clockFrame.style.backgroundSize = `cover`
            $$(".number").forEach(num => {
                num.style.color = "white";
            });
            $(".hours").style.backgroundColor = "white";
            $(".minutes").style.backgroundColor = "white";
            $("body").style.background = "black";
        }, 100);
    }
    else if (switchModeBtn.classList.contains ("night")) {
        switchModeBtn.classList.add ("day");
        switchModeBtn.classList.remove ("night");
        switchModeBtn.innerHTML = lightModeIcon;
        setTimeout(() => {
            clockFrame.style.background = `url(${lightModeFrame})`
            clockFrame.style.backgroundSize = `cover`
            clockFrame.style.backgroundPosition = `center`
            $$(".number").forEach(num => {
                num.style.color = "black";
            });
            $(".hours").style.backgroundColor = "black";
            $(".minutes").style.backgroundColor = "black";
            $("body").style.background = "white";
        }, 100);
    }
}
