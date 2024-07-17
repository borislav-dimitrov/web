const REDIRECTMSG = "redirectMessage";

function createMsg(name, value) {
  localStorage.setItem(name, value);
}

function delMsg(name) {
  localStorage.removeItem(name);
}

function getMsg(name) {
  return localStorage.getItem(name);
}

export default {
  REDIRECTMSG,
  createMsg,
  delMsg,
  getMsg,
};
