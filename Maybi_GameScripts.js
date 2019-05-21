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

var linkList = [
"Maybi_2048.html",
"Maybi_AgeOfDefense3.html",
"Maybi_AgeOfWar.html",
"Maybi_AgeOfWar2.html",
"Maybi_BattlePanic.html",
"Maybi_Bearbarians.html",
"Maybi_BMXMaster.html",
"Maybi_Bloons.html",
"Maybi_Bloons2.html",
"Maybi_BloonsPlayerPack.html",
"Maybi_BloonsPlayerPack2.html",
"Maybi_BloonsPlayerPack3.html",
"Maybi_BloonsPlayerPack4.html",
"Maybi_BloonsPlayerPack5.html",
"Maybi_BTD3.html",
"Maybi_BTD4.html",
"Maybi_BTD5.html",
"Maybi_BombABomb.html",
"Maybi_ClickerHeroes.html",
"Maybi_CrashingTheBeard.html",
"Maybi_Curveball.html",
"Maybi_DanceOfTheRobots.html",
"Maybi_DuckHunt.html",
"Maybi_DuckLife.html",
"Maybi_DuckLife2.html",
"Maybi_DuckLife3.html",
"Maybi_DuckLife4.html",
"Maybi_DummiesNeverFail.html",
"Maybi_EarnToDie.html",
"Maybi_EarnToDie2.html",
"Maybi_EarnToDie2012.html",
"Maybi_EarnToDie2012Part2.html",
"Maybi_ElectricMan.html",
"Maybi_FancyPants.html",
"Maybi_FancyPants2.html",
"Maybi_CrystalTemple.html",
"Maybi_ForestTemple.html",
"Maybi_IceTemple.html",
"Maybi_LightTemple.html",
"Maybi_Flight.html",
"Maybi_Jacksmith.html",
"Maybi_KingdomRush.html",
"Maybi_Pacman.html",
"Maybi_Pacxon.html",
"Maybi_Burgeria.html",
"Maybi_Cupcakeria.html",
"Maybi_Freezeria.html",
"Maybi_HotDoggeria.html",
"Maybi_Pancakeria.html",
"Maybi_Pizzaria.html",
"Maybi_Wingeria.html",
"Maybi_QWOP.html",
"Maybi_RaftWars.html",
"Maybi_RaftWars2.html",
"Maybi_Raze.html",
"Maybi_RedBall4.html",
"Maybi_RedBall4Vol2.html",
"Maybi_RedBall4Vol3.html",
"Maybi_RedBall5.html",
"Maybi_ReturnMan2.html",
"Maybi_Run.html",
"Maybi_Run2.html",
"Maybi_StickWar.html",
"Maybi_StickWar2.html",
"Maybi_SuperMonkey.html",
"Maybi_SushiCat.html",
"Maybi_TankTrouble.html",
"Maybi_Tetris.html"
];

var namesList = [
"2048",
"Age of Defense 3",
"Age of War",
"Age of War 2",
"Battle Panic",
"Bearbarians",
"BMX Master",
"Bloons",
"Bloons 2",
"Bloons Player Pack",
"Bloons Player Pack 2",
"Bloons Player Pack 3",
"Bloons Player Pack 4",
"Bloons Player Pack 5",
"Bloons TD 3",
"Bloons TD 4",
"Bloons TD 5",
"Bomb A Bomb",
"Clicker Heroes",
"Crashing The Beard",
"Curveball",
"Dance of The Robots",
"Duck Hunt",
"Duck Life",
"Duck Life 2",
"Duck Life 3",
"Duck Life 4",
"Dummies Never Fail",
"Earn To Die",
"Earn To Die 2",
"Earn To Die 2012",
"Earn To Die 2012 Part 2",
"Electric Man",
"Fancy Pants",
"Fancy Pants 2",
"FB & WG Crystal Temple",
"FB & WG Forest Temple",
"FB & WG Ice Temple",
"FB & WG Light Temple",
"Flight",
"Jacksmith",
"Kingdom Rush",
"Pacman",
"Pacxon",
"Papa's Burgeria",
"Papa's Cupcakeria",
"Papa's Freezeria",
"Papa's Hot Doggeria",
"Papa's Pancakeria",
"Papa's Pizzaria",
"Papa's Wingeria",
"QWOP",
"Raft Wars",
"Raft Wars 2",
"Raze",
"Red Ball 4",
"Red Ball 4 Vol. 2",
"Red Ball 4 Vol. 3",
"Red Ball 5",
"Return Man 2",
"Run",
"Run 2",
"Stick War",
"Stick War 2",
"Super Monkey",
"Sushi Cat",
"Tank Trouble",
"Tetris"
];

function fillSidebar() {
  for (var i = 0; i < linkList.length; i++) {
    var gameLink = document.createElement("a");
    var br = document.createElement("br");
    var sidebarVar = document.getElementById("sidebarNav");
    gameLink.innerHTML = namesList[i];
    gameLink.href = linkList[i];
    sidebarVar.appendChild(gameLink);
    sidebarVar.appendChild(br);
  }
}
