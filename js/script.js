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

const mainPage = document.querySelector(".page");
const feedbackLink = document.querySelector(".contacts__button");
const feedbackPopUp = document.querySelector(".modal-feedback");
const feedbackForm = feedbackPopUp.querySelector(".modal-feedback__form");
const feedbackName = feedbackPopUp.querySelector(".modal-feedback__name");
const feedbackEmail = feedbackPopUp.querySelector(".modal-feedback__email");
const feedbackText = feedbackPopUp.querySelector(".modal-feedback__text");
const feedbackClose = feedbackPopUp.querySelector(".modal-feedback__close");

let isStorageSupport = true;
let storageName = "";
let storageEmail = "";

try {
  storageName = localStorage.getItem("name");
  storageEmail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
  evt.preventDefault();

  feedbackPopUp.classList.add("modal_show");
  mainPage.classList.add("page_overlay");

  if (storageName) {
    feedbackName.value = storageName;
  }

  if (storageEmail) {
    feedbackEmail.value = storageEmail;
  }

  if (storageName && storageEmail) {
    feedbackText.focus();
  }

  if (storageName && !storageEmail) {
    feedbackEmail.focus();
  }

  if (!storageName && storageEmail) {
    feedbackName.focus();
  }

  if (!storageName && !storageEmail) {
    feedbackName.focus();
  }
});

feedbackClose.addEventListener("click", function (evt) {
  evt.preventDefault()

  feedbackPopUp.classList.remove("modal_show");
  mainPage.classList.remove("page_overlay");
  feedbackPopUp.classList.remove("modal_error");
});

feedbackForm.addEventListener("submit", function (evt) {
  if (!feedbackName.value || !feedbackEmail.value || !feedbackText.value) {
    evt.preventDefault();

    feedbackPopUp.classList.remove("modal_error");
    feedbackPopUp.offsetWidth = feedbackPopUp.offsetWidth;
    feedbackPopUp.classList.add("modal_error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("name", feedbackName.value);
      localStorage.setItem("email", feedbackEmail.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.key === "Esc" || evt.key === "Escape") {
    if (feedbackPopUp.classList.contains("modal_show")) {
      evt.preventDefault();
      feedbackPopUp.classList.remove("modal_show");
      mainPage.classList.remove("page_overlay");
      feedbackPopUp.classList.remove("modal_error");
    }
  }
});

function initMap() {
  const uluru = { lat: 59.968346525238445, lng: 30.31735525475275 };

  const map = new google.maps.Map(document.querySelector(".contacts__map"), {
    center: uluru,
    zoom: 16,
  });

  const marker = new google.maps.Marker({
    position: uluru,
    icon: {
      url: 'data:image/svg+xml;charset=utf-8,'
        + encodeURIComponent(
          '<svg width="80" height="140" fill="none" xmlns="http://www.w3.org/2000/svg">' +
          '<path d="M40.15 7.01c5 0 9.92 1.3 14.26 3.78a28.45 28.45 0 0110.46 10.34 28.14 28.14 0 01.08 28.28 9.42 9.42 0 017.57 6.27 9.23 9.23 0 01-2.26 9.52 9.4 9.4 0 01-9.6 2.25 9.39 9.39 0 01-6.33-7.51c-.35.2-.72.39-1.08.58-.5 3.08-2.1 5.89-4.5 7.91a13.34 13.34 0 01-17.2 0c-2.4-2.02-4-4.83-4.5-7.91-.37-.2-.73-.38-1.08-.58a9.27 9.27 0 01-6.33 7.52 9.46 9.46 0 01-9.61-2.26 9.28 9.28 0 01-2.25-9.54 9.3 9.3 0 017.6-6.25 28.14 28.14 0 01.07-28.27c2.5-4.3 6.11-7.86 10.44-10.34a28.76 28.76 0 0114.26-3.79zm0-7.01C34.54 0 29 1.3 24 3.82 19 6.34 14.67 10 11.36 14.48a35.17 35.17 0 00-5.17 31.6 16.18 16.18 0 00-3.05 22.31 16.54 16.54 0 0022.34 4.01 20.43 20.43 0 0014.7 6.2 20.58 20.58 0 0014.72-6.2 16.54 16.54 0 0021.98-4.28 16.18 16.18 0 00-2.77-22.04 35.04 35.04 0 00-5.17-31.6A35.55 35.55 0 0056.29 3.82 35.88 35.88 0 0040.15 0z" fill="#E84D37"/>' +
          '<path d="M63.61 78.94c-2.78 0-5.53-.58-8.08-1.68-.37.3-.76.57-1.16.85l.54.52-3.94 3.9-1.69-1.67c-.7.27-1.4.51-2.13.72l2.38 2.37-3.93 3.9-3.96-3.9 1.57-1.55a23.62 23.62 0 01-5.97.01l1.55 1.54-3.94 3.9-3.94-3.9 2.37-2.35a22 22 0 01-2.12-.72l-1.7 1.66-3.98-3.91.5-.5c-.42-.28-.82-.56-1.22-.87a20.45 20.45 0 01-8.08 1.68h-.6c-.08.55-.03 1.1.16 1.62l20.58 57.22.09.2c.02.07.06.13.1.2l.23.4.09.13c.12.16.26.32.41.46l.1.08.4.3.18.1c.14.08.29.14.43.2h.12l.4.1h.16c.38.07.76.07 1.13 0h.17l.4-.1h.17c.15-.06.29-.13.42-.2l.19-.11c.14-.08.27-.18.4-.3l.1-.07c.15-.14.29-.3.42-.46l.08-.13c.09-.13.17-.26.24-.4l.18-.4 20.63-57.25c.19-.52.24-1.07.16-1.62-.2 0-.35.03-.6.03zM49.47 94.6l-3.94 3.9-3.89-3.9 3.93-3.91 3.9 3.9zM36.25 99.9l3.94-3.9 3.94 3.9-3.94 3.91-3.94-3.9zm7.88 10.65l-3.94 3.9-3.94-3.9 3.94-3.9 3.94 3.9zm-3.94-25.19l3.94 3.9-3.94 3.88-3.94-3.9 3.94-3.88zm-1.43 9.23l-3.94 3.9-3.94-3.9 3.94-3.91 3.94 3.9zM23.7 80.43l.39-.38 3.94 3.9-2.26 2.2-2.07-5.72zm2.79 7.84l2.93-2.9 3.93 3.9-3.89 3.88-1.8-1.79-1.17-3.08zm2.86 7.89l.11-.11 3.93 3.9-1.97 2-2.07-5.8zm4.21 11.77l-1.43-4 2.65-2.63 3.94 3.9-3.9 3.98-1.26-1.25zm3.47 9.63l-1.9-5.23 3.6 3.55-1.7 1.68zm3.08 8.58l-2.34-6.5 2.38-2.35 2.31 2.3-2.35 6.55zm3.1-8.64l-1.57-1.62 3.45-3.42-1.87 5.04zm3.48-9.44l-1.14 1.12-3.9-3.95 3.92-3.9 2.6 2.57-1.48 4.16zm2.25-6.24l-1.91-1.9L50.97 96v.05l-2.03 5.76zm3.7-10.31l-1.71 1.64-3.94-3.9 3.94-3.91 2.84 2.87-1.13 3.3zm1.9-5.37l-2.19-2.18 3.94-3.9.32.31-2.07 5.77z" fill="#E84D37"/>' +
          '</svg>'),
      size: new google.maps.Size(80, 140),
    },
    map: map,
  });
}
