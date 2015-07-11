module objects {
    // Ocean Class ++++++++++++++++++++++++++++++++++++++
    export class Ocean extends createjs.Bitmap {
        // PUBLIC PROPERTIES ++++++++++++++++++++++++++++
        width: number;
        height: number;
        dy: number = 5;
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        constructor(imageString: string) {
            
            super(imageString);
            this.width = this.getBounds().width;
            this.height = this.getBounds().width;
            console.log(this.width);
            //this.scaleX = 2;
            this.reset();
        }

        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        private checkBounds(): void {

            // check if ocean has left screen
            if (this.x == -710) {
                this.reset();
            }
        }


        private reset(): void {
            this.y = 0;
            this.x = 0; // reset ocean off screen
        }


        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        public update(): void {

            this.x -= this.dy; // moves Ocean down the stage
            this.checkBounds();
        }
    }
}  