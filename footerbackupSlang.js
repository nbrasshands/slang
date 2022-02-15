
  var swiperNodes = "";
  var pagination = '<div class=swiper-pagination></div>';
  var next_prev_buttons = '<div class="swiper-button-prev"></div><div class="swiper-button-next"></div>'; 
  var scrollbar = '<div class="swiper-scrollbar"></div>';
  var swiperNodes = swiperNodes.concat(pagination, next_prev_buttons);
  /* loop throw all swipers on the page */
  $('.swiper-container').each(function( index ) {
    $( this ).append(swiperNodes);
  });

<!-- swiper JS Initialize -->


var mySwiper = new Swiper ('.swiper-testimonial', {
    // Optional parameters
    slidesPerView: 1,
    spaceBetween: 40,
    freeMode: false,
    loop: true,
    centeredSlides: false,
    // Enable lazy loading
    navigation: {
      nextEl: '.custom_next_testimonial',
      prevEl: '.custom_prev_testimonial',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      0: { /* when window >=0px - webflow mobile landscape/portriat */
        slidesPerView: 'auto',
        spaceBetween: 16,
      },
      767: { /* when window >= 767px - webflow tablet */
        slidesPerView: 'auto',
        spaceBetween: 24,
      },
      988: { /* when window >= 988px - webflow desktop */
        slidesPerView: 'auto',
        spaceBetween: 40,
      }
    },
    
  })