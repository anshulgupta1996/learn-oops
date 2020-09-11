class User {
  constructor(email_id, phone_number) {
      this.email_id = email_id;
      this.phone_number = phone_number;
  }
  login() {
      console.log("User has logged in");
  }
  logout() {
      console.log("User has logged out");
  }
  placeOrder(items) {
      console.log("User has ordered ", items);
  }
  getUserId() {
      return this.email_id;
  }
}

class Admin extends User {
  constructor(email_id, phone_number, employee_id) {
      super(email_id, phone_number);
      this.employee_id = employee_id;
  }
  addUser(email_id, phone_number) {
      return new User(email_id, phone_number);
  }
  getEmployeeId() {
      return this.employee_id;
  }
}

class Swiggy {
  constructor() {
      this.users = [];
      this.admins = [];
  }
  getAdmin(employee_id) {
      return this.admins.find(admin => admin.getEmployeeId() === employee_id);
  }
  getUser(email_id) {
      return this.users.find(user => user.getEmailId() === email_id);
  }
  createUser(user) {
      this.users.push(user);
  }
  createAdmin(admin) {
      this.admins.push(admin);
  }
}

let app = new Swiggy();
let admin1 = new Admin('Anshul', "Gupta", 12345);
app.createAdmin(admin1);
app.createUser(admin1.addUser("dipu@gmail.com", "98765"));
let current_user = app.getUser("dipu@gmail.com");
current_user.login();
current_user.placeOrder("Samosa");
current_user.logout("Samosa");