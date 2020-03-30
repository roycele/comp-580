enemy_count = 2;
var canvasElem = document.getElementById("game");
var world = boxbox.createWorld(canvasElem);
var power = 200;
var angle = 45;
var shot_count = 1;
var angle_freq = 700;
var power_freq = 650;
var context = new AudioContext();
var curr_power = false;
var curr_angle = false;
score=getCookie('score');

document.getElementById('score').innerHTML = score;

var button = document.createElement("button");
button.innerHTML = "Retry Level";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function () {
  location.reload();
});
/* 
world.createEntity({
  name: "player",
  shape: "circle",
  radius: .5,
  image: "bird.png",
  imageStretchToFit: true,
  density: 20,
  x: 1,
  onKeyDown: function(e) {
    if (shot_count != 2) return false;
    if (e.keyCode === 32) {
      this.applyImpulse(power,angle);
      shot_count++;
      return false;
    }
    if (e.keyCode === 38) {
      if (angle <= 0) return false;
      angle -= 3;
      real_angle = 90-angle;
      document.getElementById('angle').innerHTML = real_angle;
      return false;
    }
    if (e.keyCode === 40) {
      if (angle >= 90) return false;
      angle += 3;
      real_angle = 90-angle;
      document.getElementById('angle').innerHTML = real_angle;
      return false;
    }
    if (e.keyCode === 37) {
      power -= 5;
      document.getElementById('power').innerHTML = power;
      return false;
    }
    if (e.keyCode === 39) {
      power += 5;
      document.getElementById('power').innerHTML = power;
      return false;
    }
  }

});
*/

// function that synthesizes speech from text
function speak (message) {
  var msg = new SpeechSynthesisUtterance(message)
  var voices = window.speechSynthesis.getVoices()
  msg.voice = voices[0]
  window.speechSynthesis.speak(msg)
}

//create bird
world.createEntity({
  name: "player",
  shape: "circle",
  radius: .5,
  image: "bird.png",
  imageStretchToFit: true,
  density: 20,
  x: 1,
  friction: 100,
  onKeyDown: function(e) {
    //only shoot for the first space bar press
    if (e.keyCode === 82) {
      location.reload()
    }
    if (shot_count != 2) return false;

    //press h for hint
    if (e.keyCode === 72) {
      speak('there are 2 enemies a medium distance away. adjust the angle and power with the arrow keys to aim for the enemies.')
    }

    //shoot on spacebar press
    if (e.keyCode === 32) {
      this.applyImpulse(power,angle);
      shot_count++;
      var that = this
      setTimeout(function () {
        if (enemy_count>0){
          speak('You were close. Click the R key or retry level button to try again')
          that.destroy()
        }
      }, 3000)
      return false;
    }

    //adjust angle down
    if (e.keyCode === 38) {
      if (curr_angle == false){
        speak('angle')
        curr_angle = true;
        curr_power = false;
        return false;
      }
      if (angle <= 0) return false;
      angle -= 3;
      real_angle = 90-angle;
      document.getElementById('angle').innerHTML = real_angle;
      
      //sound decreasing in pitch
      var o = context.createOscillator()
      var  g = context.createGain()
      o.connect(g)
      g.connect(context.destination)
      o.type='sine'
      angle_freq += 30;
      o.frequency.value=angle_freq
      o.start(0)
      g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)

      return false;
    }

    // adjust angle up
    if (e.keyCode === 40) {
      if (curr_angle == false){
        speak('angle')
        curr_angle = true;
        curr_power = false;
        return false;
      }
      if (angle >= 90) return false;
      angle += 3;
      real_angle = 90-angle;
      document.getElementById('angle').innerHTML = real_angle;

      // increase pitch
      var o = context.createOscillator()
      var  g = context.createGain()
      o.connect(g)
      g.connect(context.destination)
      o.type='sine'
      angle_freq -= 30
      o.frequency.value=angle_freq
      o.start(0)
      g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)

      return false;
    }

    //decrease power
    if (e.keyCode === 37) {
      if (curr_power == false){
        speak('power')
        curr_angle = false;
        curr_power = true;
        return false;
      }
      if (power <= 100) return false
      power -= 5;
      document.getElementById('power').innerHTML = power;

      //decrease pitch
      var o = context.createOscillator()
      var  g = context.createGain()
      o.connect(g)
      g.connect(context.destination)
      power_freq -= 30;
      o.frequency.value=power_freq
      o.type='sawtooth'
      o.start(0)
      g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)

      return false;
    }

    // increase power
    if (e.keyCode === 39) {
      if (curr_power == false){
        speak('power')
        curr_angle = false;
        curr_power = true;
        return false;
      }
      if (power >= 400) return false
      power += 5;
      document.getElementById('power').innerHTML = power;

      //increase pitch
      var o = context.createOscillator()
      var  g = context.createGain()
      o.connect(g)
      g.connect(context.destination)
      power_freq += 30;
      o.frequency.value=power_freq
      o.type='sawtooth'
      o.start(0)
      g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)

      return false;
    }
  }

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
  friction: 100,
  onKeyDown: function(e) {
    //only shoot for the first space bar press
    if (e.keyCode === 82) {
      location.reload()
    }
    if (shot_count != 1) return false;

    //press h for hint
    if (e.keyCode === 72) {
      speak('there are 2 enemies a medium distance away. adjust the angle and power with the arrow keys to aim for the enemies.')
    }

    //shoot on spacebar press
    if (e.keyCode === 32) {
      this.applyImpulse(power,angle);
      shot_count++;

      var that = this;
      setTimeout(function () {
        that.destroy()
        }, 4000)
      return false;
    }

    //adjust angle down
    if (e.keyCode === 38) {
      if (curr_angle == false){
        speak('angle')
        curr_angle = true;
        curr_power = false;
        return false;
      }
      if (angle <= 0) return false;
      angle -= 3;
      real_angle = 90-angle;
      document.getElementById('angle').innerHTML = real_angle;
      
      //sound decreasing in pitch
      var o = context.createOscillator()
      var  g = context.createGain()
      o.connect(g)
      g.connect(context.destination)
      o.type='sine'
      angle_freq += 30;
      o.frequency.value=angle_freq
      o.start(0)
      g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)

      return false;
    }

    // adjust angle up
    if (e.keyCode === 40) {
      if (curr_angle == false){
        speak('angle')
        curr_angle = true;
        curr_power = false;
        return false;
      }
      if (angle >= 90) return false;
      angle += 3;
      real_angle = 90-angle;
      document.getElementById('angle').innerHTML = real_angle;

      // increase pitch
      var o = context.createOscillator()
      var  g = context.createGain()
      o.connect(g)
      g.connect(context.destination)
      o.type='sine'
      angle_freq -= 30
      o.frequency.value=angle_freq
      o.start(0)
      g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)

      return false;
    }

    //decrease power
    if (e.keyCode === 37) {
      if (curr_power == false){
        speak('power')
        curr_angle = false;
        curr_power = true;
        return false;
      }
      if (power <= 100) return false
      power -= 5;
      document.getElementById('power').innerHTML = power;

      //decrease pitch
      var o = context.createOscillator()
      var  g = context.createGain()
      o.connect(g)
      g.connect(context.destination)
      power_freq -= 30;
      o.frequency.value=power_freq
      o.type='sawtooth'
      o.start(0)
      g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)

      return false;
    }

    // increase power
    if (e.keyCode === 39) {
      if (curr_power == false){
        speak('power')
        curr_angle = false;
        curr_power = true;
        return false;
      }
      if (power >= 400) return false
      power += 5;
      document.getElementById('power').innerHTML = power;

      //increase pitch
      var o = context.createOscillator()
      var  g = context.createGain()
      o.connect(g)
      g.connect(context.destination)
      power_freq += 30;
      o.frequency.value=power_freq
      o.type='sawtooth'
      o.start(0)
      g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)

      return false;
    }
  }

});

var enemy = {
  name: "enemy",
  shape: "circle",
  onImpact: function(entity, force) {
    if ((entity.name() === "player" || entity.name() === "block") && force>20) {
      this.destroy()
      enemy_count--;

      //make sound when enemy is destroyed
      var o = context.createOscillator()
      var  g = context.createGain()
      o.connect(g)
      g.connect(context.destination)
      o.frequency.value=1200
      o.type='triangle'
      o.start(0)
      g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + .5)

      score = parseInt(score)
      score+=1000;
      document.getElementById('score').innerHTML = score;

      if (enemy_count === 0){
        var button = document.createElement("button");
        button.innerHTML = "Next Level";

        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button);

        button.addEventListener ("click", function() {
        });

        speak('Congratulations! hit enter for the next level')
      }
    }
  }
}

world.createEntity(enemy, {
  radius: .5,
  image: "enemy.png",
  imageStretchToFit: true,
  density: 4,
  x: 16,
  y: 10
});

world.createEntity(enemy, {
  radius: .5,
  image: "enemy.png",
  imageStretchToFit: true,
  density: 4,
  x: 17.5,
  y: 4,
});

world.createEntity({
  name: "ground",
  shape: "square",
  type: "static",
  color: "rgb(0,100,0)",
  width: 20,
  height: 1,
  y: 12,
  friction: 100
});

world.createEntity({
  name: "ground",
  shape: "square",
  type: "static",
  color: "rgb(0,100,0)",
  width: 5,
  height: 1,
  x: 17.5,
  y: 5,
  friction: 100
});

var block = {
  name: "block",
  shape: "square",
  color: "brown",
  width: .5,
  height: 4,
  onImpact: function(entity, force) {
    if (entity.name() === "player") {
      this.color("black");
    }
  }
};

world.createEntity(block, {
  x: 15,
  y: 10
});

world.createEntity(block, {
  x: 17,
  y: 10
});

world.createEntity(block, {
  x: 16,
  y: 8,
  width: 4,
  height: .5
});


function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

