// a game with 4 crystal and random Result
var random_result;
var lose = 0;
var win = 0;
var previous = 0;

// Setters
//Getters

var resetAndStart = function () {

    $(".crystals").empty();
 

    random_result = Math.floor(Math.random() * 102) + 19;


    $("#result").html('Random Result: ' + random_result);

    for(var i = 0; i < 4; i++){
//Every Crystal needs to have a random number between 1 - 12
        var random = Math.floor(Math.random() * 11) + 1;
        
        var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data_random": random,
        });
        // Type in the images
        var image = $("<img src>")
        
        crystal.append('<img src="./images/diamond.jpg"></img>',
         '<img src="./images/emerald.jpg"></img>',
          '<img src="./images/ruby.jpg"></img>', 
          '<img src="./images/sapphire.png"></img>')
    
        
        $(".crystals").append(crystal);

    }

    $("#previous").html("Total Score:" + previous);

}

resetAndStart();

//A new random number should be generate every single time we win or lose
//Event Delegation
$(document).on('click', ".crystal", function () {

  // Until it equals the total score  
    var num = parseInt($(this).attr('data_random')); //turning (this) into a number

    previous += num; //adding numbers

    $("#previous").html("Total Score: "+ previous);

// If it is greater than the Random Result, we decrement a lost counter
    if(previous > random_result){
        
        lose++;

        $("#lose").html("Sorry! Better Luck Next Time: " + lose);

        previous = 0;

        alert("Sorry! Better Luck Next Time");

        resetAndStart();

    }// If it is equal, then we increment a win counter
    else if(previous === random_result){
        
        win++;

        $("#win").html("Congrats! You're A Winner: " + win);

        previous = 0;

        alert("Congrats! You're a Winner");

        resetAndStart();
   
    }

});