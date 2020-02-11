// TOP BUTTON
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.querySelector(".top-btn").style.display = "flex";
  } else {
    document.querySelector(".top-btn").style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// ENABLE POPOVERS
$(function () {
  $('[data-toggle="popover"]').popover()
})

// ENABLE TOOLTIPS
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// SEARCH
$('#search-input-header').keyup(function() {
  if ($(this).val().length != 0) {
    $('.icon-clear').css('display', 'flex');
  } else {
    $('.icon-clear').css('display', 'none');
  }
}).keyup();

$('#search-input-nav').keyup(function() {
  if ($(this).val().length != 0) {
    $('.icon-clear').css('display', 'flex');
  } else {
    $('.icon-clear').css('display', 'none');
  }
}).keyup();

function clearSearchHeader() {
  document.getElementById('search-input-header').value = '';
  $('.icon-clear').css('display', 'none');
  $('#search-input-header').focus();
}

function clearSearchNav() {
  document.getElementById('search-input-nav').value = '';
  $('.icon-clear').css('display', 'none');
  $('#search-input-nav').focus();
}

function onkeypressed(evt, input) {
  var code = evt.charCode || evt.keyCode;
  if (code == 27) {
      input.value = '';
  }
}
