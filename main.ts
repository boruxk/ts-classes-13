interface IDrawable {
    draw(): any;
}

abstract class Shape {
    x: number;
    y: number;
    color: string;

    constructor(x: number, y: number, color: string) {
        this.x = x;
        this.y = y;
        this.color = color;
    }

    abstract displayDetails(): string;

    abstract area(): number;

    abstract circumference(): number;
}

class Circle extends Shape {
    radius: number;

    constructor(x: number, y: number, color: string, radius: number) {
        super(x, y, color);
        this.radius = radius;
    }

    displayDetails(): string {
        return `x: ${this.x} y: ${this.y} color: ${this.color} radius: ${this.radius}`;
    }

    area(): number {
        return Math.PI * Math.pow(this.radius, 2)
    }

    circumference(): number {
        return 2 * Math.PI * this.radius;
    }
}

var cir = new Circle (0,0,"000000",2);
console.log(cir.area());

class Square extends Shape implements IDrawable {
    length: number;
    static draw: any;

    constructor(x: number, y: number, color: string, length: number) {
        super(x, y, color);
        this.length = length;
    }

    displayDetails(): string {
        return `x: ${this.x} y: ${this.y} color: ${this.color} length: ${this.length}`;
    }

    area(): number {
        return Math.pow(this.length, 2)
    }

    circumference(): number {
        return 4 * this.length;
    }

    draw(){
        var main: HTMLElement = document.getElementById("starlet");
        var temp: string = "";

        for (var k = 0; k < this.y-1; k++){
            temp += "<br>"
        }

        for (var i=0;i<this.length; i++){
            temp += "<br>"
            var str = "<span style='color:#fff'>_</span>"
            temp += str.repeat(this.x)
            for (var j=0;j<this.length; j++){
                temp += "<span style='color:#" + this.color + "'>*</span>";
            }
        }
        return main.innerHTML += temp;
    }

}

var square1 = new Square(3,5,"ff0000",10);
square1.draw();
var square2 = new Square(4, 5, "00ff00", 17);
square2.draw();


class Rectangle extends Shape implements IDrawable  {
    width: number;
    height: number;

    constructor(x: number, y: number, color: string, width: number, height: number) {
        super(x, y, color);
        this.width = width;
        this.height = height;
    }

    displayDetails(): string {
        return `x: ${this.x} y: ${this.y} color: ${this.color} width: ${this.width} height: ${this.height}`;
    }

    area(): number {
        return this.width * this.height;
    }

    circumference(): number {
        return (2 * this.width) + (2 * this.height);
    }

    draw() {
        var main: HTMLElement = document.getElementById("starlet");
        var temp: string = "";

        for (var k = 0; k < this.y - 1; k++) {
            temp += "<br>"
        }

        for (var i = 0; i < this.height; i++) {
            temp += "<br>"
            var str = "<span style='color:#fff'>_</span>"
            temp += str.repeat(this.x)
            for (var j = 0; j < this.width; j++) {
                temp += "<span style='color:#" + this.color + "'>*</span>";
            }
        }
        return main.innerHTML += temp;
    }
}

var rectangle1 = new Rectangle(8, 4, "ff0000", 40, 6);
rectangle1.draw();
var rectangle2 = new Rectangle(5, 5, "00ff00", 5, 15);
rectangle2.draw();
