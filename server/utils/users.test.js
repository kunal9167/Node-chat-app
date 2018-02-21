const expect = require("expect");

const { Users } = require("./users.js");

describe("Users", () => {
  beforeEach(() => {
    users = new Users();
    users.users = [
      {
        id: "1",
        name: "Mike",
        room: "A"
      },
      {
        id: "2",
        name: "Sak",
        room: "B"
      },
      {
        id: "3",
        name: "Kunal",
        room: "B"
      }
    ];
  });

  it("Should add new user", () => {
    var users = new Users();
    var user = {
      id: "123",
      name: "Kunal",
      room: "B"
    };
    var resUser = users.addUser(user.id, user.name, user.room);
    expect(users.users).toEqual([user]);
  });

  it("Should remove a user", () => {
    var userId = "1";
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it("Should not remove user", () => {
    var userId = "99";
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it("Should find user", () => {
    var userId = "2";
    var user = users.getUser(userId);

    expect(user.id).toBe(userId);
  });

  it("Should not find user", () => {
    var userId = "99";
    var user = users.getUser(userId);

    expect(user).toNotExist(undefined);
  });

  it("Should return names for room A", () => {
    var userList = users.getUserList("A");

    expect(userList).toEqual(["Mike"]);
  });

  it("Should return names for room B", () => {
    var userList = users.getUserList("B");

    expect(userList).toEqual(["Sak", "Kunal"]);
  });
});
