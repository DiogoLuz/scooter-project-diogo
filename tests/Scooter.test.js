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
  test("Checking if rent method works correctly", () => {
    const scooter = new Scooter("Manhattan", "diogoluz");
    const consoleSpy = jest.spyOn(console, "log");

    scooter.rent();

    expect(consoleSpy).toHaveBeenCalledWith("Enjoy your ride!");
  });
  //rent method
  //dock method
  //requestRepair method
  //charge method
});
