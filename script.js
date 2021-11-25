/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */

/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 200; // x-positie van speler
var spelerY = 200; // y-positie van speler

var vijand1X = 400; // x-positie van vijand
var vijand1Y = 100; // y-positie van vijand

var vijand2X = 250; 
var vijand2Y = 100;

var vijand3X = 100;
var vijand3Y = 100;

var punten = 0;
var HP = 100; // hp voor speler
/* ********************************************* */
/* functies die je gebruikt in je game           */
/* ********************************************* */

/**
 * Updatet globale variabelen met posities van speler, vijanden en kogels
 */
var beweegAlles = function () {
  // vijand
vijand1Y=vijand1Y+5;

if (vijand1Y > 720) {
  vijand1Y = 0;
}

  // kogel

  // speler
  if (keyIsDown(37)) {

    spelerX = spelerX - 5;

  }

  if (keyIsDown(38)) {
    spelerY = spelerY - 5;

  }

  if (keyIsDown(39)) {
    spelerX = spelerX + 5;
  }

  if (keyIsDown(40)) {

    spelerY = spelerY + 5;

  }

  if (spelerX < 0) {
    spelerX = 0;
  }

  if (spelerX > 1280) {
    spelerX = 1280;
  }

  if (spelerY < 0) {
    spelerY = 0;
  }

  if (spelerY > 720) {
    spelerY = 720;
  }
};

/**
 * Checkt botsingen
 * Verwijdert neergeschoten vijanden
 * Updatet globale variabelen punten en health
 */
var verwerkBotsing = function () {
  // botsing speler tegen vijand
if ( (spelerX-vijand1X) > -50 &&
( spelerX-vijand1X) < 50 &&
(spelerY-vijand1Y) > -50 &&
(spelerY-vijand1Y)< 50
) {
  console.log('HP')
  HP = HP - 1
};
  // botsing kogel tegen vijand
 punten= punten + 0.2;
};


/**
 * Tekent spelscherm
 */
var tekenAlles = function () {
  // achtergrond
  fill("gray")
  rect(0, 0, 1280, 720);
  // inforegel
  fill ("green");
  textSize(32);
  text('HP: ' +HP , 50,70);
  text('POINTS: '  +floor(punten ), 50, 40);
 
  // vijand
  fill("white")
  ellipse(vijand1X, vijand1Y, 50, 50)
  // kogel

  // speler
  fill("black");
  ellipse(spelerX, spelerY, 50, 50);
  fill("white");
  ellipse(spelerX, spelerY, 20, 20);
  



  // punten en health

};

/**
 * return true als het gameover is
 * anders return false
 */



/* ********************************************* */
/* setup() en draw() functies / hoofdprogramma   */
/* ********************************************* */

/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('purple');
}

/**
 * draw
 * de code in deze functie wordt 50 keer per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  if (spelStatus === SPELEN) {
    beweegAlles();
    verwerkBotsing();
    tekenAlles();
    if (HP<= 0) {
      spelStatus = GAMEOVER;
    }
  }
  if (spelStatus === GAMEOVER) {
    // teken game-over scherm
  textSize (32);
  text("je bent dood!!", 100, 500);
  }
}




