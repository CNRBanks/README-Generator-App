const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const MarkDown = require("./util/ReadmeGen.js");

console.log("README-generator-app running");

const questions = [
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
    name: "Table of Contents",
    message: "Table of Contents",
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
    name: "Questions",
    message: "Contact info for any inquiries.",
  },
  {
    type: "input",
    name: "Username",
    message: "What is your GitHub username",
  },
  {
    type: "input",
    name: "Email",
    message: "What is your email address?",
  },
  {
    type: "list",
    name: "License",
    message: "License used?",
    choices: ["MIT", "ISC", "None"],
  },
];
// function to write the README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    console.log(fileName);
    console.log(data);
    if (err) {
      return console.log(err);
    } else {
      console.log("success");
    }
  });
}

// function to start app
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README-generated.md", MarkDown(data));
    console.log(data);
  });
}

// starts app
init();
