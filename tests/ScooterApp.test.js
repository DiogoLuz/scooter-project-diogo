const Scooter = require("../src/Scooter");
const User = require("../src/User");
const ScooterApp = require("../src/ScooterApp");

// ScooterApp tests here
describe("ScooterApp Tests", () => {
  test("Registering user", () => {
    const user = new User("diogoluz", "1234", "18");

    const scooterApp = new ScooterApp();
    scooterApp.register(user);
  });

  test("Logging in user", () => {
    const user = new User("diogoluz", "1234", "18");

    const scooterApp = new ScooterApp();
    scooterApp.register(user);
    console.log(scooterApp);
    scooterApp.logIn("diogoluz", "1234");
  });
});

// add scooter

// remove scooter
