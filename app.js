
// Get the current year for the copyright
$('#year').text(new Date().getFullYear());

// Configure Slider
$('.carousel').carousel({
  interval: 2000,
  pause: 'null'
});

// Lightbox Init
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});




// remove probaly

$(window).scroll(function () {
  if ($(this).scrollTop() > 30) {
    $('.navbar').addClass('opaque');
  } else {
    $('.navbar').removeClass('opaque');
  }
});