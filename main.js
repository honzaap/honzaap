let menuContent = document.getElementById("menuContent");
let menuToggle = document.getElementById("menuToggle");
let projects = document.getElementsByClassName("project-card");

// Hover effects
for(let project of projects){
    project.onmousemove = (e) => {
        let pos = [e.offsetX,e.offsetY];

        let l = pos[0];
        let t = pos[1];
        let h = project.clientWidth;
        let w = project.clientHeight;

        let px = Math.abs(Math.floor(100 / w * l)-100);
        let py = Math.abs(Math.floor(100 / h * t)-100);

        let lp = (50+(px - 50)/1.5);
        let tp = (50+(py - 50)/1.5);

        let ty = ((tp - 50)/2) * -0.5;
        let tx = ((lp - 50)/1.5) * .5;

        project.style.transform = `rotateY(${tx}deg) rotateX(${ty}deg)`;
    }
    project.onmouseleave = (e) => {
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