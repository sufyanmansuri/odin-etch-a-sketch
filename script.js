document.addEventListener(
  "DOMContentLoaded",
  () => {
    const pad = document.querySelector(".sketch");
    for (let i = 0; i < 16; i++) {
      const row = document.createElement("div");
      row.classList.add("row");
      for (let j = 0; j < 16; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.height = `${500 / 16}px`;
        box.style.width = `${500 / 16}px`;
        row.append(box);
      }
      pad.append(row);
    }
    const copyright = document.querySelector(".copyright");
    copyright.textContent = `Copyright \u00A9 ${new Date().getFullYear()} sufyanmansuri`;
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
  e.target.style.backgroundColor = "black";
}
