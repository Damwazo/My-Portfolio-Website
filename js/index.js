const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".nav__link");

navToggle.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.body.classList.remove("nav-open");
  });
});

let iI = 2;
let iJ = 10;

for (; iI < iJ; iI++, iJ--) {
  let str1 = iI;
  let str2 = iJ;
}
console.log(iI, iJ);

console.log(12 % 2);

var date = new Date();
console.log(date);

console.log(0 === "");
