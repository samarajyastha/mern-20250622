import fs from "fs";

// Synchronously
// READ
// const result = fs.readFileSync("data.txt", "utf8");
// console.log(result);

// console.log("hello");

// const image = fs.readFileSync("taylor.jpg", "base64");
// console.log(image);

// WRITE
// fs.writeFileSync("myFile.txt", "Hello from the newly created file.");

// UPDATE
// fs.appendFileSync("myFile.txt", "\nOk lets goto next section");

// DELETE
// unlink - removes only the file
// rm (rmSync/rmdirSync) - removes files and folders
// fs.unlinkSync("myFile.txt");
// fs.rmdirSync("test");

// Asynchronously
// fs.readFile("dat.txt", "utf8", (error, data) => {
//   if (error) {
//     console.log(error);

//     return;
//   }

//   console.log(data);
// });

// fs.writeFile("sam.txt", "Write this file", (error, data) => {
//   if (error) {
//     console.log(error);

//     return;
//   }

//   console.log("File has been written successfully.");
// });

// fs.appendFile("sam.txt", "\n This text is appended.", (error, data) => {
//   if (error) {
//     console.log(error);

//     return;
//   }

//   console.log("File has been updated successfully.");
// });

// fs.rm("sam.txt", (error, data) => {
//   if (error) {
//     console.log(error);

//     return;
//   }

//   console.log("File deleted succecssfully");
// });
