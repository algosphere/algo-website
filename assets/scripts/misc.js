// TOP BUTTON
window.onscroll = function() {scrollFunction()};
document.getElementById('topBtn').onclick = topFunction;

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

// FIX POPOVERS CLOSING WHEN CLICK INSIDE
$(document).mouseup(function (e) {
  var container = $(".popover")
  if (!container.is(e.target)  && container.has(e.target).length === 0)  {
    container.popover("hide")
  }
})

// ENABLE TOOLTIPS
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// LINK TO TABS
$(document).ready(() => {
  var url = window.location.href;
  if (url.indexOf("#") > 0){
  var activeTab = url.substring(url.indexOf("#") + 1);
    $('.nav[role="tablist"] a[href="#'+activeTab+'"]').tab('show');
  }

  $('a[role="tab"]').on("click", function() {
    var newUrl;
    const hash = $(this).attr("href");
      newUrl = url.split("#")[0] + hash;
    history.replaceState(null, null, newUrl);
  });
});

// EXTERNAL LINKS ICON
var links = $(document.links).filter(function() {
  return this.hostname !== location.hostname
    && !this.classList.contains('no-external-icon');
});
for (var i = 0; i < links.length; i++) {
  links[i].innerHTML += "<span style=\"white-space: nowrap;\">" + externalLinkIcon + "</span>";
}

// LANGUAGE SWITCHER
function languageSwitcherCookie(lang, url) {
  document.cookie = "nf_lang=" + lang + "; path=/; max-age=31536000; SameSite=Lax";
  window.location = url;
}

// FOOTNOTES BADGE/POPOVERS
var footnoteRef = document.querySelector('#fnref\\:1')
var footnoteNumber = footnoteRef.innerText
var footnoteRefLink = footnoteRef.innerHTML
var footnote = document.querySelector('.footnotes li#fn\\:1').innerHTML.trim()
var footnoteAnchor = footnoteRef
  footnoteAnchor.lastChild.innerHTML = anchorIcon
  footnoteAnchor = footnoteAnchor.innerHTML

var footnoteBadge = document.createElement("a")
  footnoteBadge.classList.add("footnote-ref", "badge", "badge-pill", "badge-secondary", "footnote-badge")
  footnoteBadge.id = "fnref:1"
  footnoteBadge.setAttribute("role", "doc-noteref")
  footnoteBadge.setAttribute("type", "button")
  footnoteBadge.setAttribute("tabindex", "0")
  footnoteBadge.setAttribute("data-container", "body")
  footnoteBadge.setAttribute("data-toggle", "popover")
  // footnoteBadge.setAttribute("data-trigger", "focus")
  footnoteBadge.setAttribute("data-placement", "bottom")
  footnoteBadge.setAttribute("data-html", "true")
  footnoteBadge.setAttribute("data-content", footnote + footnoteAnchor)
  footnoteBadge.innerHTML = footnoteNumber

footnoteRef.insertAdjacentElement("beforebegin", footnoteBadge)
footnoteRef.remove()

$(document).mouseup(function (e) {
  var container = $(".popover");

  if (!container.is(e.target)  && container.has(e.target).length === 0)  {
      container.popover("hide");
  }
})
