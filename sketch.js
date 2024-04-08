//Code and Design by Phong Tran 
//phongmusic.com
//@phongmusic

// recording and general setup variables

var scene1 = [];
var scene2 = [];
var secen3 = [];
var display = [];
var ActiveScene;
var columns;
var rows;
var displayWidth;
var displayHeight;

function preload() {

//load all images 
for (let i = 0; i < 50; i++) {
	var stringI = str(i+1);
	if (i <= 8) {
		scene1[i] = loadImage(`images/kd_carselect_1_0${stringI}.jpg`);
	}

	if (i > 8) {
		scene1[i] = loadImage(`images/kd_carselect_1_${stringI}.jpg`);
	}
	

}

loadArray();


}

// init
function setup() {
	createCanvas(windowWidth, windowHeight);
	//createCanvas(1080, 1080)
	columns = width/scene1[1].width;
	rows = height/scene1[1].height;
	setup_();


}

// control draw
function draw() {

	image(scene1[0], 0, 0);
	draw_();

	


}

/////////////////////////////////////////////////////////////
//sketch globals



//

function setup_() {

	displayWidth = width/columns;
	displayHeight = height/rows;
	console.log(scene1);
	StartArray();
	setInterval(loadArray, 50);

}


//actual draw function
function draw_() {
	//console.log(displayWidth, displayHeight);
	background(50,50,50);
	for (let i = 0; i < columns; i++) {
		for (let j = 0; j < rows; j++) {
			image(display[i][j], i * width/columns, j * height/rows);
		}
	}



}

//gradually update grid into new scene
function loadArray() {

	for (let i = 0; i <= columns; i++) {
		for (let j = 0 ; j <= rows; j++) {
			let rand = int(random(0,3));
			if (rand >1) {
				display[i][j] = random(scene1);
			}
			
		}
			
		}
	
	
		
	
}

function StartArray() {
	for (let i = 0; i <= columns; i++) {
		display[i] = [];
		for (let j = 0 ; j <= rows; j++) {
				display[i][j] = random(scene1);
			}
			
		}
			
		
	
}


//update ActiveScene Variable
function SceneTick() {

}


function timeDelay(seconds) {

}







