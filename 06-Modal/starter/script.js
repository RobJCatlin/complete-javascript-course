'use strict';

const modal = document.querySelector('.modal'),
  overlay = document.querySelector('.overlay'),
  btnCloseModal = document.querySelector('.close-modal'),
  btnShowModal = document.querySelectorAll('.show-modal');

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  e.key === 'Escape' && !overlay.classList.contains('hidden')
    ? closeModal()
    : null;
});
