var randomNumber1 = Math.round((5*Math.random())+1);
var imageArray = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var imageArray1 = ["images1/dice1.png","images1/dice2.png","images1/dice3.png","images1/dice4.png","images1/dice5.png","images1/dice6.png"];
document.querySelector(".img1").setAttribute("src",imageArray[randomNumber1-1]);
var randomNumber2 = Math.round((5*Math.random())+1);
document.querySelector(".img2").setAttribute("src",imageArray1[randomNumber2-1]);

// to display outcome message

if(randomNumber1 === randomNumber2)
{
	document.querySelector("h1").innerHTML = "Draw!";
}
else if(randomNumber1 > randomNumber2)
{
	document.querySelector("h1").style.fontSize = "6rem"
	document.querySelector("h1").innerHTML = "🏆 Player 1 Wins!"; 

}
else
{
	document.querySelector("h1").style.fontSize = "6rem"
	document.querySelector("h1").innerHTML = "Player 2 Wins! 🏆";
}
