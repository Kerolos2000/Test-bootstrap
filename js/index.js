// additional validation
let submit = document.querySelector("#submit");
let form = document.querySelector("#form");
let Name = document.querySelector("#Name");
let Email = document.querySelector("#Email");
let Subject = document.querySelector("#Subject");
let textarea = document.querySelector("#textarea");
form.onkeyup = function () {
  if (
    Name.value.trim() == "" ||
    Email.value.trim() == "" ||
    Subject.value.trim() == "" ||
    textarea.value.trim() == ""
  ) {
    submit.style.cursor = "not-allowed";
  } else {
    submit.style.cursor = "initial";
  }
};

let sections = document.querySelectorAll("section");
let navItem = document.querySelectorAll(".nav-item");
let progressBar = document.querySelectorAll(".progress-bar");
let started = false;
window.onscroll = function () {
  let scrollTop = document.documentElement.scrollTop;
  sections.forEach((section) => {
    if (
      scrollTop > section.offsetTop * 0.9 &&
      scrollTop < section.offsetTop + section.offsetHeight * 0.9
    ) {
      let thisSection = section.id;
      navItem.forEach(() => {
        removeClassActive();
        document
          .querySelector(`[data-dir='${thisSection}']`)
          .classList.add("active");
      });
    }
    /////////////////////////////////////////
    let About = document.querySelector("#About");
    if (window.scrollY >= About.offsetTop - 250) {
      progressBar.forEach((item) => {
        let value = item.dataset.width;
        item.style.width = `${value}%`;
      });
    } else {
      progressBar.forEach((item) => {
        item.style.width = "0%";
      });
    }
    /////////////////////////////////////////
    let count = document.querySelector("#count");
    let card = document.querySelectorAll("#count .card h3");
    if (window.scrollY >= count.offsetTop - 150 && !started) {
      started = true;
      card.forEach((item) => {
        counts(item);
      });
    }
  });
};

function counts(el) {
  let target = el.dataset.target;
  let count = setInterval(() => {
    el.innerText++;
    if (el.innerText == target) {
      clearInterval(count);
    }
  }, 2000 / target);
}

function removeClassActive() {
  navItem.forEach((item) => {
    item.classList.remove("active");
  });
}
