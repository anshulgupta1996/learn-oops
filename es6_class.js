class Person {
  constructor(first_name, last_name) {
      this.first_name = first_name;
      this.last_name = last_name;
  }
  getFullName() {
      return this.first_name + " " + this.last_name;
  }
}

class Indian extends Person {
  constructor(first_name, last_name, aadhar_card_number) {
      super(first_name, last_name);
      this.aadhar_card_number = aadhar_card_number;
  }
  getFullName() {
      return this.last_name + ", " + this.first_name;
  }
}

let anshul = new Indian("Anshul", "Gupta", 12345)
console.log(anshul.getFullName());