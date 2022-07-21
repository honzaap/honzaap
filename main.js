let menuContent = document.getElementById("menuContent");
let menuToggle = document.getElementById("menuToggle");
let projects = document.getElementsByClassName("project-card");

// Hover effects
for(let project of projects){
    project.onmousemove = (e) => {
        project.classList.remove("fadeout");

        let posX = e.offsetX;
        let posY = e.offsetY;
        
        let width = project.clientWidth;
        let height = project.clientHeight;

        let rotationX = Math.min(Math.max((width / 2 - posX) / 8, -20), 20);
        let rotationY = Math.min(Math.max((height / 2 - posY) / 8, -20), 20);

        project.style.transform = `rotateY(${rotationX}deg) rotateX(${rotationY}deg)`;
    }
    project.onmouseleave = (e) => {
        project.classList.add("fadeout");
        project.style.transform = "";
    }
}

// Toggle menu on click
let menuOpen = false;
menuToggle.onclick = (e) => {
    e.preventDefault();
    let radius = menuOpen ? 0 : 80;
    let i = 0;
    for(let child of menuContent.children) {
        let x = (Math.sin(i / menuContent.children.length * Math.PI * 2) * radius);
        let = z = (Math.cos(i / menuContent.children.length * Math.PI * 2) * radius);
        i++;
        child.style = `transform: translate(${x}px, ${z}px)`;
    }
    menuOpen = !menuOpen;
}