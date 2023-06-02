const navbar = document.querySelector('header');

const sectionn = document.querySelectorAll('section');
const navlinkss = document.querySelectorAll('nav ul li a');

window.onscroll = () => {
    if(window.scrollY > 100) {
        navbar.classList.add('bg-color-primary-dark');
        navbar.classList.add('border-b');
        navbar.classList.add('border-color-gray');
    } else {
        navbar.classList.remove('bg-color-primary-dark');
        navbar.classList.remove('border-b');
        navbar.classList.remove('border-color-gray');
    }

    // active link
    let current = 'home';

    sectionn.forEach((section) => {
        const sectionTop = section.offsetTop;
        if(pageYOffset >= sectionTop-60) {
            current = section.getAttribute('id');
        }
    })
    navlinkss.forEach((item) => {
        item.classList.remove('text-color-secondary');
        if(item.href.includes(current)) {
            item.classList.add("text-color-secondary");
        } 
    });
}
//Mobile Menu

const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const hLink = document.querySelectorAll('#hLink');
const faSolid = document.querySelector(".fa-solid");

hamburger.addEventListener("click", () => {
menu.classList.toggle('hidden');
faSolid.classList.toggle('fa-xmark');
})

hLink.forEach(link => {
   link.addEventListener('click', () => {
       menu.classList.toggle('hidden');
       faSolid.classList.toggle('fa-xmark');
   })
})


//Testimonials
const userTexts = document.getElementsByClassName('user-text');
const userPics = document.getElementsByClassName('user-pic');

function showReview() {
   for(userPic of userPics) {
       userPic.classList.remove("active-pic");
   }
   for(userText of userTexts) {
       userText.classList.remove("active-text");
   }

   let i = Array.from(userPics).indexOf(event.target);

   userPics[i].classList.add('active-pic');
   userTexts[i].classList.add('active-text');
}
