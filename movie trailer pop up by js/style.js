const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const trailerContainerEl = document.querySelector(".trailer-container");
const videoE1 = document.querySelector("video");

btnEl.addEventListener("click", () => {
    trailerContainerEl.classList.remove("active");
});
closeIconEl.addEventListener("click", () => {
    trailerContainerEl.classList.add("active");
    videoE1.pause();
    videoE1.currentTime = 0;
});