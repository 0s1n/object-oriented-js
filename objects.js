class User {
  constructor(email, name) {
    this.email = email;
    this.name = name;
    this.score = 0;
  }

  login() {
    console.log(this.email, "just login in");
    return this;
  }

  logout() {
    console.log(this.email, "just logged out");
    return this;
  }

  updateScore() {
    this.score++;
    console.log(this.email, "scored is now", this.score);
    return this;
  }
}

class Admin extends User {
  deleteUser(user) {
    users = users.filter((u) => {
      return u.email != user.email;
    });
  }
}

var userOne = new User("ryu@ninjas.com", "Ryu");
var userTwo = new User("yoshi@mariokorp.com", "Yoshi");
var admin = new Admin("shaun@mariokorp.com", "Shaun");

var users = [userOne, userTwo, admin];

// admin.deleteUser(userTwo);
userOne.deleteUser(admin);

console.log(users);
