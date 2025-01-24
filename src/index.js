import {salut} from "./salutes.js";
import "./styles.css";

import {home} from "./homepage.js";
import {about} from "./about.js";
import {menu} from "./menu.js";

const contents = document.querySelector("#content")
const navbuttons = [
    document.querySelector("#home"),
    document.querySelector("#about"),
    document.querySelector("#menu"),
];

function clearcontents(){
    contents.innerHTML = "";
    navbuttons.forEach((button) => {      
    })
}

navbuttons[0].addEventListener("click", () => {
    clearcontents();
    home(contents);
})
navbuttons[1].addEventListener("click", () => {
    clearcontents();
    about(contents);
})
navbuttons[2].addEventListener("click", () => {
    clearcontents();
    menu(contents);
})


/*
function displaya(){
    const buttons = document.querySelectorAll("button");
    function switchtab(e){
        const contents = document.querySelector("#content");
        while(contents.firstchild){
            contents.removeChild(contents.lastChild);
        }
        for(const button of buttons){
            button.setAttribute("class", "")
        }
        e.target.setAttribute("class", "selected");
        switch (e.target.getAttribute("id")){
            case 'home':
                home();
                break;
            case 'menu':
                menu();
                break;
            case 'about':
                about();
                break;
        }
    }
    for(const button of buttons){
        button.addEventListener("click", switchtab);
    }  
    home();
}
displaya();

*/