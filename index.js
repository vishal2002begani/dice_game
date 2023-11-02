var a=Math.random()*6;
var randomNumber1=Math.floor(a)+1;
var image1="images/dice"+randomNumber1+".png";
document.querySelector("img").setAttribute("src",image1);
var b=Math.random()*6;
var randomNumber2=Math.floor(b)+1;
var image2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",image2);
if(randomNumber1>randomNumber2)
{document.querySelector("h1").innerText="🚩Player "+1+" wins !";}
else if(randomNumber1===randomNumber2)
{
    document.querySelector("h1").innerText="🚩Tie !!🚩";
}
else{
    document.querySelector("h1").innerText="🚩Player "+2+" wins !";
}
