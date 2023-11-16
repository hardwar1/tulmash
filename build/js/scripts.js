'use strict';
window.addEventListener("DOMContentLoaded", () => {
  const swiper = new Swiper('.hero__wrapper', {
    speed: 400,
    spaceBetween: 0,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  const swiper1 = new Swiper('.suppliers__slider', {
    speed: 400,
    spaceBetween: 35,
    slidesPerView: 'auto',

    navigation: {
      prevEl: '.slider-button--prev',
      nextEl: '.slider-button--next',
    },
  });

  $('input[type=file]').on('change', function () {
    let file = this.files[0];
    $(this).parent().find('.file-text').html(file.name);
  });

  $.each($('.hover-menu'), function (index, value) {
    $(value).click(function (e) {
      e.preventDefault();
    })
  });

  $('.header__menu-btn').click(function () {
    $(this).toggleClass('active');
    $('.header__links').toggleClass('active');
    $('body').toggleClass('lock');
  });

  function closePopaps() {
    $('body').removeClass('lock');
    $('.js-active.active').removeClass('active');
  }

  function openPopaps(name) {
    $('body').addClass('lock');
    $(name).addClass('active');
    $(`.overlay`).addClass('active');
  }

  $('.logistic__btn').click(function () {
    openPopaps('.delivery');
  });

  $('.delivery-btn').click(function (e) {
    e.preventDefault();
    openPopaps('.delivery');
  });

  $('.contacts-btn').click(function (e) {
    e.preventDefault();
    openPopaps('.contacts-popap');
  });

  $('.popap__close').click(closePopaps);

  $('.overlay').click(closePopaps);

  $(document).keyup(function (e) {
    if (e.keyCode == 27) {
      closePopaps();
    }
  });


});

