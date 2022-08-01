const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("bx-sun");
    dayNight.querySelector("i").classList.toggle("bx-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("bx-sun");
    } else {
        dayNight.querySelector("i").classList.add("bx-moon");
    }
})
