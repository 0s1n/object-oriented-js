var userOne = {
  email: "1lLp9@example.com",
  name: "John",

  login() {
    console.log(this.email, "Has logged in");
  },

  logout() {
    console.log(this.email, "Has logged out");
  },
};

userOne.login();
userOne.logout();
