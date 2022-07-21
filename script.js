document.addEventListener(
  "DOMContentLoaded",
  () => {
    const pad = document.querySelector(".pad");
    for (let i = 0; i < 16; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let j = 0; j < 16; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        row.append(box);
      }
      pad.append(row);
    }
  },
  false
);

function afterPageLoad() {
  window.boxes = document.querySelectorAll(".box");
  window.boxes.forEach((box) => {
    box.addEventListener("mouseover", drawPixel);
  });
}

function drawPixel(e) {
  e.target.style.backgroundColor = "black"
}
