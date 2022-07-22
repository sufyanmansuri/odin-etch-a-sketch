document.addEventListener("DOMContentLoaded", drawSketchPad(16), false);
let rainbow = false;
let pass = 0;
function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}
function drawSketchPad(gridSize) {
  const pad = document.querySelector(".sketch");
  if (document.body.contains(document.querySelector(".box"))) {
    removeAllChildNodes(pad);
  }
  for (let i = gridSize; i > 0; i--) {
    const row = document.createElement("div");
    row.classList.add("row");
    for (let j = gridSize; j > 0; j--) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.height = `${500 / gridSize}px`;
      box.style.width = `${500 / gridSize}px`;
      row.append(box);
    }
    pad.append(row);
  }
  addMouseOverEventListener();
  const copyright = document.querySelector(".copyright");
  copyright.textContent = `Copyright \u00A9 ${new Date().getFullYear()} sufyanmansuri`;
}
function addMouseOverEventListener() {
  window.boxes = document.querySelectorAll(".box");
  window.boxes.forEach((box) => {
    box.addEventListener("mouseover", drawPixel);
  });
}
function getRainbowColor() {
  const randNumber = Math.floor(Math.random() * 7) + 1;
  if (pass < 10) {
    switch (randNumber) {
      case 1:
        pass++;
        return "red";
      case 2:
        pass++;
        return "orange";
      case 3:
        pass++;
        return "yellow";
      case 4:
        pass++;
        return "green";
      case 5:
        pass++;
        return "blue";
      case 6:
        pass++;
        return "indigo";
      case 7:
        pass++;
        return "violet";
      default:
        return "black";
    }
  }else{
    pass =0;
    return "black";
  }
}

function drawPixel(e) {
  if (rainbow == false) {
    e.target.style.backgroundColor = "black";
  } else {
    console.log("here");
    let color = getRainbowColor();
    e.target.style.backgroundColor = color;
  }
}

function changeGrid() {
  let userInput = prompt("Enter a grid size");
  while (userInput > 100) {
    userInput = prompt("Enter a grid size (Limit: 100)");
  }
  drawSketchPad(userInput);
}

function clearSketch() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.style.backgroundColor = "";
  });
}

function rainbowPixels() {
  if (rainbow == false) {
    rainbow = true;
    addMouseOverEventListener();
  } else {
    rainbow = false;
  }
}
