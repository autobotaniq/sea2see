jQuery(document).ready(function () {
  'use strict';

  product_thumbnails_slider.init();
  blog_thumbnails_slider.init();

  $('[data-modal]').each(function () {

    $(this).on('click', function (e) {
      e.preventDefault();

      var $this = $(this),
        $dataMadel = $this.data('modal');

      $('[data-modal-popup=' + $dataMadel + ']').fadeIn();
      $('body').addClass('body-overflow-hidden');
    })
  });

  $('.popup-collaboration__close').on('click', function () {
    $('.overlay-collaboration').fadeOut();
    $('body').removeClass('body-overflow-hidden');
  });


  $( "li" ).has( "ul" ).addClass('has-child');
  $( "li.has-child" ).click(function() {
    $(".sub-menu", this).slideToggle().css("display","flex");
  });
  if(window.matchMedia('(min-width: 992px)').matches){
    $( "li.has-child" ).click(function() {
      $(".sub-menu", this).css("display","flex");
      $(this).toggleClass('active-sub');
    });
    jQuery(function($){
      $(document).mouseup(function (e){
        var div = $(".sub-menu",this);
        if (!div.is(e.target)
          && div.has(e.target).length === 0) {
          div.hide();
        }
      });
    });
  }
  $( ".hamburger" ).click(function() {
    $(".head").slideToggle().css("display","block");
  });
  $().ready(
    function() {
      var day = 24*60*60*1000;
      var step = 0.5;
      var firstDate = new Date($('#startDate').val());
      var secondDate = new Date();
      var startCounter = $('#startCounter').val();
      var daysPassed = Math.abs((firstDate.getTime() - secondDate.getTime())/(day));
      $('.counter__result').text((daysPassed * 0.5).toFixed(1));
    });
  var sliders = {
    1: {slider : '#slider_1', nav: '#slider_nav_1'},
    2: {slider : '#slider_2', nav: '#slider_nav_2'},
    3: {slider : '#slider_3', nav: '#slider_nav_3'},
    4: {slider : '#slider_4', nav: '#slider_nav_4'},
    5: {slider : '#slider_5', nav: '#slider_nav_5'},
    6: {slider : '#slider_6', nav: '#slider_nav_6'}
  };

  $.each(sliders, function() {

    $(this.slider).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: this.nav
    });
    $(this.nav).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      asNavFor: this.slider,
      arrows: true,
      dots: false,
      centerMode: true,
      focusOnSelect: true
    });

  });
  $(document).ready(function(){
    $('.photos').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: '.photos-nav'
    });
    $('.photos-nav').slick({
      vertical: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.photos',
      arrows: false,
      dots: false,
      centerMode: false,
      focusOnSelect: true
    });
    $('.variables').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      focusOnSelect: true,
      centerMode: true
    });
  });
  $('.image').zoom();
  $(document).ready(function(){
    $(".load-more-press").slice(0, 4).css('display', 'flex');
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".load-more-press:hidden").slice(0, 4).slideDown().css('display', 'flex');;
      if($(".load-more-press:hidden").length == 0) {
        $("#loadMore").text("No Content").addClass("noContent");
      }
    });
  });


  /* ------------ Deleting placeholder focus ------------ */
  var inputPlaceholder = $('input, textarea');
  inputPlaceholder.on('focus', function () {
    $(this).data('placeholder', $(this).attr('placeholder'));
    $(this).attr('placeholder', '')
  });

  inputPlaceholder.on('blur', function () {
    $(this).attr('placeholder', $(this).data('placeholder'))
  });
  /* ---------- End Deleting placeholder focus ---------- */
});


var product_thumbnails_slider = {

  hover: function () {

    var product = jQuery('.product');

    product.each(function () {

      var productImage = jQuery(this).find('.product__image');

      var productImageHeight = productImage.height();

      productImage.css('height', productImageHeight);


      var img = productImage.find('img');

      var productThumbmail = jQuery(this).find('.product__thumbnails img');

      var originalSrc = img.attr('data-original-src');

      var hoverSrc = img.attr('data-hover-src');


      productImage.hover(
        function () {

          img.attr('src', hoverSrc);

        },

        function () {

          img.attr('src', originalSrc);

        });


      productThumbmail.hover(
        function () {

          var hoverSrc = jQuery(this).attr('src');

          img.attr('src', hoverSrc);

        },

        function () {

          img.attr('src', originalSrc);

        });

    });

  },

  slick: function () {

    jQuery('.product__thumbnails').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
    });

  },

  init: function () {

    var self = this;

    self.slick();

    self.hover();

  },

};

var blog_thumbnails_slider = {
  slick: function () {


    jQuery('.instagram-slider__img').slick({

      infinite: true,

      slidesToShow: 6,

      slidesToScroll: 1,

      dots: true,

      dotsClass: "blog-dots",

      responsive: [
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 960,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 720,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true
          }
        },
        {
          breakpoint: 540,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: false
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
          }
        }
      ]

    });


  },
  init: function () {


    var self = this;


    self.slick();


  },
};