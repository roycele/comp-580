# Game: Pitching Angry Birds 
# Royce Le and Omsai Meka

Description: This is an Angry Birds style game that was built for blind kids. It consists of a series of 6 levels and the goal is to accumulate the highest score possible with score based on number of birds used and enemies destroyed. Using sound pitches, the player will try to get a relative idea of the angle and power that they shoot each bird (i.e. a higher pitch is a higher angle/power, and vice versa). There are instructions on the first page of the game. Our goal is to help blind kids associate pitch with changing variables, and help develop a keen sense of hearing different pitches to assist them in differentiating between different sounds in the real world. 

Intended audience: Kids with blindness

Technologies/Frameworks/Libraries: We built this web application using JavaScript and HTML files. Using AudioContext and SpeechSynthesisUtterance we added sound components to the game that made beeping noises and a speech narration of the game. We used source code called BoxBox as the tool for the game physics to work (The link can be found in the works cited below). We also used an open source angry birds game designed by Greg Smith as our basic starting template and expanded our game from there (link below). This game is accessible based on feedback from Web Accessibility Evaluation Tool (WAVE). 

Build/Deploy: We built it using a code-editor (VS Code) and used GitHub as a means of collaborating on the project. It's deployed using GitHub Pages, but must be played on a Google Chrome browser in order to work correctly. The app can be found at: roycele.github.io/comp-580. It will require headphones or speakers of any sort and the user will require a familiarity with the standard QWERTY keyboard. 

Problems encountered: We had trouble deploying on other browsers. Also, we couldn't fix the size of the playing screen, which isn't much of a problem to the visually impaired, but would have been more pleasing for those who could see and are helping out with the game. Sometimes the audio would play upon a page loading, and sometimes it didn't. Also, there was a bug where players could navigate between levels by changing the level number in the local address field. We had to adjust the harshness of the sound for the angle and power changes and had to go through lots of test cases to give appropriate hints to players in beginning levels. Also, we had to understand when to update cookies to keep track of the score throughout the game. 

Future work: Future work would include adding more levels of increasing complexity. That may also include adding different types of birds and different types of enemies. More motion in the playing field would be a cool feature to add like a moving section that would house the enemies. In addition, due to Covid-19 restrictions, the intended audience was not able to play the game, so future work would include more testing with kids with blindness to make sure they're able to fully enjoy the game and continue to debug. 

Works Cited:

We used source code from for the game physics: https://github.com/incompl/boxbox

We used this as the template for the visualization of our game: https://bocoup.com/screencasts/make-your-own-angry-birds




