let div = document.querySelector("#normal-buttons");
let menuContainer = document.querySelector(".collapse-toolbar");
let x = document.querySelector("#tool-bar");
let exit = document.createElement('img');
let footerDiv = document.createElement('div');
let footerHr = document.createElement('hr');

div.addEventListener("click", openMenu);

function openMenu() {
  menuContainer.classList.remove("collapse-toolbar");
  menuContainer.classList.add("menu-list");
  x.classList.add("hide-top");

  exit.src = "./images/exit.png";
  exit.classList.add('exit-img');

  footerDiv.classList.add('last-div');
  footerHr.classList.add('footer-hr');
  footerDiv.append(footerHr);
  

  menuContainer.prepend(exit);
  menuContainer.append(footerDiv);
}

exit.addEventListener("click", closeMenu);

function closeMenu() {
  x.classList.remove("hide-top");
  menuContainer.classList.add("collapse-toolbar");
  menuContainer.classList.remove("menu-list");

  footerDiv.removeChild(footerHr);
  menuContainer.removeChild(footerDiv);
}
