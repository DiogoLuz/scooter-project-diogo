const scooterApp = require("./ScooterApp");

class Scooter {
  #user;
  constructor(station, user) {
    if (station in ScooterApp.stations) {
      this._station = station;
    } else {
      throw new Error("Station does not exist");
    }
    this.#user = user;
    this._serial = Math.floor(Math.random() * 1000);
    this._charge = Math.floor(Math.random() * 1000);
    this._isBroken = false;
    this._docked = true;
  }

  get station() {
    return this._station;
  }

  get user() {
    return this.#user;
  }

  get serial() {
    return this._serial;
  }

  get charge() {
    return this._charge;
  }

  get isBroken() {
    return this._isBroken;
  }

  get docked() {
    return this._docked;
  }

  rent() {
    if (this._isBroken === false && this._charge > 20) {
      this._docked = false;
      console.log("Enjoy your ride!");
    } else if (this._isBroken === false && this._charge <= 20) {
      console.log("Scooter low on battery, please charge");
    } else {
      console.log("Scooter is broken, please send a reqpair request.");
    }
  }
}

module.exports = Scooter;
