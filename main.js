img = "";
rightWristX = 0;
wirghtWristY = 0;
paddleX = 325;
paddleY = 325;
  
function preload()
{
	img = loadImage("paddle.png");
}

function setup()
{
  	createCanvas(650,400);
	canvas.center();
  	video = createCapture(VIDEO);
  	video.size(600,300);
  
 	poseNet = ml5.poseNet(video,modelLoaded);
  	poseNet.on('pose', gotPoses);
  
}
function gotPoses(results)
{
  if(results.length > 0)
     {
     noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;
     console.log("noseX = " + noseX + " noseY = " + noseY);
     }
}
function modelLoaded()
{
  console.log("Model is Loaded!!!!!!!!!!!!!!!!!!!!!!")
}
function draw()
{
  background("#FF5964");
    if(noseY < 150){
    paddleY = paddleY - 1;
  }
      if(noseY > 150){
    paddleY = paddleY + 1;
  }
  image(img,paddleX,paddleY,40,70);
}
