var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Plane Class ++++++++++++++++++++++++++++++++++++++
    var Plane = (function (_super) {
        __extends(Plane, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Plane(imageString) {
            _super.call(this, imageString);
            this.sound = "engine";
            this.bullets = [];
            this.x = 30;
            this.fire();
            // createjs.Sound.play(this.sound, { "loop": -1 });
        }
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Plane.prototype.update = function () {
            this.y = stage.mouseY; // position plane under mouse
            for (var i = 0; i < this.bullets.length; i++) {
                this.bullets[i].update(this.y);
            }
            for (var i = this.bullets.length - 1; i >= 0; i--) {
                if (!this.bullets[i].isAlive()) {
                    this.bullets.splice(i, 1);
                }
            }
            console.log("the y of plane is: " + this.y);
        };
        Plane.prototype.fire = function () {
            console.log("fire");
            for (var i = 0; i < 2; i++) {
                this.bullets.push(new objects.lightbullet(assets.getResult("ammo"), this.x - i * 90, this.y, 9, 0, 600, 500));
                stage.addChild(this.bullets[i]);
            }
            console.log("bullet count = " + this.bullets.length);
        };
        return Plane;
    })(objects.GameObject);
    objects.Plane = Plane;
})(objects || (objects = {}));
//# sourceMappingURL=plane.js.map