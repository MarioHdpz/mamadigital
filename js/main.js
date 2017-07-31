
$("#register").click(function () {
  $(".register-form").show();
  $(".login-form").hide();
});

$("#search-button").click(function () {
  $(".results").show();
  $(".popular").hide();
  $(".search-form-wrapper").addClass("has-results");
});

$(".favorite").click(function () {
  Materialize.toast('Gracias - Le has dado 5 puntos a Andrea!', 4000)
});

$("#add-child").click(function () {
    $(".new-child").show();
});
var baby = true;
$("#baby-select").change(function () {
    if(baby){
      $(".baby1").hide();
      $(".baby2").show();
      $(".results").hide();
      baby = false;
    } else {
      $(".baby2").hide();
      $(".baby1").show();
      $(".results").hide();
      baby = true;
    }
});


$("#sessions").click(function () {
  $(".results").hide();
  $(".popular").hide();
    $(".calendar-title").removeClass("hide");
  $(".collection-item").removeClass("selected");
  $("#sessions").addClass("selected");
  $('#calendar').fullCalendar({
      editable: false, // Don't allow editing of events
      handleWindowResize: true,
      weekends: false, // Hide weekends
      defaultView: 'agendaWeek', // Only show week view
      header: false, // Hide buttons/titles
      minTime: '07:30:00', // Start time for the calendar
      maxTime: '22:00:00', // End time for the calendar
      /*columnFormat: {
          week: 'd' // Only show day of the week names
      },*/
      displayEventTime: true, // Display event time
      events: [
        {
            title: 'Clases de economia familiar',
            start: '2017-07-24',
            end: '2017-07-24',
            color: '#C2185B '
        },
        {
            title: 'Aprende a preparar un desayuno nutritivo',
            start: '2017-07-25',
            end: '2017-07-25',
            color: '#18c22a '
        },
        {
            title: 'Como comenzar tu propio negocio online',
            start: '2017-07-25',
            end: '2017-07-25',
            color: '#C2185B '
        },
        {
            title: 'Comida saludable para mama',
            start: '2017-07-26',
            end: '2017-07-26',
            color: '#18c22a '
        },
        {
            title: 'Como elegir a mi pediatra?',
            start: '2017-07-27',
            end: '2017-07-27',
            color: '#b0c218 '
        },
        {
            title: 'Cuales son los tramites a seguir para un divorcio',
            start: '2017-07-28',
            end: '2017-07-28',
            color: '#18b0c2 '
        },
        {
            title: 'las mejores papillas Gerber',
            start: '2017-07-28',
            end: '2017-07-28',
            color: '#18c22a '
        }
      ]
  });
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
  
});