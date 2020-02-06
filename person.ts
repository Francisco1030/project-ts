class Person {
    constructor (private name: string, private age: number){ 
        this.name = name;
        this.age = age;
    }
}

let p1 = new Person("Pedro Sales", 20);

console.log(p1);