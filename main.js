import "./style.scss";

const loader = document.getElementById("loader");
const loadScreen = document.getElementById("loadScreen");

const tear = document.getElementById("tear");
const avatarContainer = document.getElementById("avatarContainer");

let loaded = false;

function finishLoader() {
    loaded = true;
    loadScreen.classList.add("finished");
    loader.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)";
    setTimeout(showMainScreen, 1500);
}

function showMainScreen() {
    tear.classList.add("active");
    setTimeout(() => {
        let i = 0;
        tear.querySelectorAll("a").forEach(link => {
            setTimeout(() => {
                link.classList.add("active");
            }, i * 100);
            i++;
        });
    }, 500);
    setTimeout(() => {
        avatarContainer.classList.add("active");
    }, 1000);
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
