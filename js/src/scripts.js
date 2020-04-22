jQuery(document).ready(function() {



  'use strict';



  product_thumbnails_slider.init();

  blog_thumbnails_slider.init();

  // modal collaboration
  $('[data-modal=projects-description]').on('click', function() {
    $('.overlay-collaboration, .popup-collaboration').fadeIn();
  });

  $('.popup-collaboration__close').on('click', function() {
    $('.overlay-collaboration, .popup-collaboration').fadeOut();
  });

});



var product_thumbnails_slider = {



  hover: function() {



    var product = jQuery('.product');



    product.each(function() {

      var productImage = jQuery(this).find('.product__image');

      var productImageHeight = productImage.height();

      productImage.css('height', productImageHeight);



      var img = productImage.find('img');

      var productThumbmail = jQuery(this).find('.product__thumbnails img');

      var originalSrc = img.attr('data-original-src');

      var hoverSrc = img.attr('data-hover-src');



      productImage.hover(

          function() {

            img.attr('src', hoverSrc);

          },

          function() {

            img.attr('src', originalSrc);

          });



      productThumbmail.hover(

          function() {

            var hoverSrc = jQuery(this).attr('src');

            img.attr('src', hoverSrc);

          },

          function() {

            img.attr('src', originalSrc);

          });



    });



  },



  slick: function() {



    jQuery('.product__thumbnails').slick({

      infinite: true,

      slidesToShow: 3,

      slidesToScroll: 1,

    });


  },

  


  init: function() {



    var self = this;



    self.slick();

    self.hover();



  },



};

var blog_thumbnails_slider = {



  



  slick: function() {



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

  


  init: function() {



    var self = this;



    self.slick();



  },



};
