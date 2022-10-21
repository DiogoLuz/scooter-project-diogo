class Scooter {
  #user;
  constructor(station, user) {
    this._station = station;
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
}

module.exports = Scooter;
