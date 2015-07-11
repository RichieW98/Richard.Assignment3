module objects {
    // Cloud Class ++++++++++++++++++++++++++++++++++++++
    export class Cloud extends objects.GameObject {

        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "cloud";
            this.sound = "thunder";

            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if cloud has left screen
            if (this.x < -this.width ) {
                this.reset();
            }
        }


        private reset(): void {
            this.x =  500+this.width; // start cloud at random location
            this.y =  Math.floor(Math.random() * 480); // start cloud off stage
            this.dy = Math.floor(Math.random() * 4) + Math.floor(Math.random() * -4) + 2;
            this.dx = Math.floor(Math.random() * 4) - 10;
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.y += this.dy; // moves cloud down the stage
            this.x += this.dx; // drifts cloud right and left
            this.checkBounds();
        }
    }
}  