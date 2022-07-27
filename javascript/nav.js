const navIcon = document.querySelector('#nav-icon');
const nav = document.querySelector('.nav-mob');
const navs = document.querySelectorAll('.nav-mob > ul > li');

navIcon.addEventListener('click', () => {
  navIcon.classList.toggle('nav-icon');
  nav.classList.toggle('out-hide');
});

navs.forEach((ele) => {
  ele.addEventListener('click', () => {
    navIcon.classList.toggle('nav-icon');
    nav.classList.toggle('out-hide');
  });
});
