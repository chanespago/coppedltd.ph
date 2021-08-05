const showIndexMenu = (toggleId, navId) => {
    const toggleIndex = document.getElementById(toggleId),
        navIndex = document.getElementById(navId)

    if (toggleId && navId) {
      toggleIndex.addEventListener('click', () => { 
        navIndex.classList.toggle('show')
        })
    }
}

showIndexMenu('index-nav-toggle', 'index-nav-menu');

const navIndexLink = document.querySelectorAll('.nav__link'),
  navIndexMenu = document.getElementById('index-nav-menu')

function linkAction() {
  navIndexMenu.classList.remove('show');
}
navIndexLink.forEach(n => n.addEventListener('click', linkAction));