const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')
const aboutImg = document.querySelector('.about-me__img')


//navagation stuff
navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})

//about me pic
//init
screen.width < 600 ? aboutImg.src = './img/fullshot.jpg' : aboutImg.src = './img/fullshot-2.jpg'
//on change
window.addEventListener("resize", e => {
    screen.width < 600 ? aboutImg.src = './img/fullshot.jpg' : aboutImg.src = './img/fullshot-2.jpg'
})

