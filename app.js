let icon = document.getElementById('icon');
let navUl = document.querySelector('ul');
icon.addEventListener('click', function(){
  navUl.classList.toggle('show')
})


let RandomImage = document.querySelector('.randImg');
let RandomImage2 = document.querySelector('.randImg2');
let RandomImage3 = document.querySelector('.randImg3');
let RandomImage4 = document.querySelector('.randImg4');
for(let i =0; i<500; i++){
  let random = Math.round(Math.random()*350)
  let random2 = Math.round(Math.random()*20)
  let random3 = Math.round(Math.random()*400)
  let random4 = Math.round(Math.random()*350)
  let random5 = Math.round(Math.random()*350)
  let random6 = Math.round(Math.random()*350)
  let random7 = Math.round(Math.random()*700)
  let random8 = Math.round(Math.random()*350)
  RandomImage.style.marginTop = `${random2}px`
  RandomImage.style.marginLeft = `${random}px`
  RandomImage2.style.marginTop = `${random3}px`
  RandomImage2.style.marginLeft = `${random4}px`  
  RandomImage3.style.marginTop = `${random5}px`
  RandomImage3.style.marginLeft = `${random6}px`
  RandomImage4.style.marginTop = `${random7}px`
  RandomImage4.style.marginLeft = `${random8}px`

}


var swiper = new Swiper(".mySwiper1", {
  pagination: {
    el: ".swiper-pagination1",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop:true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

AOS.init();