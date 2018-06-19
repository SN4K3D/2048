var zero = document.getElementById('0');
var one = document.getElementById('1');
var two = document.getElementById('2');
var three = document.getElementById('3');
var four = document.getElementById('4');
var five = document.getElementById('5');
var six = document.getElementById('6');
var seven = document.getElementById('7');
var height = document.getElementById('8');
var nine = document.getElementById('9');
var ten = document.getElementById('10');
var eleven = document.getElementById('11');
var twelve = document.getElementById('12');
var thirty = document.getElementById('13');
var fourteen = document.getElementById('14');
var fifteen = document.getElementById('15');

var direction;
var tableau = new Array(
	new Array ("","","",""),
	new Array ("","","",""),
	new Array ("","","",""),
	new Array ("","","",""),);


function keyPress(e)
{
    console.log(e.which);
    direction = e.which;
    déplacer(direction);

}


function affecteVal()
{
	zero.innerHTML = tableau[0][0];
	one.innerHTML = tableau[0][1];
	two.innerHTML = tableau[0][2];
	three.innerHTML = tableau[0][3];
	four.innerHTML = tableau[1][0];
	five.innerHTML = tableau[1][1];
	six.innerHTML = tableau[1][2];
	seven.innerHTML = tableau[1][3];
	height.innerHTML = tableau[2][0];
	nine.innerHTML = tableau[2][1];
	ten.innerHTML = tableau[2][2];
	eleven.innerHTML = tableau[2][3];
	twelve.innerHTML = tableau[3][0];
	thirty.innerHTML = tableau[3][1];
	fourteen.innerHTML = tableau[3][2];
	fifteen.innerHTML = tableau[3][3];
}

function déplacer (direction)
{	
	var temp;
	
	if (direction == 40)
	{
		for (var colone = 3; colone >= 0; colone--)
		{
			for (var ligne = 3; ligne >= 0; ligne--)
			{
				console.log(ligne);
				console.log(colone);
				while (tableau[ligne][colone] == "" && ligne >= 0)
					ligne--;
				if (tableau[ligne][colone] != "")
				{
					temp = tableau[ligne][colone];
					tableau[ligne][colone] = "";
					while(tableau[ligne][colone] == "" && ligne < 4)
						ligne++;
					tableau[ligne][colone] = temp;
				}

			}
		}
		console.log(tableau)
		affecteVal();

	}
}

function onLoad (){
	console.log("aha")
	tableau[0][1] = random();
	affecteVal();
}

function random () 
{
	var result = 0;
	while (result == 3 || result == 0 || result == 1)
	{		
		result = Math.floor(Math.random() * 5);
	}	
	return result;
}
