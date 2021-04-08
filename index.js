// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const rs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  inquirer.prompt([
    {
      type: "input",
      message: "What is your title?",
      name: "Title",
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
