hamburger = document.querySelector('.hamburger');
navbar = document.querySelector('.navbar');
rightNav = document.querySelector('.rightnav');
navList = document.querySelector('.nav-list');


hamburger.addEventListener('click',()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})