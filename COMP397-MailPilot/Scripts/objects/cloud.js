var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var objects;
(function (objects) {
    // Cloud Class ++++++++++++++++++++++++++++++++++++++
    var Cloud = (function (_super) {
        __extends(Cloud, _super);
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++
        function Cloud(imageString) {
            _super.call(this, imageString);
            this.name = "cloud";
            this.sound = "thunder";
            this.reset();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++
        Cloud.prototype.checkBounds = function () {
            // check if cloud has left screen
            if (this.x < -this.width) {
                this.reset();
            }
        };
        Cloud.prototype.reset = function () {
            this.x = 500 + this.width; // start cloud at random location
            this.y = Math.floor(Math.random() * 480); // start cloud off stage
            this.dy = Math.floor(Math.random() * 4) + Math.floor(Math.random() * -4) + 2;
            this.dx = Math.floor(Math.random() * 4) - 10;
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++
        Cloud.prototype.update = function () {
            this.y += this.dy; // moves cloud down the stage
            this.x += this.dx; // drifts cloud right and left
            this.checkBounds();
        };
        return Cloud;
    })(objects.GameObject);
    objects.Cloud = Cloud;
})(objects || (objects = {}));
//# sourceMappingURL=cloud.js.map