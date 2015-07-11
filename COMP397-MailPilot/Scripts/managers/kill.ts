module managers {
    export class kill {
        constructor() { }
        //PUBLIC METHODS ++++++++++++++++++++++++
        // check the distance between plane and any other game object
        public check(gameObject: objects.GameObject) {
            var p1: createjs.Point = new createjs.Point();
            var p2: createjs.Point = new createjs.Point();

            p1.x = lightbullet.x;
            p1.y = lightbullet.y;

            p2.x = gameObject.x;
            p2.y = gameObject.y;


            if (utility.distance(p1, p2) < ((lightbullet.getBounds().width * 0.5) + (gameObject.getBounds().width * 0.5))) {
                if (gameObject.isColliding == false) {
                    createjs.Sound.play(gameObject.sound);
                    if (gameObject.name == "cloud") {
                        scoreboard.lives--;
                        lightbullet.die();
                        gameObject.x = 900;
                    }
                    if (gameObject.name == "island") {
                        scoreboard.score += 100;
                        lightbullet.die();
                    }
                }
                gameObject.isColliding = true;

            }
            else {
                gameObject.isColliding = false;
            }
        }
    }
}