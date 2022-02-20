// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./src/generateMarkdown');
const writeToFile = require('./src/generateREADME')

// Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your GitHub username? (Required)',
            validate: nameinput => {
                if (nameinput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'            
        },
        {
            type: 'input',
            name: 'projectName',
            message: "What is your project's name? (Required)",
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true;
                } else {
                    console.log('Please enter your project name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have? (Check all that apply)',
            choices: ['MIT', 'APACHE 2.0', 'BSD 3', 'None']
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What command should be run to install dependencies?',
            default: 'npm install'
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?',
            default: 'npm test'
        },
        {
            type: 'checkbox',
            name: 'usage',
            message: 'What kind of technologies have been used in this project?',
            choices: ['Node.js','JavaScript', 'jQuerry', 'HTML', 'CSS', 'Bootstrap', 'Bulma', 'Others: ']            
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?'            
        }
    ]).then(projectData => {        
        return projectData;
    });
};

// Function call to initialize app
questions()
.then(projectData => {
    return generateMarkdown(projectData);
})
.then(markdownInfo => {
    return writeToFile(markdownInfo);
})

