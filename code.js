'use strict';

let close_button = document.querySelectorAll('.close-button');
let more_info = document.querySelector('.more-info')
let more_info_toggle = document.querySelectorAll('.more-info-toggle');
let world = document.querySelectorAll('.world')
let smallDevice = false;
let canMobileInteraction = true;
const match = matchMedia("(max-width:600px)");

close_button.forEach(element => {
    element.addEventListener('click', () => {
        element.parentElement.parentElement.classList.remove('info-activate');
        console.log("close button interaction");
        canMobileInteraction = false;
        setInterval(() => {
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