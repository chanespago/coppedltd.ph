const showShopMenu = (toggleId, navId) => {
    const toggleShop = document.getElementById(toggleId),
        navShop = document.getElementById(navId)

    if (toggleId && navId) {
      toggleShop.addEventListener('click', () => { 
        navShop.classList.toggle('show')
        })
    }
}

showShopMenu('shop-nav-toggle', 'shop-nav-menu');

const navShopLink = document.querySelectorAll('.nav__link'),
  navShopMenu = document.getElementById('shop-nav-menu')

function linkAction() {
  navShopMenu.classList.remove('show');
}
navShopLink.forEach(n => n.addEventListener('click', linkAction));