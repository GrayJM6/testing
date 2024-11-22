let dog;
let ball;
let platform;

function preload(){
    dog = new Sprite(62,24,32,33);
    dog.spriteSheet = 'pug.png';
    dog.anis.frameDelay = 8;
    dog.addAnis({
        run: {row:1, frames: 3},
        runright: {row:3, frames:3},
        stand: {row:2, frames:3}
    });

    dog.ani = 'run';
    dog.x = 200;
    dog.y = 50;
}

function draw(){
    clear();

    dog.scale = 2;
    if(kb.pressing('d')){
        dog.ani = 'run';
        dog.x += 1;
    }
    if(kb.pressing('a')){
        dog.ani = 'runright';
        dog.x-=1;
    }
    if(kb.presses('space')){
        dog.ani = 'stand'
    }
}

function setup(){
    createCanvas(windowWidth, windowHeight);
    background(255);

    world.gravity.y = 10;

    ball = new Sprite();
    ball.diameter = 100;
    ball.y = 30;

    platform = new Sprite();
    platform.y = 790;
    platform.w = 428;
    platform.h = 5;
    platform.collider = 'static';
    platform.rotation = -7;
    platform.collider = 'k';
    platform.velocity.y = -0.25;
}