let div = document.querySelector("#normal-buttons");
let menuContainer = document.querySelector(".collapse-toolbar");
let x = document.querySelector("#tool-bar");
// let inDiv = document.querySelectorAll(".msg");

div.addEventListener("click", openMenu);

function openMenu() {
  menuContainer.classList.remove("collapse-toolbar");
  menuContainer.classList.add("menu-list");
  x.classList.add("hide-top");
  // inDiv.forEach((element) => {
  //   element.classList.add("ms");
  // });
}
