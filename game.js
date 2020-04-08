enemy_count = 2;
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
document.cookie = "score="+score+'';
var score = document.cookie

var button = document.createElement("button");
button.innerHTML = "Retry Level";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function () {
  location.reload();
});

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
  x: 2,
  onKeyDown: function(e) {
    //only shoot for the first space bar press
    if (e.keyCode === 82) {
      location.reload()
    }
    if (enemy_count === 0) {
      if (e.keyCode === 13) {
        location.replace('index2.html')
      }
    }  
    if (shot_count != 1) return false;

    //press h for hint
    if (e.keyCode === 72) {
      speak('there are 2 enemies a medium distance away. adjust the angle and power with the arrow keys to aim for the enemies.')
    }
    // SOLUTIONS for bird
    if (e.keyCode === 83) {
      speak('Here is the solution to destroy both pigs')
      speak('Hit the 1 key to get the solution')
    }
    if (e.keyCode === 49) {
      speak('One possible solution is power')
      setTimeout(function(){
        var o = context.createOscillator()
        var  g = context.createGain()
        o.connect(g)
        g.connect(context.destination)
        o.frequency.value=650
        o.type='sawtooth'
        o.start(0)
        g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
      },2000)
      
      setTimeout(function(){speak('and angle')},2500)
      setTimeout(function(){
        var o = context.createOscillator()
        var  g = context.createGain()
        o.connect(g)
        g.connect(context.destination)
        o.frequency.value=700
        o.type='sine'
        o.start(0)
        g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
      },3500)
    }

    //shoot on spacebar press
    if (e.keyCode === 32) {
      this.applyImpulse(power,angle);
      shot_count++;
      var that = this
      setTimeout(function () {
        if (enemy_count>0){
          //add if statements to tell where bird is
          if( curr_power==true || curr_angle==true)
          {
            //speak('angle'+angle+'power'+power);
            if (power<=200 && (90-angle) >=60)
            {
              speak('You have not cleared all the pigs. Try decreasing angle.');
            }
            if (power<190 && angle<=33)
            {
              speak('You have not cleared all the pigs. Try increasing the power and angle.');
            }
            if (power>210 && angle==45)
            {
              speak('You may have overshot the pigs. Try decreasing power.');
            }
            if (power<=400 && power>350 && angle>=18)
            {
              speak('You may have overshot the pigs. Try decreasing angle.');
            }
            if (power<=350 && power>300&& angle>=15)
            {
              speak('You may have overshot the pigs. Try decreasing angle.');
            }
            if (power<=300 && power>250 && angle>=24)
            {
              speak('You may have overshot the pigs. Try decreasing angle.');
            }
            if (power==250 && angle>=30)
            {
              speak('You may have overshot the pigs. Try decreasing angle.');
            }
          
          }
          speak('You were close. Click the R key or retry level button to try again')
          
        }
      }, 3000)
      return false;
    }
    changePitch(e)
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

      score = getCookie('score')
      score = parseInt(score);
      score+=1000;
      document.cookie = "score="+score+'';
      document.getElementById('score').innerHTML = score;

      if (enemy_count === 0){
        speak('Congratulations! hit enter for the next level')

        var button = document.createElement("button");
        button.innerHTML = "Next Level";

        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button);

        button.addEventListener ("click", function() {
          location.replace('index2.html')
        });
        
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
});

world.createEntity(enemy, {
  radius: .5,
  image: "enemy.png",
  imageStretchToFit: true,
  density: 4,
  x: 16,
  y: 12,
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
  x: 15
});

world.createEntity(block, {
  x: 17
});

world.createEntity(block, {
  x: 16,
  y: 1,
  width: 4,
  height: .5
});

function changePitch(e){
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

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}