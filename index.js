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
    type: "input",
    message: "License?",
    name: "License",
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    // .then((answers) => {
    //   const readMe = `#Title ${questions[0].name}
    // #Description ${questions[1].name}
    // #Installation Process ${questions[2].name}
    // #License ${questions[3].name}`;
    //   console.log(answers);
    // })

    .then((answers) => {
      const htmlPageContent = generateMarkdown(answers);
      fs.writeFile("customReadMe.md", htmlPageContent, (err) =>
        err ? console.log(err) : console.log("Successfully created ReadMe!")
      );
    });
}

// Function call to initialize app
init();
