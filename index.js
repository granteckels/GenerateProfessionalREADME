// TODO: Include packages needed for this application
import inquirer from "inquirer";

// TODO: Create an array of questions for user input
const questions = [
  // type: 'input' is default
  {
    name: 'title',
    message: 'Enter the project title:'
  },
  {
    name: 'description',
    message: 'Enter the project description:'
  },
  {
    name: 'installation',
    message: 'Enter the installation instructions:'
  },
  {
    name: 'usage',
    message: 'Enter the usage information:'
  },
  {
    name: 'contribution',
    message: 'Enter instructions about how to contribute:'
  },
  {
    name: 'test',
    message: 'Enter the instructions to test the application:'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select license to use:',
    choices: [
      'Apache License 2.0',
      'BSD 2-Clause "Simplified" License',
      'GNU General Public License v3.0',
      'MIT License',
      'Mozilla Public License 2.0'
    ]
  },
  {
    name: 'githubUsername',
    message: 'Enter your GitHub username:'
  },
  {
    name: 'email',
    message: 'Enter your email address:'
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, '  '));
})