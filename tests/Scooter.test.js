const Scooter = require("../src/Scooter");
const User = require("../src/User");

//typeof scooter === object
describe("scooter object", () => {
  test("Checks if scooter is an object", () => {
    const scooter = new Scooter("Manhattan", "diogoluz");
    expect(typeof scooter).toBe("object");
  });
});

//Method tests
describe("scooter methods", () => {
  // tests here!
  //rent method
  //dock method
  //requestRepair method
  //charge method
});
