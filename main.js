noseX = 0;
noseY = 0;

function preload(){
    moustache = loadImage("https://i.postimg.cc/wTgk9Dvj/kisspng-moustache-movember-clip-art-mustache-images-free-5aa99520e1c5c1-7875587015210632009248.png");
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
    }

    function modelLoaded(){
    console.log('PoseNet Is Initialized');
    }
    
    function gotPoses(results)
    {
    
    if(results.length > 0 )
    {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("noseX ="+results[0].pose.nose.x);
    console.log("noseY ="+results[0].pose.nose.y);
    }
    };
    

function draw(){
    image(video,0,0,300,300);
    image(moustache, noseX-48, noseY-7, 100, 80);
}

function take_snapshot()
{
    save('myFilterimage.png');
}