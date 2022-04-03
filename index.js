// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./Develop/utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input

const descriptionPrompt = data => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter your project title');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'motivation',
            message: 'What was your motivation? (Required)',
            validate: motivationInput => {
                if (motivationInput) {
                    return true;
                } else {
                    console.log('Please describe your motivation');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'build',
            message: 'Why did you build this project? (Required)',
            validate: buildInput => {
                if (buildInput) {
                    return true;
                } else {
                    console.log('Please describe why you built this project');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'problem',
            message: 'What problem does it solve? (Required)',
            validate: problemInput => {
                if (problemInput) {
                    return true;
                } else {
                    console.log('Please describe what problem your project solves');
                    return false;
                }
            } 
        },
        {
            type: 'confirm',
            name: 'confirmLearn',
            message: 'Did you learn anything new while building this project?',
            default: true
        },
        {
            type: 'input',
            name: 'learnAbout',
            message: 'Provide a description on what you learned.',
            when: ({ confirmLearn }) => confirmLearn
        },
        {
            type: 'input',
            name: 'install',
            message: 'What are the steps required to install your project (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please describe what steps are required to install your project');
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
                    console.log('Please provide instuctions and examples for use of your project');
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
            message: 'Please list collaborators with links to thier GitHub profiles',
            when: ({ confirmCollab }) => confirmCollab
        },
        {
            type: 'confirm',
            name: 'confirmParty',
            message: 'Did you use any third party assets that require attribution?',
            default: true
        },
        {
            type: 'input',
            name: 'party',
            message: 'Please list creators with links to their primary web presence.',
            when: ({ confirmParty }) => confirmParty
        },
        {
            type: 'confirm',
            name: 'confirmTutorial',
            message: 'Did you follow a tutorial to help build your website?',
            default: true
        },
        {
            type: 'input',
            name: 'tutorial',
            message: 'Please include the links to the tutorials',
            when: ({ confirmTutorial }) => confirmTutorial
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
                    console.log('Please chose a license for your project.');
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
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            } 
        }  
    ]);
};

// TODO: Create a function to write README file
descriptionPrompt()
    
fs.writeFile('./README.md', generateMarkdown(data), err => {
    if (err) throw err;
    console.log('Readme complete')
})

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
