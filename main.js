function start(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/seCvVPJe4/model.json',modelloaded);
}

function modelloaded(){
    classifier.classify(gotresults);
}

var dog=0;
var cat=0;

function gotresults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()*255)+1;
        g=Math.floor(Math.random()*255)+1;
        b=Math.floor(Math.random()*255)+1;

        document.getElementById("resultlabel").innerHTML='I can Hear '+results[0].label;
        document.getElementById("resultconf").innerHTML='Detected Dog- '+dog+'Detected Cat- '+cat;

        document.getElementById("resultlabel").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("resultconf").style.color="rgb("+r+","+g+","+b+")";

        img1=document.getElementById('alien1');

        if(results[0].label=="barking"){
            img1.src='dog.gif';
            dog=dog+1;
        }

        else if(results[0].label=="meowing"){
            img1.src='meow.gif';
            cat=cat+1;
        }

        else{
            img1.src='we-listen.gif';
        }
    }
}