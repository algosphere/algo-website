// FRONTEND
$(document).ready(function() {
  document.getElementById('search-input-header').value = '';
  document.getElementById('search-input-nav').value = '';
  $('.icon-clear').css('display', 'none');
});

function onkeypressed(evt, input) {
  var code = evt.charCode || evt.keyCode;
  if (code == 27) {
    input.value = '';
    $('.icon-clear').css('display', 'none');
    $('#search-results-header').css('display', 'none');
    $('#search-results-nav').css('display', 'none');
  }
}

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
  $('#search-results-header').css('display', 'none');
}

function clearSearchNav() {
  document.getElementById('search-input-nav').value = '';
  $('.icon-clear').css('display', 'none');
  $('#search-input-nav').focus();
  $('#search-results-nav').css('display', 'none');
}

// BACKTEND
