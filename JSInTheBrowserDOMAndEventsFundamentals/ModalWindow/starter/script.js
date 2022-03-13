'use strict';

const btnsOpen = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

for (var i = 0; i < btnsOpen.length; i++) {
  btnsOpen[i].addEventListener('click', function () {
    openModal();
  });
}

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

modal.addEventListener('click', function () {
  closeModal();
});

overlay.addEventListener('click', function () {
  closeModal();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
});
