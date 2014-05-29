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
function rollDice()
{
	var dicenum = getRandomNumber(1,2);
	if(dicenum === 1){
	document.getElementById('tails').style.visibility = "hidden";
	document.getElementById('heads').style.visibility = "visible";
	}	
	else {
		document.getElementById('heads').style.visibility = "hidden";
		document.getElementById('tails').style.visibility = "visible";
	}
}
