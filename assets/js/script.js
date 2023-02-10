let navLinkEle = document
  .querySelector(".bd-navbar-nav")
  .querySelectorAll(".nav-link");
let subNavLinkEle = document.querySelectorAll(".sub-nav-link");
let dropdownItem

navLinkEle.forEach(function (item) {
  item.addEventListener("click", function () {
    navLinkEle.forEach(function (e) {
      if (e.classList.contains("active")) e.classList.remove("active");
    });
    if (!item.classList.contains("active")) item.classList.add("active");
  });
});

subNavLinkEle.forEach(function (item) {
  item.addEventListener("click", function () {
    subNavLinkEle.forEach(function (e) {
      if (e.classList.contains("active")) e.classList.remove("active");
    });
    if (!item.classList.contains("active")) item.classList.add("active");
  });
});
