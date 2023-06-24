// import { body } from "msw/lib/types/context";
import "./less/index.less";

const header = document.querySelector(".main-navigation");
const funBusLogo = document.querySelector(".logo-heading");
const navLinks = document.querySelectorAll(".nav-link");
const images = document.querySelectorAll("img");
const body = document.querySelector("body");
const middleHeadings = document.querySelectorAll("h2");
const bottomHeadings = document.querySelectorAll("h4");
const paragraphs = document.querySelectorAll("div p");

let isDarkMode = false;
const dMState = {
  d: false,
  m: false,
};

function checkDMState() {
  if (dMState.d && dMState.m) {
    darkMode();
  }
}

document.addEventListener("keydown", (e) => {
  console.log(e);

  if (e.key === "d") {
    dMState.d = true;
    checkDMState();
  } else if (e.key === "m") {
    dMState.m = true;
    checkDMState();
  }
});

document.addEventListener("keyup", (e) => {
  console.log(e);

  if (e.key === "d") {
    dMState.d = false;
    checkDMState();
  } else if (e.key === "m") {
    dMState.m = false;
    checkDMState();
  }
});

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
    header.style.backgroundColor = "#282828";
    body.style.backgroundColor = "#282828";

    funBusLogo.style.color = "white";

    navLinks.forEach((link) => {
      link.style.color = "white";
    });

    middleHeadings.forEach((midHead) => {
      midHead.style.color = "white";
    });

    bottomHeadings.forEach((bottomHead) => {
      bottomHead.style.color = "white";
    });

    paragraphs.forEach((p) => {
      p.style.color = "white";
    });

    images.forEach((img) => {
      img.addEventListener("mouseover", (e) => {
        e.target.style.border = "3px dotted white";
      });

      img.addEventListener("mouseout", (e) => {
        e.target.style.border = "";
      });
    });
  } else {
    header.style.backgroundColor = "";
    body.style.backgroundColor = "";

    funBusLogo.style.color = "black";

    navLinks.forEach((link) => {
      link.style.color = "black";
    });

    middleHeadings.forEach((midHead) => {
      midHead.style.color = "black";
    });

    bottomHeadings.forEach((bottomHead) => {
      bottomHead.style.color = "black";
    });

    paragraphs.forEach((p) => {
      p.style.color = "black";
    });

    images.forEach((img) => {
      img.addEventListener("mouseover", (e) => {
        e.target.style.border = "3px dotted black";
      });

      img.addEventListener("mouseout", (e) => {
        e.target.style.border = "";
      });
    });
  }
}

let isRainbow = false;

function rainbowText(e) {
  e.stopPropagation();
  isRainbow = !isRainbow;
  if (isRainbow === true) {
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
  } else {
    funBusLogo.style.color = "black";
  }
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
