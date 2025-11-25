// Q3 Arrow function this issue
const user = {
  name: "John",
  showName: () => {
    console.log(this.name); // undefined due to lexically scoped this
  }
};
user.showName();

const fixedUser = {
  name: "John",
  showName: function() {
    console.log(this.name);
  }
};
fixedUser.showName();
