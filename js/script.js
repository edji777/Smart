'use strict';
var openPopup = document.querySelector('.contacts-list__link');
var popup = document.querySelector('.feedback--popup');
var closePopup = document.querySelector('.feedback__close');
var mainPage = document.querySelector('.container');
var popupName = document.querySelector('.feedback__name-popup');
var scroll = document.querySelector('.page-header__scroll');
var link = document.querySelector('.page-header__link');
var phoneMask = IMask(document.getElementById('telephone'), {
  mask: '+{7}(000)000-00-00'
});

mainPage.addEventListener('click', function () {
  if (mainPage.classList.contains('overlay')) {
    mainPage.classList.remove('overlay');
    popup.classList.remove('feedback-show');
    mainPage.style.position = '';
  }
});

$(scroll).click(function () {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500);
  return false;
});

$(link).click(function () {
  $('html, body').animate({
    scrollTop: $($(this).attr('href')).offset().top
  }, 500);
  return false;
});

openPopup.addEventListener('click', function (evt) {
  evt.stopPropagation();
  popup.classList.add('feedback-show');
  mainPage.classList.add('overlay');
  mainPage.style.position = 'fixed';
  popupName.focus();
  var phonepopMask = IMask(document.getElementById('telephone-popup'), {
    mask: '+{7}(000)000-00-00'
  });
});

closePopup.addEventListener('click', function (evt) {
  evt.preventDefault();
  popup.classList.remove('feedback-show');
  mainPage.classList.remove('overlay');
  mainPage.style.position = '';
});

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();

    if (popup.classList.contains('feedback-show')) {
      popup.classList.remove('feedback-show');
      mainPage.classList.remove('overlay');
      mainPage.style.position = '';
    }
  }
});
