/* traditional construction function */
/* function Person(fullName, favColor) {
    this.name = fullName;
    this.favColor = favColor;
    this.greet = function () {
        console.log("hello, my name is " + this.name + " and my favourite color is " + this.favColor + ".");
    }
} */

class Person {
    constructor(name, favColor) {
        this.name = name;
        this.favColor = favColor;
    }
    
    greet(){
        console.log("hello, my name is " + this.name + " and my favourite color is " + this.favColor + ".");
    }
}

export default Person;