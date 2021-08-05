// Toggle Navigation Bar on scroll
window.onscroll = () => {
  const navIndex = document.getElementById('index-header');
  const navShop = document.getElementById('shop-header');
  const navCart = document.getElementById('cart-header');

  if (this.scrollY >= 200) {
    navIndex.classList.add('scroll-header');
    navShop.classList.add('scroll-header');
    navCart.classList.add('scroll-header');
  } else {
    navIndex.classList.remove('scroll-header');
    navShop.classList.remove('scroll-header');
    navCart.classList.remove('scroll-header');
  }
}

const sections = document.querySelectorAll('section[id]')

window.addEventListener('scroll', scrollActive)

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight
    const sectionTop = current.offsetTop - 50
      sectionId = current.getAttribute('id')

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
       } else {
          document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
      }
  })
}

// Loader
window.onload = () => {
  const load = document.getElementById('loader-wrapper');
  const indexContent = document.getElementById('index-content');

  setTimeout(function() {
      load.style.display = "none";
      indexContent.style.display = "block";
    }, 2000);

}

// Toggle between Navs
function openTab(tabName) {
  var i;
  var x = document.getElementsByClassName("tab__nav");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(tabName).style.display = "block";  
}

// Modal
// var modal = document.getElementById("cart-content");
// var btnIndex = document.getElementById("index-btn_bag");
// var btnShop = document.getElementById("shop-btn_bag");
// var span = document.getElementsByClassName("close")[0];

// btnIndex.onclick = function() {
//   modal.style.display = "block";
// }

// btnShop.onclick = function() {
//   modal.style.display = "block";
// }

// span.onclick = function() {
//   modal.style.display = "none";
// }

// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }