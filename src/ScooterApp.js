const User = require("./User");
const Scooter = require("./Scooter");

class ScooterApp {
  static scooterSessions = [];

  constructor() {
    this._stations = {
      Manhattan: [],
      Brooklyn: [],
      Queens: [],
      Bronx: [],
      Statenisland: [],
    };

    this._registeredUsers = {};

    ScooterApp.scooterSessions.push(this);
  }

  get stations() {
    return this._stations;
  }
  get registeredUsers() {
    return this._registeredUsers;
  }

  register(user) {
    if (this._registeredUsers[user.name] === user.name) {
      console.log("already registered!");
    } else {
      if (user.age > 17) {
        this._registeredUsers[user.name] = {
          password: user.password,
          age: user.age,
          loggedIn: false,
          accountChange: 0,
        };

        console.log("user has been registered");
      }
    }
  }

  logIn(username, password) {
    console.log(this._registeredUsers[username]);
    if (
      username in this._registeredUsers &&
      this._registeredUsers[username].password === password
    ) {
      this._registeredUsers[username].loggedIn = true;
      console.log("user has been logged in");
    } else {
      throw new Error("Username and password is not registered.");
    }
  }
}

module.exports = ScooterApp;
