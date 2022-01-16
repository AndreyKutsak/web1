function initSlider(a) {
  let count = 0;
  let parent = a.element[0].parentNode;
  let indicators;
  function moveSlide() {
    console.log(a.element.length);
    count++;
    if (count >= a.element.length) {
      count = 0;
    }
    parent.style.transform =
      "translateX(" + count * a.element[0].offsetWidth + "px)";
    if (a.controls) {
      moveIndicator(count);
    }
  }
  function createIndicators() {
    console.log(a.indicator);
    if (a.controls) {
      a.element.forEach(function (k, i) {
        let controllItem = document.createElement("span");
        controllItem.className = "controll-item";

        if (i === 0) {
          controllItem.classList.add("active");
        }
        a.controls.appendChild(controllItem);
      });
      indicators = document.querySelectorAll(".controll-item");
    }
  }
  function moveIndicator() {
    for (let index = 0; index < indicators.length; index++) {
      indicators[index].classList.remove("active");
    }
    indicators[count].classList.add("active");
  }
  createIndicators();
  setInterval(moveSlide, a.time);
}
