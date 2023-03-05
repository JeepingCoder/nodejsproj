// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "What is the title of the project?",
    name: "title",
  },
  {
    type: "input",
    message: "Describe the project.",
    name: "description",
  },
  {
    type: "input",
    message: "How do we install ?",
    name: "installation",
  },
  {
    type: "input",
    message: "How do we use the project?",
    name: "usage",
  },
  {
    type: "list",
    message: "What license are we using",
    name: "license",
    choices: [
      "Apache 2.0 License",
      "The MIT License",
      "Eclipse Public License 1.0",
      "GNU GPL v3",
    ],
  },
  {
    type: "input",
    message: "Who contributed to the project ?",
    name: "contributors",
  },
  {
    type: "checkbox",
    message: "Testing libraries used on this project?  Select all that apply.",
    choices: ["Jest", "Jasmine", "Mocha", "Chai", "None"],
    name: "testing",
  },
  {
    type: "input",
    message: "Who do we contact for questions?",
    name: "questions",
  },
  {
    type: "input",
    message: "What is your github profile link?",
    name: "username",
  },
  {
    type: "input",
    message: "What is your email address",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(
      questions
      /* Pass your questions in here */
    )
    .then((answers) => {
      
      let licenseBadge = generateMarkdown.renderLicenseBadge(answers.license);
      let licenseLink = generateMarkdown.renderLicenseLink(answers.license);
      let licenseSection = generateMarkdown.renderLicenseSection(answers.license);


      let file = generateMarkdown.generateMarkdown(answers, licenseBadge, licenseLink, licenseSection);

      fs.writeFileSync("./utils/README.md", file, {encoding: "utf8"});
      console.log("File created successfully!!");
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
        console.log("Type error");
      } else {
        // Something else went wrong
        console.log("another error occurred");
      }
    });
}

// Function call to initialize app
init();