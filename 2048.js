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

var move = 0;
var score = 0;
var bouger = false;
var win = 0;
var compteur = 0;
var direction;
var tableau = new Array(
	new Array ("","","",""),
	new Array ("","","",""),
	new Array ("","","",""),
	new Array ("","","",""));

var checkFusion = new Array(
	new Array (0,0,0,0),
	new Array (0,0,0,0),
	new Array (0,0,0,0),
	new Array (0,0,0,0));

 onLoad();
 onLoad();

 function affDir (int)
 {
 	direction = int;
 	déplacer(int);
 }

function reset()
{
	score = 0;
	for (var i = 0; i <= 3; i++)
	{
		for (var j = 0; j <= 3; j++)
		{
			tableau[i][j] = "";
		}
	}
	onLoad();
 	onLoad();
 	affecteVal();
}

function trouveId(ligne, colone){
	if(colone == 0 && ligne == 0)
		return "0";
	else if (ligne == 0 && colone == 1)
		return "1";
	else if (ligne == 0 && colone == 2)
		return "2";
	else if (ligne == 0 && colone == 3)
		return "3";
	else if (ligne == 1 && colone == 0)
		return "4";
	else if (ligne == 1 && colone == 1)
		return "5";
	else if (ligne == 1 && colone == 2)
		return "6";
	else if (ligne == 1 && colone == 3)
		return "7";
	else if (ligne == 2 && colone == 0)
		return "8";
	else if (ligne == 2 && colone == 1)
		return "9";
	else if (ligne == 2 && colone == 2)
		return "10";
	else if (ligne == 2 && colone == 3)
		return "11";
	else if (ligne == 3 && colone == 0)
		return "12";
	else if (ligne == 3 && colone == 1)
		return "13";
	else if (ligne == 3 && colone == 2)
		return "14";
	else if (ligne == 3 && colone == 3)
		return "15";
}


function slide (ligne, colone)
{
	var slideElem = document.getElementById(trouveId(ligne, colone));
	switch (direction)
	{	
		case 40 :
			switch (move)
			{
				case 1:
					slideElem.parentNode.classList.add("slideBottom1");
					window.setTimeout(function(){
						slideElem.parentNode.classList.remove('slideBottom1');
					}, 200);
					break;
				
				case 2:
					slideElem.parentNode.classList.add("slideBottom2");
					window.setTimeout(function(){
						slideElem.parentNode.classList.remove('slideBottom2');
					}, 200);
					break;

				case 3:
					slideElem.parentNode.classList.add("slideBottom3");
					window.setTimeout(function(){
						slideElem.parentNode.classList.remove('slideBottom3');
					}, 200);
					break;
				
				default:
					break;
			}
			break;

		case 39: 
			switch (move)
			{
				case 1:
					slideElem.parentNode.classList.add("slideRight1");
					window.setTimeout(function(){
						slideElem.parentNode.classList.remove('slideRight1');
					}, 200);
					break;
				
				case 2:
					slideElem.parentNode.classList.add("slideRight2");
					window.setTimeout(function(){
						slideElem.parentNode.classList.remove('slideRight2');
					}, 200);
					break;

				case 3:
					slideElem.parentNode.classList.add("slideRight3");
					window.setTimeout(function(){
						slideElem.parentNode.classList.remove('slideRight3');
					}, 200);
					break;
				
				default:
					break;
			}
			break;

		case 38: 
			switch (move)
			{
				case 1:
					slideElem.parentNode.classList.add("slideTop1");
					window.setTimeout(function(){
						slideElem.parentNode.classList.remove('slideTop1');
					}, 200);
					break;
				
				case 2:
					slideElem.parentNode.classList.add("slideTop2");
					window.setTimeout(function(){
						slideElem.parentNode.classList.remove('slideTop2');
					}, 200);
					break;

				case 3:
					slideElem.parentNode.classList.add("slideTop3");
					window.setTimeout(function(){
						slideElem.parentNode.classList.remove('slideTop3');
					}, 200);
					break;
				
				default:
					break;
			}
			break;

		case 37: 
			switch (move)
			{
				case 1:
					slideElem.parentNode.classList.add("slideLeft1");
					window.setTimeout(function(){
						slideElem.parentNode.classList.remove('slideLeft1');
					}, 200);
					break;
				
				case 2:
					slideElem.parentNode.classList.add("slideLeft2");
					window.setTimeout(function(){
						slideElem.parentNode.classList.remove('slideLeft2');
					}, 200);
					break;

				case 3:
					slideElem.parentNode.classList.add("slideLeft3");
					window.setTimeout(function(){
						slideElem.parentNode.classList.remove('slideLeft3');
					}, 200);
					break;
				
				default:
					break;
			}
			break;

		default : 
			break;
	}
}

function bounce(ligne, colone)
{
	var bounceElem = document.getElementById(trouveId(ligne, colone));
	
	window.setTimeout(function(){
		bounceElem.parentNode.classList.add('anime');
	}, 250);
	
	window.setTimeout(function(){
		bounceElem.parentNode.classList.remove('anime');
	}, 500);

}

function affCouleur()
{
	var brique;
	for(var i = "0"; i <= "15"; i++)
	{
		brique = document.getElementById(i);

		switch (brique.innerHTML)
		{
			case "": 
				brique.parentNode.style.backgroundColor = "";
				break;

			case "2":
				brique.parentNode.style.backgroundColor = "#EFECCA";
				break;

			case "4":
				brique.parentNode.style.backgroundColor = "#F6E8B1";
				break;

			case "8":
				brique.parentNode.style.backgroundColor = "#EFB249";
				break;

			case "16":
				brique.parentNode.style.backgroundColor = "#E99400";
				break;

			case "32":
				brique.parentNode.style.backgroundColor = "#EC3E1C";
				break;

			case "64":
				brique.parentNode.style.backgroundColor = "#F00800";
				break;

			case "128":
				brique.parentNode.style.backgroundColor = "#F3F787";
				break;

			case "256":
				brique.parentNode.style.backgroundColor = "#F6FE00";
				break;

			case "512":
				brique.parentNode.style.backgroundColor = "#EDD600";
				break;

			case "1024":
				brique.parentNode.style.backgroundColor = "#EDD600";
				break;

			case "2048":
				brique.parentNode.style.backgroundColor = "#FEE500";
				break;
		}
	}
}

function initFusion()
{
	for (var i = 0; i <= 3; i++)
	{
		for (var j = 0; j <= 3; j++)
		{
			checkFusion[i][j] = 0;
		}
	}	
}

function checkLoose()
{
	var compteur = 0;
	for (var colone = 3; colone >= 0; colone--)
		{
			for (var ligne = 3; ligne >= 0; ligne--)
			{
				if (ligne == 0 && colone != 0)
				{
					if (tableau[ligne][colone] != tableau[ligne][colone - 1])
						compteur++;
				}
				else if (colone == 0 && ligne != 0)
				{
					if (tableau[ligne][colone] != tableau[ligne - 1][colone])
						compteur++;
				}
				else if(ligne != 0 && colone != 0)
				{
					if (tableau[ligne][colone] != tableau[ligne - 1][colone] && tableau[ligne][colone] != tableau[ligne][colone - 1])
					compteur++;
				}
				else if (colone == 0 && ligne == 0)
				{
					if (tableau[ligne][colone] != tableau[ligne + 1][colone] && tableau[ligne][colone] != tableau[ligne][colone + 1])
						compteur++;
				}
			}
		}
		console.log("loose " + compteur);
		return compteur;
}

function loose()
{	
	compteur = 0;
	for (var colone = 3; colone >= 0; colone--)
		{
			for (var ligne = 3; ligne >= 0; ligne--)
			{
				if (tableau[ligne][colone] == 2048 && win == 0)
				{
					win++;
					window.alert("Bravo tu a gagner !!! \n tu as donc le droit de continuer a jouer aha !!!");
				}
				if (tableau[ligne][colone] != "")
					compteur++;
			}
		}
		if (compteur == 16)
		{
			return true;
		}
		else
			return false;
}

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

	document.getElementById("score").innerHTML = 'Score: ' + score;
	affCouleur();

	if(loose())
	{
		if (checkLoose() == 16)
			window.alert("tu as perdu ! \n TRY AGAIN ")
	}
}

function déplacer (direction)
{	
	var temp;
	var monTab;
	move = 0;
	
	initFusion();
	bouger = false;
	if (direction == 40)
	{
		for (var colone = 3; colone >= 0; colone--)
		{
			for (var ligne = 3; ligne >= 0; ligne--)
			{
				while (tableau[ligne][colone] == "" && ligne > 0)
					ligne--;
				if (tableau[ligne][colone] != "")
				{
					temp = tableau[ligne][colone];
					tableau[ligne][colone] = "";
					while(ligne < 3 && tableau[ligne + 1][colone] == ""){
						ligne++;
						move++;
						console.log(ligne);
						bouger = true;
					}
					if (ligne < 3 && tableau[ligne + 1][colone] == temp && checkFusion[ligne + 1][colone] == 0)
					{	
						bouger = true;
						checkFusion[ligne + 1][colone] = 1;
						tableau[ligne + 1][colone] *= 2;
						if (move > 0)
							slide((ligne + 1), colone);
						score += temp * 2;
						temp = "";
						bounce((ligne + 1), colone);
						move = 0;
					}
					else
					{
						if (move > 0)
							slide(ligne, colone);
						tableau[ligne][colone] = temp;
						temp = "";
						move = 0;
					}

				}
			}
		}
		if(!loose() && bouger){
			affecteVal();
			window.setTimeout(function (){onLoad();}, 300);
		}
			
		else
			affecteVal();		
	}

	else if (direction == 38)
	{
		for (var colone = 0; colone <= 3; colone++)
		{
			for (var ligne = 0; ligne <= 3; ligne++)
			{
				while (tableau[ligne][colone] == "" && ligne < 3)
					ligne++;
				if (tableau[ligne][colone] != "")
				{
					temp = tableau[ligne][colone];
					tableau[ligne][colone] = "";
					while(ligne > 0 && tableau[ligne - 1][colone] == ""){
						ligne--;
						move++;
						console.log("move = " + move);
						bouger = true;
					}
					if (ligne > 0 && tableau[ligne - 1][colone] == temp && checkFusion[ligne - 1][colone] == 0)
					{

						bouger = true;
						checkFusion[ligne - 1][colone] = 1;
						tableau[ligne - 1][colone] *= 2;
						if (move > 0)
							slide((ligne - 1), colone);
						score += temp * 2;
						temp = "";
						bounce(ligne - 1, colone);
						move = 0;
					}
					else
					{
						if (move > 0)
							slide(ligne, colone);
						tableau[ligne][colone] = temp;
						temp = "";
						move = 0;
					}
				}
			}
		}
		if(!loose() && bouger){
			affecteVal();
			window.setTimeout(function (){onLoad();}, 300);
		}
		else
			affecteVal();		
	}

	else if (direction == 39)
	{
		for (var colone = 3; colone >= 0; colone--)
		{
			for (var ligne = 3; ligne >= 0; ligne--)
			{
				while (tableau[ligne][colone] == "" && ligne > 0)
					ligne--;
				if (tableau[ligne][colone] != "")
				{
					temp = tableau[ligne][colone];
					tableau[ligne][colone] = "";
					while(colone < 3 && tableau[ligne][colone + 1] == ""){
						colone++;
						move++;
						console.log(ligne);
						bouger = true;
					}
					if (colone < 3 && tableau[ligne][colone + 1] == temp && checkFusion[ligne][colone + 1] == 0)
					{
						bouger = true;
						checkFusion[ligne][colone + 1] = 1;
						tableau[ligne][colone + 1] *= 2;
						if (move > 0)
							slide((ligne), colone + 1);
						score += temp * 2;
						temp = "";
						bounce(ligne, colone + 1);
						move = 0;
					}
					else
					{
						if (move > 0)
							slide(ligne, colone);
						tableau[ligne][colone] = temp;
						temp = "";
						move = 0;
					}
				}
			}
		}
		if(!loose() && bouger){
			affecteVal();
			window.setTimeout(function (){onLoad();}, 300);
		}
		else
			affecteVal();		
	}

	else if (direction == 37)
	{
		for (var colone = 0; colone <= 3; colone++)
		{
			for (var ligne = 0; ligne <= 3; ligne++)
			{
				while (tableau[ligne][colone] == "" && ligne < 3)
					ligne++;
				if (tableau[ligne][colone] != "")
				{
					temp = tableau[ligne][colone];
					tableau[ligne][colone] = "";
					while(colone > 0 && tableau[ligne][colone - 1] == ""){
						colone--;
						move++;
						console.log(ligne);
						bouger = true;
					}
					if (colone > 0 && tableau[ligne][colone - 1] == temp && checkFusion[ligne][colone - 1] == 0)
					{
						bouger = true;
						checkFusion[ligne][colone - 1] = 1;
						tableau[ligne][colone - 1] *= 2;
						if (move > 0)
							slide((ligne), colone - 1);
						score += temp * 2;
						temp = "";
						bounce(ligne, colone - 1);
						move = 0;
					}
					else
					{
						if (move > 0)
							slide(ligne, colone);
						tableau[ligne][colone] = temp;
						temp = "";
						move = 0;
					}
				}
			}
		}
		if(!loose() && bouger){
			affecteVal();
			window.setTimeout(function (){onLoad();}, 300);
		}
		else
			affecteVal();		
	}
	console.log(tableau);
		
}

function onLoad (){
	var i = 0;
	var h = Math.floor(Math.random() * 4);
	var l = Math.floor(Math.random() * 4);
	while (tableau[l][h] != "")
	{
		if(i > 1000)
			return;
		i++;
		console.log("aha load");
		h = Math.floor(Math.random() * 4);
		l = Math.floor(Math.random() * 4);
	}
	
	tableau[l][h] = random();
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
