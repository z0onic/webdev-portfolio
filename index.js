const navToggle = document.querySelector('.nav-toggle')
const navLinks = document.querySelectorAll('.nav__link')
const title = document.querySelectorAll('.portfolio__item_title')
const thumb = document.querySelectorAll('.portfolio__item')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
})

// thumb.addEventListener('mouseenter', () => {
//     setTimeout(() => {
//         title.style.opacity = '1'
//     }, 600)
// })

// thumb.addEventListener('mouseleave', () => {
//     setTimeout(() => {
//         title.style.opacity = '0'
//     }, 1000)
// })