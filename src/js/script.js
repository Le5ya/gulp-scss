const headerMenu = document.querySelector('.header__menu');
const headerBlank = document.querySelector('.header__blank');
const pawIcon = document.querySelectorAll('.paw-button__icon');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalForm = document.querySelector('.contacts__form');



headerMenu.addEventListener('click', () => headerBlank.classList
.toggle('header__blank_vis'));


pawIcon.forEach((elem) =>  {
  elem.addEventListener('click', () => modal.classList
.add('modal_vis'));
})

modalClose.addEventListener('click', () => modal.classList
  .remove('modal_vis'));

const swiper = new Swiper('.help__swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  
});
const petSwiper = new Swiper('.pet__swiper', {
  // Optional parameters
  //loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
ymaps.ready(init);
function init() {
  const myMap = new ymaps.Map("map", {
    center: [55.848271, 37.375360],
    zoom: 14
  });
  const mark = new ymaps.Placemark([55.848271, 37.375360], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/mark.svg',
    iconImageSize: [39, 59]
  })

  myMap.geoObjects.add(mark);

  mark.events
    .add('hover', function (e) {
      e.get('target').options.set('iconImageSize', [49, 75]);
    })

  
}




