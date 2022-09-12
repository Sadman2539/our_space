const btn = document.getElementById("menu-btn");
const overlay = document.getElementById("overlay");
const menu = document.getElementById("mobile-menu");
const counters = document.querySelectorAll(".counter");
let scrollStarted = false;

btn.addEventListener("click", navToggle);
document.addEventListener("scroll", scrollPage);

// for hamburger menu
function navToggle() {
  btn.classList.toggle("open");
  overlay.classList.toggle("overlay-show");
  document.body.classList.toggle("stop-scrolling");
  menu.classList.toggle("show-menu");
}

// for counter
function scrollPage() {
  const scrollPosition = window.scrollY;
  if (scrollPosition > 100 && !scrollStarted) {
    countIncrement();
    scrollStarted = true;
  } else if (scrollPosition < 100 && scrollStarted) {
    resetCounter();
    scrollStarted = false;
  }
}

function countIncrement() {
  counters.forEach((counter) => {
    counter.innerText = "0";

    const updateCounter = () => {
      // to get target value
      const target = +counter.getAttribute("data-target");

      // current counter value
      const current = +counter.innerText;

      // create increment
      const increment = target / 15;

      // if current is less than target
      if (current < target) {
        counter.innerText = `${Math.ceil(current + increment)}`;
        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };
    updateCounter();
  });
}

function resetCounter() {
  counters.forEach((counter) => {
    counter.innerText = "0";
  });
}
