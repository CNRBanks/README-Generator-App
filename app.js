const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const MarkDown = require("./util/ReadmeGen.js");

console.log("readme-generator running");

const questions = [
  {
    type: "input",
    name: "Title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "Description",
    message: "What is the project about? Please provide a detailed description of your project here -",
  },
  {
    type: "input",
    name: "Table of Contents",
    message: "Table of Contents",
  },
  {
    type: "input",
    name: "Installation",
    message: "What dependencies does the user need to install to run this application?",
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
    filter(val) {
      return val.toUpperCase;
    },
  },
];
// function to write README file
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

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (data) {
    writeToFile("README.md", MarkDown(data));
    console.log(data);
  });
}

// function call to initialize program
init();

// .then(function shiddy(response){
//     var responses = JSON.stringify(response)
//     fs.writeFile('log.txt', responses, (err) =>
//     err ? console.error(err) : console.log('success!'))
// });

/// belongs in package.json
// "scripts": {
//   "start": "node app.js"
// },
