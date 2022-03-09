import '../styles/styles.css'
// import Person from './modules/Person';
import MobileMenu from './modules/MobileMenu'


let mobileMenu = new MobileMenu();

// alert('The sky is blue');
if (module.hot) {
    module.hot.accept()
}



/* Lesson example below this code */
// console.log('this is a test!');
/* console.log('Hello, my name is john doe and my favourite color is blue.!');
console.log('Hello, my name is jane smith and my favourite color is green.!'); */

/* function person(name, favColor) {
    console.log("Hello, my name is " + name + " and my favourite color is " + favColor + ".");
} */

/* let johnName = "John Doe";
let johnFavColor = "blue"; */

/* better define variables in object */
/* let john = {
    name: "John Doe",
    favColor: "blue"
} */

/* person(johnName, johnFavColor);
person("jane smith", "green"); */

// person(john.name, john.favColor);

/* let john = {
    name: "John Doe",
    favColor: "blue",
    greet: function () {
        console.log("hello, my name is " + john.name + " and my favourite color is " + john.favColor + ".");
    }
}

john.greet(); */

/* Person function defined separtely in its own file */
/* 
function Person(fullName, favColor) {
    this.name = fullName;
    this.favColor = favColor;
    this.greet = function () {
        console.log("hello, my name is " + this.name + " and my favourite color is " + this.favColor + ".");
    }
}
*/
/* class Adult extends Person {
    payTaxes() {
        console.log(this.name + " now owes zero taxes.");
    }
}

let john = new Person("john doe", "blue");
john.greet();

let jane = new Adult("jane smith", "purple");
jane.greet();
jane.payTaxes(); */