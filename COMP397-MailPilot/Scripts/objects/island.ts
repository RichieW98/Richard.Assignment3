﻿module objects {
    // Island Class ++++++++++++++++++++++++++++++++++++++
  
    export class Island extends objects.GameObject {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            super(imageString);

            this.name = "island";
            this.sound = "yay";
            this.dy = 5;
          
            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if island has left screen
            if (this.x < 0 - this.width) {
                this.reset();
            }
        }


        private reset(): void {
            this.y = Math.floor(Math.random() * 480); // start island at random location
            this.x = 680; // start island off stage
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.x -= this.dy; // moves island down the stage
            this.checkBounds();
        }
    }
} 