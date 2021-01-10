// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of this project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe this project?',
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'How would a new user install this project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is this project to be used for?',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can other developers contribute?',
    },
    {
        type: 'input',
        name: 'testing',
        message: 'How can other developers test this project?',
    },
    {
        type: 'rawlist',
        name: 'license',
        message: 'Which license applies to this project?',
        choices: [
            'Apache 2.0',
            'BSD 2-Clause',
            'BSC 3-Clause',
            'Eclipse 1.0',
            'GPL v2',
            'GPL v3',
            'LGPL v3',
            'MIT',
            'none'
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    }
];

// Function to prompt user for input
function promptUser(questions) {
    return inquirer.prompt(questions);
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
const init = async function() {
    const answers = await promptUser(questions);
    const licenseBadge = generateMarkdown.renderLicenseBadge(license);
    const licenseLink = generateMarkdown.renderLicenseLink(license);
}

// Function call to initialize app
init();
