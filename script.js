function countdown() {
    const christmas = new Date("December 25, 2023 00:00");
    const now = new Date();
    const diff = christmas - now;


    const msInSecond = 1000;
    const msInMinute = 60000;
    const msInHour = 3600000;
    const msInDay = 86400000;

    const daysDisplaid = Math.floor(diff/msInDay);
    document.querySelector(".days").textContent = daysDisplaid;

    const hoursDisplaid = Math.floor((diff%msInDay)/msInHour);
    document.querySelector(".hours").textContent = hoursDisplaid;

    const minutesDisplaid = Math.floor((diff%msInHour)/msInMinute);
    document.querySelector(".minutes").textContent = minutesDisplaid;

    const secondsDisplaid = Math.floor((diff%msInMinute)/msInSecond);
    document.querySelector(".seconds").textContent = secondsDisplaid;

    if (diff<=0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent =0;
        document.querySelector(".minutes").textContent =0;
        document.querySelector(".seconds").textContent = 0;
        
        clearInterval(timer);
        merryChristmas();
    }
}

let timer = setInterval(countdown, 1000);


function merryChristmas() {
    const heading = document.querySelector("h1");
    heading.textContent = "MERRY CHRISTMAS!!! HO-HO-HO!"
    heading.classList.add("red")
}

const button = document.querySelector(".btn");
button.addEventListener("click", function () {
    document.querySelector(".music").play();
})

