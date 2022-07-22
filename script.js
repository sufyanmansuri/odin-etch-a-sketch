document.addEventListener("DOMContentLoaded", drawSketchPad(16), false);
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

function drawPixel(e) {
  e.target.style.backgroundColor = "black";
}

function changeGrid() {
  let userInput = prompt("Enter a grid size");
  while(userInput > 100){
    userInput = prompt("Enter a grid size (Limit: 100)");
  }
  drawSketchPad(userInput);
}
