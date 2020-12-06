$(document).ready(function ()
{
    var movesUsed = 0;
var wordArray = ["computer","cable","Divine","Source","street","road","cookie","chocolate","christmas","hangman","invader"];
var randomArrayElement = wordArray[Math.floor(Math.random() *wordArray.length)];
$("button#letterCalc").click(calcLetter);

function calcLetter(event)
{
    event.preventDefault();
    //tell jquery to select the text from label and see if its in the word from the array
    $("#letterGuess").data(randomArrayElement);
    if($("#letterGuess").$(this) === randomArrayElement)
    {
        $("#letterSection").slideToggle();
    }
    else
        {
            var retry = "There is no "+ $("#letterGuess").data(randomArrayElement)+ "in"+ randomArrayElement+
                "try again!";
            $("#moveResult").text(retry);
        }

    //if else statement for if its not in the array 6 tries before the game says game over
        if(movesUsed =6)
        {
            var finishedGame  = "Game Over!";
            $("#gameOver").text(finishedGame);
        }
        else
            {
                movesUsed++;
                var remainingMoves = "You have "+ movesUsed + "remaining moves.";
            }
}
});