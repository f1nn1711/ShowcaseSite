var parentDiv = document.getElementById('sketchDiv');
var divWidth = parentDiv.offsetWidth;
var divHeight = parentDiv.offsetHeight;

var carModel;

class Car {
    constructor(x,y,z,angle) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.angle = angle;

        this.model = carModel;
    }
}

function setup() {
    console.log(divWidth)
    console.log(divHeight)
    var canvas = createCanvas(divWidth, divHeight, WEBGL);
    canvas.parent('#sketchDiv');
}

function preload() {
    carModel = loadModel('car_model.obj', true)
}

function draw() {
    background(230);

    camera(
        x=0,
        y=0,
        z=(height/2)/tan(PI/6),
        centerX=0,
        centerY=0,
        centerX=0,
        upX=0,
        upY=1,
        upZ=0
    );

    normalMaterial();
    push();
    rotateX(2.2);
    rotateY(frameCount * 0.01);
    translate(0,50,0);
    model(carModel);
    pop();

    push();
    rotateX(0.64);
    plane(200);
    pop();

    
    
}