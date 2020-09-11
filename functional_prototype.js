function Person(first_name, last_name) {
  this.first_name = first_name;
  this.last_name = last_name;
}

Person.prototype.getFullName = function() {
  return this.first_name + " " + this.last_name;
}

let anshul = new Person("Anshul", "Gupta");
let dipu = new Person("Dipu", "Saha");
console.log(anshul.getFullName());

Number.prototype.isPositive = function() {
  return this > 0;
}