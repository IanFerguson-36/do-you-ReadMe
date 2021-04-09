// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
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
    type: "list",
    message: "License?",
    name: "License",
    choices: ["MIT", "Apache", "Boost", "None"],
  },
  {
    type: "input",
    message: "Usage?",
    name: "Usage",
  },
  {
    type: "input",
    message: "Email?",
    name: "Email",
  },
  {
    type: "input",
    message: "Github Profile?",
    name: "Github",
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)

    .then((answers) => {
      const htmlPageContent = generateMarkdown(answers);
      fs.writeFile("customReadMe.md", htmlPageContent, (err) =>
        err ? console.log(err) : console.log("Successfully created ReadMe!")
      );
    });
}

// Function call to initialize app
init();
