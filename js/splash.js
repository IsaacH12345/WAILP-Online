// Hey, what are you doing in here?
function changeSub(num) {
  document.getElementById("subtitle").innerText = say[num];
}

var say = [];
say[0] = "Woah, a splash screen!";
say[1] = "LCWBPL";
say[2] = "Hello world!";
say[3] = "Fineas and Pherb";
say[4] = "Inside Job streaming on Netflix.";
say[5] = "Wooden Ducks";
say[6] = "1. d4 d5 2. c4 dxc4";
say[7] = "The smartest people are able to rationalized the stupidest decisions.";
say[8] = "dQw4w9WgXcQ";
say[9] = "Emily Smith";
say[10] = "I promise I didn't take someone else's code and tweaked it.";
say[11] = "More tea";
say[12] = "Push and train.llsp";
say[13] = "5 move.ev3";
say[14] = "Cluster mailboxes";
say[15] = "Get back to work. The work isn't going to complete itself!";
say[16] = "Splash screens are a lot of work.";
say[17] = "Heinz Beans";
say[18] = "Cinnamon Altoids";
say[19] = "Why do the smartest people end up working for the worst companies?";
say[20] = "I'm looking through my room and files to come up with these.";
say[21] = "Acetone";
say[22] = "Teasmade";
say[23] = "Vermont";
say[24] = "Kansas";
say[25] = "60 inch clamps";

var howmany = say.length;
var bRand = 0;
bRand = Math.random();
bRand = Math.floor(bRand * howmany);
sayWhat = say[bRand];
document.getElementById("subtitle").innerText = sayWhat;

function changeSplash(num) {
  document.getElementById("subtitle").innerText = say[num];
  var ret = "Set current splash to splash " + num + ", " + say[num];
  return ret;
}