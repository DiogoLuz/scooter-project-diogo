class User {
  #password;
  constructor(name, password, age) {
    this.name = name;
    this.#password = password;
    this.age = age;
  }

  get password() {
    return this.#password;
  }
}

module.exports = User;
