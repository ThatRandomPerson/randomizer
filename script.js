function getRandomNumber(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function do_me()
{
    var min = parseInt(document.getElementById("firstnum").value);
    var max = parseInt(document.getElementById("secondnum").value);

    /* make sure min and max are in proper order */
    if( min > max ) {
	var swap = min
	min = max;
	max = swap;
	/* we only updated the variables, show those changes in the page too */
	document.getElementById("firstnum").value = min;
	document.getElementById("secondnum").value = max;
    }

    //returns a number between min and max
    document.getElementById("answer").innerHTML = getRandomNumber(min,max);
}
function flipCoin()
{
	var coinnum = getRandomNumber(1,2);
	if(coinnum === 1){
    		document.getElementById("coinSide").innerHTML = "Heads!";
}	
	else {
    		document.getElementById("coinSide").innerHTML = "Tails!";
	}
}
function rollDice ()
{
	var dicenum = getRandomNumber(1,6);
	if(dicenum === 1) {
		document.getElementById('dice').src = "images/one.png";
	}
	else if(dicenum === 2) {
		document.getElementById('dice').src = "images/two.png";
	}
	else if(dicenum === 3) {
		document.getElementById('dice').src = "images/three.png";
	}
	else if(dicenum === 4) {
		document.getElementById('dice').src = "images/four.png";
	}
	else if(dicenum === 5) {
		document.getElementById('dice').src = "images/five.png";
	}
	else if(dicenum === 6) {
		document.getElementById('dice').src = "images/six.png";
	}
}
