# does Javascript is prototype-based language
## OOP


## Object
- collection of props and methods
- toLowerCase, etc. 


## Why use OOP?

## parts of OOP

object literal
- constructor function
- prototypes
- Classes
- Instances(new, this)

## 4 Pillars
Abstraction
Encapsulation
Inheritance
Polymorphism

1. Abstraction
Abstraction means hiding complex implementation details and exposing only necessary functionalities.
In JavaScript, this is achieved using classes, methods, and closures.

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }

    start() {
        console.log(`${this.brand} ${this.model} is starting...`);
    }
}

const myCar = new Car("Toyota", "Corolla");
myCar.start();  // Abstraction: we don’t need to know how start() works internally.


2. Encapsulation
Encapsulation means restricting direct access to some object properties and methods to protect the data.
In JavaScript, we achieve this using private properties (#), getters, and setters.

class BankAccount {
    #balance;  // Private property

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            console.log(`Deposited: $${amount}`);
        }
    }

    getBalance() {
        return this.#balance;  // Controlled access
    }
}

const account = new BankAccount(1000);
account.deposit(500);
console.log(account.getBalance());  // 1500
// console.log(account.#balance);  // ❌ Error: Private field is not accessible


3. 