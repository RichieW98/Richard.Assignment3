module objects {
    // Island Class ++++++++++++++++++++++++++++++++++++++
    var bulletno;
    export class lightbullet extends createjs.Bitmap{
        private x1: number;
        private y1: number;
        private vx: number;
        private vy: number;
        private size: number;
        private alive: boolean;
        private ww: number;
        private wh: number;
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++
        constructor(imageString: string, x1: number, y1: number, vx: number, vy: number, ww: number, wh: number) {
            super(imageString);
            this.scaleX = 0.1; 
            this.scaleY = 0.1;
            this.x = x1;
            this.y = y1;
            
            this.vx = vx;
            this.vy = vy;
            this.size = 4;
            this.ww = ww;
            this.wh = wh;
            this.alive = true;
        }
        
        // BULLET FROM PLANE OR ENEMIES +++++++++++++++++++++++++++++
        public update(y2: number): void {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x + this.size > this.ww|| this.alive == false) {         
                this.x = 0;
                this.y = y2;
            }
        }

        public isAlive(): boolean {
            return this.alive;
        }

        public die() {
            this.alive = false;
        }
    }
} 