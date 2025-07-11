// Callback - function that is used as a parameter
// Generally used in async program
// Higher order function - Function that accepts function as a parameter

import fs from "fs";

fs.readFile("data.txt", "utf8", (error, data) => {
  if (error) return error;

  console.log(data);
});

/**
 * 1. Get users
 * 2. Get posts of the users
 * 3. Get comments of the posts
 */

// Callback hell
fs.readFile("users.json", "utf8", (error, users) => {
  if (error) return console.log(error);

  const userList = JSON.parse(users);

  fs.readFile("posts.json", "utf8", (postError, posts) => {
    if (postError) return console.log(postError);

    const postsList = JSON.parse(posts);

    const result = userList.map((user) => {
      return {
        ...user,
        posts: postsList
          .map((post) => (user.id == post.userId ? post : null))
          .filter(Boolean),
      };
    });

    console.log(result);

    fs.readFile("comments.json", "utf8", (commentError, comments) => {
      if (commentError) return console.log(commentError);

      console.log(comments);
    });
  });
});
