function titleRedirect () {
  window.location.href = "index.html";
}

function growGame() {
  var varOne = document.getElementById("game");
  var height = varOne.clientHeight;
  var width = varOne.clientWidth;
  document.getElementById("game").style.width = width * 1.1 + "px";
  document.getElementById("game").style.height = height * 1.1 + "px";
}

function shrinkGame() {
  var varOne = document.getElementById("game");
  var height = varOne.clientHeight;
  var width = varOne.clientWidth;
  document.getElementById("game").style.width = width * 0.9 + "px";
  document.getElementById("game").style.height = height * 0.9 + "px";
}
