function drawSquares() {
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
}
