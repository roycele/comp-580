# comp-580
angry birds game

WARNING: You MUST play on a Chrome browser

Link to demo: https://roycele.github.io/comp-580/

INSTRUCTIONS:

Overview: This is an Angry Birds game that was built for blind kids. You will go through a series of 6 levels and try to accumulate the highest score possible. Using sound pitches, you will try to get a relative idea of the angle and power that you shoot each bird (i.e. a higher pitch is a higher angle and power, and vice versa)

Implementation: There are several features we added to make the game accessible to the kids. It primarily involves keypress events, and we built it specifically to be handled on a Google Chrome browser, so please use that for the correct functioning of the game.

There is a ‘solution’ given in each level that will tell you the correct pitch for angle and power to shoot the bird at to successfully destroy each enemy. Our goal is to help the blind kids associate pitch with changing variables, and help develop a keen sense of hearing different pitches to help them in the real world. See the keypress instructions below.

In the first two levels, after the final bird is fired, and if you did not successfully destroy all of the birds, there is feedback based on that last bird. It will say you might have overshot the enemy pigs or undershot the enemy pigs depending on your angle and power, and make a suggestion to adjust based on those values. However, after those two levels, we want the user to be more dependent on using and adjusting the pitches to be as close as possible to the solution pitches, especially as the levels increase in complexity. Therefore, this feedback will not be there for the final 4 levels.

When a level is loaded, you may press:

H key - hint for the count, distance, and elevation in which the enemy pigs are located

S key- for a description of which number key to press for a ‘solution’ to kill each enemy in the level (e.g. 1 Key will be the solution for the first enemy, 2 key for the second enemy, etc.)

LEFT arrow key- decrease fire power

RIGHT arrow key- increase fire power

DOWN arrow key- decrease fire angle

UP arrow key- increase fire power

(each time you toggle between changing power and changing angle, the program will say aloud which one you are changing)

F key- shoot the bird at the enemies

R key- hit at any time to retry the current level

ENTER key- after completing a level, you may hit the enter key to advance

In addition to keypress events, we’ve added a retry level BUTTON and a next level BUTTON (if successfully completing a level). You may click on these buttons, or use the tab key to select these buttons, then use SPACEBAR or ENTER to click on them.
