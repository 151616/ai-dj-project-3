song1 = "";
song2 = "";
song3 = "";
song4 = "";
song5 = "";
song6 = "";
song7 = "";
song8 = "";
song9 = "";
song10 = "";
rightwristx = 0;
rightwristy = 0;
leftwristx = 0;
leftwristy = 0;
scoreleftwrist = 0;
scorerightwrist = 0;
language = 1;
function draw(){
    image(video,0,0,600,500); 
}
function preload(){
    song1 = loadSound("buttabomma.mp3");
    song2 = loadSound("enjoy_enjaami.mp3");
    song3 = loadSound("govyachya_kinaryav.mp3");
    song4 = loadSound("nesha.mp3");
    song5 = loadSound("oporadhi.mp3");
    song6 = loadSound("ramuloo_ramulaa.mp3");
    song7 = loadSound("rowdy_baby.mp3");
    song8 = loadSound("vaaste.mp3");
    song9 = loadSound("zaroori_tha.mp3");
    song10 = loadSound("zingaat.mp3");
}
function setup()
{
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on("pose", gotposes);
}
function modelloaded(){
    console.log("PoseNet is Initialized");
}
function gotposes(results){
    if(results.length > 0){
        scoreleftwrist = results[0].pose.keypoints[9].score;
        scorerightwrist = results[0].pose.keypoints[10].score;
        console.log("Score left wrist = " + scoreleftwrist);
        console.log("Score right wrist = " + scorerightwrist);
        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = "+ leftwristx + "Left Wrist Y = "+ leftwristy);
        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = "+ rightwristx + "Right Wrist Y = " + rightwristy);
    }
}
function next(){
    language = language + 1;
    if(language > 5){
        language = 1;
    }
    console.log(language);
}
function prev(){
    language = language - 1;
    if(language < 1){
        language = 5;
    }
    console.log(language);
}
