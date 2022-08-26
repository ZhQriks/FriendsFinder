import UserService from "../../services/user.service";

describe("getUsers test", () => {
  it("should return users", async () => {
    //expect user's first name to be "George"
    const user = await UserService.getUser(1);
    expect(user.data.data.first_name).toBe("George");
  });
});
