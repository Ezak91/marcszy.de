
// document ready
$(document).ready(function () {
  loadSections();
  initializeFullpage();
});

// load sections
function loadSections() {
  fetch('common/welcome.html')
    .then(function (response) {
      return response.text();
    })
    .then(function (body) {
      document.querySelector('#welcome').querySelector(".fp-tableCell").innerHTML += body;
    });

  fetch('common/skills.html')
    .then(function (response) {
      return response.text();
    })
    .then(function (body) {
      document.querySelector('#skills').querySelector(".fp-tableCell").innerHTML += body;
    });

  fetch('common/technologies.html')
    .then(function (response) {
      return response.text();
    })
    .then(function (body) {
      document.querySelector('#technologies').querySelector(".fp-tableCell").innerHTML += body;
    });
}

// setup fullpage
function initializeFullpage() {
  new fullpage('#fullpage', {
    onLeave: controlNavigation,
    scrollOverflow: true,
    navigation: true,
  });

  //methods
  fullpage_api.setAllowScrolling(true);
}

// control navigation
function controlNavigation(origin, destination, direction) {

  //when going to skills section load skillbar
  if (origin.index == 0 && direction == 'down') {
    animateSkillbar();
  }

}

// animate skillbar
function animateSkillbar() {
  $(".bar").each(function () {
    $(this).find(".bar-inner").animate({
      width: $(this).attr("data-width")
    }, 2000)
  })
}