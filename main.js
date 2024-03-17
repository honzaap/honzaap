import "./style.scss";

const loader = document.getElementById("loader");
const loadScreen = document.getElementById("loadScreen");

const tear = document.getElementById("tear");

let loaded = false;

function finishLoader() {
    loaded = true;
    loadScreen.classList.add("finished");
    loader.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    setTimeout(showMainScreen, 1500);
}

function showMainScreen() {
    tear.classList.add("active");
}

function startLoader() {
    let progress = 0;
    function progressLoader() {
        setTimeout(() => {
            if (loaded) return;
            progress += Math.min((100 - progress) / 2, 10);
            loader.style.clipPath = `polygon(0 ${100 - progress}%, 100% ${100 - progress}%, 100% 100%, 0 100%)`;
            progressLoader();
        }, 250);
    }
    progressLoader();
}

// On load event
setTimeout(() => {
    finishLoader();
}, 300);

startLoader();
