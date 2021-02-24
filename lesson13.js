//Inheritance
class Animal{
    constructor(animalName){
        this.animalName = animalName; 
    }
    greet() {
        return `I am ${this.animalName}`
    }
   
}
const animal1 = new Animal('Max');
// console.log(animal1.greet());
class Dog extends Animal{
    constructor(animalName,age){
        super(animalName);
        this.age = age;
    
    }
    getHumanAge(){
        return this.age * 7 ;
    }
    info(){
        return `I am ${this.animalName} my human age is ${this.getHumanAge()}`
    }

}
const dog1 = new Dog('max',3);

console.log(dog1.greet());
console.log(dog1.info());
//console.log(animal1.info());
