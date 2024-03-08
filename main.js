var saveIt = document.getElementById('input').value;

apple="";
function preload()
{
    apple = createVideo('video.mp4');
    apple.hide();
}

function setup()
{
    canvas = createCanvas(480,380);
    canvas.center();  
    
}

Webcam.set({
    width:350,
    height: 300,
    image_format: 'png',
    png_quality:90
});




function draw()
{
    image(video,0,0,480,380);
}

function start()
{
    objectDetector = ml5.objectDetector('cocossd',modelLoaded);
}

function modelLoaded()
{
    console.log("modelLoaded");
    status = "true";
    video.loop()
    video.speed(1)
    video.volume(0)
}


