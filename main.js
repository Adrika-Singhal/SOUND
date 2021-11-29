function start(){
    navigator.mediaDevices.getUserMedia({audio : true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/9Esw6YoOe/model.json",modelready);
}

function model_ready(){
 classifier.classify(gotresults);
}