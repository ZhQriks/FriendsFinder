export default function authHeader() {
  // That's used to get the token from the local storage, but it's not used in the project.

  const user = JSON.parse(localStorage.getItem("user") || "{}");
  if (user && user.accessToken) {
    return { Authorization: "Bearer " + user.accessToken };
  } else {
    return {};
  }
}
