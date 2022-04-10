function preload() {
	world_start = loadSound("world_start.wav");
	coin = loadSound("coin.wav");
	mario_jump = loadSound("jump.wav");
	mario_die = loadSound("mariodie.wav")
	mario_kick = loadSound("kick.wav");
	gameover = loadSound("gameover.wav");


	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('Canvas');

	instializeInSetup(mario);

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent('Game_console');

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function draw() {
	game();
}

function modelLoaded(){
	console.log("Posenet is initialized");
}

function gotPoses(results){
	if(results.length > 0){
		console.log(results)
		noseX = results[0].pose.nose.x; 
		noseY = results[0].pose.nose.y; 
	}
}








