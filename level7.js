//add congrats message, say total score, and ask to play again if they want to. 
//add links in level 6 to level 7. get score from previous level
//add links to restart game (put link back to index.html)


enemy_count = 0;
var canvasElem = document.getElementById("game");
var world = boxbox.createWorld(canvasElem);
var power = 200;
var angle = 45;
var shot_count = 1;
var angle_freq = 700;
var power_freq = 650;
var score = 0;
score = parseInt(score);
var context = new AudioContext();
var curr_power = false;
var curr_angle = false;
score = getCookie('score');
var original_score = score
var new_score=0;

document.getElementById('score').innerHTML = score;

function speak(message) {
  var msg = new SpeechSynthesisUtterance(message)
  var voices = window.speechSynthesis.getVoices()
  msg.voice = voices[0]
  window.speechSynthesis.speak(msg)
}

speak(' Congratulations ');
speak(' You have beat all six levels of the game '); 
speak(' Your final score is '+original_score +' points ');
speak(' Try the game again to see if you can increase your score ');
speak(' To hear your score again, press the R key or navigate to the Replay Victory Message button using the screenreader ');
speak(' To play the game again, press the Enter key or navigate to the Restart Game button using the screenreader ');
speak(' Thank you for playing ');

var button = document.createElement("button");
button.innerHTML = "Replay Victory Message";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function () {
  document.cookie = "score=" + original_score + '';
  location.reload();
});

var button1 = document.createElement("button");
button1.innerHTML = "Restart Game";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button1);

button1.addEventListener ("click", function() {
    document.cookie = "score=" + new_score + '';
    location.replace('index.html')
});

//create bird
world.createEntity({
  name: "player",
  shape: "circle",
  radius: .5,
  image: "bird.png",
  imageStretchToFit: true,
  density: 20,
  x: 2,
  y: 10,
  onKeyDown: function(e) {
    if (e.keyCode === 82) 
    {
        location.reload();
    }

    if (e.keyCode === 13) 
    {
        location.replace('index.html');
    }
  }
});

var enemy = {
  name: "enemy",
  shape: "circle",
}

world.createEntity(enemy, {
  radius: .5,
  image: "enemy.png",
  imageStretchToFit: true,
  density: 4,
  x: 16,
  y: 10,
});

world.createEntity({
  name: "ground",
  shape: "square",
  type: "static",
  color: "rgb(0,100,0)",
  width: 20,
  height: 1,
  y: 12
});

function getCookie(name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
  }