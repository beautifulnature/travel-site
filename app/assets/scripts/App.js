import '../styles/styles.css'
// import Person from './modules/Person';
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
// import Modal from './modules/Modal'

new StickyHeader();

new MobileMenu();
new RevealOnScroll(document.querySelectorAll('.feature-item'), 75);
new RevealOnScroll(document.querySelectorAll('.testimonial'), 60);
let modal;

document.querySelectorAll('.open-modal').forEach(el => {
    el.addEventListener('click', e => {
        e.preventDefault();
        if (typeof modal == 'undefined') {
            import(/* webpackChunckName: "modal" */ './modules/Modal').then(x => {
                modal = new x.default();
                setTimeout(() => modal.openTheModal(), 20);
            }).catch(() => console.log('there was a problem.'));
        } else {
            modal.openTheModal();
        }
    })
})

// new Modal();

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