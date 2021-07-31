/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

/*===== SHOW MENU =====*/
/* Validate if constant exists */
if(navToggle) {
    navToggle.addEventListener('click',  () => {
        navMenu.classList.add('show-menu')
    })
}

/*===== HIDE MENU  =====*/
/* Validate if constant exists */
if(navClose) {
    navClose.addEventListener('click',  () => {
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //When any nav link is clicked, remove the show-menu class
    navMenu.classList.remove('show-menu')
}

navLink.forEach(nav => nav.addEventListener('click', linkAction))

/*==================== ACCORDION SKILLS ====================*/

/*==================== QUALIFICATION TABS ====================*/


/*==================== SERVICES MODAL ====================*/


/*==================== PORTFOLIO SWIPER  ====================*/


/*==================== TESTIMONIAL ====================*/


/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')
console.log(sections)

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')
        console.log(sectionId);

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
            
        } else {
        
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
            
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 


/*==================== DARK LIGHT THEME ====================*/ 