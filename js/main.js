  /* jquery button top part */
  $(document).ready(function(){

  $(function () {
    $(".top").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 2000);
    });

    

});


$(function(){
    $(window).scroll(function(){
    var $scroll= $(this).scrollTop();
    if( $scroll !=0){
        $(".top").fadeIn()
    }
     else{
        $(".top").fadeOut()
    }
});
});


$(function(){
    var $dis= $(".sticky-top").offset().top;
    
    $(window).scroll(function(){
        var $scrolling = $(this).scrollTop();
        if( $scrolling > $dis ){
           $(".sticky-top").addClass("stricky")
        }
        else{
           $(".sticky-top").removeClass("stricky")
        }
    });
});

});

/*-- end jquery botton top part--*/


$(document).ready(function(){
     // Skills section
  $('#skills').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, { offset: '80%'} );
  


  // jQuery counterUp (used in Facts section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Initiate the wowjs animation library
  new WOW().init();
  // Initiate superfish on nav menu
  $('.navbar-nav').superfish({
    animation: {
      opacity: 'show'
    },
    speed: 400
  });

  
 

  $(".clients-carousel").owlCarousel({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed: 300,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });


   // Testimonials carousel (uses the Owl Carousel library)
   $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,


  });

  /*
  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });

   */          
  
  });		

  
  $(function() {
    var topoffset = 70; //variable for menu height

    //Use smooth scrolling when clicking on navigation
    $('.navbar-nav a').click(function() {
    if (location.pathname.replace(/^\//,'') === 
      this.pathname.replace(/^\//,'') && 
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top-topoffset
      }, 500);
      return false;
      } //target.length
    } //click function
    }); //smooth scrolling





});
