// FRONTEND
// on page load
$(document).ready(function() {
  // reset input value
  document.getElementById('search-input-header').value = '';
  document.getElementById('search-input-nav').value = '';
  $('.icon-clear').css('display', 'none');

  // override bootstrap toggle behavior
  $('#search-header').on('shown.bs.dropdown', function () {
      this.classList.add('show');
      // $('#resultsMenuButtonHeader').setAttribute('aria-expanded', 'true');
    })
  $('#search-header').on('hidden.bs.dropdown', function () {
      this.classList.add('show');
      $('#resultsMenuButtonHeader').setAttribute('aria-expanded', 'false');
    })
  $('#search-header').on('hide.bs.dropdown', function () {
      $('#resultsMenuButtonHeader').setAttribute('aria-expanded', 'false');
    })
});

// outside click
$(document).on('click', function(event) {
  if (!$(event.target).closest('#search-results-header').length) {
    $('#search-results-header').css('display', 'none');
    $('#resultsMenuButtonHeader').setAttribute('aria-expanded', 'false');
  }
});

// escape key
function onkeypressedHeader(evt, input) {
  var code = evt.charCode || evt.keyCode;
  if (code == 27) {
    input.value = '';
    $('#search-input-header').focus();
  }
}

function onkeypressedNav(evt, input) {
  var code = evt.charCode || evt.keyCode;
  if (code == 27) {
    input.value = '';
    $('#search-input-nav').focus();
  }
}

// clear icon
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

// clear function
function clearSearchHeader() {
  document.getElementById('search-input-header').value = '';
  $('.icon-clear').css('display', 'none');
  $('#search-input-header').focus();
  $('#search-results-header').css('display', 'none');
  $('#resultsMenuButtonHeader').setAttribute('aria-expanded', 'false');
}

function clearSearchNav() {
  document.getElementById('search-input-nav').value = '';
  $('.icon-clear').css('display', 'none');
  $('#search-input-nav').focus();
  $('#search-results-nav').css('display', 'none');
  $('#resultsMenuButtonHeader').setAttribute('aria-expanded', 'false');
}

// BACKTEND
var lunrIndex,
    $results,
    pagesIndex;

// initialize lunrjs and provide index file
function initLunr() {
  var request = new XMLHttpRequest();
  request.open('GET', 'scripts/search-index.json', true);

  request.onload = function () {
    if (request.status >= 200 && request.status < 400) {

      pagesIndex = JSON.parse(request.responseText);
      console.log("index:", pagesIndex);

      // declare fields
      lunrIndex = lunr(function () {
        this.field("content");
        this.ref("uri", {
          boost: 10
        });

        for (var i = 0; i < pagesIndex.length; ++i) {
          this.add(pagesIndex[i]);
        }
      });
    } else {
      var err = textStatus + ", " + error;
      console.error("Error getting Hugo index flie:", err);
    }
  };

  request.send();
}

// hook up to the UI
function initUI() {
  $results = document.getElementById("search-results-header");
  $search = document.getElementById("search-input-header");
  $search.onkeyup = function () {
    while ($results.firstChild) {
      $results.removeChild($results.firstChild);
    }

    // trigger search when at least 2 chars
    var query = $search.value;
    if (query.length < 2) {
      $('#search-results-header').css('display', 'none');
      // $('#resultsMenuButtonHeader').setAttribute('aria-expanded', 'false');
      return;
    }

    // add some fuzzyness for spelling mistakes tolerance
    var fuzzLength = Math.round(Math.min(Math.max(query.length / 4, 1), 3));
    var fuzzyQuery = query + '~' + fuzzLength;

    var results = search(fuzzyQuery);
    renderResults(results);
  };
}


// trigger a search and transform the result
function search(query) {
  // find the item in our index corresponding to the lunr one to have more info
  // Lunr result:
  //  {ref: "/section/page1", score: 0.2725657778206127}
  // our result:
  //  {title:"Page1", href:"/section/page1", ...}
  return lunrIndex.search(query).map(function (result) {
    return pagesIndex.filter(function (page) {
      return page.uri === result.ref;
    })[0];
  });
}

// only show ten first results
function renderResults(results) {
  if (!results.length) {
    $('#search-results-header').css('display', 'none');
    // $('#resultsMenuButtonHeader').setAttribute('aria-expanded', 'false');
      return;
  }

  $results = document.getElementById("search-results-header");
  results.slice(0, 10).forEach(function (result) {
    var ahref = document.createElement('a');
      ahref.classList.add('dropdown-item');
      ahref.classList.add('result');
    var heading = document.createElement('h5');
      heading.classList.add('result-title');
      heading.innerText = result.uri;
    var description = document.createElement('div');
      description.classList.add('result-text');
      description.innerText = result.uri;
    var divider = document.createElement('div');
      divider.classList.add('dropdown-divider');

    ahref.href = result.uri;
    ahref.appendChild(heading);
    ahref.appendChild(description);

    $results.appendChild(ahref).insertAdjacentElement('afterend',divider);
    $('#search-results-header').css('display', 'block');
    // $('#resultsMenuButtonHeader').setAttribute('aria-expanded', 'true');
  });
}

// enable search
initLunr();
document.addEventListener("DOMContentLoaded", function () {
  initUI();
})
