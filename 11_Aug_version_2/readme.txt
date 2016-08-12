Game instructions
Select an avatar character by clicking on it.
If you try and click both avatars you will be warned that first player has already been selected.
Place your avatar’s face on a square and try to create three adjacent faces. 

Approach taken
The approach taken was to fill each cell with text being either X or O, with a count function and modulus remainder used to alternate the player.
 
Each move would trigger a function which would check if the player had won the 
game by checking if the text matched in three adjacent cells.

Videos were embedded at the end if a certain player won.

Challenges
The approach I took made it quite easy to create a 3x3 board but I think there would have been difficulties scaling it (as I would have had to lay out all possible winning scenarios). 

I also spent some time struggling with functions embedded within other functions when thinking about how to restart the game. Going through a debugger exercise there and frequently using console logs helped clarify how the code runs – especially how some sections were running just once whereas other event listener functions were running whenever the event was triggered.

Another challenging period was my first real attempt at applying CSS styling. However, once I started paying more attention to the syntax as well as the alignment concepts (display and position) I was able to more quickly style the page.

I also found that reviewing my code the next morning was quite difficult.


