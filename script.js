var r = document.querySelector(":root");

function dotask() {
  this.parentElement.classList.toggle("complete");
}

function add() {
  const input = document.querySelector(".add");
  const value = input.value.trim();
  if (!value) return;
  const newtodo = document.createElement("div");
  const newbtn = document.createElement("button");
  const newtodotextnode = document.createTextNode(value);
  newtodo.appendChild(newbtn);
  newtodo.appendChild(newtodotextnode);
  newtodo.classList.add("todo-element");
  newbtn.classList.add("todo-btn");
  newbtn.onclick = dotask;
  document.querySelector(".todo").appendChild(newtodo);
  input.value = "";
}

function closePopup() {
  document.querySelector(".popup2").className = "nodisp";
  document.querySelector(".hide").className = "settings";
}

function Popup() {
  document.querySelector(".nodisp").className = "popup2";
  document.querySelector(".settings").className = "hide";
}

function whiteTheme() {
  r.style.setProperty("--bg", "#fff");
  r.style.setProperty("--fg", "#000");
  r.style.setProperty("--wr", "#f00");
}
function blackTheme() {
  r.style.setProperty("--bg", "#000");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function blueTheme() {
  r.style.setProperty("--bg", "#023e8a");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function redTheme() {
  r.style.setProperty("--bg", "#8a0202");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#fff");
}
function greenTheme() {
  r.style.setProperty("--bg", "#028a02");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function orangeTheme() {
  r.style.setProperty("--bg", "#ff5c00");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function yellowTheme() {
  r.style.setProperty("--bg", "#fff200");
  r.style.setProperty("--fg", "#000");
  r.style.setProperty("--wr", "#f00");
}
function purpleTheme() {
  r.style.setProperty("--bg", "#55028a");
  r.style.setProperty("--fg", "#fff");
  r.style.setProperty("--wr", "#f00");
}
function latoFont() {
  r.style.setProperty("--fnt", "'Lato', sans-serif");
}
function notoFont() {
  r.style.setProperty("--fnt", "'Noto Serif', serif");
}
function robFont() {
  r.style.setProperty("--fnt", "'Roboto Mono', monospace");
}
function ralFont() {
  r.style.setProperty("--fnt", "'Raleway', sans-serif");
}
function pacFont() {
  r.style.setProperty("--fnt", "'Pacifico', sans-serif");
}
function nabFont() {
  r.style.setProperty("--fnt", "'Nabla', sans-serif");
}
function pirFont() {
  r.style.setProperty("--fnt", "'Pirata One', sans-serif");
}
function aluFont() {
  r.style.setProperty("--fnt", "'Alumni Sans Pinstripe', sans-serif");
}
