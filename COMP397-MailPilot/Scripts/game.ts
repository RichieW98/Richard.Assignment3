﻿/// <reference path="typings/stats/stats.d.ts" />
/// <reference path="typings/easeljs/easeljs.d.ts" />
/// <reference path="typings/tweenjs/tweenjs.d.ts" />
/// <reference path="typings/soundjs/soundjs.d.ts" />
/// <reference path="typings/preloadjs/preloadjs.d.ts" />

/// <reference path="utility/utility.ts" />

/// <reference path="objects/gameobject.ts" />
/// <reference path="objects/ocean.ts" />
/// <reference path="objects/plane.ts" />
/// <reference path="objects/island.ts" />
/// <reference path="objects/cloud.ts" />
/// <reference path="objects/lightbullet.ts" />

/// <reference path="objects/scoreboard.ts" />


/// <reference path="managers/collision.ts" />
/// <reference path="managers/kill.ts" />


// Game Framework Variables
var canvas = document.getElementById("canvas");
var stage: createjs.Stage;
var stats: Stats;

var assets: createjs.LoadQueue;
var manifest = [
    { id: "ocean", src: "assets/images/ocean.gif" },
    { id: "plane", src: "assets/images/plane.png" },
    { id: "island", src: "assets/images/island.png" },
    { id: "cloud", src: "assets/images/cloud.png" },
    { id: "ammo", src: "assets/images/bullet1.png" },
    { id: "yay", src: "assets/audio/yay.ogg" },
    { id: "thunder", src: "assets/audio/thunder.ogg" },
    { id: "engine", src: "assets/audio/engine.ogg" }
];


// Game Variables
var ocean: objects.Ocean;
var plane: objects.Plane;
var island: objects.Island;
var lightbullet: objects.lightbullet;
var clouds: objects.Cloud[] = [];

var scoreboard: objects.ScoreBoard;

// Game Managers
var collision: managers.Collision;
var kill: managers.kill;


// Preloader Function
function preload() {
    assets = new createjs.LoadQueue();
    assets.installPlugin(createjs.Sound);
    // event listener triggers when assets are completely loaded
    assets.on("complete", init, this); 
    assets.loadManifest(manifest);
    //Setup statistics object
    setupStats();
}

// Callback function that initializes game objects
function init() {
    stage = new createjs.Stage(canvas); // reference to the stage
    stage.enableMouseOver(20);
    createjs.Ticker.setFPS(60); // framerate 60 fps for the game
    // event listener triggers 60 times every second
    createjs.Ticker.on("tick", gameLoop); 

    // calling main game function
    main();
}

// function to setup stat counting
function setupStats() {
    stats = new Stats();
    stats.setMode(0); // set to fps
    
    // align bottom-right
    stats.domElement.style.position = 'absolute';
    stats.domElement.style.left = '650px';
    stats.domElement.style.top = '10px';

    document.body.appendChild(stats.domElement);
}


// Callback function that creates our Main Game Loop - refreshed 60 fps
function gameLoop() {
    stats.begin(); // Begin measuring

    ocean.update();
    plane.update();
    island.update();
    //lightbullet.update(plane);

    for (var cloud = 0; cloud < 3; cloud++) {
        clouds[cloud].update();
        collision.check(clouds[cloud]);
        //kill.check(clouds[cloud]);
    }

    collision.check(island);
    

    scoreboard.update();

    stage.update();

    stats.end(); // end measuring
}


// Our Main Game Function
function main() {
    //add ocean object to stage
    ocean = new objects.Ocean(assets.getResult("ocean"));
    stage.addChild(ocean);

    //add island object to stage
    island = new objects.Island(assets.getResult("island"));
    stage.addChild(island);

    // add plane object to stage
    plane = new objects.Plane(assets.getResult("plane"));
    stage.addChild(plane);

    // add 3 cloud objects to stage
    for (var cloud = 0; cloud < 3; cloud++) {
        clouds[cloud] = new objects.Cloud(assets.getResult("cloud"));
        stage.addChild(clouds[cloud]);
    }


    //add scoreboard
    scoreboard = new objects.ScoreBoard();

    //add collision manager
    collision = new managers.Collision();


}