'use strict';

// -------------INTERACTIVE DOOM VARS--------------------
let close_button = document.querySelectorAll('.close-button');
let more_info = document.querySelector('.more-info')
let more_info_toggle = document.querySelectorAll('.more-info-toggle');
let world = document.querySelectorAll('.world')
let smallDevice = false;
let canMobileInteraction = true;
const match = matchMedia("(max-width:600px)");
let card_toggle = document.querySelectorAll('.card-about-toggle'); 
let modal = document.querySelector('.about-modal');
let modal_close = document.querySelector('.modal-close');
// -------------INTERACTIVE DOOM VARS--------------------



// -------------MEMBERS VARS--------------------
let mebmerNames = ["Dayniel Martinez Rodriguez", "Alberto Carrillo Moraiz", "Eriel Rodriguez Reyes"];
let skills = [
    [
        {skillName : "Desarrollo de Juegos", skillAvail : .6, svg: ''}, 
        {skillName : "Programador Front-end", skillAvail : .5, svg: ''},
        {skillName : "Pixel Art", skillAvail : .6, svg: ''},
    ],
    [{skillName : mebmerNames[1], skillAvail : "aval"}],
    [{skillName : mebmerNames[2], skillAvail : "aval"}]
]
let userprofile = [
    "src/user-image.png",
    "src/ultra.png",
    "src/eriel.png"
]

let members = {
    "name" : mebmerNames,
    skills,
    userprofile
}
let activeUser = 0;
// -------------MEMBERS VARS--------------------
console.log(members.skills[0][0].skillAvail);



// -------------INTERACTIVE DOOM--------------------
modal_close.addEventListener('click', ()=> {
    modal.classList.replace('modal-activate', 'modal-deactivate');
    setTimeout(() => {
        modal.classList.remove('modal-deactivate');
    }, 500)
})

card_toggle.forEach(element => {
    element.addEventListener('click', () => {
        modal.classList.toggle('modal-activate');
        activeUser = element.parentElement.className.split(" ")[1].split("-")[1];
    })
})

close_button.forEach(element => {
    element.addEventListener('click', () => {
        element.parentElement.parentElement.classList.remove('info-activate');
        console.log("close button interaction");
        canMobileInteraction = false;
        setTimeout(() => {
            canMobileInteraction = true;
        }, 500)
    })
})

more_info_toggle.forEach(element => {
    element.addEventListener('click', () => {
        element.parentElement.classList.add('info-activate');
    })
})

const updateWorldToggle = () => {
    world.forEach(element => {
        if (smallDevice) {
            element.addEventListener('click', () => {
                if (canMobileInteraction) {
                    element.classList.toggle('info-activate')
                    console.log("world event");
                }
            })
            console.log(`can interaction: ${canMobileInteraction}`); 
        }
    })
}

match.addEventListener('change', () => {
    changeDevice(match.matches);
})

const changeDevice = isMobile => {
    smallDevice = isMobile;
    updateWorldToggle();
}


updateWorldToggle();
changeDevice(match.matches);
// -------------INTERACTIVE DOOM--------------------


// -------------MEMBERS VARS--------------------
