// TODO: Include packages needed for this application
const inquirer = require("inquirer")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of the project?",
        name: "title"
    },
    {
        type: "input",
        message: "Describe the project.",
        name: "description"
    },
    {
        type: "input",
        message: "How do we install ?",
        name: "Installation"
    },
    {
        type: "input",
        message: "How do we use the prjoect ?",
        name: "Usage"
    },
    {
        type: "list",
        message: "What license are we using",
        name: "License",
        choices: ["Apache 2.0 License","BSD 3-Clause License","Eclipse Public License 1.0","GNU GPL v3"]
    },
    {
        type: "input",
        message: "Who contributed to the project ?",
        name: "Contributions"
    },
    {
        type: "input",
        message: "How do we test the project ?",
        name: "Testing"
    },
    {
        type: "input",
        message: "Who do we contact for questions?",
        name: "Questions"
    },
      {
        type: "input",
        message: "What is your github profile link?",
        name: "username"
    },
    {
      type: "input",
      message: "What is your email address",
      name: "email"
  },
    

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions
    /* Pass your questions in here */)
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
    switch (answers.role) {
      case "title":
        console.log(answers.title);
        break;

        case "description":
          console.log(answers.description);
        break;


        case "installation":
          console.log(answers.installation);
        
        break;

        case "usage":
        
        break;

        case "license":
        
        break;


        case "contributions":
        
        break;

        case "tests":
        
        break;

        case "questions":
        
        break;

        case "username":
        
        break;

        case "email":
        
        break;
    
    
    
    
    
    
    
      default:
        break;
    }
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
      console.log("Type error");
    } else {
      // Something else went wrong
      console.log("another error v");
    }
  });
}

// Function call to initialize app
init();
