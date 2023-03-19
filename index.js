
// Blinking "notification"
function blink(){
  $('.notification').delay(500).fadeIn()
  .delay(500).fadeTo(100,0)
  .delay(200).fadeTo(100,1)
  .delay(200).fadeTo(100,0)
  .delay(200).fadeTo(100,1)
  .delay(200).fadeTo(100,0)
  .delay(200).fadeTo(100,1);
}

// Intro modal button actions
$('.modal-button.intro').click( function () {
  $('.intro.modal-container h1').text("Click on the folders behind this modal to learn more!");
  $('.close').hover( function () {
    $(this).css('cursor','pointer');
  });
  $('.modal-button.intro').click( function () {
    $('.main-bg .intro.modal-container').css('display','none');
    $(this).parent('.modal').removeClass('show');
  });
})

//portfolio section modals
$('#what-i-do').click( function () {
  $('.what-i-do.modal-container').css('display','block');
  setTimeout( function (){
    $('.what-i-do #slide-up').addClass('show');
  }, 250);
})
$('#my-skills').click( function () {
  $('.my-skills.modal-container').css('display','block');
  setTimeout( function (){
    $('.my-skills #slide-up').addClass('show');
  }, 250);
})
$('#my-work').click( function () {
  $('.my-work.modal-container').css('display','block');
  setTimeout( function (){
    $('.my-work #slide-up').addClass('show');
  }, 250);
})
$('#about-me').click( function () {
  $('.about-me.modal-container').css('display','block');
  setTimeout( function (){
    $('.about-me #slide-up').addClass('show');
  }, 250);
})

// close modal button
$('.modal .close').click( function () {
  $(this).parent().parent().parent('.main-bg .modal-container').css('display','none');
  $(this).parent().parent('.modal').removeClass('show');
});

//Fire JS once document loads
$( document ).ready(function() {
    //display today's date
    var d = new Date();
    var date = d.toDateString();
    $('#displayDate').html( date );

    // init popup
    setTimeout( function () {
      $('.intro #slide-up').addClass('show');
      setTimeout( function (){
        $('.notification').fadeOut("slow");
      }, 2000)
    }, 3000)

    // notification icon blink
    blink();

});
