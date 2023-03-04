const menuBtn = document.querySelector('#menu-btn');
const navbarLinks = document.querySelector('#navbar-links');

let isMenuOpen = false;

menuBtn.addEventListener('click', () => {
  if (!isMenuOpen) {
    navbarLinks.classList.add('open');
    isMenuOpen = true;
  } else {
    navbarLinks.classList.remove('open');
    isMenuOpen = false;
  }
});









// Function to check if an element is in the viewport
function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to animate the progress bars
function animateProgressBars() {
  var progressBars = document.querySelectorAll(".skills-bar-progress");

  progressBars.forEach(function(progressBar) {
    if (isElementInViewport(progressBar)) {
      var progress = progressBar.getAttribute("data-progress");
      progressBar.style.width = progress + "%";
    }
  });
}

// Event listener for when the user scrolls
window.addEventListener("scroll", function() {
  animateProgressBars();
});

// Animate progress bars when page is loaded
animateProgressBars();














// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("go-to-top-btn").style.display = "block";
  } else {
    document.getElementById("go-to-top-btn").style.display = "none";
  }
}

// Scroll to the top of the document when the user clicks the button
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}