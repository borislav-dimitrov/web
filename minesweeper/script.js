Start();

function Start() {
  let mainContainer = document.createElement("div");
  mainContainer.classList.add("container-main");
  let gameContainer = document.createElement("div");
  gameContainer.classList.add("container-game");
  document.body.appendChild(mainContainer);
  mainContainer.appendChild(gameContainer);
}
