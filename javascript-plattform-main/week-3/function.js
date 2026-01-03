function Person(name) {
    this.name = name;
    setTimeout(()=> {
        console.log(this.name);
    }, 1000);
}
const person = new Person("Nugraha");