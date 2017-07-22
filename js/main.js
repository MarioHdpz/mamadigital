
$("#register").click(function () {
  $(".register-form").show();
  $(".login-form").hide();
});

/*FORM STEPS*/
$("#form-step1").click(function () {
  $(".about-me").hide();
  $(".interest").show();
});

$("#form-step2").click(function () {
  $(".interest").hide();
  $(".children").show();
});


/*Initialize components*/
$(document).ready(function(){
  //$('.modal').modal();
  $('.carousel.carousel-slider').carousel({fullWidth: true});
  
  setInterval(function() {
    $('.carousel').carousel('next');
  }, 3500);
  
  
  $(document).ready(function() {
    $('select').material_select();
  });
  
  /*Side Navbar*/
  //$(".button-collapse").sideNav();
});