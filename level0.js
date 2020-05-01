

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

function speak(message) {
  var msg = new SpeechSynthesisUtterance(message)
  var voices = window.speechSynthesis.getVoices()
  msg.voice = voices[0]
  window.speechSynthesis.speak(msg)
}

speak(' Welcome to our game! It is called Pitching Angry Birds ');
speak(' The premise of the game is that you have a certain number of birds for each level and you have to destroy the enemy pigs that are arranged in different structures on each level '); 
speak(' You will do so by launching the bird from a starting area ');
speak(' You can change the launch angle and power level by using the arrow keys ');
speak(' The up and down arrow keys control the launch angle ');
speak(' Hit the up arrow to increase the angle of launch and hit the down arrow to decrease the angle of launch ');
speak(' Hit the left arrow key to decrease power level and hit the right arrow key to increase power level ');
speak(' Each time you toggle between changing power and changing angle the game will say aloud which one you are changing ');
speak(' There will be a distinct pitch played for each angle and power level ');
speak(' A higher pitch indicates a higher angle or power ');
speak(' Once you have selected the desired angle and power combination press the F key to launch the bird at the pigs ');
speak(' If you did not clear all the pigs, a message will be played and you can retry the level by pressing the R key or navigating to the retry level button using the screenreader ');
speak(' If you need a hint, press the H key ');
speak(' If you want to know the solution for that level press the S key ');
speak(' If you did clear all the pigs, a message will be played and you can go to the next level by hitting the Enter key or navigating to the next level button using the screenreader ');
speak(' Bonus points are given if you clear the level using the fewest number of birds possible ');
speak(' There are 6 levels in total ');
speak(' Good luck and have fun ');
speak(' To start the game hit the Enter key ');
speak(' To hear the instructions again hit the R key ');


var button = document.createElement("button");
button.innerHTML = "Replay Instructions";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function () {
  location.reload();
});

var button1 = document.createElement("button");
button1.innerHTML = "Start Game";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button1);

button1.addEventListener ("click", function() {
          location.replace('index1.html')
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
        location.replace('index1.html');
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