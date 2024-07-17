import authModule from "./auth.js";

const TOWNHALL = "TownHall";
const ARENA = "Arena";
const AUCTIONHOUSE = "AuctionHouse";
const DUNGEONS = "Dungeons";
const RAIDS = "Raids";
const EXPEDITIONS = "Expeditions";

function goTo(buildingName) {
  authModule.fullAuthentication();

  switch (buildingName) {
    case TOWNHALL:
      return;
    case ARENA:
      location.replace("./arenaLobby.html");
      return;
    case AUCTIONHOUSE:
      return;
    case DUNGEONS:
      return;
    case RAIDS:
      return;
    case EXPEDITIONS:
      return;
    default:
      throw Error(`Invalid building name: ${buildingName}!`);
  }
}

export default {
  goTo,
};
