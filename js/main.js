let About = document.querySelector("#About");
let nav = document.querySelector("#nav");
let progress = document.querySelectorAll(".progress-bar");
window.addEventListener("scroll", function () {
  if (scrollY > About.offsetHeight + 20) {
    nav.classList.add("shownav");
    progress.forEach((item) => {
      item.style.width = `${item.dataset.width}%`;
    });
  } else {
    nav.classList.remove("shownav");
    progress.forEach((item) => {
      item.style.width = `0%`;
    });
  }
});

let count = document.querySelector("#count");
let card = document.querySelectorAll("#count h3");
let started = false;
window.addEventListener("scroll", function () {
  if (
    scrollY > count.offsetTop * 0.9 &&
    scrollY < count.offsetTop + count.offsetHeight * 0.9 &&
    !started
  ) {
    started = true;
    card.forEach((item) => {
      counts(item);
    });
  }
});
function counts(el) {
  let target = el.dataset.target;
  let count = setInterval(() => {
    el.innerText++;
    if (el.innerText == target) {
      clearInterval(count);
    }
  }, 2000 / target);
}

let sections = document.querySelectorAll("section");
let navItem = document.querySelectorAll(".nav-item");
window.addEventListener("scroll", function () {
  sections.forEach((section) => {
    if (
      scrollY > section.offsetTop * 0.9 &&
      scrollY < section.offsetTop + section.offsetHeight * 0.9
    ) {
      let thisSection = section.id;
      navItem.forEach((item) => {
        item.classList.remove("active");
        document
          .querySelector(`[data-dir='${thisSection}']`)
          .classList.add("active");
      });
    }
  });
});

let allLinks = document.querySelectorAll(".allLinks span");
let allCard = document.querySelectorAll("#Works .allCard");
allLinks.forEach((link) => {
  link.addEventListener("click", function () {
    allLinks.forEach((el) => {
      el.classList.remove("active");
      this.classList.add("active");
    });
    let thisclass = link.innerHTML;
    allCard.forEach((card) => {
      if (card.classList.contains(thisclass)) {
        card.style.position = "relative";
        card.style.transform = "translateX(0)";
      } else {
        card.style.position = "absolute";
        card.style.transform = "translateX(-1000px)";
      }
    });
  });
});

// validation for form
(function () {
  "use strict";
  var forms = document.querySelectorAll(".needs-validation");
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          console.log("notvalidation");
          event.preventDefault();
          event.stopPropagation();
        } else {
          console.log("Done validation");
        }
        form.classList.add("was-validated");
      },
      false
    );
  });
})();
// additional validation
let submit = document.querySelector("#submit");
let form = document.querySelector("#form");
let Name = document.querySelector("#Name");
let Email = document.querySelector("#Email");
let textarea = document.querySelector("#textarea");
form.onkeyup = function () {
  if (
    Name.value.trim() == "" ||
    Email.value.trim() == "" ||
    textarea.value.trim() == ""
  ) {
    submit.style.cursor = "not-allowed";
  } else {
    submit.style.cursor = "initial";
  }
};

// btn toUP
let toUp = document.querySelector(".toUp");
window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    toUp.style.opacity = "1";
    toUp.removeAttribute("disabled");
  } else {
    toUp.style.opacity = "0";
    toUp.setAttribute("disabled", true);
  }
});
toUp.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

window.addEventListener("load", function () {
  let body = document.body;
  let loaderX = document.querySelector(".loaderX");
  let Allloader = document.querySelector(".Allloader");
  let Allloader1 = document.querySelector(".Allloader1");
  let Allloader2 = document.querySelector(".Allloader2");
  body.style.maxHeight = "auto";
  body.style.overflow = "auto";
  loaderX.style.opacity = "0";
  Allloader1.style.transform = "translateY(-100%)";
  Allloader2.style.transform = "translateY(100%)";
  setTimeout(() => {
    Allloader.style.zIndex = "-1";
  }, 1500);
});
