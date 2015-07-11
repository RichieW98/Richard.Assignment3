var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Island Class ++++++++++++++++++++++++++++++++++++++
    var bulletno;
    var lightbullet = (function (_super) {
        __extends(lightbullet, _super);
        // CONSTRUCTOR +++++++++++++++++++++++++++++++++++++++++++++
        function lightbullet(imageString, x1, y1, vx, vy, ww, wh) {
            _super.call(this, imageString);
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
        lightbullet.prototype.update = function (y2) {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x + this.size > this.ww || this.alive == false) {
                this.x = 0;
                this.y = y2;
            }
        };
        lightbullet.prototype.isAlive = function () {
            return this.alive;
        };
        lightbullet.prototype.die = function () {
            this.alive = false;
        };
        return lightbullet;
    })(createjs.Bitmap);
    objects.lightbullet = lightbullet;
})(objects || (objects = {}));
//# sourceMappingURL=lightbullet.js.map