const video = document.querySelector(".video_content");
const btn = document.querySelector(".btn");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", () => {
    if (!btn.classList.contains("chng")) {
        btn.classList.add("chng")
        video.pause();
    } else {
        btn.classList.remove("chng")
        video.play();
    }
})

window.addEventListener("load", () => {
    preloader.classList.add("load");
})