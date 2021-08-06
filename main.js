function setup()
{
     canvas=createCanvas(550,500)
     canvas.position(560,100)

     video=createCapture(550,550)
     video.size(560,500)

     poseNet=ml5.poseNet('pose', modelLoaded)
     poseNet.on('pose', gotPoses)
}

function draw()
{
    background('red');
}

function modelLoaded()
{
    console.log("Posenet is initialised")
}

function gotPoses(results)
{
 if(results.length>0)
 {
     console.log(results);
 }
}