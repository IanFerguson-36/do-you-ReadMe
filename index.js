// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { fstat } = require("node:fs");
// TODO: Create an array of questions for user input
const questions = [
  inquirer.prompt([
    {
      type: "input",
      message: "What is your title?",
      title: "Title",
    },
    {
      type: "input",
      message: "What is its description?",
      name: "Description",
    },
    {
      type: "input",
      message: "What is the installation process?",
      name: "Install",
    },
    {
      type: "input",
      message: "License?",
      name: "License",
    },
  ]),
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const readMe = `#Title
    ${questions.title}
    `;

  fs.writeFile("customReadme.md", process.argv[2], (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
