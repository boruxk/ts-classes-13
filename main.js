var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, color, radius) {
        var _this = _super.call(this, x, y, color) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.displayDetails = function () {
        return "x: " + this.x + " y: " + this.y + " color: " + this.color + " radius: " + this.radius;
    };
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.circumference = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}(Shape));
var cir = new Circle(0, 0, 0xffffff, 2);
console.log(cir.area());
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(x, y, color, length) {
        var _this = _super.call(this, x, y, color) || this;
        _this.length = length;
        return _this;
    }
    Square.prototype.displayDetails = function () {
        return "x: " + this.x + " y: " + this.y + " color: " + this.color + " length: " + this.length;
    };
    Square.prototype.area = function () {
        return Math.pow(this.length, 2);
    };
    Square.prototype.circumference = function () {
        return 4 * this.length;
    };
    Square.prototype.draw = function () {
        var main = document.getElementById("starlet");
        var temp = "";
        for (var k = 0; k < this.y - 1; k++) {
            temp += "<br>";
        }
        for (var i = 0; i < this.length; i++) {
            temp += "<br>";
            var str = "<span style='color:#fff'>_</span>";
            temp += str.repeat(this.x);
            for (var j = 0; j < this.length; j++) {
                temp += "<span style='color:#" + this.color + "'>*</span>";
            }
        }
        return main.innerHTML += temp;
    };
    return Square;
}(Shape));
var square1 = new Square(3, 5, 0xff0000, 10);
square1.draw();
var square2 = new Square(4, 5, 0x004400, 17);
square2.draw();
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(x, y, color, width, height) {
        var _this = _super.call(this, x, y, color) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.displayDetails = function () {
        return "x: " + this.x + " y: " + this.y + " color: " + this.color + " width: " + this.width + " height: " + this.height;
    };
    Rectangle.prototype.area = function () {
        return this.width * this.height;
    };
    Rectangle.prototype.circumference = function () {
        return (2 * this.width) + (2 * this.height);
    };
    Rectangle.prototype.draw = function () {
        var main = document.getElementById("starlet");
        var temp = "";
        for (var k = 0; k < this.y - 1; k++) {
            temp += "<br>";
        }
        for (var i = 0; i < this.height; i++) {
            temp += "<br>";
            var str = "<span style='color:#fff'>_</span>";
            temp += str.repeat(this.x);
            for (var j = 0; j < this.width; j++) {
                temp += "<span style='color:#" + this.color + "'>*</span>";
            }
        }
        return main.innerHTML += temp;
    };
    return Rectangle;
}(Shape));
var rectangle1 = new Rectangle(8, 4, 0xff0000, 40, 6);
rectangle1.draw();
var rectangle2 = new Rectangle(5, 5, 0x004400, 5, 15);
rectangle2.draw();
