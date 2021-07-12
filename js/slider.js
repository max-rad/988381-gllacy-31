const pageWrapper = document.querySelector(".page-wrapper");
const sliderSlides = document.querySelectorAll(".slide");
const sliderControls = document.querySelectorAll(".slider__control");

let slideIndex = 0;
showSlides(slideIndex);

for (let i = 0; i < sliderControls.length; i++) {
  sliderControls[i].addEventListener("click", function () {
    showSlides(i);
  });
}

function showSlides(n) {
  pageWrapper.classList.remove("page-wrapper-1");
  pageWrapper.classList.remove("page-wrapper-2");
  pageWrapper.classList.remove("page-wrapper-3");

  for (let i = 0; i < sliderSlides.length; i++) {
    if (sliderSlides[i].classList.contains("slide_current")) {
      sliderSlides[i].classList.remove("slide_current");
    }
  }

  for (let i = 0; i < sliderControls.length; i++) {
    if (sliderControls[i].classList.contains("slider__control_current")) {
      sliderControls[i].classList.remove("slider__control_current");
    }
  }

  sliderSlides[n].classList.add("slide_current");
  sliderControls[n].classList.add("slider__control_current");

  switch (n) {
    case 0:
      pageWrapper.classList.add("page-wrapper-1");
      break;
    case 1:
      pageWrapper.classList.add("page-wrapper-2");
      break;
    case 2:
      pageWrapper.classList.add("page-wrapper-3");
      break;
  }
}
