const div = document.querySelector('#normal-buttons');
const menuContainer = document.querySelector('.collapse-toolbar');
const x = document.querySelector('#tool-bar');
const exit = document.createElement('img');
const footerDiv = document.createElement('div');
const footerHr = document.createElement('hr');
const links = menuContainer.querySelectorAll('a');

function openMenu() {
  menuContainer.classList.remove('collapse-toolbar');
  menuContainer.classList.add('menu-list');
  x.classList.add('hide-top');

  exit.src = './images/exit.png';
  exit.classList.add('exit-img');

  footerDiv.classList.add('last-div');
  footerHr.classList.add('footer-hr');
  footerDiv.append(footerHr);
  menuContainer.prepend(exit);
  menuContainer.append(footerDiv);
}

div.addEventListener('click', openMenu);
function closeMenu() {
  x.classList.remove('hide-top');
  menuContainer.classList.add('collapse-toolbar');
  menuContainer.classList.remove('menu-list');

  footerDiv.removeChild(footerHr);
  menuContainer.removeChild(footerDiv);
}

exit.addEventListener('click', closeMenu);

links.forEach((element) => {
  element.addEventListener('click', closeMenu);
});