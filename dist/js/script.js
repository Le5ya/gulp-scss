const headerMenu = document.querySelector('.header__menu');
const headerBlank = document.querySelector('.header__blank');
const pawIcon = document.querySelectorAll('.paw-icon');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');
const modalForm = document.querySelector('.contacts__form');



headerMenu.addEventListener('click', () => headerBlank.classList
.toggle('header__blank_vis'));


for(btn of pawIcon) {
  btn.addEventListener('click', () => modal.classList
.add('modal_vis'));
}

modalClose.addEventListener('click', () => modal.classList
.remove('modal_vis'));

