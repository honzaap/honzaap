
const main = document.getElementById("main");
const main2 = document.getElementById("main2");
const about = document.getElementById("about");
const projects = document.getElementById("projects");
const contact = document.getElementById("contact");
const navbar = document.getElementById("navbar");

let nav_items = navbar.getElementsByClassName("nav-item");
let nav_about = nav_items[0];
let nav_projects = nav_items[1];
let nav_contact = nav_items[2];

let project_selection = document.getElementById("project-selection");
let project_showcase = document.getElementById("project-showcase");
let selection_netblog = project_selection.children[0];
let selection_pathfinding = project_selection.children[1];
let selection_sorting = project_selection.children[2];

let ao = 0;
let po =  about.scrollHeight-1;
let co = about.scrollHeight + projects.scrollHeight - 1;

main2.style.paddingTop = window.innerHeight
    + about.scrollHeight + projects.scrollHeight + contact.scrollHeight+"px";

// RESET ANIMATIONS
let hand_anim = document.getElementsByClassName("hand")[0];
hand_anim.onmouseover = (e) => {
    hand_anim.classList.remove("hand");
    setTimeout((e) =>{
        hand_anim.classList.add("hand")
    },10);
}

let initScrollY = window.scrollY

// INITIALIZING SECTION SCROLL 
if(initScrollY >= ao && initScrollY < po){
    about.classList.add("active");
    projects.classList.add("inactive-bot");
    contact.classList.add("inactive-bot");
    main.classList.add("init-about");
    nav_about.classList.add("active");
}
else if(initScrollY >= po && initScrollY < co){
    about.classList.add("inactive-top");
    projects.classList.add("active");
    contact.classList.add("inactive-bot");   
    main.classList.add("init-projects");
    nav_projects.classList.add("active");
}
else if (initScrollY >= co){
    about.classList.add("inactive-top");
    projects.classList.add("inactive-top");
    contact.classList.add("active");
    main.classList.add("init-contact");
    nav_contact.classList.add("active");
}

selection_netblog.addEventListener("click",function(){
    project_showcase.classList = "project-showcase netblog";
    if(window.innerWidth <= 768){
        goTo("projects");
    }
});
selection_pathfinding.addEventListener("click",function(){
    project_showcase.classList = "project-showcase pathfinding";
    if(window.innerWidth <= 768){
        goTo("projects");
    }
});
selection_sorting.addEventListener("click",function(){
    project_showcase.classList = "project-showcase sorting";
    if(window.innerWidth <= 768){
        goTo("projects");
    }
});

window.onscroll = e =>{
    let scrollY = window.scrollY;
    if(scrollY >= ao && scrollY < po){
        if(!main.classList.contains("bck-about") && !main.classList.contains("init-about")){
            if(main.classList.contains("init-projects")){
                main.classList.remove("init-projects");
            }
            nav_about.classList.add("active");
            nav_projects.classList.remove("active");

            main.classList = "bck-about";
            about.classList.add("active");
            about.classList.remove("inactive-top");

            projects.classList.remove("active");
            projects.classList.add("inactive-bot");
        }
    }
    else if(scrollY >= po && scrollY < co){
        if(!main.classList.contains("bck-projects") && !main.classList.contains("init-projects")){
            if(main.classList.contains("init-contact")){
                main.classList.remove("init-contact");
            }
            if(main.classList.contains("init-about")){
                main.classList.remove("init-about");
            }

            projects.classList.remove("inactive-bot");
            projects.classList.remove("inactive-top");
            projects.classList.add("active");

            if(about.classList.contains("active")){
                main.classList = "bck-projects";
                about.classList.remove("active");
                about.classList.add("inactive-top");
                nav_projects.classList.add("active");
                nav_about.classList.remove("active");
            }

            else if(contact.classList.contains("active")){
                main.classList = "bck-projects2";
                contact.classList.remove("active");
                contact.classList.add("inactive-bot");
                nav_projects.classList.add("active");
                nav_contact.classList.remove("active");
            }
        }   
    }
    else if (scrollY >= co){
        if(!main.classList.contains("bck-contact") && !main.classList.contains("init-contact")){
            if(main.classList.contains("init-projects")){
                main.classList.remove("init-projects");
            }
            nav_contact.classList.add("active");
            nav_projects.classList.remove("active");

            main.classList = "bck-contact";
            contact.classList.add("active");
            contact.classList.remove("inactive-bot");

            projects.classList.remove("active");
            projects.classList.add("inactive-top");
        }
    }
};



function goTo(destination){
    switch(destination){
        case "about":
            window.scrollTo(0,about.scrollTop);
            break;
        case "projects":
            window.scrollTo(0,about.scrollHeight + 100);
            break;
        case "contact":
            window.scrollTo(0,about.scrollHeight + projects.scrollHeight + 100);
            break;
    }
}