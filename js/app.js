let slides = document.querySelectorAll(".slide");
let slideControlWrap = document.querySelector(".slider-controls");
let count = 0;
function checkSlidenumber() {}
function createIndicator(el) {
  let span = document.createElement("span");
  span.classList.add("slide-indicator");
  el.appendChild(span);
}
function moveSlide() {
  slides.forEach(function (k) {
    k.classList.remove("active");
  });
  if (count >= slides.length - 1) {
    count = 0;
  } else {
    count++;
  }
  console.log(slides[count]);
  slides[count].classList.add("active");
}
// setInterval(moveSlide, 2000);
