// Showing the nav on click

const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click',show);
closeMenu.addEventListener('click',close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function close(){
    mainMenu.style.top = '-100%';
}

// Owl Carousel

$('.wrapper').owlCarousel({
    loop:true,
    margin:10,
    autoplay: true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsiveClass:true,
    responsive:{
         0:{
             items:1,
             nav:false
         },
         600:{
            items:3,
            nav:false
         },
         1000:{
            items:3,
            nav:false,
            loop:true
        }
    }
})