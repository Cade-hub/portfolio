let CHECKED = false;

document.addEventListener("DOMContentLoaded", () => {
    const backgroundElement = document.querySelector("body");

    backgroundElement.addEventListener("click", () => {
        CHECKED = !CHECKED;
        document.documentElement.style.setProperty("--left", CHECKED ? 1 : 0);
    });
});