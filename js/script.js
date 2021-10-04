//  ============================ Dark Theme ===========================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (checking from local storage)

const selectedTheme = localStorage.getItem('selected-item')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that interface has by validating dark theme class

const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun' 

// Validating previously chosen topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme)

}

// toggling theme manually

themeButton.addEventListener('click' , () => {
    // changing icon -- icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //saving theme and icon
    localStorage.setItem('selectedTheme' , getCurrentTheme())
    localStorage.setItem('selected-icon' , getCurrentIcon())   

})

console.log("Theme Setting is working");


// ================== Menu show Y  Hidden ==================

const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')


//========= Menu Y show ============

if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

//========= Menu Y hide ============

if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}



console.log("Menu Y settings working");

//=============== rEMOVE MENU PROfile ===========

const navLink = document.querySelectorAll('.nav__link')
 
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}


navLink.forEach( n => n.addEventListener('click' , linkAction))
console.log("Remove menu profile working");

// ================= Type wrtiter effect ===================



new Typewriter('#typewriter', {
  strings: ['Parva Shah', 'Front-end Web Developer' , 'IT Engineer' ],
  autoStart: true,
  loop: true,
  cursor: "|",
});

console.log("TypeWriter Effect");


// ===================== Portfolio Swiper Effect ======================


var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    keyboard: true,
    mousewheel: {
      invert: false,
    },
    navigation: {
        nextEl : ".swiper-button-next",
        prevE1 : ".swiper-button-prev",
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
  });
  console.log("Portfolio Swiper Working!");


