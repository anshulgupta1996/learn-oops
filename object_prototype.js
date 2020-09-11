let anshul = {
  first_name: "Anshul"
}

let person = {
  first_name: "default",
  last_name: "default",
  getFullName: function() {
      return this.first_name + " " + this.last_name
  }
}

anshul.__proto__ = person;
console.log(anshul.getFullName());


