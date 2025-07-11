import fs from "fs/promises";

// promise type
// 3 States: 1. Pending (Loading), 2. Resolved (Success), 3. Rejected (Error)
fs.readFile("data.txt", "utf8")
  .then((data) => {
    // success
    console.log(data);
  })
  .catch((error) => {
    // error
    console.log(error);
  })
  .finally(() => {
    console.log("Final code");
  });

fs.readFile("users.json", "utf8")
  .then((users) => {
    console.log(users);

    return fs.readFile("posts.json", "utf8");
  })
  .then((posts) => {
    console.log(posts);

    return fs.readFile("comments.json", "utf8");
  })
  .then((comments) => console.log(comments))
  .catch((error) => console.log(error));
