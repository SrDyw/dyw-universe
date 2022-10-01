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
let skills_content = document.querySelector('.skills-content');
// -------------INTERACTIVE DOOM VARS--------------------



// -------------MEMBERS VARS--------------------
let mebmerNames = ["Dayniel Martinez Rodriguez", "Alberto Carrillo Moraiz", "Eriel Rodriguez Reyes"];
let skills = [
    [
        {skillName : "Desarrollo de Juegos", skillAvail : .7, svg: '<ion-icon name="game-controller"></ion-icon>'}, 
        {skillName : "Programador Front-end", skillAvail : .5, svg: '<ion-icon name="terminal"></ion-icon>'},
        {skillName : "Diseño Pixel Art", skillAvail : .6, svg: '<ion-icon name="color-palette"></ion-icon>'},
        {skillName : "Diseño 3D", skillAvail : .5, svg: '<ion-icon name="cube"></ion-icon>'},

    ],
    [
        {skillName : "Diseño Pixel Art", skillAvail : 1, svg: '<ion-icon name="color-palette"></ion-icon>'}, 
        {skillName : "Diseño HD", skillAvail : .85, svg: '<ion-icon name="color-palette"></ion-icon>'}
    ],
    [{skillName : "Produccion Musical", skillAvail : .80, svg: '<ion-icon name="musical-notes"></ion-icon>'}],
]
let userprofile = [
    "src/user-image-export.webp",
    "src/ultra.webp",
    "src/eriel.webp "
]

let members = {
    "name" : mebmerNames,
    skills,
    userprofile
}
let activeUser = 0;
let fill_bar = document.querySelector('.fill-bar'); 

// fill_bar.style.width = "50%";
console.log(fill_bar);
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
        updateModal();
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


// -------------MEMBERS--------------------
const updateModal = () => {
    let documentFragment = document.createDocumentFragment();
    let skills = members.skills[activeUser];
    skills_content.innerHTML = "";
    for(let i = 0; i < skills.length; i++) {
        let percentaje = Math.floor(skills[i].skillAvail * 100);
        let skillContent = `
            <div class="skill">
                <div class="skill-info">
                    <div class="left-text">
                        <span class="skill-svg">${skills[i].svg}</span>
                        <span><h4 class="skill-name">${skills[i].skillName}</h4></span>
                    </div>
                    <div class="rigth-text">
                        <h2 class="percentaje">${percentaje}%</h2>
                    </div>
                </div>
                <div class="skill-bar">
                    <div class="fill-bar" style='width:${percentaje}%'></div>
                </div>
            </div>
        `   
        skills_content.innerHTML += skillContent;
        let user_name = document.querySelector('.modal-user-name');
        document.querySelector('.modal-user-image').innerHTML = `<img src="${userprofile[activeUser]}" alt="">`;

        user_name.textContent = members.name[activeUser];
        
    }
}

// -------------MEMBERS--------------------

