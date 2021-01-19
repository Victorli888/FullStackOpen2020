## javascript in general
```javascript
const a = [1,2,3,4]
const b = a.concat(5,6,7)  //Concatenate The concat() method is used to join two or more arrays.

console.log(a[1])  // Prints: 2

a.forEach(index => {    // For each index in array a.
    console.log(index)  // Prints 1 2 3 4 on a new line for each number
})


const c = a.map(value=> value*2)  // The map() method creates a new array with the results of calling a function for every array element.
console.log(c)

const [da,ds,d3,...rest] = b  // Destructing assignment

console.log(da) // 1
let ans = da*3 // 3
console.log(ans)
console.log(rest)

// creating an object literal
const object1 = {
    name: "Dan"
}

object1.age = 12  // add properties using the dot operator
object1['number'] = 8008  // add properties using brackets

const dan_age = object1['age'] // Reference properties using Brackets or with the dot notation


console.log("This is " + object1.name + "\nAge: " + dan_age + "\nID#:" + object1.number)

// Creating Functions
const mult = function(p1, p2) {  // Method 1
    return p1*p2
}

const add = (p1,p2) => {  // Method 2
    return p1+p2
}

function sub(p1,p2) {  // Method 3
    return p1-p2
}

console.log(mult(5,2)) // 10
console.log(add(2,2)) // 4
console.log(sub(10,2)) // 10-2 = 8
```
## Using This
```javascript
const eda = {
    name: "Eda Clawthrone",
    Occupation: "None",
    age: 45,
    threat_level: "High",
    greet: function(){
        console.log("Hi there I am " + this.name)
    },
    doAddition: function(a,b){
        console.log(a+b)
    }
}

function grow_older(age){  // This is a function that will add += 1 to a number
    age += 1;
    return age
}

eda.growOlder = function() {  // This will modify the object literal eda directly
    this.age += 1
}

// object literal functions
eda.greet()  // Hi there I am Eda Clawthrone
eda.doAddition(1,5) // 6

// Using a external function ( external from the object literal )
grow_older(eda.age);
console.log(eda.age);


// Using the This
console.log("This time I'm using the this ")
eda.growOlder()
console.log(eda.age)

// What happens when I set a variable to an Object Literal's Function
const New = eda.greet
New() // Hi there I am undefined

// setTimeout() when calls the method the JS Engine  that actually calls the method and refers "this" to the global object
setTimeout(eda.greet, 1000) // Hi there I am undefined
// Using bind we can preserve our original "this"
setTimeout(eda.greet.bind(eda), 1000) // Hi there I am Eda Clawthrone
```

## Creating Classes in Javascript
```javascript
// Javascript doesn't have class mechanism like other OOP languages, But we have features in JS that can simulate it.

class character{
    constructor(name, age) {
        this.name = name
        this.age = age

    }
    // class defined functions
    greet() {
        console.log("Hello! I am " + this.name)
    }
    birthday(){
        this.age += 1
    }
}

const king = new character("King", 8)
king.greet()
console.log("Three years goes by.... King was " + king.age)
king.birthday()
king.birthday()
king.birthday()
console.log("King is now " + king.age)

```