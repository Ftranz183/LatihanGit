document.getElementById('header').innerHTML = 'Latihan JavaScript Selesai'

let name = "John";
const age = 30;

document.getElementById('output').innerHTML = name + ' ' + age + '<br />';

let fruits = ["Apple", "Banana", "Mango"];

for(let i = 0; i <= 2; i++) {
    document.getElementById('output').innerHTML += fruits[i] + '<br />';
}

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + ' ' + this.lastName;
    }
}

document.getElementById('output').innerHTML += person.fullName() + '<br />';



function cekNilai() {
    let input =document.getElementById('userInput').value;
    if (input < 10) {
        document.getElementById('output').innerHTML += ' kurang dari 10  <br />';
    } else if (input == 10) {
        document.getElementById('output').innerHTML += ' sama dengan 10 <br />';
    } else {
        document.getElementById('output').innerHTML += ' lebih besar dari 10 <br />';
    }
    
    for(let i=0; i <= input; i++) {
        document.getElementById('output').innerHTML += i + '<br />';
    }
}

function greet(name) {
    return "hello!" + "  " + name
}

let message = greet("john");
document.getElementById('output').innerHTML += message + '<br />';

function calculatesquare(number) {
    return number * number;
}

let number1 = calculatesquare(9);
document.getElementById('output').innerHTML += number1 + '<br />';

let number2 = calculatesquare(7);
document.getElementById('output').innerHTML += number2 + '<br />';

let calculateaddition = (number) => number + number;
document.getElementById('output').innerHTML += calculateaddition(4) + '<br />';

let students = ["alice", "bob", "charlie"]
students.push("Aimar");
students.forEach(students => document.getElementById('output').innerHTML += (students) + "  " );
