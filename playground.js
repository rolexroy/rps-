class Shape{
    constructor(name){
        this.name = name.toLowerCase();  
    }

}
class Figure extends Shape{
    constructor(...args) {
        super(args[0]);
        switch(this.name){
            case "circle":
                this.radius = args[1]
                break;
            case "square":
                this.length = args[1]
                break;
            case "rectangle":
                this.length = args[1];
                this.width = args[2];  
                break;
            case "triangle":
                this.a = args[1];
                this.b = args[2];
                this.c = args[3];
                this.h = args[4];
                break;       
            default:
                this.dimension = 0;
                break;
        }
    }
getArea(){
        if(this.name==="circle"){
            let area = Math.PI * (this.radius ** 2);
            return (Math.PI * (this.radius ** 2)).toFixed(2);;
            // area = area.toFixed(2);
            // return area;
        } else if (this.name === "square"){
            return this.length**2;

        } else if (this.name === "rectangle"){
            return this.length * this.width;

        }
        else if (this.name === "triangle") {
            return this.a * this.h * 0.5;

        }else{
            return `Did not perform operation:`
        }

     }
getPerimeter(){
    if (this.name === "circle") {
        //let area = Math.PI * (this.radius * 2);
       
        // area = area.toFixed(2);
        // return area;
        return (Math.PI * (this.radius * 2)).toFixed(2);
    } else if (this.name === "square") {
        return this.length * 4;

    } else if (this.name === "rectangle") {
        return ((this.length + this.width)*2);

    }
    else if (this.name === "triangle") {
        return this.a + this.b + this.c;

    } else {
        return `Did not perform operation:`
    } 
}     
} 
const figure = new Figure("circle",7);
const figure2 = new Figure("square",5);
const figure3 = new Figure("rectangle",20,10);
const figure4 = new Figure("triangle", 20, 10,10,10);
console.log(figure)
console.log(figure2)
console.log(figure3)
console.log();
console.log(`circle area: ${figure.getArea()}`);
console.log(`square area: ${figure2.getArea()}`);
console.log(`rectangle area: ${figure3.getArea()}`);
console.log(`triangle area: ${figure4.getArea()}`);

console.log(`circle perimeter: ${figure.getPerimeter()}`);
console.log(`square perimeter: ${figure2.getPerimeter()}`);
console.log(`rectangle perimeter: ${figure3.getPerimeter()}`);
console.log(`triangle perimeter: ${figure4.getPerimeter()}`);