var hero=document.getElementById('hero');
var obstacle=document.getElementById('obstacle');
let jumpaudio =new Audio('jump.mp3');
let gameOver = new Audio('lose.mp3');

function jump(){
    hero.classList.add('animate');
    setTimeout(function(){
        hero.classList.remove('animate')
        jumpaudio.play();
    },500)
}
var checkStatus = setInterval (function(){

    var herotop =parseInt(window.getComputedStyle(hero).getPropertyValue("top"));

    var obstacleleft  =parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    if(obstacleleft<30 && obstacleleft >0 && herotop >=200 ){
        gameOver.play();
        obstacle.style.animation ="none";
        obstacle.style.display="none";
        alert("You Lose ☹😲");

        setTimeout(function(){location.reload()},1000)

    }
}
    ,10)