import { body } from "msw/lib/types/context";
import "./less/index.less";

const header = document.querySelector(".main-navigation");
const funBusLogo = document.querySelector(".logo-heading");
const navLinks = document.querySelectorAll(".nav-link");
const images = document.querySelectorAll("img");
const body1 = document.querySelector("body");

let isDarkMode = false;

header.addEventListener("dblclick", darkMode);

funBusLogo.addEventListener("dblclick", rainbowText);

navLinks[0].href = "https://developer.mozilla.org/en-US/docs/Web/Events";

navLinks[0].addEventListener("click", (e) => {
  e.preventDefault();
});

navLinks.forEach((link) => {
  link.addEventListener("mouseover", underline);
  link.addEventListener("mouseout", removeUnderline);
});

images.forEach((img) => {
  img.addEventListener("mouseover", (e) => {
    e.target.style.border = "3px dotted black";
  });

  img.addEventListener("mouseout", (e) => {
    e.target.style.border = "";
  });
});

function darkMode() {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    this.style.backgroundColor = "#282828";
    body1.style.backgroundColor = "#282828";

    navLinks.forEach((link) => {
      link.style.color = "white";
    });
  } else {
    this.style.backgroundColor = "";

    navLinks.forEach((link) => {
      link.style.color = "black";
    });
  }
}

function rainbowText(e) {
  e.stopPropagation();
  const funBusText = Array.from(funBusLogo.textContent.trim());
  let modifiedText = "";

  modifiedText += wrapInSpan(funBusText[0], "red");
  modifiedText += wrapInSpan(funBusText[1], "orange");
  modifiedText += wrapInSpan(funBusText[2], "yellow");
  modifiedText += funBusText[3];
  modifiedText += wrapInSpan(funBusText[4], "green");
  modifiedText += wrapInSpan(funBusText[5], "blue");
  modifiedText += wrapInSpan(funBusText[6], "indigo");

  funBusLogo.innerHTML = modifiedText;
}

function wrapInSpan(text, color) {
  return `<span style="color: ${color}">${text}</span>`;
}

function underline(e) {
  e.target.style.textDecoration = "underline";
  e.target.style.textDecoration = "bold";
  e.target.style.fontSize = "2.5rem";
  e.target.style.color = "yellow";
  e.target.style.backgroundColor = "black";
  e.target.style.padding = "2px";
}

function removeUnderline(e) {
  e.target.style.textDecoration = "none";
  e.target.style.textDecoration = "none";
  e.target.style.fontSize = "1.6rem";

  if (isDarkMode) {
    e.target.style.color = "white";
  } else {
    e.target.style.color = "black";
  }

  e.target.style.backgroundColor = "transparent";
}
