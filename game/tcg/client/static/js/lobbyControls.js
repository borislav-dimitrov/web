const LobbyTypes = {
  Arena1v1: "1v1",
  Arena2v2: "2v2",
  Arena3v3: "3v3",
  Arena4v4: "4v4",
};

function createLobby(lobbyType) {
  switch (lobbyType) {
    case LobbyTypes.Arena1v1:
      console.log(1);
      return;
    default:
      throw Error(`Invalid lobby type: ${lobbyType}!`);
  }
}

function showArenaCreateLobbyOverlay() {
  const overlayDiv = document.getElementById("lobbyOverlay");
  if (overlayDiv.style.display === "none" || overlayDiv.style.display == "") {
    overlayDiv.style.display = "block";
  }
}

function hideArenaCreateLobbyOverlay() {
  const overlayDiv = document.getElementById("lobbyOverlay");
  if (overlayDiv.style.display !== "none" || overlayDiv.style.display !== "") {
    overlayDiv.style.display = "none";
  }
}

export default {
  createLobby,
  showArenaCreateLobbyOverlay,
  hideArenaCreateLobbyOverlay,
};
