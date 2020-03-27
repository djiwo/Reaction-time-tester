function randomMargin() {
        
    return Math.random() * 30+"%";
}


function randomColor() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
    console.log(bgColor);
    return bgColor;

}

function randomHeigthAndWidth (){


    return Math.random()*280+20
}



function createRandomCircleOrSquare() {

    var heigthAndWidth = randomHeigthAndWidth();
    console.log(randomHeigthAndWidth());
    document.getElementById("targetToClick").style.width = heigthAndWidth+"px";
    document.getElementById("targetToClick").style.height = heigthAndWidth+"px";

    var targetColor = randomColor();
    console.log(targetColor);
    document.getElementById("targetToClick").style.background = targetColor;

    var marginTop = randomMargin();
    console.log(randomMargin());
    document.getElementById("targetToClick").style.marginTop = marginTop;

    var marginLeft = randomMargin();
    console.log(randomMargin());
    document.getElementById("targetToClick").style.marginLeft = marginLeft;

    //Make a circle or a square
    console.log (false == true);
    if (Math.random() < 0.5){

        document.getElementById("targetToClick").style.borderRadius = "50%";

    } else{

      document.getElementById("targetToClick").style.borderRadius = "0%";

    }

    

}
var startTime = 0;



document.getElementById("startButton").onclick = function(){

setTimeout(createRandomCircleOrSquare, 200);
startTime = new Date().getTime()+200;

document.getElementById("startButton").style.display = "none";
}



document.getElementById("targetToClick").onclick = function(){

var endTime = new Date().getTime();
var timePassed = (endTime - startTime)/1000;

console.log(timePassed);

document.getElementById("timeSpan").innerHTML = "Your Time: "+timePassed+" seconds."


createRandomCircleOrSquare();
startTime = new Date().getTime();


}