function toggleF() {
  let gigaDiv=document.getElementsByClassName("gigaDiv")[0];
  gigaDiv.classList.toggle("gigaDivNocny")

  let div = document.getElementsByClassName("mainDiv")[0];
  let menu = document.getElementsByClassName("side-menu")[0];
  let button = document.getElementById("dark-theme-btn");
  let zwijaneMenu = document.getElementsByClassName("menu")[0];
  let container = document.getElementsByClassName("container")[0];

  zwijaneMenu.classList.toggle("cienie");
  container.classList.toggle("cienie");
  button.classList.toggle("cienie");
  div.classList.toggle("cienie")
  menu.classList.toggle("cienie")

}



