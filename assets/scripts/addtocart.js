const showCartMenu = (toggleId, navId) => {
  const toggleCart = document.getElementById(toggleId),
      navCart = document.getElementById(navId)

  if (toggleId && navId) {
    toggleCart.addEventListener('click', () => { 
      navCart.classList.toggle('show')
      });
  }
}

showCartMenu('cart-nav-toggle', 'cart-nav-menu')

const navCartLink = document.querySelectorAll('.nav__link'),
navCartMenu = document.getElementById('cart-nav-menu');

function linkAction() {
navCartMenu.classList.remove('show')
};
navCartLink.forEach(n => n.addEventListener('click', linkAction));
