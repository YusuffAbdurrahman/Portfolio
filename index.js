var navBar = document.getElementById('navbar');
window.onscroll = function () {
  if(window.scrollY > 22) {
    navBar.classList.add('scrolled');
  }else {
    navBar.classList.remove('scrolled')
  }
};


bar = document.querySelector('#bar')
bar.onclick = function () {
  navBar = document.querySelector('.navbar-list');
  navBar.classList.toggle('active');
}

const hamburger = document.querySelector('#bar');
document.addEventListener('click', function (e) {
  if (!hamburger.contains(e.target) && !navBar.contains(e.target)) {
  navBar.classList.remove('active')
  };
});