
enemy_count = 5;
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
score = getCookie('score');
var original_score = score

document.getElementById('score').innerHTML = score;

var button = document.createElement("button");
button.innerHTML = "Retry Level";

var body = document.getElementsByTagName("body")[0];
body.appendChild(button);

button.addEventListener("click", function () {
  document.cookie = "score=" + original_score + '';
  location.reload();
});

// function that synthesizes speech from text
function speak(message) {
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
  onKeyDown: function (e) {
    //only shoot for the first space bar press
    if (e.keyCode === 82) {
      document.cookie = "score=" + original_score + '';
      location.reload()
    }

    if (enemy_count === 0) {
      if (e.keyCode === 13) {
        location.replace('index5.html')
      }
    }  
    if (shot_count != 3) return false;

    //press h for hint
    if (e.keyCode === 72) {
      speak('there are 5 pigs in a line. Each pig is surrounded by two side walls and a top wall. Smash all 5 pigs to beat this round!')
    }

    // SOLUTIONS for bird3
    if (e.keyCode === 83) {
        speak('Here is the solution to smash the pigs using only one bird.');
        speak('Hit the 1 key to get a solution for the level')
    }
    if (e.keyCode === 49) {
        speak('One possible solution is power')
        setTimeout(function () {
          var o = context.createOscillator()
          var g = context.createGain()
          o.connect(g)
          g.connect(context.destination)
          o.frequency.value = 1850
          o.type = 'sawtooth'
          o.start(0)
          g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
        }, 2000)

        setTimeout(function () { speak('and angle') }, 2500)
        setTimeout(function () {
          var o = context.createOscillator()
          var g = context.createGain()
          o.connect(g)
          g.connect(context.destination)
          o.frequency.value = 430
          o.type = 'sine'
          o.start(0)
          g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
        }, 3500)
    }

    //shoot on spacebar press
    if (e.keyCode === 70) {
      this.applyImpulse(power, angle);
      shot_count++;
      var that = this
      setTimeout(function () {
        if (enemy_count > 0) {
          speak('This is a harder level so no feedback will be given. However you can beat all 5 brids with only one bird. Think how to do that. Maybe try maxing out the power level and having a small angle of launch.');
          speak('There is a solution trajectory provided for this level. Press the S key to listen to it.')
          speak('You were close. Click the R key or retry level button to try again');
        }
      }, 3000)
      return false;
    }
    changePitch(e)
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
  onKeyDown: function (e) {
    //only shoot for the first space bar press
    if (e.keyCode === 82) {
      document.cookie = "score=" + original_score + '';
      location.reload()
    }

    if (enemy_count === 0) {
      if (e.keyCode === 13) {
        location.replace('index5.html')
      }
    }  
    if (shot_count != 2) return false;

    //press h for hint
    if (e.keyCode === 72) {
      speak('there are 5 pigs in a line. Each pig is surrounded by two side walls and a top wall. Smash all 5 pigs to beat this round!')
    }

    // SOLUTIONS for bird3
    if (e.keyCode === 83) {
        speak('Here is the solution to smash the pigs using only one bird.');
        speak('Hit the 1 key to get a solution for the level')
    }
    if (e.keyCode === 49) {
        speak('One possible solution is power')
        setTimeout(function () {
          var o = context.createOscillator()
          var g = context.createGain()
          o.connect(g)
          g.connect(context.destination)
          o.frequency.value = 1850
          o.type = 'sawtooth'
          o.start(0)
          g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
        }, 2000)

        setTimeout(function () { speak('and angle') }, 2500)
        setTimeout(function () {
          var o = context.createOscillator()
          var g = context.createGain()
          o.connect(g)
          g.connect(context.destination)
          o.frequency.value = 430
          o.type = 'sine'
          o.start(0)
          g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
        }, 3500)
    }

    //shoot on spacebar press
    if (e.keyCode === 70) {
      this.applyImpulse(power, angle);
      shot_count++;

      var that = this;
      setTimeout(function () {
        that.destroy()
      }, 4000)
      return false;
    }
    changePitch(e)
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
  x: 3,
  friction: 100,
  onKeyDown: function (e) {
    //only shoot for the first space bar press
    if (e.keyCode === 82) {
      document.cookie = "score=" + original_score + '';
      location.reload()
    }

    if (enemy_count === 0) {
      if (e.keyCode === 13) {
        location.replace('index5.html')
      }
    }  

    if (shot_count != 1) return false;

    //press h for hint
    if (e.keyCode === 72) {
      speak('there are 5 pigs in a line. Each pig is surrounded by two side walls and a top wall. Smash all 5 pigs to beat this round!')
    }

    // SOLUTIONS for bird3
    if (e.keyCode === 83) {
        speak('Here is the solution to smash the pigs using only one bird.');
        speak('Hit the 1 key to get a solution for the level')
    }
    if (e.keyCode === 49) {
        speak('One possible solution is power')
        setTimeout(function () {
          var o = context.createOscillator()
          var g = context.createGain()
          o.connect(g)
          g.connect(context.destination)
          o.frequency.value = 1850
          o.type = 'sawtooth'
          o.start(0)
          g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
        }, 2000)

        setTimeout(function () { speak('and angle') }, 2500)
        setTimeout(function () {
          var o = context.createOscillator()
          var g = context.createGain()
          o.connect(g)
          g.connect(context.destination)
          o.frequency.value = 430
          o.type = 'sine'
          o.start(0)
          g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)
        }, 3500)
    }

    //shoot on spacebar press
    if (e.keyCode === 70) {
      this.applyImpulse(power, angle);
      shot_count++;

      var that = this;
      setTimeout(function () {
        that.destroy()
      }, 4000)
      return false;
    }
    changePitch(e)
  }

});

var enemy = {
  name: "enemy",
  shape: "circle",
  onImpact: function (entity, force) {
    if ((entity.name() === "player" || entity.name() === "block") && force > 20) {
      this.destroy()
      enemy_count--;

      //make sound when enemy is destroyed
      var o = context.createOscillator()
      var g = context.createGain()
      o.connect(g)
      g.connect(context.destination)
      o.frequency.value = 1200
      o.type = 'triangle'
      o.start(0)
      g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + .5)

      score = getCookie('score')
      score = parseInt(score)
      score += 1000;
      if (shot_count === 2) {
        score+=500;
      }
      if (shot_count === 3) {
        score+=250;
      }
      document.cookie = "score="+score+'';
      document.getElementById('score').innerHTML = score;

      if (enemy_count === 0) {
        var button = document.createElement("button");
        button.innerHTML = "Next Level";

        var body = document.getElementsByTagName("body")[0];
        body.appendChild(button);

        //update level 5 stuff
        button.addEventListener ("click", function() {
          location.replace('index5.html')
        });

        speak('Congratulations! hit enter for the next level')
      }
    }
  }
}

/* world.createEntity(enemy, {
  radius: .5,
  image: "enemy.png",
  imageStretchToFit: true,
  density: 4,
  x: 16,
  y: 10
}); */


world.createEntity(enemy, {
    radius: .5,
    image: "enemy.png",
    imageStretchToFit: true,
    density: 4,
    x: 10,
  });
  
  world.createEntity(enemy, {
    radius: .5,
    image: "enemy.png",
    imageStretchToFit: true,
    density: 4,
    x: 14,
    
  });

  world.createEntity(enemy, {
    radius: .5,
    image: "enemy.png",
    imageStretchToFit: true,
    density: 4,
    x: 12,
    
  });

  world.createEntity(enemy, {
    radius: .5,
    image: "enemy.png",
    imageStretchToFit: true,
    density: 4,
    x: 8,
    
  });

  world.createEntity(enemy, {
    radius: .5,
    image: "enemy.png",
    imageStretchToFit: true,
    density: 4,
    x: 16,
    
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


  world.createEntity(block, {
    x: 11
  });
  
  world.createEntity(block, {
    x: 13
  });
  
  world.createEntity(block, {
    x: 12,
    y: 1,
    width: 4,
    height: .5
  });

  world.createEntity(block, {
    x: 7
  });
  
  world.createEntity(block, {
    x: 9
  });
  
  world.createEntity(block, {
    x: 8,
    y: 1,
    width: 4,
    height: .5
  });



 



// world.createEntity(enemy, {
//     radius: .5,
//     image: "enemy.png",
//     imageStretchToFit: true,
//     density: 4,
//     x: 17.5,
//     y: 1,
//   });
  
  
//   world.createEntity({
//     name: "ground",
//     shape: "square",
//     type: "static",
//     color: "rgb(0,100,0)",
//     width: 20,
//     height: 1,
//     y: 12,
//     friction: 100
//   });
  
//   world.createEntity({
//     name: "ground",
//     shape: "square",
//     type: "static",
//     color: "rgb(0,100,0)",
//     width: 5,
//     height: 1,
//     x: 17.5,
//     y: 5,
//     friction: 100
//   });
  
//   var block = {
//     name: "block",
//     shape: "square",
//     color: "brown",
//     width: .5,
//     height: 4,
//     onImpact: function(entity, force) {
//       if (entity.name() === "player") {
//         this.color("black");
//       }
//     }
//   };
  
//   world.createEntity(block, {
//     x: 16.5,
//     y: 4
//   });
  
//   world.createEntity(block, {
//     x: 18.5,
//     y: 4
//   });
  
//   world.createEntity(block, {
//     x: 17.5,
//     y: 4,
//     width: 4,
//     height: .5
//   });
  
  /*
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
  x: 16.5,
  y: 4
});

world.createEntity(block, {
  x: 18.5,
  y: 4
});

world.createEntity(block, {
  x: 17.5,
  y: 4,
  width: 4,
  height: .5
});
*/

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
}

function changePitch(e) {
  //adjust angle down
  if (e.keyCode === 38) {
    if (curr_angle == false) {
      speak('angle')
      curr_angle = true;
      curr_power = false;
      return false;
    }
    if (angle <= 0) return false;
    angle -= 3;
    real_angle = 90 - angle;
    document.getElementById('angle').innerHTML = real_angle;

    //sound decreasing in pitch
    var o = context.createOscillator()
    var g = context.createGain()
    o.connect(g)
    g.connect(context.destination)
    o.type = 'sine'
    angle_freq += 30;
    o.frequency.value = angle_freq
    o.start(0)
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)

    return false;
  }

  // adjust angle up
  if (e.keyCode === 40) {
    if (curr_angle == false) {
      speak('angle')
      curr_angle = true;
      curr_power = false;
      return false;
    }
    if (angle >= 90) return false;
    angle += 3;
    real_angle = 90 - angle;
    document.getElementById('angle').innerHTML = real_angle;

    // increase pitch
    var o = context.createOscillator()
    var g = context.createGain()
    o.connect(g)
    g.connect(context.destination)
    o.type = 'sine'
    angle_freq -= 30
    o.frequency.value = angle_freq
    o.start(0)
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)

    return false;
  }

  //decrease power
  if (e.keyCode === 37) {
    if (curr_power == false) {
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
    var g = context.createGain()
    o.connect(g)
    g.connect(context.destination)
    power_freq -= 30;
    o.frequency.value = power_freq
    o.type = 'sawtooth'
    o.start(0)
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)

    return false;
  }

  // increase power
  if (e.keyCode === 39) {
    if (curr_power == false) {
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
    var g = context.createGain()
    o.connect(g)
    g.connect(context.destination)
    power_freq += 30;
    o.frequency.value = power_freq
    o.type = 'sawtooth'
    o.start(0)
    g.gain.exponentialRampToValueAtTime(0.00001, context.currentTime + 1)

    return false;
  }
}