Webcam.set({
    width: 400,
    height: 400,
    image_format:"png",
    png_quality: 90
})
Webcam.attach("#camera")
function takePic(){
Webcam.snap(function(saved){
document.getElementById("result").innerHTML= "<img id='pic' src=" +saved+ ">"
})}
console.log("ml5 version", ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/K8b1FyVz8/model.json", modelLoaded)
function modelLoaded(){
    console.log("Model has loaded.")
}

function check(){
    img = document.getElementById("pic")
    classifier.classify(img, results)
}
function results(error, result){
    if (error) {
        console.log(error)
    } else {
        console.log(result)
        document.getElementById("object").innerHTML = result[0].label
        document.getElementById("Accuracy").innerHTML = result[0].confidence.toFixed(3)
    }
}