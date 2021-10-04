song1="";
song2="";
leftwristX="";
leftwristY="";
rightwristX="";
rightwristY="";
function preload(){
song1 = loadSound("baby.mp3");
song2=loadSound("i am rider.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    pose=ml5.poseNet(video,modelloaded);
    pose.on('pose',gotpose);
}
function draw(){
    image(video,0,0,600,500);
    if(rightwristY>0 && rightwristY<=250){
         song1.play();
         song2.stop
    }
    if(rightwristY>250 && rightwristY<=500){
        song2.play();
        song1.stop();
    }
    if(scoreleft>0.2){
        circle(leftwristX,leftwristY,20);
        leftWrist_number=Number(leftwristY);
        floor2=floor(leftWrist_number);
        leftWrist_value=floor2/500;
        document.getElementById("volume").innerHTML="volume"+leftWrist_value;
        song.setVolume(leftWrist_value);
        }
}
function play(){
   song1.play();
}
function modelloaded(){
    console.log('posenet is on');
}
function gotpose(result){
if(result.length>0){
    console.log(result);
   
    leftwristX=result[0].pose.leftWrist.x;
    leftwristY=result[0].pose.leftWrist.y;
    console.log("leftwrist X "+ leftwristX + "leftwrist Y "+ leftwristY);
     
    rightwristX=result[0].pose.rightWrist.x;
    rightwristY=result[0].pose.rightWrist.y;
    console.log("rightwrist x "+ rightwristX + "rightwrist Y "+rightwristY);
}
}