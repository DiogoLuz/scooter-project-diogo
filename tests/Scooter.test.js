const Scooter = require("../src/Scooter");
const User = require("../src/User");

//typeof scooter === object
describe("scooter object", () => {
  const scooter = new Scooter("Manhattan", "diogoluz");
  test("Checks if scooter is an object", () => {
    expect(typeof scooter).toBe("object");
  });
});

//Method tests
describe("scooter methods", () => {
  const consoleSpy = jest.spyOn(console, "log");
  const scooter = new Scooter("Manhattan", "diogoluz");
  test("Checking if rent method works correctly", () => {
    scooter.rent();

    expect(consoleSpy).toHaveBeenCalledWith("Enjoy your ride!");
  });
  //rent method
  //dock method
  //requestRepair method
  //charge method
});
