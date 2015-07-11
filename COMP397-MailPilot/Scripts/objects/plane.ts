module objects {
    // Plane Class ++++++++++++++++++++++++++++++++++++++
    export class Plane extends objects.GameObject {

        private bullets: objects.lightbullet[];
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.sound = "engine";
            this.bullets = [];
            this.x = 30;

            this.fire();
            // createjs.Sound.play(this.sound, { "loop": -1 });
            
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {
            this.y = stage.mouseY; // position plane under mouse

            for (var i = 0; i < this.bullets.length; i++) {
                this.bullets[i].update(this.y);
            }
            for (var i = this.bullets.length - 1; i >= 0; i--) {
                if (!this.bullets[i].isAlive()) {
                    this.bullets.splice(i, 1);
                }
            }
            console.log("the y of plane is: "+this.y);
        }

        private fire() {
            console.log("fire");

            for (var i = 0; i < 2; i++) {
                this.bullets.push(
                    new lightbullet(assets.getResult("ammo"), this.x - i * 90, this.y, 9, 0, 600, 500));             
                stage.addChild(this.bullets[i]);
            }

            console.log("bullet count = " + this.bullets.length);
        }
    }
} 