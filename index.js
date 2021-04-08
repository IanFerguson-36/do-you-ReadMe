// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

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
inquirer.prompt(questions).then((answers) => {
  const readMe = `#Title ${questions[0].name}
  #Description ${questions[1].name}
  #Installation Process ${questions[2].name}
  #License ${questions[3].name}
    
    `;
  console.log(readMe);
});
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile("customReadme.md", process.argv[2], (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
