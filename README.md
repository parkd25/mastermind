# Mastermind
The MASTERMIND game randomly generates 4 letters from color alphabets for a player to guess. 
The rules and background information for the boardgame version can be found here: https://en.wikipedia.org/wiki/Mastermind_(board_game)

The function "make_random_code" was used to generate 4 random letters from the list ["A", "G", "B", "Y", "O", "W"]. Then, function "processGuess" was used to automatically convert lowerletters into upper letters so that a player do not have to manually press shift every time. "History" was also created in a timeline format by importing an already created timeline data into javascript. The purpose of history timeline was to display past guesses to the player with feedback for the player to eventually guess the secret code. Submit, Reveal, and Reset buttons were created to perform their functions. My next plan is to possibly incorporate a more colorful UI with color blocks and make the UI visually appealing by using MUI containers.
