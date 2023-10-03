difference=0
rightWristX=0
leftWristX=0
function setup(){
 video=createCapture(VIDEO)
 video.size(600,550)
 canvas=createCanvas(550,500)
  canvas.position(660,150)
  poseNet=ml5.poseNet(video,modelLoaded)
  poseNet.on("pose",gotPoses)
}

function modelLoaded(){
    console.log("Posenet está funcionando.")
}

function gotPoses(results){
    if(results.length>0){
        leftWristX=results[0].pose.leftWrist.x
        rightWristX=results[0].pose.rightWrist.x
        difference=floor(leftWristX-rightWristX)    
    }
  
}

function draw(){
 background("#969A97") 
 textSize(difference) 
 fill("#F90093")
 text("Isadora",50,400)
 docu
}

