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
      feedbackPopUp.classList.remove("modal_error");
    }
  }
});

