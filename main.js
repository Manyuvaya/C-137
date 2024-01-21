video=""
status=""
objects=[]
function preload(){
    video=createVideo("video.mp4")
    video.hide()
}

function setup(){
canvas=createCanvas(480,380)
canvas.center() 

}
function draw(){
    image(video,0,0,480,380)
if(status!=""){
    objectDetector.detect(video,got_result)
    for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="status:objects Detected"
        document.getElementById("objects").innerHTML="No Of Objects Detected Are "+objects.length
        fill("red")
        textSize(18)
        text(objects[i].label,objects[i].x,objects[i].y)
        noFill()
        stroke("blue")
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
    }
}
}
function start(){
    objectDetector=ml5.objectDetector("cocossd",modelLoaded)
    document.getElementById("status").innerHTML="status:Objects Detecting"

}
function modelLoaded(){
    console.log("modelLoaded")
    status=true
    video.loop()
    video.speed(1)
    video.volume(0)
}
function got_result(error,results){
    if(error){
        console.log(error)
    } 
    else{
        console.log(results)
        objects=results
    }

}