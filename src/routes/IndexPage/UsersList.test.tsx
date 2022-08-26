import UserService from "../../services/user.service";

describe("getUsers test", () => {
  it("should return users", async () => {
    //expect user's first name to be "George"
    const user = await UserService.getAllUsers();
    expect(user.data.data).toHaveLength(12);
  });
});
