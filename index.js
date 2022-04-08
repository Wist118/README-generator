// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input

const descriptionPrompt = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description explaining the What, Why and How of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use for your project. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    return false;
                }
            } 
        },
        {
            type: 'confirm',
            name: 'confirmCollab',
            message: 'Were there any collaborators on this project?',
            default: true
        },
        {
            type: 'input',
            name: 'collab',
            message: "Please enter the collaborator's first and last name",
            when: ({ confirmCollab }) => confirmCollab
        },
        {
            type: 'input',
            name: 'collabGithub',
            message: "Please enter the collaborator's first and last name",
            when: ({ confirmCollab }) => confirmCollab
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select your project license. (Required)',
            choices: ['ISC', 'MIT', '0BSD', 'Fair', 'UNLICENSED'],
            validate: licenseInput => {
                if (licenseInput) {
                    return true;
                } else {
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username. (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address for additional questions. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your name or display name. (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What sort of testing has your project undergone. (Required)',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    return false;
                }
            } 
        }    
    ]);
};

descriptionPrompt().then(data => {
    fs.writeFile('./README.md', generateMarkdown(data), err => {
        if (err) throw err;
        console.log('Readme complete')
    })
});


// TODO: Create a function to write README file
//descriptionPrompt()
    


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
