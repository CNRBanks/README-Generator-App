// Imports from third party
const inquirer = require("inquirer");
const fs = require("fs");
const MarkDown = require("./generator/ReadmeGen.js");

console.log("README-generator-app running");

// list/array of questions necessary for README file
const questions = [
  {
    type: "input",
    name: "Username",
    message: "GitHub Username: ",
  },
  {
    type: "input",
    name: "Title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message:
      "What is the project about? Please provide a detailed description of your project here -",
  },
  {
    type: "input",
    name: "Installation",
    message:
      "What dependencies does the user need to install to run this application?",
  },
  {
    type: "input",
    name: "Usage",
    message: "How is the app used? Please provide detailed instructions here -",
  },
  {
    type: "input",
    name: "Contributing",
    message: "Who contributed to this project?",
  },
  {
    type: "input",
    name: "Tests",
    message: "What commands are needed to test this app?",
  },
  {
    type: "input",
    name: "Email",
    message: "Email address: ",
  },
  {
    type: "input",
    name: "Questions",
    message: "Contact Information: ",
  },
  {
    type: "list",
    name: "License",
    message: "License used?",
    choices: ["MIT", "ISC", "None"],
  },
];
// function that writes the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      return console.log(err);
    } else {
      console.log("The README file has been created succesfully!");
    }
  });
}

// function to start app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README-generated.md", MarkDown(data));
    // console.log(data);
  });
}

// starts app
init();
