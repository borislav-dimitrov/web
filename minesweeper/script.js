Start();

function Start(rows = 9, cols = 9) {
  let mainContainer = document.createElement("div");
  mainContainer.classList.add("container-main");
  let gameContainer = document.createElement("div");
  gameContainer.classList.add("container-game");
  document.body.appendChild(mainContainer);
  mainContainer.appendChild(gameContainer);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
    }
  }
}
